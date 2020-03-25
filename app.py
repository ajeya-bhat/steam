from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask import Flask, render_template, jsonify, request, abort, g
import requests
#import sqlite3
#import status
from werkzeug.exceptions import BadRequest
#from models import sessions
app = Flask(__name__)
from sqlalchemy import create_engine, Sequence
from sqlalchemy import String, Integer, Float, Boolean, Column, ForeignKey, DateTime
from sqlalchemy.orm import sessionmaker
import random
from datetime import datetime
import csv
import json
dict1 = dict()
comma = ','
quotes = '"'
app = Flask(__name__)

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(80), nullable=False)
    password = Column(String(80), nullable=False)
    careted = Column(DateTime,nullable=False)

engine = create_engine('sqlite:///ride_mgmt.db', connect_args={'check_same_thread': False}, echo=True,pool_pre_ping=True)
con = engine.connect()
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session=Session()
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=['POST'])
def register():
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = request.get_json()['password']
    created = datetime.utcnow()
    count=0
    rs=con.execute('SELECT * FROM users where email = ' + str(email))
    for _ in rs:
        count+=1
    if count!=0:
        return jsonify({'result' : "Error"})
    con.execute('INSERT INTO Users VALUES ('+str(first_name) + ', ' + str(last_name) + ', ' + 
		str(email) + ', ' + str(password) + ', ' + str(created) + ')')
	
    result = {
		'first_name' : first_name,
		'last_name' : last_name,
		'email' : email,
		'password' : password,
		'created' : created
	}

    return jsonify({'result' : result})
	

@app.route('/users/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""
    count=0
    rs=con.execute('SELECT * FROM users where email = ' + str(email))
    for r in rs:
        count+=1
    if count==0:
        result = jsonify({"error":"Invalid username or password"})
    for r in rs:
        if(password!=r['password']):
            result = jsonify({"error":"Invalid username or password"})
        else:
            result = jsonify({"token":"success"})
    return result
	
if __name__ == '__main__':
    app.run(debug=True)