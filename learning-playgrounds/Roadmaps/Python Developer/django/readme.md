# Django

https://docs.djangoproject.com/en/5.1/intro/tutorial01/

https://docs.djangoproject.com/en/5.1/intro/tutorial02/

## The development server

```bash
python manage.py runserver
```

## Database setup

https://docs.djangoproject.com/en/5.1/intro/tutorial02/#database-setup

```bash
python manage.py migrate
```

## Activating models

https://docs.djangoproject.com/en/5.1/intro/tutorial02/#activating-models

## Check for problems in your project

If you’re interested, you can also run `python manage.py check;` this checks for any problems in your project without making migrations or touching the database.

## Creating an admin user

https://docs.djangoproject.com/en/5.1/intro/tutorial02/#creating-an-admin-user

```bash
python manage.py createsuperuser
```

## Admin site

`http://127.0.0.1:8000/admin/login/?next=/admin/`
