from rest_framework import routers
from core import views as core_views
from news import views as news_views
from request import views as request_views
from category import views as category_views
from status import views as status_views
from role import views as role_views
from core.api import RegistrationAPI, LoginAPI, UserAPI
from django.conf.urls import url, include

router = routers.DefaultRouter()

router.register(r'news', news_views.NewsViewSet)
router.register(r'requests', request_views.RequestViewSet)
router.register(r'users', core_views.UserViewSet)
router.register(r'categories', category_views.CategoryViewSet)
router.register(r'statuses', status_views.StatusViewSet)
router.register(r'roles', role_views.RoleViewSet)
router.register(r'session', core_views.SessionUserViewSet, base_name='session')

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
]
# urlpatterns = [
#      url(r'auth/login/', LoginView.as_view(), name='knox_login'),
#      # url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
#      # url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
# ]