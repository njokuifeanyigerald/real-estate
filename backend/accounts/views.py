from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
# from django.views.decorators.csrf import csrf_exempt

User = get_user_model()

class SignupView(APIView):
    permission_classes  = [permissions.AllowAny]

    def post(self,request, format=None):
        data = self.request.data
        name  = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email = email).exists():
                return Response({  'email':'Email already exists'})
            else:
                if len(password) < 8:
                    return Response({'error' :'password should be at least 8 characters'})
                else:
                    user= User.objects.create_user(email=email, password=password, name=name)
                    user.save()
                    return Response({'success':'user created successfully'})
        else:
            return Response({'error': 'passwords do not match'})
        






