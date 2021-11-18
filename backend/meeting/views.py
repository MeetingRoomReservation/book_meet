from .models import Room, Meeting
from rest_framework.generics import CreateAPIView, GenericAPIView, ListAPIView
from .serializers import (
    MeetingCreateSerializer,
)
from rest_framework import status
from rest_framework.response import Response

# from .filters import ActionItemFilter

# from .permissions import IsOwnerOnly
# from django_filters import rest_framework as filters


class MeetingCreate(CreateAPIView):
    serializer_class = MeetingCreateSerializer

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )

        # serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()  # .save() 작성하지 않을 경우 serializer 안의 create도 호출 되지 않는다.!!!!!
            # debug console 창에서 바로 serializer.save() 시도시 아래 오류 발생
            # AssertionError: You cannot call `.save()` after accessing `serializer.data`.If you need to access data before committing to the database then inspect 'serializer.validated_data' instead.

            return Response(
                {"Success": "예약이 완료되었습니다.", "예약내역": serializer.data},
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"Failed": "정상적으로 예약되지 못했습니다."},
                status=status.HTTP_400_BAD_REQUEST,
            )
