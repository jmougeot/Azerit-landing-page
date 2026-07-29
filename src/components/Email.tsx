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
  children,
}: {
  user: string;
  domain: string;
  children?: ReactNode;
}) {
  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(user + String.fromCharCode(64) + domain);
  }, [user, domain]);
  return (
    <a href={address ? `mailto:${address}` : undefined}>
      {children ?? (address || `${user} [at] ${domain}`)}
    </a>
  );
}
