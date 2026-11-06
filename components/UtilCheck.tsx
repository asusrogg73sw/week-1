"use client";

import { useEffect } from "react";
import { wrapInArray, updateUser, getPreview, PublicUser } from "@/lib/helpers";
import type { User } from "@/lib/types";

export default function UtilCheck() {
  useEffect(() => {
    // Task 2 testing
    console.log("String Array:", wrapInArray("Hello"));
    console.log("Number Array:", wrapInArray(100));

    // Task 3 testing
    const user: User = {
      id: 1,
      name: "Ali",
      email: "ali@gmail.com",
    };

    const updatedUser = updateUser(user, {
      name: "Ahmed",
    });

    console.log("Updated User:", updatedUser);

    // Task 5 testing (getPreview)
    const preview = getPreview(user);
    console.log("User Preview (Pick):", preview);

    // Task 5 testing (Omit / PublicUser type check)
    const publicUser: PublicUser = {
      id: 2,
      name: "Sara",
      // agar yahan email likhne ki koshish karenge, toh TypeScript red line (error) dega!
    };
    console.log("Public User (Omit):", publicUser);
    
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        TypeScript Testing
      </h1>
      <p>Open browser console to see the results.</p>
    </main>
  );
}