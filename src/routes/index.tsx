import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Check,
  X,
  Sparkles,
  Hand,
  Music,
  Palette,
  Users,
  Package,
  Heart,
  CalendarHeart,
  ShieldCheck,
  Lock,
  Clock,
  ChevronDown,
  Gift,
  Star,
  Zap,
} from "lucide-react";

const A = "https://bercario-pronto.lovable.app/__l5e/assets-v1";
const IMG = {
  logo: `${A}/0c6d544b-51b9-444c-be84-95795f700c7f/logo.webp`,
  hero: `${A}/89cb6c3f-b8f8-46ce-abb2-430f01295b9d/mkp-hero-v3.png`,
  receber: `${A}/028e4d01-b873-468d-b32d-deb0a9c05acf/mkp-receber.png`,
  bonus: `${A}/79efb008-5bf3-4fbe-9fbe-53105218036e/mkp-bonus5.webp`,
  selo: `${A}/109ca199-4366-4a32-87fd-58abdb3e80ca/selo-garantia.webp`,
};
const CARROSSEL = [
  "afa560a0-b0d7-4590-a397-5ee06516b4fc/carrossel-1.webp",
  "e4fb23eb-e20b-47cb-841e-36f7862b7527/carrossel-2.webp",
  "81996dd0-679b-4194-ac63-303c2eb1e705/carrossel-3.webp",
  "90195bab-2e32-4a39-a3b9-e7d2fd33f4e8/carrossel-4.webp",
  "bb8fae04-8222-4777-9a37-e3ab78146f3f/carrossel-5.webp",
  "17c467c8-de6d-4c34-a47e-97193aaf10a9/carrossel-6.webp",
  "0b984d46-28ee-4ef9-b2ae-9c5dff4c4345/carrossel-7.webp",
  "d8d8b077-be77-46ce-b74d-fe6446a3372b/carrossel-8.webp",
  "eacfa7c9-51bd-4390-a2bc-629d30b14152/carrossel-9.webp",
  "746f8fba-5559-4b7a-877d-73337be07457/carrossel-10.webp",
].map((p) => `${A}/${p}`);
const DEPOIMENTOS = [
  "f6e582e7-252d-4e04-8014-a7d264d6de23/depoimento-img-1.jpg",
  "a83c473b-3189-4220-94dd-56467e2c79ee/depoimento-img-2.jpg",
  "3bf87a27-4f10-401d-88bc-f1f89426cb2b/depoimento-img-3.jpg",
].map((p) => `${A}/${p}`);

// Checkout links — do not change.
const CHECKOUT_BASICA = "https://pay.hotmart.com/B106732698O?off=vb5nid6i&checkoutMode=10&src=home_basica";
const CHECKOUT_COMPLETA = "https://pay.hotmart.com/B106732698O?off=88baog1b&checkoutMode=10&src=home_completa";
const CHECKOUT_PROMO = "https://pay.hotmart.com/B106732698O?off=sox8jr36&checkoutMode=10&src=home_promo";

const PRECO_BASICA = 5;
const PRECO_COMPLETA = 15;
const PRECO_PROMO = 10;

declare global {
  interface Window {
    utmifyEvent?: (name: string) => void;
  }
}
const track = (n: string) => window.utmifyEvent?.(n);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Berçário Pronto — +200 actividades listas para guardería (0 a 3 años)" },
      {
        name: "description",
        content:
          "+200 actividades listas, organizadas por edad, objetivo y materiales, para niños de 0 a 3 años. Aplícalas hoy mismo.",
      },
      { property: "og:title", content: "Kit Berçário Pronto — +200 actividades listas" },
      {
        property: "og:description",
        content: "Deja de perder horas planeando actividades para los más pequeños.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: Index,
});

