import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { useNavigate, useLocation } from "react-router"
import { ChevronLeft, Home, Star, Film, LogIn } from "lucide-react"

export function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const username = localStorage.getItem("username")
    const isLoggedIn = !!username
    
    const handleLogout = () => {
        localStorage.removeItem("username")
        navigate("/")
        // reload the page
        window.location.reload()
    }

    const showBackButton = location.pathname !== "/"
    
    return (
        <header className="w-full border-b">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <div className="flex items-center gap-4">
                    {showBackButton && (
                        <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => navigate(-1)}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    )}
                    {showBackButton && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/")}
                        >
                            <Home className="h-5 w-5" />
                        </Button>
                    )}
                    {isLoggedIn ? (
                        <h1 className="text-2xl font-bold">Bienvenido, {username}!</h1>
                    ) : (
                        <h1 className="text-2xl font-bold">Sistema de Recomendación</h1>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <Button 
                        variant="ghost" 
                        className="flex items-center gap-2"
                        onClick={() => navigate("/genres")}
                    >
                        <Film className="h-4 w-4" />
                        <span>Géneros</span>
                    </Button>
                    {isLoggedIn && (
                        <Button 
                            variant="ghost" 
                            className="flex items-center gap-2"
                            onClick={() => navigate("/user-ratings")}
                        >
                            <Star className="h-4 w-4" />
                            <span>Mis Calificaciones</span>
                        </Button>
                    )}
                    {isLoggedIn ? (
                        <Button variant="outline" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>
                    ) : (
                        <Button 
                            variant="outline" 
                            className="flex items-center gap-2"
                            onClick={() => navigate("/login")}
                        >
                            <LogIn className="h-4 w-4" />
                            <span>Iniciar sesión</span>
                        </Button>
                    )}
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
} 