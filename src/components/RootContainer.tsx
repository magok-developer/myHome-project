"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import RootProvider from "./RootProvider";
import NavBar from "./NavBar/NavBar";
import { usePathname } from "next/navigation";

const RootContainer = ({ children }: any) => {
  const path = usePathname();
  const [rendered, setRendered] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    rendered && (
      <QueryClientProvider client={queryClient}>
        <RootProvider>
          {path !== "/" ? <NavBar /> : <></>}
          <div style={{ paddingLeft: path !== "/" ? "150px" : 0 }}>
            {children}
          </div>
        </RootProvider>
      </QueryClientProvider>
    )
  );
};

export default RootContainer;
