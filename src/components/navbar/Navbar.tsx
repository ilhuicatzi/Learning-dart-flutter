import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle"
import { MenuColapse } from "./MenuColapse"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-bold">
        <img src="/dart.svg" alt="logo de dart" className="w-9 h-9" />
        </Link>
        <div className="hidden sm:flex items-center gap-3">
            <Link to="/dart" className="px-3 py-1.5 hover:bg-muted rounded-md">Dart</Link>
            <Link to="/flutter" className="px-3 py-1.5 hover:bg-muted rounded-md">Flutter</Link>
            <ModeToggle />
        </div>
        <MenuColapse />
    </nav>
  )
}

export default Navbar