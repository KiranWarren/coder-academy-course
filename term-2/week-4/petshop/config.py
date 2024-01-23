import os

class BaseConfig(object):
    @property
    def SQLALCHEMY_DATABASE_URI(self):
        db = os.environ.get("SQLALCHEMY_DATABASE_URI")

        if db is None:
            raise ValueError("Missing environment variable `SQLALCHEMY_DATABASE_URI`")
        
        return db
    
class DevelopmentConfig(BaseConfig):
    DEBUG = True
    
class TestingConfig(DevelopmentConfig):
    pass
    
class ProductionConfig(BaseConfig):
    pass

current_env = os.environ.get("FLASK_ENV")

if current_env == "testing":
    app_config = TestingConfig()
elif current_env == "production":
    app_config = ProductionConfig()
else:
    app_config = DevelopmentConfig()