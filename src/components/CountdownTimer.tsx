import { useEffect, useMemo, useState } from "react";

interface CountdownTimerProps {
  target: Date | string | number;
}

export default function CountdownTimer({ target }: CountdownTimerProps) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const distance = Math.max(targetTime - now, 0);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const ended = distance <= 0;

  return (
    <div aria-live="polite" className="w-full">
      {ended ? (
        <div className="text-center text-primary font-semibold">
          É hoje! Bem-vindo(a)!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4" id="countdown">
          <TimeBox label="Dias" value={days} />
          <TimeBox label="Horas" value={hours} />
          <TimeBox label="Min" value={minutes} />
          <TimeBox label="Seg" value={seconds} />
        </div>
      )}
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const formatted = value < 10 ? `0${value}` : String(value);
  return (
    <div className="rounded-lg bg-secondary/60 backdrop-blur-sm border border-border p-2 sm:p-3 text-center shadow-elegant">
      <div className="text-2xl sm:text-3xl font-semibold leading-none text-foreground" aria-label={label}>
        {formatted}
      </div>
      <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
