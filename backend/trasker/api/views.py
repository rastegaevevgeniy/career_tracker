from api.serializers import TrackerSerializer
from rest_framework import viewsets
from users.models import User

user = User.objects.filter(id=1)


class TrackerViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = user
    serializer_class = TrackerSerializer

    def get_serializer_context(self):
        context = super(TrackerViewSet, self).get_serializer_context()
        context.update({'user': user})
        return context
