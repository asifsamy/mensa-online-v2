# Generated by Django 2.2.1 on 2019-06-16 21:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='user',
        ),
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.EmailField(default=django.utils.timezone.now, max_length=150, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='first_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='last_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]
