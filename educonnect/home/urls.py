from django.contrib import admin
from django.urls import path
from home import views 

urlpatterns = [
    path("", views.index, name = 'home'),
    path("dashboard", views.dashboard, name = 'dashboard'),
    path("courses", views.courses, name = 'courses'),
    path("notdone", views.pleasebepatient, name = 'pleasebepatient'),
    
]
#urlpatterns = [ path("about", views.about, name = 'about') ]
#urlpatterns = [ path("contact", views.contact, name = 'contact') ]
#urlpatterns = [ path("login", views.login, name = 'login') ]
#urlpatterns = [ path('', views.index, name = '') ]