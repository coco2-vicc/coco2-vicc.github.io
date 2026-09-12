---
layout: profiles
permalink: /people/
title: Team
description: "COCO2 team members"
nav: true
nav_order: 2
---

<div class="row mt-3">
{% for person in site.data.people %}
  <div class="col-sm-6 mb-4">
    <div class="card h-100 p-3 text-center">
      <img src="{{ person.avatar | prepend: '/assets/img/' | relative_url }}" class="card-img-top rounded-circle mx-auto" style="width: 120px; height: 120px; object-fit: cover;" alt="{{ person.name }}">
      <div class="card-body">
        <h5 class="card-title mb-1">{{ person.name }}</h5>
        <p class="card-text text-muted small mb-1">{{ person.position }}</p>
        <p class="card-text small"><strong>{{ person.institution }}</strong></p>
        <p class="card-text small">{{ person.bio }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
