import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav style={{  marginLeft: 'auto',
        marginTop: '0px', marginBottom: '0px',
        marginRight: 'auto', padding: '20px' , backgroundColor:'navy', color:'white', width:'100%'}}>
      <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to='/about'style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to='/services'style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to='/contact'style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar