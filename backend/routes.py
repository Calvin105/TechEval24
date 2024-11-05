import os
import json

from app import db, app
from flask import request, jsonify, render_template
from models import Member


# For one time use only, don't use it again unless changes in json file.
def init_members():
    path_to_json = os.path.join(os.getcwd(), "backend", "members.json")
    with open(path_to_json, "r") as f:
        members = json.loads(f.read())
    
    for i in range(len(members)):
        data = members[i]
        name = data["name"]
        dept = data["dept"]
        role = data["role"]
        img_url = os.path.join(os.getcwd(), "static", "photos", data["imgUrl"])
        fb = data["facebook"]
        ig = data["instagram"]
        li = data["linkedin"]
        usr_model = Member(name, dept, role, img_url, fb=fb, ig=ig, li=li)

        db.session.add(usr_model)
    db.session.commit()

# For one time use only, don't use it again unless changes in json file.
def delete_all_members():
    Member.query.delete()
    db.session.commit()

# Get all CS member
@app.route("/about-us", methods=["GET"])
def get_members():
    init_members()
    return render_template("about-us.html", values=Member.query.all())
