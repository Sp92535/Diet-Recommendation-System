from django.shortcuts import render
from ml_code.recc import get_opt,totalCal,calDivider,rr,BMR,modif
from ml_code.imgurlgetter import get_img
import copy

def index(request):    
    return render(request,'index.html')

def process(request):
    
    age = int(request.POST.get('age-check'))
    height = int(request.POST.get('height-check'))
    weight = float(request.POST.get('weight-check'))
    gender = request.POST.get('gender')
    act = int(request.POST.get('act-check'))
    plan = request.POST.get('plan-check')
    meal = int(request.POST.get('meal-check'))
    # veg = request.POST.get('prefer')
    
    info ={
        'weight':weight,
        'height':height,
        'age':age,
        'gender':gender,
        'act':act,
        'plan':plan,
        'meal':meal,
        # 'veg':veg
    }
    cal = calDivider(totalCal(info['act'],info),info['meal'])

    for i in range(len(cal)):
        cal[i]=round(cal[i],2)

    dict = {
        'cal':cal[0],
        # 'veg':info['veg'],
    }

    course={
        "prep":[],
        "name":[],
        "cook":[],
        "img":[],
        "cal":[]
    }
    snack = copy.deepcopy(course)
    lunch = copy.deepcopy(course)
    dinner= copy.deepcopy(course)
    breakfast= copy.deepcopy(course)

    if dict['cal']!=0:
        nut = [rr(5, 15),rr(0, 2),rr(0, 10),rr(0, 200),rr(15, 30),rr(2, 5),rr(0, 8),rr(5, 10)]
        course_filler(dict,snack,nut)
    
    dict['cal']=cal[1]
    nut = [rr(10,30),rr(0,4),rr(0,30),rr(0,400),rr(40,75),rr(4,10),rr(0,10),rr(30,100)]
    course_filler(dict,breakfast,nut)

    dict['cal']=cal[2]
    nut = [rr(20,40),rr(0,4),rr(0,30),rr(0,400),rr(40,75),rr(4,20),rr(0,10),rr(50,175)]
    course_filler(dict,lunch,nut)

    dict['cal']=cal[3]
    nut = [rr(20,40),rr(0,4),rr(0,30),rr(0,400),rr(40,75),rr(4,20),rr(0,10),rr(50,175)]
    course_filler(dict,dinner,nut)
    
    snack = zipper(snack)
    breakfast = zipper(breakfast)
    lunch = zipper(lunch)
    dinner = zipper(dinner)

    disp=[breakfast,lunch,dinner]
    if cal[0]==0:
        return render(request,'output.html',{'disp':disp,'bmr':round(BMR(info)),'tot':round(totalCal(info['act'],info))})
    disp=[snack,breakfast,lunch,dinner]
    return render(request,'output.html',{'disp':disp,'bmr':round(BMR(info)),'tot':round(totalCal(info['act'],info))})

def zipper(x):
    return zip(x['name'],x['img'],x["cal"],x['prep'],x['cook'])

def course_filler(inpt,course_i,nut):
    df = get_opt(inpt,nut)
    for i in range(len(df)):
        course_i['prep'].append(modif(df['PrepTime'].iloc[i]))
        course_i['name'].append(df['Name'].iloc[i])
        course_i['cook'].append(modif(df['CookTime'].iloc[i]))
        course_i['cal'].append(df['Calories'].iloc[i])
    course_i['img']=get_img(course_i['name'])
