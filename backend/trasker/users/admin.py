from django.contrib import admin
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.models import Group
from users.models import CourseUser, LessonUser, ProfessionUser, User


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


class CourseUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'date')
    search_fields = ('user',)


class LessonUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'lesson', 'date')
    search_fields = ('user',)


class ProfessionUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'profession')
    search_fields = ('user',)


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
admin.site.register(CourseUser, CourseUserAdmin)
admin.site.register(LessonUser, LessonUserAdmin)
admin.site.register(ProfessionUser, ProfessionUserAdmin)
