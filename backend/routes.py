import os
import json
import base64

from app import db, app
from flask import jsonify
from models import Member


# For one time use only, don't use it again unless changes in json file.
def init_members():
    path_to_json = os.path.join(os.getcwd(), "members.json")
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
    responses = []
    members = Member.query.all()
    for member in members:
        # Convert member data to JSON (without image initially)
        member_data = member.to_json_without_img()

        # Get path to the image
        path_to_image = os.path.join(os.getcwd(), "static", "photos", member.img_url)
        
        # Read and encode the image as base64
        with open(path_to_image, "rb") as img_file:
            image_base64 = base64.b64encode(img_file.read()).decode("utf-8")

        # Add the base64 image data to the JSON data
        member_data["image"] = f"data:image/webp;base64,{image_base64}"
        responses.append(member_data)
    
    return jsonify(responses)

# @app.route("/about-us", methods=["POST"])
# def create_members():
#     try:
#         data = request.json

#         name = data.get("name")
#         dept = data.get("dept")
#         role = data.get("role")
#         img_url = data.get("imgUrl")
#         fb = data.get("facebook")
#         ig = data.get("instagram")
#         li = data.get("linkedin")
#         member_model = Member(name, dept, role, img_url, fb=fb, ig=ig, li=li)

