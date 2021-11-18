from django.contrib import admin
from .models import Room, Meeting, Reservation, Available


# Register your models here.


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    pass


@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    pass


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    pass


@admin.register(Available)
class AvailableAdmin(admin.ModelAdmin):
    pass
