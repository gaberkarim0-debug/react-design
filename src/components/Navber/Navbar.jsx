import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="pt-2 mb-3 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="/src/pages/Landing.jsx">
            <img src="/src/assets/logo.png" alt="Logo" />
          </a>
        </div>
        <ul className="d-flex list-unstyled gap-4 align-items-center links mb-0 d-none d-lg-flex">
          <li>
            <a className="text-decoration-none" href="/src/pages/Landing.jsx">
              HOME{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/src/pages/Landing.jsx">
              PAGES
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/src/pages/Landing.jsx">
              CONTACT
            </a>
          </li>
        </ul>
        <svg
        className="d-block d-lg-none bar"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="21px"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="M1 11h22v2H1zm0 8h22v2H1zM1 3h22v2H1z" />
        </svg>
        
      </div>
    </nav>
  );
}
