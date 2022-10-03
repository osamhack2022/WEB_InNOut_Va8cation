from django.views.generic import ListView, DetailView
from login.models import Login

class LoginLV(ListView):
    model = Login

class LoginDV(DetailView):
    model = Login
