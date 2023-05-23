from django.shortcuts import render
from .models import student
from django.core import serializers
from django.http import HttpResponse,HttpResponseRedirect
# Create your views here.
def view_students(request):
    students=student.objects.all()
    con={'students':students}
    return render(request,"html/View students.html",context=con)

def home(request):
    return render(request,"html/Home.html",{})

def register(request):
    if request.method=="POST":
        Name=request.POST['name']   
        Age=request.POST['Age']
        mob=request.POST['mobile']    
        Gpa=request.POST['GPA']   
        Email=request.POST['mail']   
        Levell=request.POST.get('Level',0)   
        dp=request.POST.get('Department',"null")    
        Gender=request.POST.get('Gender',"NULL")   
        Statuss=request.POST.get('Status',"NULL")   
        s=student(name=Name,age=Age,email=Email,mobile=mob,gpa=Gpa,department=dp,gender=Gender,level=Levell,status=Statuss)
        s.save()
    con={}
    return render(request,"html/Register students.html",context=con)


def search(request):
    if request.method=="POST":
        name=request.POST.get('name',"null")
        c=request.POST.get('choice',"null")
        print(c)
        if c =="1":
            ob=student.objects.get(pk=name).delete()
            return HttpResponse(name)
        elif c=="-1":
            print("S")
            return HttpResponseRedirect('/edit-student')
        else:
            result = student.objects.filter(name__contains=name)
            res=serializers.serialize("json",result)
            return HttpResponse(res)        
            
    return render(request,"html/Search.html",{})

def edit(request):  
    id=request.GET.get('id')
    ob=student.objects.get(pk=id)
    con={'ob':ob}
    if request.method=="POST":
        ob.name=request.POST['name']   
        ob.age=request.POST['Age']
        ob.mobile=request.POST['mobile']    
        ob.gpa=request.POST['GPA']   
        ob.email=request.POST['mail']   
        ob.level=request.POST.get('Level',0)       
        ob.gender=request.POST.get('Gender',"NULL")   
        ob.status=request.POST.get('Status',"NULL")
        ob.save()
        return render(request,"html/Search.html",{})
    return render(request,"html/Edit students.html",con)

def assign(request):
    namee=request.POST.get('name',"NULL")
    dp=request.POST.get('dep',"null")
    if request.method=="POST":
        try:
            ob=student.objects.get(name=namee)
            ob.name=namee
            ob.department=dp
            ob.save()
            return HttpResponse("assign completed")
        except student.DoesNotExist:
            return HttpResponse("name not found")
    return render(request,'html/Assignment Department.html',{})