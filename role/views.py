# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from role.models import Role
from role.serializers import RoleSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class RoleViewSet(viewsets.ModelViewSet):

    serializer_class = RoleSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = Role.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
