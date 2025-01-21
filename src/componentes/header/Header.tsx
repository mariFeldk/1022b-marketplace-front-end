import { Link } from 'react-router-dom'
import './Header.css'
function Header(){
    return(
        <header>
            <h1>MarketPlace</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/cadastro-produto">Cadastrar Produto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;