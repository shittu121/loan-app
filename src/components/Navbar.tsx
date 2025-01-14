"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SmToggle } from './SmToggle';
import { auth } from "@/config/FirebaseConfig";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<{ firstname: string; lastname: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log("User signed out");
      setUserInfo(null);
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          setUserInfo(userSnap.data() as { firstname: string; lastname: string });
        } else {
          console.log("No such document!");
        }
      } else {
        setUser(null);
        setUserInfo(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="dark:bg-[#121212] dark:text-white">Loading...</div>;
  }

  return (
    <nav className='flex justify-between items-center w-full bg-white h-20 border-b border-b-gray-300 px-5 lg:px-20 md:px-10'>
      {/* Mobile Menu */}
      <div className='lg:hidden md:hidden'>
        <SmToggle />
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Loan Application</h1>
      </div>

      {/* User Navigation */}
      <div className="flex items-center space-x-7">
        {user ? (
          // Show when user is logged in
          <>
            <Link href="/" className='hover:text-[#39cfa7] sm-hidden'>Home</Link>
            <Link href="/" className='hover:text-[#39cfa7] hidden md:block'>Features</Link>
            <Link href="/" className='hover:text-[#39cfa7] hidden md:block'>Docs</Link>
            <span className="text-lg font-medium sm-hidden">Welcome, {userInfo?.firstname}</span>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </>
        ) : (
          // Show when user is not logged in
          <>
            <Link href="/" className='hover:text-[#39cfa7] sm-hidden'>Home</Link>
            <Link href="/" className='hover:text-[#39cfa7] hidden md:block'>Features</Link>
            <Link href="/" className='hover:text-[#39cfa7] hidden md:block'>Docs</Link>
            <Link href="sign-in/" className='hover:text-[#39cfa7] sm-hidden'>Sign in</Link>
            <Link href="sign-up/" className='border border-[#39c139] text-[#39cfa7] px-4 py-1 hover:bg-[#025F46] hover:text-white rounded-md'>
              Join
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
