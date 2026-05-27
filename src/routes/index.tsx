import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/components/AuthProvider";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { user } = useAuth();

  useEffect(() => {
    window.location.href = user ? "/dashboard" : "/login";
  }, [user]);

  return <div className="flex min-h-screen items-center justify-center text-muted-foreground">Redirecting…</div>;
}
