from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from datetime import datetime

class User_info_Manager(BaseUserManager):
    def create_user(self,email,password=None,**extraa_fields):
        if not email:
            raise ValueError("Users must have an email.")

        if not name:
            raise ValueError("Users must have a name.")

        user = self.model(
            email = self.normalize_email(email),
            **extraa_fields,
        )

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,email,password,**extraa_fields):
        user = self.create_user(
            email = self.normalize_email(email),
            password=password,
            **extraa_fields,
        )
        user.is_staff=True 

        user.save(using=self._db)
        return user



class User_info(AbstractBaseUser):
    email       =  models.EmailField(verbose_name="email", max_length=100,unique=True)
    first_name  =  models.CharField(max_length=100,blank=True)
    last_name   =  models.CharField(max_length=100,blank=True)
    is_employee =  models.BooleanField(default=False)
    is_active   =  models.BooleanField(default=True)
    is_staff    =  models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','is_employee']

    objects = User_info_Manager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.first_name








