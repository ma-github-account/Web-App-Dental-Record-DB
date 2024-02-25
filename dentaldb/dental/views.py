from django.shortcuts import render, get_object_or_404
from .models import Patient


def patients_list(request):
	
	patient = None
	patients = Patient.objects.all()
	return render(request, 'dental/patient/list.html', {'patient': patient, 'patients': patients})

def patient_detail(request, id):

	patient = get_object_or_404(Patient, id=id)
	return render(request, 'dental/patient/detail.html', {'patient': patient})





