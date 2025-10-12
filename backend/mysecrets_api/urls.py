from django.urls import path
from .views import HideView, RevealView

urlpatterns = [
    path('hide/', HideView.as_view(), name='hide'),
    path('reveal/<str:key>/', RevealView.as_view(), name='reveal'),
]
