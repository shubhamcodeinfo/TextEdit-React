import React from 'react'

export default function Navbar(props) {
  return (
    <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-dark`}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand text-light" to="">{props.title}</Link> */}
                    <a className="navbar-brand text-light" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/About">{props.about}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch text-light">
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Bright Mode</label>s
                        <input className={`form-check-input bg-${props.mode}`} type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    </div>

                </div>
            </nav>


        </>
  )
}
