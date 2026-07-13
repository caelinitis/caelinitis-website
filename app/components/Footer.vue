<template>
  <footer class="bg-surface-container-lowest border-t border-outline-variant/30">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
      <div class="space-y-6">
        <span class="font-headline-md text-headline-md text-primary font-extrabold tracking-tighter">CAELINITIS</span>
        <p class="text-on-surface-variant font-body-md pr-8">
          Architecting the next generation of digital infrastructure for visionaries and enterprises alike.
        </p>
        <div class="flex gap-4">
          <a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span class="material-symbols-outlined" data-icon="terminal">terminal</span>
          </a>
          <a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span class="material-symbols-outlined" data-icon="group">group</span>
          </a>
          <a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="mailto:caelinitis@gmail.com">
            <span class="material-symbols-outlined" data-icon="mail">mail</span>
          </a>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-primary mb-6">Nos Services</h4>
        <ul class="space-y-4 text-on-surface-variant">
          <li><NuxtLink class="hover:text-primary transition-colors" to="/#services">Application Web</NuxtLink></li>
          <li><NuxtLink class="hover:text-primary transition-colors" to="/#services">Site Internet</NuxtLink></li>
          <li><NuxtLink class="hover:text-primary transition-colors" to="/#services">Application Mobile</NuxtLink></li>
          <li><NuxtLink class="hover:text-primary transition-colors" to="/#services">Logiciel Bureau</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-primary mb-6">Company</h4>
        <ul class="space-y-4 text-on-surface-variant">
          <li><a class="hover:text-primary transition-colors" href="#">Portfolio</a></li>
          <li><a class="hover:text-primary transition-colors" href="#">Our Process</a></li>
          <li><a class="hover:text-primary transition-colors" href="#">Careers</a></li>
          <li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-primary mb-6">Contact</h4>
        <ul class="space-y-4 text-on-surface-variant">
          <li class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" data-icon="location_on">location_on</span> Kinshasa, RDC</li>
          <li class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" data-icon="alternate_email">alternate_email</span> <a href="mailto:caelinitis@gmail.com" class="hover:text-primary transition-colors">caelinitis@gmail.com</a></li>
          <li class="flex items-center gap-3"><span class="material-symbols-outlined text-sm" data-icon="call">call</span> <a href="tel:+2438383413" class="hover:text-primary transition-colors">+243 83 834 13</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-outline-variant/10 py-10 px-margin-mobile text-center">
      <p class="text-on-surface-variant text-sm font-label-md">© {{ new Date().getFullYear() }} CAELINITIS. IDEE EN LOGICIEL. SUR-MESURE POUR LE MARCHÉ CONGOLAIS.</p>
    </div>
  </footer>
</template>