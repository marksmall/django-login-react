"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include

from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls

from rest_framework_swagger.views import get_swagger_view

from .views import InitView

from django.http import HttpResponse, JsonResponse

import logging
logger = logging.getLogger(__name__)
logger.info('GORT HEREEEEEEEEEE')
print("OKAUY PRINT STATEMENT")


def logging_func(request):
    logger.info("LOGGING FUNC")
    print("LOG FUNCTION PRINT BUGGER GOT HERE")
    return JsonResponse({"title": "My Title"})


router = DefaultRouter()

swagger_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    path('mark/', logging_func),
    path('api/', include(router.urls)),
    path('api/', include('accounts.urls')),
    path('admin/', admin.site.urls),
    path('swagger/', swagger_view),
    path('docs/', include_docs_urls(title='API Documentation')),
    path('', InitView.as_view(), name="index"),
    re_path(
        r'^.*/$', InitView.as_view(),
        name="index"),    # Pass-through any unknown requests to the client.
]
