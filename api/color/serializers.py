from rest_framework import serializers
from .models import Color, Swatch

class SwatchSerializer(serializers.HyperlinkedModelSerializer):
  color_url = serializers.HyperlinkedRelatedField(
    view_name='color_detail',
    read_only=True
  )

  color = serializers.PrimaryKeyRelatedField(
    queryset = Color.objects.all(),
  )

  class Meta:
    model = Swatch
    fields = ('id', 'hex', 'color', 'color_url')

class ColorSerializer(serializers.HyperlinkedModelSerializer):
  swatches = SwatchSerializer(
    many=True,
    read_only=True
  )

  class Meta:
    model = Color
    fields = ('id', 'name', 'swatches')