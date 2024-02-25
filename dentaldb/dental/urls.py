from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


app_name = 'dental'
urlpatterns = [

	path('', views.patients_list, name='patients_list'),
	path('<int:id>/', views.patient_detail, name='patient_detail')

]

if settings.DEBUG:
	
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)































