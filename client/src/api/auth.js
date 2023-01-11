import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8000/api/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:8000/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:8000/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:8000/api/protected')
}

export async function onColRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8000/api/colregister',
    registrationData
  )
}
export async function userRegister(userData) {
  return await axios.post('http://localhost:8000/api/userregister', userData)
}

export async function onColLogin(loginData) {
  return await axios.post('http://localhost:8000/api/collogin', loginData)
}