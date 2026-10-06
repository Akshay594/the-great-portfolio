import { ArrowUpRight } from 'lucide-react';
import { profile, socials } from '../content/site';

export default function ContactSection() {
  return (
    <section className="section" aria-labelledby="contact">
      <div className="wrap">
        <div className="grid-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>
          <div className="lg:col-span-9">
            <h2 id="contact" className="h-section mt-3 lg:mt-0" tabIndex={-1}>
              Get in touch
            </h2>
            <p className="lede muted prose-width mt-5">
              For research discussions, collaborations, or a conversation about something I’m building.
            </p>
            <a className="contact-email link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>

            <ul className="profiles" aria-label="Profiles">
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href}>
                    <span className="profiles__label">
                      {social.label}
                      <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="meta">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
