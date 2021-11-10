from django.db import models
from django.conf import settings

# Create your models here.


class Room(models.Model):
    company_type = models.CharField(max_length=100)  # 회의실 지점
    name = models.CharField(max_length=100)  # 회의실 이름
    people_type = models.IntegerField()  # 회의실 이용 type
    location = models.CharField(max_length=100)  # 회의실 위치
    meetings = models.ManyToManyField("Meeting", through="Available")  # 선택한 회의실

    def __str__(self):
        return str(self.pk)


class Meeting(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="host"
    )
    # host = models.CharField(max_length=50)  # null=False, blank=False, 필수 값
    # token 값 활용해서-> 변환해서 저장 ## 창성님이 알려주신 방법대로
    # 1) https://han-py.tistory.com/353 , #2) request.user # 요지는 frontend, 자동적으로 값 가져오도록
    title = models.CharField(max_length=100)
    meeting_date = models.DateField()
    rooms = models.ManyToManyField(Room, through="Available")  # 선택한 회의실
    users = models.ManyToManyField(
        settings.AUTH_USER_MODEL, through="Reservation", related_name="guest"
    )
    meeting_starttime = models.DateTimeField()  # 14:00
    meeting_end_time = models.DateTimeField()  # 10:00

    def __str__(self):
        return self.title


class Reservation(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    meeting = models.ForeignKey("Meeting", on_delete=models.CASCADE)


class Available(models.Model):
    meeting = models.ForeignKey("Meeting", on_delete=models.CASCADE)
    room = models.ForeignKey("Room", on_delete=models.CASCADE)


# class Channel(models.Model):
#     channel_id = models.CharField(unique=True, primary_key=True, max_length=100)
#     channel_name = models.CharField(max_length=100)
#     users = models.ManyToManyField("User", through="ChannelIncludedUser")

#     def __str__(self):
#         return self.channel_id


# class User(models.Model):
#     user_id = models.CharField(unique=True, primary_key=True, max_length=100)
#     user_nickname = models.CharField(max_length=100)
#     channels = models.ManyToManyField("Channel", through="ChannelIncludedUser")

#     def __str__(self):
#         return self.user_id


# class ChannelIncludedUser(models.Model):
#     channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
