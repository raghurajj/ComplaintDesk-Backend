from django.shortcuts import render
from Complaint.models import Complaint
from Complaint.serializers import ComplaintSerializer
from rest_framework import generics,mixins
from rest_framework import permissions
from django.shortcuts import get_object_or_404

class ComplaintList(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()


    def get(self,request):
        return self.list(request)

    def post(self,request):
        return self.create(request)

class PastComplaintList(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    serializer_class = ComplaintSerializer
    


    def get_queryset(self):
        queryset = Complaint.objects.all().filter(author=self.request.user.id)
        # print(queryset[0].pk)
        return queryset

    def get(self,request):
        return self.list(request)



class PastComplaintDetail(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    serializer_class = ComplaintSerializer

    def get_queryset(self):
        pk = pk=self.kwargs['pk']
        queryset = Complaint.objects.all().filter(pk=pk)
        return queryset

    def get(self,request,pk):
        return self.list(request,pk)

