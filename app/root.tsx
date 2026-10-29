import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

// React Router refuse de construire sans racine : c'est elle qui rend le document HTML.
export default function Racine() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
