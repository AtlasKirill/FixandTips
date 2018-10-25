"""fixandtips URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from core import views as core_views
from news import views as news_views
from request import views as request_views
from category import views as category_views
from status import views as status_views
from role import views as role_views
from fixandtips import index

router = routers.DefaultRouter()

router.register(r'news', news_views.NewsViewSet)
router.register(r'requests', request_views.RequestViewSet)
router.register(r'users', core_views.UserViewSet)
router.register(r'categories', category_views.CategoryViewSet)
router.register(r'statuses', status_views.StatusViewSet)
router.register(r'roles', role_views.RoleViewSet)
router.register(r'session', core_views.SessionUserViewSet, base_name='session')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^$', index.index, name='index_page'),
    url(r'^.*?/$', index.index),
]
