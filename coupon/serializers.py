"""
2. Create the serializer

Import the serializers module from rest_framework

"""
from rest_framework import serializers
from coupon.models import Coupon

class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model=Coupon
        fields="__all__"
