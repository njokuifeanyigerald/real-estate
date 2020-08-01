from django.urls import path
from .views import RealerView,RealerListView,TopSeller

urlpatterns = [
    path('', RealerListView.as_view(), name="realer_list_view"),
    path('<pk>', RealerView.as_view(), name="realer_detail_view"),
    path('topseller/', TopSeller.as_view(), name="topseller_view"),
]  

