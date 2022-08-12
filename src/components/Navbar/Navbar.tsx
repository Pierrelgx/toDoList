import { Nav } from "./Navbar.styles";

export const Navbar = (): JSX.Element => {
    return(
        <Nav>
            <ul className="list">
                <li className="items">Choix 1</li>
                <li className="items">Choix 2</li>
                <li className="items">Choix 3</li>
            </ul>
            <button className="btn">BTN</button>
        </Nav>
      )
    
  };