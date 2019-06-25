# Generated by Django 2.2.1 on 2019-05-24 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
                ('category', models.CharField(choices=[('Dish', 'Dish'), ('Fruit', 'Fruit'), ('Bevarage', 'Bevarage'), ('Favorite', 'Favorite'), ('Desert', 'Desert')], max_length=120)),
                ('status', models.CharField(choices=[('Available', 'Available'), ('Not Available', 'Not Available')], default='Not Available', max_length=120)),
                ('calories', models.DecimalField(decimal_places=2, default=0.0, max_digits=100)),
                ('price_student', models.DecimalField(decimal_places=2, default=0.0, max_digits=100)),
                ('price_guest', models.DecimalField(decimal_places=2, default=0.0, max_digits=100)),
                ('price_attendant', models.DecimalField(decimal_places=2, default=0.0, max_digits=100)),
                ('day', models.DateField()),
                ('slug', models.SlugField(unique=True)),
                ('quantity', models.IntegerField(default=0)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('update', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]