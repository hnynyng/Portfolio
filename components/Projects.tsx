import Reveal from "./Reveal";
import { ClementVisual, DiscVisual, PlayListVisual } from "./visuals";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  note?: string;
  visual: React.ReactNode;
};

const projects: Project[] = [
  {
    name: "Disc",
    tagline: "A Discord-scale message backend",
    description:
      "A real-time messaging backend built to survive high volume: a WebSocket gateway with Redis fan-out and PostgreSQL persistence, sharded across two containerized gateways with cross-gateway message routing. Instrumented end-to-end with Prometheus and Grafana, and load-tested with k6 at 1,000 concurrent connections — baseline pass.",
    tech: ["Node.js", "WebSockets", "Redis", "PostgreSQL", "Docker", "Prometheus", "Grafana", "k6"],
    links: [{ label: "View on GitHub", href: "https://github.com/hnynyng/Disc" }],
    visual: <DiscVisual />,
  },
  {
    name: "PlayList",
    tagline: "Music streaming & playlist management",
    description:
      "A full-stack music app for streaming tracks and managing playlists — React on the frontend, a Node API behind it, and the whole thing containerized with Docker. Deployed and live in production.",
    tech: ["React", "Vite", "Node.js", "Docker", "Vercel"],
    links: [
      { label: "Live site", href: "https://play-list-hnhn.vercel.app" },
      { label: "GitHub", href: "https://github.com/hnynyng/PlayList" },
    ],
    visual: <PlayListVisual />,
  },
  {
    name: "ClementGPT",
    tagline: "A hacker-terminal AI chat",
    description:
      "A chatbot with a hacker-terminal interface, wired to a live Gemini API integration on a Flask backend — type anything and it answers in character. Built as a school project; the aesthetic is green-on-black on purpose.",
    tech: ["Python", "Flask", "Gemini API", "HTML/CSS"],
    links: [],
    note: "School project — repo private for now",
    visual: <ClementVisual />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-md text-muted">
          Built to learn something real — not to fill a grid.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col gap-24 sm:gap-28">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article
              className={`project-row flex flex-col gap-8 md:items-center md:gap-14 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="md:w-1/2">{p.visual}</div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {p.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-muted">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-6">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link text-sm font-medium"
                    >
                      {l.label}{" "}
                      <span className="arrow" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ))}
                  {p.note && (
                    <span className="text-[13px] italic text-muted">
                      {p.note}
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
