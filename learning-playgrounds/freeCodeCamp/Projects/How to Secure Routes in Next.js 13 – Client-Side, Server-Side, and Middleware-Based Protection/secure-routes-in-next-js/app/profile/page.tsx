"use client";

import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

type Props = {};

const Profile = (props: Props) => {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/");
    }
  }, []);

  return (
    <main className="text-center h-screen flex justify-center items-center">
      <div>
        <h1>Profile</h1>
      </div>
    </main>
  );
};

export default Profile;
