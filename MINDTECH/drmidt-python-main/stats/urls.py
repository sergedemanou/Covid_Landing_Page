from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('chartstats', views.Dept_chartView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", views.Dept_chartView),
    path("stats/", views.Dept_chartView),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]