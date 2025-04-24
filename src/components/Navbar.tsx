/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <Image
          src="/dormu-logo.png"
          alt="DormU Logo"
          width={120}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
          <Nav.Link id="calendar-nav" href="/calendar" active={pathName === '/calendar'} className="mx-3">
                    Calendar
          </Nav.Link>
          <Nav.Link id="faq-nav" href="/faq" active={pathName === '/faq'} className="mx-3">
            FAQ
          </Nav.Link>
          <Nav.Link id="contact-nav" href="/contact" active={pathName === '/contact'} className="mx-3">
                    Contact
          </Nav.Link>
          <Nav.Link id="profile-nav" href="/profile" active={pathName === '/profile'} className="mx-3">
                    Profile
          </Nav.Link>
          <Nav.Link id="messages-nav" href="/messages" active={pathName === '/messages'} className="mx-3">
                    Messages
          </Nav.Link>
          <Nav.Link id="ra-nav" href="/ra" active={pathName === '/ra'} className="mx-3">
                    Resident Advisor
          </Nav.Link>
            {currentUser
              ? [
                  <Nav.Link id="add-stuff-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Stuff
                  </Nav.Link>,
                  <Nav.Link id="list-stuff-nav" href="/list" key="list" active={pathName === '/list'}>
                    List Stuff
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
