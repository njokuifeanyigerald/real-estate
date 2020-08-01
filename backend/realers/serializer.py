from rest_framework import serializers
from .models import Realers

class RealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realers
        fields = '__all__'