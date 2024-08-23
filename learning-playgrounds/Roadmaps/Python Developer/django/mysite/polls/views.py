"""
https://docs.djangoproject.com/en/5.1/intro/tutorial01/#write-your-first-view
"""

from django.http import HttpResponse

# Create your views here.


def index(request):
    """
    View function for the polls index page.

    Parameters:
    - request: HttpRequest object representing the current request.

    Returns:
    - HttpResponse object with the message "Hello, world. You're at the polls index."
    """
    return HttpResponse("Hello, world. You're at the polls index.")
