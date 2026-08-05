<template>
  <main>
    <!-- Hero Section -->
    <section class="relative min-h-[640px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden py-12 md:py-20">
      <!-- Background Ambient Glow & Wallpaper Image -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <!-- Soft blue ambient gradient glows -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 via-secondary/10 to-transparent blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/15 to-transparent blur-3xl rounded-full"></div>
        
        <!-- Wallpaper Background Image (Positioned on the right as a glowing background illustration) -->
        <div class="absolute -right-16 lg:right-0 top-1/2 -translate-y-1/2 w-[520px] lg:w-[680px] h-[520px] lg:h-[680px] opacity-15 transition-opacity duration-500">
          <div class="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/hero_blue_vortex.png" 
              alt="Background Wallpaper Caelinitis" 
              class="w-full h-full object-cover rounded-full scale-105"
            />
            <!-- Radial overlay blending edge into site background -->
            <div class="absolute inset-0 bg-radial-fade"></div>
          </div>
        </div>
      </div>

      <div class="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div class="lg:col-span-7 space-y-8">
          <h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary leading-none tracking-tight">
            Ingénierie <br/><span class="text-gradient">de l'Excellence Numérique</span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Nous concevons des logiciels sur mesure adaptés au marché congolais. Notre équipe développe des solutions numériques performantes, pensées pour répondre aux besoins spécifiques des entreprises locales.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink to="/contact" class="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:bg-primary/90 active:scale-95 transition-all text-center inline-block">
              Travaillons ensemble
            </NuxtLink>
          </div>
        </div>

        <!-- Right side empty space allowing wallpaper to display clearly -->
        <div class="hidden lg:block lg:col-span-5 h-[420px] pointer-events-none"></div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h2 class="font-headline-lg text-headline-lg text-primary">Solutions d'Ingénierie de Précision</h2>
        <p class="text-on-surface-variant font-body-lg">Nous ne concevons pas seulement des sites internet ; nous développons des systèmes évolutifs qui stimulent la croissance.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <!-- Service Card 1 -->
        <div class="group bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl" data-icon="settings_input_component">settings_input_component</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Application Web</h3>
            <p class="text-on-surface-variant font-body-md mb-6">Des solutions web sur mesure, performantes et sécurisées, conçues pour s'adapter à l'évolution de votre entreprise.</p>
          </div>
          <a class="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all mt-auto" href="#">
            Découvrir le service <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <!-- Service Card 2 -->
        <div class="group bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl" data-icon="language">language</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Site Internet</h3>
            <p class="text-on-surface-variant font-body-md mb-6">Des vitrines digitales et plateformes e-commerce d'exception, optimisées pour le référencement et l'engagement client.</p>
          </div>
          <a class="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all mt-auto" href="#">
            Découvrir le service <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <!-- Service Card 3 -->
        <div class="group bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl" data-icon="smartphone">smartphone</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Application Mobile</h3>
            <p class="text-on-surface-variant font-body-md mb-6">Des applications mobiles intuitives et fluides pour iOS et Android, conçues pour optimiser l'interaction.</p>
          </div>
          <a class="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all mt-auto" href="#">
            Découvrir le service <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <!-- Service Card 4 -->
        <div class="group bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl" data-icon="desktop_windows">desktop_windows</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Logiciel Bureau</h3>
            <p class="text-on-surface-variant font-body-md mb-6">Des logiciels de bureau robustes et performants pour Windows et macOS, optimisant vos flux de travail.</p>
          </div>
          <a class="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all mt-auto" href="#">
            Découvrir le service <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
 
    <!-- Process Section -->
    <section class="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="font-headline-lg text-headline-lg text-primary">Notre Processus d'Ingénierie</h2>
        <p class="text-on-surface-variant font-body-lg">Nous suivons une méthodologie rigoureuse et axée sur les données pour garantir que chaque projet est livré à temps, dans le respect du budget et selon les normes techniques les plus élevées.</p>
      </div>

      <div class="max-w-2xl mx-auto relative">
        <!-- Vertical line for desktop -->
        <div class="absolute left-[27px] top-4 bottom-4 w-0.5 bg-primary/10 hidden md:block"></div>
        <div class="relative pl-16 pb-12">
          <div class="absolute left-0 top-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-10">
            <span class="material-symbols-outlined" data-icon="search">search</span>
          </div>
          <h4 class="font-headline-md text-headline-md text-primary mb-2">Découverte</h4>
          <p class="text-on-surface-variant">Définition de la portée du projet, des personas d'utilisateurs et des spécifications techniques lors d'ateliers approfondis.</p>
        </div>
        <div class="relative pl-16 pb-12">
          <div class="absolute left-0 top-0 w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center text-primary border border-primary/20 z-10">
            <span class="material-symbols-outlined" data-icon="palette">palette</span>
          </div>
          <h4 class="font-headline-md text-headline-md text-primary mb-2">Conception</h4>
          <p class="text-on-surface-variant">Prototypage itératif et conception d'interfaces haute fidélité axés sur l'identité de marque et la conversion des utilisateurs.</p>
        </div>
        <div class="relative pl-16 pb-12">
          <div class="absolute left-0 top-0 w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center text-primary border border-primary/20 z-10">
            <span class="material-symbols-outlined" data-icon="terminal">terminal</span>
          </div>
          <h4 class="font-headline-md text-headline-md text-primary mb-2">Développement</h4>
          <p class="text-on-surface-variant">Sprints de développement agiles avec intégration continue et protocoles rigoureux de tests d'assurance qualité (QA).</p>
        </div>
        <div class="relative pl-16">
          <div class="absolute left-0 top-0 w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center text-primary border border-primary/20 z-10">
            <span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
          </div>
          <h4 class="font-headline-md text-headline-md text-primary mb-2">Lancement</h4>
          <p class="text-on-surface-variant">Déploiement sans interruption de service, mise à l'échelle des infrastructures et support de maintenance post-lancement.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-margin-mobile md:px-margin-desktop mb-20">
      <div class="max-w-container-max mx-auto bg-gradient-to-r from-primary to-primary-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="w-full h-full" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div>
        </div>
        <h2 class="font-display-lg-mobile md:font-display-lg md:text-display-lg text-white mb-8 relative z-10">Prêt à transformer votre vision ?</h2>
        <p class="text-white/80 font-body-lg max-w-2xl mx-auto mb-10 relative z-10">Nos ingénieurs sont prêts à discuter de votre projet. Construisons ensemble quelque chose d'extraordinaire.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <NuxtLink to="/contact" class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl active:scale-95 transition-all inline-block">Contactez-nous</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
