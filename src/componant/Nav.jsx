import { Link } from "react-router-dom"

export default function Nav() {
  return (
 <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>Log in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/regester"}>Regester</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div> 

  )
}
