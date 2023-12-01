from django.urls import include, path
from rest_framework.routers import DefaultRouter

#from api.views import Name

router = DefaultRouter()
#router.register('name', Name, basename='name')


urlpatterns = [
    path('', include(router.urls))
]
