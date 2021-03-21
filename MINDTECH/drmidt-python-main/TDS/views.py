from django.shortcuts import render, get_object_or_404
from .models import Tableau_de_synthese
from django.views.generic import ListView


def tds(request, year, month, day, tds):
    tds = Tableau_de_synthese.object.all()
    return render(request,
                  'tds.html',
                  {'Tableau_de_synthese': Tableau_de_synthese})


def post_detail(request, year, month, day, post):
    post = get_object_or_404(Post, slug=post,
                             status='published',
                             publish__year=year,
                             publish__month=month,
                             publish__day=day)
    return render(request,
                  'blog/post/detail.html',
                  {'post': post})


class PostListView(ListView):
    queryset = Post.published.all()
    context_object_name = 'posts'
    paginate_by = 3
    template_name = 'blog/post/list.html'
