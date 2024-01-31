from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.core.mail import EmailMessage, send_mail
from educonnect import settings
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth import authenticate, login, logout
from . tokens import generate_token

# Create your views here.
from django.contrib.auth import authenticate, login, logout
from . tokens import generate_token

def decider(request):
    if request.method == "POST":
        if request.POST.get('username'):
            signup(request)
            return HttpResponse("Signup successful")
        elif request.POST.get('email'):
            login(request)
            if user is not None:
                username = user.username
                messages.success(request, "Logged In Sucessfully!!")
                return HttpResponse("Login successful")
            else:
                return HttpResponse("Login failed")

def signup(request):
    if request.method == "POST":
        # if request.POST.get('username'):
            username = request.POST['username']
            # fname = request.POST['fname']
            # lname = request.POST['lname']
            email = request.POST['email']
            pass1 = request.POST['pass1']
            pass2 = request.POST['pass2']
        
            if User.objects.filter(username=username):
                messages.error(request, "Username already exist! Please try some other username.")
                return redirect('/')
        
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email Already Registered!!")
                return redirect('/')
            
            if len(username)>20:
                messages.error(request, "Username must be under 20 charcters!!")
                return redirect('/')
            
            if pass1 != pass2:
                messages.error(request, "Passwords didn't matched!!")
                return redirect('/')
            
            if not username.isalnum():
                messages.error(request, "Username must be Alpha-Numeric!!")
                return redirect('/')
            
            myuser = User.objects.create_user(username, email, pass1)
            myuser.username = username
            myuser.is_active = False
            myuser.save()
            messages.success(request, "Your Account has been created succesfully!! Please check your email to confirm your email address in order to activate your account.")
            
            # Welcome Email
            subject = "Welcome to EduSphere!!"
            message = "Hello " + myuser.username + "!! \n" + "\nThank you for visiting our website\n. We have also sent you a confirmation email, please confirm your email address."        
            from_email = settings.EMAIL_HOST_USER
            to_list = [myuser.email]
            send_mail(subject, message, from_email, to_list, fail_silently=False)
            
            # Email Address Confirmation Email
            current_site = get_current_site(request)
            email_subject = "Confirm your Email @ EduSphere Login!!"
            message2 = render_to_string('email_confirmation.html',{
                
                'name': myuser.username,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
                'token': generate_token.make_token(myuser)
            })
            email = EmailMessage(
            email_subject,
            message2,
            settings.EMAIL_HOST_USER,
            [myuser.email],
            )
            email.fail_silently = False
            email.send()
            
            return redirect('signin')          
            
    return redirect('notdone')

def activate(request,uidb64,token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except (TypeError,ValueError,OverflowError,User.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser,token):
        myuser.is_active = True
        # user.profile.signup_confirmation = True
        myuser.save()
        login(request,myuser)
        messages.success(request, "Your Account has been activated!!")
        return redirect('signin')
    else:
        return redirect(request,'notdone')


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        pass1 = request.POST['pass1']
        
        user = authenticate(email=email, password=pass1)
        
        # if user is not None:
        #     login(request, user)
        #     username = user.username
        #     # messages.success(request, "Logged In Sucessfully!!")
        #     return render(request, "index.html",{"username":username})
        # else:
        #     messages.error(request, "Bad Credentials!!")
        #     return redirect('/')
        return user
    
    return render(request, "index.html")


def signout(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!!")
    return redirect('/')

#make differernt methods for login, signup etc and the control them via decider method