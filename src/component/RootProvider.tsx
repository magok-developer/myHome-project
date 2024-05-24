"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const RootProvider = ({ children }: any) => {
  const [rendered, setRendered] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    rendered && (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  );
};

export default RootProvider;
