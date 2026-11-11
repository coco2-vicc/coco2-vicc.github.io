---
layout: default
title: Blog
permalink: /blog/
nav: true
nav_order: 6
---

<div class="post">

 <!-- Static Project Map Banner -->
  <div class="map-container text-center mb-5 pb-3 border-bottom">
    <figure class="figure d-block mb-2">
      <img 
        src="{{ '/assets/img/blog/2026_oct_map.png' | relative_url }}" 
        alt="COCO2 Southern Ocean Field Sites and Float Trajectories" 
        class="img-fluid rounded shadow-sm"
        data-zoomable
        style="max-width: 100%; height: auto; max-height: 420px; object-fit: cover; cursor: zoom-in;"
      >
      <figcaption class="figure-caption mt-2 text-muted small">
        Approximate location of the USVs. 
        Disclaimer: This map shows where the USVs have traveled. Scientific data are collected in international waters and in EEZs in which we have obtained prior clearance. 
      </figcaption>
    </figure>
   </div>

  
  {% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

  {% for yearGroup in postsByYear %}
    <!-- Year Wrapper (Currently stays fully open) -->
    <details open class="mb-5 border-bottom pb-4">
      <summary class="h2 font-weight-bold mb-4 text-primary" style="cursor: pointer;">
        {{ yearGroup.name }} Updates
      </summary>

     <div class="year-posts ps-2">
        {% for post in yearGroup.items %}
          <article class="mb-5">
            <header class="mb-2">
              <h3 class="h3 font-weight-bold">
                <a href="{{ post.url | relative_url }}" class="text-decoration-none">{{ post.title }}</a>
              </h3>
              <p class="text-muted small">
                {{ post.date | date: "%B %d, %Y" }}
              </p>
            </header>

            <div class="post-content">
              {{ post.content }}
            </div>
          </article>

          {% unless forloop.last %}<hr class="my-4 text-muted" style="opacity: 0.25;">{% endunless %}
        {% endfor %}
      </div>
    </details>
  {% endfor %}
</div>


