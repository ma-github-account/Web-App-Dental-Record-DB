from django.shortcuts import render
from dental.models import Patient
from .serializers import PatientSerializer
from rest_framework import viewsets, filters




class PatientsViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer