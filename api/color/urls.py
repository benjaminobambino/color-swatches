from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('colors/', views.ColorList.as_view(), name='color_list'),
    path('colors/<int:pk>', views.ColorDetail.as_view(), name='color_detail'),
    path('swatches/', views.SwatchList.as_view(), name='swatch_list'),
    path('swatches/<int:pk>', views.SwatchDetail.as_view(), name='swatch_detail'),
]