import ArrowLink from './ArrowLink';

export default function ProductEntry({ product }) {
  const headingId = `product-${product.name.toLowerCase()}`;
  return (
    <article className="product" aria-labelledby={headingId}>
      <div className="product__plate">
        <p className="meta">{product.domain}</p>
        <p className="product__plate-line mt-6">{product.plate.line}</p>
        <p className="meta mt-6">{product.plate.detail}</p>
      </div>

      <div className="product__body">
        <h3 id={headingId} className="text-[26px] tracking-[-0.025em]">
          {product.name}
        </h3>
        <p className="mt-3 text-[18px] leading-[1.5]">{product.purpose}</p>

        <dl className="product__facts">
          {product.role && (
            <>
              <dt>Role</dt>
              <dd>{product.role}</dd>
            </>
          )}
          <dt>Status</dt>
          <dd>{product.status}</dd>
        </dl>

        <div className="mt-5 space-y-3 text-[16px] muted">
          {product.problem.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <p className="meta mt-5">{product.details}</p>

        <div className="product__links">
          {product.links.map((link) => (
            <ArrowLink key={link.href} href={link.href}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </article>
  );
}
