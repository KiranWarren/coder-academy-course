from flask import Blueprint, jsonify, abort, request

from main import db
from models.pets import Pet
from schemas.pet_schema import pet_schema, pets_schema

pets = Blueprint('pet', __name__, url_prefix="/pet")

@pets.route("/", methods=["POST"])
def create_pet():
    new_pet = Pet(**pet_schema.load(request.json))
    # q = pet_schema.load(request.json)

    # if q["type"] is None or q["breed"] is None or q["license_number"] is None:
    #     return abort(404, "Missing information")

    # new_pet = Pet(
    #     type = q["type"],
    #     breed = q["breed"],
    #     license_number = q["license_number"]
    # )
    db.session.add(new_pet)
    db.session.commit()

    return jsonify(pet_schema.dump(new_pet))

@pets.route("/", methods=["GET"])
def pet_list():
    q = db.select(Pet)
    pet_list = db.session.scalars(q)

    response = pets_schema.dump(pet_list)
    return jsonify(response)

@pets.route("/<int:id>", methods=["GET"])
def get_pet(id: int):
    q = db.select(Pet).filter_by(id=id)
    pet = db.session.scalar(q)

    response = pet_schema.dump(pet)

    if not response:
        return abort(404, description="Pet ID not found")

    return jsonify(response)

@pets.route("/<int:id>", methods=["DELETE"])
def delete_pet(id: int):
    q = db.select(Pet).filter_by(id=id)
    pet = db.session.scalar(q)

    db.session.delete(pet)
    db.session.commit()

    return jsonify({
        "message": f"Object with id:{id} has been deleted."
    })