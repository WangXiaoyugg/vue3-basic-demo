import { ref } from 'vue'
import axios from 'axios'


function useURLLoader<T>(url: string) {
  const loading = ref(true)
  const loaded = ref(false)
  const result = ref<T | null>(null)
  const error = ref(null)
  axios.get(url)
    .then(rawData => {
      loading.value = false
      loaded.value = true
      result.value = rawData.data
    }).catch(e => {
      loading.value = false;
      error.value = e;
    })

  return {
    loading,
    loaded,
    result,
    error,
  }
}

export default useURLLoader