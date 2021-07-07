// @vue/component
import axios from 'axios'

export default {
  name: 'PlanetsList',
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
      search: ''
    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/planets')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => { this.loading = false })
  },
  computed: {
    filteredPlanets: function () {
      return this.name.filter((items) => {
        return items.name.match(this.search)
      })
    }
  }
}
