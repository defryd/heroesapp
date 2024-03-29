import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
        // console.log('Deslogueados')
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <span className='nav-item nav-link text-info'>
                    {user?.name}
                </span>
                <button className='nav-item nav-link btn text-primary' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </nav >
    )
}