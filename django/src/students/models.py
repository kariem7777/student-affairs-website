from django.db import models

# Create your models here.

class student(models.Model):
    dp=[
    ("CS", "Computer Science"),
    ("IT", "Information Technology"),
    ("IS", "Information Systems"),
    ("DS", "Decision Support"),
    ("AI", "Artificial Intellegience"),
    ]
    gn=[
    ("M", "Male"),
    ("FM", "Female"),
    ]
    lvl=[
    ("1", "Level 1"),
    ("2", "Level 2"),
    ("3", "Level 3"),
    ("4", "Level 4")
    ]
    st=[
    ("ACTIVE", "Active"),
    ("INACTIVE", "In Active"),
    ]
    name=models.CharField(max_length=25)
    email=models.EmailField(max_length=50)
    age=models.IntegerField(blank=True,null=True)
    mobile=models.CharField(max_length=25)
    gpa=models.DecimalField(max_digits=3,decimal_places=2)
    # date=models.DateField()
    department=models.CharField(max_length=25,choices=dp)
    gender=models.CharField(max_length=10,choices=gn)
    level=models.CharField(max_length=10,choices=lvl)
    status=models.CharField(max_length=10,choices=st)

    def __str__(self):
        return self.name
