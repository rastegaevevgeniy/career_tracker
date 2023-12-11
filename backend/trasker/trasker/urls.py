from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import (SpectacularAPIView, SpectacularRedocView,
                                   SpectacularSwaggerView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'),
         name='redoc'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'),
         name='docs'),
    path('api/', include('api.urls')),
    path('api/', include('users.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
