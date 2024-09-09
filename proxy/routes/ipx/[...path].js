import { lazyEventHandler, useBase } from "h3";
import { createIPX, createIPXH3Handler, ipxHttpStorage } from "ipx";

export default lazyEventHandler(() => {
  const ipx = createIPX({
    maxAge: 3600,
    alias: {
      "/tmdb": "https://image.tmdb.org/t/p/1280/",
    },
    storage: ipxHttpStorage({
      domain: "image.tmdb.org",
    }),
  });

  return useBase("/ipx", createIPXH3Handler(ipx));
});
