import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/AdminSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { mes: "Jan", alunos: 50 },
  { mes: "Fev", alunos: 62 },
  { mes: "Mar", alunos: 74 },
  { mes: "Abr", alunos: 70 },
  { mes: "Mai", alunos: 82 },
  { mes: "Jun", alunos: 90 },
];

const alunosVencendo = [
  { nome: "Ana Souza", vencimento: "12/08/2025" },
  { nome: "Carlos Lima", vencimento: "14/08/2025" },
  { nome: "Marina Alves", vencimento: "15/08/2025" },
];

export default function AdminDashboard() {
  useEffect(() => {
    document.title = "Admin • CM Caroline Masiero";
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 min-w-0">
          <DashboardHeader title="Painel Administrativo" />

          <main className="p-4 sm:p-6">
            <h1 className="sr-only">Visão Geral - Painel Admin</h1>

            {/* Cards de status */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-elegant">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Alunos Ativos</p>
                  <p className="mt-2 text-3xl font-semibold text-primary">128</p>
                </CardContent>
              </Card>
              <Card className="shadow-elegant">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Inativos / Bloqueados</p>
                  <p className="mt-2 text-3xl font-semibold text-destructive">32</p>
                </CardContent>
              </Card>
              <Card className="shadow-elegant">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Mensalidades a vencer (7 dias)</p>
                  <p className="mt-2 text-3xl font-semibold text-accent">14</p>
                </CardContent>
              </Card>
            </div>

            {/* Gráfico */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <Card className="lg:col-span-2 overflow-hidden">
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Crescimento de Alunos</p>
                  <div className="mt-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="areaPrimary" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={`hsl(var(--primary))`} stopOpacity={0.6} />
                            <stop offset="95%" stopColor={`hsl(var(--primary))`} stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke={`hsl(var(--muted)/0.2)`} strokeDasharray="3 3" />
                        <XAxis dataKey="mes" stroke={`hsl(var(--muted-foreground))`} />
                        <YAxis stroke={`hsl(var(--muted-foreground))`} />
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                        <Area type="monotone" dataKey="alunos" stroke={`hsl(var(--primary))`} fill="url(#areaPrimary)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de vencimentos */}
              <Card>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Vencimentos Próximos</p>
                  <Table>
                    <TableCaption>Alunos com vencimento nos próximos 7 dias</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Aluno</TableHead>
                        <TableHead>Vencimento</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {alunosVencendo.map((a) => (
                        <TableRow key={a.nome}>
                          <TableCell>{a.nome}</TableCell>
                          <TableCell className="text-accent font-medium">{a.vencimento}</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="secondary">Ativo</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
