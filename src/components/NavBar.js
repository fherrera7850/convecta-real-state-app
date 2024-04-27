import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src={require('./../assets/img/icon-deal.png')} alt="Icon" style={{ width: 30, height: 30 }} />
                    </div>
                    <h1 className="m-0 text-primary">Convecta</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link active">Inicio</Link>
                        <Link to="/about" className="nav-item nav-link">Nosotros</Link>
                        <Link to="/contact" className="nav-item nav-link">Contacto</Link>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;