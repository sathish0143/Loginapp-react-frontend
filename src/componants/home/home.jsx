import "../home/home.css";

const Home = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };
  return (
    <div className="main">
      <nav id="navigation">
        <ul>
          <li>
            <a href="https://www.google.com/">Home</a>
          </li>
          <li>
            <a href="https://www.google.com/">About</a>
          </li>
          <li>
            <a href="https://www.google.com/">Portfolio</a>
          </li>
          <li>
            <a href="https://www.google.com/">Github</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        <img
          src="https://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
          alt="bottom"
          className="name-cloud-bot"
        ></img>
        <h1 className="name-cl">Sathish</h1>
        <img
          src="https://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png"
          alt="top"
          className="name-cloud-top"
        ></img>
      </div>
    </div>
  );
};

export default Home;
