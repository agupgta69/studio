'use client';
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Target } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <Link href="/" className="flex items-center space-x-6">
                <Image 
                  src="/Print_Transparent.svg" 
                  alt="Orcaz Solutions Logo" 
                  width={160} 
                  height={160} 
                  className="h-28 md:h-36 w-auto"
                  unoptimized
                />
                <span className="font-bold text-2xl md:text-4xl">Orcaz Solutions</span>
            </Link>
            <span className="text-base text-muted-foreground md:pl-12 md:border-l border-muted text-center md:text-left">
              &copy; {new Date().getFullYear()} Orcaz Solutions. <br className="md:hidden" /> All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Target className="h-8 w-8" />
              <span className="sr-only">Target</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
