import logo from '../../assets/logo.svg';

import './Header.css';

function HeaderLink({text}) {
    return (
        <li>
            <a className="App-link" href="/frontend/public">{text}</a>
        </li>
    );
}

export default function Header( { menuLinks } ) {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt='logo' />
                <ul>
                    {menuLinks.map((link, index) => (
                        <HeaderLink key={index} text={link} />
                    ))}
                </ul>
            </div>
        </header>
    );
}