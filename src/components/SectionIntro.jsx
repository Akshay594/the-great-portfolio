// Heading block used at the top of each homepage section.
export default function SectionIntro({ id, label, title, children, action }) {
  return (
    <div className="section-intro grid-12">
      <div className="lg:col-span-3">
        <p className="eyebrow">{label}</p>
      </div>
      <div className="lg:col-span-7">
        <h2 id={id} className="h-section mt-3 lg:mt-0" tabIndex={-1}>
          {title}
        </h2>
        {children && <div className="lede muted prose-width mt-5">{children}</div>}
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  );
}
