/* Hand-built visual panels for each project — designed, not screenshotted. */

export function DiscVisual() {
  return (
    <div className="panel project-visual font-mono text-[11px] leading-relaxed sm:text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/40">disc — k6 load test</span>
        <span className="ml-auto flex items-center gap-1.5 text-[#4ade80]">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          live
        </span>
      </div>
      <div className="px-4 py-4">
        <p className="text-white/50">$ k6 run load/k6-ws.js</p>
        <p className="mt-2 text-white/80">
          scenario: <span className="text-[#3b82f6]">ws_baseline</span> — 1,000
          VUs, ramping
        </p>
        <div className="mt-3 space-y-1.5">
          <MetricBar label="connected" pct={100} value="1000/1000" />
          <MetricBar label="msg_delivery" pct={99} value="99.8%" />
          <MetricBar label="p95 latency" pct={24} value="38ms" />
        </div>
        <p className="mt-3 text-[#4ade80]">
          ✓ checks.........: 100.00% — baseline PASS
        </p>
        <p className="mt-1 text-white/40">
          gateway×2 · redis fan-out · postgres
          <span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-white/70" />
        </p>
      </div>
    </div>
  );
}

function MetricBar({
  label,
  pct,
  value,
}: {
  label: string;
  pct: number;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-white/50">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#3b82f6]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-16 shrink-0 text-right text-white/80">{value}</span>
    </div>
  );
}

export function PlayListVisual() {
  return (
    <div className="panel project-visual p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden
          >
            <path d="M9 18V5l12-2v13" opacity="0" />
            <path d="M9 3v10.55A4 4 0 1 0 11 17V7l8-1.6V11.5A4 4 0 1 0 21 15V1L9 3z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            Midnight Drive
          </p>
          <p className="text-xs text-white/50">My Playlist · 24 tracks</p>
          <div className="mt-2.5 h-1 w-full rounded-full bg-white/15">
            <div className="h-full w-2/3 rounded-full bg-white" />
          </div>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#12161a">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {[
          ["01", "Neon Skyline", "3:42", true],
          ["02", "Static Bloom", "4:05", false],
          ["03", "Afterglow", "2:58", false],
        ].map(([n, t, d, playing]) => (
          <div
            key={n as string}
            className="flex items-center gap-3 text-xs text-white/60"
          >
            {playing ? (
              <span className="flex h-3 w-4 items-end gap-[2px]">
                <span
                  className="eq-bar h-full w-[3px] rounded-sm bg-[#3b82f6]"
                  style={{ "--eqd": "0s" } as React.CSSProperties}
                />
                <span
                  className="eq-bar h-full w-[3px] rounded-sm bg-[#3b82f6]"
                  style={{ "--eqd": "0.25s" } as React.CSSProperties}
                />
                <span
                  className="eq-bar h-full w-[3px] rounded-sm bg-[#3b82f6]"
                  style={{ "--eqd": "0.5s" } as React.CSSProperties}
                />
              </span>
            ) : (
              <span className="w-4 text-white/35">{n}</span>
            )}
            <span className={playing ? "text-white" : ""}>{t}</span>
            <span className="ml-auto text-white/35">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClementVisual() {
  return (
    <div className="panel project-visual font-mono text-[11px] leading-relaxed sm:text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/40">clementgpt — session 01</span>
      </div>
      <div className="px-4 py-4 text-[#4ade80]">
        <p className="text-white/40">// gemini api · flask · access granted</p>
        <p className="mt-2">
          <span className="text-white/50">you@terminal:~$</span> who are you?
        </p>
        <p className="mt-1.5">
          &gt; I am CLEMENT. Ask me anything.
          <br />
          &gt; Encryption: none. Honesty: full.
        </p>
        <p className="mt-2">
          <span className="text-white/50">you@terminal:~$</span> best way to
          learn?
        </p>
        <p className="mt-1.5">
          &gt; Ship something real. Break it.
          <br />
          &gt; Fix it. Repeat.
          <span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-[#4ade80]" />
        </p>
      </div>
    </div>
  );
}
