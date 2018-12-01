# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from news.models import News
from core.models import User
from news.serializers import NewsSerializer
from knox.auth import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from django.core.mail import send_mail
from django.conf import settings

class NewsViewSet(viewsets.ModelViewSet):

    serializer_class = NewsSerializer
    authentication_classes = (TokenAuthentication,)
    queryset = News.objects.all().order_by('-created_at')
    # queryset = Post.objects.select_related(
    #     'author', 'blog__author',
    # ).order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', )

    def perform_create(self, serializer):
        recipient_list = []
        subject = 'Коммендант опубликовал новость'
        message = 'Для ознакомления с новостью пройдите по ссылке: fixandtips.ru '
        email_from = settings.EMAIL_HOST_USER
        for user in User.objects.filter(role=1):
            recipient_list.append(user.email)
        send_mail(subject, message, email_from, recipient_list)
        serializer.save(author=self.request.user)
