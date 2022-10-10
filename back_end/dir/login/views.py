from django.shortcuts import render
from django.http import HttpResponse
import pyrebase 

from django.views.generic import ListView, DetailView
from login.models import Login



def index(request):
    return HttpResponse("Login Index.")

    
class LoginLV(ListView):
    model = Login

class LoginDV(DetailView):
    model = Login
