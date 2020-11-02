from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from datetime import datetime



class User_info_Manager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if not email:
            raise ValueError("Users must have an email.")

        if not name:
            raise ValueError("Users must have a name.")

        user = self.model(
            email = self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self,email,name,password):
        user = self.create_user(
            email = self.normalize_email(email),
            password=password,
            name=name,
        )
        user.is_staff=True 

        user.save(using=self._db)
        return user



class User_info(AbstractBaseUser):
    email       =  models.EmailField(verbose_name="email", max_length=100,unique=True)
    name        =  models.CharField(max_length=100,blank=True)
    is_employee =  models.BooleanField(default=False)
    # id_card     =  models.ImageField()
    is_active   =  models.BooleanField(default=True)
    is_staff    =  models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = User_info_Manager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.name








