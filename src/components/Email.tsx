import { useEffect, useState, type ReactNode } from "react";

// Mailto link whose address is assembled only after mount, in the browser.
// Prerendered HTML (scripts/prerender.mjs runs renderToString, which never
// fires effects) and the JS bundle therefore never contain a full
// user@domain string for email harvesters to regex out. Keep user and
// domain as separate props at call sites — joining them there would put
// the address back in the bundle.
export function Email({
  user,
  domain,
  subject,
  className,
  children,
}: {
  user: string;
  domain: string;
  subject?: string;
  className?: string;
  children?: ReactNode;
}) {
  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(user + String.fromCharCode(64) + domain);
  }, [user, domain]);
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return (
    <a href={address ? `mailto:${address}${query}` : undefined} className={className}>
      {children ?? (address || `${user} [at] ${domain}`)}
    </a>
  );
}
