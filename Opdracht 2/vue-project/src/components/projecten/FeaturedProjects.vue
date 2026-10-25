<script setup>
import './FeaturedProjects.css'

const projecten = [
  {
    titel: 'Shreveport, Bossier City',
    tekst: 'This luxury resort and senior independent living facility with a fitness center, pool, spa, sauna, hair salon, classroom space and more.',
    afbeelding: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Modern Building',
    afbeelding: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Coastal Project',
    afbeelding: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Architecture Project',
    afbeelding: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Interior Project',
    afbeelding: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Luxury House',
    afbeelding: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <section id="projects" class="projecten-sectie">
    <div class="container">
      <div class="oranje-lijn"></div>

      <h2 class="sectie-titel">
        Featured Projects
      </h2>

      <div class="project-filters">
        <button class="filter actief">ALL</button>
        <button class="filter">BUILDING</button>
        <button class="filter">CONSULTING</button>
        <button class="filter">INTERIOR</button>
        <button class="filter">OFFICE</button>
      </div>

      <div class="grid-projecten">
        <article
          v-for="(project, index) in projecten"
          :key="project.titel"
          class="project-kaart"
        >
          <img
            :src="project.afbeelding"
            :alt="project.titel"
          />

          <div class="project-overlay">
            <div class="project-inhoud">
              <div class="project-lijn"></div>

              <h3>{{ project.titel }}</h3>

              <p v-if="index === 0">
                {{ project.tekst }}
              </p>

              <a href="#">
                LEARN MORE
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>