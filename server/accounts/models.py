"""
Account models
"""
from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    """
    Custom User Account
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.CharField(max_length=100, blank=True, null=True)
