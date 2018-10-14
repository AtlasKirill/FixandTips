# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from core.models import  AuthoredMixin, BaseModel, TitledMixin

class News(BaseModel, AuthoredMixin, TitledMixin):

    text = models.TextField()

    def get_author(self):

        return self.author

