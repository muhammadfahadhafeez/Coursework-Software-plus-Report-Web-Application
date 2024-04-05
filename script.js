// script.js
document.addEventListener("DOMContentLoaded", function() {
  const userInfo = document.getElementById('user-info');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const loginLi = document.getElementById('login-li');
  const registerLi = document.getElementById('register-li');
  const logoutLi = document.getElementById('logout-li');
  const mainContent = document.querySelector('main');

  // Function to show user info
  function showUserInfo(user) {
    userInfo.innerHTML = `
      <img src="${user.avatar}" alt="${user.username}" width="50">
      <span>Welcome, ${user.username}</span>
    `;
  }

  // Simulated user data
  let currentUser = null;

  // Check if user is logged in
  function checkLoggedIn() {
    if (currentUser) {
      showUserInfo(currentUser);
      loginLi.style.display = 'none';
      registerLi.style.display = 'none';
      logoutLi.style.display = 'block';
      // Show authenticated sections
      showAuthenticatedSections();
    } else {
      userInfo.innerHTML = '';
      loginLi.style.display = 'block';
      registerLi.style.display = 'block';
      logoutLi.style.display = 'none';
      // Hide authenticated sections
      hideAuthenticatedSections();
    }
  }

  // Simulated authenticated sections
  function showAuthenticatedSections() {
    // Display authenticated sections
    // Example: mainContent.innerHTML = 'Authenticated content';
  }

  function hideAuthenticatedSections() {
    // Hide authenticated sections
    // Example: mainContent.innerHTML = '';
  }

  // Login functionality
  loginBtn.addEventListener('click', function() {
    // Simulated login process
    currentUser = { username: 'JohnDoe', avatar: 'path/to/avatar.jpg' };
    checkLoggedIn();
  });

  // Register functionality
  registerBtn.addEventListener('click', function() {
    // Simulated register process
    // Example: Display a modal or redirect to a registration page
    alert('Register functionality not implemented in this demo.');
  });

  // Logout functionality
  logoutBtn.addEventListener('click', function() {
    // Simulated logout process
    currentUser = null;
    checkLoggedIn();
  });

  // Check if user is logged in on page load
  checkLoggedIn();
});
