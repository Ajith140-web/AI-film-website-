import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth endpoints
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (email, password, name) => api.post('/auth/register', { email, password, name }),
  logout: () => api.post('/auth/logout'),
}

// Films endpoints
export const filmsAPI = {
  getAll: () => api.get('/films'),
  getById: (id) => api.get(`/films/${id}`),
  create: (data) => api.post('/films', data),
  update: (id, data) => api.put(`/films/${id}`, data),
  delete: (id) => api.delete(`/films/${id}`),
}

// Screenplay endpoints
export const screenplayAPI = {
  upload: (file, title) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    return api.post('/screenplay/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  parse: (id) => api.post(`/screenplay/${id}/parse`),
}

// Generation endpoints
export const generationAPI = {
  start: (filmId) => api.post(`/generate/${filmId}`),
  getStatus: (jobId) => api.get(`/generate/${jobId}/status`),
}

export default api
