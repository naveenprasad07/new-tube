"use client";

import { Button } from "@/components/ui/button";
import { Clapperboard, UserCircle2Icon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO : Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            {/* TODO : Add user profile menu button */}
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<Clapperboard className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
        {/* Add menu items for Studio and User Profile  */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none "
          >
            <UserCircle2Icon className="" />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
