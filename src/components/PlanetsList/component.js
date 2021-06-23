// @vue/component
import axios from 'axios'

export default {
  name: 'PlanetsList',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/planets')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
  }
}
