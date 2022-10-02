from django.db import models


class Login(models.Model):
    title = models.CharField('TITLE it\'s title!', max_length=100, blank=True)
    url = models.URLField('URL it\'s url!', unique=True)

def __str__(self):
    return self.title
