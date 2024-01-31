from django.contrib import admin
from django.urls import path
from users import views

urlpatterns = [
    path('authenticate', views.decider,  name = 'authenticate'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
]