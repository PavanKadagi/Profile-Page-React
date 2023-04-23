import "./styles.css";
import profile from "./assets/profile.png";
// import { FontAwesomeIcon } from "react-icons/fa";
export default function App() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h2 className="navbar-heading">VanillaHR</h2>
          <ul>
            <li>Why VanillaHR?</li>
            <li>About</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <button className="btn">Login</button>
        </nav>
      </header>
      <div className="left">
        <div className="left-left">
          <h5>Automate & hire</h5>
          <h1 className="heading">Hire for what's next.</h1>
          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <div>
            <button className="btn ">Get Started</button>
            <button className="btn ">Watch Video </button>
          </div>
        </div>
        <img src={profile} alt="profile" />
      </div>
      {/*  */}
      <div className="middle">
        <div className="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-slack"
            viewBox="0 0 16 16"
          >
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
          </svg>
          <p>Slack</p>
        </div>

        <p>NISSAN</p>
        <div className="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          <p>Google</p>
        </div>
        <p>Walmart</p>
        <p>NETFLIX</p>
      </div>

      <div className="right">
        <h2 className="heading-secound">
          The best software teams ship early and often
        </h2>
        <div>
          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="btn">Watch Video</button>
        </div>
      </div>
    </div>
  );
}
