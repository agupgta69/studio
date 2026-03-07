'use client';
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 md:h-48">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/Print_Transparent.svg" 
                alt="Orcaz Solutions Logo" 
                width={256} 
                height={256} 
                className="h-32 w-auto md:h-44"
                priority
                unoptimized
              />
              <span className="font-bold text-3xl md:text-5xl font-headline tracking-tight">Orcaz Solutions</span>
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
                  <Menu className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                   <Link href="/" className="flex items-center space-x-2">
                     <Image 
                        src="/Print_Transparent.svg" 
                        alt="Orcaz Solutions Logo" 
                        width={128} 
                        height={128} 
                        className="h-20 w-auto"
                        unoptimized
                      />
                     <span className="font-bold text-2xl">Orcaz Solutions</span>
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
