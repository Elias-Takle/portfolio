export const real = (v) => !!v && !/\[.*\]/.test(v);

// Renders a working external link, or a visibly disabled placeholder until a real URL is set in data.js.
export function L({ href, mailto, children, className = '', ...rest }) {
  if (!real(href)) {
    return <span className={`${className} off`} title="Placeholder: set this in src/data.js" {...rest}>{children}</span>;
  }
  const ext = mailto ? {} : { target: '_blank', rel: 'noreferrer noopener' };
  return <a href={mailto ? `mailto:${href}` : href} className={className} {...ext} {...rest}>{children}</a>;
}

export const Section = ({ id, title, intro, children }) => (
  <section id={id} className="sec" aria-labelledby={`${id}-h`}>
    <div className="wrap">
      <h2 id={`${id}-h`}>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
      {children}
    </div>
  </section>
);

export const Tag = ({ children }) => <span className="tag">{children}</span>;
