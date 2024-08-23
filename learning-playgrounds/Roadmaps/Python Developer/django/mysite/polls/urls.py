"""
https://docs.djangoproject.com/en/5.1/intro/tutorial01/#write-your-first-view
"""

from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
]
