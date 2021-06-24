import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <section>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Todos</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;