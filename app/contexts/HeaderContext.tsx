"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeaderContextType {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <HeaderContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}
