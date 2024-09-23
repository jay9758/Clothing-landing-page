const Nav = () => {
  return (
    <nav>
        <div className='logo'>
          <img id='logo' src="/images/Peter_England_logo.svg.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
  )
}

export default Nav