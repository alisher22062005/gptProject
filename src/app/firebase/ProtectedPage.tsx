"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { auth } from "./configure";
export default function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("logIn");
    });
  }, []);
  return <></>;
}
