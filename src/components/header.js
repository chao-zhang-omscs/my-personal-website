import * as React from "react"
import { Link } from "gatsby"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Me", to: "/about" },
  { name: "My Experience", to: "/experience" },
  { name: "Let's Connect", to: "/contact" },
  { name: "Blog", to: "/blog" },
]

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    }}
  >
    <nav style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {navLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          style={{
            margin: '0 1rem',
            fontSize: 'var(--font-sm)',
            textDecoration: 'none',
            fontWeight: 500,
            color: 'var(--color-primary)',
          }}
          activeStyle={{
            borderBottom: '2px solid var(--color-primary)',
          }}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </header>
)

export default Header
