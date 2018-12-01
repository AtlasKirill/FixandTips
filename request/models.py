# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from status.models import Status
from core.models import AuthoredMixin, BaseModel, CategorizableMixin

class Request(BaseModel, AuthoredMixin, CategorizableMixin):

    description = models.TextField()
    urgency = models.BooleanField(default=False)
    status = models.CharField(max_length=255)
    materials = models.TextField()
    is_shown = models.BooleanField(default=True)


    def get_author(self):

        return self.author

