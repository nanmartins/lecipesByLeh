/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    // options: {
    //   customProperties: true
    // },
    themes: {
      light: {
        colors: {
          primary: '#E3FFC3',
          secondary: '#FF89C0',
          details: '#FBA083',
          // details2: '#FFB4A2'
        },
      },
    },
  },
})
