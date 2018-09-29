# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings

from core.models import  AuthoredMixin, BaseModel, CategorizableMixin

class Request(BaseModel, AuthoredMixin, CategorizableMixin):

    description = models.TextField()
    importance = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    materials = models.TextField()
    performer = models.ForeignKey(settings.AUTH_USER_MODEL)

    def get_author(self):

        return self.author

