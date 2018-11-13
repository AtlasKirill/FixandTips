# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from core.models import User
from core.serializers import UserSerializer
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

class SessionUserViewSet(viewsets.ViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    def list(self, request):
        if request.method == 'GET':
            queryset = User.objects.filter(id=request.user.id).first()
            serializer = UserSerializer(self.request.user)
            return Response(serializer.data)
        return HttpResponse(status=404)



