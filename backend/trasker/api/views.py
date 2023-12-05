from django.shortcuts import render
from rest_framework import mixins, status, viewsets

from api.serializers import TrackerSerializer
from professions.models import (Course, CourseSkill, Lesson,
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User

user = User.objects.filter(id=1)


class TrackerViewSet(viewsets.ReadOnlyModelViewSet):

  #  queryset = Profession.objects.filter(profession_users__user=user).all()
    queryset = user
    serializer_class = TrackerSerializer
