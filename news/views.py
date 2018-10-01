# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from news.models import News
from news.serializers import NewsSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# from django_filters.rest_framework import DjangoFilterBackend

class NewsViewSet(viewsets.ModelViewSet):

    serializer_class = NewsSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = News.objects.all()
    # queryset = Post.objects.select_related(
    #     'author', 'blog__author',
    # ).order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    # filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)