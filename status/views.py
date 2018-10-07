# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from status.models import Status
from status.serializers import StatusSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class StatusViewSet(viewsets.ModelViewSet):

    serializer_class = StatusSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = Status.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
