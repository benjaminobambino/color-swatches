from rest_framework import generics
from .serializers import ColorSerializer, SwatchSerializer
from .models import Color, Swatch

# View all colors
class ColorList(generics.ListCreateAPIView):
  queryset = Color.objects.all()
  serializer_class = ColorSerializer

# View, update, or delete a single color
class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Color.objects.all()
  serializer_class = ColorSerializer

# View all swatches
class SwatchList(generics.ListCreateAPIView):
  queryset = Swatch.objects.all()
  serializer_class = SwatchSerializer

# View, update, or delete a single swatch
class SwatchDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Swatch.objects.all()
  serializer_class = SwatchSerializer
