"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AuthProvider } from "./firebase/AuthProvier";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </>
  );
}
