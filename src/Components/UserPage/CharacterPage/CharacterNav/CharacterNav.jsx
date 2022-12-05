import { Nav, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default ()=> {
    return (
        <div style={{paddingTop: 10+'px'}}>
            <Nav defaultActiveKey="/equipment" className="flex-column">
                <NavItem eventkey="equipment" href="/equipment">
                    <Nav.Link as={Link} to="/equipment" style={{textAlign: 'right'}}>Equipment</Nav.Link>
                </NavItem>
                <NavItem eventkey="postmaster" href="/postmaster">
                    <Nav.Link as={Link} to="/postmaster" style={{textAlign: 'right'}}>Postmaster</Nav.Link>
                </NavItem>
                <NavItem eventkey="vault" href="/vault">
                    <Nav.Link as={Link} to="/vault" style={{textAlign: 'right'}}>Vault</Nav.Link>
                </NavItem>
            </Nav>
        </div>
    );
}

