from flask import Blueprint

from main import db
from models.pet_owners import PetOwner
from models.pets import Pet

db_commands = Blueprint("db", __name__)

@db_commands.cli.command("create")
def create_db():
    db.create_all()
    print("Tables created")

@db_commands.cli.command("drop")
def drop_db():
    db.drop_all()
    print("Tables dropped")

@db_commands.cli.command("seed")
def seed_db():
    pet1 = Pet(
        type = "snake",
        breed = "viper",
        license_number = "0123"
    )

    pet2 = Pet(
        type = "snake",
        breed = "python",
        license_number = "5463"
    )

    pet3 = Pet(
        type = "snake",
        breed = "taipan",
        license_number = "8345"
    )

    pet_owner1 = PetOwner(
        license_number = "0089764",
        phone_number = "0465 456 345",
        post_code = "4546",
        is_shopkeeper = True
    )

    pet_owner2 = PetOwner(
        license_number = "0173839",
        phone_number = "0413 144 999",
        post_code = "4548",
        is_shopkeeper = False
    )

    db.session.add(pet1)
    db.session.add(pet2)
    db.session.add(pet3)
    db.session.add(pet_owner1)
    db.session.add(pet_owner2)
    db.session.commit()

    print("Table is seeded with pets and owners")
