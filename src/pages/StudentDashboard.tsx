import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboard() {
  useEffect(() => {
    document.title = "Aluno • CM Caroline Masiero";
  }, []);

  const podeFazerCheckin = true;
  const status = "ativo";
  const vencimento = "15/09/2025";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <StudentSidebar />
        <div className="flex-1 min-w-0">
          <DashboardHeader title="Área do Aluno" />

          <main className="p-4 sm:p-6">
            <h1 className="sr-only">Painel do Aluno</h1>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="shadow-elegant">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Status da Conta</p>
                  <div className="mt-2 flex items-center gap-3">
                    <Badge variant="secondary" className="uppercase">{status}</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Vencimento do Plano</p>
                  <p className="mt-2 text-3xl font-semibold text-accent">{vencimento}</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-card p-6 text-center">
              <h2 className="text-xl font-semibold">Check-in de Aulas</h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                {podeFazerCheckin
                  ? "Seu acesso está liberado! Escolha o dia e horário do seu próximo treino."
                  : "Seu plano está vencido ou sua conta está inativa. Regularize sua situação para fazer o check-in."}
              </p>
              <div className="mt-4">
                {podeFazerCheckin ? (
                  <Button variant="hero" size="lg" asChild>
                    <a href="/aluno/agendamento">Fazer Check-in</a>
                  </Button>
                ) : (
                  <Button variant="outline" size="lg" disabled>
                    Check-in Indisponível
                  </Button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
