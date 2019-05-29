"""
Custom template tag/filters
"""
from django import template

register = template.Library()


@register.filter
def remove(value):
    """
    remove arg from value.
    """
    return value
