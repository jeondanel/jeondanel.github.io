<script lang="ts">
  import { onMount } from 'svelte'

  type SectionId = 'home' | 'projects' | 'about' | 'contact'

  type NavItem = {
    id: SectionId
    label: string
  }

  type Project = {
    title: string
    description: string
    tags: string[]
    accent: string
  }

  type SocialLink = {
    label: string
    value: string
    href: string
    icon: 'github' | 'linkedin' | 'facebook' | 'location'
  }

  type DownloadLink = {
    label: string
    value: string
    href: string
    downloadName: string
    icon: 'resume' | 'cv'
  }

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ]

  const projects: Project[] = [
    {
      title: 'RPC Tech Computer Store',
      description:
        'This is an E-Commerce Website with a Decision Support System, built to help users select compatible computer parts based on their preferences (e.g., budget, usage). The website allows customers to purchase desktop hardware and peripherals from RPC Tech Computer Store with secure payment integration using Paymongo.',
      tags: ['HTML', 'CSS', 'JavaScript (ES6+)', 'jQuery', 'PHP', 'PayMongo API', 'MySQL', 'XAMPP'],
      accent: '01',
    },
    {
      title: 'HerCycle',
      description:
        'Hercycle is a comprehensive menstrual cycle tracking application designed to help users monitor their periods, ovulation, and fertility. By logging daily biomarkers and symptoms, users can gain insights into their reproductive health, predict future cycles, and make informed decisions about their well-being.',
      tags: ['VB.NET', 'Guna UI', 'JawsDB MySQL', 'XAMPP'],
      accent: '02',
    },
    {
      title: 'Eco-Hydrate',
      description:
        'This project is an Arduino-based smart water dispenser with a sustainability-focused system, designed to encourage the use of reusable plastic bottles while reducing single-use plastic waste. The system uses a “bottle-as-a-coin” mechanism, where users insert bottles to gain water refill time, promoting recycling and responsible water consumption. EcoHydrate provides an innovative and eco-friendly solution that combines accessibility, convenience, and environmental awareness.',
      tags: ['Arduino UNO', 'C++'],
      accent: '03',
    },
  ]

  const techStacks = [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS / Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Svelte', icon: 'devicon-svelte-plain colored' },
    { name: 'Visual Basic .NET', icon: 'devicon-visualbasic-plain colored' },
    { name: 'ASP.NET MVC', icon: 'devicon-dot-net-plain colored' },
    { name: 'C++ for Arduino', icon: 'devicon-arduino-plain colored' },
  ]

  const marqueeTechStacks = [...techStacks, ...techStacks]

  const socialLinks: SocialLink[] = [
    {
      label: 'GitHub',
      value: 'jeondanel',
      href: 'https://github.com/jeondanel',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: 'in/daneltungpalan',
      href: 'https://www.linkedin.com/in/daneltungpalan/',
      icon: 'linkedin',
    },
    {
      label: 'Facebook',
      value: '@dnla.mac',
      href: 'https://www.facebook.com/dnla.mac/',
      icon: 'facebook',
    },
    {
      label: 'Location',
      value: 'Quezon City, Philippines',
      href: 'https://www.google.com/maps/search/Quezon+City,+Philippines',
      icon: 'location',
    },
  ]

  const downloadLinks: DownloadLink[] = [
    {
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
      downloadName: 'Danel-Tungpalan-Resume.pdf',
      icon: 'resume',
    },
    {
      label: 'CV',
      value: 'Download PDF',
      href: '/cv.pdf',
      downloadName: 'Danel-Tungpalan-CV.pdf',
      icon: 'cv',
    },
  ]

  const socialIconSvgs = {
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.77.6-3.35-1.19-3.35-1.19-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.88 1.51 2.3 1.07 2.86.82.09-.64.35-1.07.64-1.32-2.21-.25-4.54-1.1-4.54-4.88 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.37.21 2.38.11 2.63.64.69 1.03 1.58 1.03 2.66 0 3.79-2.34 4.63-4.56 4.88.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.75h3.95V21H3V8.75Zm6.46 0h3.78v1.67h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21h-3.95v-5.47c0-1.31-.03-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21H9.46V8.75Z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8.25h2.75l.42-3.21H13.5V8.48c0-.93.26-1.57 1.61-1.57h1.72V4.02c-.3-.04-1.33-.12-2.53-.12-2.5 0-4.21 1.52-4.21 4.31v2.33H7.33v3.21h2.76V22h3.41Z"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C8.13 2 5 5.1 5 8.94c0 5.43 7 12.56 7 12.56s7-7.13 7-12.56C19 5.1 15.87 2 12 2Zm0 9.5A2.56 2.56 0 1 1 12 6a2.56 2.56 0 0 1 0 5.5Z"/></svg>',
  } as const

  let userMessage = ''
  let copiedNumber = false

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('09674801002')
    copiedNumber = true
    setTimeout(() => {
      copiedNumber = false
    }, 2000)
  }

  $: emailHref = `mailto:danelmacujatungpalan@gmail.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(userMessage)}`

  let activeSection: SectionId = 'home'
  let theme: 'dark' | 'light' = 'dark'
  let sectionElements: HTMLElement[] = []

  const syncTheme = (nextTheme: 'dark' | 'light') => {
    theme = nextTheme
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem('portfolio-theme', nextTheme)
  }

  const updateActiveSection = () => {
    const indicatorLine = 140
    const candidateSections = sectionElements.filter((section) => {
      const bounds = section.getBoundingClientRect()

      return bounds.top <= indicatorLine && bounds.bottom > indicatorLine
    })

    if (candidateSections.length > 0) {
      activeSection = candidateSections[0].id as SectionId
      return
    }

    const nearestSection = sectionElements
      .map((section) => ({
        section,
        distance: Math.abs(section.getBoundingClientRect().top - indicatorLine),
      }))
      .sort((left, right) => left.distance - right.distance)[0]

    if (nearestSection) {
      activeSection = nearestSection.section.id as SectionId
    }
  }

  const toggleTheme = () => {
    syncTheme(theme === 'dark' ? 'light' : 'dark')
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null
    if (savedTheme) {
      syncTheme(savedTheme)
    }

    sectionElements = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  })
