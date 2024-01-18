globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/node-fetch-native@1.6.1/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, setHeader, getRequestIP, getRequestURL, getRequestWebStream, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/h3@1.10.0/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/scule@1.2.0/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import _KdZeid9pRV from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/vinxi@0.1.4_@types+node@18.19.8_preact@10.19.3_rollup@3.29.4/node_modules/vinxi/lib/app-fetch.js';
import _OfZYp46C9H from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/vinxi@0.1.4_@types+node@18.19.8_preact@10.19.3_rollup@3.29.4/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import { sharedConfig, lazy, createComponent as createComponent$1 } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/solid-js@1.8.11/node_modules/solid-js/dist/server.js';
import { provideRequestEvent } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/solid-js@1.8.11/node_modules/solid-js/web/dist/storage.js';
import { ssr, createComponent, ssrHydrationKey, NoHydration, escape, renderToStream, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file://C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/node_modules/.pnpm/solid-js@1.8.11/node_modules/solid-js/web/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website\\.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website\\.vinxi\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","order":0,"outDir":"C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","base":"/","outDir":"C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","outDir":"C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"../node_modules/.pnpm/@solidjs+start@0.4.10_rollup@3.29.4_solid-js@1.8.11_vinxi@0.1.4_vite@5.0.11/node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website","outDir":"C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"prerender":{}},"root":"C:\\Users\\rikeu\\Documents\\JSProjects\\sonner-main\\sonner-main-solid\\website"};
				const buildManifest = {"ssr":{"_components-86ea9901.js":{"file":"assets/components-86ea9901.js"},"src/components/Footer/emil.jpeg":{"file":"assets/emil-e4ece306.jpeg","src":"src/components/Footer/emil.jpeg"},"src/components/Footer/ric.jpg":{"file":"assets/ric-85437fd9.jpg","src":"src/components/Footer/ric.jpg"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","imports":["_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.js","imports":["_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/getting-started.tsx?pick=default&pick=$css":{"file":"getting-started.js","isDynamicEntry":true,"isEntry":true,"src":"src/routes/getting-started.tsx?pick=default&pick=$css"},"src/routes/index.css":{"file":"assets/index-0eda1245.css","src":"src/routes/index.css"},"src/routes/index.tsx?pick=default&pick=$css":{"assets":["assets/emil-e4ece306.jpeg","assets/ric-85437fd9.jpg"],"css":["assets/index-0eda1245.css"],"file":"index.js","imports":["_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"src/routes/styling.tsx?pick=default&pick=$css":{"file":"styling.js","isDynamicEntry":true,"isEntry":true,"src":"src/routes/styling.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/ssr":{"dynamicImports":["src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/getting-started.tsx?pick=default&pick=$css","src/routes/getting-started.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/styling.tsx?pick=default&pick=$css","src/routes/styling.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"file":"ssr.js","isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-27a17a32.css","src":"\u0000virtual:#vinxi/handler/client.css"},"../node_modules/.pnpm/shikiji@0.9.19/node_modules/shikiji/dist/onig.wasm":{"file":"assets/onig-fd885c2d.wasm","src":"../node_modules/.pnpm/shikiji@0.9.19/node_modules/shikiji/dist/onig.wasm"},"_components-f9c5e575.js":{"file":"assets/components-f9c5e575.js","imports":["_web-1dcd6a29.js","_routing-54e7b278.js"]},"_index-fd497d93.js":{"file":"assets/index-fd497d93.js","imports":["_web-1dcd6a29.js"]},"_routing-54e7b278.js":{"file":"assets/routing-54e7b278.js","imports":["_web-1dcd6a29.js"]},"_web-1dcd6a29.js":{"file":"assets/web-1dcd6a29.js"},"src/components/Footer/emil.jpeg":{"file":"assets/emil-e4ece306.jpeg","src":"src/components/Footer/emil.jpeg"},"src/components/Footer/ric.jpg":{"file":"assets/ric-85437fd9.jpg","src":"src/components/Footer/ric.jpg"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-fe730f6d.js","imports":["_web-1dcd6a29.js","_components-f9c5e575.js","_routing-54e7b278.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"assets/about-ae7b0ef1.js","imports":["_web-1dcd6a29.js","_components-f9c5e575.js","_routing-54e7b278.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/getting-started.tsx?pick=default&pick=$css":{"file":"assets/getting-started-f9a390be.js","imports":["_web-1dcd6a29.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/getting-started.tsx?pick=default&pick=$css"},"src/routes/index.css":{"file":"assets/index-0eda1245.css","src":"src/routes/index.css"},"src/routes/index.tsx?pick=default&pick=$css":{"assets":["assets/emil-e4ece306.jpeg","assets/ric-85437fd9.jpg"],"css":["assets/index-0eda1245.css"],"file":"assets/index-3b32a90f.js","imports":["_web-1dcd6a29.js","_components-f9c5e575.js","_index-fd497d93.js","_routing-54e7b278.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"src/routes/styling.tsx?pick=default&pick=$css":{"file":"assets/styling-5227ace4.js","imports":["_web-1dcd6a29.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/styling.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/client":{"css":["assets/client-27a17a32.css"],"dynamicImports":["src/routes/about.tsx?pick=default&pick=$css","src/routes/getting-started.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/styling.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"file":"assets/client-c1c75cc3.js","imports":["_web-1dcd6a29.js","_index-fd497d93.js","_routing-54e7b278.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_KdZeid9pRV,
_OfZYp46C9H,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-01-16T19:06:03.000Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/og.png": {
    "type": "image/png",
    "etag": "\"34524-gZWxLjaWB2tIWmBhVHSrcM9x+TA\"",
    "mtime": "2024-01-14T15:26:39.573Z",
    "size": 214308,
    "path": "../../.output/public/og.png"
  },
  "/assets/components-86ea9901.js": {
    "type": "application/javascript",
    "etag": "\"4af-qXVx/EU750ZRllfZ9ZNxEkMKrpU\"",
    "mtime": "2024-01-18T19:19:28.199Z",
    "size": 1199,
    "path": "../../.output/public/assets/components-86ea9901.js"
  },
  "/assets/components-86ea9901.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"25a-AI/pjiL2CPUG4VwVHrLmExPQyOU\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 602,
    "path": "../../.output/public/assets/components-86ea9901.js.br"
  },
  "/assets/components-86ea9901.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2a8-0uTml/Ikw/8vIBquuxrBmviRUR4\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 680,
    "path": "../../.output/public/assets/components-86ea9901.js.gz"
  },
  "/assets/emil-e4ece306.jpeg": {
    "type": "image/jpeg",
    "etag": "\"187c-rLyJsiaj6a6dSo5EsNtOrMIyoVQ\"",
    "mtime": "2024-01-18T19:19:28.200Z",
    "size": 6268,
    "path": "../../.output/public/assets/emil-e4ece306.jpeg"
  },
  "/assets/index-0eda1245.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4af7-trE+VT5mL0eBxmqgANZlMURvO7g\"",
    "mtime": "2024-01-18T19:19:28.199Z",
    "size": 19191,
    "path": "../../.output/public/assets/index-0eda1245.css"
  },
  "/assets/index-0eda1245.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"e93-il0/ivJZsHylbLacWjNf4hm+Dbs\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 3731,
    "path": "../../.output/public/assets/index-0eda1245.css.br"
  },
  "/assets/index-0eda1245.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"10ab-gL9/NK6jGwy9HWGLHCb6VcJJCzQ\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 4267,
    "path": "../../.output/public/assets/index-0eda1245.css.gz"
  },
  "/assets/ric-85437fd9.jpg": {
    "type": "image/jpeg",
    "etag": "\"b931-KfzzAUAeybAADIRUQ8kBikb6zcs\"",
    "mtime": "2024-01-18T19:19:28.197Z",
    "size": 47409,
    "path": "../../.output/public/assets/ric-85437fd9.jpg"
  },
  "/_build/manifest.json": {
    "type": "application/json",
    "etag": "\"d8e-r5LaqgGRl6ut6x3Nlm8UJ4+s//E\"",
    "mtime": "2024-01-18T19:19:31.945Z",
    "size": 3470,
    "path": "../../.output/public/_build/manifest.json"
  },
  "/_build/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"23d-ghszjKTaki4HRVvUJ10Ey8/CHP4\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 573,
    "path": "../../.output/public/_build/manifest.json.br"
  },
  "/_build/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"281-ykSP/47Oh8H4Y9F3QZ58OoFqkLY\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 641,
    "path": "../../.output/public/_build/manifest.json.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-01-18T19:19:31.945Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/_build/assets/about-ae7b0ef1.js": {
    "type": "application/javascript",
    "etag": "\"3d7-ldyiGFOm5bkNSaQ9NyqZWWeH2iI\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 983,
    "path": "../../.output/public/_build/assets/about-ae7b0ef1.js"
  },
  "/_build/assets/client-27a17a32.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37cd-FosmxdGjlrmS/zXtr/fsQCUduBY\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 14285,
    "path": "../../.output/public/_build/assets/client-27a17a32.css"
  },
  "/_build/assets/client-27a17a32.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"c10-9PWVtck+sXe9YOfnGJSYuT1npuY\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 3088,
    "path": "../../.output/public/_build/assets/client-27a17a32.css.br"
  },
  "/_build/assets/client-27a17a32.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e07-5Byde+iISNnT5Uf0O4F7cwQRUVc\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 3591,
    "path": "../../.output/public/_build/assets/client-27a17a32.css.gz"
  },
  "/_build/assets/client-c1c75cc3.js": {
    "type": "application/javascript",
    "etag": "\"33e4-ffxtoT2yKqQ5BTPufkbf5IVJB8A\"",
    "mtime": "2024-01-18T19:19:31.954Z",
    "size": 13284,
    "path": "../../.output/public/_build/assets/client-c1c75cc3.js"
  },
  "/_build/assets/client-c1c75cc3.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1161-ZYZOXv78+9XI4GdRmbOMM9J8NqQ\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 4449,
    "path": "../../.output/public/_build/assets/client-c1c75cc3.js.br"
  },
  "/_build/assets/client-c1c75cc3.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"135b-9d8dfI/Qerr33MQndPQQ/c80OUI\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 4955,
    "path": "../../.output/public/_build/assets/client-c1c75cc3.js.gz"
  },
  "/_build/assets/components-f9c5e575.js": {
    "type": "application/javascript",
    "etag": "\"30f-De5z+hdYoUCDAENj6pB+itZn7Gc\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 783,
    "path": "../../.output/public/_build/assets/components-f9c5e575.js"
  },
  "/_build/assets/emil-e4ece306.jpeg": {
    "type": "image/jpeg",
    "etag": "\"187c-rLyJsiaj6a6dSo5EsNtOrMIyoVQ\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 6268,
    "path": "../../.output/public/_build/assets/emil-e4ece306.jpeg"
  },
  "/_build/assets/getting-started-f9a390be.js": {
    "type": "application/javascript",
    "etag": "\"a66-iOg40p5rkrwNokpOagPYMqGsb8Q\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 2662,
    "path": "../../.output/public/_build/assets/getting-started-f9a390be.js"
  },
  "/_build/assets/getting-started-f9a390be.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"382-Hu3zGGCkDn4eMJC3sx36KuA5xjk\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 898,
    "path": "../../.output/public/_build/assets/getting-started-f9a390be.js.br"
  },
  "/_build/assets/getting-started-f9a390be.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"413-FIfhzk/4RJ1ijNhVAyC5JrSC29o\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 1043,
    "path": "../../.output/public/_build/assets/getting-started-f9a390be.js.gz"
  },
  "/_build/assets/index-0eda1245.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4af7-trE+VT5mL0eBxmqgANZlMURvO7g\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 19191,
    "path": "../../.output/public/_build/assets/index-0eda1245.css"
  },
  "/_build/assets/index-0eda1245.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"e93-il0/ivJZsHylbLacWjNf4hm+Dbs\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 3731,
    "path": "../../.output/public/_build/assets/index-0eda1245.css.br"
  },
  "/_build/assets/index-0eda1245.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"10ab-gL9/NK6jGwy9HWGLHCb6VcJJCzQ\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 4267,
    "path": "../../.output/public/_build/assets/index-0eda1245.css.gz"
  },
  "/_build/assets/index-3b32a90f.js": {
    "type": "application/javascript",
    "etag": "\"1095a-Ymx8cuUyC1L23FpWB0Tk2KxTfj8\"",
    "mtime": "2024-01-18T19:19:31.944Z",
    "size": 67930,
    "path": "../../.output/public/_build/assets/index-3b32a90f.js"
  },
  "/_build/assets/index-3b32a90f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"56a4-XNh7w/khS4Gs40OKH5XhK0D3RyQ\"",
    "mtime": "2024-01-18T19:19:32.629Z",
    "size": 22180,
    "path": "../../.output/public/_build/assets/index-3b32a90f.js.br"
  },
  "/_build/assets/index-3b32a90f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"60ec-RqHo4urh7dqvHgQXzJBNpCj1gTY\"",
    "mtime": "2024-01-18T19:19:32.521Z",
    "size": 24812,
    "path": "../../.output/public/_build/assets/index-3b32a90f.js.gz"
  },
  "/_build/assets/index-fd497d93.js": {
    "type": "application/javascript",
    "etag": "\"802-bF3kYX9WfUcM+ewBRDeC9wUyCn4\"",
    "mtime": "2024-01-18T19:19:31.954Z",
    "size": 2050,
    "path": "../../.output/public/_build/assets/index-fd497d93.js"
  },
  "/_build/assets/index-fd497d93.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"37c-iMdzqKPekf3Ps8R2IqBKO8K+T6Q\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 892,
    "path": "../../.output/public/_build/assets/index-fd497d93.js.br"
  },
  "/_build/assets/index-fd497d93.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3f7-ZTdiiQDGzrNQmFlDnThL+1CRJjo\"",
    "mtime": "2024-01-18T19:19:32.518Z",
    "size": 1015,
    "path": "../../.output/public/_build/assets/index-fd497d93.js.gz"
  },
  "/_build/assets/onig-fd885c2d.wasm": {
    "type": "application/wasm",
    "etag": "\"71eb2-sWRKnnRfEwkGBTHc1IeyNBzS478\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 466610,
    "path": "../../.output/public/_build/assets/onig-fd885c2d.wasm"
  },
  "/_build/assets/ric-85437fd9.jpg": {
    "type": "image/jpeg",
    "etag": "\"b931-KfzzAUAeybAADIRUQ8kBikb6zcs\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 47409,
    "path": "../../.output/public/_build/assets/ric-85437fd9.jpg"
  },
  "/_build/assets/routing-54e7b278.js": {
    "type": "application/javascript",
    "etag": "\"1931-JHxyN0U7uMfN/YIz2L8q/0Wy+VQ\"",
    "mtime": "2024-01-18T19:19:31.955Z",
    "size": 6449,
    "path": "../../.output/public/_build/assets/routing-54e7b278.js"
  },
  "/_build/assets/routing-54e7b278.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"afd-f70MgjLz/jXtV5ZU09QW00a5m2k\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 2813,
    "path": "../../.output/public/_build/assets/routing-54e7b278.js.br"
  },
  "/_build/assets/routing-54e7b278.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"c13-3/CWOI2rI990rCbe1vs8lDvazLM\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 3091,
    "path": "../../.output/public/_build/assets/routing-54e7b278.js.gz"
  },
  "/_build/assets/styling-5227ace4.js": {
    "type": "application/javascript",
    "etag": "\"8bf-il3ppBmaL/hmRDr12clzfCgq/6Q\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 2239,
    "path": "../../.output/public/_build/assets/styling-5227ace4.js"
  },
  "/_build/assets/styling-5227ace4.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"255-p/hUtKBxA0pGSvNKc6p89DC/HyY\"",
    "mtime": "2024-01-18T19:19:32.521Z",
    "size": 597,
    "path": "../../.output/public/_build/assets/styling-5227ace4.js.br"
  },
  "/_build/assets/styling-5227ace4.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2bd-FzzoT/CgVLwFR64JfP6AN7kFKAk\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 701,
    "path": "../../.output/public/_build/assets/styling-5227ace4.js.gz"
  },
  "/_build/assets/web-1dcd6a29.js": {
    "type": "application/javascript",
    "etag": "\"6272-ogwy5N7eHVtQMzbt5evaLDpNvwM\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 25202,
    "path": "../../.output/public/_build/assets/web-1dcd6a29.js"
  },
  "/_build/assets/web-1dcd6a29.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"230e-T9qAYvkE3vXAKWlul6TB2Pud/Pw\"",
    "mtime": "2024-01-18T19:19:32.553Z",
    "size": 8974,
    "path": "../../.output/public/_build/assets/web-1dcd6a29.js.br"
  },
  "/_build/assets/web-1dcd6a29.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"267b-gkJh8r233B8n31sD1UTddQ3arbY\"",
    "mtime": "2024-01-18T19:19:32.519Z",
    "size": 9851,
    "path": "../../.output/public/_build/assets/web-1dcd6a29.js.gz"
  },
  "/_build/assets/_...404_-fe730f6d.js": {
    "type": "application/javascript",
    "etag": "\"2e5-dUaoyTYx9wwsFTh09IOD+8hmfos\"",
    "mtime": "2024-01-18T19:19:31.953Z",
    "size": 741,
    "path": "../../.output/public/_build/assets/_...404_-fe730f6d.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ke = ((t) => (t[t.AggregateError = 1] = "AggregateError", t[t.ArrowFunction = 2] = "ArrowFunction", t[t.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", t[t.ObjectAssign = 8] = "ObjectAssign", t[t.BigIntTypedArray = 16] = "BigIntTypedArray", t))(ke || {});
