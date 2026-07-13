<template>
  <div>
    <header :class="headerClass" class="fixed top-0 w-full z-50 shadow-[0px_4px_20px_rgba(46,49,146,0.05)] border-b border-white/20 transition-all duration-300">
      <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20">
        <div class="flex items-center gap-4">
          <!-- Mobile Menu Toggle Button (Visible on md and below) -->
          <span @click="toggleMobileMenu" class="material-symbols-outlined text-primary text-2xl cursor-pointer active:scale-95 transition-transform md:hidden" data-icon="menu">menu</span>
          <span class="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary">CAELINITIS</span>
        </div>
        <div class="flex items-center gap-6">
          <nav class="hidden md:flex gap-8 items-center">
            <NuxtLink class="text-secondary border-secondary font-label-md text-label-md" exact-active-class="border-b-2 font-bold" to="/">Acceuil</NuxtLink>
            <NuxtLink class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" to="/#services">Nos Services</NuxtLink>
            
          </nav>
          <NuxtLink to="/contact" class="bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold active:scale-95 transition-transform text-xs md:text-label-md text-center">
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] flex md:hidden">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="toggleMobileMenu"></div>
      
      <!-- Drawer -->
      <div class="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl flex flex-col animate-slide-in">
        <div class="flex items-center justify-between p-6 border-b border-surface-container">
          <span class="font-headline-md font-extrabold tracking-tighter text-primary">CAELINITIS</span>
          <span @click="toggleMobileMenu" class="material-symbols-outlined text-primary text-2xl cursor-pointer active:scale-95" data-icon="close">close</span>
        </div>
        <nav class="flex flex-col p-6 gap-6 flex-1 overflow-y-auto">
          <NuxtLink class="text-secondary font-bold font-label-md text-lg" exact-active-class="text-primary" to="/" @click="toggleMobileMenu">Acceuil</NuxtLink>
          <NuxtLink class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-lg" to="/#services" @click="toggleMobileMenu">Nos Services</NuxtLink>
          
        </nav>
        <div class="p-6 border-t border-surface-container">
          <NuxtLink to="/contact" class="w-full bg-primary text-white px-6 py-4 rounded-full font-bold active:scale-95 transition-transform text-lg shadow-lg text-center block" @click="toggleMobileMenu">
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerClass = ref('bg-white/70 backdrop-blur-md')
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling when open
  } else {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  if (window.scrollY > 20) {
    headerClass.value = 'bg-white/90 shadow-lg backdrop-blur-md'
  } else {
    headerClass.value = 'bg-white/70 backdrop-blur-md'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Cleanup in case it gets unmounted while open
})
</script>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out forwards;
}
</style>
