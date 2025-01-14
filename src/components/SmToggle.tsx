"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/config/FirebaseConfig";
import { User } from "firebase/auth";

export function SmToggle() {
  const [user, setUser] = useState<User | null>(null);

  // Handle sign-out
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log("User signed out");
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu className="h-7 w-7" />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Loan Application</SheetTitle>
          <SheetDescription></SheetDescription>

          <div className="flex justify-start space-y-10 pt-10 flex-col text-xl">
            <Link href="/" className="hover:text-[#39cfa7]">
              Home
            </Link>
            <Link href="/" className="hover:text-[#39cfa7]">
              Features
            </Link>
            <Link href="/" className="hover:text-[#39cfa7]">
              Docs
            </Link>

            {/* Conditional Rendering Based on Auth */}
            {!user ? (
              <Link href="sign-in/" className="hover:text-[#39cfa7]">
                Sign in
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Sign Out
              </button>
            )}
          </div>
        </SheetHeader>

        {/* Footer Button */}
        <SheetFooter className="mt-10">
          {!user ? (
            <SheetClose asChild>
              <Button>
                <Link href="sign-up/" className="">
                  Join
                </Link>
              </Button>
            </SheetClose>
          ) : null}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
