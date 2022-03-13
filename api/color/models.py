from django.db import models

# Create your models here.

# Color model (i.e. Red, Orange, Yellow, etc.):
class Color(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
      return self.name

# Swatch model (i.e. #cffff1, #ffffff, etc.):
class Swatch(models.Model):
  hex = models.CharField(max_length=100)
  color = models.ForeignKey(Color, on_delete=models.CASCADE, related_name='swatches')

  def __str__(self):
      return self.hex