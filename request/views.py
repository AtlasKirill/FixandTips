# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from request.models import Request
from request.serializers import RequestSerializer
from knox.auth import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters
import django_filters


CATEGORY_CHOICES = (
    ('Плотник','Плотник'),
    ('Сантехник','Сантехник'),
    ('Электрик','Электрик'),
    ('Хим обработка','Хим обработка'),
    ('Другое','Другое'),
)

class RequestFilter(filters.FilterSet):

    from_date = django_filters.DateTimeFilter(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ',],field_name="created_at", lookup_expr='gte')
    to_date = django_filters.DateTimeFilter(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ',],field_name="created_at", lookup_expr='lte')
    category = django_filters.MultipleChoiceFilter(choices= CATEGORY_CHOICES)

    class Meta:
        model = Request
        fields = ['author','status','category','urgency', 'from_date','to_date','created_at']


class RequestViewSet(viewsets.ModelViewSet):

    serializer_class = RequestSerializer
    authentication_classes = (TokenAuthentication,)
    queryset = Request.objects.all().order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated,)
    filter_backends = (DjangoFilterBackend,)
    filter_class = RequestFilter

    def perform_create(self, serializer):
        print (self.request.user.id)
        serializer.save(author=self.request.user)
#
#