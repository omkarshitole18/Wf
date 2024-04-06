from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('success/', views.success, name='success'),
]

