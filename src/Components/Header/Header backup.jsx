import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

export default (props) => {

    const LoginItem = () => {

        return (
            <Nav className="me-auto">
                <Nav.Link href="/login" style={{ marginRight: 20 + 'px' }}>SIGN IN</Nav.Link>
            </Nav>)
    }

    const ProfileItem = (props) => {
        let imgPath = `https://www.bungie.net${props.profileImgPath}`;

        return (

            <Nav className="justify-content-end">
                <Navbar.Brand style={{ marginRight: 0 + 'px' }}>
                    <Image roundedCircle
                        src={imgPath}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="profile image"
                    />
                </Navbar.Brand>


                <NavDropdown title={props.profileName} id="basic-nav-dropdown" menuVariant='dark' style={{ marginRight: 20 + 'px' }}>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }


    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="#" style={{ marginLeft: 20 + 'px' }}>
                <img
                    alt=""
                    src="/favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Destiny 2: Loot Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" menuVariant='dark'>

                {/* <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>

            {props.loading ? '' : (!props.user ? <LoginItem /> : <ProfileItem profileImgPath={props.user.imgPath} profileName={props.user.name} />)}

        </Navbar>)
}

