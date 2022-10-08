from django.shortcuts import render
from django.http import HttpResponse

from django.views.generic import ListView, DetailView
from login.models import Login


def index(request):
    return HttpResponse("Login Index.")

    
def detail(request, question_id):
    return HttpResponse("Okay %s." % question_id)

class LoginLV(ListView):
    model = Login

class LoginDV(DetailView):
    model = Login
