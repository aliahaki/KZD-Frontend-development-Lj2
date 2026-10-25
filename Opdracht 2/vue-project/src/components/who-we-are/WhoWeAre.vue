<script setup>
import './WhoWeAre.css'

const kaarten = [
  {
    titel: 'Construction',
    tekst: 'We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.',
    afbeelding: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'About Us',
    tekst: 'BuildWall is completely client-oriented company. We are able meet schedule deadlines with top quality.',
    afbeelding: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'
  },
  {
    titel: 'Effective Teamwork',
    tekst: 'We have a very good team-based and teamwork attitude, working together to find the best solutions.',
    afbeelding: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <section id="about" class="who-we-are">
    <div class="container">
      <div class="oranje-lijn"></div>
      <h2 class="sectie-titel">Who we are</h2>

      <div class="grid-3 kaarten-grid">
        <article
          v-for="kaart in kaarten"
          :key="kaart.titel"
          class="informatie-kaart"
        >
          <div class="kaart-afbeelding">
            <img
              :src="kaart.afbeelding"
              :alt="kaart.titel"
            />
          </div>

          <div class="kaart-inhoud">
            <h3>{{ kaart.titel }}</h3>

            <div class="kleine-lijn"></div>

            <p>
              {{ kaart.tekst }}
            </p>

            <a href="#" class="lees-meer-knop">
              LEARN MORE
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>