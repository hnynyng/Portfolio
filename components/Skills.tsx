import Reveal from "./Reveal";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "HTML & CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "WebSockets", "Flask", "PostgreSQL", "Redis", "Gemini API"],
  },
  {
    title: "Infra & Tooling",
    items: ["Docker", "Prometheus", "Grafana", "k6", "Vercel", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Everything here has shipped in a real project — no aspirational
            padding.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full px-3.5 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
