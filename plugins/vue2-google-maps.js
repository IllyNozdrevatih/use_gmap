import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCsljK4qgk7_4ZSHlL9lxVEII0IbI7aQHk',
    libraries: 'places',
  },
  installComponents: true,
})

Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)
