import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container flex items-center mx-auto justify-center gap-4 shadow-2xl py-4">
        <Link to="#" className="navbar-logo">
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/Homeicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Home</h1>
          </span>
        </Link>
        <Link to="/" className="navbar-logo">
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/feedicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Feed</h1>
          </span>
        </Link>
        <Link to="/" className="navbar-logo">
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/libraryicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Library</h1>
          </span>
        </Link>
        <Link to="/" className="navbar-logo">
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/profileicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Profile</h1>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
