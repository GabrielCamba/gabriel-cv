const stats = [
  {
    value: "15",
    label: "years in software",
    detail: "engineering, QA, content, and education",
  },
  {
    value: "5",
    label: "years in Web3",
    detail: "Ethereum, Polkadot, and The Graph",
  },
  {
    value: "3",
    label: "international stages",
    detail: "LABITCONF, Sub0 Asia, Panama Blockchain Week",
  },
  {
    value: "ES / EN",
    label: "working languages",
    detail: "native Spanish · professional English",
  },
];

export function ProofStrip() {
  return (
    <section
      aria-label="Quick facts"
      className="border-b border-border bg-surface/50"
    >
      <div className="container-page py-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-5 md:p-6">
              <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
