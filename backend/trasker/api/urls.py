# from django.urls import include, path
# from rest_framework.routers import DefaultRouter

# #from api.views import Name

# router = DefaultRouter()
# #router.register('name', Name, basename='name')


# urlpatterns = [
#     path('', include(router.urls))
# ]

from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet , SomeListAPIView

app_name = 'api'

router = DefaultRouter()

router.register('users', UserViewSet, basename='users')
# router.register('tracker', ProfessionListAPIView.as_view(), basename='professions')

urlpatterns = [
    path('', include(router.urls)),
    # path('', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.authtoken')),
    path('tracker/', SomeListAPIView.as_view(), name='tracker'),
    path('tracker/recomendations/', SomeListAPIView.as_view(), name='recomendations'),
    path('tracker/progress/', SomeListAPIView.as_view(), name='progress'),
    path('tracker/skills/', SomeListAPIView.as_view(), name='skills')
]
