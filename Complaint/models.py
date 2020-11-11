from django.db import models
from Account.models import User_info

class Complaint(models.Model):
    author = models.ForeignKey(User_info, on_delete=models.CASCADE) 
    Category   =  models.CharField(max_length=100)
    description = models.TextField(blank=True) 
    latitude = models.DecimalField(max_digits=20, decimal_places=20)
    longitude = models.DecimalField(max_digits=20, decimal_places=20)

