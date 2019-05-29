from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet

router = DefaultRouter()
router.register(r'user', UserProfileViewSet)

urlpatterns = [
    path('', include('django.contrib.auth.urls')),    # Used for password reset
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('auth/', include('rest_auth.urls')),
    path('account/', include('allauth.urls')),
    path('', include(router.urls)),
]
