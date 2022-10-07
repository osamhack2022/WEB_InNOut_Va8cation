import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('inandout-8434d-firebase-adminsdk-thv50-6c28ebed9f.json')
firebase_admin.initialize_app(cred,{'https://inandout-8434d-default-rtdb.firebaseio.com/'})

iddir = db.reference()
