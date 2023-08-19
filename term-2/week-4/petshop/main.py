from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

def init_app():
    app = Flask(__name__)

    # config
    app.config.from_object("config.app_config")

    # connect db through orm
    db.init_app(app)

    # connect schemas
    ma.init_app(app)

    # cli commands to create default orms
    from cli_commands import db_commands
    app.register_blueprint(db_commands)

    # creating routes or controllers through blueprint
    from controllers.pets_controller import pets
    from controllers.pet_owners_controller import pet_owners

    app.register_blueprint(pets)
    app.register_blueprint(pet_owners)
    
    return app