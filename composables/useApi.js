export const useApi = () => {
    const config = useRuntimeConfig()
  
    // Base URL della tua API (può venire da .env)
    const baseUrl = config.public.apiBase || 'https://api.example.com'
  
    // Recupera token auth se serve (es. da useAuth composable o localStorage)
    // const getToken = () => {
    //   // puoi fare `useCookie('token')` oppure leggere da store
    //   return null // oppure `return useCookie('token').value`
    // }
    console.log('[useApi] baseUrl:', baseUrl)

  
    const request = async (endpoint, options = {}) => {
    //   const token = getToken()
  
      return await $fetch(`${baseUrl}${endpoint}`, {
        headers: {
        //   ...(token && { Authorization: `Bearer ${token}` }),
          ...options.headers
        },
        method: options.method || 'GET',
        body: options.body || null,
        query:  null,
      })
    }
  
    return {
      get: (url, query = {}, headers = {}) => request(url, { method: 'GET', query, headers }),
      post: (url, body = {}, headers = {}) => request(url, { method: 'POST', body, headers }),
    //   put: (url, body = {}, headers = {}) => request(url, { method: 'PUT', body, headers }),
    //   del: (url, headers = {}) => request(url, { method: 'DELETE', headers }),
    }
  }
  