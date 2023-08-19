from main import ma

class PetOwnerSchema(ma.Schema):
    class Meta:
        fields = "id", "license_number", "phone_number", "post_code", "is_shopkeeper"
    
pet_owner_schema = PetOwnerSchema()
pet_owners_schema = PetOwnerSchema(many=True)