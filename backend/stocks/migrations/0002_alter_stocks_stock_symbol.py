# Generated by Django 4.0.4 on 2022-06-01 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stocks',
            name='stock_symbol',
            field=models.CharField(max_length=6),
        ),
    ]