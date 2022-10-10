import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

db_url = 'https://inandout-8434d-default-rtdb.firebaseio.com/'

cred = credentials.Certificate("/workspaces/WEB_InNOut_Va8cation/back_end/dir/inandout-8434d-firebase-adminsdk-thv50-6c28ebed9f.json")

default_app = firebase_admin.initialize_app(cred, {'databaseURL':db_url})

id = db.reference()
id.update({'5678':{'id1':'soilder1'}})


#db에 올릴 데이터들
# 1차 