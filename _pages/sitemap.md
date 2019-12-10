---
layout: page
title: Mapa del sitio
permalink: mapa-del-sitio
subtitle: Encuentra tu enlace de interés
---

***

#### <i class="fas fa-home"></i> [Página de Inicio]({{site.baseurl}})

***

#### Páginas
{% assign sortedPages = site.pages | sort: 'title' %}

{% for page in sortedPages %}
{% unless page.url contains ".json" %}
{% if page.layout != nil %}
{% if page.layout != 'feed' %}
{% if page.layout != 'default' %}
{% if page.permalink != 'gracias' %}
* [{{page.title}}]({{site.baseurl}}{{ page.url | remove: 'index.html' }})
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endunless %}
{% endfor %}

{% assign sortedPosts = site.posts | sort: 'title' %}

***

#### Posts
{% for post in sortedPosts %}
{% unless post.categories contains "session" %}
* [{{post.title}}]({{site.baseurl}}{{ post.url | remove: 'index.html' }}) 
{% endunless %}
{% endfor %}

***