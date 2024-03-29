# Generated by Django 4.2.1 on 2023-05-18 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='gpa',
            field=models.DecimalField(decimal_places=2, default=0.00, max_digits=3),
            preserve_default=False,
        ),
    ]
