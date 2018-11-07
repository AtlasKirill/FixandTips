# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class BaseModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True

class AuthoredMixin(models.Model):

    author = models.ForeignKey(settings.AUTH_USER_MODEL)

    class Meta:
        abstract = True

class TitledMixin(models.Model):

    title = models.CharField(max_length=255)

    class Meta:
        abstract = True

class CategorizableMixin(models.Model):

    # category = models.ForeignKey('category.Category')
    category = models.CharField(max_length=255)

    class Meta:
        abstract = True

class User(AbstractUser):

    email = models.EmailField(max_length=255)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    faculty = models.CharField(max_length=255)
    group_num = models.IntegerField(default = 1)
    phone = models.CharField(max_length=255)
    vk = models.CharField(max_length=255)
    flat = models.IntegerField(default=0)
    gender = models.CharField(max_length=1)
    avatar = models.ImageField()
    role = models.ForeignKey('role.Role', default=1)

    def get_username(self):
        return self.username

