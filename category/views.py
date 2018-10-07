# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from category.models import Category
from category.serializers import CategorySerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# from django_filters.rest_framework import DjangoFilterBackend

class CategoryViewSet(viewsets.ModelViewSet):

    serializer_class = CategorySerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = Category.objects.all()
    # queryset = Post.objects.select_related(
    #     'author', 'blog__author',
    # ).order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    # filter_backends = (DjangoFilterBackend,)
    # filter_fields = ('author', )

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)