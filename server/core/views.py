"""
Core application views
"""
from django.views.generic import TemplateView
from django.utils.decorators import method_decorator


# @method_decorator(login_required, name='dispatch')
class InitView(TemplateView):
    template_name = 'index.html'
