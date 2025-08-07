const heroImage = "/lovable-uploads/abc45d4b-a8ac-46e3-aee6-daedf9f21c4d.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CountdownTimer from "@/components/CountdownTimer";
import { useEffect, useMemo, useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    document.title = "CM Caroline Masiero • Centro de Treinamento";
  }, []);

  const targetDate = useMemo(() => new Date(2025, 8, 1, 9, 0, 0), []);
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "E-mail cadastrado!",
      description: "Você receberá novidades sobre a inauguração em breve.",
    });
    setEmail("");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Inauguração CM Caroline Masiero",
    startDate: "2025-09-01T09:00:00-03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "CM Caroline Masiero - Centro de Treinamento",
    },
    organizer: {
      "@type": "Organization",
      name: "CM Caroline Masiero",
    },
    description:
      "Inauguração em breve do Centro de Treinamento CM Caroline Masiero. Cadastre-se para novidades e promoções.",
  };

  return (
    <div className="min-h-screen">
      <header className="container py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2"
            aria-label="CM Caroline Masiero - Centro de Treinamento"
          >
            <img
              src="/lovable-uploads/fd7e995c-fe7e-4da4-995c-88d91159b2e3.png"
              alt="Logotipo CM Caroline Masiero - Centro de Treinamento"
              className="h-10 sm:h-12 w-auto"
              loading="eager"
            />
          </a>
          <nav className="flex items-center justify-end gap-3">
            <Button asChild variant="hero" size="sm">
              <a href="#login">Login</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#cadastro">Cadastre-se</a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="container py-8 sm:py-12">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-elegant">
            <img
              src={heroImage}
              alt="Foto da cliente em pose esportiva, CM Caroline Masiero – destaque da identidade visual do Centro de Treinamento"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="relative z-10 bg-gradient-to-t from-background/80 to-background/10 p-6 sm:p-10">
              <div className="max-w-xl">
                <span className="inline-flex items-center rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  Inauguração em breve
                </span>
                <h1 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight text-foreground">
                  Falta pouco!
                </h1>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
                  Assine para receber a data oficial, promoções especiais e todas as novidades do Centro de Treinamento.
                </p>
                <div className="mt-6 sm:mt-8">
                  <CountdownTimer target={targetDate} />
                </div>
                <div className="mt-6 sm:mt-8">
                  <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Digite seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label="E-mail"
                      className="h-11 flex-1"
                    />
                    <Button type="submit" variant="hero" className="h-11">
                      Quero Ser Notificado!
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-30 animate-gradient" aria-hidden />
          </div>
        </section>

        <section id="about" className="container py-10 sm:py-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center">
            Sobre Caroline Masiero
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutItems.map((item) => (
              <Card key={item.title} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary/40 border-t border-border">
          <div className="container py-10 sm:py-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Fique por Dentro da Inauguração!
              </h2>
              <p className="mt-2 text-muted-foreground">
                Deixe seu e-mail abaixo para receber em primeira mão a data de inauguração,
                promoções especiais e todas as novidades do Centro de Treinamento.
              </p>
              <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="E-mail"
                  className="h-11 flex-1"
                />
                <Button type="submit" variant="hero" className="h-11">
                  Quero Ser Notificado!
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2025 CM Caroline Masiero. Todos os direitos reservados.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

const aboutItems = [
  {
    title: "🚀 Qualificação e Paixão",
    text:
      "Formada em Educação Física e Pedagogia, une conhecimento técnico e didática para transformar vidas através do movimento.",
  },
  {
    title: "💪 Experiência e Dedicação",
    text:
      "Com 36 anos e treinando há 23, sua jornada é a prova de que a consistência gera resultados.",
  },
  {
    title: "❤️ Família e Inspiração",
    text:
      "Mãe do Theo e da Alice, e esposa do Marcos. Sua família é sua maior inspiração e força para todos os desafios.",
  },
  {
    title: "🔥 Filosofia de Vida",
    text:
      '"Intensa em tudo que faço!" Essa frase resume sua entrega e paixão, seja nos treinos, nas aulas ou na vida pessoal.',
  },
];

export default Index;
