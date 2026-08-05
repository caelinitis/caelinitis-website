<template>
  <main class="pt-32 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <!-- Hero Section with Contact Card -->
    <section class="mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-gutter items-center">
        <!-- Left Side: Hero Text -->
        <div class="space-y-6">
          <!-- <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Connectez-vous avec nos Ingénieurs
          </div> -->
          <h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-xl">
            Construisons Quelque Chose d'Extraordinaire
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Transformer des concepts de haut niveau en chefs-d'œuvre techniques. Contactez-nous pour une consultation et concevons ensemble votre avenir numérique.
          </p>
        </div>
        
        <!-- Right Side: Contact Card (Replaced Image) -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
          <div class="w-full max-w-md bg-primary p-6 md:p-8 rounded-xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden group z-10">
            <!-- Background Icon decoration -->
            <div class="absolute top-0 right-0 p-4 opacity-10 scale-150 group-hover:scale-110 transition-transform duration-1000">
              <span class="material-symbols-outlined text-9xl">alternate_email</span>
            </div>
            <div class="relative z-10">
              <h3 class="font-headline-md text-headline-md mb-6 text-center">Contactez-nous</h3>
              <div class="space-y-4">
                <a class="flex items-center gap-4 group/item" href="mailto:caelinitis@gmail.com">
                  <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300">
                    <span class="material-symbols-outlined text-white">mail</span>
                  </div>
                  <span class="font-body-md hover:text-blue-200 transition-colors">caelinitis@gmail.com</span>
                </a>
                <a class="flex items-center gap-4 group/item" href="tel:+2438383413">
                  <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300">
                    <span class="material-symbols-outlined text-white">call</span>
                  </div>
                  <span class="font-body-md hover:text-blue-200 transition-colors">+2438383413</span>
                </a>
                <div class="flex items-center gap-4 group/item">
                  <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">location_on</span>
                  </div>
                  <span class="font-body-md">Kinshasa, RDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Contact Caelinitis | Let's Build Something Extraordinary",
})
</script>

<style scoped>
.glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
.kinetic-border {
    position: relative;
    overflow: hidden;
}
.kinetic-border::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2563eb;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.kinetic-border:focus-within::after {
    transform: scaleX(1);
    transform-origin: left;
}
</style>
