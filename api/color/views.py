from rest_framework import generics
from .serializers import ColorSerializer, SwatchSerializer
from .models import Color, Swatch

class ColorList(generics.ListCreateAPIView):
  queryset = Color.objects.all()
  serializer_class = ColorSerializer

class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Color.objects.all()
  serializer_class = ColorSerializer

class SwatchList(generics.ListCreateAPIView):
  queryset = Swatch.objects.all()
  serializer_class = SwatchSerializer

class SwatchDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Swatch.objects.all()
  serializer_class = SwatchSerializer
