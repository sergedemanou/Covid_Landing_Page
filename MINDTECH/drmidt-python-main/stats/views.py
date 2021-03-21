from rest_framework import viewsets
from .models import Local_stat
from .serializers import Local_statSerializer


class Dept_chartView(viewsets.ModelViewSet):
    queryset = Local_stat.objects.all().order_by('department')
    serializer_class = Local_statSerializer
    http_method_names = ['get']