const CATEGORIAS = [
  { t: "Actividades sensoriales", i: Sparkles, c: "bg-leaf-soft" },
  { t: "Coordinación motriz", i: Hand, c: "bg-butter" },
  { t: "Musicalización", i: Music, c: "bg-lilac" },
  { t: "Pintura y collage", i: Palette, c: "bg-rose" },
  { t: "Juegos dirigidos", i: Users, c: "bg-leaf-soft" },
  { t: "Materiales sencillos", i: Package, c: "bg-butter" },
  { t: "Momentos de bienvenida", i: Heart, c: "bg-lilac" },
  { t: "Fechas especiales", i: CalendarHeart, c: "bg-butter" },
];

const AREAS = [
  { t: "Bienestar, salud y seguridad", c: "bg-leaf-soft" },
  { t: "Identidad personal, social y cultural", c: "bg-butter" },
  { t: "Comunicación, lenguajes y prácticas culturales", c: "bg-lilac" },
  { t: "Exploración del mundo", c: "bg-peach" },
  { t: "Relaciones, vínculos y participación", c: "bg-leaf-soft" },
  { t: "Desarrollo motor y sensorial", c: "bg-lilac" },
];

const BONUS = [
  {
    t: "Calendario de 30 Días para la Guardería",
    d: "Una secuencia organizada para saber qué aplicar cada día del mes, sin andar perdida en la planeación.",
    v: 12,
    c: "bg-leaf-soft",
  },
  {
    t: "Planificador Semanal para la Guardería",
    d: "Plantilla lista para organizar actividades, materiales, objetivos y observaciones del salón.",
    v: 10,
    c: "bg-butter",
  },
  {
    t: "Carteles de Rutina para el Salón",
    d: "Materiales visuales para que la rutina de los niños sea más clara, ligera y organizada.",
    v: 9,
    c: "bg-lilac",
  },
  {
    t: "Fichas de Observación del Niño",
    d: "Plantillas sencillas para dar seguimiento a la participación, adaptación, interacción y desarrollo.",
    v: 10,
    c: "bg-peach",
  },
  {
    t: "Guía Rápida de Bienvenida y Adaptación",
    d: "Orientaciones sencillas para manejar la llegada, el llanto, la inseguridad, la separación de la familia y los primeros días del niño.",
    v: 10,
    c: "bg-rose",
  },
];

const FAQ = [
  {
    q: "¿El material es físico o digital?",
    a: "Es 100% digital, en PDF. Recibes el acceso por correo electrónico justo después de la compra y puedes descargarlo en cualquier dispositivo.",
  },
  {
    q: "¿Para qué edad sirve?",
    a: "Fue pensado para niños de 0 a 3 años: sala de bebés, sala de 1 año y sala de 2 años en la guardería.",
  },
  {
    q: "¿Necesito imprimir?",
    a: "No. Puedes usarlo directamente desde el celular, la tablet o la computadora. Si lo prefieres, imprimes solo lo que quieras.",
  },
  {
    q: "¿Las actividades son difíciles?",
    a: "No. Todas son sencillas, con materiales económicos e instrucciones claras para aplicarlas rápidamente.",
  },
  {
    q: "¿Las actividades siguen una propuesta pedagógica?",
    a: "Sí. Todas fueron organizadas según las principales áreas de desarrollo de la Educación Infantil (0 a 3 años).",
  },
  {
    q: `¿La oferta de ${PRECO_BASICA}€ incluye bonos?`,
    a: "No. La oferta sencilla incluye solo las +120 actividades. La Súper Oferta trae +200 actividades y los 5 súper bonos.",
  },
];

