<script setup>
import { ref } from 'vue'
import './Hero.css'

const afbeeldingen = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'
]

const huidigeFoto = ref(0)

const volgendeFoto = () => {
  huidigeFoto.value = (huidigeFoto.value + 1) % afbeeldingen.length
}

const vorigeFoto = () => {
  huidigeFoto.value =
    (huidigeFoto.value - 1 + afbeeldingen.length) % afbeeldingen.length
}
</script>

<template>
  <section
    id="home"
    class="hero"
    :style="{ backgroundImage: `url(${afbeeldingen[huidigeFoto]})` }"
  >
    <div class="hero-overlay"></div>

    <button
      class="slider-knop slider-links"
      type="button"
      @click="vorigeFoto"
      aria-label="Vorige afbeelding"
    >
      ‹
    </button>

    <div class="container hero-inhoud">
      <div class="hero-tekst">
        <div class="hero-lijn"></div>

        <span class="hero-label">
          HIGH QUALITY GUARANTEED
        </span>

        <h1>
          Constructing Is Our Life Business
        </h1>

        <div class="hero-knoppen">
          <a href="#services" class="hero-knop hero-knop-oranje">
            OUR SERVICES
          </a>

          <a href="#about" class="hero-knop hero-knop-wit">
            ABOUT US
          </a>
        </div>
      </div>
    </div>

    <button
      class="slider-knop slider-rechts"
      type="button"
      @click="volgendeFoto"
      aria-label="Volgende afbeelding"
    >
      ›
    </button>
  </section>

  <section class="introductie">
    <div class="container introductie-inhoud">
      <h2>We Are BuildWall</h2>

      <p>
        We have been transforming the ideas and visions into award-winning projects.
      </p>

      <a href="#contact" class="introductie-knop">
        REQUEST A QUOTE
      </a>
    </div>
  </section>
</template>