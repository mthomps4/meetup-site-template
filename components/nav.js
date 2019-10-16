import React from 'react'
import styled from 'styled-components'
import logo from '../public/images/logo.png'
import ActiveLink from './activeLink';

const Icon = styled.img`
  width: 50px;
  height: 50px; 
`

const NavContainer = styled.nav`
  margin: 0 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
`

const links = [
  { href: '/', label: 'JsLou', key: "nav-link-home", icon: logo },
  { href: '/about', label: 'About', key: "nav-link-about", icon: logo },
  { href: '/speakers', label: 'Speakers', key: "nav-link-speakers", icon: logo },
  { href: '/meetups', label: 'Meetups', key: "nav-link-meetups", icon: logo },
]

const Nav = () => (
  <NavContainer>
      {links.map(({ key, href, label }) => (
        <NavLink key={key}>
          <ActiveLink href={href}>
            <Icon src={logo} />
            {label}
          </ActiveLink>
        </NavLink>
      ))}
  </NavContainer>
)

export default Nav
