# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from core.models import User
from core.serializers import UserSerializer
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
