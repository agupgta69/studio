import Link from "next/link";
import { BookOpen, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navLinks = [
    { href: "/#articles", label: "Articles" },
    { href: "/#resources", label: "Resources" },
    { href: "/#tools", label: "Tools" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold">
                Orcas Solutions
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {/* Future nav links can go here */}
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
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
                    <BookOpen className="h-7 w-7 text-primary" />
                    <span className="font-headline text-xl font-bold">
                      Orcas Solutions
                    </span>
                  </Link>
                  <div className="flex flex-col space-y-4">
                    <Button variant="outline" asChild>
                      <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                      <Link href="/register">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
