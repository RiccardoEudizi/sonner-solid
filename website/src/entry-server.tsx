import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/public/favicon.ico" />
          {assets}
        </head>
        <body class="sm:max-w-3xl sm:mx-auto">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
