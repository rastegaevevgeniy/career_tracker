from django.contrib import admin

from professions.models import (Course, CourseSkill, Lesson, Profession,
                                ProfessionCourse, ProfessionSkill,
                                RecruitmentCompany, Skill,
                                DirectionTraining, Vacancy, VacancySkill)


class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


class DirectionTrainingAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'direction_training',
                    'course_cost_full', 'course_per_month', 'link_course')
    search_fields = ('name', 'direction_training')
    list_filter = ('name',)


class CourseSkillAdmin(admin.ModelAdmin):
    list_display = ('course', 'skill')
    list_filter = ('course',)


class LessonAdmin(admin.ModelAdmin):
    list_display = ('name', 'duration_training', 'course')
    search_fields = ('name',)
    list_filter = ('name',)


class ProfessionAdmin(admin.ModelAdmin):
    list_display = ('name', 'level', 'salary',)
    search_fields = ('name',)
    list_filter = ('name',)


class ProfessionSkillAdmin(admin.ModelAdmin):
    list_display = ('profession', 'skill')
    list_filter = ('profession',)


class ProfessionCourseAdmin(admin.ModelAdmin):
    list_display = ('profession', 'course')
    list_filter = ('profession',)


class RecruitmentCompanyAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'recruter', 'salary', 'salary_measurement',
                    'date', 'profession',)
    search_fields = ('name',)


class VacancySkillAdmin(admin.ModelAdmin):
    list_display = ('vacancy', 'skill')
    search_fields = ('vacancy',)


admin.site.register(Skill, SkillAdmin)
admin.site.register(DirectionTraining, DirectionTrainingAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(CourseSkill, CourseSkillAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Profession, ProfessionAdmin)
admin.site.register(ProfessionSkill, ProfessionSkillAdmin)
admin.site.register(ProfessionCourse, ProfessionCourseAdmin)
admin.site.register(RecruitmentCompany, RecruitmentCompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(VacancySkill, VacancySkillAdmin)
