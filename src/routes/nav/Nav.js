import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <Fragment>
            <div className="nav">
                <Link className="logo-container" to={'/'}>
                    LOGO
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>
                        Shop
                    </Link>
                    <Link className="nav-link" to={'/find-a-gym'}>
                        Find a Gym
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Nav;
