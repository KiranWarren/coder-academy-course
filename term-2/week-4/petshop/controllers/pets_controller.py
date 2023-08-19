from flask import Blueprint, jsonify

from main import db
from models.pets import Pet
from schemas.pet_schema import pet_schema, pets_schema

pets = Blueprint('pet', __name__, url_prefix="/pet")

@pets.route("/", methods=["GET"])
def pet_list():
    q = db.select(Pet)
    pet_list = db.session.scalars(q)

    response = pets_schema.dump(pet_list)

    return jsonify(response)