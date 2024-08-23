from django.contrib import admin
from .models import Question

# https://docs.djangoproject.com/en/5.1/intro/tutorial02/#make-the-poll-app-modifiable-in-the-admin

# Register your models here.

admin.site.register(Question)
