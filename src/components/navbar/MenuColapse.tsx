import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "../ui/separator"

export function MenuColapse() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex items-center justify-center sm:hidden">
        <Button variant="outline" size="icon">
            <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <Separator />
        </SheetHeader>

        <nav className="flex flex-col gap-2">
        <SheetClose asChild>
          <Link to="/dart" className="p-2 hover:bg-muted rounded-md">Dart</Link>
        </SheetClose>

        <SheetClose asChild>
          <Link to="/flutter" className="p-2 hover:bg-muted rounded-md">Flutter</Link> 
        </SheetClose>

        <ModeToggle />
        </nav>
        
      </SheetContent>
    </Sheet>
  )
}
