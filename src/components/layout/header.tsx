import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mountain } from "lucide-react";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8" />
              <span className="font-bold text-lg font-headline">OrcaS Solutions</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {/* Future nav links can go here */}
            </nav>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                   <Link href="/" className="flex items-center space-x-2">
                     <Mountain className="h-8 w-8" />
                     <span className="font-bold text-lg font-headline">OrcaS Solutions</span>
                   </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
