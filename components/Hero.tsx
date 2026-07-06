export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-5xl">
        <p
          className="intro-rise mb-5 text-sm font-medium uppercase tracking-[0.25em] text-accent"
          style={{ "--d": "0.15s" } as React.CSSProperties}
        >
          Software Engineer
        </p>
        <h1
          className="intro-rise text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
          style={{ "--d": "0.3s" } as React.CSSProperties}
        >
          Hon Yen Yang
        </h1>
        <div
          className="intro-line my-8 h-px w-full max-w-md bg-line"
          style={{ "--d": "0.7s" } as React.CSSProperties}
        />
        <p
          className="intro-rise max-w-xl text-lg leading-relaxed text-muted"
          style={{ "--d": "0.55s" } as React.CSSProperties}
        >
          I build systems that hold up under load — and I&apos;d rather be the
          least experienced person in the room than the one with nothing left
          to learn.
        </p>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="intro-fade absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        style={{ "--d": "1.6s" } as React.CSSProperties}
      >
        <svg
          className="scroll-cue"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v16" />
          <path d="m6 14 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
