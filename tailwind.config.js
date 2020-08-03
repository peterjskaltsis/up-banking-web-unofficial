module.exports = {
  purge: [],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
      }
    },
    extend: {
      fontSize: {
        xxs: '0.625rem'
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(255, 255, 255, 0.35)',
      },
      colors: {
        primary: '#ff7a64',
        'primary-dark': '#FF6B5C',
        'primary-light': '#FE8F7D',
        dark: '#242430',
        altWhite: 'rgba(251, 251, 250, 0.05)'
      },
      container: {
        center: true,
      },
      height: {
        fit: 'fit-content',
      },
      maxWidth: {
        xxs: '16rem'
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'visited', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'active', 'visited', 'disabled'],
  },
  plugins: [],
}
