from .models import Product
from django.contrib import admin

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'brand', 'cpu', 'screen', 'ram', 'rom', 'image', 'camera', 'year', 'origin', 'description', 'os', 'battery']
    ordering = ['name']
    search_fields = ['name', 'brand', 'description']  # replace with the fields you want to search
    list_filter = ['brand', 'year', 'os']  # replace with the fields you want to filter

admin.site.register(Product, ProductAdmin)
