# Generated by Django 3.0.11 on 2020-12-21 19:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0002_auto_20201219_2012'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('schedule', '0003_schedule_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='project.Project'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='worker',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
