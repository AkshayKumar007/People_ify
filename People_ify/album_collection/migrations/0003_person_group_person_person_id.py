# Generated by Django 2.2.7 on 2019-11-20 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('album_collection', '0002_auto_20191115_0451'),
    ]

    operations = [
        migrations.AddField(
            model_name='person_group_person',
            name='person_id',
            field=models.CharField(default=1111111, max_length=128),
            preserve_default=False,
        ),
    ]