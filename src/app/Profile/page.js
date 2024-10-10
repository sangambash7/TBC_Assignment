import "./Profile.css";

export default function Profile() {
  return (
    <main className="profile">
      <h1>My Profile</h1>
      <div className="profile-container">
        <div className="profile-box">
          <img src="https://t.ly/wgwQx" width={100} alt="Profile" />
          <p className="profile-name">Steven Doe</p>
          <p className="profile-proffession">JS Enthusiast</p>
          <p className="profile-email">stevendoe1981@gmail.com</p>
        </div>
        <div className="profile-interests">
          <p>
            {" "}
            Steven Doe Is Interested In The Following Categories Of Products:
          </p>
          <p className="profile-product">Photo Cameras</p>
          <p className="profile-product">Network Switches</p>
          <p className="profile-product">Smartphones</p>
          <p className="profile-product">CD & DVD Disks</p>
          <p className="profile-product">Smart TVs</p>
        </div>
      </div>
    </main>
  );
}
