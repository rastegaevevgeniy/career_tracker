# from djoser.views import UserViewSet
# from rest_framework import status
# from rest_framework.decorators import action
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.response import Response

# from users.models import User
# from users.serializers import (SetPasswordSerializer, UserCreateSerializer,
#                                UserReadSerializer)


# class UserViewSet(UserViewSet):
#     """Вьюсет для кастомной модели пользователя."""
#     queryset = User.objects.all()
#     permission_classes = [AllowAny, ]

#     def get_serializer_class(self):
#         if self.action in ('list', 'retrieve'):
#             return UserReadSerializer
#         return UserCreateSerializer

#     @action(
#         detail=False,
#         methods=['post'],
#         permission_classes=[IsAuthenticated],
#     )
#     def set_password(self, request):
#         """Смена пароля"""
#         serializer = SetPasswordSerializer(data=request.data,
#                                            context={"request": request})
#         serializer.is_valid(raise_exception=True)
#         user = request.user
#         user.set_password(serializer.data['new_password'])
#         user.save()
#         return Response('Пароль успешно обновлен',
#                         status=status.HTTP_201_CREATED)