function CtaButton({
  href,
  children,
  onClick,
  pulse,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  pulse?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-cta transition hover:brightness-105 active:scale-[0.98] sm:text-lg ${pulse ? "animate-soft-pulse" : ""}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Tick({ variant = "primary" }: { variant?: "primary" | "leaf" }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary-foreground ${variant === "leaf" ? "bg-leaf" : "bg-primary"}`}
    >
      <Check className="h-3 w-3" strokeWidth={3.5} />
    </span>
  );
}

function useCountdown() {
  const [t, setT] = useState({ h: "23", m: "59", s: "59" });
  useEffect(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const tick = () => {
      const d = Math.max(0, end.getTime() - Date.now());
      const p = (n: number) => String(n).padStart(2, "0");
      setT({
        h: p(Math.floor(d / 3.6e6)),
        m: p(Math.floor((d % 3.6e6) / 6e4)),
        s: p(Math.floor((d % 6e4) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Index() {
  const [modal, setModal] = useState(false);
  const cd = useCountdown();

  useEffect(() => {
    track("page_view");
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="bg-hero px-5 pb-16 pt-8 sm:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <img src={IMG.logo} alt="Kit Berçário Pronto" width={200} height={64} className="mx-auto h-14 w-auto sm:h-16" fetchPriority="high" />
          <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.08] sm:text-6xl">
            Deja de perder horas planeando actividades para{" "}
            <span className="text-primary">los más pequeños</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-muted-foreground sm:text-xl">
            +200 actividades listas, organizadas por edad, objetivo y materiales — para que las apliques hoy mismo
          </p>
          <img src={IMG.hero} alt="Mockup Kit Berçário Pronto" className="mx-auto my-8 w-full max-w-xl drop-shadow-2xl" fetchPriority="high" />
          <div className="mx-auto max-w-md">
            <CtaButton href="#ofertas" pulse>
              Quiero el Kit Completo
            </CtaButton>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Ahorra horas de búsqueda y planeación con propuestas prácticas para niños de 0 a 3 años, adaptadas a la rutina real de las guarderías en Portugal.
          </p>
        </div>
      </section>

      {/* DÚVIDA */}
      <section className="bg-lavender px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Todos los días surge la misma duda…</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "¿Qué voy a hacer hoy con los niños?",
              "¿Cómo mantener a los pequeños interesados?",
              "¿Cómo planear actividades sin perder tiempo?",
              "¿Cómo tener ideas sencillas con materiales económicos?",
            ].map((q) => (
              <div key={q} className="rounded-2xl bg-card p-5 text-lg font-bold shadow-soft">
                <span className="mr-2 text-primary">?</span>
                {q.replace(/^¿|\?$/g, "") && q}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-semibold">
            El <span className="font-extrabold text-primary">Berçário Pronto</span> fue creado para facilitar tu rutina
            <br className="hidden sm:block" /> y darte ideas listas para usar.
          </p>
        </div>
      </section>

      {/* PARA TI */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Este material es para ti si…</SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Trabajas en una guardería — sala de bebés, de 1 o 2 años",
              "Cuidas a niños de 0 a 3 años",
              "Necesitas ideas sencillas y listas",
              "Quieres ahorrar tiempo en la planeación",
              "Buscas actividades lúdicas y fáciles",
              "Quieres un material organizado para consultar siempre",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border bg-card p-4 text-base font-semibold">
                <Tick variant="leaf" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ANTES / DEPOIS */}
      <section className="bg-cream px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>
            Menos tiempo planeando. <span className="text-primary">Más ideas listas para aplicar.</span>
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border bg-card p-6 shadow-soft">
              <p className="mb-4 inline-block rounded-full bg-muted px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-muted-foreground">Antes</p>
              <ul className="space-y-3">
                {["Perder tiempo buscando actividades", "Improvisar en el momento", "Repetir siempre las mismas ideas", "Sentirte insegura al planear"].map((t) => (
                  <li key={t} className="flex gap-3 text-base text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                      <X className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-leaf bg-card p-6 shadow-soft">
              <p className="mb-4 inline-block rounded-full bg-leaf px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-primary-foreground">Después</p>
              <ul className="space-y-3">
                {["Abrir el PDF", "Elegir una actividad", "Separar materiales sencillos", "Aplicarla con más seguridad"].map((t) => (
                  <li key={t} className="flex gap-3 text-base font-semibold">
                    <Tick variant="leaf" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="py-16">
        <div className="px-5">
          <SectionTitle sub="Un paquete digital en PDF con actividades pensadas para niños de 0 a 3 años, con propuestas sencillas, lúdicas y fáciles de aplicar en la rutina de la guardería.">
            ¿Qué es el Berçário Pronto?
          </SectionTitle>
          <p className="mb-6 text-center text-sm font-extrabold uppercase tracking-widest text-leaf">Actividades pedagógicas probadas</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...CARROSSEL, ...CARROSSEL].map((src, i) => (
              <img key={i} src={src} alt={`Actividad ${(i % 10) + 1}`} loading="lazy" className="h-64 w-auto rounded-2xl shadow-soft sm:h-80" />
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 px-5 sm:grid-cols-4">
          {CATEGORIAS.map(({ t, i: Icon, c }) => (
            <div key={t} className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 text-center">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${c}`}>
                <Icon className="h-5 w-5 text-foreground" />
              </span>
              <span className="text-sm font-bold leading-tight">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ORIENTAÇÕES */}
      <section className="bg-mint px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionTitle sub="Las propuestas se organizaron tomando como referencia las Orientaciones Pedagógicas para Guarderías, respetando el ritmo, el bienestar, la participación y el desarrollo de cada niño.">
            Actividades alineadas con la realidad de las guarderías en Portugal
          </SectionTitle>
          <ol className="grid gap-3 sm:grid-cols-2">
            {AREAS.map(({ t, c }, i) => (
              <li key={t} className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-soft">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-extrabold ${c}`}>{i + 1}</span>
                <span className="font-bold">{t}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 rounded-2xl bg-card p-5 text-center text-lg font-semibold">
            Así, no entregas solo un juego: <span className="text-primary">entregas una propuesta con intención pedagógica.</span>
          </p>
        </div>
      </section>

      {/* O QUE VAIS RECEBER */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img src={IMG.receber} alt="Mockup Kit Berçário Pronto" loading="lazy" className="mx-auto w-full max-w-md drop-shadow-2xl" />
          <div>
            <h2 className="mb-6 text-center text-3xl font-extrabold sm:text-4xl md:text-left">Lo que vas a recibir</h2>
            <ul className="space-y-3">
              {[
                "+200 Actividades Listas",
                "Ideas para niños de 0 a 3 años",
                "Actividades fáciles de aplicar",
                "Materiales sencillos y económicos",
                "Explicaciones claras y directas",
                "Organización por tipo de actividad",
                "Material 100% didáctico en PDF",
                "Puedes imprimirlo cuantas veces quieras",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg font-semibold">
                  <Tick />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BÓNUS */}
      <section className="bg-lavender px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>
            Además, te llevas <span className="text-primary">5 Súper Bonos:</span>
          </SectionTitle>
          <img src={IMG.bonus} alt="Portadas de los 5 bonos" loading="lazy" className="mx-auto mb-10 w-full max-w-2xl" />
          <div className="space-y-4">
            {BONUS.map((b, i) => (
              <div key={b.t} className="flex gap-4 rounded-3xl bg-card p-5 shadow-soft sm:p-6">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-extrabold ${b.c}`}>{i + 1}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold leading-snug">
                    <span className="text-primary">Bono {i + 1}:</span> {b.t}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{b.d}</p>
                  <p className="mt-3 flex items-center gap-2">
                    <span className="text-muted-foreground line-through">{b.v}€</span>
                    <span className="rounded-full bg-leaf px-3 py-0.5 text-sm font-extrabold text-primary-foreground">GRATIS</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-ink p-6 text-center text-ink-foreground sm:p-8">
            <p className="text-lg">
              Valor total de los bonos: <span className="font-extrabold line-through">51€</span>
            </p>
            <p className="mt-1 font-display text-2xl font-extrabold text-sunny sm:text-3xl">¡Solo hoy, te llevas todo gratis!</p>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Clock className="h-4 w-4" /> La promoción termina en:
            </p>
            <div className="mt-3 flex justify-center gap-2">
              {[cd.h, cd.m, cd.s].map((v, i) => (
                <span key={i} className="min-w-16 rounded-xl bg-primary px-3 py-2 font-display text-3xl font-extrabold tabular-nums text-primary-foreground">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTAS */}
      <section id="ofertas" className="scroll-mt-4 bg-cream px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Elige la mejor opción para ti</SectionTitle>
          <div className="grid items-start gap-8 md:grid-cols-[1fr_1.2fr]">
            {/* Super oferta first on mobile */}
            <div className="relative order-1 flex flex-col rounded-3xl border-2 border-primary bg-card p-6 shadow-offer sm:p-8 md:order-2">
              <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow">
                <Star className="h-3.5 w-3.5" fill="currentColor" /> La más vendida
              </span>
              <img src={IMG.receber} alt="Kit Completo" loading="lazy" className="mx-auto mt-2 h-36 w-auto" />
              <h3 className="mt-2 text-center text-3xl font-extrabold">Súper Oferta</h3>
              <p className="mt-1 text-center text-muted-foreground">El Kit más amado por las Educadoras + 5 Súper Bonos. ¡Transformación completa!</p>
              <div className="my-5 text-center">
                <p className="text-muted-foreground">
                  de <span className="line-through">30€</span>
                </p>
                <p className="font-display text-6xl font-extrabold text-primary">{PRECO_COMPLETA}€</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-leaf">
                  <Lock className="h-3.5 w-3.5" /> Pago seguro
                </p>
              </div>
              <ul className="mb-6 space-y-2.5">
                {[
                  "+200 Actividades Listas para Guardería",
                  "Alineado con las Orientaciones para Guarderías (PT)",
                  "Calendario de 30 Días para la Guardería",
                  "Planificador Semanal para la Guardería",
                  "Carteles de Rutina para el Salón",
                  "Fichas de Observación del Niño",
                  "Guía de Bienvenida y Adaptación",
                  "Actualizaciones futuras del material",
                  "Material 100% digital en PDF",
                  "Soporte prioritario",
                  "Acceso inmediato",
                  "Garantía de 7 días",
                ].map((t) => (
                  <li key={t} className="flex gap-3 font-semibold">
                    <Tick />
                    {t}
                  </li>
                ))}
              </ul>
              <CtaButton href={CHECKOUT_COMPLETA} onClick={() => track("initiate_checkout")} pulse>
                Quiero el Kit Completo + Bonos — {PRECO_COMPLETA}€
              </CtaButton>
              <p className="mt-3 text-center text-sm font-bold text-muted-foreground">¡Pago único, acceso de por vida!</p>
            </div>

            <div className="order-2 flex flex-col rounded-3xl border bg-card p-6 sm:p-8 md:order-1">
              <h3 className="text-center text-2xl font-extrabold">Oferta sencilla</h3>
              <p className="mt-1 text-center text-muted-foreground">Ideal para empezar con lo esencial.</p>
              <div className="my-5 text-center">
                <p className="text-muted-foreground">
                  de <span className="line-through">10€</span>
                </p>
                <p className="font-display text-5xl font-extrabold">{PRECO_BASICA}€</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-leaf">
                  <Lock className="h-3.5 w-3.5" /> Pago seguro
                </p>
              </div>
              <ul className="mb-6 space-y-2.5">
                {["+120 Actividades Listas para Guardería", "Material 100% digital en PDF", "Acceso inmediato", "Garantía de 7 días"].map((t) => (
                  <li key={t} className="flex gap-3 font-semibold">
                    <Tick variant="leaf" />
                    {t}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModal(true)}
                className="w-full rounded-full bg-sunny px-6 py-3.5 font-extrabold text-sunny-foreground shadow-soft transition hover:brightness-95"
              >
                Quiero solo las actividades — {PRECO_BASICA}€
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">Todavía puedes llevarte el Kit Completo por menos de la mitad, ¡aprovecha!</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16">
        <div className="px-5">
          <SectionTitle>Lo que dicen nuestras "Educadoras" 🥰</SectionTitle>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...DEPOIMENTOS, ...DEPOIMENTOS, ...DEPOIMENTOS, ...DEPOIMENTOS].map((src, i) => (
              <img key={i} src={src} alt={`Testimonio ${(i % 3) + 1}`} loading="lazy" className="h-96 w-auto rounded-2xl border shadow-soft" />
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-mint px-5 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
          <img src={IMG.selo} alt="Sello de garantía de 7 días" loading="lazy" className="h-36 w-36 shrink-0" />
          <div>
            <h2 className="flex items-center justify-center gap-2 text-3xl font-extrabold sm:justify-start">
              <ShieldCheck className="h-7 w-7 text-leaf" /> Pruébalo sin riesgo
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Abre el material, revisa las actividades y, si sientes que no facilita tu rutina, te devolvemos el 100% de tu dinero, sin preguntas y sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <SectionTitle>Preguntas frecuentes</SectionTitle>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group rounded-2xl border bg-card p-5 open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <CtaButton href="#ofertas">Quiero el Kit Completo</CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t bg-cream px-5 py-8 text-center text-sm text-muted-foreground">
        <img src={IMG.logo} alt="Kit Berçário Pronto" loading="lazy" className="mx-auto mb-3 h-10 w-auto" />© {new Date().getFullYear()} Kit Berçário Pronto · Todos los derechos reservados
      </footer>

      {modal && <UpsellModal onClose={() => setModal(false)} />}
    </div>
  );
}

function UpsellModal({ onClose }: { onClose: () => void }) {
  const poupa = PRECO_COMPLETA - PRECO_PROMO;
  const pct = Math.round((poupa / PRECO_COMPLETA) * 100);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose}>
      <div
        className="relative max-h-[94vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-card shadow-offer sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Cerrar" className="absolute right-3 top-3 z-10 rounded-full bg-card/80 p-1.5 text-foreground">
          <X className="h-5 w-5" />
        </button>
        <div className="bg-cta px-6 pb-6 pt-7 text-center text-primary-foreground">
          <p className="inline-flex items-center gap-1 rounded-full bg-ink/25 px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5" /> Oferta solo en esta ventana
          </p>
          <p className="mt-3 flex items-center justify-center gap-1 text-sm font-bold">
            <Sparkles className="h-4 w-4" /> Mejora a Premium
          </p>
          <h3 className="mt-1 text-2xl font-extrabold leading-tight">
            ¡Espera! Llévate el Plan Premium por solo {PRECO_PROMO}€
          </h3>
          <p className="mt-2 text-sm font-semibold">
            En lugar de {PRECO_COMPLETA}€ — ahorras {poupa}€ ahora ({pct}% OFF)
          </p>
        </div>
        <div className="space-y-4 p-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              De <span className="line-through">{PRECO_COMPLETA}€</span> por solo
            </p>
            <p className="font-display text-5xl font-extrabold text-primary">{PRECO_PROMO}€</p>
            <p className="text-sm font-bold text-leaf">✓ Pago único · acceso de por vida</p>
          </div>
          <div className="rounded-2xl bg-cream p-4">
            <p className="mb-3 flex items-center gap-1 font-extrabold">
              <Gift className="h-4 w-4 text-primary" /> Llévate más con el Premium
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><Tick /><span><b>200 actividades</b> completas (vs. 120 en el básico)</span></li>
              <li className="flex gap-2"><Tick /><span>Organizadas por <b>sala de bebés, de 1 y 2 años</b></span></li>
              <li className="flex gap-2"><Tick /><span><b>Actualizaciones gratis</b> para siempre</span></li>
            </ul>
            <ul className="mt-3 space-y-1 border-t pt-3 text-sm">
              {BONUS.map((b) => (
                <li key={b.t} className="flex gap-2"><span className="font-bold text-leaf">✓</span>{b.t}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold">
              Valor real de los bonos: <span className="line-through">51€</span> — hoy incluidos
            </p>
          </div>
          <CtaButton href={CHECKOUT_PROMO} onClick={() => track("initiate_checkout")} pulse>
            ¡Sí! Quiero el Premium por {PRECO_PROMO}€
          </CtaButton>
          <p className="flex items-center justify-center gap-1 text-sm font-semibold text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-leaf" /> Garantía incondicional de 7 días
          </p>
          <a href={CHECKOUT_BASICA} className="block text-center text-sm text-muted-foreground underline">
            No, prefiero perder los bonos y pagar {PRECO_BASICA}€ por el básico
          </a>
        </div>
      </div>
    </div>
  );
}
