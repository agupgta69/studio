'use client';
import Link from "next/link";
import { Mountain, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
                <Mountain className="h-6 w-6" />
                <span className="font-bold">Orcaz Solutions</span>
            </Link>
            <span className="text-sm text-muted-foreground pl-4 border-l border-muted">
              &copy; {new Date().getFullYear()} Orcaz Solutions. All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Target className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Fixed missing icon import for consistency, though Github was used before
import { Target } from "lucide-react";
