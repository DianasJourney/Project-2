const loginFormHandler = async function (event) {
  event.preventDefault()

  const usernameEl = document.querySelector('#username-input-login')
  const passwordEl = document.querySelector('#password-input-login')
  const response = await fetch('/api/user/login', {
    method: 'post',
    body: JSON.stringify({
      email: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw new Error('HTTP error: ' + response.status)
  }
  document.location.replace('/reviewboard/')
}

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler)
