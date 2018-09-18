import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">myGiphy</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
