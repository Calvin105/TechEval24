from app import db

class Member(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    dept = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(200), nullable=False)
    facebook = db.Column(db.String(100), nullable=True)
    insta = db.Column(db.String(100), nullable=True)
    linkedin = db.Column(db.String(100), nullable=True)

    def __init__(self, name, dept, role, img_url, fb=None, ig=None, li=None):
        super().__init__()
        self.name = name
        self.dept = dept
        self.role = role
        self.img_url = img_url
        if fb:
            self.fb = fb
        if ig:
            self.ig = ig
        if li:
            self.linkedin = li

    def to_json(self):
        return {
            "id": self._id,
            "name": self.name,
            "dept": self.dept,
            "role": self.role,
            "imgUrl": self.img_url,
            "fb": self.facebook,
            "ig": self.insta,
            "li": self.linkedin
        }
    