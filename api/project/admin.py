from django.contrib import admin
from .models import Project,Contractor,Owner,Address,Architect
# Register your models here.
admin.site.register(Project)
admin.site.register(Contractor)
admin.site.register(Owner)
admin.site.register(Address)
admin.site.register(Architect)