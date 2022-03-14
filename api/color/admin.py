from django.contrib import admin
from .models import Color, Swatch

# Registers models
admin.site.register(Color)
admin.site.register(Swatch)