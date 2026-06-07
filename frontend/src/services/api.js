import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add JWT token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Task APIs
export const taskAPI = {
  getAllTasks: () => apiClient.get('/tasks'),
  getTaskById: (id) => apiClient.get(`/tasks/${id}`),
  createTask: (data) => apiClient.post('/tasks', data),
  updateTask: (id, data) => apiClient.put(`/tasks/${id}`, data),
  deleteTask: (id) => apiClient.delete(`/tasks/${id}`),
  completeTask: (id) => apiClient.put(`/tasks/${id}/complete`)
};

// AI APIs
export const aiAPI = {
  suggestTasks: (data) => apiClient.post('/ai/suggest-tasks', data),
  estimateTime: (data) => apiClient.post('/ai/estimate-time', data),
  optimizePlan: (data) => apiClient.post('/ai/optimize-plan', data),
  chat: (message) => apiClient.post('/ai/chat', { message })
};

// Auth APIs
export const authAPI = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (data) => apiClient.post('/auth/login', data),
  logout: () => apiClient.post('/auth/logout')
};

export default apiClient;
