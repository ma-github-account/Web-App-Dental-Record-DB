from django.db import models
from django.urls import reverse


class Status(models.TextChoices):
    Healthy = "Healthy"
    Cavities = "Cavities"
    Chipped = "Chipped"
    Crooked = "Crooked"
    Gingivitis = "Gingivitis"

class Patient(models.Model):

	name = models.CharField(max_length=45, db_index=True)
	tooth1 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth2 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth3 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth4 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth5 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth6 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth7 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth8 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth9 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth10 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth11 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth12 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth13 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth14 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth15 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth16 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth17 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth18 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth19 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth20 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth21 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth22 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth23 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth24 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth25 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth26 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth27 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth28 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth29 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth30 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth31 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")
	tooth32 = models.CharField(max_length=45, choices=Status.choices, default="Healthy")

	class Meta:
	
		ordering = ('name',)
		verbose_name = 'patient'
		verbose_name_plural = 'patients'
	
	def __str__(self):
	
		return self.name
	
	def get_absolute_url(self):
	
		return reverse('dental:patient_detail', args=[self.id])
