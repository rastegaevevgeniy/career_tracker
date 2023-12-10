from api.views import TrackerViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('tracker', TrackerViewSet, basename='trackers')


urlpatterns = [
    path('', include(router.urls))
]
