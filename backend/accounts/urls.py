from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from . import views

app_name = "accounts"  # URL Reverse에서 namespace역할을 하게 됨

urlpatterns = [
    # path('api-token-auth/', obtain_auth_token),
    path('api-jwt-auth/', obtain_jwt_token),
    path('api-jwt-auth/refresh/', refresh_jwt_token),
    path('api-jwt-auth/verify/', verify_jwt_token),
]

