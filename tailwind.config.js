// module.exports = {
//   darkMode: 'class', // Enables dark mode based on a "dark" class
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--primary)',
//         primaryDark: 'var(--primary-dark)',
//         background: 'var(--background)',
//         cardBg: 'var(--card-bg)',
//         border: 'var(--border)',
//         textPrimary: 'var(--text-primary)',
//         textSecondary: 'var(--text-secondary)',
//         accent: 'var(--accent)',
//         accentDark: 'var(--accent-dark)',
//       },
//       backgroundColor: theme => ({
//         ...theme('colors'),
//         primary: 'var(--primary)',
//         primaryDark: 'var(--primary-dark)',
//         background: 'var(--background)',
//         cardBg: 'var(--card-bg)',
//         accent: 'var(--accent)',
//         accentDark: 'var(--accent-dark)',
//       }),
//       textColor: theme => ({
//         ...theme('colors'),
//         primary: 'var(--text-primary)',
//         secondary: 'var(--text-secondary)',
//         accent: 'var(--accent)',
//         accentDark: 'var(--accent-dark)',
//       }),
//       borderColor: theme => ({
//         ...theme('colors'),
//         primary: 'var(--primary)',
//         border: 'var(--border)',
//       }),
//     },
//   },
//   plugins: [
//     function ({ addComponents, theme }) {
//       // Add custom utility classes
//       addComponents({
//         '.text-primary': {
//           color: 'var(--text-primary)',
//         },
//         '.text-secondary': {
//           color: 'var(--text-secondary)',
//         },
//         '.background-primary': {
//           backgroundColor: 'var(--background)',
//         },
//         '.input': {
//           backgroundColor: 'var(--card-bg)',
//           color: 'var(--text-primary)',
//         },
//         '.input:focus': {
//           borderColor: 'var(--primary)',
//         },
//         '.input::placeholder': {
//           color: 'var(--text-secondary)',
//         },
//         '.label': {
//           color: 'var(--text-primary)',
//         },
//         '.border': {
//           borderColor: 'var(--border)',
//         },
//         '.primary': {
//           backgroundColor: 'var(--primary)',
//         },
//         '.primary-dark': {
//           backgroundColor: 'var(--primary-dark)',
//         },
//         '.card-bg': {
//           backgroundColor: 'var(--card-bg)',
//         },
//         '.accent': {
//           backgroundColor: 'var(--accent)',
//         },
//         '.accent-dark': {
//           backgroundColor: 'var(--accent-dark)',
//         },
//         '.text-accent': {
//           color: 'var(--accent)',
//         },
//         '.text-accent-dark': {
//           color: 'var(--accent-dark)',
//         },
//       });
//     },
//   ],
// };
