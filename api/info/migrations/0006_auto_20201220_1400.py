# Generated by Django 3.0.11 on 2020-12-20 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0005_auto_20201220_1355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='info',
            name='car',
            field=models.ManyToManyField(blank=True, to='info.Car'),
        ),
    ]