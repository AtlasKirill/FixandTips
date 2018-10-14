# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from status.models import Status
from core.models import AuthoredMixin, BaseModel, CategorizableMixin

class Request(BaseModel, AuthoredMixin, CategorizableMixin):

    description = models.TextField()
    urgency = models.BooleanField(default=False)
    status = models.ForeignKey(Status)
    materials = models.TextField()


    def get_author(self):

        return self.author

