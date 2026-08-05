/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          2: 'var(--accent-2)',
        },
        bg: 'var(--bg)',
        'topbar-bg': 'var(--topbar-bg)',
        chip: {
          DEFAULT: 'var(--chip-bg)',
          hover: 'var(--chip-hover-bg)',
        },
        border: {
          DEFAULT: 'var(--border)',
          weak: 'var(--border-weak)',
        },
        text: {
          DEFAULT: 'var(--text)',
          strong: 'var(--text-strong)',
        },
        muted: 'var(--muted)',
        'muted-dot': 'var(--muted-dot)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: 'var(--shadow)',
      },
      backgroundImage: {
        surface: 'var(--surface)',
      }
    },
  },
  plugins: [],
}
