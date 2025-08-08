import { SidebarTrigger } from "@/components/ui/sidebar";

const logoSrc = "/lovable-uploads/fd7e995c-fe7e-4da4-995c-88d91159b2e3.png";

export default function DashboardHeader({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-40 bg-background/70 supports-[backdrop-filter]:bg-background/50 backdrop-blur-md border-b border-border/60">
      <div className="flex items-center justify-between px-4 sm:px-6 h-14">
        <div className="flex items-center gap-3 min-w-0">
          {/* ÚNICO TRIGGER global */}
          <SidebarTrigger className="shrink-0" />
          <a href="/" className="inline-flex items-center gap-2" aria-label="CM Caroline Masiero - Centro de Treinamento">
            <img
              src={logoSrc}
              alt="Logotipo CM Caroline Masiero"
              className="h-8 sm:h-10 w-auto"
              loading="eager"
            />
          </a>
          {title && (
            <span className="ml-2 truncate text-sm sm:text-base text-muted-foreground">{title}</span>
          )}
        </div>
      </div>
    </header>
  );
}
