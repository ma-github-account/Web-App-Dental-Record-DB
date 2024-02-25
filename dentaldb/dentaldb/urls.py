from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from dental import urls as dental_urls
from api import urls as api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dental/', include(dental_urls)),
    path('api/', include(api_urls)),
]

