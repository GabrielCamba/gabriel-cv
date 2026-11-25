type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
        {`${index} // ${label}`}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
