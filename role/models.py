# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from core.models import BaseModel,TitledMixin


class Role(BaseModel, TitledMixin):

    def get_title(self):

        return self.title

