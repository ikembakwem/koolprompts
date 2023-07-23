"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavigationBar = () => {
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  let userIsLoggedIn = (
    <div className="flex gap-3 md:gap-5">
      <Link href="/create-prompt" className="black_btn">
        Create post
      </Link>

      <button type="button" onClick={signOut} className="outline_btn">
        Sign Out
      </button>

      <Link href="/profile">
        <Image
          src="/assets/images/person-f.svg"
          width={37}
          height={37}
          alt="User profile"
          className="rounded-full"
        />
      </Link>
    </div>
  );

  let userIsLoggedOut = (
    <Fragment>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn"
          >
            Sign In
          </button>
        ))}
    </Fragment>
  );

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo for app"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Koolprompts</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? userIsLoggedIn : userIsLoggedOut}
      </div>
    </nav>
  );
};
export default NavigationBar;
