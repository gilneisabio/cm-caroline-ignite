import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Saindo... • CM Caroline Masiero";
    const run = async () => {
      await supabase.auth.signOut();
      navigate("/auth", { replace: true });
    };
    run();
  }, [navigate]);

  return <main className="p-6 text-center text-muted-foreground">Finalizando sessão...</main>;
}
