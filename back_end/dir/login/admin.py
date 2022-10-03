from django.contrib import admin
from login.models import Login
# Register your models here.

@admin.register(Login)
class LoginAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'url')
