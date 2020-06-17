import Head from 'next/head'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <div style={{ 
            marginBottom: '5%'
        }}>
            <Head>
                <title>News Portal</title>
                <link rel='icon' href='/favicon.ico'></link>
            </Head>
            <Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand href='/'>News Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <NavDropdown title='Select a News Category' id='collasible-nav-dropdown'>
                            <NavDropdown.Item href='/business'>Buisness</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/technology'>Technology</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/science'>Science</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/sports'>Sports</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/health'>Health</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header