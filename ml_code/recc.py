from joblib import load
import pandas as pd
import re
import random


df1 = pd.read_csv('/home/zeno/Desktop/ZZZ/SNS/ml_code/dataset2.csv')
ans = load('/home/zeno/Desktop/ZZZ/SNS/ml_code/recco2.joblib')
sc = load('/home/zeno/Desktop/ZZZ/SNS/ml_code/scalar.joblib')
def get_opt(dict,nut):
    inp = pd.DataFrame(({'Calories':[dict['cal']],'FatContent':[nut[0]],
       'SaturatedFatContent':[nut[1]], 'CholesterolContent':[nut[2]], 'SodiumContent':[nut[3]],
       'CarbohydrateContent':[nut[4]], 'FiberContent':[nut[5]], 'SugarContent':[nut[6]], 'ProteinContent':[nut[7]]}))
    
    df2=pd.DataFrame()
    dis, indi = ans.kneighbors(sc.transform(inp),n_neighbors=3)
    df2 = pd.concat([df2,df1.iloc[indi[0]]],ignore_index=True)
    df3 = df2
    return df3

def BMR(info):
    inc_bmr = 10*info['weight'] + 6.25*info['height'] - 5*info['age'] 
    return inc_bmr+5 if info['gender']=='male' else inc_bmr-161

def totalCal(acti,info):   
    ans = BMR(info)
    if acti==0:
        ans = ans*1.2
    elif acti==1:
        ans = ans*1.375
    elif acti==2:
        ans = ans*1.55
    elif acti==3:
        ans = ans*1.725
    elif acti==4:
        ans = ans*1.9 

    if info['plan']=="maintain-weight":
        return ans
    if info['plan']=="mild-weight-loss":
        return ans*0.91
    if info['plan']=="weight-loss":
        return ans*0.82
    if info['plan']=="extreme-weight-loss":
        return ans*0.64
    
    return ans

def calDivider(cal,meals):
    if meals==3:
        return [0,cal*0.25,cal*0.35,cal*0.40]
    if meals==4:
        return [cal*0.10,cal*0.25,cal*0.35,cal*0.30]

def modif(x):
    x = str(x)
    return x[2:]

def rr(x,y):
    return round(random.uniform(x,y),2)