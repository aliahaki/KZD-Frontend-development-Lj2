<script setup>
import { ref } from 'vue'
import './Nav.css'

const menuOpen = ref(false)

const wisselMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header-boven">
      <div class="container header-boven-inhoud">
        <div class="logo">
          <span class="logo-strepen">▮▮</span>

          <div class="logo-tekst">
            <span class="logo-naam">BuildIcon</span>
            <span class="logo-subtitel">CONSTRUCTION COMPANY</span>
          </div>
        </div>

        <div class="header-informatie">
          <div class="informatie-blok">
            <span class="informatie-icoon">☎</span>

            <div>
              <span class="informatie-titel">CUSTOM SUPPORT & SALE</span>
              <strong>+7-495-1234567</strong>
            </div>
          </div>

          <div class="informatie-blok">
            <span class="informatie-icoon">◷</span>

            <div>
              <span class="informatie-titel">WORKING TIME</span>
              <strong>MON-SAT: 08:00-18:00</strong>
            </div>
          </div>

          <button class="offerte-knop">
            REQUEST A QUOTE
          </button>
        </div>

        <button
          class="menu-knop"
          type="button"
          @click="wisselMenu"
          aria-label="Menu openen"
        >
          ☰
        </button>
      </div>
    </div>

    <nav class="navigatie">
      <div class="container navigatie-inhoud">
        <div
          class="navigatie-links"
          :class="{ open: menuOpen }"
        >
          <a class="actief" href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#news">NEWS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <button
          class="zoek-knop"
          type="button"
          aria-label="Zoeken"
        >
          ⌕
        </button>
      </div>
    </nav>
  </header>
</template>