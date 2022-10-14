from django.urls import path
from login.views import LoginLV, LoginDV

app_name = 'login'
urlpatterns = [
    path('', LoginLV.as_view(), name='index'),
    path('<int:pk>/', LoginDV.as_view(), name='detail'),
]