</script>

<svelte:head>
  <title>Danel Tungpalan | Aspiring Quality Analyst & Developer</title>
  <meta
    name="description"
    content="Portfolio of Danel M. Tungpalan, an aspiring Quality Analyst and Software Developer from Quezon City, Philippines. Check out my software, hardware projects, and skills."
  />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jeondanel.github.io/" />
  <meta property="og:title" content="Danel Tungpalan | Aspiring Quality Analyst & Developer" />
  <meta property="og:description" content="Portfolio of Danel M. Tungpalan, an aspiring Quality Analyst and Software Developer from Quezon City, Philippines." />
  <meta property="og:image" content="https://jeondanel.github.io/favicon.svg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://jeondanel.github.io/" />
  <meta property="twitter:title" content="Danel Tungpalan | Aspiring Quality Analyst & Developer" />
  <meta property="twitter:description" content="Portfolio of Danel M. Tungpalan, an aspiring Quality Analyst and Software Developer from Quezon City, Philippines." />
  <meta property="twitter:image" content="https://jeondanel.github.io/favicon.svg" />
</svelte:head>

<div class="relative overflow-x-clip">
  <div class="background background-one"></div>
  <div class="background background-two"></div>
  <div class="binary-rain" aria-hidden="true"></div>

  <header class="sticky top-0 z-[100] flex items-center justify-between gap-4 p-4 md:px-[clamp(1rem,3vw,2rem)] border-b border-border-weak bg-topbar-bg backdrop-blur-[18px] max-[960px]:flex-col max-[960px]:items-start">
    <a class="font-sans text-[1.65rem] font-bold tracking-[0.04em] text-text-strong" href="#home">dnla.mac</a>

    <nav aria-label="Primary" class="flex flex-wrap justify-end gap-2 max-[960px]:w-full max-[960px]:justify-start">
      {#each navItems as item}
        <a
          href={`#${item.id}`}
          class={`inline-flex items-center gap-0 py-[0.78rem] px-4 border border-transparent rounded-full bg-chip text-muted text-[0.95rem] transition-all duration-[160ms] ease-out hover:-translate-y-[1px] hover:border-[rgba(255,48,48,0.28)] hover:text-text-strong hover:bg-chip-hover hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] focus-visible:-translate-y-[1px] focus-visible:border-[rgba(255,48,48,0.28)] focus-visible:text-text-strong focus-visible:bg-chip-hover focus-visible:shadow-[0_14px_30px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(126,231,255,0.75)] focus-visible:outline-offset-2 max-sm:flex-[1_1_calc(50%-0.5rem)] max-sm:justify-center ${
            activeSection === item.id 
              ? '-translate-y-[1px] border-[rgba(255,48,48,0.28)] text-text-strong bg-chip-hover shadow-[0_14px_30px_rgba(0,0,0,0.18),_inset_0_0_0_1px_rgba(255,48,48,0.55)]' 
              : ''
          }`}
          aria-current={activeSection === item.id ? 'page' : undefined}
        >
          <span>{item.label}</span>
        </a>
      {/each}
    </nav>
    <div class="flex items-center gap-3">
      <button
        type="button"
        class="inline-flex items-center gap-[0.6rem] py-[0.78rem] px-4 border border-transparent rounded-full bg-chip text-muted text-[0.95rem] cursor-pointer transition-all duration-[160ms] ease-out hover:-translate-y-[1px] hover:border-[rgba(126,231,255,0.28)] hover:text-text-strong hover:bg-chip-hover hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] focus-visible:-translate-y-[1px] focus-visible:border-[rgba(126,231,255,0.28)] focus-visible:text-text-strong focus-visible:bg-chip-hover focus-visible:shadow-[0_14px_30px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(126,231,255,0.75)] focus-visible:outline-offset-2"
        on:click={toggleTheme}
        aria-pressed={theme === 'light'}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span class="material-symbols-outlined text-[1.05rem] text-accent" aria-hidden="true">
          {theme === 'dark' ? 'dark_mode' : 'light_mode'}
        </span>
        {#key theme}
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        {/key}
      </button>
    </div>
  </header>

  <main class="relative z-10 w-full mx-auto pt-[clamp(1rem,2vw,2rem)] pb-16 px-[clamp(1rem,4vw,3rem)] max-sm:px-3">
    <section id="home" class="min-h-[calc(100svh-7rem)] grid content-start gap-[0.85rem] pt-8 md:content-center py-[clamp(2rem,5vw,4rem)] px-0 scroll-mt-[6.5rem] max-[960px]:min-h-0">
      <div class="hero-copy">
        <p class="mt-0 mx-0 mb-12 text-accent uppercase tracking-[0.24em] text-[0.98rem] font-bold text-base max-sm:text-[1.05rem]">Hi, I'm Danel</p>
        <h1 class="m-0 mb-8 font-sans font-bold text-text-strong leading-[0.94] max-w-[11ch] text-[clamp(3.8rem,9vw,7rem)]">Aspiring Quality Analyst.</h1>
        <p class="max-w-[60ch] mt-0 mx-0 mb-12 text-[1.05rem] text-text">
          I build software and microcontroller-based systems, and I'm working toward a career in
          Quality Assurance, where I can contribute to building reliable, high-quality products
          while continuously learning and growing.
        </p>

        <div class="flex flex-wrap gap-3 mt-0 mx-0 mb-8" aria-label="Social links and downloads">
          {#each socialLinks as link}
            <a 
              href={link.href} 
              target="_blank" 
              rel="noreferrer noopener"
              class="inline-flex items-center gap-[0.7rem] py-[0.85rem] px-4 rounded-full border border-border bg-surface shadow-custom transition-all duration-[160ms] ease-out hover:-translate-y-[2px] hover:border-[rgba(255,48,48,0.28)] hover:bg-chip-hover focus-visible:-translate-y-[2px] focus-visible:border-[rgba(255,48,48,0.28)] focus-visible:bg-chip-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(126,231,255,0.75)] focus-visible:outline-offset-2 max-sm:w-full max-sm:justify-start"
            >
              <span class="inline-flex items-center justify-center flex-none text-text-strong" aria-hidden="true">
                {#if link.icon === 'location'}
                  <span class="material-symbols-outlined text-[1.05rem] text-accent">location_on</span>
                {:else}
                  <span class="w-[1.1rem] h-[1.1rem] inline-flex items-center justify-center">
                    {@html socialIconSvgs[link.icon]}
                  </span>
                {/if}
              </span>
              <span class="text-accent text-[0.82rem] tracking-[0.16em] uppercase">{link.label}</span>
              <strong class="text-text-strong text-[0.98rem] font-semibold">{link.value}</strong>
            </a>
          {/each}

          {#each downloadLinks as link}
            <a 
              href={link.href} 
              download={link.downloadName} 
              class="inline-flex items-center gap-[0.7rem] py-[0.85rem] px-4 rounded-full border border-border bg-surface shadow-custom transition-all duration-[160ms] ease-out hover:-translate-y-[2px] hover:border-[rgba(255,48,48,0.28)] hover:bg-chip-hover focus-visible:-translate-y-[2px] focus-visible:border-[rgba(255,48,48,0.28)] focus-visible:bg-chip-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(126,231,255,0.75)] focus-visible:outline-offset-2 max-sm:w-full max-sm:justify-start"
            >
              <span class="inline-flex items-center justify-center flex-none text-text-strong" aria-hidden="true">
                {#if link.icon === 'resume'}
                  <span class="material-symbols-outlined text-[1.05rem] text-accent">description</span>
                {:else}
                  <span class="material-symbols-outlined text-[1.05rem] text-accent">assignment</span>
                {/if}
              </span>
              <strong class="text-accent text-[0.98rem] font-semibold">{link.label}</strong>
              <span class="material-symbols-outlined text-[1.05rem] text-accent ml-[0.15rem]" aria-hidden="true">download</span>
            </a>
          {/each}
        </div>
      </div>

      <div class="hero-carousel">
        <div class="grid gap-[0.55rem] mt-0">
          <div class="overflow-hidden pb-[0.2rem] [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]" aria-label="Tech stack carousel">
            <ul class="tech-carousel-track list-none p-0 m-0">
              {#each marqueeTechStacks as stack}
                <li class="flex items-center gap-[0.9rem] p-4 rounded-2xl border border-border bg-surface shadow-custom min-w-[10.5rem]">
                  <i class={`inline-flex items-center justify-center w-[2.55rem] h-[2.55rem] flex-none text-[2.05rem] leading-none ${stack.icon}`} aria-hidden="true"></i>
                  <p class="m-0 text-text-strong text-base leading-[1.35] font-semibold">{stack.name}</p>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="min-h-[calc(100svh-7rem)] grid content-center py-[clamp(2rem,5vw,4rem)] px-0 scroll-mt-[6.5rem] max-[960px]:min-h-0">
      <div class="grid gap-[0.75rem]">
        <p class="mt-0 mx-0 mb-12 text-accent uppercase tracking-[0.24em] text-[0.98rem] font-bold">Projects</p>
        <h2 class="m-0 mb-8 font-sans font-bold text-text-strong leading-[0.94] max-w-[12ch] text-[clamp(2.4rem,5vw,4.5rem)]">Works I made or took part of.</h2>
      </div>

      <div class="grid grid-cols-3 max-[960px]:grid-cols-1 gap-4 mt-8">
        {#each projects as project}
          <article class="border border-border bg-surface shadow-custom rounded-[1.5rem] p-[1.4rem]">
            <div class="flex items-center justify-between gap-4 mb-[1.2rem]">
              <span class="text-accent text-[1.2rem] font-bold">{project.accent}</span>
              <p class="text-[0.82rem] tracking-[0.16em] uppercase text-muted m-0">Selected work</p>
            </div>
            <h3 class="m-0 mb-8 font-sans font-bold text-text-strong leading-[0.94] text-[2.2rem]">{project.title}</h3>
            <p class="m-0 text-text leading-[1.7]">{project.description}</p>
            <ul class="flex flex-wrap gap-2 list-none mt-[1.25rem] mx-0 mb-0 p-0">
              {#each project.tags as tag}
                <li class="py-[0.45rem] px-[0.75rem] rounded-full border border-border bg-chip text-[0.9rem]">{tag}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </section>

    <section id="about" class="min-h-[calc(100svh-7rem)] grid content-center py-[clamp(2rem,5vw,4rem)] px-0 scroll-mt-[6.5rem] max-[960px]:min-h-0 grid-cols-[1fr_1.05fr] max-[960px]:grid-cols-1 gap-8 items-start">
      <div class="grid gap-[0.75rem]">
        <p class="mt-0 mx-0 mb-12 text-accent uppercase tracking-[0.24em] text-[0.98rem] font-bold">About me</p>
        <h2 class="m-0 mb-8 font-sans font-bold text-text-strong leading-[0.94] max-w-[12ch] text-[clamp(2.4rem,5vw,4.5rem)]">Who am I?</h2>
      </div>

      <div class="border border-border bg-surface shadow-custom rounded-[1.5rem] p-[1.4rem] grid gap-4">
        <p class="m-0 text-text leading-[1.75]">
          I am Danel M. Tungpalan, an aspiring Quality Analyst with a passion for building software and microcontroller-based systems. I am dedicated to contributing to the development of reliable, high-quality products while continuously learning and growing in my career.
        </p>
        <p class="m-0 text-text leading-[1.75]">
          I live in Quezon City, Philippines and currently studying my senior year in Bachelor of Science in Information Technology at the Quezon City University - San Bartolome Main Campus. I am eager to apply my skills and knowledge to real-world projects and make a positive impact in the field of web development, microcontrollers projects, and quality assurance.
        </p>
      </div>
    </section>

    <section id="contact" class="min-h-[calc(100svh-7rem)] grid content-center py-[clamp(2rem,5vw,4rem)] px-0 scroll-mt-[6.5rem] max-[960px]:min-h-0 grid-cols-[1fr_1.05fr] max-[960px]:grid-cols-1 gap-8 items-start">
      <div class="grid gap-[0.75rem]">
        <p class="mt-0 mx-0 mb-12 text-accent uppercase tracking-[0.24em] text-[0.98rem] font-bold">Contact</p>
        <h2 class="m-0 mb-8 font-sans font-bold text-text-strong leading-[0.94] max-w-[12ch] text-[clamp(2.4rem,5vw,4.5rem)]">Let's connect!</h2>
      </div>

      <div class="grid gap-4 w-full">
        <!-- Email Card with Message Field -->
        <div class="border border-border bg-surface shadow-custom flex flex-col gap-4 p-5 rounded-[1.4rem]">
          <div class="flex items-center justify-between gap-4">
            <span class="text-muted text-[0.85rem] tracking-[0.16em] uppercase">Email</span>
            <strong class="m-0 text-right text-text-strong break-all max-sm:text-left text-sm font-semibold">danelmacujatungpalan@gmail.com</strong>
          </div>
          
          <textarea
            bind:value={userMessage}
            placeholder="Type your message here..."
            class="w-full p-3 rounded-xl border border-border/60 bg-bg text-text placeholder-muted focus:outline-none focus:border-accent resize-none h-24 text-sm font-sans"
          ></textarea>

          <a 
            href={emailHref}
            class="inline-flex items-center justify-center py-2 px-6 rounded-full bg-accent hover:bg-accent-2 text-text-strong font-semibold text-sm transition-all duration-[160ms] self-end cursor-pointer"
          >
            <span>Send Email</span>
          </a>
        </div>

        <!-- Phone Card with Copy Feature -->
        <button 
          on:click={handleCopyNumber}
          class="border border-border bg-surface shadow-custom flex items-center justify-between gap-4 p-[1.2rem_1.4rem] rounded-[1.4rem] leading-[1.75] transition-all duration-[160ms] ease-out hover:-translate-y-[2px] hover:border-[rgba(126,231,255,0.28)] hover:bg-chip-hover w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(126,231,255,0.75)] focus-visible:outline-offset-2"
        >
          <span class="text-muted text-[0.85rem] tracking-[0.16em] uppercase">Contact Number</span>
          <strong class="m-0 text-right text-text-strong break-all max-sm:text-left">
            {#if copiedNumber}
              Copied!
            {:else}
              <span>09674801002</span>
            {/if}
          </strong>
        </button>
      </div>
    </section>
  </main>

  <footer class="relative z-10 w-full mx-auto pb-12 px-[clamp(1rem,4vw,3rem)] max-sm:px-3 border-t border-border-weak pt-8">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-sm font-mono max-w-[1200px] mx-auto">
      <p>&copy; {new Date().getFullYear()} Danel Tungpalan. All rights reserved.</p>
      <p>Contact Me!</p>
    </div>
  </footer>
</div>
