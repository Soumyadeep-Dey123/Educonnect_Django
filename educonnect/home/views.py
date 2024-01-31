from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, "index.html")

def dashboard(request):
    return render(request, "dashboard.html")

def courses(request):
    return render(request, "courses.html")

def pleasebepatient(request):
    return render(request, "workinprog.html")