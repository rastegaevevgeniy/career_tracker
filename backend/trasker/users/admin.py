from django.contrib import admin
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.models import Group

from users.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email', 'first_name', 'last_name')
    search_fields = ('username', 'email')

    def save_model(self, request, obj, form, change):
        user_database = User.objects.get(pk=obj.pk)
        if not (check_password(form.data['password'],
                               user_database.password) or user_database.
                password == form.data['password']):
            obj.password = make_password(obj.password)
        else:
            obj.password = user_database.password
        super().save_model(request, obj, form, change)


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
