# Generated by Django 4.2.7 on 2023-12-16 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contact', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='mensaje',
            field=models.TextField(null=True),
        ),
    ]
