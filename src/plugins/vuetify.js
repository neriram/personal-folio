import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#099ae3',
        secondary: '#e6d6cf',
        accent: '#D8EBF1',
        info: '#e35d09',
      },
    },
  },
})
