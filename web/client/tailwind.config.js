/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[mode="dark"]'],
  theme: {
    colors: {
      prose: {
        DEFAULT: 'var(--color-text)',
        darker: 'var(--color-text-darker)',
        lighter: 'var(--color-text-lighter)',
      },
      dark: {
        DEFAULT: 'var(--color-dark)',
        darker: 'var(--color-dark-darker)',
        lighter: 'var(--color-dark-lighter)',
      },
      light: {
        DEFAULT: 'var(--color-light)',
        darker: 'var(--color-light-darker)',
        lighter: 'var(--color-light-lighter)',
      },
      overlay: {
        DEFAULT: 'var(--color-overlay)',
        darker: 'var(--color-overlay-darker)',
        lighter: 'var(--color-overlay-lighter)',
      },
      editor: {
        DEFAULT: 'var(--color-editor)',
        darker: 'var(--color-editor-darker)',
        lighter: 'var(--color-editor-lighter)',
      },
      logo: {
        DEFAULT: 'var(--color-logo)',
        darker: 'var(--color-logo-darker)',
        lighter: 'var(--color-logo-lighter)',
      },
      theme: {
        DEFAULT: 'var(--color-theme)',
        darker: 'var(--color-theme-darker)',
        lighter: 'var(--color-theme-lighter)',
      },
      divider: {
        DEFAULT: 'var(--color-divider)',
      },
      brand: {
        10: 'var(--color-brand-10)',
        100: 'var(--color-brand-100)',
        200: 'var(--color-brand-200)',
        300: 'var(--color-brand-300)',
        400: 'var(--color-brand-400)',
        500: 'var(--color-brand-500)',
        600: 'var(--color-brand-600)',
        700: 'var(--color-brand-700)',
        800: 'var(--color-brand-800)',
        900: 'var(--color-brand-900)',
      },
      neutral: {
        10: 'var(--color-neutral-10)',
        20: 'var(--color-neutral-20)',
        30: 'var(--color-neutral-30)',
        40: 'var(--color-neutral-40)',
        50: 'var(--color-neutral-50)',
        60: 'var(--color-neutral-60)',
        70: 'var(--color-neutral-70)',
        80: 'var(--color-neutral-80)',
        90: 'var(--color-neutral-90)',
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
      },
      primary: {
        10: 'var(--color-primary-10)',
        20: 'var(--color-primary-20)',
        30: 'var(--color-primary-30)',
        40: 'var(--color-primary-40)',
        50: 'var(--color-primary-50)',
        60: 'var(--color-primary-60)',
        70: 'var(--color-primary-70)',
        80: 'var(--color-primary-80)',
        90: 'var(--color-primary-90)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        10: 'var(--color-secondary-10)',
        20: 'var(--color-secondary-20)',
        30: 'var(--color-secondary-30)',
        100: 'var(--color-secondary-100)',
        200: 'var(--color-secondary-200)',
        300: 'var(--color-secondary-300)',
        400: 'var(--color-secondary-400)',
        500: 'var(--color-secondary-500)',
        600: 'var(--color-secondary-600)',
        700: 'var(--color-secondary-700)',
        800: 'var(--color-secondary-800)',
        900: 'var(--color-secondary-900)',
      },
      accent: {
        100: 'var(--color-accent-100)',
        200: 'var(--color-accent-200)',
        300: 'var(--color-accent-300)',
        400: 'var(--color-accent-400)',
        500: 'var(--color-accent-500)',
        600: 'var(--color-accent-600)',
        700: 'var(--color-accent-700)',
        800: 'var(--color-accent-800)',
        900: 'var(--color-accent-900)',
      },
      success: {
        10: 'var(--color-success-10)',
        20: 'var(--color-success-20)',
        30: 'var(--color-success-30)',
        40: 'var(--color-success-40)',
        100: 'var(--color-success-100)',
        200: 'var(--color-success-200)',
        300: 'var(--color-success-300)',
        400: 'var(--color-success-400)',
        500: 'var(--color-success-500)',
        600: 'var(--color-success-600)',
        700: 'var(--color-success-700)',
        800: 'var(--color-success-800)',
        900: 'var(--color-success-900)',
      },
      danger: {
        10: 'var(--color-danger-10)',
        20: 'var(--color-danger-20)',
        30: 'var(--color-danger-30)',
        40: 'var(--color-danger-40)',
        100: 'var(--color-danger-100)',
        200: 'var(--color-danger-200)',
        300: 'var(--color-danger-300)',
        400: 'var(--color-danger-400)',
        500: 'var(--color-danger-500)',
        600: 'var(--color-danger-600)',
        700: 'var(--color-danger-700)',
        800: 'var(--color-danger-800)',
        900: 'var(--color-danger-900)',
      },
      warning: {
        10: 'var(--color-warning-10)',
        100: 'var(--color-warning-100)',
        200: 'var(--color-warning-200)',
        300: 'var(--color-warning-300)',
        400: 'var(--color-warning-400)',
        500: 'var(--color-warning-500)',
        600: 'var(--color-warning-600)',
        700: 'var(--color-warning-700)',
        800: 'var(--color-warning-800)',
        900: 'var(--color-warning-900)',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Publico', 'serif'],
    },
  },
}
