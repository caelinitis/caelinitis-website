<template>
  <main>
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden py-10">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-secondary/20 to-transparent blur-3xl rounded-full"></div>
      </div>
      <div class="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="space-y-8">
          <h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary leading-none tracking-tight">
            Ingénierie <br/><span class="text-gradient">de l'Excellence Numérique</span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Nous concevons des logiciels sur mesure adaptés au marché congolais. Notre equipe développe des solutions numériques performantes, pensées pour répondre aux besoins spécifiques des entreprises locales.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button class="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg active:scale-95 transition-all">
              Travaillons ensemble
            </button>
          </div>
        </div>
        <div class="relative hidden lg:block">
          <div class="glass-card p-4 rounded-2xl shadow-2xl animate-float">
            <div class="w-full aspect-[4/3] rounded-xl bg-cover bg-center" data-alt="A clean, minimalist high-tech workspace featuring a high-end laptop with code displayed on the screen..." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNTqMsTu0evqbRbvkT-WwFSVL8nEr4v9qO14UQf47PNxCp2wkBgkQ0dE775lmZKML0VG0RIoNlxi8pcb9HN1MBqUPvOaRhZU1Bykw2meUatbE70qnChqA31cZcbMyrS7YW9JOW7GikXvp44Iadh62S4FZzdfF6PKOWNpEe0N3mQ0C5ckwo9rj7ue9EZBU9Dy3V5X2suo29TW1VR3ZrprrodQITe30s4sgCyF1FAHhr88r53ixuzSKtihK9dp_JwPMwJfREbKrIal8s')"></div>
          </div>
        </div>
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

    <!-- Portfolio Section (Commented Out) -->
    <!--
    <section class="py-32 bg-on-surface text-white">
      <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div class="max-w-2xl">
            <p class="text-secondary font-label-md text-label-md tracking-widest uppercase mb-4">Our Work</p>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Impactful Digital Case Studies</h2>
          </div>
          <button class="bg-primary text-white px-8 py-4 rounded-full font-bold active:scale-95 transition-all">View All Work</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="group relative overflow-hidden rounded-3xl">
            <div class="aspect-[16/10] overflow-hidden">
              <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A professional FinTech dashboard interface displayed on a tablet." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI4VAgfMb-G1LeVaF3wujLwywIHIfpX4lihSXhnrAndaT9xClsKuq_Ptdqd9CPoFGXVRMT3GbnGgTdQRcChq_mNDvtgof5Kh7pKDII1sOKfi3ZQgPc_ntEwMETIj93AtzUP7NPQNCFNlby4sxgKQfoKb68VTTi4JXrxKVhONNVCGQzH3cVzePVyrBW2yACusUc1cKZCjW91u5aEmm8Urml3qp6N3TLhbyWK2Ub_T_pi9Ig5eqKnHDmdrOUrTPskZZWfegu8mE0j7rk')"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <div class="flex gap-2 mb-4">
                <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">FinTech</span>
                <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">Dashboard</span>
              </div>
              <h3 class="font-headline-md text-headline-md mb-2">FinTech Dashboard</h3>
              <p class="text-white/70 mb-6 max-w-sm">Optimizing data processing for a global crypto exchange with real-time analytics.</p>
              <a class="inline-flex items-center gap-2 text-secondary-fixed font-bold hover:gap-4 transition-all" href="#">
                View Case Study <span class="material-symbols-outlined" data-icon="north_east">north_east</span>
              </a>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-3xl">
            <div class="aspect-[16/10] overflow-hidden">
              <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A premium HealthTech mobile application UI shown on an iPhone." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNTAvwemQd0hwGnEMjh0K9N0DYHE6xU307ONl54FcKcKEpCRzatEt_KHcGhWN_c9mGOH_wCHRngO-i6Z5rqUKalKS9BRP7Zv5pBkhM1W5xYYbSHNjbDUF1hBfU9EG2lCK4sV6I4Gs_xBhIHzL1cTptHaO5Fq-KBl7nUggTo4kjTArOFpu76y178oIeCW4sKwDwn1bAm5S70Qc8Y95I2KycgcvXdaMu8zKqd_3M5JNuAmy8elFF5rhT49HEV8eRsc7qRpjmv-E6pikF')"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <div class="flex gap-2 mb-4">
                <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">HealthTech</span>
                <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">Mobile App</span>
              </div>
              <h3 class="font-headline-md text-headline-md mb-2">HealthTech App</h3>
              <p class="text-white/70 mb-6 max-w-sm">Designing a seamless patient portal for the leading healthcare provider in NYC.</p>
              <a class="inline-flex items-center gap-2 text-secondary-fixed font-bold hover:gap-4 transition-all" href="#">
                View Case Study <span class="material-symbols-outlined" data-icon="north_east">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
 
    <!-- Process Section -->
    <section class="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-primary mb-6">Notre Processus d'Ingénierie</h2>
          <p class="text-on-surface-variant font-body-lg mb-12">Nous suivons une méthodologie rigoureuse et axée sur les données pour garantir que chaque projet est livré à temps, dans le respect du budget et selon les normes techniques les plus élevées.</p>
          <div class="space-y-0 relative">
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
        </div>
        <div class="bg-primary p-12 rounded-3xl text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <span class="material-symbols-outlined text-6xl text-secondary-fixed mb-8 opacity-50" data-icon="format_quote">format_quote</span>
          <blockquote class="text-2xl md:text-3xl font-bold leading-tight mb-8">
            "CAELINITIS a livré notre plateforme avec 3 semaines d'avance et une qualité de code qui a dépassé nos critères internes. Ils sont un véritable partenaire d'ingénierie, pas seulement un prestataire."
          </blockquote>
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white/20" data-alt="A professional headshot of a middle-aged male CTO with a modern tech-casual aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrK9KmAnGMyse9083k9vVcKnBll4FSwy7NFdukxa9je10z9-9QLnh9TxFC7emYJt-qqEAftOpg3pPWQSKp1npi6nHPeAkwzSR9I7qWtr-UM3paBcgQQczpk5EFBYHQGvkjdT49gT94LEBUA7KqAlIXBIEe38nqsQgFLipYnR_S2sEqnsZSGbUtFtEiuXl5GeoB9iHXOHDa43ur56ERXa4-8kKhsfO60n7sRuINVlY6s39k72X7I7fWEnv45bzfiP1BaZzvqi2ZhDVy')"></div>
            <div>
              <p class="font-bold">David Chen</p>
              <p class="text-sm text-white/60">CTO, Vertex Analytics</p>
            </div>
          </div>
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
          <button class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl active:scale-95 transition-all">Contactez-nous</button>
        </div>
      </div>
    </section>
  </main>
</template>
