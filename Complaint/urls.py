from django.urls import path
from . import views


urlpatterns = [
    path('api/',views.ComplaintList.as_view(),name='api'),
    path('api/pastcomplaint/',views.PastComplaintList.as_view(),name='apipast'),
    path('api/pastcomplaint/<int:pk>/',views.PastComplaintDetail.as_view(),name='apipastdetail')
]