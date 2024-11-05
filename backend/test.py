import json
import os
path_to_json = os.path.join(os.getcwd(), "backend", "members.json")
with open(path_to_json, "r") as f:
    members = json.loads(f.read())
for i in range(len(members)):
    print(members[i]["name"])