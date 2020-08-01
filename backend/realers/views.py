from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializer import RealerSerializer
from .models import Realers

class RealerListView(ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Realers.objects.all()
    serializer_class = RealerSerializer
    pagination_class = None


# to get the details
class RealerView(RetrieveAPIView):
    queryset = Realers.objects.all()
    serializer_class = RealerSerializer

class TopSeller(ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Realers.objects.filter(top_seller =True)
    serializer_class = RealerSerializer
    pagination_class = None
