from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import mixins, status, viewsets
import requests

from api.serializers import TrackerSerializer
from professions.models import (Course, Lesson, #CourseSkill,
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User

from django.contrib.auth import authenticate, login

user = User.objects.filter(id=1)

class TrackerViewSet(viewsets.ReadOnlyModelViewSet):

  #  queryset = Profession.objects.filter(profession_users__user=user).all()
    queryset = user
    serializer_class = TrackerSerializer

    def get_serializer_context(self):
        context = super(TrackerViewSet, self).get_serializer_context()
        context.update({'user': user})
        return context