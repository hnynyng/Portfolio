import Reveal from "./Reveal";

const milestones: { period: string; title: string; body: string }[] = [
  {
    period: "2025",
    title: "First things that ran",
    body: "Learned the fundamentals by shipping small, finished things — a Snake game in Python and a Tetris clone in Java. Simple, but done.",
  },
  {
    period: "2026",
    title: "ClementGPT — school project",
    body: "Built a hacker-terminal chatbot on Flask with a live Gemini API integration. First time wiring a real external API into something people could actually talk to.",
  },
  {
    period: "Jun 2026",
    title: "PlayList goes to production",
    body: "First full-stack app deployed live: React frontend, Node backend, Dockerized, hosted on Vercel. Learned what 'it works on my machine' really means.",
  },
  {
    period: "Jul 2026",
    title: "Disc — thinking in systems",
    body: "Built a distributed WebSocket backend in four phases: single-node core, sharded gateways, full observability, then load-tested it at 1,000 concurrent connections. The most I've learned from one project so far.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Journey
          </h2>
          <p className="mt-3 max-w-md text-muted">
            I like being the least experienced person in the room — it means
            everyone else is worth listening to.
          </p>
        </Reveal>

        <div className="mt-14 border-l border-line pl-8">
          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="timeline-item relative">
                  <p className="text-sm font-medium text-accent">{m.period}</p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
