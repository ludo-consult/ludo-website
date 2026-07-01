'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import LogoTitle from './LogoTitle.js'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contate-nos', label: 'Contate-nos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Nav $scrolled={scrolled}>
      <Container>
        <LogoLink href="#inicio">
          <LogoTitle $dark={scrolled} />
        </LogoLink>
        <MenuButton $scrolled={scrolled} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MenuButton>
        <LinkList $open={menuOpen} $scrolled={scrolled}>
          {NAV_LINKS.map(({ href, label }) => (
            <NavItem key={href}>
              <NavLink
                href={href}
                $scrolled={scrolled}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </NavItem>
          ))}
        </LinkList>
      </Container>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) => ($scrolled ? '#FFFFFF' : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none')};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 260px;

  @media (max-width: 768px) {
    width: 200px;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  color: ${({ $scrolled }) => ($scrolled ? '#245d70' : '#FFFFFF')};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const LinkList = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transition: right 0.3s ease;
    box-shadow: ${({ $open }) => ($open ? '-5px 0 20px rgba(0,0,0,0.1)' : 'none')};
  }
`

const NavItem = styled.li`
  list-style: none;
`

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $scrolled }) => ($scrolled ? '#000000' : '#ffffff')};
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #e7c37a;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #14333d;
  }

  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    color: #000000;
  }
`
