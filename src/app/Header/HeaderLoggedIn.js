'use client';

export default function HeaderLoggedIn({ userData }) {
  // Function to handle user logout
  function handleLogout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    window.location.href = '/Login'; // Redirect to login page
  }

  // Ensure the header only renders if userData exists
  if (!userData) {
    return null;
  }

  return (
    <div className="header-loggedIn">
      <span className="header-hello">{`Hello ${userData.firstName}!`} </span>
      <span className="header-logout">
        <button className="btn-logout" onClick={handleLogout}>
          Log Out
        </button>
      </span>
    </div>
  );
}
