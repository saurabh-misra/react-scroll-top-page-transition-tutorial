import { useLayoutEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);
    
    return (
        <>
            <Outlet />
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">SomePage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/anotherpage" className="nav-link">AnotherPage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}