function f$1(t, e) {
  if (!t)
    throw e;
}
function Fe(t) {
  switch (t) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d(t) {
  let e = "", r = 0, i;
  for (let s = 0, a = t.length; s < a; s++)
    i = Fe(t[s]), i && (e += t.slice(r, s) + i, r = s + 1);
  return r === 0 ? e = t : e += t.slice(r), e;
}
function Oe(t) {
  switch (t) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return t;
  }
}
function v$1(t) {
  return t.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Oe);
}
var y = "__SEROVAL_REFS__", R$1 = "$R", I = `self.${R$1}`;
function Ve(t) {
  return t == null ? `${I}=${I}||[]` : `(${I}=${I}||{})["${d(t)}"]=[]`;
}
var ee$1 = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
function $$1(t) {
  return ee$1.has(t);
}
function je(t) {
  return m.has(t);
}
function De(t) {
  return f$1($$1(t), new zt(t)), ee$1.get(t);
}
function $e(t) {
  return f$1(je(t), new wt(t)), m.get(t);
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, y, { value: m, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, y, { value: m, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, y, { value: m, configurable: true, writable: false, enumerable: false });
function te$1(t, e) {
  for (let r = 0, i = e.length; r < i; r++) {
    let s = e[r];
    t.has(s) || (t.add(s), s.extends && te$1(t, s.extends));
  }
}
function re$1(t) {
  if (t) {
    let e = /* @__PURE__ */ new Set();
    return te$1(e, t), [...e];
  }
}
var Ce$1 = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, ie$1 = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, Te = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables }, Me = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, Ue = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN }, se$1 = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, Be = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
function p(t) {
  return { t: 2, i: void 0, s: t, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
var C = p(2), T = p(3), _e = p(1), qe = p(0), We = p(4), Ne = p(5), Le = p(6), Ke = p(7);
function B(t) {
  return t instanceof EvalError ? 1 : t instanceof RangeError ? 2 : t instanceof ReferenceError ? 3 : t instanceof SyntaxError ? 4 : t instanceof TypeError ? 5 : t instanceof URIError ? 6 : 0;
}
function He(t) {
  let e = se$1[B(t)];
  return t.name !== e ? { name: t.name } : t.constructor.name !== e ? { name: t.constructor.name } : {};
}
function N(t, e) {
  let r = He(t), i = Object.getOwnPropertyNames(t);
  for (let s = 0, a = i.length, n; s < a; s++)
    n = i[s], n !== "name" && n !== "message" && (n === "stack" ? e & 4 && (r = r || {}, r[n] = t[n]) : (r = r || {}, r[n] = t[n]));
  return r;
}
function ae$1(t) {
  return Object.isFrozen(t) ? 3 : Object.isSealed(t) ? 2 : Object.isExtensible(t) ? 0 : 1;
}
function Ze(t) {
  switch (t) {
    case 1 / 0:
      return Ne;
    case -1 / 0:
      return Le;
  }
  return t !== t ? Ke : Object.is(t, -0) ? We : { t: 0, i: void 0, s: t, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function M(t) {
  return { t: 1, i: void 0, s: d(t), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ge(t) {
  return { t: 3, i: void 0, s: "" + t, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Je(t) {
  return { t: 4, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Qe(t, e) {
  return { t: 5, i: t, s: e.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
}
function Ye(t, e) {
  return { t: 6, i: t, s: void 0, l: void 0, c: d(e.source), m: e.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Xe(t, e) {
  let r = new Uint8Array(e), i = r.length, s = new Array(i);
  for (let a = 0; a < i; a++)
    s[a] = r[a];
  return { t: 19, i: t, s, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function et(t, e) {
  return { t: 17, i: t, s: ie$1[e], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function L(t, e) {
  return { t: 18, i: t, s: d(De(e)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ne$1(t, e, r) {
  return { t: 25, i: t, s: r, l: void 0, c: d(e), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function tt(t, e, r) {
  return { t: 9, i: t, s: void 0, l: e.length, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: ae$1(e) };
}
function rt(t, e) {
  return { t: 21, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function it(t, e, r) {
  return { t: 15, i: t, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function st(t, e, r) {
  return { t: 16, i: t, s: void 0, l: e.length, c: e.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function at(t, e, r) {
  return { t: 20, i: t, s: void 0, l: e.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: r, b: e.byteOffset, o: void 0 };
}
function nt(t, e, r) {
  return { t: 13, i: t, s: B(e), l: void 0, c: void 0, m: d(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ot(t, e, r) {
  return { t: 14, i: t, s: B(e), l: void 0, c: void 0, m: d(e.message), p: r, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function lt(t, e, r) {
  return { t: 7, i: t, s: void 0, l: e, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: void 0, b: void 0, o: void 0 };
}
function oe$1(t, e) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [t, e], f: void 0, b: void 0, o: void 0 };
}
function le$1(t, e) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [t, e], f: void 0, b: void 0, o: void 0 };
}
function ue$1(t, e, r) {
  return { t: 31, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: r, f: e, b: void 0, o: void 0 };
}
function ut(t, e) {
  return { t: 32, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function ct(t, e) {
  return { t: 33, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function dt(t, e) {
  return { t: 34, i: t, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: e, b: void 0, o: void 0 };
}
function ce$1(t) {
  let e = [], r = -1, i = -1, s = t[Symbol.iterator]();
  for (; ; )
    try {
      let a = s.next();
      if (e.push(a.value), a.done) {
        i = e.length - 1;
        break;
      }
    } catch (a) {
      r = e.length, e.push(a);
    }
  return { v: e, t: r, d: i };
}
function ht(t) {
  return () => {
    let e = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (e > t.d)
        return { done: true, value: void 0 };
      let r = e++, i = t.v[r];
      if (r === t.t)
        throw i;
      return { done: r === t.d, value: i };
    } };
  };
}
var ft = {}, pt = {}, vt = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} }, { toString: _ } = Object.prototype;
function mt(t, e) {
  return e instanceof Error ? `Seroval caught an error during the ${t} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${t} process.

"${_.call(e)}"

For more information, please check the "cause" property of this error.`;
}
var q$1 = class q extends Error {
  constructor(e, r) {
    super(mt(e, r)), this.cause = r;
  }
}, gt = class extends q$1 {
  constructor(t) {
    super("parsing", t);
  }
}, yt = class extends q$1 {
  constructor(t) {
    super("serialization", t);
  }
}, bt = class extends q$1 {
  constructor(t) {
    super("deserialization", t);
  }
}, A = class extends Error {
  constructor(e) {
    super(`The value ${_.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = e;
  }
}, de$1 = class de extends Error {
  constructor(e) {
    super('Unsupported node type "' + e.t + '".');
  }
}, he$1 = class he extends Error {
  constructor(e) {
    super('Missing plugin for tag "' + e + '".');
  }
}, g = class extends Error {
  constructor(e) {
    super('Missing "' + e + '" instance.');
  }
}, zt = class extends Error {
  constructor(e) {
    super('Missing reference for the value "' + _.call(e) + '" of type "' + typeof e + '"'), this.value = e;
  }
}, wt = class extends Error {
  constructor(t) {
    super('Missing reference for id "' + d(t) + '"');
  }
}, St = class extends Error {
  constructor(t) {
    super('Unknown TypedArray "' + t + '"');
  }
}, xt = class {
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set(), this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  getIndexedValue(e) {
    let r = this.refs.get(e);
    if (r != null)
      return this.markRef(r), { type: 1, value: Je(r) };
    let i = this.refs.size;
    return this.refs.set(e, i), { type: 0, value: i };
  }
  getReference(e) {
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r : $$1(e) ? { type: 2, value: L(r.value, e) } : r;
  }
  getStrictReference(e) {
    f$1($$1(e), new A(e));
    let r = this.getIndexedValue(e);
    return r.type === 1 ? r.value : L(r.value, e);
  }
  parseFunction(e) {
    return this.getStrictReference(e);
  }
  parseWellKnownSymbol(e) {
    let r = this.getReference(e);
    return r.type !== 0 ? r.value : (f$1(e in ie$1, new A(e)), et(r.value, e));
  }
  parseSpecialReference(e) {
    let r = this.getIndexedValue(vt[e]);
    return r.type === 1 ? r.value : { t: 26, i: r.value, s: e, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(ft);
    return e.type === 1 ? e.value : { t: 27, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(pt);
    return e.type === 1 ? e.value : { t: 29, i: e.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
  }
  createObjectNode(e, r, i, s) {
    return { t: i ? 11 : 10, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: s, e: void 0, a: void 0, f: void 0, b: void 0, o: ae$1(r) };
  }
  createMapNode(e, r, i, s) {
    return { t: 8, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: r, v: i, s }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
  }
  createPromiseConstructorNode(e) {
    return { t: 22, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
  }
};
function U() {
  let t, e;
  return { promise: new Promise((r, i) => {
    t = r, e = i;
  }), resolve(r) {
    t(r);
  }, reject(r) {
    e(r);
  } };
}
function It(t) {
  return "__SEROVAL_STREAM__" in t;
}
function S() {
  let t = /* @__PURE__ */ new Set(), e = [], r = true, i = false;
  function s(o) {
    for (let l of t.keys())
      l.next(o);
  }
  function a(o) {
    for (let l of t.keys())
      l.throw(o);
  }
  function n(o) {
    for (let l of t.keys())
      l.return(o);
  }
  return { __SEROVAL_STREAM__: true, on(o) {
    r && t.add(o);
    for (let l = 0, u = e.length; l < u; l++) {
      let h = e[l];
      l === u - 1 ? i ? o.return(h) : o.throw(h) : o.next(h);
    }
    return () => {
      r && t.delete(o);
    };
  }, next(o) {
    r && (e.push(o), s(o));
  }, throw(o) {
    r && (e.push(o), a(o), r = false, i = false, t.clear());
  }, return(o) {
    r && (e.push(o), n(o), r = false, i = true, t.clear());
  } };
}
function Rt(t) {
  let e = S(), r = t[Symbol.asyncIterator]();
  async function i() {
    try {
      let s = await r.next();
      s.done ? e.return(s.value) : (e.next(s.value), await i());
    } catch (s) {
      e.throw(s);
    }
  }
  return i().catch(() => {
  }), e;
}
function Et(t) {
  return () => {
    let e = [], r = [], i = 0, s = -1, a = false;
    function n() {
      for (let l = 0, u = r.length; l < u; l++)
        r[l].resolve({ done: true, value: void 0 });
    }
    t.on({ next(l) {
      let u = r.shift();
      u && u.resolve({ done: false, value: l }), e.push(l);
    }, throw(l) {
      let u = r.shift();
      u && u.reject(l), n(), s = e.length, e.push(l), a = true;
    }, return(l) {
      let u = r.shift();
      u && u.resolve({ done: true, value: l }), n(), s = e.length, e.push(l);
    } });
    function o() {
      let l = i++, u = e[l];
      if (l !== s)
        return { done: false, value: u };
      if (a)
        throw u;
      return { done: true, value: u };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (s === -1) {
        let l = i++;
        if (l >= e.length) {
          let u = U();
          return r.push(u), await u.promise;
        }
        return { done: false, value: e[l] };
      }
      return i > s ? { done: true, value: void 0 } : o();
    } };
  };
}
function At(t) {
  switch (t) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new St(t);
  }
}
function K$1(t, e) {
  switch (e) {
    case 3:
      return Object.freeze(t);
    case 1:
      return Object.preventExtensions(t);
    case 2:
      return Object.seal(t);
    default:
      return t;
  }
}
var Pt = class {
  constructor(e) {
    this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  deserializeReference(e) {
    return this.assignIndexedValue(e.i, $e(v$1(e.s)));
  }
  deserializeArray(e) {
    let r = e.l, i = this.assignIndexedValue(e.i, new Array(r)), s;
    for (let a = 0; a < r; a++)
      s = e.a[a], s && (i[a] = this.deserialize(s));
    return K$1(i, e.o), i;
  }
  deserializeProperties(e, r) {
    let i = e.s;
    if (i) {
      let s = e.k, a = e.v;
      for (let n = 0, o; n < i; n++)
        o = s[n], typeof o == "string" ? r[v$1(o)] = this.deserialize(a[n]) : r[this.deserialize(o)] = this.deserialize(a[n]);
    }
    return r;
  }
  deserializeObject(e) {
    let r = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
    return this.deserializeProperties(e.p, r), K$1(r, e.o), r;
  }
  deserializeDate(e) {
    return this.assignIndexedValue(e.i, new Date(e.s));
  }
  deserializeRegExp(e) {
    return this.assignIndexedValue(e.i, new RegExp(v$1(e.c), e.m));
  }
  deserializeSet(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), i = e.a;
    for (let s = 0, a = e.l; s < a; s++)
      r.add(this.deserialize(i[s]));
    return r;
  }
  deserializeMap(e) {
    let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), i = e.e.k, s = e.e.v;
    for (let a = 0, n = e.e.s; a < n; a++)
      r.set(this.deserialize(i[a]), this.deserialize(s[a]));
    return r;
  }
  deserializeArrayBuffer(e) {
    let r = new Uint8Array(e.s);
    return this.assignIndexedValue(e.i, r.buffer);
  }
  deserializeTypedArray(e) {
    let r = At(e.c), i = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new r(i, e.b, e.l));
  }
  deserializeDataView(e) {
    let r = this.deserialize(e.f);
    return this.assignIndexedValue(e.i, new DataView(r, e.b, e.l));
  }
  deserializeDictionary(e, r) {
    if (e.p) {
      let i = this.deserializeProperties(e.p, {});
      Object.assign(r, i);
    }
    return r;
  }
  deserializeAggregateError(e) {
    let r = this.assignIndexedValue(e.i, new AggregateError([], v$1(e.m)));
    return this.deserializeDictionary(e, r);
  }
  deserializeError(e) {
    let r = Be[e.s], i = this.assignIndexedValue(e.i, new r(v$1(e.m)));
    return this.deserializeDictionary(e, i);
  }
  deserializePromise(e) {
    let r = U(), i = this.assignIndexedValue(e.i, r), s = this.deserialize(e.f);
    return e.s ? r.resolve(s) : r.reject(s), i.promise;
  }
  deserializeBoxed(e) {
    return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
  }
  deserializePlugin(e) {
    let r = this.plugins;
    if (r) {
      let i = v$1(e.c);
      for (let s = 0, a = r.length; s < a; s++) {
        let n = r[s];
        if (n.tag === i)
          return this.assignIndexedValue(e.i, n.deserialize(e.s, this, { id: e.i }));
      }
    }
    throw new he$1(e.c);
  }
  deserializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, U()).promise;
  }
  deserializePromiseResolve(e) {
    let r = this.refs.get(e.i);
    f$1(r, new g("Promise")), r.resolve(this.deserialize(e.a[1]));
  }
  deserializePromiseReject(e) {
    let r = this.refs.get(e.i);
    f$1(r, new g("Promise")), r.reject(this.deserialize(e.a[1]));
  }
  deserializeIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return ht(r);
  }
  deserializeAsyncIteratorFactoryInstance(e) {
    this.deserialize(e.a[0]);
    let r = this.deserialize(e.a[1]);
    return Et(r);
  }
  deserializeStreamConstructor(e) {
    let r = this.assignIndexedValue(e.i, S()), i = e.a.length;
    if (i)
      for (let s = 0; s < i; s++)
        this.deserialize(e.a[s]);
    return r;
  }
  deserializeStreamNext(e) {
    let r = this.refs.get(e.i);
    f$1(r, new g("Stream")), r.next(this.deserialize(e.f));
  }
  deserializeStreamThrow(e) {
    let r = this.refs.get(e.i);
    f$1(r, new g("Stream")), r.throw(this.deserialize(e.f));
  }
  deserializeStreamReturn(e) {
    let r = this.refs.get(e.i);
    f$1(r, new g("Stream")), r.return(this.deserialize(e.f));
  }
  deserializeIteratorFactory(e) {
    this.deserialize(e.f);
  }
  deserializeAsyncIteratorFactory(e) {
    this.deserialize(e.a[1]);
  }
  deserialize(e) {
    try {
      switch (e.t) {
        case 2:
          return Ue[e.s];
        case 0:
          return e.s;
        case 1:
          return v$1(e.s);
        case 3:
          return BigInt(e.s);
        case 4:
          return this.refs.get(e.i);
        case 18:
          return this.deserializeReference(e);
        case 9:
          return this.deserializeArray(e);
        case 10:
        case 11:
          return this.deserializeObject(e);
        case 5:
          return this.deserializeDate(e);
        case 6:
          return this.deserializeRegExp(e);
        case 7:
          return this.deserializeSet(e);
        case 8:
          return this.deserializeMap(e);
        case 19:
          return this.deserializeArrayBuffer(e);
        case 16:
        case 15:
          return this.deserializeTypedArray(e);
        case 20:
          return this.deserializeDataView(e);
        case 14:
          return this.deserializeAggregateError(e);
        case 13:
          return this.deserializeError(e);
        case 12:
          return this.deserializePromise(e);
        case 17:
          return Te[e.s];
        case 21:
          return this.deserializeBoxed(e);
        case 25:
          return this.deserializePlugin(e);
        case 22:
          return this.deserializePromiseConstructor(e);
        case 23:
          return this.deserializePromiseResolve(e);
        case 24:
          return this.deserializePromiseReject(e);
        case 28:
          return this.deserializeIteratorFactoryInstance(e);
        case 30:
          return this.deserializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.deserializeStreamConstructor(e);
        case 32:
          return this.deserializeStreamNext(e);
        case 33:
          return this.deserializeStreamThrow(e);
        case 34:
          return this.deserializeStreamReturn(e);
        case 27:
          return this.deserializeIteratorFactory(e);
        case 29:
          return this.deserializeAsyncIteratorFactory(e);
        default:
          throw new de$1(e);
      }
    } catch (r) {
      throw new bt(r);
    }
  }
}, kt = class extends Pt {
  constructor(e) {
    super(e), this.mode = "vanilla", this.marked = new Set(e.markedRefs);
  }
  assignIndexedValue(e, r) {
    return this.marked.has(e) && this.refs.set(e, r), r;
  }
}, Ft = /^[$A-Z_][0-9A-Z_$]*$/i;
function H(t) {
  let e = t[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && Ft.test(t);
}
function b(t) {
  switch (t.t) {
    case 0:
      return t.s + "=" + t.v;
    case 2:
      return t.s + ".set(" + t.k + "," + t.v + ")";
    case 1:
      return t.s + ".add(" + t.v + ")";
    case 3:
      return t.s + ".delete(" + t.k + ")";
  }
}
function Ot(t) {
  let e = [], r = t[0];
  for (let i = 1, s = t.length, a, n = r; i < s; i++)
    a = t[i], a.t === 0 && a.v === n.v ? r = { t: 0, s: a.s, k: void 0, v: b(r) } : a.t === 2 && a.s === n.s ? r = { t: 2, s: b(r), k: a.k, v: a.v } : a.t === 1 && a.s === n.s ? r = { t: 1, s: b(r), k: void 0, v: a.v } : a.t === 3 && a.s === n.s ? r = { t: 3, s: b(r), k: a.k, v: void 0 } : (e.push(r), r = a), n = a;
  return e.push(r), e;
}
function Z$1(t) {
  if (t.length) {
    let e = "", r = Ot(t);
    for (let i = 0, s = r.length; i < s; i++)
      e += b(r[i]) + ",";
    return e;
  }
}
var Vt = "Object.create(null)", jt = "new Set", Dt = "new Map", $t = "Promise.resolve", Ct = "Promise.reject", Tt = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 }, Mt = class {
  constructor(t) {
    this.stack = [], this.flags = [], this.assignments = [], this.plugins = t.plugins, this.features = t.features, this.marked = new Set(t.markedRefs);
  }
  createFunction(t, e) {
    return this.features & 2 ? (t.length === 1 ? t[0] : "(" + t.join(",") + ")") + "=>" + e : "function(" + t.join(",") + "){return " + e + "}";
  }
  createEffectfulFunction(t, e) {
    return this.features & 2 ? (t.length === 1 ? t[0] : "(" + t.join(",") + ")") + "=>{" + e + "}" : "function(" + t.join(",") + "){" + e + "}";
  }
  markRef(t) {
    this.marked.add(t);
  }
  isMarked(t) {
    return this.marked.has(t);
  }
  pushObjectFlag(t, e) {
    t !== 0 && (this.markRef(e), this.flags.push({ type: t, value: this.getRefParam(e) }));
  }
  resolveFlags() {
    let t = "";
    for (let e = 0, r = this.flags, i = r.length; e < i; e++) {
      let s = r[e];
      t += Tt[s.type] + "(" + s.value + "),";
    }
    return t;
  }
  resolvePatches() {
    let t = Z$1(this.assignments), e = this.resolveFlags();
    return t ? e ? t + e : t : e;
  }
  createAssignment(t, e) {
    this.assignments.push({ t: 0, s: t, k: void 0, v: e });
  }
  createAddAssignment(t, e) {
    this.assignments.push({ t: 1, s: this.getRefParam(t), k: void 0, v: e });
  }
  createSetAssignment(t, e, r) {
    this.assignments.push({ t: 2, s: this.getRefParam(t), k: e, v: r });
  }
  createDeleteAssignment(t, e) {
    this.assignments.push({ t: 3, s: this.getRefParam(t), k: e, v: void 0 });
  }
  createArrayAssign(t, e, r) {
    this.createAssignment(this.getRefParam(t) + "[" + e + "]", r);
  }
  createObjectAssign(t, e, r) {
    this.createAssignment(this.getRefParam(t) + "." + e, r);
  }
  isIndexedValueInStack(t) {
    return t.t === 4 && this.stack.includes(t.i);
  }
  serializeReference(t) {
    return this.assignIndexedValue(t.i, y + '.get("' + t.s + '")');
  }
  serializeArrayItem(t, e, r) {
    return e ? this.isIndexedValueInStack(e) ? (this.markRef(t), this.createArrayAssign(t, r, this.getRefParam(e.i)), "") : this.serialize(e) : "";
  }
  serializeArray(t) {
    let e = t.i;
    if (t.l) {
      this.stack.push(e);
      let r = t.a, i = this.serializeArrayItem(e, r[0], 0), s = i === "";
      for (let a = 1, n = t.l, o; a < n; a++)
        o = this.serializeArrayItem(e, r[a], a), i += "," + o, s = o === "";
      return this.stack.pop(), this.pushObjectFlag(t.o, t.i), this.assignIndexedValue(e, "[" + i + (s ? ",]" : "]"));
    }
    return this.assignIndexedValue(e, "[]");
  }
  serializeProperty(t, e, r) {
    if (typeof e == "string") {
      let i = Number(e), s = i >= 0 && i.toString() === e || H(e);
      if (this.isIndexedValueInStack(r)) {
        let a = this.getRefParam(r.i);
        return this.markRef(t.i), s && i !== i ? this.createObjectAssign(t.i, e, a) : this.createArrayAssign(t.i, s ? e : '"' + e + '"', a), "";
      }
      return (s ? e : '"' + e + '"') + ":" + this.serialize(r);
    }
    return "[" + this.serialize(e) + "]:" + this.serialize(r);
  }
  serializeProperties(t, e) {
    let r = e.s;
    if (r) {
      let i = e.k, s = e.v;
      this.stack.push(t.i);
      let a = this.serializeProperty(t, i[0], s[0]);
      for (let n = 1, o = a; n < r; n++)
        o = this.serializeProperty(t, i[n], s[n]), a += (o && a && ",") + o;
      return this.stack.pop(), "{" + a + "}";
    }
    return "{}";
  }
  serializeObject(t) {
    return this.pushObjectFlag(t.o, t.i), this.assignIndexedValue(t.i, this.serializeProperties(t, t.p));
  }
  serializeWithObjectAssign(t, e, r) {
    let i = this.serializeProperties(t, e);
    return i !== "{}" ? "Object.assign(" + r + "," + i + ")" : r;
  }
  serializeStringKeyAssignment(t, e, r, i) {
    let s = this.serialize(i), a = Number(r), n = a >= 0 && a.toString() === r || H(r);
    if (this.isIndexedValueInStack(i))
      n && a !== a ? this.createObjectAssign(t.i, r, s) : this.createArrayAssign(t.i, n ? r : '"' + r + '"', s);
    else {
      let o = this.assignments;
      this.assignments = e, n && a !== a ? this.createObjectAssign(t.i, r, s) : this.createArrayAssign(t.i, n ? r : '"' + r + '"', s), this.assignments = o;
    }
  }
  serializeAssignment(t, e, r, i) {
    if (typeof r == "string")
      this.serializeStringKeyAssignment(t, e, r, i);
    else {
      let s = this.stack;
      this.stack = [];
      let a = this.serialize(i);
      this.stack = s;
      let n = this.assignments;
      this.assignments = e, this.createArrayAssign(t.i, this.serialize(r), a), this.assignments = n;
    }
  }
  serializeAssignments(t, e) {
    let r = e.s;
    if (r) {
      let i = [], s = e.k, a = e.v;
      this.stack.push(t.i);
      for (let n = 0; n < r; n++)
        this.serializeAssignment(t, i, s[n], a[n]);
      return this.stack.pop(), Z$1(i);
    }
  }
  serializeDictionary(t, e) {
    if (t.p)
      if (this.features & 8)
        e = this.serializeWithObjectAssign(t, t.p, e);
      else {
        this.markRef(t.i);
        let r = this.serializeAssignments(t, t.p);
        if (r)
          return "(" + this.assignIndexedValue(t.i, e) + "," + r + this.getRefParam(t.i) + ")";
      }
    return this.assignIndexedValue(t.i, e);
  }
  serializeNullConstructor(t) {
    return this.pushObjectFlag(t.o, t.i), this.serializeDictionary(t, Vt);
  }
  serializeDate(t) {
    return this.assignIndexedValue(t.i, 'new Date("' + t.s + '")');
  }
  serializeRegExp(t) {
    return this.assignIndexedValue(t.i, "/" + t.c + "/" + t.m);
  }
  serializeSetItem(t, e) {
    return this.isIndexedValueInStack(e) ? (this.markRef(t), this.createAddAssignment(t, this.getRefParam(e.i)), "") : this.serialize(e);
  }
  serializeSet(t) {
    let e = jt, r = t.l, i = t.i;
    if (r) {
      let s = t.a;
      this.stack.push(i);
      let a = this.serializeSetItem(i, s[0]);
      for (let n = 1, o = a; n < r; n++)
        o = this.serializeSetItem(i, s[n]), a += (o && a && ",") + o;
      this.stack.pop(), a && (e += "([" + a + "])");
    }
    return this.assignIndexedValue(i, e);
  }
  serializeMapEntry(t, e, r, i) {
    if (this.isIndexedValueInStack(e)) {
      let s = this.getRefParam(e.i);
      if (this.markRef(t), this.isIndexedValueInStack(r)) {
        let n = this.getRefParam(r.i);
        return this.createSetAssignment(t, s, n), "";
      }
      if (r.t !== 4 && r.i != null && this.isMarked(r.i)) {
        let n = "(" + this.serialize(r) + ",[" + i + "," + i + "])";
        return this.createSetAssignment(t, s, this.getRefParam(r.i)), this.createDeleteAssignment(t, i), n;
      }
      let a = this.stack;
      return this.stack = [], this.createSetAssignment(t, s, this.serialize(r)), this.stack = a, "";
    }
    if (this.isIndexedValueInStack(r)) {
      let s = this.getRefParam(r.i);
      if (this.markRef(t), e.t !== 4 && e.i != null && this.isMarked(e.i)) {
        let n = "(" + this.serialize(e) + ",[" + i + "," + i + "])";
        return this.createSetAssignment(t, this.getRefParam(e.i), s), this.createDeleteAssignment(t, i), n;
      }
      let a = this.stack;
      return this.stack = [], this.createSetAssignment(t, this.serialize(e), s), this.stack = a, "";
    }
    return "[" + this.serialize(e) + "," + this.serialize(r) + "]";
  }
  serializeMap(t) {
    let e = Dt, r = t.e.s, i = t.i, s = t.f, a = this.getRefParam(s.i);
    if (r) {
      let n = t.e.k, o = t.e.v;
      this.stack.push(i);
      let l = this.serializeMapEntry(i, n[0], o[0], a);
      for (let u = 1, h = l; u < r; u++)
        h = this.serializeMapEntry(i, n[u], o[u], a), l += (h && l && ",") + h;
      this.stack.pop(), l && (e += "([" + l + "])");
    }
    return s.t === 26 && (this.markRef(s.i), e = "(" + this.serialize(s) + "," + e + ")"), this.assignIndexedValue(i, e);
  }
  serializeArrayBuffer(t) {
    let e = "new Uint8Array(", r = t.s, i = r.length;
    if (i) {
      e += "[" + r[0];
      for (let s = 1; s < i; s++)
        e += "," + r[s];
      e += "]";
    }
    return this.assignIndexedValue(t.i, e + ").buffer");
  }
  serializeTypedArray(t) {
    return this.assignIndexedValue(t.i, "new " + t.c + "(" + this.serialize(t.f) + "," + t.b + "," + t.l + ")");
  }
  serializeDataView(t) {
    return this.assignIndexedValue(t.i, "new DataView(" + this.serialize(t.f) + "," + t.b + "," + t.l + ")");
  }
  serializeAggregateError(t) {
    let e = t.i;
    this.stack.push(e);
    let r = this.serializeDictionary(t, 'new AggregateError([],"' + t.m + '")');
    return this.stack.pop(), r;
  }
  serializeError(t) {
    return this.serializeDictionary(t, "new " + se$1[t.s] + '("' + t.m + '")');
  }
  serializePromise(t) {
    let e, r = t.f, i = t.i, s = t.s ? $t : Ct;
    if (this.isIndexedValueInStack(r)) {
      let a = this.getRefParam(r.i);
      e = s + (t.s ? "().then(" + this.createFunction([], a) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + a) + ")");
    } else {
      this.stack.push(i);
      let a = this.serialize(r);
      this.stack.pop(), e = s + "(" + a + ")";
    }
    return this.assignIndexedValue(i, e);
  }
  serializeWellKnownSymbol(t) {
    return this.assignIndexedValue(t.i, Ce$1[t.s]);
  }
  serializeBoxed(t) {
    return this.assignIndexedValue(t.i, "Object(" + this.serialize(t.f) + ")");
  }
  serializePlugin(t) {
    let e = this.plugins;
    if (e)
      for (let r = 0, i = e.length; r < i; r++) {
        let s = e[r];
        if (s.tag === t.c)
          return this.assignIndexedValue(t.i, s.serialize(t.s, this, { id: t.i }));
      }
    throw new he$1(t.c);
  }
  getConstructor(t) {
    let e = this.serialize(t);
    return e === this.getRefParam(t.i) ? e : "(" + e + ")";
  }
  serializePromiseConstructor(t) {
    return this.assignIndexedValue(t.i, this.getConstructor(t.f) + "()");
  }
  serializePromiseResolve(t) {
    return this.getConstructor(t.a[0]) + "(" + this.getRefParam(t.i) + "," + this.serialize(t.a[1]) + ")";
  }
  serializePromiseReject(t) {
    return this.getConstructor(t.a[0]) + "(" + this.getRefParam(t.i) + "," + this.serialize(t.a[1]) + ")";
  }
  serializeSpecialReferenceValue(t) {
    switch (t) {
      case 0:
        return "[]";
      case 1:
        return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
      case 2:
        return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
      case 3:
        return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
      case 4:
        return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],x===z-1?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      default:
        return "";
    }
  }
  serializeSpecialReference(t) {
    return this.assignIndexedValue(t.i, this.serializeSpecialReferenceValue(t.s));
  }
  serializeIteratorFactory(t) {
    let e = "", r = false;
    return t.f.t !== 4 && (this.markRef(t.f.i), e = "(" + this.serialize(t.f) + ",", r = true), e += this.assignIndexedValue(t.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(t.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), r && (e += ")"), e;
  }
  serializeIteratorFactoryInstance(t) {
    return this.getConstructor(t.a[0]) + "(" + this.serialize(t.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(t) {
    let e = t.a[0], r = t.a[1], i = "";
    e.t !== 4 && (this.markRef(e.i), i += "(" + this.serialize(e)), r.t !== 4 && (this.markRef(r.i), i += (i ? "," : "(") + this.serialize(r)), i && (i += ",");
    let s = this.assignIndexedValue(t.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(r.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(e.i) + "()),t):{done:!0,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return i ? i + s + ")" : s;
  }
  serializeAsyncIteratorFactoryInstance(t) {
    return this.getConstructor(t.a[0]) + "(" + this.serialize(t.a[1]) + ")";
  }
  serializeStreamConstructor(t) {
    let e = this.assignIndexedValue(t.i, this.getConstructor(t.f) + "()"), r = t.a.length;
    if (r) {
      let i = this.serialize(t.a[0]);
      for (let s = 1; s < r; s++)
        i += "," + this.serialize(t.a[s]);
      return "(" + e + "," + i + "," + this.getRefParam(t.i) + ")";
    }
    return e;
  }
  serializeStreamNext(t) {
    return this.getRefParam(t.i) + ".next(" + this.serialize(t.f) + ")";
  }
  serializeStreamThrow(t) {
    return this.getRefParam(t.i) + ".throw(" + this.serialize(t.f) + ")";
  }
  serializeStreamReturn(t) {
    return this.getRefParam(t.i) + ".return(" + this.serialize(t.f) + ")";
  }
  serialize(t) {
    try {
      switch (t.t) {
        case 2:
          return Me[t.s];
        case 0:
          return "" + t.s;
        case 1:
          return '"' + t.s + '"';
        case 3:
          return t.s + "n";
        case 4:
          return this.getRefParam(t.i);
        case 18:
          return this.serializeReference(t);
        case 9:
          return this.serializeArray(t);
        case 10:
          return this.serializeObject(t);
        case 11:
          return this.serializeNullConstructor(t);
        case 5:
          return this.serializeDate(t);
        case 6:
          return this.serializeRegExp(t);
        case 7:
          return this.serializeSet(t);
        case 8:
          return this.serializeMap(t);
        case 19:
          return this.serializeArrayBuffer(t);
        case 16:
        case 15:
          return this.serializeTypedArray(t);
        case 20:
          return this.serializeDataView(t);
        case 14:
          return this.serializeAggregateError(t);
        case 13:
          return this.serializeError(t);
        case 12:
          return this.serializePromise(t);
        case 17:
          return this.serializeWellKnownSymbol(t);
        case 21:
          return this.serializeBoxed(t);
        case 22:
          return this.serializePromiseConstructor(t);
        case 23:
          return this.serializePromiseResolve(t);
        case 24:
          return this.serializePromiseReject(t);
        case 25:
          return this.serializePlugin(t);
        case 26:
          return this.serializeSpecialReference(t);
        case 27:
          return this.serializeIteratorFactory(t);
        case 28:
          return this.serializeIteratorFactoryInstance(t);
        case 29:
          return this.serializeAsyncIteratorFactory(t);
        case 30:
          return this.serializeAsyncIteratorFactoryInstance(t);
        case 31:
          return this.serializeStreamConstructor(t);
        case 32:
          return this.serializeStreamNext(t);
        case 33:
          return this.serializeStreamThrow(t);
        case 34:
          return this.serializeStreamReturn(t);
        default:
          throw new de$1(t);
      }
    } catch (e) {
      throw new yt(e);
    }
  }
}, Ut = class extends xt {
  parseItems(e) {
    let r = [];
    for (let i = 0, s = e.length; i < s; i++)
      i in e && (r[i] = this.parse(e[i]));
    return r;
  }
  parseArray(e, r) {
    return tt(e, r, this.parseItems(r));
  }
  parseProperties(e) {
    let r = Object.entries(e), i = [], s = [];
    for (let n = 0, o = r.length; n < o; n++)
      i.push(d(r[n][0])), s.push(this.parse(r[n][1]));
    let a = Symbol.iterator;
    return a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(oe$1(this.parseIteratorFactory(), this.parse(ce$1(e))))), a = Symbol.asyncIterator, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(le$1(this.parseAsyncIteratorFactory(), this.parse(S())))), a = Symbol.toStringTag, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(M(e[a]))), a = Symbol.isConcatSpreadable, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(e[a] ? C : T)), { k: i, v: s, s: i.length };
  }
  parsePlainObject(e, r, i) {
    return this.createObjectNode(e, r, i, this.parseProperties(r));
  }
  parseBoxed(e, r) {
    return rt(e, this.parse(r.valueOf()));
  }
  parseTypedArray(e, r) {
    return it(e, r, this.parse(r.buffer));
  }
  parseBigIntTypedArray(e, r) {
    return st(e, r, this.parse(r.buffer));
  }
  parseDataView(e, r) {
    return at(e, r, this.parse(r.buffer));
  }
  parseError(e, r) {
    let i = N(r, this.features);
    return nt(e, r, i ? this.parseProperties(i) : void 0);
  }
  parseAggregateError(e, r) {
    let i = N(r, this.features);
    return ot(e, r, i ? this.parseProperties(i) : void 0);
  }
  parseMap(e, r) {
    let i = [], s = [];
    for (let [a, n] of r.entries())
      i.push(this.parse(a)), s.push(this.parse(n));
    return this.createMapNode(e, i, s, r.size);
  }
  parseSet(e, r) {
    let i = [];
    for (let s of r.keys())
      i.push(this.parse(s));
    return lt(e, r.size, i);
  }
  parsePlugin(e, r) {
    let i = this.plugins;
    if (i)
      for (let s = 0, a = i.length; s < a; s++) {
        let n = i[s];
        if (n.parse.sync && n.test(r))
          return ne$1(e, n.tag, n.parse.sync(r, this, { id: e }));
      }
  }
  parseStream(e, r) {
    return ue$1(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, r) {
    return this.createPromiseConstructorNode(e);
  }
  parseObject(e, r) {
    if (Array.isArray(r))
      return this.parseArray(e, r);
    if (It(r))
      return this.parseStream(e, r);
    let i = this.parsePlugin(e, r);
    if (i)
      return i;
    let s = r.constructor;
    switch (s) {
      case Object:
        return this.parsePlainObject(e, r, false);
      case void 0:
        return this.parsePlainObject(e, r, true);
      case Date:
        return Qe(e, r);
      case RegExp:
        return Ye(e, r);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, r);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, r);
      case ArrayBuffer:
        return Xe(e, r);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, r);
      case DataView:
        return this.parseDataView(e, r);
      case Map:
        return this.parseMap(e, r);
      case Set:
        return this.parseSet(e, r);
    }
    if (s === Promise || r instanceof Promise)
      return this.parsePromise(e, r);
    let a = this.features;
    if (a & 16)
      switch (s) {
        case BigInt64Array:
        case BigUint64Array:
          return this.parseBigIntTypedArray(e, r);
      }
    if (a & 1 && typeof AggregateError < "u" && (s === AggregateError || r instanceof AggregateError))
      return this.parseAggregateError(e, r);
    if (r instanceof Error)
      return this.parseError(e, r);
    if (Symbol.iterator in r || Symbol.asyncIterator in r)
      return this.parsePlainObject(e, r, !!s);
    throw new A(r);
  }
  parse(e) {
    try {
      switch (typeof e) {
        case "boolean":
          return e ? C : T;
        case "undefined":
          return _e;
        case "string":
          return M(e);
        case "number":
          return Ze(e);
        case "bigint":
          return Ge(e);
        case "object": {
          if (e) {
            let r = this.getReference(e);
            return r.type === 0 ? this.parseObject(r.value, e) : r.value;
          }
          return qe;
        }
        case "symbol":
          return this.parseWellKnownSymbol(e);
        case "function":
          return this.parseFunction(e);
        default:
          throw new A(e);
      }
    } catch (r) {
      throw new gt(r);
    }
  }
};
function Bt(t, e = {}) {
  let r = re$1(e.plugins);
  return new kt({ plugins: r, markedRefs: t.m }).deserialize(t.t);
}
var _t = class extends Mt {
  constructor(e) {
    super(e), this.mode = "cross", this.scopeId = e.scopeId;
  }
  getRefParam(e) {
    return R$1 + "[" + e + "]";
  }
  assignIndexedValue(e, r) {
    return this.getRefParam(e) + "=" + r;
  }
  serializeTop(e) {
    let r = this.serialize(e), i = e.i;
    if (i == null)
      return r;
    let s = this.resolvePatches(), a = this.getRefParam(i), n = this.scopeId == null ? "" : R$1, o = s ? r + "," + s + a : r;
    if (n === "")
      return s ? "(" + o + ")" : o;
    let l = this.scopeId == null ? "()" : "(" + R$1 + '["' + d(this.scopeId) + '"])';
    return "(" + this.createFunction([n], o) + ")" + l;
  }
}, qt = class extends Ut {
  constructor(e) {
    super(e), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = e.onParse, this.onErrorCallback = e.onError, this.onDoneCallback = e.onDone;
  }
  onParseInternal(e, r) {
    try {
      this.onParseCallback(e, r);
    } catch (i) {
      this.onError(i);
    }
  }
  flush() {
    for (let e = 0, r = this.buffer.length; e < r; e++)
      this.onParseInternal(this.buffer[e], false);
  }
  onParse(e) {
    this.initial ? this.buffer.push(e) : this.onParseInternal(e, false);
  }
  onError(e) {
    if (this.onErrorCallback)
      this.onErrorCallback(e);
    else
      throw e;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(e) {
    let r = Object.entries(e), i = [], s = [];
    for (let n = 0, o = r.length; n < o; n++)
      i.push(d(r[n][0])), s.push(this.parse(r[n][1]));
    let a = Symbol.iterator;
    return a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(oe$1(this.parseIteratorFactory(), this.parse(ce$1(e))))), a = Symbol.asyncIterator, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(le$1(this.parseAsyncIteratorFactory(), this.parse(Rt(e))))), a = Symbol.toStringTag, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(M(e[a]))), a = Symbol.isConcatSpreadable, a in e && (i.push(this.parseWellKnownSymbol(a)), s.push(e[a] ? C : T)), { k: i, v: s, s: i.length };
  }
  parsePromise(e, r) {
    return r.then((i) => {
      let s = this.parseWithError(i);
      s && this.onParse({ t: 23, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), s], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
    }, (i) => {
      if (this.alive) {
        let s = this.parseWithError(i);
        s && this.onParse({ t: 24, i: e, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), s], f: void 0, b: void 0, o: void 0 });
      }
      this.popPendingState();
    }), this.pushPendingState(), this.createPromiseConstructorNode(e);
  }
  parsePlugin(e, r) {
    let i = this.plugins;
    if (i)
      for (let s = 0, a = i.length; s < a; s++) {
        let n = i[s];
        if (n.parse.stream && n.test(r))
          return ne$1(e, n.tag, n.parse.stream(r, this, { id: e }));
      }
  }
  parseStream(e, r) {
    let i = ue$1(e, this.parseSpecialReference(4), []);
    return this.pushPendingState(), r.on({ next: (s) => {
      if (this.alive) {
        let a = this.parseWithError(s);
        a && this.onParse(ut(e, a));
      }
    }, throw: (s) => {
      if (this.alive) {
        let a = this.parseWithError(s);
        a && this.onParse(ct(e, a));
      }
      this.popPendingState();
    }, return: (s) => {
      if (this.alive) {
        let a = this.parseWithError(s);
        a && this.onParse(dt(e, a));
      }
      this.popPendingState();
    } }), i;
  }
  parseWithError(e) {
    try {
      return this.parse(e);
    } catch (r) {
      this.onError(r);
      return;
    }
  }
  start(e) {
    let r = this.parseWithError(e);
    r && (this.onParseInternal(r, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
}, Wt = class extends qt {
  constructor() {
    super(...arguments), this.mode = "cross";
  }
};
function Nt(t, e) {
  let r = re$1(e.plugins), i = new Wt({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(s, a) {
    let n = new _t({ plugins: r, features: i.features, scopeId: e.scopeId, markedRefs: i.marked }), o;
    try {
      o = n.serializeTop(s);
    } catch (l) {
      e.onError && e.onError(l);
      return;
    }
    e.onSerialize(o, a);
  }, onError: e.onError, onDone: e.onDone });
  return i.start(t), () => {
    i.destroy();
  };
}
function F(t) {
  return { detail: t.detail, bubbles: t.bubbles, cancelable: t.cancelable, composed: t.composed };
}
var Lt = { tag: "seroval-plugins/web/CustomEvent", test(t) {
  return typeof CustomEvent > "u" ? false : t instanceof CustomEvent;
}, parse: { sync(t, e) {
  return { type: e.parse(t.type), options: e.parse(F(t)) };
}, async async(t, e) {
  return { type: await e.parse(t.type), options: await e.parse(F(t)) };
}, stream(t, e) {
  return { type: e.parse(t.type), options: e.parse(F(t)) };
} }, serialize(t, e) {
  return "new CustomEvent(" + e.serialize(t.type) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new CustomEvent(e.deserialize(t.type), e.deserialize(t.options));
} }, fe$1 = Lt, Kt = { tag: "seroval-plugins/web/DOMException", test(t) {
  return typeof DOMException > "u" ? false : t instanceof DOMException;
}, parse: { sync(t, e) {
  return { name: e.parse(t.name), message: e.parse(t.message) };
}, async async(t, e) {
  return { name: await e.parse(t.name), message: await e.parse(t.message) };
}, stream(t, e) {
  return { name: e.parse(t.name), message: e.parse(t.message) };
} }, serialize(t, e) {
  return "new DOMException(" + e.serialize(t.message) + "," + e.serialize(t.name) + ")";
}, deserialize(t, e) {
  return new DOMException(e.deserialize(t.message), e.deserialize(t.name));
} }, pe$1 = Kt;
function O(t) {
  return { bubbles: t.bubbles, cancelable: t.cancelable, composed: t.composed };
}
var Ht = { tag: "seroval-plugins/web/Event", test(t) {
  return typeof Event > "u" ? false : t instanceof Event;
}, parse: { sync(t, e) {
  return { type: e.parse(t.type), options: e.parse(O(t)) };
}, async async(t, e) {
  return { type: await e.parse(t.type), options: await e.parse(O(t)) };
}, stream(t, e) {
  return { type: e.parse(t.type), options: e.parse(O(t)) };
} }, serialize(t, e) {
  return "new Event(" + e.serialize(t.type) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Event(e.deserialize(t.type), e.deserialize(t.options));
} }, ve = Ht, Zt = { tag: "seroval-plugins/web/File", test(t) {
  return typeof File > "u" ? false : t instanceof File;
}, parse: { async async(t, e) {
  return { name: await e.parse(t.name), options: await e.parse({ type: t.type, lastModified: t.lastModified }), buffer: await e.parse(await t.arrayBuffer()) };
} }, serialize(t, e) {
  return "new File([" + e.serialize(t.buffer) + "]," + e.serialize(t.name) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new File([e.deserialize(t.buffer)], e.deserialize(t.name), e.deserialize(t.options));
} }, Gt = Zt;
function V(t) {
  let e = [];
  return t.forEach((r, i) => {
    e.push([i, r]);
  }), e;
}
var z$1 = {}, Jt = { tag: "seroval-plugins/web/FormDataFactory", test(t) {
  return t === z$1;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(t, e) {
  return e.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return z$1;
} }, Qt = { tag: "seroval-plugins/web/FormData", extends: [Gt, Jt], test(t) {
  return typeof FormData > "u" ? false : t instanceof FormData;
}, parse: { sync(t, e) {
  return { factory: e.parse(z$1), entries: e.parse(V(t)) };
}, async async(t, e) {
  return { factory: await e.parse(z$1), entries: await e.parse(V(t)) };
}, stream(t, e) {
  return { factory: e.parse(z$1), entries: e.parse(V(t)) };
} }, serialize(t, e) {
  return "(" + e.serialize(t.factory) + ")(" + e.serialize(t.entries) + ")";
}, deserialize(t, e) {
  let r = new FormData(), i = e.deserialize(t.entries);
  for (let s = 0, a = i.length; s < a; s++) {
    let n = i[s];
    r.append(n[0], n[1]);
  }
  return r;
} }, me$1 = Qt;
function j(t) {
  let e = [];
  return t.forEach((r, i) => {
    e.push([i, r]);
  }), e;
}
var Yt = { tag: "seroval-plugins/web/Headers", test(t) {
  return typeof Headers > "u" ? false : t instanceof Headers;
}, parse: { sync(t, e) {
  return e.parse(j(t));
}, async async(t, e) {
  return await e.parse(j(t));
}, stream(t, e) {
  return e.parse(j(t));
} }, serialize(t, e) {
  return "new Headers(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new Headers(e.deserialize(t));
} }, P = Yt, w = {}, Xt = { tag: "seroval-plugins/web/ReadableStreamFactory", test(t) {
  return t === w;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(t, e) {
  return e.createFunction(["d"], "new ReadableStream({start:" + e.createEffectfulFunction(["c"], "d.on({next:" + e.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + e.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + e.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return w;
} };
function G$1(t) {
  let e = S(), r = t.getReader();
  async function i() {
    try {
      let s = await r.read();
      s.done ? e.return(s.value) : (e.next(s.value), await i());
    } catch (s) {
      e.throw(s);
    }
  }
  return i().catch(() => {
  }), e;
}
var er = { tag: "seroval/plugins/web/ReadableStream", extends: [Xt], test(t) {
  return typeof ReadableStream > "u" ? false : t instanceof ReadableStream;
}, parse: { sync(t, e) {
  return { factory: e.parse(w), stream: e.parse(S()) };
}, async async(t, e) {
  return { factory: await e.parse(w), stream: await e.parse(G$1(t)) };
}, stream(t, e) {
  return { factory: e.parse(w), stream: e.parse(G$1(t)) };
} }, serialize(t, e) {
  return "(" + e.serialize(t.factory) + ")(" + e.serialize(t.stream) + ")";
}, deserialize(t, e) {
  let r = e.deserialize(t.stream);
  return new ReadableStream({ start(i) {
    r.on({ next(s) {
      i.enqueue(s);
    }, throw(s) {
      i.error(s);
    }, return() {
      i.close();
    } });
  } });
} }, k = er;
function J(t, e) {
  return { body: e, cache: t.cache, credentials: t.credentials, headers: t.headers, integrity: t.integrity, keepalive: t.keepalive, method: t.method, mode: t.mode, redirect: t.redirect, referrer: t.referrer, referrerPolicy: t.referrerPolicy };
}
var tr = { tag: "seroval-plugins/web/Request", extends: [k, P], test(t) {
  return typeof Request > "u" ? false : t instanceof Request;
}, parse: { async async(t, e) {
  return { url: await e.parse(t.url), options: await e.parse(J(t, t.body ? await t.clone().arrayBuffer() : null)) };
}, stream(t, e) {
  return { url: e.parse(t.url), options: e.parse(J(t, t.clone().body)) };
} }, serialize(t, e) {
  return "new Request(" + e.serialize(t.url) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Request(e.deserialize(t.url), e.deserialize(t.options));
} }, ge$1 = tr;
function Q$1(t) {
  return { headers: t.headers, status: t.status, statusText: t.statusText };
}
var rr = { tag: "seroval-plugins/web/Response", extends: [k, P], test(t) {
  return typeof Response > "u" ? false : t instanceof Response;
}, parse: { async async(t, e) {
  return { body: await e.parse(t.body ? await t.clone().arrayBuffer() : null), options: await e.parse(Q$1(t)) };
}, stream(t, e) {
  return { body: e.parse(t.clone().body), options: e.parse(Q$1(t)) };
} }, serialize(t, e) {
  return "new Response(" + e.serialize(t.body) + "," + e.serialize(t.options) + ")";
}, deserialize(t, e) {
  return new Response(e.deserialize(t.body), e.deserialize(t.options));
} }, ye$1 = rr, ir = { tag: "seroval-plugins/web/URLSearchParams", test(t) {
  return typeof URLSearchParams > "u" ? false : t instanceof URLSearchParams;
}, parse: { sync(t, e) {
  return e.parse(t.toString());
}, async async(t, e) {
  return await e.parse(t.toString());
}, stream(t, e) {
  return e.parse(t.toString());
} }, serialize(t, e) {
  return "new URLSearchParams(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new URLSearchParams(e.deserialize(t));
} }, be$1 = ir, sr = { tag: "seroval-plugins/web/URL", test(t) {
  return typeof URL > "u" ? false : t instanceof URL;
}, parse: { sync(t, e) {
  return e.parse(t.href);
}, async async(t, e) {
  return await e.parse(t.href);
}, stream(t, e) {
  return e.parse(t.href);
} }, serialize(t, e) {
  return "new URL(" + e.serialize(t) + ")";
}, deserialize(t, e) {
  return new URL(e.deserialize(t));
} }, ze = sr;
const D = "Invariant Violation", { setPrototypeOf: ar = function(t, e) {
  return t.__proto__ = e, t;
} } = Object;
class W extends Error {
  constructor(e = D) {
    super(typeof e == "number" ? `${D}: ${e} (see https://github.com/apollographql/invariant-packages)` : e);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", D);
    ar(this, W.prototype);
  }
}
function Y$1(t, e) {
  if (!t)
    throw new W(e);
}
function nr(t) {
  let e;
  const r = getRequestURL(t), i = { duplex: "half", method: t.method, headers: t.headers };
  return t.node.req.body instanceof ArrayBuffer ? new Request(r, { ...i, body: t.node.req.body }) : new Request(r, { ...i, get body() {
    return e || (e = getRequestWebStream(t), e);
  } });
}
function or(t) {
  var _a;
  return (_a = t.web) != null ? _a : t.web = { request: nr(t), url: getRequestURL(t) }, t.web.request;
}
const we = Symbol("h3Event"), E$1 = Symbol("fetchEvent"), lr = { get(t, e) {
  var _a;
  return e === E$1 ? t : (_a = t[e]) != null ? _a : t[we][e];
} };
function ur(t) {
  const e = or(t);
  return new Proxy({ request: e, clientAddress: getRequestIP(t), locals: {}, [we]: t }, lr);
}
function cr(t) {
  if (!t[E$1]) {
    const e = ur(t);
    t[E$1] = e;
  }
  return t[E$1];
}
function dr(t) {
  const r = t.length.toString(16), i = "00000000".substring(0, 8 - r.length) + r;
  return new TextEncoder().encode(`;0x${i};${t}`);
}
function hr(t, e) {
  return new ReadableStream({ start(r) {
    Nt(e, { scopeId: t, plugins: [fe$1, pe$1, ve, me$1, P, k, ge$1, ye$1, be$1, ze], onSerialize(i, s) {
      r.enqueue(dr(s ? `(${Ve(t)},${i})` : i));
    }, onDone() {
      r.close();
    }, onError(i) {
      r.error(i);
    } });
  } });
}
async function fr(t) {
  Y$1(t.method === "POST", `Invalid method ${t.method}. Expected POST.`);
  const e = cr(t), r = e.request, i = r.headers.get("x-server-id"), s = r.headers.get("x-server-instance"), a = new URL(r.url);
  let n, o;
  if (i)
    Y$1(typeof i == "string", "Invalid server function"), [n, o] = i.split("#");
  else if (n = a.searchParams.get("id"), o = a.searchParams.get("name"), !n || !o)
    throw new Error("Invalid request");
  const l = (await globalThis.MANIFEST["server-fns"].chunks[n].import())[o];
  let u = [];
  if (!s) {
    const c = a.searchParams.get("args");
    c && JSON.parse(c).forEach((x) => u.push(x));
  }
  const h = r.headers.get("content-type");
  h.startsWith("multipart/form-data") || h.startsWith("application/x-www-form-urlencoded") ? u.push(await r.formData()) : u = Bt(await r.json(), { plugins: [fe$1, pe$1, ve, me$1, P, k, ge$1, ye$1, be$1, ze] });
  try {
    const c = await provideRequestEvent(e, () => (sharedConfig.context = { event: e }, l(...u)));
    if (!s) {
      const x = c instanceof Error, Se = new URL(r.headers.get("referer"));
      return new Response(null, { status: 302, headers: { Location: Se.toString(), ...c ? { "Set-Cookie": `flash=${JSON.stringify({ url: a.pathname + encodeURIComponent(a.search), result: x ? c.message : c, error: x, input: [...u.slice(0, -1), [...u[u.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
    }
    return typeof c == "string" ? new Response(c) : (setHeader(t, "content-type", "text/javascript"), hr(s, c));
  } catch (c) {
    return c instanceof Response && c.status === 302 ? new Response(null, { status: s ? 204 : 302, headers: { Location: c.headers.get("Location") } }) : c;
  }
}
const kr = eventHandler(fr);

function z(e) {
  let n;
  const t = getRequestURL(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(t, { ...s, body: e.node.req.body }) : new Request(t, { ...s, get body() {
    return n || (n = getRequestWebStream(e), n);
  } });
}
function K(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: z(e), url: getRequestURL(e) }, e.web.request;
}
const v = Symbol("h3Event"), f = Symbol("fetchEvent"), Y = { get(e, n) {
  var _a;
  return n === f ? e : (_a = e[n]) != null ? _a : e[v][n];
} };
function G(e) {
  const n = K(e);
  return new Proxy({ request: n, clientAddress: getRequestIP(e), locals: {}, [v]: e }, Y);
}
function Q(e) {
  if (!e[f]) {
    const n = G(e);
    e[f] = n;
  }
  return e[f];
}
var X = " ";
const Z = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(X), true) : null };
function x(e) {
  let { tag: n, attrs: { key: t, ...s } = { key: void 0 }, children: r } = e;
  return Z[n]({ attrs: s, key: t, children: r });
}
function ee(e, n, t, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const i = (await e.import())[s], a = (await ((_a = n.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...a.map((u) => x(u)), createComponent$1(i, c)] };
    }
  });
}
const E = [{ type: "page", $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => import('./chunks/build/about.mjs'), import: () => import('./chunks/build/about.mjs') }, path: "/about", filePath: "C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/src/routes/about.tsx" }, { type: "page", $component: { src: "src/routes/getting-started.tsx?pick=default&pick=$css", build: () => import('./chunks/build/getting-started.mjs'), import: () => import('./chunks/build/getting-started.mjs') }, path: "/getting-started", filePath: "C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/src/routes/getting-started.tsx" }, { type: "page", $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('./chunks/build/index.mjs'), import: () => import('./chunks/build/index.mjs') }, path: "/", filePath: "C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/src/routes/index.tsx" }, { type: "page", $component: { src: "src/routes/styling.tsx?pick=default&pick=$css", build: () => import('./chunks/build/styling.mjs'), import: () => import('./chunks/build/styling.mjs') }, path: "/styling", filePath: "C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/src/routes/styling.tsx" }, { type: "page", $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('./chunks/build/_...404_.mjs'), import: () => import('./chunks/build/_...404_.mjs') }, path: "/*404", filePath: "C:/Users/rikeu/Documents/JSProjects/sonner-main/sonner-main-solid/website/src/routes/[...404].tsx" }], te = re(E.filter((e) => e.type === "page")), ne = oe(E.filter((e) => e.type === "api"));
function se(e, n) {
  const t = e.replace("", "").split("/").filter(Boolean);
  e:
    for (const s of ne) {
      const r = s.matchSegments;
      if (t.length < r.length || !s.wildcard && t.length > r.length)
        continue;
      for (let a = 0; a < r.length; a++) {
        const l = r[a];
        if (l && t[a] !== l)
          continue e;
      }
      const i = s[`$${n}`];
      if (i === "skip" || i === void 0)
        return;
      const o = {};
      for (const { type: a, name: l, index: c } of s.params)
        a === ":" ? o[l] = t[c] : o[l] = t.slice(c).join("/");
      return { handler: i, params: o };
    }
}
function re(e) {
  function n(t, s, r, i) {
    const o = Object.values(t).find((a) => r.startsWith(a.id + "/"));
    return o ? (n(o.children || (o.children = []), s, r.slice(o.id.length)), t) : (t.push({ ...s, id: r, path: r.replace(/\/\([^)/]+\)/g, "") }), t);
  }
  return e.sort((t, s) => t.path.length - s.path.length).reduce((t, s) => n(t, s, s.path, s.path), []);
}
function oe(e) {
  return e.flatMap((n) => q(n.path).map((s) => ({ ...n, path: s }))).map(ie).sort((n, t) => t.score - n.score);
}
function q(e) {
  let n = /(\/?\:[^\/]+)\?/.exec(e);
  if (!n)
    return [e];
  let t = e.slice(0, n.index), s = e.slice(n.index + n[0].length);
  const r = [t, t += n[1]];
  for (; n = /^(\/\:[^\/]+)\?/.exec(s); )
    r.push(t += n[1]), s = s.slice(n[0].length);
  return q(s).reduce((i, o) => [...i, ...r.map((a) => a + o)], []);
}
function ie(e) {
  const n = e.path.split("/").filter(Boolean), t = [], s = [];
  let r = 0, i = false;
  for (const [o, a] of n.entries())
    if (a[0] === ":") {
      const l = a.slice(1);
      r += 3, t.push({ type: ":", name: l, index: o }), s.push(null);
    } else
      a[0] === "*" ? (r -= 1, t.push({ type: "*", name: a.slice(1), index: o }), i = true) : (r += 4, a.match(/^\(.+\)$/) || s.push(a));
  return { ...e, score: r, params: t, matchSegments: s, wildcard: i };
}
function ae() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, metadata: { ...t.$$route ? t.$$route.require().route.metadata : {}, filesystem: true }, component: ee(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return te.map(e);
}
function le(e) {
  const n = getCookie(e, "flash");
  if (!n)
    return;
  let t = JSON.parse(n);
  if (!t || !t.result)
    return [];
  const s = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])];
  return setCookie(e, "flash", "", { maxAge: 0 }), { url: t.url, result: t.error ? new Error(t.result) : t.result, input: s };
}
async function ce(e) {
  const n = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, setResponseHeader(e, "Content-Type", "text/html"), Object.assign(e, { manifest: await n.json(), assets: [...await n.inputs[n.handler].assets()], initialSubmission: le(e), routes: ae(), components: { status: (s) => (setResponseStatus(e, s.code, s.text), () => setResponseStatus(e, 200)), header: (s) => (s.append ? appendResponseHeader(e, s.name, s.value) : setResponseHeader(e, s.name, s.value), () => {
    const r = getResponseHeader(e, s.name);
    if (r && typeof r == "string") {
      const i = r.split(", "), o = i.indexOf(s.value);
      o !== -1 && i.splice(o, 1), i.length ? setResponseHeader(e, s.name, i.join(", ")) : removeResponseHeader(e, s.name);
    }
  }) }, $islands: /* @__PURE__ */ new Set() });
}
function ue(e, n = {}) {
  return eventHandler({ onRequest: n.onRequest, onBeforeResponse: n.onBeforeResponse, handler: (t) => {
    const s = Q(t);
    return provideRequestEvent(s, async () => {
      const r = se(new URL(s.request.url).pathname, s.request.method);
      if (r) {
        const p = (await r.handler.import())[s.request.method];
        return s.params = r.params, sharedConfig.context = { event: s }, await p(s);
      }
      const i = await ce(s);
      let o = { ...n };
      if (o.onCompleteAll) {
        const u = o.onCompleteAll;
        o.onCompleteAll = (p) => {
          R(i)(p), u(p);
        };
      } else
        o.onCompleteAll = R(i);
      if (o.onCompleteShell) {
        const u = o.onCompleteShell;
        o.onCompleteShell = (p) => {
          $(i, t)(), u(p);
        };
      } else
        o.onCompleteShell = $(i, t);
      const a = renderToStream(() => (sharedConfig.context.event = i, e(i)), o);
      if (i.response && i.response.headers.get("Location"))
        return sendRedirect(s, i.response.headers.get("Location"));
      const { writable: l, readable: c } = new TransformStream();
      return a.pipeTo(l), c;
    });
  } });
}
function $(e, n) {
  return () => {
    e.response && e.response.headers.get("Location") && (setResponseStatus(n, 302), setHeader(n, "Location", e.response.headers.get("Location")));
  };
}
function R(e) {
  return ({ write: n }) => {
    const t = e.response && e.response.headers.get("Location");
    t && n(`<script>window.location="${t}"<\/script>`);
  };
}
function pe(e, n) {
  return ue(e, { ...n, createPageEvent: me });
}
async function me(e) {
  const n = globalThis.MANIFEST.client;
  return Object.assign(e, { manifest: await n.json(), assets: [...await n.inputs[n.handler].assets()], routes: [], $islands: /* @__PURE__ */ new Set() });
}
var de = ["<script", ">", "<\/script>"], fe = ["<script", ' type="module"', "><\/script>"];
const he = ssr("<!DOCTYPE html>");
function ge(e) {
  const n = getRequestEvent();
  return createComponent(NoHydration, { get children() {
    return [he, createComponent(e.document, { get assets() {
      return n.assets.map((t) => x(t));
    }, get scripts() {
      return [ssr(de, ssrHydrationKey(), `window.manifest = ${JSON.stringify(n.manifest)}`), ssr(fe, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    } })];
  } });
}
var ye = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], be = ["<html", ' lang="en">', '<body class="sm:max-w-3xl sm:mx-auto"><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Ce = pe(() => createComponent(ge, { document: ({ assets: e, children: n, scripts: t }) => ssr(be, ssrHydrationKey(), createComponent(NoHydration, { get children() {
  return ssr(ye, escape(e));
} }), escape(n), escape(t)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: kr, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Ce, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map
