import {
  __toESM,
  require_react,
  require_react_dom
} from "./chunk-kr6hc1f9.js";

// node_modules/react-router/dist/development/chunk-UIGDSWPH.mjs
var React = __toESM(require_react(), 1);
var React2 = __toESM(require_react(), 1);
var React3 = __toESM(require_react(), 1);
var React4 = __toESM(require_react(), 1);
var React9 = __toESM(require_react(), 1);
var React8 = __toESM(require_react(), 1);
var React7 = __toESM(require_react(), 1);
var React6 = __toESM(require_react(), 1);
var React5 = __toESM(require_react(), 1);
var React10 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var PopStateEventType = "popstate";
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation("", { pathname, search, hash }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location2, index) {
  return {
    usr: location2.state,
    key: location2.key,
    idx: index
  };
}
function createLocation(current, to, state = null, key) {
  let location2 = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    key: to && to.key || key || createKey()
  };
  return location2;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH";
    let location2 = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location2, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location2, index);
    let url = history.createHref(location2);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE";
    let location2 = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location2, to);
    index = getIndex();
    let historyState = getHistoryState(location2, index);
    let url = history.createHref(location2);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    return createBrowserURLImpl(to);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
function createBrowserURLImpl(to, isAbsolute = false) {
  let base = "http://localhost";
  if (typeof window !== "undefined") {
    base = window.location.origin !== "null" ? window.location.origin : window.location.href;
  }
  invariant(base, "No window.location.(origin|href) available to create URL");
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  if (!isAbsolute && href.startsWith("//")) {
    href = base + href;
  }
  return new URL(href, base);
}
function createContext4(defaultValue) {
  return { defaultValue };
}
var _map;
var RouterContextProvider = class {
  constructor(init) {
    __privateAdd(this, _map, /* @__PURE__ */ new Map);
    if (init) {
      for (let [context, value] of init) {
        this.set(context, value);
      }
    }
  }
  get(context) {
    if (__privateGet(this, _map).has(context)) {
      return __privateGet(this, _map).get(context);
    }
    if (context.defaultValue !== undefined) {
      return context.defaultValue;
    }
    throw new Error("No value found for context");
  }
  set(context, value) {
    __privateGet(this, _map).set(context, value);
  }
};
_map = new WeakMap;
var unsupportedLazyRouteObjectKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function isUnsupportedLazyRouteObjectKey(key) {
  return unsupportedLazyRouteObjectKeys.has(key);
}
var unsupportedLazyRouteFunctionKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function isUnsupportedLazyRouteFunctionKey(key) {
  return unsupportedLazyRouteFunctionKeys.has(key);
}
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}, allowInPlaceMutations = false) {
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, `Cannot specify children on an index route`);
    invariant(allowInPlaceMutations || !manifest[id], `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`);
    if (isIndexRoute(route)) {
      let indexRoute = {
        ...route,
        id
      };
      manifest[id] = mergeRouteUpdates(indexRoute, mapRouteProperties2(indexRoute));
      return indexRoute;
    } else {
      let pathOrLayoutRoute = {
        ...route,
        id,
        children: undefined
      };
      manifest[id] = mergeRouteUpdates(pathOrLayoutRoute, mapRouteProperties2(pathOrLayoutRoute));
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest, allowInPlaceMutations);
      }
      return pathOrLayoutRoute;
    }
  });
}
function mergeRouteUpdates(route, updates) {
  return Object.assign(route, {
    ...updates,
    ...typeof updates.lazy === "object" && updates.lazy != null ? {
      lazy: {
        ...route.lazy,
        ...updates.lazy
      }
    } : {}
  });
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0;matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded, allowPartial);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    loaderData: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
  let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      invariant(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
      flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, true, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0;i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({ path: meta.relativePath, caseSensitive: meta.caseSensitive, end }, remainingPathname);
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo2, { paramName, isOptional }, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo2[paramName] = undefined;
    } else {
      memo2[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo2;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({ paramName, isOptional: isOptional != null });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {}
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function prependBasename({
  basename,
  pathname
}) {
  return pathname === "/" ? basename : joinPaths([basename, pathname]);
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
function getRoutePattern(paths) {
  return paths.filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var UninstrumentedSymbol = Symbol("Uninstrumented");
function getRouteInstrumentationUpdates(fns, route) {
  let aggregated = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  fns.forEach((fn) => fn({
    id: route.id,
    index: route.index,
    path: route.path,
    instrument(i) {
      let keys = Object.keys(aggregated);
      for (let key of keys) {
        if (i[key]) {
          aggregated[key].push(i[key]);
        }
      }
    }
  }));
  let updates = {};
  if (typeof route.lazy === "function" && aggregated.lazy.length > 0) {
    let instrumented = wrapImpl(aggregated.lazy, route.lazy, () => {
      return;
    });
    if (instrumented) {
      updates.lazy = instrumented;
    }
  }
  if (typeof route.lazy === "object") {
    let lazyObject = route.lazy;
    ["middleware", "loader", "action"].forEach((key) => {
      let lazyFn = lazyObject[key];
      let instrumentations = aggregated[`lazy.${key}`];
      if (typeof lazyFn === "function" && instrumentations.length > 0) {
        let instrumented = wrapImpl(instrumentations, lazyFn, () => {
          return;
        });
        if (instrumented) {
          updates.lazy = Object.assign(updates.lazy || {}, {
            [key]: instrumented
          });
        }
      }
    });
  }
  ["loader", "action"].forEach((key) => {
    let handler = route[key];
    if (typeof handler === "function" && aggregated[key].length > 0) {
      let original = handler[UninstrumentedSymbol] ?? handler;
      let instrumented = wrapImpl(aggregated[key], original, (...args) => getHandlerInfo(args[0]));
      if (instrumented) {
        instrumented[UninstrumentedSymbol] = original;
        updates[key] = instrumented;
      }
    }
  });
  if (route.middleware && route.middleware.length > 0 && aggregated.middleware.length > 0) {
    updates.middleware = route.middleware.map((middleware) => {
      let original = middleware[UninstrumentedSymbol] ?? middleware;
      let instrumented = wrapImpl(aggregated.middleware, original, (...args) => getHandlerInfo(args[0]));
      if (instrumented) {
        instrumented[UninstrumentedSymbol] = original;
        return instrumented;
      }
      return middleware;
    });
  }
  return updates;
}
function instrumentClientSideRouter(router, fns) {
  let aggregated = {
    navigate: [],
    fetch: []
  };
  fns.forEach((fn) => fn({
    instrument(i) {
      let keys = Object.keys(i);
      for (let key of keys) {
        if (i[key]) {
          aggregated[key].push(i[key]);
        }
      }
    }
  }));
  if (aggregated.navigate.length > 0) {
    let navigate = router.navigate[UninstrumentedSymbol] ?? router.navigate;
    let instrumentedNavigate = wrapImpl(aggregated.navigate, navigate, (...args) => {
      let [to, opts] = args;
      return {
        to: typeof to === "number" || typeof to === "string" ? to : to ? createPath(to) : ".",
        ...getRouterInfo(router, opts ?? {})
      };
    });
    if (instrumentedNavigate) {
      instrumentedNavigate[UninstrumentedSymbol] = navigate;
      router.navigate = instrumentedNavigate;
    }
  }
  if (aggregated.fetch.length > 0) {
    let fetch2 = router.fetch[UninstrumentedSymbol] ?? router.fetch;
    let instrumentedFetch = wrapImpl(aggregated.fetch, fetch2, (...args) => {
      let [key, , href, opts] = args;
      return {
        href: href ?? ".",
        fetcherKey: key,
        ...getRouterInfo(router, opts ?? {})
      };
    });
    if (instrumentedFetch) {
      instrumentedFetch[UninstrumentedSymbol] = fetch2;
      router.fetch = instrumentedFetch;
    }
  }
  return router;
}
function wrapImpl(impls, handler, getInfo) {
  if (impls.length === 0) {
    return null;
  }
  return async (...args) => {
    let result = await recurseRight(impls, getInfo(...args), () => handler(...args), impls.length - 1);
    if (result.type === "error") {
      throw result.value;
    }
    return result.value;
  };
}
async function recurseRight(impls, info, handler, index) {
  let impl = impls[index];
  let result;
  if (!impl) {
    try {
      let value = await handler();
      result = { type: "success", value };
    } catch (e) {
      result = { type: "error", value: e };
    }
  } else {
    let handlerPromise = undefined;
    let callHandler = async () => {
      if (handlerPromise) {
        console.error("You cannot call instrumented handlers more than once");
      } else {
        handlerPromise = recurseRight(impls, info, handler, index - 1);
      }
      result = await handlerPromise;
      invariant(result, "Expected a result");
      if (result.type === "error" && result.value instanceof Error) {
        return { status: "error", error: result.value };
      }
      return { status: "success", error: undefined };
    };
    try {
      await impl(callHandler, info);
    } catch (e) {
      console.error("An instrumentation function threw an error:", e);
    }
    if (!handlerPromise) {
      await callHandler();
    }
    await handlerPromise;
  }
  if (result) {
    return result;
  }
  return {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function getHandlerInfo(args) {
  let { request, context, params, unstable_pattern } = args;
  return {
    request: getReadonlyRequest(request),
    params: { ...params },
    unstable_pattern,
    context: getReadonlyContext(context)
  };
}
function getRouterInfo(router, opts) {
  return {
    currentUrl: createPath(router.state.location),
    ..."formMethod" in opts ? { formMethod: opts.formMethod } : {},
    ..."formEncType" in opts ? { formEncType: opts.formEncType } : {},
    ..."formData" in opts ? { formData: opts.formData } : {},
    ..."body" in opts ? { body: opts.body } : {}
  };
}
function getReadonlyRequest(request) {
  return {
    method: request.method,
    url: request.url,
    headers: {
      get: (...args) => request.headers.get(...args)
    }
  };
}
function getReadonlyContext(context) {
  if (isPlainObject(context)) {
    let frozen = { ...context };
    Object.freeze(frozen);
    return frozen;
  } else {
    return {
      get: (ctx) => context.get(ctx)
    };
  }
}
var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\x00");
function isPlainObject(thing) {
  if (thing === null || typeof thing !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\x00") === objectProtoNames;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
var IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let hydrationRouteProperties2 = init.hydrationRouteProperties || [];
  let _mapRouteProperties = init.mapRouteProperties || defaultMapRouteProperties;
  let mapRouteProperties2 = _mapRouteProperties;
  if (init.unstable_instrumentations) {
    let instrumentations = init.unstable_instrumentations;
    mapRouteProperties2 = (route) => {
      return {
        ..._mapRouteProperties(route),
        ...getRouteInstrumentationUpdates(instrumentations.map((i) => i.route).filter(Boolean), route)
      };
    };
  }
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties2, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  if (!basename.startsWith("/")) {
    basename = `/${basename}`;
  }
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
  let future = {
    ...init.future
  };
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set;
  let savedScrollPositions2 = null;
  let getScrollRestorationKey2 = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialMatchesIsFOW = false;
  let initialErrors = null;
  let initialized;
  if (initialMatches == null && !init.patchRoutesOnNavigation) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let { matches, route } = getShortCircuitMatches(dataRoutes);
    initialized = true;
    initialMatches = matches;
    initialErrors = { [route.id]: error };
  } else {
    if (initialMatches && !init.hydrationData) {
      let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
      if (fogOfWar.active) {
        initialMatches = null;
      }
    }
    if (!initialMatches) {
      initialized = false;
      initialMatches = [];
      let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
      if (fogOfWar.active && fogOfWar.matches) {
        initialMatchesIsFOW = true;
        initialMatches = fogOfWar.matches;
      }
    } else if (initialMatches.some((m) => m.route.lazy)) {
      initialized = false;
    } else if (!initialMatches.some((m) => routeHasLoaderOrMiddleware(m.route))) {
      initialized = true;
    } else {
      let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
      let errors = init.hydrationData ? init.hydrationData.errors : null;
      if (errors) {
        let idx = initialMatches.findIndex((m) => errors[m.route.id] !== undefined);
        initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
      } else {
        initialized = initialMatches.every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
      }
    }
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map,
    blockers: /* @__PURE__ */ new Map
  };
  let pendingAction = "POP";
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map;
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledFetcherLoads = /* @__PURE__ */ new Set;
  let fetchControllers = /* @__PURE__ */ new Map;
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map;
  let fetchRedirectIds = /* @__PURE__ */ new Set;
  let fetchLoadMatches = /* @__PURE__ */ new Map;
  let activeFetchers = /* @__PURE__ */ new Map;
  let fetchersQueuedForDeletion = /* @__PURE__ */ new Set;
  let blockerFunctions = /* @__PURE__ */ new Map;
  let unblockBlockerHistoryUpdate = undefined;
  let pendingRevalidationDfd = null;
  function initialize() {
    unlistenHistory = init.history.listen(({ action: historyAction, location: location2, delta }) => {
      if (unblockBlockerHistoryUpdate) {
        unblockBlockerHistoryUpdate();
        unblockBlockerHistoryUpdate = undefined;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location2,
        historyAction
      });
      if (blockerKey && delta != null) {
        let nextHistoryUpdatePromise = new Promise((resolve) => {
          unblockBlockerHistoryUpdate = resolve;
        });
        init.history.go(delta * -1);
        updateBlocker(blockerKey, {
          state: "blocked",
          location: location2,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location: location2
            });
            nextHistoryUpdatePromise.then(() => init.history.go(delta));
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({ blockers });
          }
        });
        return;
      }
      return startNavigation(historyAction, location2);
    });
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation("POP", state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts = {}) {
    if (newState.matches) {
      newState.matches = newState.matches.map((m) => {
        let route = manifest[m.route.id];
        let matchRoute = m.route;
        if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) {
          return {
            ...m,
            route
          };
        }
        return m;
      });
    }
    state = {
      ...state,
      ...newState
    };
    let unmountedFetchers = [];
    let mountedFetchers = [];
    state.fetchers.forEach((fetcher, key) => {
      if (fetcher.state === "idle") {
        if (fetchersQueuedForDeletion.has(key)) {
          unmountedFetchers.push(key);
        } else {
          mountedFetchers.push(key);
        }
      }
    });
    fetchersQueuedForDeletion.forEach((key) => {
      if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
        unmountedFetchers.push(key);
      }
    });
    [...subscribers].forEach((subscriber) => subscriber(state, {
      deletedFetchers: unmountedFetchers,
      viewTransitionOpts: opts.viewTransitionOpts,
      flushSync: opts.flushSync === true
    }));
    unmountedFetchers.forEach((key) => deleteFetcher(key));
    mountedFetchers.forEach((key) => state.fetchers.delete(key));
  }
  function completeNavigation(location2, newState, { flushSync } = {}) {
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location2.state?._isRedirect !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location2, newState.matches || state.matches);
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location2.state?._isRedirect !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) {} else if (pendingAction === "POP") {} else if (pendingAction === "PUSH") {
      init.history.push(location2, location2.state);
    } else if (pendingAction === "REPLACE") {
      init.history.replace(location2, location2.state);
    }
    let viewTransitionOpts;
    if (pendingAction === "POP") {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location2.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location2
        };
      } else if (appliedViewTransitions.has(location2.pathname)) {
        viewTransitionOpts = {
          currentLocation: location2,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location2.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location2.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location2
      };
    }
    updateState({
      ...newState,
      actionData,
      loaderData,
      historyAction: pendingAction,
      location: location2,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition,
      preventScrollReset,
      blockers
    }, {
      viewTransitionOpts,
      flushSync: flushSync === true
    });
    pendingAction = "POP";
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    pendingRevalidationDfd?.resolve();
    pendingRevalidationDfd = null;
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, to, opts?.fromRouteId, opts?.relative);
    let { path, submission, error } = normalizeNavigateOptions(false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = {
      ...nextLocation,
      ...init.history.encodeLocation(nextLocation)
    };
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = "PUSH";
    if (userReplace === true) {
      historyAction = "REPLACE";
    } else if (userReplace === false) {} else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = "REPLACE";
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({ blockers });
        }
      });
      return;
    }
    await startNavigation(historyAction, nextLocation, {
      submission,
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  function revalidate() {
    if (!pendingRevalidationDfd) {
      pendingRevalidationDfd = createDeferred();
    }
    interruptActiveLoads();
    updateState({ revalidation: "loading" });
    let promise = pendingRevalidationDfd.promise;
    if (state.navigation.state === "submitting") {
      return promise;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return promise;
    }
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation,
      enableViewTransition: pendingViewTransitionEnabled === true
    });
    return promise;
  }
  async function startNavigation(historyAction, location2, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = opts?.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? state.matches : matchRoutes(routesToUse, location2, basename);
    let flushSync = (opts && opts.flushSync) === true;
    if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location2) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location2, { matches }, { flushSync });
      return;
    }
    let fogOfWar = checkFogOfWar(matches, routesToUse, location2.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let { error, notFoundMatches, route } = handleNavigational404(location2.pathname);
      completeNavigation(location2, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, { flushSync });
      return;
    }
    pendingNavigationController = new AbortController;
    let request = createClientSideRequest(init.history, location2, pendingNavigationController.signal, opts && opts.submission);
    let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider;
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [
        findNearestBoundary(matches).route.id,
        { type: "error", error: opts.pendingError }
      ];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(request, location2, opts.submission, matches, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, { replace: opts.replace, flushSync });
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location2, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location2, opts.submission);
      flushSync = false;
      fogOfWar.active = false;
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(request, location2, matches, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location2, {
      matches: updatedMatches || matches,
      ...getActionDataForCommit(pendingActionResult),
      loaderData,
      errors
    });
  }
  async function handleAction(request, location2, submission, matches, scopedContext, isFogOfWar, initialHydration, opts = {}) {
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location2, submission);
    updateState({ navigation }, { flushSync: opts.flushSync === true });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, location2.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        if (discoverResult.partialMatches.length === 0) {
          let { matches: matches2, route } = getShortCircuitMatches(dataRoutes);
          return {
            matches: matches2,
            pendingActionResult: [
              route.id,
              {
                type: "error",
                error: discoverResult.error
              }
            ]
          };
        }
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [
            boundaryId,
            {
              type: "error",
              error: discoverResult.error
            }
          ]
        };
      } else if (!discoverResult.matches) {
        let { notFoundMatches, error, route } = handleNavigational404(location2.pathname);
        return {
          matches: notFoundMatches,
          pendingActionResult: [
            route.id,
            {
              type: "error",
              error
            }
          ]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location2);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: "error",
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location2.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties2, scopedContext);
      let results = await callDataStrategy(request, dsMatches, scopedContext, null);
      result = results[actionMatch.route.id];
      if (!result) {
        for (let match of matches) {
          if (results[match.route.id]) {
            result = results[match.route.id];
            break;
          }
        }
      }
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
    }
    if (isRedirectResult(result)) {
      let replace2;
      if (opts && opts.replace != null) {
        replace2 = opts.replace;
      } else {
        let location22 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
        replace2 = location22 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace: replace2
      });
      return { shortCircuited: true };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = "PUSH";
      }
      return {
        matches,
        pendingActionResult: [
          boundaryMatch.route.id,
          result,
          actionMatch.route.id
        ]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location2, matches, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location2, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState({
          navigation: loadingNavigation,
          ...actionData !== undefined ? { actionData } : {}
        }, {
          flushSync
        });
      }
      let discoverResult = await discoverRoutes(matches, location2.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        if (discoverResult.partialMatches.length === 0) {
          let { matches: matches2, route } = getShortCircuitMatches(dataRoutes);
          return {
            matches: matches2,
            loaderData: {},
            errors: {
              [route.id]: discoverResult.error
            }
          };
        }
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let { error, notFoundMatches, route } = handleNavigational404(location2.pathname);
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { dsMatches, revalidatingFetchers } = getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, activeSubmission, location2, initialHydration ? [] : hydrationRouteProperties2, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, pendingActionResult);
    pendingNavigationLoadId = ++incrementingLoadId;
    if (!init.dataStrategy && !dsMatches.some((m) => m.shouldLoad) && !dsMatches.some((m) => m.route.middleware && m.route.middleware.length > 0) && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(location2, {
        matches,
        loaderData: {},
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
        ...getActionDataForCommit(pendingActionResult),
        ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
      }, { flushSync });
      return { shortCircuited: true };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== undefined) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, { flushSync });
    }
    revalidatingFetchers.forEach((rf) => {
      abortFetcher(rf.key);
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, scopedContext);
    if (request.signal.aborted) {
      return { shortCircuited: true };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults);
    if (initialHydration && state.errors) {
      errors = { ...state.errors, ...errors };
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return {
      matches,
      loaderData,
      errors,
      ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
    };
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf) => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  async function fetch2(key, routeId, href, opts) {
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, opts?.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, { pathname: normalizedPath }), { flushSync });
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, { flushSync });
      return;
    }
    let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider;
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      await handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
      return;
    }
    fetchLoadMatches.set(key, { routeId, path });
    await handleFetcherLoader(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
  }
  async function handleFetcherAction(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController;
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
        return;
      } else {
        requestMatches = discoverResult.matches;
      }
    }
    let match = getTargetMatch(requestMatches, path);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId
      });
      setFetcherError(key, routeId, error, { flushSync });
      return;
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, requestMatches, match, hydrationRouteProperties2, scopedContext);
    let actionResults = await callDataStrategy(fetchRequest, fetchMatches, scopedContext, key);
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let { dsMatches, revalidatingFetchers } = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties2, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, [match.route.id, actionResult]);
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher2 ? existingFetcher2.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({ fetchers: new Map(state.fetchers) });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, scopedContext);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      return startRedirectNavigation(revalidationRequest, redirect2.result, false, { preventScrollReset });
    }
    let { loaderData, errors } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults);
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), { flushSync });
    let abortController = new AbortController;
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
        return;
      } else {
        matches = discoverResult.matches;
      }
    }
    let match = getTargetMatch(matches, path);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, matches, match, hydrationRouteProperties2, scopedContext);
    let results = await callDataStrategy(fetchRequest, dsMatches, scopedContext, key);
    let result = results[match.route.id];
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      updateFetcherState(key, getDoneFetcher(undefined));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect2, isNavigation, {
    submission,
    fetcherSubmission,
    preventScrollReset,
    replace: replace2
  } = {}) {
    if (redirect2.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location2 = redirect2.response.headers.get("Location");
    invariant(location2, "Expected a Location header on the redirect Response");
    location2 = normalizeRedirectLocation(location2, new URL(request.url), basename);
    let redirectLocation = createLocation(state.location, location2, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (isAbsoluteUrl(location2)) {
        const url = createBrowserURLImpl(location2, true);
        isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace2) {
          routerWindow.location.replace(location2);
        } else {
          routerWindow.location.assign(location2);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
    let { formMethod, formAction, formEncType } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectNavigationType, redirectLocation, {
        submission: {
          ...activeSubmission,
          formAction: location2
        },
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    } else {
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectNavigationType, redirectLocation, {
        overrideNavigation,
        fetcherSubmission,
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
      });
    }
  }
  async function callDataStrategy(request, matches, scopedContext, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, false);
    } catch (e) {
      matches.filter((m) => m.shouldLoad).forEach((m) => {
        dataResults[m.route.id] = {
          type: "error",
          error: e
        };
      });
      return dataResults;
    }
    if (request.signal.aborted) {
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: "redirect",
          response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(matches, fetchersToLoad, request, scopedContext) {
    let loaderResultsPromise = callDataStrategy(request, matches, scopedContext, null);
    let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f) => {
      if (f.matches && f.match && f.request && f.controller) {
        let results = await callDataStrategy(f.request, f.matches, scopedContext, f.key);
        let result = results[f.match.route.id];
        return { [f.key]: result };
      } else {
        return Promise.resolve({
          [f.key]: {
            type: "error",
            error: getInternalRouterError(404, {
              pathname: f.path
            })
          }
        });
      }
    }));
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {});
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts = {}) {
    state.fetchers.set(key, fetcher);
    updateState({ fetchers: new Map(state.fetchers) }, { flushSync: (opts && opts.flushSync) === true });
  }
  function setFetcherError(key, routeId, error, opts = {}) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, { flushSync: (opts && opts.flushSync) === true });
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    if (fetchersQueuedForDeletion.has(key)) {
      fetchersQueuedForDeletion.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function resetFetcher(key, opts) {
    abortFetcher(key, opts?.reason);
    updateFetcherState(key, getDoneFetcher(null));
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    fetchersQueuedForDeletion.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function queueFetcherForDeletion(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      fetchersQueuedForDeletion.add(key);
    } else {
      activeFetchers.set(key, count);
    }
    updateState({ fetchers: new Map(state.fetchers) });
  }
  function abortFetcher(key, reason) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort(reason);
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({ blockers });
  }
  function shouldBlockNavigation({
    currentLocation,
    nextLocation,
    historyAction
  }) {
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, { pathname });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { matches, route } = getShortCircuitMatches(routesToUse);
    return { notFoundMatches: matches, route, error };
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions2 = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey2 = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({ restoreScrollPosition: y });
      }
    }
    return () => {
      savedScrollPositions2 = null;
      getScrollPosition = null;
      getScrollRestorationKey2 = null;
    };
  }
  function getScrollKey(location2, matches) {
    if (getScrollRestorationKey2) {
      let key = getScrollRestorationKey2(location2, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location2.key;
    }
    return location2.key;
  }
  function saveScrollPosition(location2, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location2, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location2, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location2, matches);
      let y = savedScrollPositions2[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (init.patchRoutesOnNavigation) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
        return { active: true, matches: fogMatches || [] };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          return { active: true, matches: partialMatches };
        }
      }
    }
    return { active: false, matches: null };
  }
  async function discoverRoutes(matches, pathname, signal, fetcherKey) {
    if (!init.patchRoutesOnNavigation) {
      return { type: "success", matches };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await init.patchRoutesOnNavigation({
          signal,
          path: pathname,
          matches: partialMatches,
          fetcherKey,
          patch: (routeId, children) => {
            if (signal.aborted)
              return;
            patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties2, false);
          }
        });
      } catch (e) {
        return { type: "error", error: e, partialMatches };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return { type: "aborted" };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return { type: "success", matches: newMatches };
      }
      let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i) => m.route.id === newPartialMatches[i].route.id)) {
        return { type: "success", matches: null };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, undefined, manifest);
  }
  function patchRoutes(routeId, children, unstable_allowElementMutations = false) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, unstable_allowElementMutations);
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    resetFetcher,
    deleteFetcher: queueFetcherForDeletion,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    _internalSetRoutes,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(newState) {
      updateState(newState);
    }
  };
  if (init.unstable_instrumentations) {
    router = instrumentClientSideRouter(router, init.unstable_instrumentations.map((i) => i.router).filter(Boolean));
  }
  return router;
}
function isSubmissionNavigation(opts) {
  return opts != null && (("formData" in opts) && opts.formData != null || ("body" in opts) && opts.body !== undefined);
}
function normalizeTo(location2, matches, basename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location2.pathname, basename) || location2.pathname, relative === "path");
  if (to == null) {
    path.search = location2.search;
    path.hash = location2.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if (basename !== "/") {
    path.pathname = prependBasename({ basename, pathname: path.pathname });
  }
  return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return { path };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, { method: opts.formMethod })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, { type: "invalid-body" })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = rawFormMethod.toUpperCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, [name, value]) => `${acc}${name}=${value}
`, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams;
    formData = new FormData;
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return { path, submission };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = `?${searchParams}`;
  return { path: createPath(parsedPath), submission };
}
function getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, history, state, matches, submission, location2, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, hasPatchRoutesOnNavigation, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location2);
  let maxIdx;
  if (initialHydration && state.errors) {
    let boundaryId = Object.keys(state.errors)[0];
    maxIdx = matches.findIndex((m) => m.route.id === boundaryId);
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    let boundaryId = pendingActionResult[0];
    maxIdx = matches.findIndex((m) => m.route.id === boundaryId) - 1;
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
  let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
  let baseShouldRevalidateArgs = {
    currentUrl,
    currentParams: state.matches[0]?.params || {},
    nextUrl,
    nextParams: matches[0].params,
    ...submission,
    actionResult,
    actionStatus
  };
  let pattern = getRoutePattern(matches.map((m) => m.route.path));
  let dsMatches = matches.map((match, index) => {
    let { route } = match;
    let forceShouldLoad = null;
    if (maxIdx != null && index > maxIdx) {
      forceShouldLoad = false;
    } else if (route.lazy) {
      forceShouldLoad = true;
    } else if (!routeHasLoaderOrMiddleware(route)) {
      forceShouldLoad = false;
    } else if (initialHydration) {
      forceShouldLoad = shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    } else if (isNewLoader(state.loaderData, state.matches[index], match)) {
      forceShouldLoad = true;
    }
    if (forceShouldLoad !== null) {
      return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
    }
    let defaultShouldRevalidate = shouldSkipRevalidation ? false : isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || currentUrl.search !== nextUrl.search || isNewRouteInstance(state.matches[index], match);
    let shouldRevalidateArgs = {
      ...baseShouldRevalidateArgs,
      defaultShouldRevalidate
    };
    let shouldLoad = shouldRevalidateLoader(match, shouldRevalidateArgs);
    return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs);
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
      return;
    }
    let fetcher = state.fetchers.get(key);
    let isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === undefined;
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      if (hasPatchRoutesOnNavigation && isMidInitialLoad) {
        return;
      }
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (fetchRedirectIds.has(key)) {
      return;
    }
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let fetchController = new AbortController;
    let fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
    let fetcherDsMatches = null;
    if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
    } else if (isMidInitialLoad) {
      if (isRevalidationRequired) {
        fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
      }
    } else {
      let shouldRevalidateArgs = {
        ...baseShouldRevalidateArgs,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      };
      if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) {
        fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
      }
    }
    if (fetcherDsMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherDsMatches,
        match: fetcherMatch,
        request: fetchRequest,
        controller: fetchController
      });
    }
  });
  return { dsMatches, revalidatingFetchers };
}
function routeHasLoaderOrMiddleware(route) {
  return route.loader != null || route.middleware != null && route.middleware.length > 0;
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!routeHasLoaderOrMiddleware(route)) {
    return false;
  }
  let hasData = loaderData != null && route.id in loaderData;
  let hasError = errors != null && errors[route.id] !== undefined;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
  let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, allowElementMutations) {
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(route, `No route found to patch children into: routeId = ${routeId}`);
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = [];
  let existingChildren = [];
  children.forEach((newRoute) => {
    let existingRoute = childrenToPatch.find((existingRoute2) => isSameRoute(newRoute, existingRoute2));
    if (existingRoute) {
      existingChildren.push({ existingRoute, newRoute });
    } else {
      uniqueChildren.push(newRoute);
    }
  });
  if (uniqueChildren.length > 0) {
    let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties2, [routeId || "_", "patch", String(childrenToPatch?.length || "0")], manifest);
    childrenToPatch.push(...newRoutes);
  }
  if (allowElementMutations && existingChildren.length > 0) {
    for (let i = 0;i < existingChildren.length; i++) {
      let { existingRoute, newRoute } = existingChildren[i];
      let existingRouteTyped = existingRoute;
      let [newRouteTyped] = convertRoutesToDataRoutes([newRoute], mapRouteProperties2, [], {}, true);
      Object.assign(existingRouteTyped, {
        element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
        errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
        hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
      });
    }
  }
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every((aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild)));
}
var lazyRoutePropertyCache = /* @__PURE__ */ new WeakMap;
var loadLazyRouteProperty = ({
  key,
  route,
  manifest,
  mapRouteProperties: mapRouteProperties2
}) => {
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") {
    return;
  }
  let lazyFn = routeToUpdate.lazy[key];
  if (!lazyFn) {
    return;
  }
  let cache = lazyRoutePropertyCache.get(routeToUpdate);
  if (!cache) {
    cache = {};
    lazyRoutePropertyCache.set(routeToUpdate, cache);
  }
  let cachedPromise = cache[key];
  if (cachedPromise) {
    return cachedPromise;
  }
  let propertyPromise = (async () => {
    let isUnsupported = isUnsupportedLazyRouteObjectKey(key);
    let staticRouteValue = routeToUpdate[key];
    let isStaticallyDefined = staticRouteValue !== undefined && key !== "hasErrorBoundary";
    if (isUnsupported) {
      warning(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
      cache[key] = Promise.resolve();
    } else if (isStaticallyDefined) {
      warning(false, `Route "${routeToUpdate.id}" has a static property "${key}" defined. The lazy property will be ignored.`);
    } else {
      let value = await lazyFn();
      if (value != null) {
        Object.assign(routeToUpdate, { [key]: value });
        Object.assign(routeToUpdate, mapRouteProperties2(routeToUpdate));
      }
    }
    if (typeof routeToUpdate.lazy === "object") {
      routeToUpdate.lazy[key] = undefined;
      if (Object.values(routeToUpdate.lazy).every((value) => value === undefined)) {
        routeToUpdate.lazy = undefined;
      }
    }
  })();
  cache[key] = propertyPromise;
  return propertyPromise;
};
var lazyRouteFunctionCache = /* @__PURE__ */ new WeakMap;
function loadLazyRoute(route, type, manifest, mapRouteProperties2, lazyRoutePropertiesToSkip) {
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  if (!route.lazy) {
    return {
      lazyRoutePromise: undefined,
      lazyHandlerPromise: undefined
    };
  }
  if (typeof route.lazy === "function") {
    let cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
    if (cachedPromise) {
      return {
        lazyRoutePromise: cachedPromise,
        lazyHandlerPromise: cachedPromise
      };
    }
    let lazyRoutePromise2 = (async () => {
      invariant(typeof route.lazy === "function", "No lazy route function found");
      let lazyRoute = await route.lazy();
      let routeUpdates = {};
      for (let lazyRouteProperty in lazyRoute) {
        let lazyValue = lazyRoute[lazyRouteProperty];
        if (lazyValue === undefined) {
          continue;
        }
        let isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isStaticallyDefined = staticRouteValue !== undefined && lazyRouteProperty !== "hasErrorBoundary";
        if (isUnsupported) {
          warning(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
        } else if (isStaticallyDefined) {
          warning(!isStaticallyDefined, `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`);
        } else {
          routeUpdates[lazyRouteProperty] = lazyValue;
        }
      }
      Object.assign(routeToUpdate, routeUpdates);
      Object.assign(routeToUpdate, {
        ...mapRouteProperties2(routeToUpdate),
        lazy: undefined
      });
    })();
    lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise2);
    lazyRoutePromise2.catch(() => {});
    return {
      lazyRoutePromise: lazyRoutePromise2,
      lazyHandlerPromise: lazyRoutePromise2
    };
  }
  let lazyKeys = Object.keys(route.lazy);
  let lazyPropertyPromises = [];
  let lazyHandlerPromise = undefined;
  for (let key of lazyKeys) {
    if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) {
      continue;
    }
    let promise = loadLazyRouteProperty({
      key,
      route,
      manifest,
      mapRouteProperties: mapRouteProperties2
    });
    if (promise) {
      lazyPropertyPromises.push(promise);
      if (key === type) {
        lazyHandlerPromise = promise;
      }
    }
  }
  let lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(() => {}) : undefined;
  lazyRoutePromise?.catch(() => {});
  lazyHandlerPromise?.catch(() => {});
  return {
    lazyRoutePromise,
    lazyHandlerPromise
  };
}
async function defaultDataStrategy(args) {
  let matchesToLoad = args.matches.filter((m) => m.shouldLoad);
  let keyedResults = {};
  let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
  results.forEach((result, i) => {
    keyedResults[matchesToLoad[i].route.id] = result;
  });
  return keyedResults;
}
async function defaultDataStrategyWithMiddleware(args) {
  if (!args.matches.some((m) => m.route.middleware)) {
    return defaultDataStrategy(args);
  }
  return runClientMiddlewarePipeline(args, () => defaultDataStrategy(args));
}
function runClientMiddlewarePipeline(args, handler) {
  return runMiddlewarePipeline(args, handler, (r) => r, isDataStrategyResults, errorHandler);
  function errorHandler(error, routeId, nextResult) {
    if (nextResult) {
      return Promise.resolve(Object.assign(nextResult.value, {
        [routeId]: { type: "error", result: error }
      }));
    } else {
      let { matches } = args;
      let maxBoundaryIdx = Math.min(Math.max(matches.findIndex((m) => m.route.id === routeId), 0), Math.max(matches.findIndex((m) => m.unstable_shouldCallHandler()), 0));
      let boundaryRouteId = findNearestBoundary(matches, matches[maxBoundaryIdx].route.id).route.id;
      return Promise.resolve({
        [boundaryRouteId]: { type: "error", result: error }
      });
    }
  }
}
async function runMiddlewarePipeline(args, handler, processResult, isResult, errorHandler) {
  let { matches, request, params, context, unstable_pattern } = args;
  let tuples = matches.flatMap((m) => m.route.middleware ? m.route.middleware.map((fn) => [m.route.id, fn]) : []);
  let result = await callRouteMiddleware({
    request,
    params,
    context,
    unstable_pattern
  }, tuples, handler, processResult, isResult, errorHandler);
  return result;
}
async function callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx = 0) {
  let { request } = args;
  if (request.signal.aborted) {
    throw request.signal.reason ?? new Error(`Request aborted: ${request.method} ${request.url}`);
  }
  let tuple = middlewares[idx];
  if (!tuple) {
    let result = await handler();
    return result;
  }
  let [routeId, middleware] = tuple;
  let nextResult;
  let next = async () => {
    if (nextResult) {
      throw new Error("You may only call `next()` once per middleware");
    }
    try {
      let result = await callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx + 1);
      nextResult = { value: result };
      return nextResult.value;
    } catch (error) {
      nextResult = { value: await errorHandler(error, routeId, nextResult) };
      return nextResult.value;
    }
  };
  try {
    let value = await middleware(args, next);
    let result = value != null ? processResult(value) : undefined;
    if (isResult(result)) {
      return result;
    } else if (nextResult) {
      return result ?? nextResult.value;
    } else {
      nextResult = { value: await next() };
      return nextResult.value;
    }
  } catch (error) {
    let response = await errorHandler(error, routeId, nextResult);
    return response;
  }
}
function getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip) {
  let lazyMiddlewarePromise = loadLazyRouteProperty({
    key: "middleware",
    route: match.route,
    manifest,
    mapRouteProperties: mapRouteProperties2
  });
  let lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties2, lazyRoutePropertiesToSkip);
  return {
    middleware: lazyMiddlewarePromise,
    route: lazyRoutePromises.lazyRoutePromise,
    handler: lazyRoutePromises.lazyHandlerPromise
  };
}
function getDataStrategyMatch(mapRouteProperties2, manifest, request, unstable_pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, unstable_shouldRevalidateArgs = null) {
  let isUsingNewApi = false;
  let _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip);
  return {
    ...match,
    _lazyPromises,
    shouldLoad,
    unstable_shouldRevalidateArgs,
    unstable_shouldCallHandler(defaultShouldRevalidate) {
      isUsingNewApi = true;
      if (!unstable_shouldRevalidateArgs) {
        return shouldLoad;
      }
      if (typeof defaultShouldRevalidate === "boolean") {
        return shouldRevalidateLoader(match, {
          ...unstable_shouldRevalidateArgs,
          defaultShouldRevalidate
        });
      }
      return shouldRevalidateLoader(match, unstable_shouldRevalidateArgs);
    },
    resolve(handlerOverride) {
      let { lazy, loader, middleware } = match.route;
      let callHandler = isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (lazy || loader);
      let isMiddlewareOnlyRoute = middleware && middleware.length > 0 && !loader && !lazy;
      if (callHandler && (isMutationMethod(request.method) || !isMiddlewareOnlyRoute)) {
        return callLoaderOrAction({
          request,
          unstable_pattern,
          match,
          lazyHandlerPromise: _lazyPromises?.handler,
          lazyRoutePromise: _lazyPromises?.route,
          handlerOverride,
          scopedContext
        });
      }
      return Promise.resolve({ type: "data", result: undefined });
    }
  };
}
function getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs = null) {
  return matches.map((match) => {
    if (match.route.id !== targetMatch.route.id) {
      return {
        ...match,
        shouldLoad: false,
        unstable_shouldRevalidateArgs: shouldRevalidateArgs,
        unstable_shouldCallHandler: () => false,
        _lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip),
        resolve: () => Promise.resolve({ type: "data", result: undefined })
      };
    }
    return getDataStrategyMatch(mapRouteProperties2, manifest, request, getRoutePattern(matches.map((m) => m.route.path)), match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
  });
}
async function callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, isStaticHandler) {
  if (matches.some((m) => m._lazyPromises?.middleware)) {
    await Promise.all(matches.map((m) => m._lazyPromises?.middleware));
  }
  let dataStrategyArgs = {
    request,
    unstable_pattern: getRoutePattern(matches.map((m) => m.route.path)),
    params: matches[0].params,
    context: scopedContext,
    matches
  };
  let runClientMiddleware = isStaticHandler ? () => {
    throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
  } : (cb) => {
    let typedDataStrategyArgs = dataStrategyArgs;
    return runClientMiddlewarePipeline(typedDataStrategyArgs, () => {
      return cb({
        ...typedDataStrategyArgs,
        fetcherKey,
        runClientMiddleware: () => {
          throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
        }
      });
    });
  };
  let results = await dataStrategyImpl({
    ...dataStrategyArgs,
    fetcherKey,
    runClientMiddleware
  });
  try {
    await Promise.all(matches.flatMap((m) => [
      m._lazyPromises?.handler,
      m._lazyPromises?.route
    ]));
  } catch (e) {}
  return results;
}
async function callLoaderOrAction({
  request,
  unstable_pattern,
  match,
  lazyHandlerPromise,
  lazyRoutePromise,
  handlerOverride,
  scopedContext
}) {
  let result;
  let onReject;
  let isAction = isMutationMethod(request.method);
  let type = isAction ? "action" : "loader";
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`));
      }
      return handler({
        request,
        unstable_pattern,
        params: match.params,
        context: scopedContext
      }, ...ctx !== undefined ? [ctx] : []);
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
        return { type: "data", result: val };
      } catch (e) {
        return { type: "error", result: e };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = isAction ? match.route.action : match.route.loader;
    if (lazyHandlerPromise || lazyRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          lazyHandlerPromise,
          lazyRoutePromise
        ]);
        if (handlerError !== undefined) {
          throw handlerError;
        }
        result = value;
      } else {
        await lazyHandlerPromise;
        let handler2 = isAction ? match.route.action : match.route.loader;
        if (handler2) {
          [result] = await Promise.all([runHandler(handler2), lazyRoutePromise]);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return { type: "data", result: undefined };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
  } catch (e) {
    return { type: "error", result: e };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function parseResponseBody(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.body == null ? null : response.json();
  }
  return response.text();
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let { result, type } = dataStrategyResult;
  if (isResponse(result)) {
    let data2;
    try {
      data2 = await parseResponseBody(result);
    } catch (e) {
      return { type: "error", error: e };
    }
    if (type === "error") {
      return {
        type: "error",
        error: new ErrorResponseImpl(result.status, result.statusText, data2),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: "data",
      data: data2,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === "error") {
    if (isDataWithResponseInit(result)) {
      if (result.data instanceof Error) {
        return {
          type: "error",
          error: result.data,
          statusCode: result.init?.status,
          headers: result.init?.headers ? new Headers(result.init.headers) : undefined
        };
      }
      return {
        type: "error",
        error: new ErrorResponseImpl(result.init?.status || 500, undefined, result.data),
        statusCode: isRouteErrorResponse(result) ? result.status : undefined,
        headers: result.init?.headers ? new Headers(result.init.headers) : undefined
      };
    }
    return {
      type: "error",
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : undefined
    };
  }
  if (isDataWithResponseInit(result)) {
    return {
      type: "data",
      data: result.data,
      statusCode: result.init?.status,
      headers: result.init?.headers ? new Headers(result.init.headers) : undefined
    };
  }
  return { type: "data", data: result };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
  let location2 = response.headers.get("Location");
  invariant(location2, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!isAbsoluteUrl(location2)) {
    let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
    location2 = normalizeTo(new URL(request.url), trimmedMatches, basename, location2);
    response.headers.set("Location", location2);
  }
  return response;
}
function normalizeRedirectLocation(location2, currentUrl, basename) {
  if (isAbsoluteUrl(location2)) {
    let normalizedLocation = location2;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location2;
}
function createClientSideRequest(history, location2, signal, submission) {
  let url = history.createURL(stripHashFromPath(location2)).toString();
  let init = { signal };
  if (submission && isMutationMethod(submission.formMethod)) {
    let { formMethod, formEncType } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({ "Content-Type": formEncType });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams;
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData;
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== undefined) {
        error = pendingError;
        pendingError = undefined;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      if (!isStaticHandler) {
        loaderData[id] = ResetLoaderDataSymbol;
      }
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      loaderData[id] = result.data;
      if (result.statusCode && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError !== undefined && pendingActionResult) {
    errors = { [pendingActionResult[0]]: pendingError };
    if (pendingActionResult[2]) {
      loaderData[pendingActionResult[2]] = undefined;
    }
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
  let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult);
  revalidatingFetchers.filter((f) => !f.matches || f.matches.some((m) => m.shouldLoad)).forEach((rf) => {
    let { key, match, controller } = rf;
    if (controller && controller.signal.aborted) {
      return;
    }
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = {
          ...errors,
          [boundaryMatch.route.id]: result.error
        };
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return { loaderData, errors };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
    merged[k] = v;
    return merged;
  }, {});
  for (let match of matches) {
    let id = match.route.id;
    if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: `__shim-error-route__`
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }
    ],
    route
  };
}
function getInternalRouterError(status, {
  pathname,
  routeId,
  method,
  type,
  message
} = {}) {
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = `No route matches URL "${pathname}"`;
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (method) {
      errorMessage = `Invalid request method "${method.toUpperCase()}"`;
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1;i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return { key, result };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath({ ...parsedPath, hash: "" });
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isDataStrategyResults(result) {
  return result != null && typeof result === "object" && Object.entries(result).every(([key, value]) => typeof key === "string" && isDataStrategyResult(value));
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
}
function isRedirectDataStrategyResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
  return result.type === "error";
}
function isRedirectResult(result) {
  return (result && result.type) === "redirect";
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location2) {
  let search = typeof location2 === "string" ? parsePath(location2).search : location2.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let { formMethod, formAction, formEncType, text, formData, json } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location2, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location: location2,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location: location2,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location2, submission) {
  let navigation = {
    state: "submitting",
    location: location2,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data2) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: data2
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data: data2
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data2) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data: data2
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {}
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, `Failed to save applied view transitions in sessionStorage (${error}).`);
    }
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {}
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {}
    };
  });
  return {
    promise,
    resolve,
    reject
  };
}
var DataRouterContext = React.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = React.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var RSCRouterContext = React.createContext(false);
var ViewTransitionContext = React.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = React.createContext(/* @__PURE__ */ new Map);
FetchersContext.displayName = "Fetchers";
var AwaitContext = React.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = React.createContext(null);
NavigationContext.displayName = "Navigation";
var LocationContext = React.createContext(null);
LocationContext.displayName = "Location";
var RouteContext = React.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = React.createContext(null);
RouteErrorContext.displayName = "RouteError";
var ENABLE_DEV_WARNINGS = true;
function useHref(to, { relative } = {}) {
  invariant(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename, navigator } = React2.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return React2.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(useInRouterContext(), `useLocation() may be used only in the context of a <Router> component.`);
  return React2.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React2.useContext(NavigationContext).static;
  if (!isStatic) {
    React2.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = React2.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
  let dataRouterContext = React2.useContext(DataRouterContext);
  let { basename, navigator } = React2.useContext(NavigationContext);
  let { matches } = React2.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = React2.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React2.useCallback((to, options = {}) => {
    warning(activeRef.current, navigateEffectWarning);
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [
    basename,
    navigator,
    routePathnamesJson,
    locationPathname,
    dataRouterContext
  ]);
  return navigate;
}
var OutletContext = React2.createContext(null);
function useOutlet(context) {
  let outlet = React2.useContext(RouteContext).outlet;
  return React2.useMemo(() => outlet && /* @__PURE__ */ React2.createElement(OutletContext.Provider, { value: context }, outlet), [outlet, context]);
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = React2.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return React2.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutesImpl(routes, locationArg, dataRouterState, unstable_onError, future) {
  invariant(useInRouterContext(), `useRoutes() may be used only in the context of a <Router> component.`);
  let { navigator } = React2.useContext(NavigationContext);
  let { matches: parentMatches } = React2.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (ENABLE_DEV_WARNINGS) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`);
  }
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  if (ENABLE_DEV_WARNINGS) {
    warning(parentRoute || matches != null, `No routes matched location "${location2.pathname}${location2.search}${location2.hash}" `);
    warning(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, `Matched leaf route at location "${location2.pathname}${location2.search}${location2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, unstable_onError, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ React2.createElement(LocationContext.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...location2
        },
        navigationType: "POP"
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  if (ENABLE_DEV_WARNINGS) {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends React2.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== undefined ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.unstable_onError) {
      this.props.unstable_onError(error, errorInfo);
    } else {
      console.error("React Router caught the following error during render", error);
    }
  }
  render() {
    return this.state.error !== undefined ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = React2.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, unstable_onError = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && errors?.[m.route.id] !== undefined);
    invariant(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0;i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === undefined);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : undefined;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ React2.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: { outlet: null, matches: matches2, isDataRoute: true },
      unstable_onError
    }) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = React2.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React2.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = React2.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(thisRoute.route.id, `${hookName} can only be used on routes that contain a unique "id"`);
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId("useRouteId");
}
function useNavigation() {
  let state = useDataRouterState("useNavigation");
  return state.navigation;
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState("useMatches");
  return React2.useMemo(() => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)), [matches, loaderData]);
}
function useRouteError() {
  let error = React2.useContext(RouteErrorContext);
  let state = useDataRouterState("useRouteError");
  let routeId = useCurrentRouteId("useRouteError");
  if (error !== undefined) {
    return error;
  }
  return state.errors?.[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext("useNavigate");
  let id = useCurrentRouteId("useNavigate");
  let activeRef = React2.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React2.useCallback(async (to, options = {}) => {
    warning(activeRef.current, navigateEffectWarning);
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      await router.navigate(to, { fromRouteId: id, ...options });
    }
  }, [router, id]);
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
var alreadyWarned2 = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}
function mapRouteProperties(route) {
  let updates = {
    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (ENABLE_DEV_WARNINGS) {
      if (route.element) {
        warning(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
      }
    }
    Object.assign(updates, {
      element: React3.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.HydrateFallback) {
    if (ENABLE_DEV_WARNINGS) {
      if (route.hydrateFallbackElement) {
        warning(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: React3.createElement(route.HydrateFallback),
      HydrateFallback: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (ENABLE_DEV_WARNINGS) {
      if (route.errorElement) {
        warning(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
      }
    }
    Object.assign(updates, {
      errorElement: React3.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
var hydrationRouteProperties = [
  "HydrateFallback",
  "hydrateFallbackElement"
];
var Deferred = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider({
  router,
  flushSync: reactDomFlushSyncImpl,
  unstable_onError
}) {
  let [state, setStateImpl] = React3.useState(router.state);
  let [pendingState, setPendingState] = React3.useState();
  let [vtContext, setVtContext] = React3.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = React3.useState();
  let [transition, setTransition] = React3.useState();
  let [interruption, setInterruption] = React3.useState();
  let fetcherData = React3.useRef(/* @__PURE__ */ new Map);
  let logErrorsAndSetState = React3.useCallback((newState) => {
    setStateImpl((prevState) => {
      if (newState.errors && unstable_onError) {
        Object.entries(newState.errors).forEach(([routeId, error]) => {
          if (prevState.errors?.[routeId] !== error) {
            unstable_onError(error);
          }
        });
      }
      return newState;
    });
  }, [unstable_onError]);
  let setState = React3.useCallback((newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== undefined) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    deletedFetchers.forEach((key) => fetcherData.current.delete(key));
    warnOnce(flushSync === false || reactDomFlushSyncImpl != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
    let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
    warnOnce(viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
    if (!viewTransitionOpts || !isViewTransitionAvailable) {
      if (reactDomFlushSyncImpl && flushSync) {
        reactDomFlushSyncImpl(() => logErrorsAndSetState(newState));
      } else {
        React3.startTransition(() => logErrorsAndSetState(newState));
      }
      return;
    }
    if (reactDomFlushSyncImpl && flushSync) {
      reactDomFlushSyncImpl(() => {
        if (transition) {
          renderDfd && renderDfd.resolve();
          transition.skipTransition();
        }
        setVtContext({
          isTransitioning: true,
          flushSync: true,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      });
      let t = router.window.document.startViewTransition(() => {
        reactDomFlushSyncImpl(() => logErrorsAndSetState(newState));
      });
      t.finished.finally(() => {
        reactDomFlushSyncImpl(() => {
          setRenderDfd(undefined);
          setTransition(undefined);
          setPendingState(undefined);
          setVtContext({ isTransitioning: false });
        });
      });
      reactDomFlushSyncImpl(() => setTransition(t));
      return;
    }
    if (transition) {
      renderDfd && renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [
    router.window,
    reactDomFlushSyncImpl,
    transition,
    renderDfd,
    logErrorsAndSetState
  ]);
  React3.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  React3.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred);
    }
  }, [vtContext]);
  React3.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router.window.document.startViewTransition(async () => {
        React3.startTransition(() => logErrorsAndSetState(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({ isTransitioning: false });
      });
      setTransition(transition2);
    }
  }, [pendingState, renderDfd, router.window, logErrorsAndSetState]);
  React3.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  React3.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator = React3.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: (n) => router.navigate(n),
      push: (to, state2, opts) => router.navigate(to, {
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      }),
      replace: (to, state2, opts) => router.navigate(to, {
        replace: true,
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = React3.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename,
    unstable_onError
  }), [router, navigator, basename, unstable_onError]);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React3.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ React3.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ React3.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ React3.createElement(Router, {
    basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator
  }, /* @__PURE__ */ React3.createElement(MemoizedDataRoutes, {
    routes: router.routes,
    future: router.future,
    state,
    unstable_onError
  })))))), null);
}
var MemoizedDataRoutes = React3.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state,
  unstable_onError
}) {
  return useRoutesImpl(routes, undefined, state, unstable_onError, future);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator,
  static: staticProp = false
}) {
  invariant(!useInRouterContext(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React3.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: {}
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React3.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"), 0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\x00");
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
function singleFetchUrl(reqUrl, basename, extension) {
  let url = typeof reqUrl === "string" ? new URL(reqUrl, typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = `_root.${extension}`;
  } else if (basename && stripBasename(url.pathname, basename) === "/") {
    url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
  }
  return url;
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(`Error loading route module \`${route.module}\`, reloading page...`);
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && undefined) {}
    window.location.reload();
    return new Promise(() => {});
  }
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(matches.map(async (match) => {
    let route = manifest.routes[match.route.id];
    if (route) {
      let mod = await loadRouteModule(route, routeModules);
      return mod.links ? mod.links() : [];
    }
    return [];
  }));
  return dedupeLinkDescriptors(links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }));
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    return currentMatches[index].pathname !== match.pathname || currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"];
  };
  if (mode === "assets") {
    return nextMatches.filter((match, index) => isNew(match, index) || matchPathChanged(match, index));
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    if (!route)
      return [];
    let hrefs = [route.module];
    if (route.clientActionModule) {
      hrefs = hrefs.concat(route.clientActionModule);
    }
    if (route.clientLoaderModule) {
      hrefs = hrefs.concat(route.clientLoaderModule);
    }
    if (includeHydrateFallback && route.hydrateFallbackModule) {
      hrefs = hrefs.concat(route.hydrateFallbackModule);
    }
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set;
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function useDataRouterContext2() {
  let context = React8.useContext(DataRouterContext);
  invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element");
  return context;
}
function useDataRouterStateContext() {
  let context = React8.useContext(DataRouterStateContext);
  invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
  return context;
}
var FrameworkContext = React8.createContext(undefined);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = React8.useContext(FrameworkContext);
  invariant2(context, "You must render this element inside a <HydratedRouter> element");
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = React8.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = React8.useRef(null);
  React8.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current)
        observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  React8.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({ page, ...linkProps }) {
  let { router } = useDataRouterContext2();
  let matches = React8.useMemo(() => matchRoutes(router.routes, page, router.basename), [router.routes, page, router.basename]);
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
  React8.useEffect(() => {
    let interrupted = false;
    getKeyedPrefetchLinks(matches, manifest, routeModules).then((links) => {
      if (!interrupted) {
        setKeyedPrefetchLinks(links);
      }
    });
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = React8.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "data"), [page, nextMatches, matches, manifest, location2]);
  let newMatchesForAssets = React8.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "assets"), [page, nextMatches, matches, manifest, location2]);
  let dataHrefs = React8.useMemo(() => {
    if (page === location2.pathname + location2.search + location2.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set;
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page, basename, "data");
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set("_routes", nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(","));
    }
    return [url.pathname + url.search];
  }, [
    basename,
    loaderData,
    location2,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = React8.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => /* @__PURE__ */ React8.createElement("link", { key, nonce: linkProps.nonce, ...link })));
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.9.5";
  }
} catch (e) {}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    getContext: opts?.getContext,
    future: opts?.future,
    history: createBrowserHistory({ window: opts?.window }),
    hydrationData: opts?.hydrationData || parseHydrationData(),
    routes,
    mapRouteProperties,
    hydrationRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
    window: opts?.window,
    unstable_instrumentations: opts?.unstable_instrumentations
  }).initialize();
}
function parseHydrationData() {
  let state = window?.__staticRouterHydrationData;
  if (state && state.errors) {
    state = {
      ...state,
      errors: deserializeErrors(state.errors)
    };
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e) {}
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function HistoryRouter({
  basename,
  children,
  history
}) {
  let [state, setStateImpl] = React10.useState({
    action: history.action,
    location: history.location
  });
  let setState = React10.useCallback((newState) => {
    React10.startTransition(() => setStateImpl(newState));
  }, [setStateImpl]);
  React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ React10.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = React10.forwardRef(function LinkWithRef({
  onClick,
  discover = "render",
  prefetch = "none",
  relative,
  reloadDocument,
  replace: replace2,
  state,
  target,
  to,
  preventScrollReset,
  viewTransition,
  ...rest
}, forwardedRef) {
  let { basename } = React10.useContext(NavigationContext);
  let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && isAbsolute) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        warning(false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
      }
    }
  }
  let href = useHref(to, { relative });
  let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(prefetch, rest);
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  let link = /* @__PURE__ */ React10.createElement("a", {
    ...rest,
    ...prefetchHandlers,
    href: absoluteHref || href,
    onClick: isExternal || reloadDocument ? onClick : handleClick,
    ref: mergeRefs(forwardedRef, prefetchRef),
    target,
    "data-discover": !isAbsolute && discover === "render" ? "true" : undefined
  });
  return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
});
Link.displayName = "Link";
var NavLink = React10.forwardRef(function NavLinkWithRef({
  "aria-current": ariaCurrentProp = "page",
  caseSensitive = false,
  className: classNameProp = "",
  end = false,
  style: styleProp,
  to,
  viewTransition,
  children,
  ...rest
}, ref) {
  let path = useResolvedPath(to, { relative: rest.relative });
  let location2 = useLocation();
  let routerState = React10.useContext(DataRouterStateContext);
  let { navigator, basename } = React10.useContext(NavigationContext);
  let isTransitioning = routerState != null && useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location2.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    className = [
      classNameProp,
      isActive ? "active" : null,
      isPending ? "pending" : null,
      isTransitioning ? "transitioning" : null
    ].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /* @__PURE__ */ React10.createElement(Link, {
    ...rest,
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to,
    viewTransition
  }, typeof children === "function" ? children(renderProps) : children);
});
NavLink.displayName = "NavLink";
var Form = React10.forwardRef(({
  discover = "render",
  fetcherKey,
  navigate,
  reloadDocument,
  replace: replace2,
  state,
  method = defaultMethod,
  action,
  onSubmit,
  relative,
  preventScrollReset,
  viewTransition,
  ...props
}, forwardedRef) => {
  let submit = useSubmit();
  let formAction = useFormAction(action, { relative });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
  let submitHandler = (event) => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented)
      return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = submitter?.getAttribute("formmethod") || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace: replace2,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /* @__PURE__ */ React10.createElement("form", {
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler,
    ...props,
    "data-discover": !isAbsolute && discover === "render" ? "true" : undefined
  });
});
Form.displayName = "Form";
function ScrollRestoration({
  getKey,
  storageKey,
  ...props
}) {
  let remixContext = React10.useContext(FrameworkContext);
  let { basename } = React10.useContext(NavigationContext);
  let location2 = useLocation();
  let matches = useMatches();
  useScrollRestoration({ getKey, storageKey });
  let ssrKey = React10.useMemo(() => {
    if (!remixContext || !getKey)
      return null;
    let userKey = getScrollRestorationKey(location2, matches, basename, getKey);
    return userKey !== location2.key ? userKey : null;
  }, []);
  if (!remixContext || remixContext.isSpaMode) {
    return null;
  }
  let restoreScroll = ((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  }).toString();
  return /* @__PURE__ */ React10.createElement("script", {
    ...props,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)}, ${JSON.stringify(ssrKey)})`
    }
  });
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = React10.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useDataRouterState2(hookName) {
  let state = React10.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError2(hookName));
  return state;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to, { relative });
  return React10.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== undefined ? replaceProp : createPath(location2) === createPath(path);
      navigate(to, {
        replace: replace2,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [
    location2,
    navigate,
    path,
    replaceProp,
    state,
    target,
    to,
    preventScrollReset,
    relative,
    viewTransition
  ]);
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3("useSubmit");
  let { basename } = React10.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return React10.useCallback(async (target, options = {}) => {
    let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      await router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      await router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
function useFormAction(action, { relative } = {}) {
  let { basename } = React10.useContext(NavigationContext);
  let routeContext = React10.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location2 = useLocation();
  if (action == null) {
    path.search = location2.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location2, matches, basename, getKey) {
  let key = null;
  if (getKey) {
    if (basename !== "/") {
      key = getKey({
        ...location2,
        pathname: stripBasename(location2.pathname, basename) || location2.pathname
      }, matches);
    } else {
      key = getKey(location2, matches);
    }
  }
  if (key == null) {
    key = location2.key;
  }
  return key;
}
function useScrollRestoration({
  getKey,
  storageKey
} = {}) {
  let { router } = useDataRouterContext3("useScrollRestoration");
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState2("useScrollRestoration");
  let { basename } = React10.useContext(NavigationContext);
  let location2 = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  React10.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(React10.useCallback(() => {
    if (navigation.state === "idle") {
      let key = getScrollRestorationKey(location2, matches, basename, getKey);
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
      warning(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
    }
    window.history.scrollRestoration = "auto";
  }, [navigation.state, getKey, basename, location2, matches, storageKey]));
  if (typeof document !== "undefined") {
    React10.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {}
    }, [storageKey]);
    React10.useLayoutEffect(() => {
      let disableScrollRestoration = router?.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey ? (location22, matches2) => getScrollRestorationKey(location22, matches2, basename, getKey) : undefined);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    React10.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      try {
        if (location2.hash) {
          let el = document.getElementById(decodeURIComponent(location2.hash.slice(1)));
          if (el) {
            el.scrollIntoView();
            return;
          }
        }
      } catch {
        warning(false, `"${location2.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location2, restoreScrollPosition, preventScrollReset]);
  }
}
function usePageHide(callback, options) {
  let { capture } = options || {};
  React10.useEffect(() => {
    let opts = capture != null ? { capture } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function useViewTransitionState(to, { relative } = {}) {
  let vtContext = React10.useContext(ViewTransitionContext);
  invariant(vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename } = useDataRouterContext3("useViewTransitionState");
  let path = useResolvedPath(to, { relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

// node_modules/react-router/dist/development/index.mjs
"use client";

// node_modules/react-router/dist/development/dom-export.mjs
var React12 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var React22 = __toESM(require_react(), 1);
var React32 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);
"use client";
function RouterProvider2(props) {
  return /* @__PURE__ */ React12.createElement(RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
}
var renderedRoutesContext = createContext4();
export { useLocation, Outlet, createBrowserRouter, Link, RouterProvider2 };

//# debugId=2FEE2F31367157ED64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9kaXN0L2RldmVsb3BtZW50L2NodW5rLVVJR0RTV1BILm1qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZGlzdC9kZXZlbG9wbWVudC9kb20tZXhwb3J0Lm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvKipcbiAqIHJlYWN0LXJvdXRlciB2Ny45LjVcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIF9fdHlwZUVycm9yID0gKG1zZykgPT4ge1xuICB0aHJvdyBUeXBlRXJyb3IobXNnKTtcbn07XG52YXIgX19hY2Nlc3NDaGVjayA9IChvYmosIG1lbWJlciwgbXNnKSA9PiBtZW1iZXIuaGFzKG9iaikgfHwgX190eXBlRXJyb3IoXCJDYW5ub3QgXCIgKyBtc2cpO1xudmFyIF9fcHJpdmF0ZUdldCA9IChvYmosIG1lbWJlciwgZ2V0dGVyKSA9PiAoX19hY2Nlc3NDaGVjayhvYmosIG1lbWJlciwgXCJyZWFkIGZyb20gcHJpdmF0ZSBmaWVsZFwiKSwgZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IG1lbWJlci5nZXQob2JqKSk7XG52YXIgX19wcml2YXRlQWRkID0gKG9iaiwgbWVtYmVyLCB2YWx1ZSkgPT4gbWVtYmVyLmhhcyhvYmopID8gX190eXBlRXJyb3IoXCJDYW5ub3QgYWRkIHRoZSBzYW1lIHByaXZhdGUgbWVtYmVyIG1vcmUgdGhhbiBvbmNlXCIpIDogbWVtYmVyIGluc3RhbmNlb2YgV2Vha1NldCA/IG1lbWJlci5hZGQob2JqKSA6IG1lbWJlci5zZXQob2JqLCB2YWx1ZSk7XG5cbi8vIGxpYi9yb3V0ZXIvaGlzdG9yeS50c1xudmFyIEFjdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyAoKEFjdGlvbjIpID0+IHtcbiAgQWN0aW9uMltcIlBvcFwiXSA9IFwiUE9QXCI7XG4gIEFjdGlvbjJbXCJQdXNoXCJdID0gXCJQVVNIXCI7XG4gIEFjdGlvbjJbXCJSZXBsYWNlXCJdID0gXCJSRVBMQUNFXCI7XG4gIHJldHVybiBBY3Rpb24yO1xufSkoQWN0aW9uIHx8IHt9KTtcbnZhciBQb3BTdGF0ZUV2ZW50VHlwZSA9IFwicG9wc3RhdGVcIjtcbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3Rvcnkob3B0aW9ucyA9IHt9KSB7XG4gIGxldCB7IGluaXRpYWxFbnRyaWVzID0gW1wiL1wiXSwgaW5pdGlhbEluZGV4LCB2NUNvbXBhdCA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICBsZXQgZW50cmllcztcbiAgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcChcbiAgICAoZW50cnksIGluZGV4MikgPT4gY3JlYXRlTWVtb3J5TG9jYXRpb24oXG4gICAgICBlbnRyeSxcbiAgICAgIHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIiA/IG51bGwgOiBlbnRyeS5zdGF0ZSxcbiAgICAgIGluZGV4MiA9PT0gMCA/IFwiZGVmYXVsdFwiIDogdm9pZCAwXG4gICAgKVxuICApO1xuICBsZXQgaW5kZXggPSBjbGFtcEluZGV4KFxuICAgIGluaXRpYWxJbmRleCA9PSBudWxsID8gZW50cmllcy5sZW5ndGggLSAxIDogaW5pdGlhbEluZGV4XG4gICk7XG4gIGxldCBhY3Rpb24gPSBcIlBPUFwiIC8qIFBvcCAqLztcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcbiAgZnVuY3Rpb24gY2xhbXBJbmRleChuKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIDApLCBlbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZW50cmllc1tpbmRleF07XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlID0gbnVsbCwga2V5KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXG4gICAgICBlbnRyaWVzID8gZ2V0Q3VycmVudExvY2F0aW9uKCkucGF0aG5hbWUgOiBcIi9cIixcbiAgICAgIHRvLFxuICAgICAgc3RhdGUsXG4gICAgICBrZXlcbiAgICApO1xuICAgIHdhcm5pbmcoXG4gICAgICBsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgPT09IFwiL1wiLFxuICAgICAgYHJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeTogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgdG9cbiAgICAgICl9YFxuICAgICk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYyKHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgfSxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmMixcbiAgICBjcmVhdGVVUkwodG8pIHtcbiAgICAgIHJldHVybiBuZXcgVVJMKGNyZWF0ZUhyZWYyKHRvKSwgXCJodHRwOi8vbG9jYWxob3N0XCIpO1xuICAgIH0sXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIGxldCBwYXRoID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgucGF0aG5hbWUgfHwgXCJcIixcbiAgICAgICAgc2VhcmNoOiBwYXRoLnNlYXJjaCB8fCBcIlwiLFxuICAgICAgICBoYXNoOiBwYXRoLmhhc2ggfHwgXCJcIlxuICAgICAgfTtcbiAgICB9LFxuICAgIHB1c2godG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBcIlBVU0hcIiAvKiBQdXNoICovO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIGVudHJpZXMubGVuZ3RoLCBuZXh0TG9jYXRpb24pO1xuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHsgYWN0aW9uLCBsb2NhdGlvbjogbmV4dExvY2F0aW9uLCBkZWx0YTogMSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBcIlJFUExBQ0VcIiAvKiBSZXBsYWNlICovO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBlbnRyaWVzW2luZGV4XSA9IG5leHRMb2NhdGlvbjtcbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7IGFjdGlvbiwgbG9jYXRpb246IG5leHRMb2NhdGlvbiwgZGVsdGE6IDAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnbyhkZWx0YSkge1xuICAgICAgYWN0aW9uID0gXCJQT1BcIiAvKiBQb3AgKi87XG4gICAgICBsZXQgbmV4dEluZGV4ID0gY2xhbXBJbmRleChpbmRleCArIGRlbHRhKTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBlbnRyaWVzW25leHRJbmRleF07XG4gICAgICBpbmRleCA9IG5leHRJbmRleDtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7IGFjdGlvbiwgbG9jYXRpb246IG5leHRMb2NhdGlvbiwgZGVsdGEgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zID0ge30pIHtcbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckxvY2F0aW9uKHdpbmRvdzIsIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoLCBoYXNoIH0gPSB3aW5kb3cyLmxvY2F0aW9uO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcbiAgICAgIFwiXCIsXG4gICAgICB7IHBhdGhuYW1lLCBzZWFyY2gsIGhhc2ggfSxcbiAgICAgIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLFxuICAgICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIlxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckhyZWYod2luZG93MiwgdG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTtcbiAgfVxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KFxuICAgIGNyZWF0ZUJyb3dzZXJMb2NhdGlvbixcbiAgICBjcmVhdGVCcm93c2VySHJlZixcbiAgICBudWxsLFxuICAgIG9wdGlvbnNcbiAgKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMgPSB7fSkge1xuICBmdW5jdGlvbiBjcmVhdGVIYXNoTG9jYXRpb24od2luZG93MiwgZ2xvYmFsSGlzdG9yeSkge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgICAgc2VhcmNoID0gXCJcIixcbiAgICAgIGhhc2ggPSBcIlwiXG4gICAgfSA9IHBhcnNlUGF0aCh3aW5kb3cyLmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKTtcbiAgICBpZiAoIXBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpICYmICFwYXRobmFtZS5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIiArIHBhdGhuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXG4gICAgICBcIlwiLFxuICAgICAgeyBwYXRobmFtZSwgc2VhcmNoLCBoYXNoIH0sXG4gICAgICAvLyBzdGF0ZSBkZWZhdWx0cyB0byBgbnVsbGAgYmVjYXVzZSBgd2luZG93Lmhpc3Rvcnkuc3RhdGVgIGRvZXNcbiAgICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCxcbiAgICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS5rZXkgfHwgXCJkZWZhdWx0XCJcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hIcmVmKHdpbmRvdzIsIHRvKSB7XG4gICAgbGV0IGJhc2UgPSB3aW5kb3cyLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpO1xuICAgIGxldCBocmVmID0gXCJcIjtcbiAgICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgIGxldCB1cmwgPSB3aW5kb3cyLmxvY2F0aW9uLmhyZWY7XG4gICAgICBsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xuICAgICAgaHJlZiA9IGhhc2hJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGhyZWYgKyBcIiNcIiArICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pKTtcbiAgfVxuICBmdW5jdGlvbiB2YWxpZGF0ZUhhc2hMb2NhdGlvbihsb2NhdGlvbiwgdG8pIHtcbiAgICB3YXJuaW5nKFxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIixcbiAgICAgIGByZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgdG9cbiAgICAgICl9KWBcbiAgICApO1xuICB9XG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoXG4gICAgY3JlYXRlSGFzaExvY2F0aW9uLFxuICAgIGNyZWF0ZUhhc2hIcmVmLFxuICAgIHZhbGlkYXRlSGFzaExvY2F0aW9uLFxuICAgIG9wdGlvbnNcbiAgKTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDEwKTtcbn1cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB1c3I6IGxvY2F0aW9uLnN0YXRlLFxuICAgIGtleTogbG9jYXRpb24ua2V5LFxuICAgIGlkeDogaW5kZXhcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGN1cnJlbnQsIHRvLCBzdGF0ZSA9IG51bGwsIGtleSkge1xuICBsZXQgbG9jYXRpb24gPSB7XG4gICAgcGF0aG5hbWU6IHR5cGVvZiBjdXJyZW50ID09PSBcInN0cmluZ1wiID8gY3VycmVudCA6IGN1cnJlbnQucGF0aG5hbWUsXG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGhhc2g6IFwiXCIsXG4gICAgLi4udHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvLFxuICAgIHN0YXRlLFxuICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgY2xlYW5lZCB1cC4gIHB1c2gvcmVwbGFjZSBzaG91bGQgcHJvYmFibHkganVzdCB0YWtlXG4gICAgLy8gZnVsbCBMb2NhdGlvbnMgbm93IGFuZCBhdm9pZCB0aGUgbmVlZCB0byBydW4gdGhyb3VnaCB0aGlzIGZsb3cgYXQgYWxsXG4gICAgLy8gQnV0IHRoYXQncyBhIHByZXR0eSBiaWcgcmVmYWN0b3IgdG8gdGhlIGN1cnJlbnQgdGVzdCBzdWl0ZSBzbyBnb2luZyB0b1xuICAgIC8vIGtlZXAgYXMgaXMgZm9yIHRoZSB0aW1lIGJlaW5nIGFuZCBqdXN0IGxldCBhbnkgaW5jb21pbmcga2V5cyB0YWtlIHByZWNlZGVuY2VcbiAgICBrZXk6IHRvICYmIHRvLmtleSB8fCBrZXkgfHwgY3JlYXRlS2V5KClcbiAgfTtcbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0aCh7XG4gIHBhdGhuYW1lID0gXCIvXCIsXG4gIHNlYXJjaCA9IFwiXCIsXG4gIGhhc2ggPSBcIlwiXG59KSB7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSBcIj9cIilcbiAgICBwYXRobmFtZSArPSBzZWFyY2guY2hhckF0KDApID09PSBcIj9cIiA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuICBpZiAoaGFzaCAmJiBoYXNoICE9PSBcIiNcIilcbiAgICBwYXRobmFtZSArPSBoYXNoLmNoYXJBdCgwKSA9PT0gXCIjXCIgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aG5hbWU7XG59XG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHt9O1xuICBpZiAocGF0aCkge1xuICAgIGxldCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpO1xuICAgIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5oYXNoID0gcGF0aC5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICBsZXQgc2VhcmNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChzZWFyY2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLnNlYXJjaCA9IHBhdGguc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gICAgfVxuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXJzZWRQYXRoLnBhdGhuYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFBhdGg7XG59XG5mdW5jdGlvbiBnZXRVcmxCYXNlZEhpc3RvcnkoZ2V0TG9jYXRpb24sIGNyZWF0ZUhyZWYyLCB2YWxpZGF0ZUxvY2F0aW9uLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHsgd2luZG93OiB3aW5kb3cyID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsIHY1Q29tcGF0ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gIGxldCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Mi5oaXN0b3J5O1xuICBsZXQgYWN0aW9uID0gXCJQT1BcIiAvKiBQb3AgKi87XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG4gIGxldCBpbmRleCA9IGdldEluZGV4KCk7XG4gIGlmIChpbmRleCA9PSBudWxsKSB7XG4gICAgaW5kZXggPSAwO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHsgLi4uZ2xvYmFsSGlzdG9yeS5zdGF0ZSwgaWR4OiBpbmRleCB9LCBcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRJbmRleCgpIHtcbiAgICBsZXQgc3RhdGUgPSBnbG9iYWxIaXN0b3J5LnN0YXRlIHx8IHsgaWR4OiBudWxsIH07XG4gICAgcmV0dXJuIHN0YXRlLmlkeDtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVQb3AoKSB7XG4gICAgYWN0aW9uID0gXCJQT1BcIiAvKiBQb3AgKi87XG4gICAgbGV0IG5leHRJbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGRlbHRhID0gbmV4dEluZGV4ID09IG51bGwgPyBudWxsIDogbmV4dEluZGV4IC0gaW5kZXg7XG4gICAgaW5kZXggPSBuZXh0SW5kZXg7XG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7IGFjdGlvbiwgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sIGRlbHRhIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdXNoKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IFwiUFVTSFwiIC8qIFB1c2ggKi87XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKSArIDE7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiBlcnJvci5uYW1lID09PSBcIkRhdGFDbG9uZUVycm9yXCIpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICB3aW5kb3cyLmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHsgYWN0aW9uLCBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbiwgZGVsdGE6IDEgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2UyKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IFwiUkVQTEFDRVwiIC8qIFJlcGxhY2UgKi87XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKTtcbiAgICBsZXQgaGlzdG9yeVN0YXRlID0gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiLCB1cmwpO1xuICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoeyBhY3Rpb24sIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLCBkZWx0YTogMCB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVVJMKHRvKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJyb3dzZXJVUkxJbXBsKHRvKTtcbiAgfVxuICBsZXQgaGlzdG9yeSA9IHtcbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRMb2NhdGlvbih3aW5kb3cyLCBnbG9iYWxIaXN0b3J5KTtcbiAgICB9LFxuICAgIGxpc3Rlbihmbikge1xuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgaGlzdG9yeSBvbmx5IGFjY2VwdHMgb25lIGFjdGl2ZSBsaXN0ZW5lclwiKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdzIuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgaGFuZGxlUG9wKTtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cyLnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIGhhbmRsZVBvcCk7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVIcmVmKHRvKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSHJlZjIod2luZG93MiwgdG8pO1xuICAgIH0sXG4gICAgY3JlYXRlVVJMLFxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICBsZXQgdXJsID0gY3JlYXRlVVJMKHRvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2hcbiAgICAgIH07XG4gICAgfSxcbiAgICBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UyLFxuICAgIGdvKG4pIHtcbiAgICAgIHJldHVybiBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VyVVJMSW1wbCh0bywgaXNBYnNvbHV0ZSA9IGZhbHNlKSB7XG4gIGxldCBiYXNlID0gXCJodHRwOi8vbG9jYWxob3N0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgYmFzZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT09IFwibnVsbFwiID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB9XG4gIGludmFyaWFudChiYXNlLCBcIk5vIHdpbmRvdy5sb2NhdGlvbi4ob3JpZ2lufGhyZWYpIGF2YWlsYWJsZSB0byBjcmVhdGUgVVJMXCIpO1xuICBsZXQgaHJlZiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIGhyZWYgPSBocmVmLnJlcGxhY2UoLyAkLywgXCIlMjBcIik7XG4gIGlmICghaXNBYnNvbHV0ZSAmJiBocmVmLnN0YXJ0c1dpdGgoXCIvL1wiKSkge1xuICAgIGhyZWYgPSBiYXNlICsgaHJlZjtcbiAgfVxuICByZXR1cm4gbmV3IFVSTChocmVmLCBiYXNlKTtcbn1cblxuLy8gbGliL3JvdXRlci91dGlscy50c1xuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHsgZGVmYXVsdFZhbHVlIH07XG59XG52YXIgX21hcDtcbnZhciBSb3V0ZXJDb250ZXh0UHJvdmlkZXIgPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYFJvdXRlckNvbnRleHRQcm92aWRlcmAgaW5zdGFuY2VcbiAgICogQHBhcmFtIGluaXQgQW4gb3B0aW9uYWwgaW5pdGlhbCBjb250ZXh0IG1hcCB0byBwb3B1bGF0ZSB0aGUgcHJvdmlkZXIgd2l0aFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5pdCkge1xuICAgIF9fcHJpdmF0ZUFkZCh0aGlzLCBfbWFwLCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICBpZiAoaW5pdCkge1xuICAgICAgZm9yIChsZXQgW2NvbnRleHQsIHZhbHVlXSBvZiBpbml0KSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFjY2VzcyBhIHZhbHVlIGZyb20gdGhlIGNvbnRleHQuIElmIG5vIHZhbHVlIGhhcyBiZWVuIHNldCBmb3IgdGhlIGNvbnRleHQsXG4gICAqIGl0IHdpbGwgcmV0dXJuIHRoZSBjb250ZXh0J3MgYGRlZmF1bHRWYWx1ZWAgaWYgcHJvdmlkZWQsIG9yIHRocm93IGFuIGVycm9yXG4gICAqIGlmIG5vIGBkZWZhdWx0VmFsdWVgIHdhcyBzZXQuXG4gICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGdldCB0aGUgdmFsdWUgZm9yXG4gICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBmb3IgdGhlIGNvbnRleHQsIG9yIHRoZSBjb250ZXh0J3MgYGRlZmF1bHRWYWx1ZWAgaWYgbm9cbiAgICogdmFsdWUgd2FzIHNldFxuICAgKi9cbiAgZ2V0KGNvbnRleHQpIHtcbiAgICBpZiAoX19wcml2YXRlR2V0KHRoaXMsIF9tYXApLmhhcyhjb250ZXh0KSkge1xuICAgICAgcmV0dXJuIF9fcHJpdmF0ZUdldCh0aGlzLCBfbWFwKS5nZXQoY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChjb250ZXh0LmRlZmF1bHRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHZhbHVlIGZvdW5kIGZvciBjb250ZXh0XCIpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgYSB2YWx1ZSBmb3IgdGhlIGNvbnRleHQuIElmIHRoZSBjb250ZXh0IGFscmVhZHkgaGFzIGEgdmFsdWUgc2V0LCB0aGlzXG4gICAqIHdpbGwgb3ZlcndyaXRlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB0byBzZXQgdGhlIHZhbHVlIGZvclxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhlIGNvbnRleHRcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzZXQoY29udGV4dCwgdmFsdWUpIHtcbiAgICBfX3ByaXZhdGVHZXQodGhpcywgX21hcCkuc2V0KGNvbnRleHQsIHZhbHVlKTtcbiAgfVxufTtcbl9tYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHVuc3VwcG9ydGVkTGF6eVJvdXRlT2JqZWN0S2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgXCJsYXp5XCIsXG4gIFwiY2FzZVNlbnNpdGl2ZVwiLFxuICBcInBhdGhcIixcbiAgXCJpZFwiLFxuICBcImluZGV4XCIsXG4gIFwiY2hpbGRyZW5cIlxuXSk7XG5mdW5jdGlvbiBpc1Vuc3VwcG9ydGVkTGF6eVJvdXRlT2JqZWN0S2V5KGtleSkge1xuICByZXR1cm4gdW5zdXBwb3J0ZWRMYXp5Um91dGVPYmplY3RLZXlzLmhhcyhcbiAgICBrZXlcbiAgKTtcbn1cbnZhciB1bnN1cHBvcnRlZExhenlSb3V0ZUZ1bmN0aW9uS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgXCJsYXp5XCIsXG4gIFwiY2FzZVNlbnNpdGl2ZVwiLFxuICBcInBhdGhcIixcbiAgXCJpZFwiLFxuICBcImluZGV4XCIsXG4gIFwibWlkZGxld2FyZVwiLFxuICBcImNoaWxkcmVuXCJcbl0pO1xuZnVuY3Rpb24gaXNVbnN1cHBvcnRlZExhenlSb3V0ZUZ1bmN0aW9uS2V5KGtleSkge1xuICByZXR1cm4gdW5zdXBwb3J0ZWRMYXp5Um91dGVGdW5jdGlvbktleXMuaGFzKFxuICAgIGtleVxuICApO1xufVxuZnVuY3Rpb24gaXNJbmRleFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5pbmRleCA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGVzLCBtYXBSb3V0ZVByb3BlcnRpZXMyLCBwYXJlbnRQYXRoID0gW10sIG1hbmlmZXN0ID0ge30sIGFsbG93SW5QbGFjZU11dGF0aW9ucyA9IGZhbHNlKSB7XG4gIHJldHVybiByb3V0ZXMubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgU3RyaW5nKGluZGV4KV07XG4gICAgbGV0IGlkID0gdHlwZW9mIHJvdXRlLmlkID09PSBcInN0cmluZ1wiID8gcm91dGUuaWQgOiB0cmVlUGF0aC5qb2luKFwiLVwiKTtcbiAgICBpbnZhcmlhbnQoXG4gICAgICByb3V0ZS5pbmRleCAhPT0gdHJ1ZSB8fCAhcm91dGUuY2hpbGRyZW4sXG4gICAgICBgQ2Fubm90IHNwZWNpZnkgY2hpbGRyZW4gb24gYW4gaW5kZXggcm91dGVgXG4gICAgKTtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBhbGxvd0luUGxhY2VNdXRhdGlvbnMgfHwgIW1hbmlmZXN0W2lkXSxcbiAgICAgIGBGb3VuZCBhIHJvdXRlIGlkIGNvbGxpc2lvbiBvbiBpZCBcIiR7aWR9XCIuICBSb3V0ZSBpZCdzIG11c3QgYmUgZ2xvYmFsbHkgdW5pcXVlIHdpdGhpbiBEYXRhIFJvdXRlciB1c2FnZXNgXG4gICAgKTtcbiAgICBpZiAoaXNJbmRleFJvdXRlKHJvdXRlKSkge1xuICAgICAgbGV0IGluZGV4Um91dGUgPSB7XG4gICAgICAgIC4uLnJvdXRlLFxuICAgICAgICBpZFxuICAgICAgfTtcbiAgICAgIG1hbmlmZXN0W2lkXSA9IG1lcmdlUm91dGVVcGRhdGVzKFxuICAgICAgICBpbmRleFJvdXRlLFxuICAgICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyKGluZGV4Um91dGUpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluZGV4Um91dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoT3JMYXlvdXRSb3V0ZSA9IHtcbiAgICAgICAgLi4ucm91dGUsXG4gICAgICAgIGlkLFxuICAgICAgICBjaGlsZHJlbjogdm9pZCAwXG4gICAgICB9O1xuICAgICAgbWFuaWZlc3RbaWRdID0gbWVyZ2VSb3V0ZVVwZGF0ZXMoXG4gICAgICAgIHBhdGhPckxheW91dFJvdXRlLFxuICAgICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyKHBhdGhPckxheW91dFJvdXRlKVxuICAgICAgKTtcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgICBwYXRoT3JMYXlvdXRSb3V0ZS5jaGlsZHJlbiA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoXG4gICAgICAgICAgcm91dGUuY2hpbGRyZW4sXG4gICAgICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgICAgICB0cmVlUGF0aCxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgICBhbGxvd0luUGxhY2VNdXRhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gbWVyZ2VSb3V0ZVVwZGF0ZXMocm91dGUsIHVwZGF0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocm91dGUsIHtcbiAgICAuLi51cGRhdGVzLFxuICAgIC4uLnR5cGVvZiB1cGRhdGVzLmxhenkgPT09IFwib2JqZWN0XCIgJiYgdXBkYXRlcy5sYXp5ICE9IG51bGwgPyB7XG4gICAgICBsYXp5OiB7XG4gICAgICAgIC4uLnJvdXRlLmxhenksXG4gICAgICAgIC4uLnVwZGF0ZXMubGF6eVxuICAgICAgfVxuICAgIH0gOiB7fVxuICB9KTtcbn1cbmZ1bmN0aW9uIG1hdGNoUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lID0gXCIvXCIpIHtcbiAgcmV0dXJuIG1hdGNoUm91dGVzSW1wbChyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gbWF0Y2hSb3V0ZXNJbXBsKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lLCBhbGxvd1BhcnRpYWwpIHtcbiAgbGV0IGxvY2F0aW9uID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICBsZXQgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKGxvY2F0aW9uLnBhdGhuYW1lIHx8IFwiL1wiLCBiYXNlbmFtZSk7XG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IG1hdGNoZXMgPT0gbnVsbCAmJiBpIDwgYnJhbmNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgZGVjb2RlZCA9IGRlY29kZVBhdGgocGF0aG5hbWUpO1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKFxuICAgICAgYnJhbmNoZXNbaV0sXG4gICAgICBkZWNvZGVkLFxuICAgICAgYWxsb3dQYXJ0aWFsXG4gICAgKTtcbiAgfVxuICByZXR1cm4gbWF0Y2hlcztcbn1cbmZ1bmN0aW9uIGNvbnZlcnRSb3V0ZU1hdGNoVG9VaU1hdGNoKG1hdGNoLCBsb2FkZXJEYXRhKSB7XG4gIGxldCB7IHJvdXRlLCBwYXRobmFtZSwgcGFyYW1zIH0gPSBtYXRjaDtcbiAgcmV0dXJuIHtcbiAgICBpZDogcm91dGUuaWQsXG4gICAgcGF0aG5hbWUsXG4gICAgcGFyYW1zLFxuICAgIGRhdGE6IGxvYWRlckRhdGFbcm91dGUuaWRdLFxuICAgIGxvYWRlckRhdGE6IGxvYWRlckRhdGFbcm91dGUuaWRdLFxuICAgIGhhbmRsZTogcm91dGUuaGFuZGxlXG4gIH07XG59XG5mdW5jdGlvbiBmbGF0dGVuUm91dGVzKHJvdXRlcywgYnJhbmNoZXMgPSBbXSwgcGFyZW50c01ldGEgPSBbXSwgcGFyZW50UGF0aCA9IFwiXCIsIF9oYXNQYXJlbnRPcHRpb25hbFNlZ21lbnRzID0gZmFsc2UpIHtcbiAgbGV0IGZsYXR0ZW5Sb3V0ZSA9IChyb3V0ZSwgaW5kZXgsIGhhc1BhcmVudE9wdGlvbmFsU2VnbWVudHMgPSBfaGFzUGFyZW50T3B0aW9uYWxTZWdtZW50cywgcmVsYXRpdmVQYXRoKSA9PiB7XG4gICAgbGV0IG1ldGEgPSB7XG4gICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCA9PT0gdm9pZCAwID8gcm91dGUucGF0aCB8fCBcIlwiIDogcmVsYXRpdmVQYXRoLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gdHJ1ZSxcbiAgICAgIGNoaWxkcmVuSW5kZXg6IGluZGV4LFxuICAgICAgcm91dGVcbiAgICB9O1xuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgaWYgKCFtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpICYmIGhhc1BhcmVudE9wdGlvbmFsU2VnbWVudHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KFxuICAgICAgICBtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpLFxuICAgICAgICBgQWJzb2x1dGUgcm91dGUgcGF0aCBcIiR7bWV0YS5yZWxhdGl2ZVBhdGh9XCIgbmVzdGVkIHVuZGVyIHBhdGggXCIke3BhcmVudFBhdGh9XCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIG11c3Qgc3RhcnQgd2l0aCB0aGUgY29tYmluZWQgcGF0aCBvZiBhbGwgaXRzIHBhcmVudCByb3V0ZXMuYFxuICAgICAgKTtcbiAgICAgIG1ldGEucmVsYXRpdmVQYXRoID0gbWV0YS5yZWxhdGl2ZVBhdGguc2xpY2UocGFyZW50UGF0aC5sZW5ndGgpO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTtcbiAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgaW52YXJpYW50KFxuICAgICAgICAvLyBPdXIgdHlwZXMga25vdyBiZXR0ZXIsIGJ1dCBydW50aW1lIEpTIG1heSBub3QhXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgcm91dGUuaW5kZXggIT09IHRydWUsXG4gICAgICAgIGBJbmRleCByb3V0ZXMgbXVzdCBub3QgaGF2ZSBjaGlsZCByb3V0ZXMuIFBsZWFzZSByZW1vdmUgYWxsIGNoaWxkIHJvdXRlcyBmcm9tIHJvdXRlIHBhdGggXCIke3BhdGh9XCIuYFxuICAgICAgKTtcbiAgICAgIGZsYXR0ZW5Sb3V0ZXMoXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLFxuICAgICAgICBicmFuY2hlcyxcbiAgICAgICAgcm91dGVzTWV0YSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgaGFzUGFyZW50T3B0aW9uYWxTZWdtZW50c1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnJhbmNoZXMucHVzaCh7XG4gICAgICBwYXRoLFxuICAgICAgc2NvcmU6IGNvbXB1dGVTY29yZShwYXRoLCByb3V0ZS5pbmRleCksXG4gICAgICByb3V0ZXNNZXRhXG4gICAgfSk7XG4gIH07XG4gIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBpZiAocm91dGUucGF0aCA9PT0gXCJcIiB8fCAhcm91dGUucGF0aD8uaW5jbHVkZXMoXCI/XCIpKSB7XG4gICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZXhwbG9kZWQgb2YgZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocm91dGUucGF0aCkpIHtcbiAgICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCwgdHJ1ZSwgZXhwbG9kZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBicmFuY2hlcztcbn1cbmZ1bmN0aW9uIGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHBhdGgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgbGV0IFtmaXJzdCwgLi4ucmVzdF0gPSBzZWdtZW50cztcbiAgbGV0IGlzT3B0aW9uYWwgPSBmaXJzdC5lbmRzV2l0aChcIj9cIik7XG4gIGxldCByZXF1aXJlZCA9IGZpcnN0LnJlcGxhY2UoL1xcPyQvLCBcIlwiKTtcbiAgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGlzT3B0aW9uYWwgPyBbcmVxdWlyZWQsIFwiXCJdIDogW3JlcXVpcmVkXTtcbiAgfVxuICBsZXQgcmVzdEV4cGxvZGVkID0gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocmVzdC5qb2luKFwiL1wiKSk7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgcmVzdWx0LnB1c2goXG4gICAgLi4ucmVzdEV4cGxvZGVkLm1hcChcbiAgICAgIChzdWJwYXRoKSA9PiBzdWJwYXRoID09PSBcIlwiID8gcmVxdWlyZWQgOiBbcmVxdWlyZWQsIHN1YnBhdGhdLmpvaW4oXCIvXCIpXG4gICAgKVxuICApO1xuICBpZiAoaXNPcHRpb25hbCkge1xuICAgIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5tYXAoXG4gICAgKGV4cGxvZGVkKSA9PiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpICYmIGV4cGxvZGVkID09PSBcIlwiID8gXCIvXCIgOiBleHBsb2RlZFxuICApO1xufVxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydChcbiAgICAoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIDogY29tcGFyZUluZGV4ZXMoXG4gICAgICBhLnJvdXRlc01ldGEubWFwKChtZXRhKSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLFxuICAgICAgYi5yb3V0ZXNNZXRhLm1hcCgobWV0YSkgPT4gbWV0YS5jaGlsZHJlbkluZGV4KVxuICAgIClcbiAgKTtcbn1cbnZhciBwYXJhbVJlID0gL146W1xcdy1dKyQvO1xudmFyIGR5bmFtaWNTZWdtZW50VmFsdWUgPSAzO1xudmFyIGluZGV4Um91dGVWYWx1ZSA9IDI7XG52YXIgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xudmFyIHN0YXRpY1NlZ21lbnRWYWx1ZSA9IDEwO1xudmFyIHNwbGF0UGVuYWx0eSA9IC0yO1xudmFyIGlzU3BsYXQgPSAocykgPT4gcyA9PT0gXCIqXCI7XG5mdW5jdGlvbiBjb21wdXRlU2NvcmUocGF0aCwgaW5kZXgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGxldCBpbml0aWFsU2NvcmUgPSBzZWdtZW50cy5sZW5ndGg7XG4gIGlmIChzZWdtZW50cy5zb21lKGlzU3BsYXQpKSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IHNwbGF0UGVuYWx0eTtcbiAgfVxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG4gIHJldHVybiBzZWdtZW50cy5maWx0ZXIoKHMpID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoXG4gICAgKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSxcbiAgICBpbml0aWFsU2NvcmVcbiAgKTtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVJbmRleGVzKGEsIGIpIHtcbiAgbGV0IHNpYmxpbmdzID0gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuc2xpY2UoMCwgLTEpLmV2ZXJ5KChuLCBpKSA9PiBuID09PSBiW2ldKTtcbiAgcmV0dXJuIHNpYmxpbmdzID8gKFxuICAgIC8vIElmIHR3byByb3V0ZXMgYXJlIHNpYmxpbmdzLCB3ZSBzaG91bGQgdHJ5IHRvIG1hdGNoIHRoZSBlYXJsaWVyIHNpYmxpbmdcbiAgICAvLyBmaXJzdC4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIGhhdmUgZmluZS1ncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgbWF0Y2hpbmdcbiAgICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgICAvLyB3YW50IHRoZW0gdHJpZWQuXG4gICAgYVthLmxlbmd0aCAtIDFdIC0gYltiLmxlbmd0aCAtIDFdXG4gICkgOiAoXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCBkb2Vzbid0IHJlYWxseSBtYWtlIHNlbnNlIHRvIHJhbmsgbm9uLXNpYmxpbmdzIGJ5IGluZGV4LFxuICAgIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAgIDBcbiAgKTtcbn1cbmZ1bmN0aW9uIG1hdGNoUm91dGVCcmFuY2goYnJhbmNoLCBwYXRobmFtZSwgYWxsb3dQYXJ0aWFsID0gZmFsc2UpIHtcbiAgbGV0IHsgcm91dGVzTWV0YSB9ID0gYnJhbmNoO1xuICBsZXQgbWF0Y2hlZFBhcmFtcyA9IHt9O1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzTWV0YS5sZW5ndGg7ICsraSkge1xuICAgIGxldCBtZXRhID0gcm91dGVzTWV0YVtpXTtcbiAgICBsZXQgZW5kID0gaSA9PT0gcm91dGVzTWV0YS5sZW5ndGggLSAxO1xuICAgIGxldCByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWRQYXRobmFtZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKG1hdGNoZWRQYXRobmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoUGF0aChcbiAgICAgIHsgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsIGNhc2VTZW5zaXRpdmU6IG1ldGEuY2FzZVNlbnNpdGl2ZSwgZW5kIH0sXG4gICAgICByZW1haW5pbmdQYXRobmFtZVxuICAgICk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBpZiAoIW1hdGNoICYmIGVuZCAmJiBhbGxvd1BhcnRpYWwgJiYgIXJvdXRlc01ldGFbcm91dGVzTWV0YS5sZW5ndGggLSAxXS5yb3V0ZS5pbmRleCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFBhdGgoXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgZW5kOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICByZW1haW5pbmdQYXRobmFtZVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24obWF0Y2hlZFBhcmFtcywgbWF0Y2gucGFyYW1zKTtcbiAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgLy8gVE9ETzogQ2FuIHRoaXMgYXMgYmUgYXZvaWRlZD9cbiAgICAgIHBhcmFtczogbWF0Y2hlZFBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICAgIHBhdGhuYW1lQmFzZTogbm9ybWFsaXplUGF0aG5hbWUoXG4gICAgICAgIGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICAgICAgKSxcbiAgICAgIHJvdXRlXG4gICAgfSk7XG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVBhdGgob3JpZ2luYWxQYXRoLCBwYXJhbXMgPSB7fSkge1xuICBsZXQgcGF0aCA9IG9yaWdpbmFsUGF0aDtcbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpICYmIHBhdGggIT09IFwiKlwiICYmICFwYXRoLmVuZHNXaXRoKFwiLypcIikpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICBgUm91dGUgcGF0aCBcIiR7cGF0aH1cIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiR7cGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKX1cIiBiZWNhdXNlIHRoZSBcXGAqXFxgIGNoYXJhY3RlciBtdXN0IGFsd2F5cyBmb2xsb3cgYSBcXGAvXFxgIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgcGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcIiR7cGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKX1cIi5gXG4gICAgKTtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKTtcbiAgfVxuICBjb25zdCBwcmVmaXggPSBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gXCIvXCIgOiBcIlwiO1xuICBjb25zdCBzdHJpbmdpZnkyID0gKHApID0+IHAgPT0gbnVsbCA/IFwiXCIgOiB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHAgOiBTdHJpbmcocCk7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgvXFwvKy8pLm1hcCgoc2VnbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgaXNMYXN0U2VnbWVudCA9IGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxO1xuICAgIGlmIChpc0xhc3RTZWdtZW50ICYmIHNlZ21lbnQgPT09IFwiKlwiKSB7XG4gICAgICBjb25zdCBzdGFyID0gXCIqXCI7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5MihwYXJhbXNbc3Rhcl0pO1xuICAgIH1cbiAgICBjb25zdCBrZXlNYXRjaCA9IHNlZ21lbnQubWF0Y2goL146KFtcXHctXSspKFxcPz8pJC8pO1xuICAgIGlmIChrZXlNYXRjaCkge1xuICAgICAgY29uc3QgWywga2V5LCBvcHRpb25hbF0gPSBrZXlNYXRjaDtcbiAgICAgIGxldCBwYXJhbSA9IHBhcmFtc1trZXldO1xuICAgICAgaW52YXJpYW50KG9wdGlvbmFsID09PSBcIj9cIiB8fCBwYXJhbSAhPSBudWxsLCBgTWlzc2luZyBcIjoke2tleX1cIiBwYXJhbWApO1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnkyKHBhcmFtKSk7XG4gICAgfVxuICAgIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1xcPyQvZywgXCJcIik7XG4gIH0pLmZpbHRlcigoc2VnbWVudCkgPT4gISFzZWdtZW50KTtcbiAgcmV0dXJuIHByZWZpeCArIHNlZ21lbnRzLmpvaW4oXCIvXCIpO1xufVxuZnVuY3Rpb24gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHBhdHRlcm4gPSB7IHBhdGg6IHBhdHRlcm4sIGNhc2VTZW5zaXRpdmU6IGZhbHNlLCBlbmQ6IHRydWUgfTtcbiAgfVxuICBsZXQgW21hdGNoZXIsIGNvbXBpbGVkUGFyYW1zXSA9IGNvbXBpbGVQYXRoKFxuICAgIHBhdHRlcm4ucGF0aCxcbiAgICBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsXG4gICAgcGF0dGVybi5lbmRcbiAgKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gY29tcGlsZWRQYXJhbXMucmVkdWNlKFxuICAgIChtZW1vMiwgeyBwYXJhbU5hbWUsIGlzT3B0aW9uYWwgfSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgIGxldCBzcGxhdFZhbHVlID0gY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIjtcbiAgICAgICAgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnNsaWNlKDAsIG1hdGNoZWRQYXRobmFtZS5sZW5ndGggLSBzcGxhdFZhbHVlLmxlbmd0aCkucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSBjYXB0dXJlR3JvdXBzW2luZGV4XTtcbiAgICAgIGlmIChpc09wdGlvbmFsICYmICF2YWx1ZSkge1xuICAgICAgICBtZW1vMltwYXJhbU5hbWVdID0gdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbzJbcGFyYW1OYW1lXSA9ICh2YWx1ZSB8fCBcIlwiKS5yZXBsYWNlKC8lMkYvZywgXCIvXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW8yO1xuICAgIH0sXG4gICAge31cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGF0aG5hbWU6IG1hdGNoZWRQYXRobmFtZSxcbiAgICBwYXRobmFtZUJhc2UsXG4gICAgcGF0dGVyblxuICB9O1xufVxuZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0aCwgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLCBlbmQgPSB0cnVlKSB7XG4gIHdhcm5pbmcoXG4gICAgcGF0aCA9PT0gXCIqXCIgfHwgIXBhdGguZW5kc1dpdGgoXCIqXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvKlwiKSxcbiAgICBgUm91dGUgcGF0aCBcIiR7cGF0aH1cIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiR7cGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKX1cIiBiZWNhdXNlIHRoZSBcXGAqXFxgIGNoYXJhY3RlciBtdXN0IGFsd2F5cyBmb2xsb3cgYSBcXGAvXFxgIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgcGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcIiR7cGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKX1cIi5gXG4gICk7XG4gIGxldCBwYXJhbXMgPSBbXTtcbiAgbGV0IHJlZ2V4cFNvdXJjZSA9IFwiXlwiICsgcGF0aC5yZXBsYWNlKC9cXC8qXFwqPyQvLCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKS5yZXBsYWNlKC9bXFxcXC4qK14ke318KClbXFxdXS9nLCBcIlxcXFwkJlwiKS5yZXBsYWNlKFxuICAgIC9cXC86KFtcXHctXSspKFxcPyk/L2csXG4gICAgKF8sIHBhcmFtTmFtZSwgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgcGFyYW1zLnB1c2goeyBwYXJhbU5hbWUsIGlzT3B0aW9uYWw6IGlzT3B0aW9uYWwgIT0gbnVsbCB9KTtcbiAgICAgIHJldHVybiBpc09wdGlvbmFsID8gXCIvPyhbXlxcXFwvXSspP1wiIDogXCIvKFteXFxcXC9dKylcIjtcbiAgICB9XG4gICkucmVwbGFjZSgvXFwvKFtcXHctXSspXFw/KFxcL3wkKS9nLCBcIigvJDEpPyQyXCIpO1xuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbXMucHVzaCh7IHBhcmFtTmFtZTogXCIqXCIgfSk7XG4gICAgcmVnZXhwU291cmNlICs9IHBhdGggPT09IFwiKlwiIHx8IHBhdGggPT09IFwiLypcIiA/IFwiKC4qKSRcIiA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7XG4gIH0gZWxzZSBpZiAoZW5kKSB7XG4gICAgcmVnZXhwU291cmNlICs9IFwiXFxcXC8qJFwiO1xuICB9IGVsc2UgaWYgKHBhdGggIT09IFwiXCIgJiYgcGF0aCAhPT0gXCIvXCIpIHtcbiAgICByZWdleHBTb3VyY2UgKz0gXCIoPzooPz1cXFxcL3wkKSlcIjtcbiAgfSBlbHNlIHtcbiAgfVxuICBsZXQgbWF0Y2hlciA9IG5ldyBSZWdFeHAocmVnZXhwU291cmNlLCBjYXNlU2Vuc2l0aXZlID8gdm9pZCAwIDogXCJpXCIpO1xuICByZXR1cm4gW21hdGNoZXIsIHBhcmFtc107XG59XG5mdW5jdGlvbiBkZWNvZGVQYXRoKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KFwiL1wiKS5tYXAoKHYpID0+IGRlY29kZVVSSUNvbXBvbmVudCh2KS5yZXBsYWNlKC9cXC8vZywgXCIlMkZcIikpLmpvaW4oXCIvXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoXG4gICAgICBmYWxzZSxcbiAgICAgIGBUaGUgVVJMIHBhdGggXCIke3ZhbHVlfVwiIGNvdWxkIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2UgaXQgaXMgYSBtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGEgYmFkIHBlcmNlbnQgZW5jb2RpbmcgKCR7ZXJyb3J9KS5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gXCIvXCIpIHJldHVybiBwYXRobmFtZTtcbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgc3RhcnRJbmRleCA9IGJhc2VuYW1lLmVuZHNXaXRoKFwiL1wiKSA/IGJhc2VuYW1lLmxlbmd0aCAtIDEgOiBiYXNlbmFtZS5sZW5ndGg7XG4gIGxldCBuZXh0Q2hhciA9IHBhdGhuYW1lLmNoYXJBdChzdGFydEluZGV4KTtcbiAgaWYgKG5leHRDaGFyICYmIG5leHRDaGFyICE9PSBcIi9cIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXRobmFtZS5zbGljZShzdGFydEluZGV4KSB8fCBcIi9cIjtcbn1cbmZ1bmN0aW9uIHByZXBlbmRCYXNlbmFtZSh7XG4gIGJhc2VuYW1lLFxuICBwYXRobmFtZVxufSkge1xuICByZXR1cm4gcGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRobmFtZV0pO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGgodG8sIGZyb21QYXRobmFtZSA9IFwiL1wiKSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IHRvUGF0aG5hbWUsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIlxuICB9ID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICBsZXQgcGF0aG5hbWUgPSB0b1BhdGhuYW1lID8gdG9QYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUgOiByZXNvbHZlUGF0aG5hbWUodG9QYXRobmFtZSwgZnJvbVBhdGhuYW1lKSA6IGZyb21QYXRobmFtZTtcbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2g6IG5vcm1hbGl6ZVNlYXJjaChzZWFyY2gpLFxuICAgIGhhc2g6IG5vcm1hbGl6ZUhhc2goaGFzaClcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgaWYgKHNlZ21lbnQgPT09IFwiLi5cIikge1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuZnVuY3Rpb24gZ2V0SW52YWxpZFBhdGhFcnJvcihjaGFyLCBmaWVsZCwgZGVzdCwgcGF0aCkge1xuICByZXR1cm4gYENhbm5vdCBpbmNsdWRlIGEgJyR7Y2hhcn0nIGNoYXJhY3RlciBpbiBhIG1hbnVhbGx5IHNwZWNpZmllZCBcXGB0by4ke2ZpZWxkfVxcYCBmaWVsZCBbJHtKU09OLnN0cmluZ2lmeShcbiAgICBwYXRoXG4gICl9XS4gIFBsZWFzZSBzZXBhcmF0ZSBpdCBvdXQgdG8gdGhlIFxcYHRvLiR7ZGVzdH1cXGAgZmllbGQuIEFsdGVybmF0aXZlbHkgeW91IG1heSBwcm92aWRlIHRoZSBmdWxsIHBhdGggYXMgYSBzdHJpbmcgaW4gPExpbmsgdG89XCIuLi5cIj4gYW5kIHRoZSByb3V0ZXIgd2lsbCBwYXJzZSBpdCBmb3IgeW91LmA7XG59XG5mdW5jdGlvbiBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBtYXRjaGVzLmZpbHRlcihcbiAgICAobWF0Y2gsIGluZGV4KSA9PiBpbmRleCA9PT0gMCB8fCBtYXRjaC5yb3V0ZS5wYXRoICYmIG1hdGNoLnJvdXRlLnBhdGgubGVuZ3RoID4gMFxuICApO1xufVxuZnVuY3Rpb24gZ2V0UmVzb2x2ZVRvTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIGxldCBwYXRoTWF0Y2hlcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpO1xuICByZXR1cm4gcGF0aE1hdGNoZXMubWFwKFxuICAgIChtYXRjaCwgaWR4KSA9PiBpZHggPT09IHBhdGhNYXRjaGVzLmxlbmd0aCAtIDEgPyBtYXRjaC5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lQmFzZVxuICApO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSwgaXNQYXRoUmVsYXRpdmUgPSBmYWxzZSkge1xuICBsZXQgdG87XG4gIGlmICh0eXBlb2YgdG9BcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0byA9IHBhcnNlUGF0aCh0b0FyZyk7XG4gIH0gZWxzZSB7XG4gICAgdG8gPSB7IC4uLnRvQXJnIH07XG4gICAgaW52YXJpYW50KFxuICAgICAgIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIj9cIiksXG4gICAgICBnZXRJbnZhbGlkUGF0aEVycm9yKFwiP1wiLCBcInBhdGhuYW1lXCIsIFwic2VhcmNoXCIsIHRvKVxuICAgICk7XG4gICAgaW52YXJpYW50KFxuICAgICAgIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIiNcIiksXG4gICAgICBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInBhdGhuYW1lXCIsIFwiaGFzaFwiLCB0bylcbiAgICApO1xuICAgIGludmFyaWFudChcbiAgICAgICF0by5zZWFyY2ggfHwgIXRvLnNlYXJjaC5pbmNsdWRlcyhcIiNcIiksXG4gICAgICBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInNlYXJjaFwiLCBcImhhc2hcIiwgdG8pXG4gICAgKTtcbiAgfVxuICBsZXQgaXNFbXB0eVBhdGggPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIjtcbiAgbGV0IHRvUGF0aG5hbWUgPSBpc0VtcHR5UGF0aCA/IFwiL1wiIDogdG8ucGF0aG5hbWU7XG4gIGxldCBmcm9tO1xuICBpZiAodG9QYXRobmFtZSA9PSBudWxsKSB7XG4gICAgZnJvbSA9IGxvY2F0aW9uUGF0aG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdXRlUGF0aG5hbWVJbmRleCA9IHJvdXRlUGF0aG5hbWVzLmxlbmd0aCAtIDE7XG4gICAgaWYgKCFpc1BhdGhSZWxhdGl2ZSAmJiB0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIuLlwiKSkge1xuICAgICAgbGV0IHRvU2VnbWVudHMgPSB0b1BhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgIHdoaWxlICh0b1NlZ21lbnRzWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgdG9TZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICByb3V0ZVBhdGhuYW1lSW5kZXggLT0gMTtcbiAgICAgIH1cbiAgICAgIHRvLnBhdGhuYW1lID0gdG9TZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICB9XG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG4gIGxldCBwYXRoID0gcmVzb2x2ZVBhdGgodG8sIGZyb20pO1xuICBsZXQgaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoID0gdG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgbGV0IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoID0gKGlzRW1wdHlQYXRoIHx8IHRvUGF0aG5hbWUgPT09IFwiLlwiKSAmJiBsb2NhdGlvblBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgaWYgKCFwYXRoLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAoaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoIHx8IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoKSkge1xuICAgIHBhdGgucGF0aG5hbWUgKz0gXCIvXCI7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG52YXIgam9pblBhdGhzID0gKHBhdGhzKSA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcbnZhciBub3JtYWxpemVQYXRobmFtZSA9IChwYXRobmFtZSkgPT4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbnZhciBub3JtYWxpemVTZWFyY2ggPSAoc2VhcmNoKSA9PiAhc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCI/XCIgPyBcIlwiIDogc2VhcmNoLnN0YXJ0c1dpdGgoXCI/XCIpID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG52YXIgbm9ybWFsaXplSGFzaCA9IChoYXNoKSA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbnZhciBEYXRhV2l0aFJlc3BvbnNlSW5pdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZGF0YTIsIGluaXQpIHtcbiAgICB0aGlzLnR5cGUgPSBcIkRhdGFXaXRoUmVzcG9uc2VJbml0XCI7XG4gICAgdGhpcy5kYXRhID0gZGF0YTI7XG4gICAgdGhpcy5pbml0ID0gaW5pdCB8fCBudWxsO1xuICB9XG59O1xuZnVuY3Rpb24gZGF0YShkYXRhMiwgaW5pdCkge1xuICByZXR1cm4gbmV3IERhdGFXaXRoUmVzcG9uc2VJbml0KFxuICAgIGRhdGEyLFxuICAgIHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8geyBzdGF0dXM6IGluaXQgfSA6IGluaXRcbiAgKTtcbn1cbnZhciByZWRpcmVjdCA9ICh1cmwsIGluaXQgPSAzMDIpID0+IHtcbiAgbGV0IHJlc3BvbnNlSW5pdCA9IGluaXQ7XG4gIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmVzcG9uc2VJbml0ID0geyBzdGF0dXM6IHJlc3BvbnNlSW5pdCB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZUluaXQuc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2VJbml0LnN0YXR1cyA9IDMwMjtcbiAgfVxuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcbiAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCB1cmwpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHsgLi4ucmVzcG9uc2VJbml0LCBoZWFkZXJzIH0pO1xufTtcbnZhciByZWRpcmVjdERvY3VtZW50ID0gKHVybCwgaW5pdCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSByZWRpcmVjdCh1cmwsIGluaXQpO1xuICByZXNwb25zZS5oZWFkZXJzLnNldChcIlgtUmVtaXgtUmVsb2FkLURvY3VtZW50XCIsIFwidHJ1ZVwiKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbnZhciByZXBsYWNlID0gKHVybCwgaW5pdCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSByZWRpcmVjdCh1cmwsIGluaXQpO1xuICByZXNwb25zZS5oZWFkZXJzLnNldChcIlgtUmVtaXgtUmVwbGFjZVwiLCBcInRydWVcIik7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG52YXIgRXJyb3JSZXNwb25zZUltcGwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YTIsIGludGVybmFsID0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8IFwiXCI7XG4gICAgdGhpcy5pbnRlcm5hbCA9IGludGVybmFsO1xuICAgIGlmIChkYXRhMiBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhMi50b1N0cmluZygpO1xuICAgICAgdGhpcy5lcnJvciA9IGRhdGEyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhMjtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikge1xuICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBlcnJvci5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBlcnJvci5pbnRlcm5hbCA9PT0gXCJib29sZWFuXCIgJiYgXCJkYXRhXCIgaW4gZXJyb3I7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVBhdHRlcm4ocGF0aHMpIHtcbiAgcmV0dXJuIHBhdGhzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8qL2csIFwiL1wiKSB8fCBcIi9cIjtcbn1cblxuLy8gbGliL3JvdXRlci9pbnN0cnVtZW50YXRpb24udHNcbnZhciBVbmluc3RydW1lbnRlZFN5bWJvbCA9IFN5bWJvbChcIlVuaW5zdHJ1bWVudGVkXCIpO1xuZnVuY3Rpb24gZ2V0Um91dGVJbnN0cnVtZW50YXRpb25VcGRhdGVzKGZucywgcm91dGUpIHtcbiAgbGV0IGFnZ3JlZ2F0ZWQgPSB7XG4gICAgbGF6eTogW10sXG4gICAgXCJsYXp5LmxvYWRlclwiOiBbXSxcbiAgICBcImxhenkuYWN0aW9uXCI6IFtdLFxuICAgIFwibGF6eS5taWRkbGV3YXJlXCI6IFtdLFxuICAgIG1pZGRsZXdhcmU6IFtdLFxuICAgIGxvYWRlcjogW10sXG4gICAgYWN0aW9uOiBbXVxuICB9O1xuICBmbnMuZm9yRWFjaChcbiAgICAoZm4pID0+IGZuKHtcbiAgICAgIGlkOiByb3V0ZS5pZCxcbiAgICAgIGluZGV4OiByb3V0ZS5pbmRleCxcbiAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXG4gICAgICBpbnN0cnVtZW50KGkpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhhZ2dyZWdhdGVkKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBpZiAoaVtrZXldKSB7XG4gICAgICAgICAgICBhZ2dyZWdhdGVkW2tleV0ucHVzaChpW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICk7XG4gIGxldCB1cGRhdGVzID0ge307XG4gIGlmICh0eXBlb2Ygcm91dGUubGF6eSA9PT0gXCJmdW5jdGlvblwiICYmIGFnZ3JlZ2F0ZWQubGF6eS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGluc3RydW1lbnRlZCA9IHdyYXBJbXBsKGFnZ3JlZ2F0ZWQubGF6eSwgcm91dGUubGF6eSwgKCkgPT4gdm9pZCAwKTtcbiAgICBpZiAoaW5zdHJ1bWVudGVkKSB7XG4gICAgICB1cGRhdGVzLmxhenkgPSBpbnN0cnVtZW50ZWQ7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygcm91dGUubGF6eSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBsYXp5T2JqZWN0ID0gcm91dGUubGF6eTtcbiAgICBbXCJtaWRkbGV3YXJlXCIsIFwibG9hZGVyXCIsIFwiYWN0aW9uXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGxhenlGbiA9IGxhenlPYmplY3Rba2V5XTtcbiAgICAgIGxldCBpbnN0cnVtZW50YXRpb25zID0gYWdncmVnYXRlZFtgbGF6eS4ke2tleX1gXTtcbiAgICAgIGlmICh0eXBlb2YgbGF6eUZuID09PSBcImZ1bmN0aW9uXCIgJiYgaW5zdHJ1bWVudGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBpbnN0cnVtZW50ZWQgPSB3cmFwSW1wbChpbnN0cnVtZW50YXRpb25zLCBsYXp5Rm4sICgpID0+IHZvaWQgMCk7XG4gICAgICAgIGlmIChpbnN0cnVtZW50ZWQpIHtcbiAgICAgICAgICB1cGRhdGVzLmxhenkgPSBPYmplY3QuYXNzaWduKHVwZGF0ZXMubGF6eSB8fCB7fSwge1xuICAgICAgICAgICAgW2tleV06IGluc3RydW1lbnRlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgW1wibG9hZGVyXCIsIFwiYWN0aW9uXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGxldCBoYW5kbGVyID0gcm91dGVba2V5XTtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBhZ2dyZWdhdGVkW2tleV0ubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IG9yaWdpbmFsID0gaGFuZGxlcltVbmluc3RydW1lbnRlZFN5bWJvbF0gPz8gaGFuZGxlcjtcbiAgICAgIGxldCBpbnN0cnVtZW50ZWQgPSB3cmFwSW1wbChcbiAgICAgICAgYWdncmVnYXRlZFtrZXldLFxuICAgICAgICBvcmlnaW5hbCxcbiAgICAgICAgKC4uLmFyZ3MpID0+IGdldEhhbmRsZXJJbmZvKGFyZ3NbMF0pXG4gICAgICApO1xuICAgICAgaWYgKGluc3RydW1lbnRlZCkge1xuICAgICAgICBpbnN0cnVtZW50ZWRbVW5pbnN0cnVtZW50ZWRTeW1ib2xdID0gb3JpZ2luYWw7XG4gICAgICAgIHVwZGF0ZXNba2V5XSA9IGluc3RydW1lbnRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAocm91dGUubWlkZGxld2FyZSAmJiByb3V0ZS5taWRkbGV3YXJlLmxlbmd0aCA+IDAgJiYgYWdncmVnYXRlZC5taWRkbGV3YXJlLmxlbmd0aCA+IDApIHtcbiAgICB1cGRhdGVzLm1pZGRsZXdhcmUgPSByb3V0ZS5taWRkbGV3YXJlLm1hcCgobWlkZGxld2FyZSkgPT4ge1xuICAgICAgbGV0IG9yaWdpbmFsID0gbWlkZGxld2FyZVtVbmluc3RydW1lbnRlZFN5bWJvbF0gPz8gbWlkZGxld2FyZTtcbiAgICAgIGxldCBpbnN0cnVtZW50ZWQgPSB3cmFwSW1wbChcbiAgICAgICAgYWdncmVnYXRlZC5taWRkbGV3YXJlLFxuICAgICAgICBvcmlnaW5hbCxcbiAgICAgICAgKC4uLmFyZ3MpID0+IGdldEhhbmRsZXJJbmZvKGFyZ3NbMF0pXG4gICAgICApO1xuICAgICAgaWYgKGluc3RydW1lbnRlZCkge1xuICAgICAgICBpbnN0cnVtZW50ZWRbVW5pbnN0cnVtZW50ZWRTeW1ib2xdID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiBpbnN0cnVtZW50ZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWlkZGxld2FyZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdXBkYXRlcztcbn1cbmZ1bmN0aW9uIGluc3RydW1lbnRDbGllbnRTaWRlUm91dGVyKHJvdXRlciwgZm5zKSB7XG4gIGxldCBhZ2dyZWdhdGVkID0ge1xuICAgIG5hdmlnYXRlOiBbXSxcbiAgICBmZXRjaDogW11cbiAgfTtcbiAgZm5zLmZvckVhY2goXG4gICAgKGZuKSA9PiBmbih7XG4gICAgICBpbnN0cnVtZW50KGkpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhpKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBpZiAoaVtrZXldKSB7XG4gICAgICAgICAgICBhZ2dyZWdhdGVkW2tleV0ucHVzaChpW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICk7XG4gIGlmIChhZ2dyZWdhdGVkLm5hdmlnYXRlLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgbmF2aWdhdGUgPSByb3V0ZXIubmF2aWdhdGVbVW5pbnN0cnVtZW50ZWRTeW1ib2xdID8/IHJvdXRlci5uYXZpZ2F0ZTtcbiAgICBsZXQgaW5zdHJ1bWVudGVkTmF2aWdhdGUgPSB3cmFwSW1wbChcbiAgICAgIGFnZ3JlZ2F0ZWQubmF2aWdhdGUsXG4gICAgICBuYXZpZ2F0ZSxcbiAgICAgICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCBbdG8sIG9wdHNdID0gYXJncztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0bzogdHlwZW9mIHRvID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogdG8gPyBjcmVhdGVQYXRoKHRvKSA6IFwiLlwiLFxuICAgICAgICAgIC4uLmdldFJvdXRlckluZm8ocm91dGVyLCBvcHRzID8/IHt9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG4gICAgaWYgKGluc3RydW1lbnRlZE5hdmlnYXRlKSB7XG4gICAgICBpbnN0cnVtZW50ZWROYXZpZ2F0ZVtVbmluc3RydW1lbnRlZFN5bWJvbF0gPSBuYXZpZ2F0ZTtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZSA9IGluc3RydW1lbnRlZE5hdmlnYXRlO1xuICAgIH1cbiAgfVxuICBpZiAoYWdncmVnYXRlZC5mZXRjaC5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGZldGNoMiA9IHJvdXRlci5mZXRjaFtVbmluc3RydW1lbnRlZFN5bWJvbF0gPz8gcm91dGVyLmZldGNoO1xuICAgIGxldCBpbnN0cnVtZW50ZWRGZXRjaCA9IHdyYXBJbXBsKGFnZ3JlZ2F0ZWQuZmV0Y2gsIGZldGNoMiwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCBba2V5LCAsIGhyZWYsIG9wdHNdID0gYXJncztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IGhyZWYgPz8gXCIuXCIsXG4gICAgICAgIGZldGNoZXJLZXk6IGtleSxcbiAgICAgICAgLi4uZ2V0Um91dGVySW5mbyhyb3V0ZXIsIG9wdHMgPz8ge30pXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmIChpbnN0cnVtZW50ZWRGZXRjaCkge1xuICAgICAgaW5zdHJ1bWVudGVkRmV0Y2hbVW5pbnN0cnVtZW50ZWRTeW1ib2xdID0gZmV0Y2gyO1xuICAgICAgcm91dGVyLmZldGNoID0gaW5zdHJ1bWVudGVkRmV0Y2g7XG4gICAgfVxuICB9XG4gIHJldHVybiByb3V0ZXI7XG59XG5mdW5jdGlvbiBpbnN0cnVtZW50SGFuZGxlcihoYW5kbGVyLCBmbnMpIHtcbiAgbGV0IGFnZ3JlZ2F0ZWQgPSB7XG4gICAgcmVxdWVzdDogW11cbiAgfTtcbiAgZm5zLmZvckVhY2goXG4gICAgKGZuKSA9PiBmbih7XG4gICAgICBpbnN0cnVtZW50KGkpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhpKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICBpZiAoaVtrZXldKSB7XG4gICAgICAgICAgICBhZ2dyZWdhdGVkW2tleV0ucHVzaChpW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICk7XG4gIGxldCBpbnN0cnVtZW50ZWRIYW5kbGVyID0gaGFuZGxlcjtcbiAgaWYgKGFnZ3JlZ2F0ZWQucmVxdWVzdC5sZW5ndGggPiAwKSB7XG4gICAgaW5zdHJ1bWVudGVkSGFuZGxlciA9IHdyYXBJbXBsKGFnZ3JlZ2F0ZWQucmVxdWVzdCwgaGFuZGxlciwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCBbcmVxdWVzdCwgY29udGV4dF0gPSBhcmdzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogZ2V0UmVhZG9ubHlSZXF1ZXN0KHJlcXVlc3QpLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0ICE9IG51bGwgPyBnZXRSZWFkb25seUNvbnRleHQoY29udGV4dCkgOiBjb250ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBpbnN0cnVtZW50ZWRIYW5kbGVyO1xufVxuZnVuY3Rpb24gd3JhcEltcGwoaW1wbHMsIGhhbmRsZXIsIGdldEluZm8pIHtcbiAgaWYgKGltcGxzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCByZWN1cnNlUmlnaHQoXG4gICAgICBpbXBscyxcbiAgICAgIGdldEluZm8oLi4uYXJncyksXG4gICAgICAoKSA9PiBoYW5kbGVyKC4uLmFyZ3MpLFxuICAgICAgaW1wbHMubGVuZ3RoIC0gMVxuICAgICk7XG4gICAgaWYgKHJlc3VsdC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJlY3Vyc2VSaWdodChpbXBscywgaW5mbywgaGFuZGxlciwgaW5kZXgpIHtcbiAgbGV0IGltcGwgPSBpbXBsc1tpbmRleF07XG4gIGxldCByZXN1bHQ7XG4gIGlmICghaW1wbCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdmFsdWUgPSBhd2FpdCBoYW5kbGVyKCk7XG4gICAgICByZXN1bHQgPSB7IHR5cGU6IFwic3VjY2Vzc1wiLCB2YWx1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlc3VsdCA9IHsgdHlwZTogXCJlcnJvclwiLCB2YWx1ZTogZSB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaGFuZGxlclByb21pc2UgPSB2b2lkIDA7XG4gICAgbGV0IGNhbGxIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGhhbmRsZXJQcm9taXNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgY2Fubm90IGNhbGwgaW5zdHJ1bWVudGVkIGhhbmRsZXJzIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlclByb21pc2UgPSByZWN1cnNlUmlnaHQoaW1wbHMsIGluZm8sIGhhbmRsZXIsIGluZGV4IC0gMSk7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBhd2FpdCBoYW5kbGVyUHJvbWlzZTtcbiAgICAgIGludmFyaWFudChyZXN1bHQsIFwiRXhwZWN0ZWQgYSByZXN1bHRcIik7XG4gICAgICBpZiAocmVzdWx0LnR5cGUgPT09IFwiZXJyb3JcIiAmJiByZXN1bHQudmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwiZXJyb3JcIiwgZXJyb3I6IHJlc3VsdC52YWx1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInN1Y2Nlc3NcIiwgZXJyb3I6IHZvaWQgMCB9O1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGltcGwoY2FsbEhhbmRsZXIsIGluZm8pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBpbnN0cnVtZW50YXRpb24gZnVuY3Rpb24gdGhyZXcgYW4gZXJyb3I6XCIsIGUpO1xuICAgIH1cbiAgICBpZiAoIWhhbmRsZXJQcm9taXNlKSB7XG4gICAgICBhd2FpdCBjYWxsSGFuZGxlcigpO1xuICAgIH1cbiAgICBhd2FpdCBoYW5kbGVyUHJvbWlzZTtcbiAgfVxuICBpZiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogbmV3IEVycm9yKFwiTm8gcmVzdWx0IGFzc2lnbmVkIGluIGluc3RydW1lbnRhdGlvbiBjaGFpbi5cIilcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEhhbmRsZXJJbmZvKGFyZ3MpIHtcbiAgbGV0IHsgcmVxdWVzdCwgY29udGV4dCwgcGFyYW1zLCB1bnN0YWJsZV9wYXR0ZXJuIH0gPSBhcmdzO1xuICByZXR1cm4ge1xuICAgIHJlcXVlc3Q6IGdldFJlYWRvbmx5UmVxdWVzdChyZXF1ZXN0KSxcbiAgICBwYXJhbXM6IHsgLi4ucGFyYW1zIH0sXG4gICAgdW5zdGFibGVfcGF0dGVybixcbiAgICBjb250ZXh0OiBnZXRSZWFkb25seUNvbnRleHQoY29udGV4dClcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlckluZm8ocm91dGVyLCBvcHRzKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFVybDogY3JlYXRlUGF0aChyb3V0ZXIuc3RhdGUubG9jYXRpb24pLFxuICAgIC4uLlwiZm9ybU1ldGhvZFwiIGluIG9wdHMgPyB7IGZvcm1NZXRob2Q6IG9wdHMuZm9ybU1ldGhvZCB9IDoge30sXG4gICAgLi4uXCJmb3JtRW5jVHlwZVwiIGluIG9wdHMgPyB7IGZvcm1FbmNUeXBlOiBvcHRzLmZvcm1FbmNUeXBlIH0gOiB7fSxcbiAgICAuLi5cImZvcm1EYXRhXCIgaW4gb3B0cyA/IHsgZm9ybURhdGE6IG9wdHMuZm9ybURhdGEgfSA6IHt9LFxuICAgIC4uLlwiYm9keVwiIGluIG9wdHMgPyB7IGJvZHk6IG9wdHMuYm9keSB9IDoge31cbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFJlYWRvbmx5UmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGdldDogKC4uLmFyZ3MpID0+IHJlcXVlc3QuaGVhZGVycy5nZXQoLi4uYXJncylcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXRSZWFkb25seUNvbnRleHQoY29udGV4dCkge1xuICBpZiAoaXNQbGFpbk9iamVjdChjb250ZXh0KSkge1xuICAgIGxldCBmcm96ZW4gPSB7IC4uLmNvbnRleHQgfTtcbiAgICBPYmplY3QuZnJlZXplKGZyb3plbik7XG4gICAgcmV0dXJuIGZyb3plbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiAoY3R4KSA9PiBjb250ZXh0LmdldChjdHgpXG4gICAgfTtcbiAgfVxufVxudmFyIG9iamVjdFByb3RvTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QucHJvdG90eXBlKS5zb3J0KCkuam9pbihcIlxcMFwiKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodGhpbmcpIHtcbiAgaWYgKHRoaW5nID09PSBudWxsIHx8IHR5cGVvZiB0aGluZyAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGluZyk7XG4gIHJldHVybiBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbCB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuc29ydCgpLmpvaW4oXCJcXDBcIikgPT09IG9iamVjdFByb3RvTmFtZXM7XG59XG5cbi8vIGxpYi9yb3V0ZXIvcm91dGVyLnRzXG52YXIgdmFsaWRNdXRhdGlvbk1ldGhvZHNBcnIgPSBbXG4gIFwiUE9TVFwiLFxuICBcIlBVVFwiLFxuICBcIlBBVENIXCIsXG4gIFwiREVMRVRFXCJcbl07XG52YXIgdmFsaWRNdXRhdGlvbk1ldGhvZHMgPSBuZXcgU2V0KFxuICB2YWxpZE11dGF0aW9uTWV0aG9kc0FyclxuKTtcbnZhciB2YWxpZFJlcXVlc3RNZXRob2RzQXJyID0gW1xuICBcIkdFVFwiLFxuICAuLi52YWxpZE11dGF0aW9uTWV0aG9kc0FyclxuXTtcbnZhciB2YWxpZFJlcXVlc3RNZXRob2RzID0gbmV3IFNldCh2YWxpZFJlcXVlc3RNZXRob2RzQXJyKTtcbnZhciByZWRpcmVjdFN0YXR1c0NvZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XSk7XG52YXIgcmVkaXJlY3RQcmVzZXJ2ZU1ldGhvZFN0YXR1c0NvZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWzMwNywgMzA4XSk7XG52YXIgSURMRV9OQVZJR0FUSU9OID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGxvY2F0aW9uOiB2b2lkIDAsXG4gIGZvcm1NZXRob2Q6IHZvaWQgMCxcbiAgZm9ybUFjdGlvbjogdm9pZCAwLFxuICBmb3JtRW5jVHlwZTogdm9pZCAwLFxuICBmb3JtRGF0YTogdm9pZCAwLFxuICBqc29uOiB2b2lkIDAsXG4gIHRleHQ6IHZvaWQgMFxufTtcbnZhciBJRExFX0ZFVENIRVIgPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgZGF0YTogdm9pZCAwLFxuICBmb3JtTWV0aG9kOiB2b2lkIDAsXG4gIGZvcm1BY3Rpb246IHZvaWQgMCxcbiAgZm9ybUVuY1R5cGU6IHZvaWQgMCxcbiAgZm9ybURhdGE6IHZvaWQgMCxcbiAganNvbjogdm9pZCAwLFxuICB0ZXh0OiB2b2lkIDBcbn07XG52YXIgSURMRV9CTE9DS0VSID0ge1xuICBzdGF0ZTogXCJ1bmJsb2NrZWRcIixcbiAgcHJvY2VlZDogdm9pZCAwLFxuICByZXNldDogdm9pZCAwLFxuICBsb2NhdGlvbjogdm9pZCAwXG59O1xudmFyIEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbnZhciBpc0Fic29sdXRlVXJsID0gKHVybCkgPT4gQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QodXJsKTtcbnZhciBkZWZhdWx0TWFwUm91dGVQcm9wZXJ0aWVzID0gKHJvdXRlKSA9PiAoe1xuICBoYXNFcnJvckJvdW5kYXJ5OiBCb29sZWFuKHJvdXRlLmhhc0Vycm9yQm91bmRhcnkpXG59KTtcbnZhciBUUkFOU0lUSU9OU19TVE9SQUdFX0tFWSA9IFwicmVtaXgtcm91dGVyLXRyYW5zaXRpb25zXCI7XG52YXIgUmVzZXRMb2FkZXJEYXRhU3ltYm9sID0gU3ltYm9sKFwiUmVzZXRMb2FkZXJEYXRhXCIpO1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKGluaXQpIHtcbiAgY29uc3Qgcm91dGVyV2luZG93ID0gaW5pdC53aW5kb3cgPyBpbml0LndpbmRvdyA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB2b2lkIDA7XG4gIGNvbnN0IGlzQnJvd3NlcjIgPSB0eXBlb2Ygcm91dGVyV2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiByb3V0ZXJXaW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHJvdXRlcldpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuICBpbnZhcmlhbnQoXG4gICAgaW5pdC5yb3V0ZXMubGVuZ3RoID4gMCxcbiAgICBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVJvdXRlclwiXG4gICk7XG4gIGxldCBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMyID0gaW5pdC5oeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMgfHwgW107XG4gIGxldCBfbWFwUm91dGVQcm9wZXJ0aWVzID0gaW5pdC5tYXBSb3V0ZVByb3BlcnRpZXMgfHwgZGVmYXVsdE1hcFJvdXRlUHJvcGVydGllcztcbiAgbGV0IG1hcFJvdXRlUHJvcGVydGllczIgPSBfbWFwUm91dGVQcm9wZXJ0aWVzO1xuICBpZiAoaW5pdC51bnN0YWJsZV9pbnN0cnVtZW50YXRpb25zKSB7XG4gICAgbGV0IGluc3RydW1lbnRhdGlvbnMgPSBpbml0LnVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnM7XG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzMiA9IChyb3V0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uX21hcFJvdXRlUHJvcGVydGllcyhyb3V0ZSksXG4gICAgICAgIC4uLmdldFJvdXRlSW5zdHJ1bWVudGF0aW9uVXBkYXRlcyhcbiAgICAgICAgICBpbnN0cnVtZW50YXRpb25zLm1hcCgoaSkgPT4gaS5yb3V0ZSkuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIHJvdXRlXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKFxuICAgIGluaXQucm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgdm9pZCAwLFxuICAgIG1hbmlmZXN0XG4gICk7XG4gIGxldCBpbkZsaWdodERhdGFSb3V0ZXM7XG4gIGxldCBiYXNlbmFtZSA9IGluaXQuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGlmICghYmFzZW5hbWUuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICBiYXNlbmFtZSA9IGAvJHtiYXNlbmFtZX1gO1xuICB9XG4gIGxldCBkYXRhU3RyYXRlZ3lJbXBsID0gaW5pdC5kYXRhU3RyYXRlZ3kgfHwgZGVmYXVsdERhdGFTdHJhdGVneVdpdGhNaWRkbGV3YXJlO1xuICBsZXQgZnV0dXJlID0ge1xuICAgIC4uLmluaXQuZnV0dXJlXG4gIH07XG4gIGxldCB1bmxpc3Rlbkhpc3RvcnkgPSBudWxsO1xuICBsZXQgc3Vic2NyaWJlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBsZXQgc2F2ZWRTY3JvbGxQb3NpdGlvbnMyID0gbnVsbDtcbiAgbGV0IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5MiA9IG51bGw7XG4gIGxldCBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gIGxldCBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IGluaXRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gIGxldCBpbml0aWFsTWF0Y2hlc0lzRk9XID0gZmFsc2U7XG4gIGxldCBpbml0aWFsRXJyb3JzID0gbnVsbDtcbiAgbGV0IGluaXRpYWxpemVkO1xuICBpZiAoaW5pdGlhbE1hdGNoZXMgPT0gbnVsbCAmJiAhaW5pdC5wYXRjaFJvdXRlc09uTmF2aWdhdGlvbikge1xuICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICBwYXRobmFtZTogaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfSk7XG4gICAgbGV0IHsgbWF0Y2hlcywgcm91dGUgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGluaXRpYWxNYXRjaGVzID0gbWF0Y2hlcztcbiAgICBpbml0aWFsRXJyb3JzID0geyBbcm91dGUuaWRdOiBlcnJvciB9O1xuICB9IGVsc2Uge1xuICAgIGlmIChpbml0aWFsTWF0Y2hlcyAmJiAhaW5pdC5oeWRyYXRpb25EYXRhKSB7XG4gICAgICBsZXQgZm9nT2ZXYXIgPSBjaGVja0ZvZ09mV2FyKFxuICAgICAgICBpbml0aWFsTWF0Y2hlcyxcbiAgICAgICAgZGF0YVJvdXRlcyxcbiAgICAgICAgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICApO1xuICAgICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSkge1xuICAgICAgICBpbml0aWFsTWF0Y2hlcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaW5pdGlhbE1hdGNoZXMpIHtcbiAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICBpbml0aWFsTWF0Y2hlcyA9IFtdO1xuICAgICAgbGV0IGZvZ09mV2FyID0gY2hlY2tGb2dPZldhcihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZGF0YVJvdXRlcyxcbiAgICAgICAgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICApO1xuICAgICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSAmJiBmb2dPZldhci5tYXRjaGVzKSB7XG4gICAgICAgIGluaXRpYWxNYXRjaGVzSXNGT1cgPSB0cnVlO1xuICAgICAgICBpbml0aWFsTWF0Y2hlcyA9IGZvZ09mV2FyLm1hdGNoZXM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbml0aWFsTWF0Y2hlcy5zb21lKChtKSA9PiBtLnJvdXRlLmxhenkpKSB7XG4gICAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWluaXRpYWxNYXRjaGVzLnNvbWUoKG0pID0+IHJvdXRlSGFzTG9hZGVyT3JNaWRkbGV3YXJlKG0ucm91dGUpKSkge1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbG9hZGVyRGF0YSA9IGluaXQuaHlkcmF0aW9uRGF0YSA/IGluaXQuaHlkcmF0aW9uRGF0YS5sb2FkZXJEYXRhIDogbnVsbDtcbiAgICAgIGxldCBlcnJvcnMgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgPyBpbml0Lmh5ZHJhdGlvbkRhdGEuZXJyb3JzIDogbnVsbDtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgbGV0IGlkeCA9IGluaXRpYWxNYXRjaGVzLmZpbmRJbmRleChcbiAgICAgICAgICAobSkgPT4gZXJyb3JzW20ucm91dGUuaWRdICE9PSB2b2lkIDBcbiAgICAgICAgKTtcbiAgICAgICAgaW5pdGlhbGl6ZWQgPSBpbml0aWFsTWF0Y2hlcy5zbGljZSgwLCBpZHggKyAxKS5ldmVyeShcbiAgICAgICAgICAobSkgPT4gIXNob3VsZExvYWRSb3V0ZU9uSHlkcmF0aW9uKG0ucm91dGUsIGxvYWRlckRhdGEsIGVycm9ycylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxpemVkID0gaW5pdGlhbE1hdGNoZXMuZXZlcnkoXG4gICAgICAgICAgKG0pID0+ICFzaG91bGRMb2FkUm91dGVPbkh5ZHJhdGlvbihtLnJvdXRlLCBsb2FkZXJEYXRhLCBlcnJvcnMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCByb3V0ZXI7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBoaXN0b3J5QWN0aW9uOiBpbml0Lmhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBpbml0Lmhpc3RvcnkubG9jYXRpb24sXG4gICAgbWF0Y2hlczogaW5pdGlhbE1hdGNoZXMsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgIC8vIERvbid0IHJlc3RvcmUgb24gaW5pdGlhbCB1cGRhdGVTdGF0ZSgpIGlmIHdlIHdlcmUgU1NSJ2RcbiAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsID8gZmFsc2UgOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldDogZmFsc2UsXG4gICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICBsb2FkZXJEYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmxvYWRlckRhdGEgfHwge30sXG4gICAgYWN0aW9uRGF0YTogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5hY3Rpb25EYXRhIHx8IG51bGwsXG4gICAgZXJyb3JzOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmVycm9ycyB8fCBpbml0aWFsRXJyb3JzLFxuICAgIGZldGNoZXJzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgIGJsb2NrZXJzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpXG4gIH07XG4gIGxldCBwZW5kaW5nQWN0aW9uID0gXCJQT1BcIiAvKiBQb3AgKi87XG4gIGxldCBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7XG4gIGxldCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXI7XG4gIGxldCBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkID0gZmFsc2U7XG4gIGxldCBhcHBsaWVkVmlld1RyYW5zaXRpb25zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IHJlbW92ZVBhZ2VIaWRlRXZlbnRMaXN0ZW5lciA9IG51bGw7XG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgbGV0IGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgbGV0IGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBmZXRjaENvbnRyb2xsZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IGluY3JlbWVudGluZ0xvYWRJZCA9IDA7XG4gIGxldCBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9IC0xO1xuICBsZXQgZmV0Y2hSZWxvYWRJZHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgZmV0Y2hSZWRpcmVjdElkcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBmZXRjaExvYWRNYXRjaGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IGFjdGl2ZUZldGNoZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IGZldGNoZXJzUXVldWVkRm9yRGVsZXRpb24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGxldCB1bmJsb2NrQmxvY2tlckhpc3RvcnlVcGRhdGUgPSB2b2lkIDA7XG4gIGxldCBwZW5kaW5nUmV2YWxpZGF0aW9uRGZkID0gbnVsbDtcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICB1bmxpc3Rlbkhpc3RvcnkgPSBpbml0Lmhpc3RvcnkubGlzdGVuKFxuICAgICAgKHsgYWN0aW9uOiBoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbiwgZGVsdGEgfSkgPT4ge1xuICAgICAgICBpZiAodW5ibG9ja0Jsb2NrZXJIaXN0b3J5VXBkYXRlKSB7XG4gICAgICAgICAgdW5ibG9ja0Jsb2NrZXJIaXN0b3J5VXBkYXRlKCk7XG4gICAgICAgICAgdW5ibG9ja0Jsb2NrZXJIaXN0b3J5VXBkYXRlID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLFxuICAgICAgICAgIFwiWW91IGFyZSB0cnlpbmcgdG8gdXNlIGEgYmxvY2tlciBvbiBhIFBPUCBuYXZpZ2F0aW9uIHRvIGEgbG9jYXRpb24gdGhhdCB3YXMgbm90IGNyZWF0ZWQgYnkgQHJlbWl4LXJ1bi9yb3V0ZXIuIFRoaXMgd2lsbCBmYWlsIHNpbGVudGx5IGluIHByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIHZpYSBgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlYC9gd2luZG93LmxvY2F0aW9uLmhhc2hgIGluc3RlYWQgb2YgdXNpbmcgcm91dGVyIG5hdmlnYXRpb24gQVBJcy4gIFRoaXMgY2FuIGFsc28gaGFwcGVuIGlmIHlvdSBhcmUgdXNpbmcgY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiXG4gICAgICAgICk7XG4gICAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgICAgIG5leHRMb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGJsb2NrZXJLZXkgJiYgZGVsdGEgIT0gbnVsbCkge1xuICAgICAgICAgIGxldCBuZXh0SGlzdG9yeVVwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdW5ibG9ja0Jsb2NrZXJIaXN0b3J5VXBkYXRlID0gcmVzb2x2ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEgKiAtMSk7XG4gICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBcInByb2NlZWRpbmdcIixcbiAgICAgICAgICAgICAgICBwcm9jZWVkOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgcmVzZXQ6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbmV4dEhpc3RvcnlVcGRhdGVQcm9taXNlLnRoZW4oKCkgPT4gaW5pdC5oaXN0b3J5LmdvKGRlbHRhKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICAgIGxldCBibG9ja2VycyA9IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpO1xuICAgICAgICAgICAgICBibG9ja2Vycy5zZXQoYmxvY2tlcktleSwgSURMRV9CTE9DS0VSKTtcbiAgICAgICAgICAgICAgdXBkYXRlU3RhdGUoeyBibG9ja2VycyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAoaXNCcm93c2VyMikge1xuICAgICAgcmVzdG9yZUFwcGxpZWRUcmFuc2l0aW9ucyhyb3V0ZXJXaW5kb3csIGFwcGxpZWRWaWV3VHJhbnNpdGlvbnMpO1xuICAgICAgbGV0IF9zYXZlQXBwbGllZFRyYW5zaXRpb25zID0gKCkgPT4gcGVyc2lzdEFwcGxpZWRUcmFuc2l0aW9ucyhyb3V0ZXJXaW5kb3csIGFwcGxpZWRWaWV3VHJhbnNpdGlvbnMpO1xuICAgICAgcm91dGVyV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBfc2F2ZUFwcGxpZWRUcmFuc2l0aW9ucyk7XG4gICAgICByZW1vdmVQYWdlSGlkZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiByb3V0ZXJXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIF9zYXZlQXBwbGllZFRyYW5zaXRpb25zKTtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKFwiUE9QXCIgLyogUG9wICovLCBzdGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICBpbml0aWFsSHlkcmF0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfVxuICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh1bmxpc3Rlbkhpc3RvcnkpIHtcbiAgICAgIHVubGlzdGVuSGlzdG9yeSgpO1xuICAgIH1cbiAgICBpZiAocmVtb3ZlUGFnZUhpZGVFdmVudExpc3RlbmVyKSB7XG4gICAgICByZW1vdmVQYWdlSGlkZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVGZXRjaGVyKGtleSkpO1xuICAgIHN0YXRlLmJsb2NrZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlQmxvY2tlcihrZXkpKTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcbiAgICBzdWJzY3JpYmVycy5hZGQoZm4pO1xuICAgIHJldHVybiAoKSA9PiBzdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlLCBvcHRzID0ge30pIHtcbiAgICBpZiAobmV3U3RhdGUubWF0Y2hlcykge1xuICAgICAgbmV3U3RhdGUubWF0Y2hlcyA9IG5ld1N0YXRlLm1hdGNoZXMubWFwKChtKSA9PiB7XG4gICAgICAgIGxldCByb3V0ZSA9IG1hbmlmZXN0W20ucm91dGUuaWRdO1xuICAgICAgICBsZXQgbWF0Y2hSb3V0ZSA9IG0ucm91dGU7XG4gICAgICAgIGlmIChtYXRjaFJvdXRlLmVsZW1lbnQgIT09IHJvdXRlLmVsZW1lbnQgfHwgbWF0Y2hSb3V0ZS5lcnJvckVsZW1lbnQgIT09IHJvdXRlLmVycm9yRWxlbWVudCB8fCBtYXRjaFJvdXRlLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQgIT09IHJvdXRlLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubSxcbiAgICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4ubmV3U3RhdGVcbiAgICB9O1xuICAgIGxldCB1bm1vdW50ZWRGZXRjaGVycyA9IFtdO1xuICAgIGxldCBtb3VudGVkRmV0Y2hlcnMgPSBbXTtcbiAgICBzdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChmZXRjaGVyLCBrZXkpID0+IHtcbiAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICBpZiAoZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbi5oYXMoa2V5KSkge1xuICAgICAgICAgIHVubW91bnRlZEZldGNoZXJzLnB1c2goa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3VudGVkRmV0Y2hlcnMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbi5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghc3RhdGUuZmV0Y2hlcnMuaGFzKGtleSkgJiYgIWZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgdW5tb3VudGVkRmV0Y2hlcnMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFsuLi5zdWJzY3JpYmVyc10uZm9yRWFjaChcbiAgICAgIChzdWJzY3JpYmVyKSA9PiBzdWJzY3JpYmVyKHN0YXRlLCB7XG4gICAgICAgIGRlbGV0ZWRGZXRjaGVyczogdW5tb3VudGVkRmV0Y2hlcnMsXG4gICAgICAgIHZpZXdUcmFuc2l0aW9uT3B0czogb3B0cy52aWV3VHJhbnNpdGlvbk9wdHMsXG4gICAgICAgIGZsdXNoU3luYzogb3B0cy5mbHVzaFN5bmMgPT09IHRydWVcbiAgICAgIH0pXG4gICAgKTtcbiAgICB1bm1vdW50ZWRGZXRjaGVycy5mb3JFYWNoKChrZXkpID0+IGRlbGV0ZUZldGNoZXIoa2V5KSk7XG4gICAgbW91bnRlZEZldGNoZXJzLmZvckVhY2goKGtleSkgPT4gc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSkpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUsIHsgZmx1c2hTeW5jIH0gPSB7fSkge1xuICAgIGxldCBpc0FjdGlvblJlbG9hZCA9IHN0YXRlLmFjdGlvbkRhdGEgIT0gbnVsbCAmJiBzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QgIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCkgJiYgc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgbG9jYXRpb24uc3RhdGU/Ll9pc1JlZGlyZWN0ICE9PSB0cnVlO1xuICAgIGxldCBhY3Rpb25EYXRhO1xuICAgIGlmIChuZXdTdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3Rpb25EYXRhID0gbmV3U3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBY3Rpb25SZWxvYWQpIHtcbiAgICAgIGFjdGlvbkRhdGEgPSBzdGF0ZS5hY3Rpb25EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25EYXRhID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IGxvYWRlckRhdGEgPSBuZXdTdGF0ZS5sb2FkZXJEYXRhID8gbWVyZ2VMb2FkZXJEYXRhKFxuICAgICAgc3RhdGUubG9hZGVyRGF0YSxcbiAgICAgIG5ld1N0YXRlLmxvYWRlckRhdGEsXG4gICAgICBuZXdTdGF0ZS5tYXRjaGVzIHx8IFtdLFxuICAgICAgbmV3U3RhdGUuZXJyb3JzXG4gICAgKSA6IHN0YXRlLmxvYWRlckRhdGE7XG4gICAgbGV0IGJsb2NrZXJzID0gc3RhdGUuYmxvY2tlcnM7XG4gICAgaWYgKGJsb2NrZXJzLnNpemUgPiAwKSB7XG4gICAgICBibG9ja2VycyA9IG5ldyBNYXAoYmxvY2tlcnMpO1xuICAgICAgYmxvY2tlcnMuZm9yRWFjaCgoXywgaykgPT4gYmxvY2tlcnMuc2V0KGssIElETEVfQkxPQ0tFUikpO1xuICAgIH1cbiAgICBsZXQgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID0gaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID8gZmFsc2UgOiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZS5tYXRjaGVzIHx8IHN0YXRlLm1hdGNoZXMpO1xuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIHx8IHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiBsb2NhdGlvbi5zdGF0ZT8uX2lzUmVkaXJlY3QgIT09IHRydWU7XG4gICAgaWYgKGluRmxpZ2h0RGF0YVJvdXRlcykge1xuICAgICAgZGF0YVJvdXRlcyA9IGluRmxpZ2h0RGF0YVJvdXRlcztcbiAgICAgIGluRmxpZ2h0RGF0YVJvdXRlcyA9IHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikge1xuICAgIH0gZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gXCJQT1BcIiAvKiBQb3AgKi8pIHtcbiAgICB9IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IFwiUFVTSFwiIC8qIFB1c2ggKi8pIHtcbiAgICAgIGluaXQuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBcIlJFUExBQ0VcIiAvKiBSZXBsYWNlICovKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH1cbiAgICBsZXQgdmlld1RyYW5zaXRpb25PcHRzO1xuICAgIGlmIChwZW5kaW5nQWN0aW9uID09PSBcIlBPUFwiIC8qIFBvcCAqLykge1xuICAgICAgbGV0IHByaW9yUGF0aHMgPSBhcHBsaWVkVmlld1RyYW5zaXRpb25zLmdldChzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBpZiAocHJpb3JQYXRocyAmJiBwcmlvclBhdGhzLmhhcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdmlld1RyYW5zaXRpb25PcHRzID0ge1xuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChhcHBsaWVkVmlld1RyYW5zaXRpb25zLmhhcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdmlld1RyYW5zaXRpb25PcHRzID0ge1xuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgbmV4dExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGVuZGluZ1ZpZXdUcmFuc2l0aW9uRW5hYmxlZCkge1xuICAgICAgbGV0IHRvUGF0aHMgPSBhcHBsaWVkVmlld1RyYW5zaXRpb25zLmdldChzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICBpZiAodG9QYXRocykge1xuICAgICAgICB0b1BhdGhzLmFkZChsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b1BhdGhzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG4gICAgICAgIGFwcGxpZWRWaWV3VHJhbnNpdGlvbnMuc2V0KHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lLCB0b1BhdGhzKTtcbiAgICAgIH1cbiAgICAgIHZpZXdUcmFuc2l0aW9uT3B0cyA9IHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlU3RhdGUoXG4gICAgICB7XG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAvLyBtYXRjaGVzLCBlcnJvcnMsIGZldGNoZXJzIGdvIHRocm91Z2ggYXMtaXNcbiAgICAgICAgYWN0aW9uRGF0YSxcbiAgICAgICAgbG9hZGVyRGF0YSxcbiAgICAgICAgaGlzdG9yeUFjdGlvbjogcGVuZGluZ0FjdGlvbixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgICAgIHJldmFsaWRhdGlvbjogXCJpZGxlXCIsXG4gICAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgICBibG9ja2Vyc1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlld1RyYW5zaXRpb25PcHRzLFxuICAgICAgICBmbHVzaFN5bmM6IGZsdXNoU3luYyA9PT0gdHJ1ZVxuICAgICAgfVxuICAgICk7XG4gICAgcGVuZGluZ0FjdGlvbiA9IFwiUE9QXCIgLyogUG9wICovO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTtcbiAgICBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gZmFsc2U7XG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIHBlbmRpbmdSZXZhbGlkYXRpb25EZmQ/LnJlc29sdmUoKTtcbiAgICBwZW5kaW5nUmV2YWxpZGF0aW9uRGZkID0gbnVsbDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZSh0bywgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZVRvKFxuICAgICAgc3RhdGUubG9jYXRpb24sXG4gICAgICBzdGF0ZS5tYXRjaGVzLFxuICAgICAgYmFzZW5hbWUsXG4gICAgICB0byxcbiAgICAgIG9wdHM/LmZyb21Sb3V0ZUlkLFxuICAgICAgb3B0cz8ucmVsYXRpdmVcbiAgICApO1xuICAgIGxldCB7IHBhdGgsIHN1Ym1pc3Npb24sIGVycm9yIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoXG4gICAgICBmYWxzZSxcbiAgICAgIG5vcm1hbGl6ZWRQYXRoLFxuICAgICAgb3B0c1xuICAgICk7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcGF0aCwgb3B0cyAmJiBvcHRzLnN0YXRlKTtcbiAgICBuZXh0TG9jYXRpb24gPSB7XG4gICAgICAuLi5uZXh0TG9jYXRpb24sXG4gICAgICAuLi5pbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24obmV4dExvY2F0aW9uKVxuICAgIH07XG4gICAgbGV0IHVzZXJSZXBsYWNlID0gb3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCA/IG9wdHMucmVwbGFjZSA6IHZvaWQgMDtcbiAgICBsZXQgaGlzdG9yeUFjdGlvbiA9IFwiUFVTSFwiIC8qIFB1c2ggKi87XG4gICAgaWYgKHVzZXJSZXBsYWNlID09PSB0cnVlKSB7XG4gICAgICBoaXN0b3J5QWN0aW9uID0gXCJSRVBMQUNFXCIgLyogUmVwbGFjZSAqLztcbiAgICB9IGVsc2UgaWYgKHVzZXJSZXBsYWNlID09PSBmYWxzZSkge1xuICAgIH0gZWxzZSBpZiAoc3VibWlzc2lvbiAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSAmJiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24gPT09IHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lICsgc3RhdGUubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBoaXN0b3J5QWN0aW9uID0gXCJSRVBMQUNFXCIgLyogUmVwbGFjZSAqLztcbiAgICB9XG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IG9wdHMgJiYgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIiBpbiBvcHRzID8gb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUgOiB2b2lkIDA7XG4gICAgbGV0IGZsdXNoU3luYyA9IChvcHRzICYmIG9wdHMuZmx1c2hTeW5jKSA9PT0gdHJ1ZTtcbiAgICBsZXQgYmxvY2tlcktleSA9IHNob3VsZEJsb2NrTmF2aWdhdGlvbih7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSk7XG4gICAgaWYgKGJsb2NrZXJLZXkpIHtcbiAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICBwcm9jZWVkOiB2b2lkIDAsXG4gICAgICAgICAgICByZXNldDogdm9pZCAwLFxuICAgICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5hdmlnYXRlKHRvLCBvcHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgbGV0IGJsb2NrZXJzID0gbmV3IE1hcChzdGF0ZS5ibG9ja2Vycyk7XG4gICAgICAgICAgYmxvY2tlcnMuc2V0KGJsb2NrZXJLZXksIElETEVfQkxPQ0tFUik7XG4gICAgICAgICAgdXBkYXRlU3RhdGUoeyBibG9ja2VycyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBuZXh0TG9jYXRpb24sIHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAvLyBTZW5kIHRocm91Z2ggdGhlIGZvcm1EYXRhIHNlcmlhbGl6YXRpb24gZXJyb3IgaWYgd2UgaGF2ZSBvbmUgc28gd2UgY2FuXG4gICAgICAvLyByZW5kZXIgYXQgdGhlIHJpZ2h0IGVycm9yIGJvdW5kYXJ5IGFmdGVyIHdlIG1hdGNoIHJvdXRlc1xuICAgICAgcGVuZGluZ0Vycm9yOiBlcnJvcixcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIHJlcGxhY2U6IG9wdHMgJiYgb3B0cy5yZXBsYWNlLFxuICAgICAgZW5hYmxlVmlld1RyYW5zaXRpb246IG9wdHMgJiYgb3B0cy52aWV3VHJhbnNpdGlvbixcbiAgICAgIGZsdXNoU3luY1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJldmFsaWRhdGUoKSB7XG4gICAgaWYgKCFwZW5kaW5nUmV2YWxpZGF0aW9uRGZkKSB7XG4gICAgICBwZW5kaW5nUmV2YWxpZGF0aW9uRGZkID0gY3JlYXRlRGVmZXJyZWQoKTtcbiAgICB9XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICB1cGRhdGVTdGF0ZSh7IHJldmFsaWRhdGlvbjogXCJsb2FkaW5nXCIgfSk7XG4gICAgbGV0IHByb21pc2UgPSBwZW5kaW5nUmV2YWxpZGF0aW9uRGZkLnByb21pc2U7XG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubG9jYXRpb24sIHtcbiAgICAgICAgc3RhcnRVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBzdGFydE5hdmlnYXRpb24oXG4gICAgICBwZW5kaW5nQWN0aW9uIHx8IHN0YXRlLmhpc3RvcnlBY3Rpb24sXG4gICAgICBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLFxuICAgICAge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb24sXG4gICAgICAgIC8vIFByb3h5IHRocm91Z2ggYW55IHJlbmRpbmcgdmlldyB0cmFuc2l0aW9uXG4gICAgICAgIGVuYWJsZVZpZXdUcmFuc2l0aW9uOiBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkID09PSB0cnVlXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbG9jYXRpb24sIG9wdHMpIHtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBwZW5kaW5nQWN0aW9uID0gaGlzdG9yeUFjdGlvbjtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSAob3B0cyAmJiBvcHRzLnN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikgPT09IHRydWU7XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5tYXRjaGVzKTtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gKG9wdHMgJiYgb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQpID09PSB0cnVlO1xuICAgIHBlbmRpbmdWaWV3VHJhbnNpdGlvbkVuYWJsZWQgPSAob3B0cyAmJiBvcHRzLmVuYWJsZVZpZXdUcmFuc2l0aW9uKSA9PT0gdHJ1ZTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvcHRzICYmIG9wdHMub3ZlcnJpZGVOYXZpZ2F0aW9uO1xuICAgIGxldCBtYXRjaGVzID0gb3B0cz8uaW5pdGlhbEh5ZHJhdGlvbiAmJiBzdGF0ZS5tYXRjaGVzICYmIHN0YXRlLm1hdGNoZXMubGVuZ3RoID4gMCAmJiAhaW5pdGlhbE1hdGNoZXNJc0ZPVyA/IChcbiAgICAgIC8vIGBtYXRjaFJvdXRlcygpYCBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZCBpZiB3ZSdyZSBpbiBoZXJlIHZpYSBgcm91dGVyLmluaXRpYWxpemUoKWBcbiAgICAgIHN0YXRlLm1hdGNoZXNcbiAgICApIDogbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gICAgbGV0IGZsdXNoU3luYyA9IChvcHRzICYmIG9wdHMuZmx1c2hTeW5jKSA9PT0gdHJ1ZTtcbiAgICBpZiAobWF0Y2hlcyAmJiBzdGF0ZS5pbml0aWFsaXplZCAmJiAhaXNSZXZhbGlkYXRpb25SZXF1aXJlZCAmJiBpc0hhc2hDaGFuZ2VPbmx5KHN0YXRlLmxvY2F0aW9uLCBsb2NhdGlvbikgJiYgIShvcHRzICYmIG9wdHMuc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKG9wdHMuc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkpIHtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgeyBtYXRjaGVzIH0sIHsgZmx1c2hTeW5jIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZm9nT2ZXYXIgPSBjaGVja0ZvZ09mV2FyKG1hdGNoZXMsIHJvdXRlc1RvVXNlLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSAmJiBmb2dPZldhci5tYXRjaGVzKSB7XG4gICAgICBtYXRjaGVzID0gZm9nT2ZXYXIubWF0Y2hlcztcbiAgICB9XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgeyBlcnJvciwgbm90Rm91bmRNYXRjaGVzLCByb3V0ZSB9ID0gaGFuZGxlTmF2aWdhdGlvbmFsNDA0KFxuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyBmbHVzaFN5bmMgfVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoXG4gICAgICBpbml0Lmhpc3RvcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5zaWduYWwsXG4gICAgICBvcHRzICYmIG9wdHMuc3VibWlzc2lvblxuICAgICk7XG4gICAgbGV0IHNjb3BlZENvbnRleHQgPSBpbml0LmdldENvbnRleHQgPyBhd2FpdCBpbml0LmdldENvbnRleHQoKSA6IG5ldyBSb3V0ZXJDb250ZXh0UHJvdmlkZXIoKTtcbiAgICBsZXQgcGVuZGluZ0FjdGlvblJlc3VsdDtcbiAgICBpZiAob3B0cyAmJiBvcHRzLnBlbmRpbmdFcnJvcikge1xuICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdCA9IFtcbiAgICAgICAgZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzKS5yb3V0ZS5pZCxcbiAgICAgICAgeyB0eXBlOiBcImVycm9yXCIgLyogZXJyb3IgKi8sIGVycm9yOiBvcHRzLnBlbmRpbmdFcnJvciB9XG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGxldCBhY3Rpb25SZXN1bHQgPSBhd2FpdCBoYW5kbGVBY3Rpb24oXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBvcHRzLnN1Ym1pc3Npb24sXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICAgIGZvZ09mV2FyLmFjdGl2ZSxcbiAgICAgICAgb3B0cyAmJiBvcHRzLmluaXRpYWxIeWRyYXRpb24gPT09IHRydWUsXG4gICAgICAgIHsgcmVwbGFjZTogb3B0cy5yZXBsYWNlLCBmbHVzaFN5bmMgfVxuICAgICAgKTtcbiAgICAgIGlmIChhY3Rpb25SZXN1bHQuc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvblJlc3VsdC5wZW5kaW5nQWN0aW9uUmVzdWx0KSB7XG4gICAgICAgIGxldCBbcm91dGVJZCwgcmVzdWx0XSA9IGFjdGlvblJlc3VsdC5wZW5kaW5nQWN0aW9uUmVzdWx0O1xuICAgICAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpICYmIGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgJiYgcmVzdWx0LmVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgICAgICAgIG1hdGNoZXM6IGFjdGlvblJlc3VsdC5tYXRjaGVzLFxuICAgICAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgICAgW3JvdXRlSWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXMgPSBhY3Rpb25SZXN1bHQubWF0Y2hlcyB8fCBtYXRjaGVzO1xuICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdCA9IGFjdGlvblJlc3VsdC5wZW5kaW5nQWN0aW9uUmVzdWx0O1xuICAgICAgbG9hZGluZ05hdmlnYXRpb24gPSBnZXRMb2FkaW5nTmF2aWdhdGlvbihsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uKTtcbiAgICAgIGZsdXNoU3luYyA9IGZhbHNlO1xuICAgICAgZm9nT2ZXYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoXG4gICAgICAgIGluaXQuaGlzdG9yeSxcbiAgICAgICAgcmVxdWVzdC51cmwsXG4gICAgICAgIHJlcXVlc3Quc2lnbmFsXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQge1xuICAgICAgc2hvcnRDaXJjdWl0ZWQsXG4gICAgICBtYXRjaGVzOiB1cGRhdGVkTWF0Y2hlcyxcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gYXdhaXQgaGFuZGxlTG9hZGVycyhcbiAgICAgIHJlcXVlc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIG1hdGNoZXMsXG4gICAgICBzY29wZWRDb250ZXh0LFxuICAgICAgZm9nT2ZXYXIuYWN0aXZlLFxuICAgICAgbG9hZGluZ05hdmlnYXRpb24sXG4gICAgICBvcHRzICYmIG9wdHMuc3VibWlzc2lvbixcbiAgICAgIG9wdHMgJiYgb3B0cy5mZXRjaGVyU3VibWlzc2lvbixcbiAgICAgIG9wdHMgJiYgb3B0cy5yZXBsYWNlLFxuICAgICAgb3B0cyAmJiBvcHRzLmluaXRpYWxIeWRyYXRpb24gPT09IHRydWUsXG4gICAgICBmbHVzaFN5bmMsXG4gICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0XG4gICAgKTtcbiAgICBpZiAoc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgIG1hdGNoZXM6IHVwZGF0ZWRNYXRjaGVzIHx8IG1hdGNoZXMsXG4gICAgICAuLi5nZXRBY3Rpb25EYXRhRm9yQ29tbWl0KHBlbmRpbmdBY3Rpb25SZXN1bHQpLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgc3VibWlzc2lvbiwgbWF0Y2hlcywgc2NvcGVkQ29udGV4dCwgaXNGb2dPZldhciwgaW5pdGlhbEh5ZHJhdGlvbiwgb3B0cyA9IHt9KSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBsZXQgbmF2aWdhdGlvbiA9IGdldFN1Ym1pdHRpbmdOYXZpZ2F0aW9uKGxvY2F0aW9uLCBzdWJtaXNzaW9uKTtcbiAgICB1cGRhdGVTdGF0ZSh7IG5hdmlnYXRpb24gfSwgeyBmbHVzaFN5bmM6IG9wdHMuZmx1c2hTeW5jID09PSB0cnVlIH0pO1xuICAgIGlmIChpc0ZvZ09mV2FyKSB7XG4gICAgICBsZXQgZGlzY292ZXJSZXN1bHQgPSBhd2FpdCBkaXNjb3ZlclJvdXRlcyhcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHJlcXVlc3Quc2lnbmFsXG4gICAgICApO1xuICAgICAgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgIHJldHVybiB7IHNob3J0Q2lyY3VpdGVkOiB0cnVlIH07XG4gICAgICB9IGVsc2UgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICBpZiAoZGlzY292ZXJSZXN1bHQucGFydGlhbE1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGV0IHsgbWF0Y2hlczogbWF0Y2hlczIsIHJvdXRlIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXRjaGVzOiBtYXRjaGVzMixcbiAgICAgICAgICAgIHBlbmRpbmdBY3Rpb25SZXN1bHQ6IFtcbiAgICAgICAgICAgICAgcm91dGUuaWQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIgLyogZXJyb3IgKi8sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGRpc2NvdmVyUmVzdWx0LmVycm9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3VuZGFyeUlkID0gZmluZE5lYXJlc3RCb3VuZGFyeShkaXNjb3ZlclJlc3VsdC5wYXJ0aWFsTWF0Y2hlcykucm91dGUuaWQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWF0Y2hlczogZGlzY292ZXJSZXN1bHQucGFydGlhbE1hdGNoZXMsXG4gICAgICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdDogW1xuICAgICAgICAgICAgYm91bmRhcnlJZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiIC8qIGVycm9yICovLFxuICAgICAgICAgICAgICBlcnJvcjogZGlzY292ZXJSZXN1bHQuZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKCFkaXNjb3ZlclJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgIGxldCB7IG5vdEZvdW5kTWF0Y2hlcywgZXJyb3IsIHJvdXRlIH0gPSBoYW5kbGVOYXZpZ2F0aW9uYWw0MDQoXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdDogW1xuICAgICAgICAgICAgcm91dGUuaWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIiAvKiBlcnJvciAqLyxcbiAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGVzID0gZGlzY292ZXJSZXN1bHQubWF0Y2hlcztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogXCJlcnJvclwiIC8qIGVycm9yICovLFxuICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRzTWF0Y2hlcyA9IGdldFRhcmdldGVkRGF0YVN0cmF0ZWd5TWF0Y2hlcyhcbiAgICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGFjdGlvbk1hdGNoLFxuICAgICAgICBpbml0aWFsSHlkcmF0aW9uID8gW10gOiBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgICBzY29wZWRDb250ZXh0XG4gICAgICApO1xuICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBjYWxsRGF0YVN0cmF0ZWd5KFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBkc01hdGNoZXMsXG4gICAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgICByZXN1bHQgPSByZXN1bHRzW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgICAgICBpZiAocmVzdWx0c1ttYXRjaC5yb3V0ZS5pZF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4geyBzaG9ydENpcmN1aXRlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgcmVwbGFjZTI7XG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlMiA9IG9wdHMucmVwbGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsb2NhdGlvbjIgPSBub3JtYWxpemVSZWRpcmVjdExvY2F0aW9uKFxuICAgICAgICAgIHJlc3VsdC5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpLFxuICAgICAgICAgIG5ldyBVUkwocmVxdWVzdC51cmwpLFxuICAgICAgICAgIGJhc2VuYW1lXG4gICAgICAgICk7XG4gICAgICAgIHJlcGxhY2UyID0gbG9jYXRpb24yID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHJlcXVlc3QsIHJlc3VsdCwgdHJ1ZSwge1xuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICByZXBsYWNlOiByZXBsYWNlMlxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBzaG9ydENpcmN1aXRlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgaWYgKChvcHRzICYmIG9wdHMucmVwbGFjZSkgIT09IHRydWUpIHtcbiAgICAgICAgcGVuZGluZ0FjdGlvbiA9IFwiUFVTSFwiIC8qIFB1c2ggKi87XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0OiBbXG4gICAgICAgICAgYm91bmRhcnlNYXRjaC5yb3V0ZS5pZCxcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgICAgXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBwZW5kaW5nQWN0aW9uUmVzdWx0OiBbYWN0aW9uTWF0Y2gucm91dGUuaWQsIHJlc3VsdF1cbiAgICB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvYWRlcnMocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHNjb3BlZENvbnRleHQsIGlzRm9nT2ZXYXIsIG92ZXJyaWRlTmF2aWdhdGlvbiwgc3VibWlzc2lvbiwgZmV0Y2hlclN1Ym1pc3Npb24sIHJlcGxhY2UyLCBpbml0aWFsSHlkcmF0aW9uLCBmbHVzaFN5bmMsIHBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvdmVycmlkZU5hdmlnYXRpb24gfHwgZ2V0TG9hZGluZ05hdmlnYXRpb24obG9jYXRpb24sIHN1Ym1pc3Npb24pO1xuICAgIGxldCBhY3RpdmVTdWJtaXNzaW9uID0gc3VibWlzc2lvbiB8fCBmZXRjaGVyU3VibWlzc2lvbiB8fCBnZXRTdWJtaXNzaW9uRnJvbU5hdmlnYXRpb24obG9hZGluZ05hdmlnYXRpb24pO1xuICAgIGxldCBzaG91bGRVcGRhdGVOYXZpZ2F0aW9uU3RhdGUgPSAhaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uICYmICFpbml0aWFsSHlkcmF0aW9uO1xuICAgIGlmIChpc0ZvZ09mV2FyKSB7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlTmF2aWdhdGlvblN0YXRlKSB7XG4gICAgICAgIGxldCBhY3Rpb25EYXRhID0gZ2V0VXBkYXRlZEFjdGlvbkRhdGEocGVuZGluZ0FjdGlvblJlc3VsdCk7XG4gICAgICAgIHVwZGF0ZVN0YXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb246IGxvYWRpbmdOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgLi4uYWN0aW9uRGF0YSAhPT0gdm9pZCAwID8geyBhY3Rpb25EYXRhIH0gOiB7fVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmx1c2hTeW5jXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbGV0IGRpc2NvdmVyUmVzdWx0ID0gYXdhaXQgZGlzY292ZXJSb3V0ZXMoXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByZXF1ZXN0LnNpZ25hbFxuICAgICAgKTtcbiAgICAgIGlmIChkaXNjb3ZlclJlc3VsdC50eXBlID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICByZXR1cm4geyBzaG9ydENpcmN1aXRlZDogdHJ1ZSB9O1xuICAgICAgfSBlbHNlIGlmIChkaXNjb3ZlclJlc3VsdC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgaWYgKGRpc2NvdmVyUmVzdWx0LnBhcnRpYWxNYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxldCB7IG1hdGNoZXM6IG1hdGNoZXMyLCByb3V0ZSB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF0Y2hlczogbWF0Y2hlczIsXG4gICAgICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgICBbcm91dGUuaWRdOiBkaXNjb3ZlclJlc3VsdC5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdW5kYXJ5SWQgPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KGRpc2NvdmVyUmVzdWx0LnBhcnRpYWxNYXRjaGVzKS5yb3V0ZS5pZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXRjaGVzOiBkaXNjb3ZlclJlc3VsdC5wYXJ0aWFsTWF0Y2hlcyxcbiAgICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgIFtib3VuZGFyeUlkXTogZGlzY292ZXJSZXN1bHQuZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKCFkaXNjb3ZlclJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgIGxldCB7IGVycm9yLCBub3RGb3VuZE1hdGNoZXMsIHJvdXRlIH0gPSBoYW5kbGVOYXZpZ2F0aW9uYWw0MDQoXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoZXMgPSBkaXNjb3ZlclJlc3VsdC5tYXRjaGVzO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgeyBkc01hdGNoZXMsIHJldmFsaWRhdGluZ0ZldGNoZXJzIH0gPSBnZXRNYXRjaGVzVG9Mb2FkKFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgbWFuaWZlc3QsXG4gICAgICBpbml0Lmhpc3RvcnksXG4gICAgICBzdGF0ZSxcbiAgICAgIG1hdGNoZXMsXG4gICAgICBhY3RpdmVTdWJtaXNzaW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBpbml0aWFsSHlkcmF0aW9uID8gW10gOiBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgaW5pdGlhbEh5ZHJhdGlvbiA9PT0gdHJ1ZSxcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsXG4gICAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsXG4gICAgICBmZXRjaGVyc1F1ZXVlZEZvckRlbGV0aW9uLFxuICAgICAgZmV0Y2hMb2FkTWF0Y2hlcyxcbiAgICAgIGZldGNoUmVkaXJlY3RJZHMsXG4gICAgICByb3V0ZXNUb1VzZSxcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgaW5pdC5wYXRjaFJvdXRlc09uTmF2aWdhdGlvbiAhPSBudWxsLFxuICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdFxuICAgICk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICBpZiAoIWluaXQuZGF0YVN0cmF0ZWd5ICYmICFkc01hdGNoZXMuc29tZSgobSkgPT4gbS5zaG91bGRMb2FkKSAmJiAhZHNNYXRjaGVzLnNvbWUoXG4gICAgICAobSkgPT4gbS5yb3V0ZS5taWRkbGV3YXJlICYmIG0ucm91dGUubWlkZGxld2FyZS5sZW5ndGggPiAwXG4gICAgKSAmJiByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGxldCB1cGRhdGVkRmV0Y2hlcnMyID0gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgICAgLy8gQ29tbWl0IHBlbmRpbmcgZXJyb3IgaWYgd2UncmUgc2hvcnQgY2lyY3VpdGluZ1xuICAgICAgICAgIGVycm9yczogcGVuZGluZ0FjdGlvblJlc3VsdCAmJiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pID8geyBbcGVuZGluZ0FjdGlvblJlc3VsdFswXV06IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZXJyb3IgfSA6IG51bGwsXG4gICAgICAgICAgLi4uZ2V0QWN0aW9uRGF0YUZvckNvbW1pdChwZW5kaW5nQWN0aW9uUmVzdWx0KSxcbiAgICAgICAgICAuLi51cGRhdGVkRmV0Y2hlcnMyID8geyBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycykgfSA6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIHsgZmx1c2hTeW5jIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4geyBzaG9ydENpcmN1aXRlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2hvdWxkVXBkYXRlTmF2aWdhdGlvblN0YXRlKSB7XG4gICAgICBsZXQgdXBkYXRlcyA9IHt9O1xuICAgICAgaWYgKCFpc0ZvZ09mV2FyKSB7XG4gICAgICAgIHVwZGF0ZXMubmF2aWdhdGlvbiA9IGxvYWRpbmdOYXZpZ2F0aW9uO1xuICAgICAgICBsZXQgYWN0aW9uRGF0YSA9IGdldFVwZGF0ZWRBY3Rpb25EYXRhKHBlbmRpbmdBY3Rpb25SZXN1bHQpO1xuICAgICAgICBpZiAoYWN0aW9uRGF0YSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdXBkYXRlcy5hY3Rpb25EYXRhID0gYWN0aW9uRGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdXBkYXRlcy5mZXRjaGVycyA9IGdldFVwZGF0ZWRSZXZhbGlkYXRpbmdGZXRjaGVycyhyZXZhbGlkYXRpbmdGZXRjaGVycyk7XG4gICAgICB9XG4gICAgICB1cGRhdGVTdGF0ZSh1cGRhdGVzLCB7IGZsdXNoU3luYyB9KTtcbiAgICB9XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaCgocmYpID0+IHtcbiAgICAgIGFib3J0RmV0Y2hlcihyZi5rZXkpO1xuICAgICAgaWYgKHJmLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgZmV0Y2hDb250cm9sbGVycy5zZXQocmYua2V5LCByZi5jb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zID0gKCkgPT4gcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaCgoZikgPT4gYWJvcnRGZXRjaGVyKGYua2V5KSk7XG4gICAgaWYgKHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcikge1xuICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImFib3J0XCIsXG4gICAgICAgIGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9uc1xuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IHsgbG9hZGVyUmVzdWx0cywgZmV0Y2hlclJlc3VsdHMgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShcbiAgICAgIGRzTWF0Y2hlcyxcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHNjb3BlZENvbnRleHRcbiAgICApO1xuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4geyBzaG9ydENpcmN1aXRlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAocGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyKSB7XG4gICAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiYWJvcnRcIixcbiAgICAgICAgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zXG4gICAgICApO1xuICAgIH1cbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKChyZikgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUocmYua2V5KSk7XG4gICAgbGV0IHJlZGlyZWN0MiA9IGZpbmRSZWRpcmVjdChsb2FkZXJSZXN1bHRzKTtcbiAgICBpZiAocmVkaXJlY3QyKSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihyZXF1ZXN0LCByZWRpcmVjdDIucmVzdWx0LCB0cnVlLCB7XG4gICAgICAgIHJlcGxhY2U6IHJlcGxhY2UyXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IHNob3J0Q2lyY3VpdGVkOiB0cnVlIH07XG4gICAgfVxuICAgIHJlZGlyZWN0MiA9IGZpbmRSZWRpcmVjdChmZXRjaGVyUmVzdWx0cyk7XG4gICAgaWYgKHJlZGlyZWN0Mikge1xuICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQocmVkaXJlY3QyLmtleSk7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihyZXF1ZXN0LCByZWRpcmVjdDIucmVzdWx0LCB0cnVlLCB7XG4gICAgICAgIHJlcGxhY2U6IHJlcGxhY2UyXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IHNob3J0Q2lyY3VpdGVkOiB0cnVlIH07XG4gICAgfVxuICAgIGxldCB7IGxvYWRlckRhdGEsIGVycm9ycyB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoXG4gICAgICBzdGF0ZSxcbiAgICAgIG1hdGNoZXMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdCxcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICApO1xuICAgIGlmIChpbml0aWFsSHlkcmF0aW9uICYmIHN0YXRlLmVycm9ycykge1xuICAgICAgZXJyb3JzID0geyAuLi5zdGF0ZS5lcnJvcnMsIC4uLmVycm9ycyB9O1xuICAgIH1cbiAgICBsZXQgdXBkYXRlZEZldGNoZXJzID0gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCk7XG4gICAgbGV0IHNob3VsZFVwZGF0ZUZldGNoZXJzID0gdXBkYXRlZEZldGNoZXJzIHx8IGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwO1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9ycyxcbiAgICAgIC4uLnNob3VsZFVwZGF0ZUZldGNoZXJzID8geyBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycykgfSA6IHt9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBnZXRVcGRhdGVkQWN0aW9uRGF0YShwZW5kaW5nQWN0aW9uUmVzdWx0KSB7XG4gICAgaWYgKHBlbmRpbmdBY3Rpb25SZXN1bHQgJiYgIWlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtwZW5kaW5nQWN0aW9uUmVzdWx0WzBdXTogcGVuZGluZ0FjdGlvblJlc3VsdFsxXS5kYXRhXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuYWN0aW9uRGF0YSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlLmFjdGlvbkRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5hY3Rpb25EYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRVcGRhdGVkUmV2YWxpZGF0aW5nRmV0Y2hlcnMocmV2YWxpZGF0aW5nRmV0Y2hlcnMpIHtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKChyZikgPT4ge1xuICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQocmYua2V5KTtcbiAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0gZ2V0TG9hZGluZ0ZldGNoZXIoXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgZmV0Y2hlciA/IGZldGNoZXIuZGF0YSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChyZi5rZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBmZXRjaDIoa2V5LCByb3V0ZUlkLCBocmVmLCBvcHRzKSB7XG4gICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgbGV0IGZsdXNoU3luYyA9IChvcHRzICYmIG9wdHMuZmx1c2hTeW5jKSA9PT0gdHJ1ZTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVUbyhcbiAgICAgIHN0YXRlLmxvY2F0aW9uLFxuICAgICAgc3RhdGUubWF0Y2hlcyxcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgaHJlZixcbiAgICAgIHJvdXRlSWQsXG4gICAgICBvcHRzPy5yZWxhdGl2ZVxuICAgICk7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgbm9ybWFsaXplZFBhdGgsIGJhc2VuYW1lKTtcbiAgICBsZXQgZm9nT2ZXYXIgPSBjaGVja0ZvZ09mV2FyKG1hdGNoZXMsIHJvdXRlc1RvVXNlLCBub3JtYWxpemVkUGF0aCk7XG4gICAgaWYgKGZvZ09mV2FyLmFjdGl2ZSAmJiBmb2dPZldhci5tYXRjaGVzKSB7XG4gICAgICBtYXRjaGVzID0gZm9nT2ZXYXIubWF0Y2hlcztcbiAgICB9XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3IoXG4gICAgICAgIGtleSxcbiAgICAgICAgcm91dGVJZCxcbiAgICAgICAgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHsgcGF0aG5hbWU6IG5vcm1hbGl6ZWRQYXRoIH0pLFxuICAgICAgICB7IGZsdXNoU3luYyB9XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgeyBwYXRoLCBzdWJtaXNzaW9uLCBlcnJvciB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKFxuICAgICAgdHJ1ZSxcbiAgICAgIG5vcm1hbGl6ZWRQYXRoLFxuICAgICAgb3B0c1xuICAgICk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvciwgeyBmbHVzaFN5bmMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzY29wZWRDb250ZXh0ID0gaW5pdC5nZXRDb250ZXh0ID8gYXdhaXQgaW5pdC5nZXRDb250ZXh0KCkgOiBuZXcgUm91dGVyQ29udGV4dFByb3ZpZGVyKCk7XG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcbiAgICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGF3YWl0IGhhbmRsZUZldGNoZXJBY3Rpb24oXG4gICAgICAgIGtleSxcbiAgICAgICAgcm91dGVJZCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgc2NvcGVkQ29udGV4dCxcbiAgICAgICAgZm9nT2ZXYXIuYWN0aXZlLFxuICAgICAgICBmbHVzaFN5bmMsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgc3VibWlzc2lvblxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5zZXQoa2V5LCB7IHJvdXRlSWQsIHBhdGggfSk7XG4gICAgYXdhaXQgaGFuZGxlRmV0Y2hlckxvYWRlcihcbiAgICAgIGtleSxcbiAgICAgIHJvdXRlSWQsXG4gICAgICBwYXRoLFxuICAgICAgbWF0Y2hlcyxcbiAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICBmb2dPZldhci5hY3RpdmUsXG4gICAgICBmbHVzaFN5bmMsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICBzdWJtaXNzaW9uXG4gICAgKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgcmVxdWVzdE1hdGNoZXMsIHNjb3BlZENvbnRleHQsIGlzRm9nT2ZXYXIsIGZsdXNoU3luYywgcHJldmVudFNjcm9sbFJlc2V0LCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICB1cGRhdGVGZXRjaGVyU3RhdGUoa2V5LCBnZXRTdWJtaXR0aW5nRmV0Y2hlcihzdWJtaXNzaW9uLCBleGlzdGluZ0ZldGNoZXIpLCB7XG4gICAgICBmbHVzaFN5bmNcbiAgICB9KTtcbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBmZXRjaFJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChcbiAgICAgIGluaXQuaGlzdG9yeSxcbiAgICAgIHBhdGgsXG4gICAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgc3VibWlzc2lvblxuICAgICk7XG4gICAgaWYgKGlzRm9nT2ZXYXIpIHtcbiAgICAgIGxldCBkaXNjb3ZlclJlc3VsdCA9IGF3YWl0IGRpc2NvdmVyUm91dGVzKFxuICAgICAgICByZXF1ZXN0TWF0Y2hlcyxcbiAgICAgICAgbmV3IFVSTChmZXRjaFJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgZmV0Y2hSZXF1ZXN0LnNpZ25hbCxcbiAgICAgICAga2V5XG4gICAgICApO1xuICAgICAgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZGlzY292ZXJSZXN1bHQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGRpc2NvdmVyUmVzdWx0LmVycm9yLCB7IGZsdXNoU3luYyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICghZGlzY292ZXJSZXN1bHQubWF0Y2hlcykge1xuICAgICAgICBzZXRGZXRjaGVyRXJyb3IoXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHJvdXRlSWQsXG4gICAgICAgICAgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHsgcGF0aG5hbWU6IHBhdGggfSksXG4gICAgICAgICAgeyBmbHVzaFN5bmMgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0TWF0Y2hlcyA9IGRpc2NvdmVyUmVzdWx0Lm1hdGNoZXM7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBtYXRjaCA9IGdldFRhcmdldE1hdGNoKHJlcXVlc3RNYXRjaGVzLCBwYXRoKTtcbiAgICBpZiAoIW1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhbWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBwYXRoLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yLCB7IGZsdXNoU3luYyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCBvcmlnaW5hdGluZ0xvYWRJZCA9IGluY3JlbWVudGluZ0xvYWRJZDtcbiAgICBsZXQgZmV0Y2hNYXRjaGVzID0gZ2V0VGFyZ2V0ZWREYXRhU3RyYXRlZ3lNYXRjaGVzKFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZmV0Y2hSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1hdGNoZXMsXG4gICAgICBtYXRjaCxcbiAgICAgIGh5ZHJhdGlvblJvdXRlUHJvcGVydGllczIsXG4gICAgICBzY29wZWRDb250ZXh0XG4gICAgKTtcbiAgICBsZXQgYWN0aW9uUmVzdWx0cyA9IGF3YWl0IGNhbGxEYXRhU3RyYXRlZ3koXG4gICAgICBmZXRjaFJlcXVlc3QsXG4gICAgICBmZXRjaE1hdGNoZXMsXG4gICAgICBzY29wZWRDb250ZXh0LFxuICAgICAga2V5XG4gICAgKTtcbiAgICBsZXQgYWN0aW9uUmVzdWx0ID0gYWN0aW9uUmVzdWx0c1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbi5oYXMoa2V5KSkge1xuICAgICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQoYWN0aW9uUmVzdWx0KSB8fCBpc0Vycm9yUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgICAgdXBkYXRlRmV0Y2hlclN0YXRlKGtleSwgZ2V0RG9uZUZldGNoZXIodm9pZCAwKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgICBpZiAocGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPiBvcmlnaW5hdGluZ0xvYWRJZCkge1xuICAgICAgICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldERvbmVGZXRjaGVyKHZvaWQgMCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuICAgICAgICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShrZXksIGdldExvYWRpbmdGZXRjaGVyKHN1Ym1pc3Npb24pKTtcbiAgICAgICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oZmV0Y2hSZXF1ZXN0LCBhY3Rpb25SZXN1bHQsIGZhbHNlLCB7XG4gICAgICAgICAgICBmZXRjaGVyU3VibWlzc2lvbjogc3VibWlzc2lvbixcbiAgICAgICAgICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNFcnJvclJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGFjdGlvblJlc3VsdC5lcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24gfHwgc3RhdGUubG9jYXRpb247XG4gICAgbGV0IHJldmFsaWRhdGlvblJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChcbiAgICAgIGluaXQuaGlzdG9yeSxcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWxcbiAgICApO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBtYXRjaGVzID0gc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSAhPT0gXCJpZGxlXCIgPyBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwgYmFzZW5hbWUpIDogc3RhdGUubWF0Y2hlcztcbiAgICBpbnZhcmlhbnQobWF0Y2hlcywgXCJEaWRuJ3QgZmluZCBhbnkgbWF0Y2hlcyBhZnRlciBmZXRjaGVyIGFjdGlvblwiKTtcbiAgICBsZXQgbG9hZElkID0gKytpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgZmV0Y2hSZWxvYWRJZHMuc2V0KGtleSwgbG9hZElkKTtcbiAgICBsZXQgbG9hZEZldGNoZXIgPSBnZXRMb2FkaW5nRmV0Y2hlcihzdWJtaXNzaW9uLCBhY3Rpb25SZXN1bHQuZGF0YSk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZEZldGNoZXIpO1xuICAgIGxldCB7IGRzTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgfSA9IGdldE1hdGNoZXNUb0xvYWQoXG4gICAgICByZXZhbGlkYXRpb25SZXF1ZXN0LFxuICAgICAgc2NvcGVkQ29udGV4dCxcbiAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIGluaXQuaGlzdG9yeSxcbiAgICAgIHN0YXRlLFxuICAgICAgbWF0Y2hlcyxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgZmFsc2UsXG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkLFxuICAgICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLFxuICAgICAgZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbixcbiAgICAgIGZldGNoTG9hZE1hdGNoZXMsXG4gICAgICBmZXRjaFJlZGlyZWN0SWRzLFxuICAgICAgcm91dGVzVG9Vc2UsXG4gICAgICBiYXNlbmFtZSxcbiAgICAgIGluaXQucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24gIT0gbnVsbCxcbiAgICAgIFttYXRjaC5yb3V0ZS5pZCwgYWN0aW9uUmVzdWx0XVxuICAgICk7XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZmlsdGVyKChyZikgPT4gcmYua2V5ICE9PSBrZXkpLmZvckVhY2goKHJmKSA9PiB7XG4gICAgICBsZXQgc3RhbGVLZXkgPSByZi5rZXk7XG4gICAgICBsZXQgZXhpc3RpbmdGZXRjaGVyMiA9IHN0YXRlLmZldGNoZXJzLmdldChzdGFsZUtleSk7XG4gICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IGdldExvYWRpbmdGZXRjaGVyKFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGV4aXN0aW5nRmV0Y2hlcjIgPyBleGlzdGluZ0ZldGNoZXIyLmRhdGEgOiB2b2lkIDBcbiAgICAgICk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoc3RhbGVLZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgYWJvcnRGZXRjaGVyKHN0YWxlS2V5KTtcbiAgICAgIGlmIChyZi5jb250cm9sbGVyKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHN0YWxlS2V5LCByZi5jb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cGRhdGVTdGF0ZSh7IGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSB9KTtcbiAgICBsZXQgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zID0gKCkgPT4gcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaCgocmYpID0+IGFib3J0RmV0Y2hlcihyZi5rZXkpKTtcbiAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImFib3J0XCIsXG4gICAgICBhYm9ydFBlbmRpbmdGZXRjaFJldmFsaWRhdGlvbnNcbiAgICApO1xuICAgIGxldCB7IGxvYWRlclJlc3VsdHMsIGZldGNoZXJSZXN1bHRzIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoXG4gICAgICBkc01hdGNoZXMsXG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycyxcbiAgICAgIHJldmFsaWRhdGlvblJlcXVlc3QsXG4gICAgICBzY29wZWRDb250ZXh0XG4gICAgKTtcbiAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYWJvcnRcIixcbiAgICAgIGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9uc1xuICAgICk7XG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKChyKSA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyLmtleSkpO1xuICAgIGlmIChzdGF0ZS5mZXRjaGVycy5oYXMoa2V5KSkge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0gZ2V0RG9uZUZldGNoZXIoYWN0aW9uUmVzdWx0LmRhdGEpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgICBsZXQgcmVkaXJlY3QyID0gZmluZFJlZGlyZWN0KGxvYWRlclJlc3VsdHMpO1xuICAgIGlmIChyZWRpcmVjdDIpIHtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihcbiAgICAgICAgcmV2YWxpZGF0aW9uUmVxdWVzdCxcbiAgICAgICAgcmVkaXJlY3QyLnJlc3VsdCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHsgcHJldmVudFNjcm9sbFJlc2V0IH1cbiAgICAgICk7XG4gICAgfVxuICAgIHJlZGlyZWN0MiA9IGZpbmRSZWRpcmVjdChmZXRjaGVyUmVzdWx0cyk7XG4gICAgaWYgKHJlZGlyZWN0Mikge1xuICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQocmVkaXJlY3QyLmtleSk7XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oXG4gICAgICAgIHJldmFsaWRhdGlvblJlcXVlc3QsXG4gICAgICAgIHJlZGlyZWN0Mi5yZXN1bHQsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB7IHByZXZlbnRTY3JvbGxSZXNldCB9XG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgeyBsb2FkZXJEYXRhLCBlcnJvcnMgfSA9IHByb2Nlc3NMb2FkZXJEYXRhKFxuICAgICAgc3RhdGUsXG4gICAgICBtYXRjaGVzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICApO1xuICAgIGFib3J0U3RhbGVGZXRjaExvYWRzKGxvYWRJZCk7XG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGxvYWRJZCA+IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKSB7XG4gICAgICBpbnZhcmlhbnQocGVuZGluZ0FjdGlvbiwgXCJFeHBlY3RlZCBwZW5kaW5nIGFjdGlvblwiKTtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGxvYWRlckRhdGE6IG1lcmdlTG9hZGVyRGF0YShcbiAgICAgICAgICBzdGF0ZS5sb2FkZXJEYXRhLFxuICAgICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICBlcnJvcnNcbiAgICAgICAgKSxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmV0Y2hlckxvYWRlcihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoZXMsIHNjb3BlZENvbnRleHQsIGlzRm9nT2ZXYXIsIGZsdXNoU3luYywgcHJldmVudFNjcm9sbFJlc2V0LCBzdWJtaXNzaW9uKSB7XG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIHVwZGF0ZUZldGNoZXJTdGF0ZShcbiAgICAgIGtleSxcbiAgICAgIGdldExvYWRpbmdGZXRjaGVyKFxuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICBleGlzdGluZ0ZldGNoZXIgPyBleGlzdGluZ0ZldGNoZXIuZGF0YSA6IHZvaWQgMFxuICAgICAgKSxcbiAgICAgIHsgZmx1c2hTeW5jIH1cbiAgICApO1xuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KFxuICAgICAgaW5pdC5oaXN0b3J5LFxuICAgICAgcGF0aCxcbiAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWxcbiAgICApO1xuICAgIGlmIChpc0ZvZ09mV2FyKSB7XG4gICAgICBsZXQgZGlzY292ZXJSZXN1bHQgPSBhd2FpdCBkaXNjb3ZlclJvdXRlcyhcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbmV3IFVSTChmZXRjaFJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgZmV0Y2hSZXF1ZXN0LnNpZ25hbCxcbiAgICAgICAga2V5XG4gICAgICApO1xuICAgICAgaWYgKGRpc2NvdmVyUmVzdWx0LnR5cGUgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZGlzY292ZXJSZXN1bHQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGRpc2NvdmVyUmVzdWx0LmVycm9yLCB7IGZsdXNoU3luYyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICghZGlzY292ZXJSZXN1bHQubWF0Y2hlcykge1xuICAgICAgICBzZXRGZXRjaGVyRXJyb3IoXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHJvdXRlSWQsXG4gICAgICAgICAgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHsgcGF0aG5hbWU6IHBhdGggfSksXG4gICAgICAgICAgeyBmbHVzaFN5bmMgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGVzID0gZGlzY292ZXJSZXN1bHQubWF0Y2hlcztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgcGF0aCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCBvcmlnaW5hdGluZ0xvYWRJZCA9IGluY3JlbWVudGluZ0xvYWRJZDtcbiAgICBsZXQgZHNNYXRjaGVzID0gZ2V0VGFyZ2V0ZWREYXRhU3RyYXRlZ3lNYXRjaGVzKFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZmV0Y2hSZXF1ZXN0LFxuICAgICAgbWF0Y2hlcyxcbiAgICAgIG1hdGNoLFxuICAgICAgaHlkcmF0aW9uUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIHNjb3BlZENvbnRleHRcbiAgICApO1xuICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcbiAgICAgIGZldGNoUmVxdWVzdCxcbiAgICAgIGRzTWF0Y2hlcyxcbiAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmZXRjaGVyc1F1ZXVlZEZvckRlbGV0aW9uLmhhcyhrZXkpKSB7XG4gICAgICB1cGRhdGVGZXRjaGVyU3RhdGUoa2V5LCBnZXREb25lRmV0Y2hlcih2b2lkIDApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgaWYgKHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID4gb3JpZ2luYXRpbmdMb2FkSWQpIHtcbiAgICAgICAgdXBkYXRlRmV0Y2hlclN0YXRlKGtleSwgZ2V0RG9uZUZldGNoZXIodm9pZCAwKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZldGNoUmVkaXJlY3RJZHMuYWRkKGtleSk7XG4gICAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKGZldGNoUmVxdWVzdCwgcmVzdWx0LCBmYWxzZSwge1xuICAgICAgICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCByZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGVGZXRjaGVyU3RhdGUoa2V5LCBnZXREb25lRmV0Y2hlcihyZXN1bHQuZGF0YSkpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHJlcXVlc3QsIHJlZGlyZWN0MiwgaXNOYXZpZ2F0aW9uLCB7XG4gICAgc3VibWlzc2lvbixcbiAgICBmZXRjaGVyU3VibWlzc2lvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVwbGFjZTogcmVwbGFjZTJcbiAgfSA9IHt9KSB7XG4gICAgaWYgKHJlZGlyZWN0Mi5yZXNwb25zZS5oZWFkZXJzLmhhcyhcIlgtUmVtaXgtUmV2YWxpZGF0ZVwiKSkge1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBsb2NhdGlvbiA9IHJlZGlyZWN0Mi5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICAgIGludmFyaWFudChsb2NhdGlvbiwgXCJFeHBlY3RlZCBhIExvY2F0aW9uIGhlYWRlciBvbiB0aGUgcmVkaXJlY3QgUmVzcG9uc2VcIik7XG4gICAgbG9jYXRpb24gPSBub3JtYWxpemVSZWRpcmVjdExvY2F0aW9uKFxuICAgICAgbG9jYXRpb24sXG4gICAgICBuZXcgVVJMKHJlcXVlc3QudXJsKSxcbiAgICAgIGJhc2VuYW1lXG4gICAgKTtcbiAgICBsZXQgcmVkaXJlY3RMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCBsb2NhdGlvbiwge1xuICAgICAgX2lzUmVkaXJlY3Q6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoaXNCcm93c2VyMikge1xuICAgICAgbGV0IGlzRG9jdW1lbnRSZWxvYWQgPSBmYWxzZTtcbiAgICAgIGlmIChyZWRpcmVjdDIucmVzcG9uc2UuaGVhZGVycy5oYXMoXCJYLVJlbWl4LVJlbG9hZC1Eb2N1bWVudFwiKSkge1xuICAgICAgICBpc0RvY3VtZW50UmVsb2FkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBYnNvbHV0ZVVybChsb2NhdGlvbikpIHtcbiAgICAgICAgY29uc3QgdXJsID0gY3JlYXRlQnJvd3NlclVSTEltcGwobG9jYXRpb24sIHRydWUpO1xuICAgICAgICBpc0RvY3VtZW50UmVsb2FkID0gLy8gSGFyZCByZWxvYWQgaWYgaXQncyBhbiBhYnNvbHV0ZSBVUkwgdG8gYSBuZXcgb3JpZ2luXG4gICAgICAgIHVybC5vcmlnaW4gIT09IHJvdXRlcldpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfHwgLy8gSGFyZCByZWxvYWQgaWYgaXQncyBhbiBhYnNvbHV0ZSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBvdXIgYmFzZW5hbWVcbiAgICAgICAgc3RyaXBCYXNlbmFtZSh1cmwucGF0aG5hbWUsIGJhc2VuYW1lKSA9PSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGlzRG9jdW1lbnRSZWxvYWQpIHtcbiAgICAgICAgaWYgKHJlcGxhY2UyKSB7XG4gICAgICAgICAgcm91dGVyV2luZG93LmxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlcldpbmRvdy5sb2NhdGlvbi5hc3NpZ24obG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBsZXQgcmVkaXJlY3ROYXZpZ2F0aW9uVHlwZSA9IHJlcGxhY2UyID09PSB0cnVlIHx8IHJlZGlyZWN0Mi5yZXNwb25zZS5oZWFkZXJzLmhhcyhcIlgtUmVtaXgtUmVwbGFjZVwiKSA/IFwiUkVQTEFDRVwiIC8qIFJlcGxhY2UgKi8gOiBcIlBVU0hcIiAvKiBQdXNoICovO1xuICAgIGxldCB7IGZvcm1NZXRob2QsIGZvcm1BY3Rpb24sIGZvcm1FbmNUeXBlIH0gPSBzdGF0ZS5uYXZpZ2F0aW9uO1xuICAgIGlmICghc3VibWlzc2lvbiAmJiAhZmV0Y2hlclN1Ym1pc3Npb24gJiYgZm9ybU1ldGhvZCAmJiBmb3JtQWN0aW9uICYmIGZvcm1FbmNUeXBlKSB7XG4gICAgICBzdWJtaXNzaW9uID0gZ2V0U3VibWlzc2lvbkZyb21OYXZpZ2F0aW9uKHN0YXRlLm5hdmlnYXRpb24pO1xuICAgIH1cbiAgICBsZXQgYWN0aXZlU3VibWlzc2lvbiA9IHN1Ym1pc3Npb24gfHwgZmV0Y2hlclN1Ym1pc3Npb247XG4gICAgaWYgKHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2Rlcy5oYXMocmVkaXJlY3QyLnJlc3BvbnNlLnN0YXR1cykgJiYgYWN0aXZlU3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKGFjdGl2ZVN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdE5hdmlnYXRpb25UeXBlLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIHN1Ym1pc3Npb246IHtcbiAgICAgICAgICAuLi5hY3RpdmVTdWJtaXNzaW9uLFxuICAgICAgICAgIGZvcm1BY3Rpb246IGxvY2F0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFByZXNlcnZlIHRoZXNlIGZsYWdzIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwcmV2ZW50U2Nyb2xsUmVzZXQgfHwgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgZW5hYmxlVmlld1RyYW5zaXRpb246IGlzTmF2aWdhdGlvbiA/IHBlbmRpbmdWaWV3VHJhbnNpdGlvbkVuYWJsZWQgOiB2b2lkIDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb3ZlcnJpZGVOYXZpZ2F0aW9uID0gZ2V0TG9hZGluZ05hdmlnYXRpb24oXG4gICAgICAgIHJlZGlyZWN0TG9jYXRpb24sXG4gICAgICAgIHN1Ym1pc3Npb25cbiAgICAgICk7XG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3ROYXZpZ2F0aW9uVHlwZSwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb24sXG4gICAgICAgIC8vIFNlbmQgZmV0Y2hlciBzdWJtaXNzaW9ucyB0aHJvdWdoIGZvciBzaG91bGRSZXZhbGlkYXRlXG4gICAgICAgIGZldGNoZXJTdWJtaXNzaW9uLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGVzZSBmbGFncyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcHJldmVudFNjcm9sbFJlc2V0IHx8IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIGVuYWJsZVZpZXdUcmFuc2l0aW9uOiBpc05hdmlnYXRpb24gPyBwZW5kaW5nVmlld1RyYW5zaXRpb25FbmFibGVkIDogdm9pZCAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbERhdGFTdHJhdGVneShyZXF1ZXN0LCBtYXRjaGVzLCBzY29wZWRDb250ZXh0LCBmZXRjaGVyS2V5KSB7XG4gICAgbGV0IHJlc3VsdHM7XG4gICAgbGV0IGRhdGFSZXN1bHRzID0ge307XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdHMgPSBhd2FpdCBjYWxsRGF0YVN0cmF0ZWd5SW1wbChcbiAgICAgICAgZGF0YVN0cmF0ZWd5SW1wbCxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgZmV0Y2hlcktleSxcbiAgICAgICAgc2NvcGVkQ29udGV4dCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbWF0Y2hlcy5maWx0ZXIoKG0pID0+IG0uc2hvdWxkTG9hZCkuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBkYXRhUmVzdWx0c1ttLnJvdXRlLmlkXSA9IHtcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIgLyogZXJyb3IgKi8sXG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRhdGFSZXN1bHRzO1xuICAgIH1cbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIGRhdGFSZXN1bHRzO1xuICAgIH1cbiAgICBmb3IgKGxldCBbcm91dGVJZCwgcmVzdWx0XSBvZiBPYmplY3QuZW50cmllcyhyZXN1bHRzKSkge1xuICAgICAgaWYgKGlzUmVkaXJlY3REYXRhU3RyYXRlZ3lSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICBkYXRhUmVzdWx0c1tyb3V0ZUlkXSA9IHtcbiAgICAgICAgICB0eXBlOiBcInJlZGlyZWN0XCIgLyogcmVkaXJlY3QgKi8sXG4gICAgICAgICAgcmVzcG9uc2U6IG5vcm1hbGl6ZVJlbGF0aXZlUm91dGluZ1JlZGlyZWN0UmVzcG9uc2UoXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICByb3V0ZUlkLFxuICAgICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICAgIGJhc2VuYW1lXG4gICAgICAgICAgKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVJlc3VsdHNbcm91dGVJZF0gPSBhd2FpdCBjb252ZXJ0RGF0YVN0cmF0ZWd5UmVzdWx0VG9EYXRhUmVzdWx0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhUmVzdWx0cztcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEobWF0Y2hlcywgZmV0Y2hlcnNUb0xvYWQsIHJlcXVlc3QsIHNjb3BlZENvbnRleHQpIHtcbiAgICBsZXQgbG9hZGVyUmVzdWx0c1Byb21pc2UgPSBjYWxsRGF0YVN0cmF0ZWd5KFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1hdGNoZXMsXG4gICAgICBzY29wZWRDb250ZXh0LFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgbGV0IGZldGNoZXJSZXN1bHRzUHJvbWlzZSA9IFByb21pc2UuYWxsKFxuICAgICAgZmV0Y2hlcnNUb0xvYWQubWFwKGFzeW5jIChmKSA9PiB7XG4gICAgICAgIGlmIChmLm1hdGNoZXMgJiYgZi5tYXRjaCAmJiBmLnJlcXVlc3QgJiYgZi5jb250cm9sbGVyKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBjYWxsRGF0YVN0cmF0ZWd5KFxuICAgICAgICAgICAgZi5yZXF1ZXN0LFxuICAgICAgICAgICAgZi5tYXRjaGVzLFxuICAgICAgICAgICAgc2NvcGVkQ29udGV4dCxcbiAgICAgICAgICAgIGYua2V5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tmLm1hdGNoLnJvdXRlLmlkXTtcbiAgICAgICAgICByZXR1cm4geyBbZi5rZXldOiByZXN1bHQgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIFtmLmtleV06IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiIC8qIGVycm9yICovLFxuICAgICAgICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogZi5wYXRoXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICBsZXQgbG9hZGVyUmVzdWx0cyA9IGF3YWl0IGxvYWRlclJlc3VsdHNQcm9taXNlO1xuICAgIGxldCBmZXRjaGVyUmVzdWx0cyA9IChhd2FpdCBmZXRjaGVyUmVzdWx0c1Byb21pc2UpLnJlZHVjZShcbiAgICAgIChhY2MsIHIpID0+IE9iamVjdC5hc3NpZ24oYWNjLCByKSxcbiAgICAgIHt9XG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpIHtcbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLmFkZChrZXkpO1xuICAgICAgfVxuICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlRmV0Y2hlclN0YXRlKGtleSwgZmV0Y2hlciwgb3B0cyA9IHt9KSB7XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoXG4gICAgICB7IGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSB9LFxuICAgICAgeyBmbHVzaFN5bmM6IChvcHRzICYmIG9wdHMuZmx1c2hTeW5jKSA9PT0gdHJ1ZSB9XG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvciwgb3B0cyA9IHt9KSB7XG4gICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgIGRlbGV0ZUZldGNoZXIoa2V5KTtcbiAgICB1cGRhdGVTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0sXG4gICAgICB7IGZsdXNoU3luYzogKG9wdHMgJiYgb3B0cy5mbHVzaFN5bmMpID09PSB0cnVlIH1cbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIGdldEZldGNoZXIoa2V5KSB7XG4gICAgYWN0aXZlRmV0Y2hlcnMuc2V0KGtleSwgKGFjdGl2ZUZldGNoZXJzLmdldChrZXkpIHx8IDApICsgMSk7XG4gICAgaWYgKGZldGNoZXJzUXVldWVkRm9yRGVsZXRpb24uaGFzKGtleSkpIHtcbiAgICAgIGZldGNoZXJzUXVldWVkRm9yRGVsZXRpb24uZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGZXRjaGVyKGtleSwgb3B0cykge1xuICAgIGFib3J0RmV0Y2hlcihrZXksIG9wdHM/LnJlYXNvbik7XG4gICAgdXBkYXRlRmV0Y2hlclN0YXRlKGtleSwgZ2V0RG9uZUZldGNoZXIobnVsbCkpO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZUZldGNoZXIoa2V5KSB7XG4gICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSAmJiAhKGZldGNoZXIgJiYgZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgZmV0Y2hSZWxvYWRJZHMuaGFzKGtleSkpKSB7XG4gICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICB9XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoZXJzUXVldWVkRm9yRGVsZXRpb24uZGVsZXRlKGtleSk7XG4gICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLmRlbGV0ZShrZXkpO1xuICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICB9XG4gIGZ1bmN0aW9uIHF1ZXVlRmV0Y2hlckZvckRlbGV0aW9uKGtleSkge1xuICAgIGxldCBjb3VudCA9IChhY3RpdmVGZXRjaGVycy5nZXQoa2V5KSB8fCAwKSAtIDE7XG4gICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgIGFjdGl2ZUZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbi5hZGQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlRmV0Y2hlcnMuc2V0KGtleSwgY291bnQpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZSh7IGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSB9KTtcbiAgfVxuICBmdW5jdGlvbiBhYm9ydEZldGNoZXIoa2V5LCByZWFzb24pIHtcbiAgICBsZXQgY29udHJvbGxlciA9IGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSk7XG4gICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQocmVhc29uKTtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaGVyc0RvbmUoa2V5cykge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IGdldEZldGNoZXIoa2V5KTtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKGZldGNoZXIuZGF0YSk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKSB7XG4gICAgbGV0IGRvbmVLZXlzID0gW107XG4gICAgbGV0IHVwZGF0ZWRGZXRjaGVycyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIGBFeHBlY3RlZCBmZXRjaGVyOiAke2tleX1gKTtcbiAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICBkb25lS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIHVwZGF0ZWRGZXRjaGVycyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIG1hcmtGZXRjaGVyc0RvbmUoZG9uZUtleXMpO1xuICAgIHJldHVybiB1cGRhdGVkRmV0Y2hlcnM7XG4gIH1cbiAgZnVuY3Rpb24gYWJvcnRTdGFsZUZldGNoTG9hZHMobGFuZGVkSWQpIHtcbiAgICBsZXQgeWVldGVkS2V5cyA9IFtdO1xuICAgIGZvciAobGV0IFtrZXksIGlkXSBvZiBmZXRjaFJlbG9hZElkcykge1xuICAgICAgaWYgKGlkIDwgbGFuZGVkSWQpIHtcbiAgICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICAgICAgaW52YXJpYW50KGZldGNoZXIsIGBFeHBlY3RlZCBmZXRjaGVyOiAke2tleX1gKTtcbiAgICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICAgICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgeWVldGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbWFya0ZldGNoZXJzRG9uZSh5ZWV0ZWRLZXlzKTtcbiAgICByZXR1cm4geWVldGVkS2V5cy5sZW5ndGggPiAwO1xuICB9XG4gIGZ1bmN0aW9uIGdldEJsb2NrZXIoa2V5LCBmbikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSO1xuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLmdldChrZXkpICE9PSBmbikge1xuICAgICAgYmxvY2tlckZ1bmN0aW9ucy5zZXQoa2V5LCBmbik7XG4gICAgfVxuICAgIHJldHVybiBibG9ja2VyO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZUJsb2NrZXIoa2V5KSB7XG4gICAgc3RhdGUuYmxvY2tlcnMuZGVsZXRlKGtleSk7XG4gICAgYmxvY2tlckZ1bmN0aW9ucy5kZWxldGUoa2V5KTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyKGtleSwgbmV3QmxvY2tlcikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSO1xuICAgIGludmFyaWFudChcbiAgICAgIGJsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiLFxuICAgICAgYEludmFsaWQgYmxvY2tlciBzdGF0ZSB0cmFuc2l0aW9uOiAke2Jsb2NrZXIuc3RhdGV9IC0+ICR7bmV3QmxvY2tlci5zdGF0ZX1gXG4gICAgKTtcbiAgICBsZXQgYmxvY2tlcnMgPSBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKTtcbiAgICBibG9ja2Vycy5zZXQoa2V5LCBuZXdCbG9ja2VyKTtcbiAgICB1cGRhdGVTdGF0ZSh7IGJsb2NrZXJzIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHNob3VsZEJsb2NrTmF2aWdhdGlvbih7XG4gICAgY3VycmVudExvY2F0aW9uLFxuICAgIG5leHRMb2NhdGlvbixcbiAgICBoaXN0b3J5QWN0aW9uXG4gIH0pIHtcbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLnNpemUgPiAxKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIkEgcm91dGVyIG9ubHkgc3VwcG9ydHMgb25lIGJsb2NrZXIgYXQgYSB0aW1lXCIpO1xuICAgIH1cbiAgICBsZXQgZW50cmllcyA9IEFycmF5LmZyb20oYmxvY2tlckZ1bmN0aW9ucy5lbnRyaWVzKCkpO1xuICAgIGxldCBbYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KTtcbiAgICBpZiAoYmxvY2tlciAmJiBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9uKHsgY3VycmVudExvY2F0aW9uLCBuZXh0TG9jYXRpb24sIGhpc3RvcnlBY3Rpb24gfSkpIHtcbiAgICAgIHJldHVybiBibG9ja2VyS2V5O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOYXZpZ2F0aW9uYWw0MDQocGF0aG5hbWUpIHtcbiAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwgeyBwYXRobmFtZSB9KTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgeyBtYXRjaGVzLCByb3V0ZSB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXNUb1VzZSk7XG4gICAgcmV0dXJuIHsgbm90Rm91bmRNYXRjaGVzOiBtYXRjaGVzLCByb3V0ZSwgZXJyb3IgfTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbihwb3NpdGlvbnMsIGdldFBvc2l0aW9uLCBnZXRLZXkpIHtcbiAgICBzYXZlZFNjcm9sbFBvc2l0aW9uczIgPSBwb3NpdGlvbnM7XG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcbiAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleTIgPSBnZXRLZXkgfHwgbnVsbDtcbiAgICBpZiAoIWluaXRpYWxTY3JvbGxSZXN0b3JlZCAmJiBzdGF0ZS5uYXZpZ2F0aW9uID09PSBJRExFX05BVklHQVRJT04pIHtcbiAgICAgIGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IHRydWU7XG4gICAgICBsZXQgeSA9IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zMiA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleTIgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5Mikge1xuICAgICAgbGV0IGtleSA9IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5MihcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXMubWFwKChtKSA9PiBjb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSlcbiAgICAgICk7XG4gICAgICByZXR1cm4ga2V5IHx8IGxvY2F0aW9uLmtleTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLmtleTtcbiAgfVxuICBmdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoc2F2ZWRTY3JvbGxQb3NpdGlvbnMyICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zMltrZXldID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbWF0Y2hlcykge1xuICAgIGlmIChzYXZlZFNjcm9sbFBvc2l0aW9uczIpIHtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxLZXkobG9jYXRpb24sIG1hdGNoZXMpO1xuICAgICAgbGV0IHkgPSBzYXZlZFNjcm9sbFBvc2l0aW9uczJba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tGb2dPZldhcihtYXRjaGVzLCByb3V0ZXNUb1VzZSwgcGF0aG5hbWUpIHtcbiAgICBpZiAoaW5pdC5wYXRjaFJvdXRlc09uTmF2aWdhdGlvbikge1xuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGxldCBmb2dNYXRjaGVzID0gbWF0Y2hSb3V0ZXNJbXBsKFxuICAgICAgICAgIHJvdXRlc1RvVXNlLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIGJhc2VuYW1lLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgYWN0aXZlOiB0cnVlLCBtYXRjaGVzOiBmb2dNYXRjaGVzIHx8IFtdIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobWF0Y2hlc1swXS5wYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgcGFydGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlc0ltcGwoXG4gICAgICAgICAgICByb3V0ZXNUb1VzZSxcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4geyBhY3RpdmU6IHRydWUsIG1hdGNoZXM6IHBhcnRpYWxNYXRjaGVzIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYWN0aXZlOiBmYWxzZSwgbWF0Y2hlczogbnVsbCB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGRpc2NvdmVyUm91dGVzKG1hdGNoZXMsIHBhdGhuYW1lLCBzaWduYWwsIGZldGNoZXJLZXkpIHtcbiAgICBpZiAoIWluaXQucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24pIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwic3VjY2Vzc1wiLCBtYXRjaGVzIH07XG4gICAgfVxuICAgIGxldCBwYXJ0aWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBpc05vbkhNUiA9IGluRmxpZ2h0RGF0YVJvdXRlcyA9PSBudWxsO1xuICAgICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgICBsZXQgbG9jYWxNYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5pdC5wYXRjaFJvdXRlc09uTmF2aWdhdGlvbih7XG4gICAgICAgICAgc2lnbmFsLFxuICAgICAgICAgIHBhdGg6IHBhdGhuYW1lLFxuICAgICAgICAgIG1hdGNoZXM6IHBhcnRpYWxNYXRjaGVzLFxuICAgICAgICAgIGZldGNoZXJLZXksXG4gICAgICAgICAgcGF0Y2g6IChyb3V0ZUlkLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG4gICAgICAgICAgICBwYXRjaFJvdXRlc0ltcGwoXG4gICAgICAgICAgICAgIHJvdXRlSWQsXG4gICAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgICByb3V0ZXNUb1VzZSxcbiAgICAgICAgICAgICAgbG9jYWxNYW5pZmVzdCxcbiAgICAgICAgICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJlcnJvclwiLCBlcnJvcjogZSwgcGFydGlhbE1hdGNoZXMgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpc05vbkhNUiAmJiAhc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICBkYXRhUm91dGVzID0gWy4uLmRhdGFSb3V0ZXNdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJhYm9ydGVkXCIgfTtcbiAgICAgIH1cbiAgICAgIGxldCBuZXdNYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIHBhdGhuYW1lLCBiYXNlbmFtZSk7XG4gICAgICBpZiAobmV3TWF0Y2hlcykge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBcInN1Y2Nlc3NcIiwgbWF0Y2hlczogbmV3TWF0Y2hlcyB9O1xuICAgICAgfVxuICAgICAgbGV0IG5ld1BhcnRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXNJbXBsKFxuICAgICAgICByb3V0ZXNUb1VzZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKCFuZXdQYXJ0aWFsTWF0Y2hlcyB8fCBwYXJ0aWFsTWF0Y2hlcy5sZW5ndGggPT09IG5ld1BhcnRpYWxNYXRjaGVzLmxlbmd0aCAmJiBwYXJ0aWFsTWF0Y2hlcy5ldmVyeShcbiAgICAgICAgKG0sIGkpID0+IG0ucm91dGUuaWQgPT09IG5ld1BhcnRpYWxNYXRjaGVzW2ldLnJvdXRlLmlkXG4gICAgICApKSB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwic3VjY2Vzc1wiLCBtYXRjaGVzOiBudWxsIH07XG4gICAgICB9XG4gICAgICBwYXJ0aWFsTWF0Y2hlcyA9IG5ld1BhcnRpYWxNYXRjaGVzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfaW50ZXJuYWxTZXRSb3V0ZXMobmV3Um91dGVzKSB7XG4gICAgbWFuaWZlc3QgPSB7fTtcbiAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKFxuICAgICAgbmV3Um91dGVzLFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIHZvaWQgMCxcbiAgICAgIG1hbmlmZXN0XG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBwYXRjaFJvdXRlcyhyb3V0ZUlkLCBjaGlsZHJlbiwgdW5zdGFibGVfYWxsb3dFbGVtZW50TXV0YXRpb25zID0gZmFsc2UpIHtcbiAgICBsZXQgaXNOb25ITVIgPSBpbkZsaWdodERhdGFSb3V0ZXMgPT0gbnVsbDtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBwYXRjaFJvdXRlc0ltcGwoXG4gICAgICByb3V0ZUlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICByb3V0ZXNUb1VzZSxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIHVuc3RhYmxlX2FsbG93RWxlbWVudE11dGF0aW9uc1xuICAgICk7XG4gICAgaWYgKGlzTm9uSE1SKSB7XG4gICAgICBkYXRhUm91dGVzID0gWy4uLmRhdGFSb3V0ZXNdO1xuICAgICAgdXBkYXRlU3RhdGUoe30pO1xuICAgIH1cbiAgfVxuICByb3V0ZXIgPSB7XG4gICAgZ2V0IGJhc2VuYW1lKCkge1xuICAgICAgcmV0dXJuIGJhc2VuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZ1dHVyZSgpIHtcbiAgICAgIHJldHVybiBmdXR1cmU7XG4gICAgfSxcbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgcmV0dXJuIGRhdGFSb3V0ZXM7XG4gICAgfSxcbiAgICBnZXQgd2luZG93KCkge1xuICAgICAgcmV0dXJuIHJvdXRlcldpbmRvdztcbiAgICB9LFxuICAgIGluaXRpYWxpemUsXG4gICAgc3Vic2NyaWJlLFxuICAgIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uLFxuICAgIG5hdmlnYXRlLFxuICAgIGZldGNoOiBmZXRjaDIsXG4gICAgcmV2YWxpZGF0ZSxcbiAgICAvLyBQYXNzdGhyb3VnaCB0byBoaXN0b3J5LWF3YXJlIGNyZWF0ZUhyZWYgdXNlZCBieSB1c2VIcmVmIHNvIHdlIGdldCBwcm9wZXJcbiAgICAvLyBoYXNoLWF3YXJlIFVSTHMgaW4gRE9NIHBhdGhzXG4gICAgY3JlYXRlSHJlZjogKHRvKSA9PiBpbml0Lmhpc3RvcnkuY3JlYXRlSHJlZih0byksXG4gICAgZW5jb2RlTG9jYXRpb246ICh0bykgPT4gaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKHRvKSxcbiAgICBnZXRGZXRjaGVyLFxuICAgIHJlc2V0RmV0Y2hlcixcbiAgICBkZWxldGVGZXRjaGVyOiBxdWV1ZUZldGNoZXJGb3JEZWxldGlvbixcbiAgICBkaXNwb3NlLFxuICAgIGdldEJsb2NrZXIsXG4gICAgZGVsZXRlQmxvY2tlcixcbiAgICBwYXRjaFJvdXRlcyxcbiAgICBfaW50ZXJuYWxGZXRjaENvbnRyb2xsZXJzOiBmZXRjaENvbnRyb2xsZXJzLFxuICAgIC8vIFRPRE86IFJlbW92ZSBzZXRSb3V0ZXMsIGl0J3MgdGVtcG9yYXJ5IHRvIGF2b2lkIGRlYWxpbmcgd2l0aFxuICAgIC8vIHVwZGF0aW5nIHRoZSB0cmVlIHdoaWxlIHZhbGlkYXRpbmcgdGhlIHVwZGF0ZSBhbGdvcml0aG0uXG4gICAgX2ludGVybmFsU2V0Um91dGVzLFxuICAgIF9pbnRlcm5hbFNldFN0YXRlRG9Ob3RVc2VPcllvdVdpbGxCcmVha1lvdXJBcHAobmV3U3RhdGUpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG4gIH07XG4gIGlmIChpbml0LnVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnMpIHtcbiAgICByb3V0ZXIgPSBpbnN0cnVtZW50Q2xpZW50U2lkZVJvdXRlcihcbiAgICAgIHJvdXRlcixcbiAgICAgIGluaXQudW5zdGFibGVfaW5zdHJ1bWVudGF0aW9ucy5tYXAoKGkpID0+IGkucm91dGVyKS5maWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG4gIHJldHVybiByb3V0ZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVTdGF0aWNIYW5kbGVyKHJvdXRlcywgb3B0cykge1xuICBpbnZhcmlhbnQoXG4gICAgcm91dGVzLmxlbmd0aCA+IDAsXG4gICAgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVTdGF0aWNIYW5kbGVyXCJcbiAgKTtcbiAgbGV0IG1hbmlmZXN0ID0ge307XG4gIGxldCBiYXNlbmFtZSA9IChvcHRzID8gb3B0cy5iYXNlbmFtZSA6IG51bGwpIHx8IFwiL1wiO1xuICBsZXQgX21hcFJvdXRlUHJvcGVydGllcyA9IG9wdHM/Lm1hcFJvdXRlUHJvcGVydGllcyB8fCBkZWZhdWx0TWFwUm91dGVQcm9wZXJ0aWVzO1xuICBsZXQgbWFwUm91dGVQcm9wZXJ0aWVzMiA9IF9tYXBSb3V0ZVByb3BlcnRpZXM7XG4gIGlmIChvcHRzPy51bnN0YWJsZV9pbnN0cnVtZW50YXRpb25zKSB7XG4gICAgbGV0IGluc3RydW1lbnRhdGlvbnMgPSBvcHRzLnVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnM7XG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzMiA9IChyb3V0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uX21hcFJvdXRlUHJvcGVydGllcyhyb3V0ZSksXG4gICAgICAgIC4uLmdldFJvdXRlSW5zdHJ1bWVudGF0aW9uVXBkYXRlcyhcbiAgICAgICAgICBpbnN0cnVtZW50YXRpb25zLm1hcCgoaSkgPT4gaS5yb3V0ZSkuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIHJvdXRlXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgdm9pZCAwLFxuICAgIG1hbmlmZXN0XG4gICk7XG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHJlcXVlc3QsIHtcbiAgICByZXF1ZXN0Q29udGV4dCxcbiAgICBmaWx0ZXJNYXRjaGVzVG9Mb2FkLFxuICAgIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLFxuICAgIHNraXBSZXZhbGlkYXRpb24sXG4gICAgZGF0YVN0cmF0ZWd5LFxuICAgIGdlbmVyYXRlTWlkZGxld2FyZVJlc3BvbnNlXG4gIH0gPSB7fSkge1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBsZXQgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpO1xuICAgIHJlcXVlc3RDb250ZXh0ID0gcmVxdWVzdENvbnRleHQgIT0gbnVsbCA/IHJlcXVlc3RDb250ZXh0IDogbmV3IFJvdXRlckNvbnRleHRQcm92aWRlcigpO1xuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7IG1ldGhvZCB9KTtcbiAgICAgIGxldCB7IG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLCByb3V0ZSB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgIGxldCBzdGF0aWNDb250ZXh0ID0ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZ2VuZXJhdGVNaWRkbGV3YXJlUmVzcG9uc2UgPyBnZW5lcmF0ZU1pZGRsZXdhcmVSZXNwb25zZSgoKSA9PiBQcm9taXNlLnJlc29sdmUoc3RhdGljQ29udGV4dCkpIDogc3RhdGljQ29udGV4dDtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwgeyBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgICBsZXQgeyBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsIHJvdXRlIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgbGV0IHN0YXRpY0NvbnRleHQgPSB7XG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZ2VuZXJhdGVNaWRkbGV3YXJlUmVzcG9uc2UgPyBnZW5lcmF0ZU1pZGRsZXdhcmVSZXNwb25zZSgoKSA9PiBQcm9taXNlLnJlc29sdmUoc3RhdGljQ29udGV4dCkpIDogc3RhdGljQ29udGV4dDtcbiAgICB9XG4gICAgaWYgKGdlbmVyYXRlTWlkZGxld2FyZVJlc3BvbnNlKSB7XG4gICAgICBpbnZhcmlhbnQoXG4gICAgICAgIHJlcXVlc3RDb250ZXh0IGluc3RhbmNlb2YgUm91dGVyQ29udGV4dFByb3ZpZGVyLFxuICAgICAgICBcIldoZW4gdXNpbmcgbWlkZGxld2FyZSBpbiBgc3RhdGljSGFuZGxlci5xdWVyeSgpYCwgYW55IHByb3ZpZGVkIGByZXF1ZXN0Q29udGV4dGAgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBgUm91dGVyQ29udGV4dFByb3ZpZGVyYFwiXG4gICAgICApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbG9hZExhenlNaWRkbGV3YXJlRm9yTWF0Y2hlcyhcbiAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgIG1hbmlmZXN0LFxuICAgICAgICAgIG1hcFJvdXRlUHJvcGVydGllczJcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHJlbmRlcmVkU3RhdGljQ29udGV4dDtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcnVuU2VydmVyTWlkZGxld2FyZVBpcGVsaW5lKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICB1bnN0YWJsZV9wYXR0ZXJuOiBnZXRSb3V0ZVBhdHRlcm4obWF0Y2hlcy5tYXAoKG0pID0+IG0ucm91dGUucGF0aCkpLFxuICAgICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICAgIHBhcmFtczogbWF0Y2hlc1swXS5wYXJhbXMsXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBjYWxsaW5nIG1pZGRsZXdhcmUgdGhlbiBpdCBtdXN0IGJlIGVuYWJsZWQgc28gd2UgY2FuIGNhc3RcbiAgICAgICAgICAgIC8vIHRoaXMgdG8gdGhlIHByb3BlciB0eXBlIGtub3dpbmcgaXQncyBub3QgYW4gYEFwcExvYWRDb250ZXh0YFxuICAgICAgICAgICAgY29udGV4dDogcmVxdWVzdENvbnRleHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBnZW5lcmF0ZU1pZGRsZXdhcmVSZXNwb25zZShcbiAgICAgICAgICAgICAgYXN5bmMgKHJldmFsaWRhdGlvblJlcXVlc3QsIG9wdHMyID0ge30pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IHF1ZXJ5SW1wbChcbiAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGlvblJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGRhdGFTdHJhdGVneSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgc2tpcExvYWRlckVycm9yQnViYmxpbmcgPT09IHRydWUsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJNYXRjaGVzVG9Mb2FkXCIgaW4gb3B0czIgPyBvcHRzMi5maWx0ZXJNYXRjaGVzVG9Mb2FkID8/IG51bGwgOiBmaWx0ZXJNYXRjaGVzVG9Mb2FkID8/IG51bGwsXG4gICAgICAgICAgICAgICAgICBza2lwUmV2YWxpZGF0aW9uID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQyKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbmRlcmVkU3RhdGljQ29udGV4dCA9IHsgbG9jYXRpb24sIGJhc2VuYW1lLCAuLi5yZXN1bHQyIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVkU3RhdGljQ29udGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3luYyAoZXJyb3IsIHJvdXRlSWQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1JlZGlyZWN0UmVzcG9uc2UoZXJyb3IpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Jlc3BvbnNlKGVycm9yKSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yUmVzcG9uc2VJbXBsKFxuICAgICAgICAgICAgICAgICAgZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgZXJyb3Iuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHBhcnNlUmVzcG9uc2VCb2R5KGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RhdGFXaXRoUmVzcG9uc2VJbml0KGVycm9yKSkge1xuICAgICAgICAgICAgICBlcnJvciA9IGRhdGFXaXRoUmVzcG9uc2VJbml0VG9FcnJvclJlc3BvbnNlKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZFN0YXRpY0NvbnRleHQpIHtcbiAgICAgICAgICAgICAgaWYgKHJvdXRlSWQgaW4gcmVuZGVyZWRTdGF0aWNDb250ZXh0LmxvYWRlckRhdGEpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlZFN0YXRpY0NvbnRleHQubG9hZGVyRGF0YVtyb3V0ZUlkXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgc3RhdGljQ29udGV4dCA9IGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3IoXG4gICAgICAgICAgICAgICAgZGF0YVJvdXRlcyxcbiAgICAgICAgICAgICAgICByZW5kZXJlZFN0YXRpY0NvbnRleHQsXG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgc2tpcExvYWRlckVycm9yQnViYmxpbmcgPyByb3V0ZUlkIDogZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCByb3V0ZUlkKS5yb3V0ZS5pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVNaWRkbGV3YXJlUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHN0YXRpY0NvbnRleHQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgYm91bmRhcnlSb3V0ZUlkID0gc2tpcExvYWRlckVycm9yQnViYmxpbmcgPyByb3V0ZUlkIDogZmluZE5lYXJlc3RCb3VuZGFyeShcbiAgICAgICAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgICAgICAgIG1hdGNoZXMuZmluZChcbiAgICAgICAgICAgICAgICAgIChtKSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkIHx8IG0ucm91dGUubG9hZGVyXG4gICAgICAgICAgICAgICAgKT8ucm91dGUuaWQgfHwgcm91dGVJZFxuICAgICAgICAgICAgICApLnJvdXRlLmlkO1xuICAgICAgICAgICAgICBsZXQgc3RhdGljQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGJhc2VuYW1lLFxuICAgICAgICAgICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICAgICAgICBbYm91bmRhcnlSb3V0ZUlkXTogZXJyb3JcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyA6IDUwMCxcbiAgICAgICAgICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVNaWRkbGV3YXJlUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHN0YXRpY0NvbnRleHQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpbnZhcmlhbnQoaXNSZXNwb25zZShyZXNwb25zZSksIFwiRXhwZWN0ZWQgYSByZXNwb25zZSBpbiBxdWVyeSgpXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChpc1Jlc3BvbnNlKGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChcbiAgICAgIHJlcXVlc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIG1hdGNoZXMsXG4gICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgIGRhdGFTdHJhdGVneSB8fCBudWxsLFxuICAgICAgc2tpcExvYWRlckVycm9yQnViYmxpbmcgPT09IHRydWUsXG4gICAgICBudWxsLFxuICAgICAgZmlsdGVyTWF0Y2hlc1RvTG9hZCB8fCBudWxsLFxuICAgICAgc2tpcFJldmFsaWRhdGlvbiA9PT0gdHJ1ZVxuICAgICk7XG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHsgbG9jYXRpb24sIGJhc2VuYW1lLCAuLi5yZXN1bHQgfTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBxdWVyeVJvdXRlKHJlcXVlc3QsIHtcbiAgICByb3V0ZUlkLFxuICAgIHJlcXVlc3RDb250ZXh0LFxuICAgIGRhdGFTdHJhdGVneSxcbiAgICBnZW5lcmF0ZU1pZGRsZXdhcmVSZXNwb25zZVxuICB9ID0ge30pIHtcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTtcbiAgICByZXF1ZXN0Q29udGV4dCA9IHJlcXVlc3RDb250ZXh0ICE9IG51bGwgPyByZXF1ZXN0Q29udGV4dCA6IG5ldyBSb3V0ZXJDb250ZXh0UHJvdmlkZXIoKTtcbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiICYmIG1ldGhvZCAhPT0gXCJPUFRJT05TXCIpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7IG1ldGhvZCB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwgeyBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgfVxuICAgIGxldCBtYXRjaCA9IHJvdXRlSWQgPyBtYXRjaGVzLmZpbmQoKG0pID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpIDogZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuICAgIGlmIChyb3V0ZUlkICYmICFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDMsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHsgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICAgIH1cbiAgICBpZiAoZ2VuZXJhdGVNaWRkbGV3YXJlUmVzcG9uc2UpIHtcbiAgICAgIGludmFyaWFudChcbiAgICAgICAgcmVxdWVzdENvbnRleHQgaW5zdGFuY2VvZiBSb3V0ZXJDb250ZXh0UHJvdmlkZXIsXG4gICAgICAgIFwiV2hlbiB1c2luZyBtaWRkbGV3YXJlIGluIGBzdGF0aWNIYW5kbGVyLnF1ZXJ5Um91dGUoKWAsIGFueSBwcm92aWRlZCBgcmVxdWVzdENvbnRleHRgIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYFJvdXRlckNvbnRleHRQcm92aWRlcmBcIlxuICAgICAgKTtcbiAgICAgIGF3YWl0IGxvYWRMYXp5TWlkZGxld2FyZUZvck1hdGNoZXMobWF0Y2hlcywgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllczIpO1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcnVuU2VydmVyTWlkZGxld2FyZVBpcGVsaW5lKFxuICAgICAgICB7XG4gICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICB1bnN0YWJsZV9wYXR0ZXJuOiBnZXRSb3V0ZVBhdHRlcm4obWF0Y2hlcy5tYXAoKG0pID0+IG0ucm91dGUucGF0aCkpLFxuICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgcGFyYW1zOiBtYXRjaGVzWzBdLnBhcmFtcyxcbiAgICAgICAgICAvLyBJZiB3ZSdyZSBjYWxsaW5nIG1pZGRsZXdhcmUgdGhlbiBpdCBtdXN0IGJlIGVuYWJsZWQgc28gd2UgY2FuIGNhc3RcbiAgICAgICAgICAvLyB0aGlzIHRvIHRoZSBwcm9wZXIgdHlwZSBrbm93aW5nIGl0J3Mgbm90IGFuIGBBcHBMb2FkQ29udGV4dGBcbiAgICAgICAgICBjb250ZXh0OiByZXF1ZXN0Q29udGV4dFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGdlbmVyYXRlTWlkZGxld2FyZVJlc3BvbnNlKFxuICAgICAgICAgICAgYXN5bmMgKGlubmVyUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IHF1ZXJ5SW1wbChcbiAgICAgICAgICAgICAgICBpbm5lclJlcXVlc3QsXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgICAgICAgICAgICBkYXRhU3RyYXRlZ3kgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBwcm9jZXNzZWQgPSBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzUmVzcG9uc2UocHJvY2Vzc2VkKSA/IHByb2Nlc3NlZCA6IHR5cGVvZiBwcm9jZXNzZWQgPT09IFwic3RyaW5nXCIgPyBuZXcgUmVzcG9uc2UocHJvY2Vzc2VkKSA6IFJlc3BvbnNlLmpzb24ocHJvY2Vzc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChpc0RhdGFXaXRoUmVzcG9uc2VJbml0KGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhV2l0aFJlc3BvbnNlSW5pdFRvUmVzcG9uc2UoZXJyb3IpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzUmVzcG9uc2UoZXJyb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwoXG4gICAgICByZXF1ZXN0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBtYXRjaGVzLFxuICAgICAgcmVxdWVzdENvbnRleHQsXG4gICAgICBkYXRhU3RyYXRlZ3kgfHwgbnVsbCxcbiAgICAgIGZhbHNlLFxuICAgICAgbWF0Y2gsXG4gICAgICBudWxsLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHJldHVybiBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5UmVzdWx0KHJlc3VsdDIpIHtcbiAgICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdDIpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQyO1xuICAgICAgfVxuICAgICAgbGV0IGVycm9yID0gcmVzdWx0Mi5lcnJvcnMgPyBPYmplY3QudmFsdWVzKHJlc3VsdDIuZXJyb3JzKVswXSA6IHZvaWQgMDtcbiAgICAgIGlmIChlcnJvciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdDIuYWN0aW9uRGF0YSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQyLmFjdGlvbkRhdGEpWzBdO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdDIubG9hZGVyRGF0YSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQyLmxvYWRlckRhdGEpWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgZGF0YVN0cmF0ZWd5LCBza2lwTG9hZGVyRXJyb3JCdWJibGluZywgcm91dGVNYXRjaCwgZmlsdGVyTWF0Y2hlc1RvTG9hZCwgc2tpcFJldmFsaWRhdGlvbikge1xuICAgIGludmFyaWFudChcbiAgICAgIHJlcXVlc3Quc2lnbmFsLFxuICAgICAgXCJxdWVyeSgpL3F1ZXJ5Um91dGUoKSByZXF1ZXN0cyBtdXN0IGNvbnRhaW4gYW4gQWJvcnRDb250cm9sbGVyIHNpZ25hbFwiXG4gICAgKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGlzTXV0YXRpb25NZXRob2QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgc3VibWl0KFxuICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICByb3V0ZU1hdGNoIHx8IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSxcbiAgICAgICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgICAgICBkYXRhU3RyYXRlZ3ksXG4gICAgICAgICAgc2tpcExvYWRlckVycm9yQnViYmxpbmcsXG4gICAgICAgICAgcm91dGVNYXRjaCAhPSBudWxsLFxuICAgICAgICAgIGZpbHRlck1hdGNoZXNUb0xvYWQsXG4gICAgICAgICAgc2tpcFJldmFsaWRhdGlvblxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0MjtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBtYXRjaGVzLFxuICAgICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgICAgZGF0YVN0cmF0ZWd5LFxuICAgICAgICBza2lwTG9hZGVyRXJyb3JCdWJibGluZyxcbiAgICAgICAgcm91dGVNYXRjaCxcbiAgICAgICAgZmlsdGVyTWF0Y2hlc1RvTG9hZFxuICAgICAgKTtcbiAgICAgIHJldHVybiBpc1Jlc3BvbnNlKHJlc3VsdCkgPyByZXN1bHQgOiB7XG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGlzRGF0YVN0cmF0ZWd5UmVzdWx0KGUpICYmIGlzUmVzcG9uc2UoZS5yZXN1bHQpKSB7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwiZXJyb3JcIiAvKiBlcnJvciAqLykge1xuICAgICAgICAgIHRocm93IGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLnJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChpc1JlZGlyZWN0UmVzcG9uc2UoZSkpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgYWN0aW9uTWF0Y2gsIHJlcXVlc3RDb250ZXh0LCBkYXRhU3RyYXRlZ3ksIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLCBpc1JvdXRlUmVxdWVzdCwgZmlsdGVyTWF0Y2hlc1RvTG9hZCwgc2tpcFJldmFsaWRhdGlvbikge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBcImVycm9yXCIgLyogZXJyb3IgKi8sXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZHNNYXRjaGVzID0gZ2V0VGFyZ2V0ZWREYXRhU3RyYXRlZ3lNYXRjaGVzKFxuICAgICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgYWN0aW9uTWF0Y2gsXG4gICAgICAgIFtdLFxuICAgICAgICByZXF1ZXN0Q29udGV4dFxuICAgICAgKTtcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgZHNNYXRjaGVzLFxuICAgICAgICBpc1JvdXRlUmVxdWVzdCxcbiAgICAgICAgcmVxdWVzdENvbnRleHQsXG4gICAgICAgIGRhdGFTdHJhdGVneVxuICAgICAgKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdHNbYWN0aW9uTWF0Y2gucm91dGUuaWRdO1xuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgdGhyb3dTdGF0aWNIYW5kbGVyQWJvcnRlZEVycm9yKHJlcXVlc3QsIGlzUm91dGVSZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgc3RhdHVzOiByZXN1bHQucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgTG9jYXRpb246IHJlc3VsdC5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlczogW2FjdGlvbk1hdGNoXSxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IHsgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGEgfSxcbiAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAvLyBOb3RlOiBzdGF0dXNDb2RlICsgaGVhZGVycyBhcmUgdW51c2VkIGhlcmUgc2luY2UgcXVlcnlSb3V0ZSB3aWxsXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIG9yIHZhbHVlXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2tpcFJldmFsaWRhdGlvbikge1xuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nID8gYWN0aW9uTWF0Y2ggOiBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGFjdGlvbk1hdGNoLnJvdXRlLmlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IHJlc3VsdC5zdGF0dXNDb2RlICE9IG51bGwgPyByZXN1bHQuc3RhdHVzQ29kZSA6IDUwMCxcbiAgICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICAgIGFjdGlvbkhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLnJlc3VsdC5oZWFkZXJzID8geyBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVycyB9IDoge31cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9hZGVySGVhZGVyczoge31cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbkhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzID8geyBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVycyB9IDoge30sXG4gICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGUgfHwgMjAwLFxuICAgICAgICAgIGxvYWRlckhlYWRlcnM6IHt9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBsb2FkZXJSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgIHJlZGlyZWN0OiByZXF1ZXN0LnJlZGlyZWN0LFxuICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgIH0pO1xuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gc2tpcExvYWRlckVycm9yQnViYmxpbmcgPyBhY3Rpb25NYXRjaCA6IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGhhbmRsZXJDb250ZXh0MiA9IGF3YWl0IGxvYWRSb3V0ZURhdGEoXG4gICAgICAgIGxvYWRlclJlcXVlc3QsXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIHJlcXVlc3RDb250ZXh0LFxuICAgICAgICBkYXRhU3RyYXRlZ3ksXG4gICAgICAgIHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmaWx0ZXJNYXRjaGVzVG9Mb2FkLFxuICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZCwgcmVzdWx0XVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmhhbmRsZXJDb250ZXh0MixcbiAgICAgICAgc3RhdHVzQ29kZTogaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSA/IHJlc3VsdC5lcnJvci5zdGF0dXMgOiByZXN1bHQuc3RhdHVzQ29kZSAhPSBudWxsID8gcmVzdWx0LnN0YXR1c0NvZGUgOiA1MDAsXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHtcbiAgICAgICAgICAuLi5yZXN1bHQuaGVhZGVycyA/IHsgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmhlYWRlcnMgfSA6IHt9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGxldCBoYW5kbGVyQ29udGV4dCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEoXG4gICAgICBsb2FkZXJSZXF1ZXN0LFxuICAgICAgbWF0Y2hlcyxcbiAgICAgIHJlcXVlc3RDb250ZXh0LFxuICAgICAgZGF0YVN0cmF0ZWd5LFxuICAgICAgc2tpcExvYWRlckVycm9yQnViYmxpbmcsXG4gICAgICBudWxsLFxuICAgICAgZmlsdGVyTWF0Y2hlc1RvTG9hZFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmhhbmRsZXJDb250ZXh0LFxuICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgfSxcbiAgICAgIC8vIGFjdGlvbiBzdGF0dXMgY29kZXMgdGFrZSBwcmVjZWRlbmNlIG92ZXIgbG9hZGVyIHN0YXR1cyBjb2Rlc1xuICAgICAgLi4ucmVzdWx0LnN0YXR1c0NvZGUgPyB7IHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXNDb2RlIH0gOiB7fSxcbiAgICAgIGFjdGlvbkhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzID8geyBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVycyB9IDoge31cbiAgICB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSwgc2tpcExvYWRlckVycm9yQnViYmxpbmcsIHJvdXRlTWF0Y2gsIGZpbHRlck1hdGNoZXNUb0xvYWQsIHBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgICBsZXQgaXNSb3V0ZVJlcXVlc3QgPSByb3V0ZU1hdGNoICE9IG51bGw7XG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0ICYmICFyb3V0ZU1hdGNoPy5yb3V0ZS5sb2FkZXIgJiYgIXJvdXRlTWF0Y2g/LnJvdXRlLmxhenkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogcm91dGVNYXRjaD8ucm91dGUuaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgZHNNYXRjaGVzO1xuICAgIGlmIChyb3V0ZU1hdGNoKSB7XG4gICAgICBkc01hdGNoZXMgPSBnZXRUYXJnZXRlZERhdGFTdHJhdGVneU1hdGNoZXMoXG4gICAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBtYXRjaGVzLFxuICAgICAgICByb3V0ZU1hdGNoLFxuICAgICAgICBbXSxcbiAgICAgICAgcmVxdWVzdENvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtYXhJZHggPSBwZW5kaW5nQWN0aW9uUmVzdWx0ICYmIGlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkgPyAoXG4gICAgICAgIC8vIFVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIHRoZSBib3VuZGFyeVxuICAgICAgICBtYXRjaGVzLmZpbmRJbmRleCgobSkgPT4gbS5yb3V0ZS5pZCA9PT0gcGVuZGluZ0FjdGlvblJlc3VsdFswXSkgLSAxXG4gICAgICApIDogdm9pZCAwO1xuICAgICAgbGV0IHBhdHRlcm4gPSBnZXRSb3V0ZVBhdHRlcm4obWF0Y2hlcy5tYXAoKG0pID0+IG0ucm91dGUucGF0aCkpO1xuICAgICAgZHNNYXRjaGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAobWF4SWR4ICE9IG51bGwgJiYgaW5kZXggPiBtYXhJZHgpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0RGF0YVN0cmF0ZWd5TWF0Y2goXG4gICAgICAgICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcGF0dGVybixcbiAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICByZXF1ZXN0Q29udGV4dCxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGF0YVN0cmF0ZWd5TWF0Y2goXG4gICAgICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgcmVxdWVzdENvbnRleHQsXG4gICAgICAgICAgKG1hdGNoLnJvdXRlLmxvYWRlciB8fCBtYXRjaC5yb3V0ZS5sYXp5KSAhPSBudWxsICYmICghZmlsdGVyTWF0Y2hlc1RvTG9hZCB8fCBmaWx0ZXJNYXRjaGVzVG9Mb2FkKG1hdGNoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWRhdGFTdHJhdGVneSAmJiAhZHNNYXRjaGVzLnNvbWUoKG0pID0+IG0uc2hvdWxkTG9hZCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHBlbmRpbmdBY3Rpb25SZXN1bHQgJiYgaXNFcnJvclJlc3VsdChwZW5kaW5nQWN0aW9uUmVzdWx0WzFdKSA/IHtcbiAgICAgICAgICBbcGVuZGluZ0FjdGlvblJlc3VsdFswXV06IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZXJyb3JcbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge31cbiAgICAgIH07XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneShcbiAgICAgIHJlcXVlc3QsXG4gICAgICBkc01hdGNoZXMsXG4gICAgICBpc1JvdXRlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RDb250ZXh0LFxuICAgICAgZGF0YVN0cmF0ZWd5XG4gICAgKTtcbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgdGhyb3dTdGF0aWNIYW5kbGVyQWJvcnRlZEVycm9yKHJlcXVlc3QsIGlzUm91dGVSZXF1ZXN0KTtcbiAgICB9XG4gICAgbGV0IGhhbmRsZXJDb250ZXh0ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShcbiAgICAgIG1hdGNoZXMsXG4gICAgICByZXN1bHRzLFxuICAgICAgcGVuZGluZ0FjdGlvblJlc3VsdCxcbiAgICAgIHRydWUsXG4gICAgICBza2lwTG9hZGVyRXJyb3JCdWJibGluZ1xuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmhhbmRsZXJDb250ZXh0LFxuICAgICAgbWF0Y2hlc1xuICAgIH07XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbERhdGFTdHJhdGVneShyZXF1ZXN0LCBtYXRjaGVzLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQsIGRhdGFTdHJhdGVneSkge1xuICAgIGxldCByZXN1bHRzID0gYXdhaXQgY2FsbERhdGFTdHJhdGVneUltcGwoXG4gICAgICBkYXRhU3RyYXRlZ3kgfHwgZGVmYXVsdERhdGFTdHJhdGVneSxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtYXRjaGVzLFxuICAgICAgbnVsbCxcbiAgICAgIHJlcXVlc3RDb250ZXh0LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgbGV0IGRhdGFSZXN1bHRzID0ge307XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBtYXRjaGVzLm1hcChhc3luYyAobWF0Y2gpID0+IHtcbiAgICAgICAgaWYgKCEobWF0Y2gucm91dGUuaWQgaW4gcmVzdWx0cykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgICBpZiAoaXNSZWRpcmVjdERhdGFTdHJhdGVneVJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICB0aHJvdyBub3JtYWxpemVSZWxhdGl2ZVJvdXRpbmdSZWRpcmVjdFJlc3BvbnNlKFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgbWF0Y2gucm91dGUuaWQsXG4gICAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgICAgYmFzZW5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdC5yZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGFXaXRoUmVzcG9uc2VJbml0KHJlc3VsdC5yZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBkYXRhV2l0aFJlc3BvbnNlSW5pdFRvUmVzcG9uc2UocmVzdWx0LnJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGFSZXN1bHRzW21hdGNoLnJvdXRlLmlkXSA9IGF3YWl0IGNvbnZlcnREYXRhU3RyYXRlZ3lSZXN1bHRUb0RhdGFSZXN1bHQocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gZGF0YVJlc3VsdHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhUm91dGVzLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5Um91dGVcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3Iocm91dGVzLCBoYW5kbGVyQ29udGV4dCwgZXJyb3IsIGJvdW5kYXJ5SWQpIHtcbiAgbGV0IGVycm9yQm91bmRhcnlJZCA9IGJvdW5kYXJ5SWQgfHwgaGFuZGxlckNvbnRleHQuX2RlZXBlc3RSZW5kZXJlZEJvdW5kYXJ5SWQgfHwgcm91dGVzWzBdLmlkO1xuICByZXR1cm4ge1xuICAgIC4uLmhhbmRsZXJDb250ZXh0LFxuICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyA6IDUwMCxcbiAgICBlcnJvcnM6IHtcbiAgICAgIFtlcnJvckJvdW5kYXJ5SWRdOiBlcnJvclxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHRocm93U3RhdGljSGFuZGxlckFib3J0ZWRFcnJvcihyZXF1ZXN0LCBpc1JvdXRlUmVxdWVzdCkge1xuICBpZiAocmVxdWVzdC5zaWduYWwucmVhc29uICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyByZXF1ZXN0LnNpZ25hbC5yZWFzb247XG4gIH1cbiAgbGV0IG1ldGhvZCA9IGlzUm91dGVSZXF1ZXN0ID8gXCJxdWVyeVJvdXRlXCIgOiBcInF1ZXJ5XCI7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgJHttZXRob2R9KCkgY2FsbCBhYm9ydGVkIHdpdGhvdXQgYW4gXFxgQWJvcnRTaWduYWwucmVhc29uXFxgOiAke3JlcXVlc3QubWV0aG9kfSAke3JlcXVlc3QudXJsfWBcbiAgKTtcbn1cbmZ1bmN0aW9uIGlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykge1xuICByZXR1cm4gb3B0cyAhPSBudWxsICYmIChcImZvcm1EYXRhXCIgaW4gb3B0cyAmJiBvcHRzLmZvcm1EYXRhICE9IG51bGwgfHwgXCJib2R5XCIgaW4gb3B0cyAmJiBvcHRzLmJvZHkgIT09IHZvaWQgMCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVUbyhsb2NhdGlvbiwgbWF0Y2hlcywgYmFzZW5hbWUsIHRvLCBmcm9tUm91dGVJZCwgcmVsYXRpdmUpIHtcbiAgbGV0IGNvbnRleHR1YWxNYXRjaGVzO1xuICBsZXQgYWN0aXZlUm91dGVNYXRjaDtcbiAgaWYgKGZyb21Sb3V0ZUlkKSB7XG4gICAgY29udGV4dHVhbE1hdGNoZXMgPSBbXTtcbiAgICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgICBjb250ZXh0dWFsTWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgIGlmIChtYXRjaC5yb3V0ZS5pZCA9PT0gZnJvbVJvdXRlSWQpIHtcbiAgICAgICAgYWN0aXZlUm91dGVNYXRjaCA9IG1hdGNoO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dHVhbE1hdGNoZXMgPSBtYXRjaGVzO1xuICAgIGFjdGl2ZVJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIH1cbiAgbGV0IHBhdGggPSByZXNvbHZlVG8oXG4gICAgdG8gPyB0byA6IFwiLlwiLFxuICAgIGdldFJlc29sdmVUb01hdGNoZXMoY29udGV4dHVhbE1hdGNoZXMpLFxuICAgIHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICByZWxhdGl2ZSA9PT0gXCJwYXRoXCJcbiAgKTtcbiAgaWYgKHRvID09IG51bGwpIHtcbiAgICBwYXRoLnNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICBwYXRoLmhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB9XG4gIGlmICgodG8gPT0gbnVsbCB8fCB0byA9PT0gXCJcIiB8fCB0byA9PT0gXCIuXCIpICYmIGFjdGl2ZVJvdXRlTWF0Y2gpIHtcbiAgICBsZXQgbmFrZWRJbmRleCA9IGhhc05ha2VkSW5kZXhRdWVyeShwYXRoLnNlYXJjaCk7XG4gICAgaWYgKGFjdGl2ZVJvdXRlTWF0Y2gucm91dGUuaW5kZXggJiYgIW5ha2VkSW5kZXgpIHtcbiAgICAgIHBhdGguc2VhcmNoID0gcGF0aC5zZWFyY2ggPyBwYXRoLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCI/aW5kZXgmXCIpIDogXCI/aW5kZXhcIjtcbiAgICB9IGVsc2UgaWYgKCFhY3RpdmVSb3V0ZU1hdGNoLnJvdXRlLmluZGV4ICYmIG5ha2VkSW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICAgIGxldCBpbmRleFZhbHVlcyA9IHBhcmFtcy5nZXRBbGwoXCJpbmRleFwiKTtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIGluZGV4VmFsdWVzLmZpbHRlcigodikgPT4gdikuZm9yRWFjaCgodikgPT4gcGFyYW1zLmFwcGVuZChcImluZGV4XCIsIHYpKTtcbiAgICAgIGxldCBxcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgcGF0aC5zZWFyY2ggPSBxcyA/IGA/JHtxc31gIDogXCJcIjtcbiAgICB9XG4gIH1cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwcmVwZW5kQmFzZW5hbWUoeyBiYXNlbmFtZSwgcGF0aG5hbWU6IHBhdGgucGF0aG5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoaXNGZXRjaGVyLCBwYXRoLCBvcHRzKSB7XG4gIGlmICghb3B0cyB8fCAhaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSkge1xuICAgIHJldHVybiB7IHBhdGggfTtcbiAgfVxuICBpZiAob3B0cy5mb3JtTWV0aG9kICYmICFpc1ZhbGlkTWV0aG9kKG9wdHMuZm9ybU1ldGhvZCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aCxcbiAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwgeyBtZXRob2Q6IG9wdHMuZm9ybU1ldGhvZCB9KVxuICAgIH07XG4gIH1cbiAgbGV0IGdldEludmFsaWRCb2R5RXJyb3IgPSAoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7IHR5cGU6IFwiaW52YWxpZC1ib2R5XCIgfSlcbiAgfSk7XG4gIGxldCByYXdGb3JtTWV0aG9kID0gb3B0cy5mb3JtTWV0aG9kIHx8IFwiZ2V0XCI7XG4gIGxldCBmb3JtTWV0aG9kID0gcmF3Rm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICBsZXQgZm9ybUFjdGlvbiA9IHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpO1xuICBpZiAob3B0cy5ib2R5ICE9PSB2b2lkIDApIHtcbiAgICBpZiAob3B0cy5mb3JtRW5jVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIGlmICghaXNNdXRhdGlvbk1ldGhvZChmb3JtTWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgICAgfVxuICAgICAgbGV0IHRleHQgPSB0eXBlb2Ygb3B0cy5ib2R5ID09PSBcInN0cmluZ1wiID8gb3B0cy5ib2R5IDogb3B0cy5ib2R5IGluc3RhbmNlb2YgRm9ybURhdGEgfHwgb3B0cy5ib2R5IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gKFxuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNwbGFpbi10ZXh0LWZvcm0tZGF0YVxuICAgICAgICBBcnJheS5mcm9tKG9wdHMuYm9keS5lbnRyaWVzKCkpLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBbbmFtZSwgdmFsdWVdKSA9PiBgJHthY2N9JHtuYW1lfT0ke3ZhbHVlfVxuYCxcbiAgICAgICAgICBcIlwiXG4gICAgICAgIClcbiAgICAgICkgOiBTdHJpbmcob3B0cy5ib2R5KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN1Ym1pc3Npb246IHtcbiAgICAgICAgICBmb3JtTWV0aG9kLFxuICAgICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IG9wdHMuZm9ybUVuY1R5cGUsXG4gICAgICAgICAgZm9ybURhdGE6IHZvaWQgMCxcbiAgICAgICAgICBqc29uOiB2b2lkIDAsXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0cy5mb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgIGlmICghaXNNdXRhdGlvbk1ldGhvZChmb3JtTWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSB0eXBlb2Ygb3B0cy5ib2R5ID09PSBcInN0cmluZ1wiID8gSlNPTi5wYXJzZShvcHRzLmJvZHkpIDogb3B0cy5ib2R5O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3VibWlzc2lvbjoge1xuICAgICAgICAgICAgZm9ybU1ldGhvZCxcbiAgICAgICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgICAgICBmb3JtRW5jVHlwZTogb3B0cy5mb3JtRW5jVHlwZSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBqc29uLFxuICAgICAgICAgICAgdGV4dDogdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQoXG4gICAgdHlwZW9mIEZvcm1EYXRhID09PSBcImZ1bmN0aW9uXCIsXG4gICAgXCJGb3JtRGF0YSBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIlxuICApO1xuICBsZXQgc2VhcmNoUGFyYW1zO1xuICBsZXQgZm9ybURhdGE7XG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5mb3JtRGF0YSk7XG4gICAgZm9ybURhdGEgPSBvcHRzLmZvcm1EYXRhO1xuICB9IGVsc2UgaWYgKG9wdHMuYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5ib2R5KTtcbiAgICBmb3JtRGF0YSA9IG9wdHMuYm9keTtcbiAgfSBlbHNlIGlmIChvcHRzLmJvZHkgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICBzZWFyY2hQYXJhbXMgPSBvcHRzLmJvZHk7XG4gICAgZm9ybURhdGEgPSBjb252ZXJ0U2VhcmNoUGFyYW1zVG9Gb3JtRGF0YShzZWFyY2hQYXJhbXMpO1xuICB9IGVsc2UgaWYgKG9wdHMuYm9keSA9PSBudWxsKSB7XG4gICAgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMob3B0cy5ib2R5KTtcbiAgICAgIGZvcm1EYXRhID0gY29udmVydFNlYXJjaFBhcmFtc1RvRm9ybURhdGEoc2VhcmNoUGFyYW1zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZ2V0SW52YWxpZEJvZHlFcnJvcigpO1xuICAgIH1cbiAgfVxuICBsZXQgc3VibWlzc2lvbiA9IHtcbiAgICBmb3JtTWV0aG9kLFxuICAgIGZvcm1BY3Rpb24sXG4gICAgZm9ybUVuY1R5cGU6IG9wdHMgJiYgb3B0cy5mb3JtRW5jVHlwZSB8fCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgIGZvcm1EYXRhLFxuICAgIGpzb246IHZvaWQgMCxcbiAgICB0ZXh0OiB2b2lkIDBcbiAgfTtcbiAgaWYgKGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIHJldHVybiB7IHBhdGgsIHN1Ym1pc3Npb24gfTtcbiAgfVxuICBsZXQgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChwYXRoKTtcbiAgaWYgKGlzRmV0Y2hlciAmJiBwYXJzZWRQYXRoLnNlYXJjaCAmJiBoYXNOYWtlZEluZGV4UXVlcnkocGFyc2VkUGF0aC5zZWFyY2gpKSB7XG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChcImluZGV4XCIsIFwiXCIpO1xuICB9XG4gIHBhcnNlZFBhdGguc2VhcmNoID0gYD8ke3NlYXJjaFBhcmFtc31gO1xuICByZXR1cm4geyBwYXRoOiBjcmVhdGVQYXRoKHBhcnNlZFBhdGgpLCBzdWJtaXNzaW9uIH07XG59XG5mdW5jdGlvbiBnZXRNYXRjaGVzVG9Mb2FkKHJlcXVlc3QsIHNjb3BlZENvbnRleHQsIG1hcFJvdXRlUHJvcGVydGllczIsIG1hbmlmZXN0LCBoaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbG9jYXRpb24sIGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXAsIGluaXRpYWxIeWRyYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hlcnNRdWV1ZWRGb3JEZWxldGlvbiwgZmV0Y2hMb2FkTWF0Y2hlcywgZmV0Y2hSZWRpcmVjdElkcywgcm91dGVzVG9Vc2UsIGJhc2VuYW1lLCBoYXNQYXRjaFJvdXRlc09uTmF2aWdhdGlvbiwgcGVuZGluZ0FjdGlvblJlc3VsdCkge1xuICBsZXQgYWN0aW9uUmVzdWx0ID0gcGVuZGluZ0FjdGlvblJlc3VsdCA/IGlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkgPyBwZW5kaW5nQWN0aW9uUmVzdWx0WzFdLmVycm9yIDogcGVuZGluZ0FjdGlvblJlc3VsdFsxXS5kYXRhIDogdm9pZCAwO1xuICBsZXQgY3VycmVudFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0YXRlLmxvY2F0aW9uKTtcbiAgbGV0IG5leHRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChsb2NhdGlvbik7XG4gIGxldCBtYXhJZHg7XG4gIGlmIChpbml0aWFsSHlkcmF0aW9uICYmIHN0YXRlLmVycm9ycykge1xuICAgIGxldCBib3VuZGFyeUlkID0gT2JqZWN0LmtleXMoc3RhdGUuZXJyb3JzKVswXTtcbiAgICBtYXhJZHggPSBtYXRjaGVzLmZpbmRJbmRleCgobSkgPT4gbS5yb3V0ZS5pZCA9PT0gYm91bmRhcnlJZCk7XG4gIH0gZWxzZSBpZiAocGVuZGluZ0FjdGlvblJlc3VsdCAmJiBpc0Vycm9yUmVzdWx0KHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0pKSB7XG4gICAgbGV0IGJvdW5kYXJ5SWQgPSBwZW5kaW5nQWN0aW9uUmVzdWx0WzBdO1xuICAgIG1heElkeCA9IG1hdGNoZXMuZmluZEluZGV4KChtKSA9PiBtLnJvdXRlLmlkID09PSBib3VuZGFyeUlkKSAtIDE7XG4gIH1cbiAgbGV0IGFjdGlvblN0YXR1cyA9IHBlbmRpbmdBY3Rpb25SZXN1bHQgPyBwZW5kaW5nQWN0aW9uUmVzdWx0WzFdLnN0YXR1c0NvZGUgOiB2b2lkIDA7XG4gIGxldCBzaG91bGRTa2lwUmV2YWxpZGF0aW9uID0gYWN0aW9uU3RhdHVzICYmIGFjdGlvblN0YXR1cyA+PSA0MDA7XG4gIGxldCBiYXNlU2hvdWxkUmV2YWxpZGF0ZUFyZ3MgPSB7XG4gICAgY3VycmVudFVybCxcbiAgICBjdXJyZW50UGFyYW1zOiBzdGF0ZS5tYXRjaGVzWzBdPy5wYXJhbXMgfHwge30sXG4gICAgbmV4dFVybCxcbiAgICBuZXh0UGFyYW1zOiBtYXRjaGVzWzBdLnBhcmFtcyxcbiAgICAuLi5zdWJtaXNzaW9uLFxuICAgIGFjdGlvblJlc3VsdCxcbiAgICBhY3Rpb25TdGF0dXNcbiAgfTtcbiAgbGV0IHBhdHRlcm4gPSBnZXRSb3V0ZVBhdHRlcm4obWF0Y2hlcy5tYXAoKG0pID0+IG0ucm91dGUucGF0aCkpO1xuICBsZXQgZHNNYXRjaGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGxldCB7IHJvdXRlIH0gPSBtYXRjaDtcbiAgICBsZXQgZm9yY2VTaG91bGRMb2FkID0gbnVsbDtcbiAgICBpZiAobWF4SWR4ICE9IG51bGwgJiYgaW5kZXggPiBtYXhJZHgpIHtcbiAgICAgIGZvcmNlU2hvdWxkTG9hZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocm91dGUubGF6eSkge1xuICAgICAgZm9yY2VTaG91bGRMb2FkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFyb3V0ZUhhc0xvYWRlck9yTWlkZGxld2FyZShyb3V0ZSkpIHtcbiAgICAgIGZvcmNlU2hvdWxkTG9hZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbEh5ZHJhdGlvbikge1xuICAgICAgZm9yY2VTaG91bGRMb2FkID0gc2hvdWxkTG9hZFJvdXRlT25IeWRyYXRpb24oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBzdGF0ZS5sb2FkZXJEYXRhLFxuICAgICAgICBzdGF0ZS5lcnJvcnNcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc05ld0xvYWRlcihzdGF0ZS5sb2FkZXJEYXRhLCBzdGF0ZS5tYXRjaGVzW2luZGV4XSwgbWF0Y2gpKSB7XG4gICAgICBmb3JjZVNob3VsZExvYWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZm9yY2VTaG91bGRMb2FkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZ2V0RGF0YVN0cmF0ZWd5TWF0Y2goXG4gICAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbGF6eVJvdXRlUHJvcGVydGllc1RvU2tpcCxcbiAgICAgICAgc2NvcGVkQ29udGV4dCxcbiAgICAgICAgZm9yY2VTaG91bGRMb2FkXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgZGVmYXVsdFNob3VsZFJldmFsaWRhdGUgPSBzaG91bGRTa2lwUmV2YWxpZGF0aW9uID8gZmFsc2UgOiAoXG4gICAgICAvLyBGb3JjZWQgcmV2YWxpZGF0aW9uIGR1ZSB0byBzdWJtaXNzaW9uLCB1c2VSZXZhbGlkYXRvciwgb3IgWC1SZW1peC1SZXZhbGlkYXRlXG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHx8IGN1cnJlbnRVcmwucGF0aG5hbWUgKyBjdXJyZW50VXJsLnNlYXJjaCA9PT0gbmV4dFVybC5wYXRobmFtZSArIG5leHRVcmwuc2VhcmNoIHx8IC8vIFNlYXJjaCBwYXJhbXMgYWZmZWN0IGFsbCBsb2FkZXJzXG4gICAgICBjdXJyZW50VXJsLnNlYXJjaCAhPT0gbmV4dFVybC5zZWFyY2ggfHwgaXNOZXdSb3V0ZUluc3RhbmNlKHN0YXRlLm1hdGNoZXNbaW5kZXhdLCBtYXRjaClcbiAgICApO1xuICAgIGxldCBzaG91bGRSZXZhbGlkYXRlQXJncyA9IHtcbiAgICAgIC4uLmJhc2VTaG91bGRSZXZhbGlkYXRlQXJncyxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlXG4gICAgfTtcbiAgICBsZXQgc2hvdWxkTG9hZCA9IHNob3VsZFJldmFsaWRhdGVMb2FkZXIobWF0Y2gsIHNob3VsZFJldmFsaWRhdGVBcmdzKTtcbiAgICByZXR1cm4gZ2V0RGF0YVN0cmF0ZWd5TWF0Y2goXG4gICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgbWFuaWZlc3QsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcGF0dGVybixcbiAgICAgIG1hdGNoLFxuICAgICAgbGF6eVJvdXRlUHJvcGVydGllc1RvU2tpcCxcbiAgICAgIHNjb3BlZENvbnRleHQsXG4gICAgICBzaG91bGRMb2FkLFxuICAgICAgc2hvdWxkUmV2YWxpZGF0ZUFyZ3NcbiAgICApO1xuICB9KTtcbiAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXJzID0gW107XG4gIGZldGNoTG9hZE1hdGNoZXMuZm9yRWFjaCgoZiwga2V5KSA9PiB7XG4gICAgaWYgKGluaXRpYWxIeWRyYXRpb24gfHwgIW1hdGNoZXMuc29tZSgobSkgPT4gbS5yb3V0ZS5pZCA9PT0gZi5yb3V0ZUlkKSB8fCBmZXRjaGVyc1F1ZXVlZEZvckRlbGV0aW9uLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgbGV0IGlzTWlkSW5pdGlhbExvYWQgPSBmZXRjaGVyICYmIGZldGNoZXIuc3RhdGUgIT09IFwiaWRsZVwiICYmIGZldGNoZXIuZGF0YSA9PT0gdm9pZCAwO1xuICAgIGxldCBmZXRjaGVyTWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBmLnBhdGgsIGJhc2VuYW1lKTtcbiAgICBpZiAoIWZldGNoZXJNYXRjaGVzKSB7XG4gICAgICBpZiAoaGFzUGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24gJiYgaXNNaWRJbml0aWFsTG9hZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICByb3V0ZUlkOiBmLnJvdXRlSWQsXG4gICAgICAgIHBhdGg6IGYucGF0aCxcbiAgICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgICAgbWF0Y2g6IG51bGwsXG4gICAgICAgIHJlcXVlc3Q6IG51bGwsXG4gICAgICAgIGNvbnRyb2xsZXI6IG51bGxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZmV0Y2hSZWRpcmVjdElkcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZmV0Y2hlck1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2goZmV0Y2hlck1hdGNoZXMsIGYucGF0aCk7XG4gICAgbGV0IGZldGNoQ29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoXG4gICAgICBoaXN0b3J5LFxuICAgICAgZi5wYXRoLFxuICAgICAgZmV0Y2hDb250cm9sbGVyLnNpZ25hbFxuICAgICk7XG4gICAgbGV0IGZldGNoZXJEc01hdGNoZXMgPSBudWxsO1xuICAgIGlmIChjYW5jZWxsZWRGZXRjaGVyTG9hZHMuaGFzKGtleSkpIHtcbiAgICAgIGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5kZWxldGUoa2V5KTtcbiAgICAgIGZldGNoZXJEc01hdGNoZXMgPSBnZXRUYXJnZXRlZERhdGFTdHJhdGVneU1hdGNoZXMoXG4gICAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICBmZXRjaFJlcXVlc3QsXG4gICAgICAgIGZldGNoZXJNYXRjaGVzLFxuICAgICAgICBmZXRjaGVyTWF0Y2gsXG4gICAgICAgIGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXAsXG4gICAgICAgIHNjb3BlZENvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc01pZEluaXRpYWxMb2FkKSB7XG4gICAgICBpZiAoaXNSZXZhbGlkYXRpb25SZXF1aXJlZCkge1xuICAgICAgICBmZXRjaGVyRHNNYXRjaGVzID0gZ2V0VGFyZ2V0ZWREYXRhU3RyYXRlZ3lNYXRjaGVzKFxuICAgICAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgICAgZmV0Y2hSZXF1ZXN0LFxuICAgICAgICAgIGZldGNoZXJNYXRjaGVzLFxuICAgICAgICAgIGZldGNoZXJNYXRjaCxcbiAgICAgICAgICBsYXp5Um91dGVQcm9wZXJ0aWVzVG9Ta2lwLFxuICAgICAgICAgIHNjb3BlZENvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNob3VsZFJldmFsaWRhdGVBcmdzID0ge1xuICAgICAgICAuLi5iYXNlU2hvdWxkUmV2YWxpZGF0ZUFyZ3MsXG4gICAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBzaG91bGRTa2lwUmV2YWxpZGF0aW9uID8gZmFsc2UgOiBpc1JldmFsaWRhdGlvblJlcXVpcmVkXG4gICAgICB9O1xuICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGVMb2FkZXIoZmV0Y2hlck1hdGNoLCBzaG91bGRSZXZhbGlkYXRlQXJncykpIHtcbiAgICAgICAgZmV0Y2hlckRzTWF0Y2hlcyA9IGdldFRhcmdldGVkRGF0YVN0cmF0ZWd5TWF0Y2hlcyhcbiAgICAgICAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgICAgICAgIG1hbmlmZXN0LFxuICAgICAgICAgIGZldGNoUmVxdWVzdCxcbiAgICAgICAgICBmZXRjaGVyTWF0Y2hlcyxcbiAgICAgICAgICBmZXRjaGVyTWF0Y2gsXG4gICAgICAgICAgbGF6eVJvdXRlUHJvcGVydGllc1RvU2tpcCxcbiAgICAgICAgICBzY29wZWRDb250ZXh0LFxuICAgICAgICAgIHNob3VsZFJldmFsaWRhdGVBcmdzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmZXRjaGVyRHNNYXRjaGVzKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICByb3V0ZUlkOiBmLnJvdXRlSWQsXG4gICAgICAgIHBhdGg6IGYucGF0aCxcbiAgICAgICAgbWF0Y2hlczogZmV0Y2hlckRzTWF0Y2hlcyxcbiAgICAgICAgbWF0Y2g6IGZldGNoZXJNYXRjaCxcbiAgICAgICAgcmVxdWVzdDogZmV0Y2hSZXF1ZXN0LFxuICAgICAgICBjb250cm9sbGVyOiBmZXRjaENvbnRyb2xsZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IGRzTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgfTtcbn1cbmZ1bmN0aW9uIHJvdXRlSGFzTG9hZGVyT3JNaWRkbGV3YXJlKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5sb2FkZXIgIT0gbnVsbCB8fCByb3V0ZS5taWRkbGV3YXJlICE9IG51bGwgJiYgcm91dGUubWlkZGxld2FyZS5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gc2hvdWxkTG9hZFJvdXRlT25IeWRyYXRpb24ocm91dGUsIGxvYWRlckRhdGEsIGVycm9ycykge1xuICBpZiAocm91dGUubGF6eSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghcm91dGVIYXNMb2FkZXJPck1pZGRsZXdhcmUocm91dGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBoYXNEYXRhID0gbG9hZGVyRGF0YSAhPSBudWxsICYmIHJvdXRlLmlkIGluIGxvYWRlckRhdGE7XG4gIGxldCBoYXNFcnJvciA9IGVycm9ycyAhPSBudWxsICYmIGVycm9yc1tyb3V0ZS5pZF0gIT09IHZvaWQgMDtcbiAgaWYgKCFoYXNEYXRhICYmIGhhc0Vycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2Ygcm91dGUubG9hZGVyID09PSBcImZ1bmN0aW9uXCIgJiYgcm91dGUubG9hZGVyLmh5ZHJhdGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gIWhhc0RhdGEgJiYgIWhhc0Vycm9yO1xufVxuZnVuY3Rpb24gaXNOZXdMb2FkZXIoY3VycmVudExvYWRlckRhdGEsIGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGlzTmV3ID0gKFxuICAgIC8vIFthXSAtPiBbYSwgYl1cbiAgICAhY3VycmVudE1hdGNoIHx8IC8vIFthLCBiXSAtPiBbYSwgY11cbiAgICBtYXRjaC5yb3V0ZS5pZCAhPT0gY3VycmVudE1hdGNoLnJvdXRlLmlkXG4gICk7XG4gIGxldCBpc01pc3NpbmdEYXRhID0gIWN1cnJlbnRMb2FkZXJEYXRhLmhhc093blByb3BlcnR5KG1hdGNoLnJvdXRlLmlkKTtcbiAgcmV0dXJuIGlzTmV3IHx8IGlzTWlzc2luZ0RhdGE7XG59XG5mdW5jdGlvbiBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgY3VycmVudFBhdGggPSBjdXJyZW50TWF0Y2gucm91dGUucGF0aDtcbiAgcmV0dXJuIChcbiAgICAvLyBwYXJhbSBjaGFuZ2UgZm9yIHRoaXMgbWF0Y2gsIC91c2Vycy8xMjMgLT4gL3VzZXJzLzQ1NlxuICAgIGN1cnJlbnRNYXRjaC5wYXRobmFtZSAhPT0gbWF0Y2gucGF0aG5hbWUgfHwgLy8gc3BsYXQgcGFyYW0gY2hhbmdlZCwgd2hpY2ggaXMgbm90IHByZXNlbnQgaW4gbWF0Y2gucGF0aFxuICAgIC8vIGUuZy4gL2ZpbGVzL2ltYWdlcy9hdmF0YXIuanBnIC0+IGZpbGVzL2ZpbmFuY2VzLnhsc1xuICAgIGN1cnJlbnRQYXRoICE9IG51bGwgJiYgY3VycmVudFBhdGguZW5kc1dpdGgoXCIqXCIpICYmIGN1cnJlbnRNYXRjaC5wYXJhbXNbXCIqXCJdICE9PSBtYXRjaC5wYXJhbXNbXCIqXCJdXG4gICk7XG59XG5mdW5jdGlvbiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGxvYWRlck1hdGNoLCBhcmcpIHtcbiAgaWYgKGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUpIHtcbiAgICBsZXQgcm91dGVDaG9pY2UgPSBsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKGFyZyk7XG4gICAgaWYgKHR5cGVvZiByb3V0ZUNob2ljZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiByb3V0ZUNob2ljZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZy5kZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTtcbn1cbmZ1bmN0aW9uIHBhdGNoUm91dGVzSW1wbChyb3V0ZUlkLCBjaGlsZHJlbiwgcm91dGVzVG9Vc2UsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMyLCBhbGxvd0VsZW1lbnRNdXRhdGlvbnMpIHtcbiAgbGV0IGNoaWxkcmVuVG9QYXRjaDtcbiAgaWYgKHJvdXRlSWQpIHtcbiAgICBsZXQgcm91dGUgPSBtYW5pZmVzdFtyb3V0ZUlkXTtcbiAgICBpbnZhcmlhbnQoXG4gICAgICByb3V0ZSxcbiAgICAgIGBObyByb3V0ZSBmb3VuZCB0byBwYXRjaCBjaGlsZHJlbiBpbnRvOiByb3V0ZUlkID0gJHtyb3V0ZUlkfWBcbiAgICApO1xuICAgIGlmICghcm91dGUuY2hpbGRyZW4pIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gW107XG4gICAgfVxuICAgIGNoaWxkcmVuVG9QYXRjaCA9IHJvdXRlLmNoaWxkcmVuO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuVG9QYXRjaCA9IHJvdXRlc1RvVXNlO1xuICB9XG4gIGxldCB1bmlxdWVDaGlsZHJlbiA9IFtdO1xuICBsZXQgZXhpc3RpbmdDaGlsZHJlbiA9IFtdO1xuICBjaGlsZHJlbi5mb3JFYWNoKChuZXdSb3V0ZSkgPT4ge1xuICAgIGxldCBleGlzdGluZ1JvdXRlID0gY2hpbGRyZW5Ub1BhdGNoLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSb3V0ZTIpID0+IGlzU2FtZVJvdXRlKG5ld1JvdXRlLCBleGlzdGluZ1JvdXRlMilcbiAgICApO1xuICAgIGlmIChleGlzdGluZ1JvdXRlKSB7XG4gICAgICBleGlzdGluZ0NoaWxkcmVuLnB1c2goeyBleGlzdGluZ1JvdXRlLCBuZXdSb3V0ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pcXVlQ2hpbGRyZW4ucHVzaChuZXdSb3V0ZSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKHVuaXF1ZUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgbmV3Um91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhcbiAgICAgIHVuaXF1ZUNoaWxkcmVuLFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIFtyb3V0ZUlkIHx8IFwiX1wiLCBcInBhdGNoXCIsIFN0cmluZyhjaGlsZHJlblRvUGF0Y2g/Lmxlbmd0aCB8fCBcIjBcIildLFxuICAgICAgbWFuaWZlc3RcbiAgICApO1xuICAgIGNoaWxkcmVuVG9QYXRjaC5wdXNoKC4uLm5ld1JvdXRlcyk7XG4gIH1cbiAgaWYgKGFsbG93RWxlbWVudE11dGF0aW9ucyAmJiBleGlzdGluZ0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB7IGV4aXN0aW5nUm91dGUsIG5ld1JvdXRlIH0gPSBleGlzdGluZ0NoaWxkcmVuW2ldO1xuICAgICAgbGV0IGV4aXN0aW5nUm91dGVUeXBlZCA9IGV4aXN0aW5nUm91dGU7XG4gICAgICBsZXQgW25ld1JvdXRlVHlwZWRdID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhcbiAgICAgICAgW25ld1JvdXRlXSxcbiAgICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgICAgW10sXG4gICAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIGZvciBtdXRhdGVkIHJvdXRlcyBzaW5jZSB0aGV5IGFscmVhZHkgaGF2ZSBhbiBpZFxuICAgICAgICB7fSxcbiAgICAgICAgLy8gRG9uJ3QgdG91Y2ggdGhlIG1hbmlmZXN0IGhlcmUgc2luY2Ugd2UncmUgdXBkYXRpbmcgaW4gcGxhY2VcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oZXhpc3RpbmdSb3V0ZVR5cGVkLCB7XG4gICAgICAgIGVsZW1lbnQ6IG5ld1JvdXRlVHlwZWQuZWxlbWVudCA/IG5ld1JvdXRlVHlwZWQuZWxlbWVudCA6IGV4aXN0aW5nUm91dGVUeXBlZC5lbGVtZW50LFxuICAgICAgICBlcnJvckVsZW1lbnQ6IG5ld1JvdXRlVHlwZWQuZXJyb3JFbGVtZW50ID8gbmV3Um91dGVUeXBlZC5lcnJvckVsZW1lbnQgOiBleGlzdGluZ1JvdXRlVHlwZWQuZXJyb3JFbGVtZW50LFxuICAgICAgICBoeWRyYXRlRmFsbGJhY2tFbGVtZW50OiBuZXdSb3V0ZVR5cGVkLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQgPyBuZXdSb3V0ZVR5cGVkLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQgOiBleGlzdGluZ1JvdXRlVHlwZWQuaHlkcmF0ZUZhbGxiYWNrRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBpc1NhbWVSb3V0ZShuZXdSb3V0ZSwgZXhpc3RpbmdSb3V0ZSkge1xuICBpZiAoXCJpZFwiIGluIG5ld1JvdXRlICYmIFwiaWRcIiBpbiBleGlzdGluZ1JvdXRlICYmIG5ld1JvdXRlLmlkID09PSBleGlzdGluZ1JvdXRlLmlkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCEobmV3Um91dGUuaW5kZXggPT09IGV4aXN0aW5nUm91dGUuaW5kZXggJiYgbmV3Um91dGUucGF0aCA9PT0gZXhpc3RpbmdSb3V0ZS5wYXRoICYmIG5ld1JvdXRlLmNhc2VTZW5zaXRpdmUgPT09IGV4aXN0aW5nUm91dGUuY2FzZVNlbnNpdGl2ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCghbmV3Um91dGUuY2hpbGRyZW4gfHwgbmV3Um91dGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSAmJiAoIWV4aXN0aW5nUm91dGUuY2hpbGRyZW4gfHwgZXhpc3RpbmdSb3V0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG5ld1JvdXRlLmNoaWxkcmVuLmV2ZXJ5KFxuICAgIChhQ2hpbGQsIGkpID0+IGV4aXN0aW5nUm91dGUuY2hpbGRyZW4/LnNvbWUoKGJDaGlsZCkgPT4gaXNTYW1lUm91dGUoYUNoaWxkLCBiQ2hpbGQpKVxuICApO1xufVxudmFyIGxhenlSb3V0ZVByb3BlcnR5Q2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBsb2FkTGF6eVJvdXRlUHJvcGVydHkgPSAoe1xuICBrZXksXG4gIHJvdXRlLFxuICBtYW5pZmVzdCxcbiAgbWFwUm91dGVQcm9wZXJ0aWVzOiBtYXBSb3V0ZVByb3BlcnRpZXMyXG59KSA9PiB7XG4gIGxldCByb3V0ZVRvVXBkYXRlID0gbWFuaWZlc3Rbcm91dGUuaWRdO1xuICBpbnZhcmlhbnQocm91dGVUb1VwZGF0ZSwgXCJObyByb3V0ZSBmb3VuZCBpbiBtYW5pZmVzdFwiKTtcbiAgaWYgKCFyb3V0ZVRvVXBkYXRlLmxhenkgfHwgdHlwZW9mIHJvdXRlVG9VcGRhdGUubGF6eSAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbGF6eUZuID0gcm91dGVUb1VwZGF0ZS5sYXp5W2tleV07XG4gIGlmICghbGF6eUZuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBjYWNoZSA9IGxhenlSb3V0ZVByb3BlcnR5Q2FjaGUuZ2V0KHJvdXRlVG9VcGRhdGUpO1xuICBpZiAoIWNhY2hlKSB7XG4gICAgY2FjaGUgPSB7fTtcbiAgICBsYXp5Um91dGVQcm9wZXJ0eUNhY2hlLnNldChyb3V0ZVRvVXBkYXRlLCBjYWNoZSk7XG4gIH1cbiAgbGV0IGNhY2hlZFByb21pc2UgPSBjYWNoZVtrZXldO1xuICBpZiAoY2FjaGVkUHJvbWlzZSkge1xuICAgIHJldHVybiBjYWNoZWRQcm9taXNlO1xuICB9XG4gIGxldCBwcm9wZXJ0eVByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGxldCBpc1Vuc3VwcG9ydGVkID0gaXNVbnN1cHBvcnRlZExhenlSb3V0ZU9iamVjdEtleShrZXkpO1xuICAgIGxldCBzdGF0aWNSb3V0ZVZhbHVlID0gcm91dGVUb1VwZGF0ZVtrZXldO1xuICAgIGxldCBpc1N0YXRpY2FsbHlEZWZpbmVkID0gc3RhdGljUm91dGVWYWx1ZSAhPT0gdm9pZCAwICYmIGtleSAhPT0gXCJoYXNFcnJvckJvdW5kYXJ5XCI7XG4gICAgaWYgKGlzVW5zdXBwb3J0ZWQpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICFpc1Vuc3VwcG9ydGVkLFxuICAgICAgICBcIlJvdXRlIHByb3BlcnR5IFwiICsga2V5ICsgXCIgaXMgbm90IGEgc3VwcG9ydGVkIGxhenkgcm91dGUgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLlwiXG4gICAgICApO1xuICAgICAgY2FjaGVba2V5XSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNTdGF0aWNhbGx5RGVmaW5lZCkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGBSb3V0ZSBcIiR7cm91dGVUb1VwZGF0ZS5pZH1cIiBoYXMgYSBzdGF0aWMgcHJvcGVydHkgXCIke2tleX1cIiBkZWZpbmVkLiBUaGUgbGF6eSBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQuYFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbHVlID0gYXdhaXQgbGF6eUZuKCk7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIG1hcFJvdXRlUHJvcGVydGllczIocm91dGVUb1VwZGF0ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHJvdXRlVG9VcGRhdGUubGF6eSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcm91dGVUb1VwZGF0ZS5sYXp5W2tleV0gPSB2b2lkIDA7XG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyhyb3V0ZVRvVXBkYXRlLmxhenkpLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUgPT09IHZvaWQgMCkpIHtcbiAgICAgICAgcm91dGVUb1VwZGF0ZS5sYXp5ID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgY2FjaGVba2V5XSA9IHByb3BlcnR5UHJvbWlzZTtcbiAgcmV0dXJuIHByb3BlcnR5UHJvbWlzZTtcbn07XG52YXIgbGF6eVJvdXRlRnVuY3Rpb25DYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gbG9hZExhenlSb3V0ZShyb3V0ZSwgdHlwZSwgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllczIsIGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXApIHtcbiAgbGV0IHJvdXRlVG9VcGRhdGUgPSBtYW5pZmVzdFtyb3V0ZS5pZF07XG4gIGludmFyaWFudChyb3V0ZVRvVXBkYXRlLCBcIk5vIHJvdXRlIGZvdW5kIGluIG1hbmlmZXN0XCIpO1xuICBpZiAoIXJvdXRlLmxhenkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF6eVJvdXRlUHJvbWlzZTogdm9pZCAwLFxuICAgICAgbGF6eUhhbmRsZXJQcm9taXNlOiB2b2lkIDBcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2Ygcm91dGUubGF6eSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbGV0IGNhY2hlZFByb21pc2UgPSBsYXp5Um91dGVGdW5jdGlvbkNhY2hlLmdldChyb3V0ZVRvVXBkYXRlKTtcbiAgICBpZiAoY2FjaGVkUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF6eVJvdXRlUHJvbWlzZTogY2FjaGVkUHJvbWlzZSxcbiAgICAgICAgbGF6eUhhbmRsZXJQcm9taXNlOiBjYWNoZWRQcm9taXNlXG4gICAgICB9O1xuICAgIH1cbiAgICBsZXQgbGF6eVJvdXRlUHJvbWlzZTIgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgaW52YXJpYW50KFxuICAgICAgICB0eXBlb2Ygcm91dGUubGF6eSA9PT0gXCJmdW5jdGlvblwiLFxuICAgICAgICBcIk5vIGxhenkgcm91dGUgZnVuY3Rpb24gZm91bmRcIlxuICAgICAgKTtcbiAgICAgIGxldCBsYXp5Um91dGUgPSBhd2FpdCByb3V0ZS5sYXp5KCk7XG4gICAgICBsZXQgcm91dGVVcGRhdGVzID0ge307XG4gICAgICBmb3IgKGxldCBsYXp5Um91dGVQcm9wZXJ0eSBpbiBsYXp5Um91dGUpIHtcbiAgICAgICAgbGV0IGxhenlWYWx1ZSA9IGxhenlSb3V0ZVtsYXp5Um91dGVQcm9wZXJ0eV07XG4gICAgICAgIGlmIChsYXp5VmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc1Vuc3VwcG9ydGVkID0gaXNVbnN1cHBvcnRlZExhenlSb3V0ZUZ1bmN0aW9uS2V5KGxhenlSb3V0ZVByb3BlcnR5KTtcbiAgICAgICAgbGV0IHN0YXRpY1JvdXRlVmFsdWUgPSByb3V0ZVRvVXBkYXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICAgICAgbGV0IGlzU3RhdGljYWxseURlZmluZWQgPSBzdGF0aWNSb3V0ZVZhbHVlICE9PSB2b2lkIDAgJiYgLy8gVGhpcyBwcm9wZXJ0eSBpc24ndCBzdGF0aWMgc2luY2UgaXQgc2hvdWxkIGFsd2F5cyBiZSB1cGRhdGVkIGJhc2VkXG4gICAgICAgIC8vIG9uIHRoZSByb3V0ZSB1cGRhdGVzXG4gICAgICAgIGxhenlSb3V0ZVByb3BlcnR5ICE9PSBcImhhc0Vycm9yQm91bmRhcnlcIjtcbiAgICAgICAgaWYgKGlzVW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgIWlzVW5zdXBwb3J0ZWQsXG4gICAgICAgICAgICBcIlJvdXRlIHByb3BlcnR5IFwiICsgbGF6eVJvdXRlUHJvcGVydHkgKyBcIiBpcyBub3QgYSBzdXBwb3J0ZWQgcHJvcGVydHkgdG8gYmUgcmV0dXJuZWQgZnJvbSBhIGxhenkgcm91dGUgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1N0YXRpY2FsbHlEZWZpbmVkKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICFpc1N0YXRpY2FsbHlEZWZpbmVkLFxuICAgICAgICAgICAgYFJvdXRlIFwiJHtyb3V0ZVRvVXBkYXRlLmlkfVwiIGhhcyBhIHN0YXRpYyBwcm9wZXJ0eSBcIiR7bGF6eVJvdXRlUHJvcGVydHl9XCIgZGVmaW5lZCBidXQgaXRzIGxhenkgZnVuY3Rpb24gaXMgYWxzbyByZXR1cm5pbmcgYSB2YWx1ZSBmb3IgdGhpcyBwcm9wZXJ0eS4gVGhlIGxhenkgcm91dGUgcHJvcGVydHkgXCIke2xhenlSb3V0ZVByb3BlcnR5fVwiIHdpbGwgYmUgaWdub3JlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZVVwZGF0ZXNbbGF6eVJvdXRlUHJvcGVydHldID0gbGF6eVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHJvdXRlVXBkYXRlcyk7XG4gICAgICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHtcbiAgICAgICAgLy8gVG8ga2VlcCB0aGluZ3MgZnJhbWV3b3JrIGFnbm9zdGljLCB3ZSB1c2UgdGhlIHByb3ZpZGVkIGBtYXBSb3V0ZVByb3BlcnRpZXNgXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHNldCB0aGUgZnJhbWV3b3JrLWF3YXJlIHByb3BlcnRpZXMgKGBlbGVtZW50YC9gaGFzRXJyb3JCb3VuZGFyeWApXG4gICAgICAgIC8vIHNpbmNlIHRoZSBsb2dpYyB3aWxsIGRpZmZlciBiZXR3ZWVuIGZyYW1ld29ya3MuXG4gICAgICAgIC4uLm1hcFJvdXRlUHJvcGVydGllczIocm91dGVUb1VwZGF0ZSksXG4gICAgICAgIGxhenk6IHZvaWQgMFxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgICBsYXp5Um91dGVGdW5jdGlvbkNhY2hlLnNldChyb3V0ZVRvVXBkYXRlLCBsYXp5Um91dGVQcm9taXNlMik7XG4gICAgbGF6eVJvdXRlUHJvbWlzZTIuY2F0Y2goKCkgPT4ge1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBsYXp5Um91dGVQcm9taXNlOiBsYXp5Um91dGVQcm9taXNlMixcbiAgICAgIGxhenlIYW5kbGVyUHJvbWlzZTogbGF6eVJvdXRlUHJvbWlzZTJcbiAgICB9O1xuICB9XG4gIGxldCBsYXp5S2V5cyA9IE9iamVjdC5rZXlzKHJvdXRlLmxhenkpO1xuICBsZXQgbGF6eVByb3BlcnR5UHJvbWlzZXMgPSBbXTtcbiAgbGV0IGxhenlIYW5kbGVyUHJvbWlzZSA9IHZvaWQgMDtcbiAgZm9yIChsZXQga2V5IG9mIGxhenlLZXlzKSB7XG4gICAgaWYgKGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXAgJiYgbGF6eVJvdXRlUHJvcGVydGllc1RvU2tpcC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHByb21pc2UgPSBsb2FkTGF6eVJvdXRlUHJvcGVydHkoe1xuICAgICAga2V5LFxuICAgICAgcm91dGUsXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIG1hcFJvdXRlUHJvcGVydGllczogbWFwUm91dGVQcm9wZXJ0aWVzMlxuICAgIH0pO1xuICAgIGlmIChwcm9taXNlKSB7XG4gICAgICBsYXp5UHJvcGVydHlQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgaWYgKGtleSA9PT0gdHlwZSkge1xuICAgICAgICBsYXp5SGFuZGxlclByb21pc2UgPSBwcm9taXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgbGF6eVJvdXRlUHJvbWlzZSA9IGxhenlQcm9wZXJ0eVByb21pc2VzLmxlbmd0aCA+IDAgPyBQcm9taXNlLmFsbChsYXp5UHJvcGVydHlQcm9taXNlcykudGhlbigoKSA9PiB7XG4gIH0pIDogdm9pZCAwO1xuICBsYXp5Um91dGVQcm9taXNlPy5jYXRjaCgoKSA9PiB7XG4gIH0pO1xuICBsYXp5SGFuZGxlclByb21pc2U/LmNhdGNoKCgpID0+IHtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbGF6eVJvdXRlUHJvbWlzZSxcbiAgICBsYXp5SGFuZGxlclByb21pc2VcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzTm9uTnVsbGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2b2lkIDA7XG59XG5mdW5jdGlvbiBsb2FkTGF6eU1pZGRsZXdhcmVGb3JNYXRjaGVzKG1hdGNoZXMsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMyKSB7XG4gIGxldCBwcm9taXNlcyA9IG1hdGNoZXMubWFwKCh7IHJvdXRlIH0pID0+IHtcbiAgICBpZiAodHlwZW9mIHJvdXRlLmxhenkgIT09IFwib2JqZWN0XCIgfHwgIXJvdXRlLmxhenkubWlkZGxld2FyZSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRMYXp5Um91dGVQcm9wZXJ0eSh7XG4gICAgICBrZXk6IFwibWlkZGxld2FyZVwiLFxuICAgICAgcm91dGUsXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIG1hcFJvdXRlUHJvcGVydGllczogbWFwUm91dGVQcm9wZXJ0aWVzMlxuICAgIH0pO1xuICB9KS5maWx0ZXIoaXNOb25OdWxsYWJsZSk7XG4gIHJldHVybiBwcm9taXNlcy5sZW5ndGggPiAwID8gUHJvbWlzZS5hbGwocHJvbWlzZXMpIDogdm9pZCAwO1xufVxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdERhdGFTdHJhdGVneShhcmdzKSB7XG4gIGxldCBtYXRjaGVzVG9Mb2FkID0gYXJncy5tYXRjaGVzLmZpbHRlcigobSkgPT4gbS5zaG91bGRMb2FkKTtcbiAgbGV0IGtleWVkUmVzdWx0cyA9IHt9O1xuICBsZXQgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKG1hdGNoZXNUb0xvYWQubWFwKChtKSA9PiBtLnJlc29sdmUoKSkpO1xuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaSkgPT4ge1xuICAgIGtleWVkUmVzdWx0c1ttYXRjaGVzVG9Mb2FkW2ldLnJvdXRlLmlkXSA9IHJlc3VsdDtcbiAgfSk7XG4gIHJldHVybiBrZXllZFJlc3VsdHM7XG59XG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0RGF0YVN0cmF0ZWd5V2l0aE1pZGRsZXdhcmUoYXJncykge1xuICBpZiAoIWFyZ3MubWF0Y2hlcy5zb21lKChtKSA9PiBtLnJvdXRlLm1pZGRsZXdhcmUpKSB7XG4gICAgcmV0dXJuIGRlZmF1bHREYXRhU3RyYXRlZ3koYXJncyk7XG4gIH1cbiAgcmV0dXJuIHJ1bkNsaWVudE1pZGRsZXdhcmVQaXBlbGluZShhcmdzLCAoKSA9PiBkZWZhdWx0RGF0YVN0cmF0ZWd5KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHJ1blNlcnZlck1pZGRsZXdhcmVQaXBlbGluZShhcmdzLCBoYW5kbGVyLCBlcnJvckhhbmRsZXIpIHtcbiAgcmV0dXJuIHJ1bk1pZGRsZXdhcmVQaXBlbGluZShcbiAgICBhcmdzLFxuICAgIGhhbmRsZXIsXG4gICAgcHJvY2Vzc1Jlc3VsdCxcbiAgICBpc1Jlc3BvbnNlLFxuICAgIGVycm9ySGFuZGxlclxuICApO1xuICBmdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCkge1xuICAgIHJldHVybiBpc0RhdGFXaXRoUmVzcG9uc2VJbml0KHJlc3VsdCkgPyBkYXRhV2l0aFJlc3BvbnNlSW5pdFRvUmVzcG9uc2UocmVzdWx0KSA6IHJlc3VsdDtcbiAgfVxufVxuZnVuY3Rpb24gcnVuQ2xpZW50TWlkZGxld2FyZVBpcGVsaW5lKGFyZ3MsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIHJ1bk1pZGRsZXdhcmVQaXBlbGluZShcbiAgICBhcmdzLFxuICAgIGhhbmRsZXIsXG4gICAgKHIpID0+IHIsXG4gICAgLy8gTm8gcG9zdC1wcm9jZXNzaW5nIG5lZWRlZCBvbiB0aGUgY2xpZW50XG4gICAgaXNEYXRhU3RyYXRlZ3lSZXN1bHRzLFxuICAgIGVycm9ySGFuZGxlclxuICApO1xuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3IsIHJvdXRlSWQsIG5leHRSZXN1bHQpIHtcbiAgICBpZiAobmV4dFJlc3VsdCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0UmVzdWx0LnZhbHVlLCB7XG4gICAgICAgICAgW3JvdXRlSWRdOiB7IHR5cGU6IFwiZXJyb3JcIiwgcmVzdWx0OiBlcnJvciB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgeyBtYXRjaGVzIH0gPSBhcmdzO1xuICAgICAgbGV0IG1heEJvdW5kYXJ5SWR4ID0gTWF0aC5taW4oXG4gICAgICAgIC8vIFRocm93aW5nIHJvdXRlXG4gICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgIG1hdGNoZXMuZmluZEluZGV4KChtKSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICAgIC8vIG9yIHRoZSBzaGFsbG93ZXN0IHJvdXRlIHRoYXQgbmVlZHMgdG8gbG9hZCBkYXRhXG4gICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgIG1hdGNoZXMuZmluZEluZGV4KChtKSA9PiBtLnVuc3RhYmxlX3Nob3VsZENhbGxIYW5kbGVyKCkpLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGxldCBib3VuZGFyeVJvdXRlSWQgPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KFxuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBtYXRjaGVzW21heEJvdW5kYXJ5SWR4XS5yb3V0ZS5pZFxuICAgICAgKS5yb3V0ZS5pZDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICBbYm91bmRhcnlSb3V0ZUlkXTogeyB0eXBlOiBcImVycm9yXCIsIHJlc3VsdDogZXJyb3IgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBydW5NaWRkbGV3YXJlUGlwZWxpbmUoYXJncywgaGFuZGxlciwgcHJvY2Vzc1Jlc3VsdCwgaXNSZXN1bHQsIGVycm9ySGFuZGxlcikge1xuICBsZXQgeyBtYXRjaGVzLCByZXF1ZXN0LCBwYXJhbXMsIGNvbnRleHQsIHVuc3RhYmxlX3BhdHRlcm4gfSA9IGFyZ3M7XG4gIGxldCB0dXBsZXMgPSBtYXRjaGVzLmZsYXRNYXAoXG4gICAgKG0pID0+IG0ucm91dGUubWlkZGxld2FyZSA/IG0ucm91dGUubWlkZGxld2FyZS5tYXAoKGZuKSA9PiBbbS5yb3V0ZS5pZCwgZm5dKSA6IFtdXG4gICk7XG4gIGxldCByZXN1bHQgPSBhd2FpdCBjYWxsUm91dGVNaWRkbGV3YXJlKFxuICAgIHtcbiAgICAgIHJlcXVlc3QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjb250ZXh0LFxuICAgICAgdW5zdGFibGVfcGF0dGVyblxuICAgIH0sXG4gICAgdHVwbGVzLFxuICAgIGhhbmRsZXIsXG4gICAgcHJvY2Vzc1Jlc3VsdCxcbiAgICBpc1Jlc3VsdCxcbiAgICBlcnJvckhhbmRsZXJcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNhbGxSb3V0ZU1pZGRsZXdhcmUoYXJncywgbWlkZGxld2FyZXMsIGhhbmRsZXIsIHByb2Nlc3NSZXN1bHQsIGlzUmVzdWx0LCBlcnJvckhhbmRsZXIsIGlkeCA9IDApIHtcbiAgbGV0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyByZXF1ZXN0LnNpZ25hbC5yZWFzb24gPz8gbmV3IEVycm9yKGBSZXF1ZXN0IGFib3J0ZWQ6ICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9YCk7XG4gIH1cbiAgbGV0IHR1cGxlID0gbWlkZGxld2FyZXNbaWR4XTtcbiAgaWYgKCF0dXBsZSkge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBoYW5kbGVyKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZXQgW3JvdXRlSWQsIG1pZGRsZXdhcmVdID0gdHVwbGU7XG4gIGxldCBuZXh0UmVzdWx0O1xuICBsZXQgbmV4dCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobmV4dFJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG1heSBvbmx5IGNhbGwgYG5leHQoKWAgb25jZSBwZXIgbWlkZGxld2FyZVwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjYWxsUm91dGVNaWRkbGV3YXJlKFxuICAgICAgICBhcmdzLFxuICAgICAgICBtaWRkbGV3YXJlcyxcbiAgICAgICAgaGFuZGxlcixcbiAgICAgICAgcHJvY2Vzc1Jlc3VsdCxcbiAgICAgICAgaXNSZXN1bHQsXG4gICAgICAgIGVycm9ySGFuZGxlcixcbiAgICAgICAgaWR4ICsgMVxuICAgICAgKTtcbiAgICAgIG5leHRSZXN1bHQgPSB7IHZhbHVlOiByZXN1bHQgfTtcbiAgICAgIHJldHVybiBuZXh0UmVzdWx0LnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0UmVzdWx0ID0geyB2YWx1ZTogYXdhaXQgZXJyb3JIYW5kbGVyKGVycm9yLCByb3V0ZUlkLCBuZXh0UmVzdWx0KSB9O1xuICAgICAgcmV0dXJuIG5leHRSZXN1bHQudmFsdWU7XG4gICAgfVxuICB9O1xuICB0cnkge1xuICAgIGxldCB2YWx1ZSA9IGF3YWl0IG1pZGRsZXdhcmUoYXJncywgbmV4dCk7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlICE9IG51bGwgPyBwcm9jZXNzUmVzdWx0KHZhbHVlKSA6IHZvaWQgMDtcbiAgICBpZiAoaXNSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKG5leHRSZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQgPz8gbmV4dFJlc3VsdC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFJlc3VsdCA9IHsgdmFsdWU6IGF3YWl0IG5leHQoKSB9O1xuICAgICAgcmV0dXJuIG5leHRSZXN1bHQudmFsdWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGVycm9ySGFuZGxlcihlcnJvciwgcm91dGVJZCwgbmV4dFJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5mdW5jdGlvbiBnZXREYXRhU3RyYXRlZ3lNYXRjaExhenlQcm9taXNlcyhtYXBSb3V0ZVByb3BlcnRpZXMyLCBtYW5pZmVzdCwgcmVxdWVzdCwgbWF0Y2gsIGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXApIHtcbiAgbGV0IGxhenlNaWRkbGV3YXJlUHJvbWlzZSA9IGxvYWRMYXp5Um91dGVQcm9wZXJ0eSh7XG4gICAga2V5OiBcIm1pZGRsZXdhcmVcIixcbiAgICByb3V0ZTogbWF0Y2gucm91dGUsXG4gICAgbWFuaWZlc3QsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzOiBtYXBSb3V0ZVByb3BlcnRpZXMyXG4gIH0pO1xuICBsZXQgbGF6eVJvdXRlUHJvbWlzZXMgPSBsb2FkTGF6eVJvdXRlKFxuICAgIG1hdGNoLnJvdXRlLFxuICAgIGlzTXV0YXRpb25NZXRob2QocmVxdWVzdC5tZXRob2QpID8gXCJhY3Rpb25cIiA6IFwibG9hZGVyXCIsXG4gICAgbWFuaWZlc3QsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICBsYXp5Um91dGVQcm9wZXJ0aWVzVG9Ta2lwXG4gICk7XG4gIHJldHVybiB7XG4gICAgbWlkZGxld2FyZTogbGF6eU1pZGRsZXdhcmVQcm9taXNlLFxuICAgIHJvdXRlOiBsYXp5Um91dGVQcm9taXNlcy5sYXp5Um91dGVQcm9taXNlLFxuICAgIGhhbmRsZXI6IGxhenlSb3V0ZVByb21pc2VzLmxhenlIYW5kbGVyUHJvbWlzZVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGF0YVN0cmF0ZWd5TWF0Y2gobWFwUm91dGVQcm9wZXJ0aWVzMiwgbWFuaWZlc3QsIHJlcXVlc3QsIHVuc3RhYmxlX3BhdHRlcm4sIG1hdGNoLCBsYXp5Um91dGVQcm9wZXJ0aWVzVG9Ta2lwLCBzY29wZWRDb250ZXh0LCBzaG91bGRMb2FkLCB1bnN0YWJsZV9zaG91bGRSZXZhbGlkYXRlQXJncyA9IG51bGwpIHtcbiAgbGV0IGlzVXNpbmdOZXdBcGkgPSBmYWxzZTtcbiAgbGV0IF9sYXp5UHJvbWlzZXMgPSBnZXREYXRhU3RyYXRlZ3lNYXRjaExhenlQcm9taXNlcyhcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMyLFxuICAgIG1hbmlmZXN0LFxuICAgIHJlcXVlc3QsXG4gICAgbWF0Y2gsXG4gICAgbGF6eVJvdXRlUHJvcGVydGllc1RvU2tpcFxuICApO1xuICByZXR1cm4ge1xuICAgIC4uLm1hdGNoLFxuICAgIF9sYXp5UHJvbWlzZXMsXG4gICAgc2hvdWxkTG9hZCxcbiAgICB1bnN0YWJsZV9zaG91bGRSZXZhbGlkYXRlQXJncyxcbiAgICB1bnN0YWJsZV9zaG91bGRDYWxsSGFuZGxlcihkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgaXNVc2luZ05ld0FwaSA9IHRydWU7XG4gICAgICBpZiAoIXVuc3RhYmxlX3Nob3VsZFJldmFsaWRhdGVBcmdzKSB7XG4gICAgICAgIHJldHVybiBzaG91bGRMb2FkO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobWF0Y2gsIHtcbiAgICAgICAgICAuLi51bnN0YWJsZV9zaG91bGRSZXZhbGlkYXRlQXJncyxcbiAgICAgICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKG1hdGNoLCB1bnN0YWJsZV9zaG91bGRSZXZhbGlkYXRlQXJncyk7XG4gICAgfSxcbiAgICByZXNvbHZlKGhhbmRsZXJPdmVycmlkZSkge1xuICAgICAgbGV0IHsgbGF6eSwgbG9hZGVyLCBtaWRkbGV3YXJlIH0gPSBtYXRjaC5yb3V0ZTtcbiAgICAgIGxldCBjYWxsSGFuZGxlciA9IGlzVXNpbmdOZXdBcGkgfHwgc2hvdWxkTG9hZCB8fCBoYW5kbGVyT3ZlcnJpZGUgJiYgIWlzTXV0YXRpb25NZXRob2QocmVxdWVzdC5tZXRob2QpICYmIChsYXp5IHx8IGxvYWRlcik7XG4gICAgICBsZXQgaXNNaWRkbGV3YXJlT25seVJvdXRlID0gbWlkZGxld2FyZSAmJiBtaWRkbGV3YXJlLmxlbmd0aCA+IDAgJiYgIWxvYWRlciAmJiAhbGF6eTtcbiAgICAgIGlmIChjYWxsSGFuZGxlciAmJiAoaXNNdXRhdGlvbk1ldGhvZChyZXF1ZXN0Lm1ldGhvZCkgfHwgIWlzTWlkZGxld2FyZU9ubHlSb3V0ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxMb2FkZXJPckFjdGlvbih7XG4gICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICB1bnN0YWJsZV9wYXR0ZXJuLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIGxhenlIYW5kbGVyUHJvbWlzZTogX2xhenlQcm9taXNlcz8uaGFuZGxlcixcbiAgICAgICAgICBsYXp5Um91dGVQcm9taXNlOiBfbGF6eVByb21pc2VzPy5yb3V0ZSxcbiAgICAgICAgICBoYW5kbGVyT3ZlcnJpZGUsXG4gICAgICAgICAgc2NvcGVkQ29udGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB0eXBlOiBcImRhdGFcIiAvKiBkYXRhICovLCByZXN1bHQ6IHZvaWQgMCB9KTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRlZERhdGFTdHJhdGVneU1hdGNoZXMobWFwUm91dGVQcm9wZXJ0aWVzMiwgbWFuaWZlc3QsIHJlcXVlc3QsIG1hdGNoZXMsIHRhcmdldE1hdGNoLCBsYXp5Um91dGVQcm9wZXJ0aWVzVG9Ta2lwLCBzY29wZWRDb250ZXh0LCBzaG91bGRSZXZhbGlkYXRlQXJncyA9IG51bGwpIHtcbiAgcmV0dXJuIG1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgIGlmIChtYXRjaC5yb3V0ZS5pZCAhPT0gdGFyZ2V0TWF0Y2gucm91dGUuaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1hdGNoLFxuICAgICAgICBzaG91bGRMb2FkOiBmYWxzZSxcbiAgICAgICAgdW5zdGFibGVfc2hvdWxkUmV2YWxpZGF0ZUFyZ3M6IHNob3VsZFJldmFsaWRhdGVBcmdzLFxuICAgICAgICB1bnN0YWJsZV9zaG91bGRDYWxsSGFuZGxlcjogKCkgPT4gZmFsc2UsXG4gICAgICAgIF9sYXp5UHJvbWlzZXM6IGdldERhdGFTdHJhdGVneU1hdGNoTGF6eVByb21pc2VzKFxuICAgICAgICAgIG1hcFJvdXRlUHJvcGVydGllczIsXG4gICAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICBsYXp5Um91dGVQcm9wZXJ0aWVzVG9Ta2lwXG4gICAgICAgICksXG4gICAgICAgIHJlc29sdmU6ICgpID0+IFByb21pc2UucmVzb2x2ZSh7IHR5cGU6IFwiZGF0YVwiLCByZXN1bHQ6IHZvaWQgMCB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdldERhdGFTdHJhdGVneU1hdGNoKFxuICAgICAgbWFwUm91dGVQcm9wZXJ0aWVzMixcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGdldFJvdXRlUGF0dGVybihtYXRjaGVzLm1hcCgobSkgPT4gbS5yb3V0ZS5wYXRoKSksXG4gICAgICBtYXRjaCxcbiAgICAgIGxhenlSb3V0ZVByb3BlcnRpZXNUb1NraXAsXG4gICAgICBzY29wZWRDb250ZXh0LFxuICAgICAgdHJ1ZSxcbiAgICAgIHNob3VsZFJldmFsaWRhdGVBcmdzXG4gICAgKTtcbiAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBjYWxsRGF0YVN0cmF0ZWd5SW1wbChkYXRhU3RyYXRlZ3lJbXBsLCByZXF1ZXN0LCBtYXRjaGVzLCBmZXRjaGVyS2V5LCBzY29wZWRDb250ZXh0LCBpc1N0YXRpY0hhbmRsZXIpIHtcbiAgaWYgKG1hdGNoZXMuc29tZSgobSkgPT4gbS5fbGF6eVByb21pc2VzPy5taWRkbGV3YXJlKSkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKG1hdGNoZXMubWFwKChtKSA9PiBtLl9sYXp5UHJvbWlzZXM/Lm1pZGRsZXdhcmUpKTtcbiAgfVxuICBsZXQgZGF0YVN0cmF0ZWd5QXJncyA9IHtcbiAgICByZXF1ZXN0LFxuICAgIHVuc3RhYmxlX3BhdHRlcm46IGdldFJvdXRlUGF0dGVybihtYXRjaGVzLm1hcCgobSkgPT4gbS5yb3V0ZS5wYXRoKSksXG4gICAgcGFyYW1zOiBtYXRjaGVzWzBdLnBhcmFtcyxcbiAgICBjb250ZXh0OiBzY29wZWRDb250ZXh0LFxuICAgIG1hdGNoZXNcbiAgfTtcbiAgbGV0IHJ1bkNsaWVudE1pZGRsZXdhcmUgPSBpc1N0YXRpY0hhbmRsZXIgPyAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJZb3UgY2Fubm90IGNhbGwgYHJ1bkNsaWVudE1pZGRsZXdhcmUoKWAgZnJvbSBhIHN0YXRpYyBoYW5kbGVyIGBkYXRhU3RyYXRlZ3lgLiBNaWRkbGV3YXJlIGlzIHJ1biBvdXRzaWRlIG9mIGBkYXRhU3RyYXRlZ3lgIGR1cmluZyBTU1IgaW4gb3JkZXIgdG8gYnViYmxlIHVwIHRoZSBSZXNwb25zZS4gIFlvdSBjYW4gZW5hYmxlIG1pZGRsZXdhcmUgdmlhIHRoZSBgcmVzcG9uZGAgQVBJIGluIGBxdWVyeWAvYHF1ZXJ5Um91dGVgXCJcbiAgICApO1xuICB9IDogKGNiKSA9PiB7XG4gICAgbGV0IHR5cGVkRGF0YVN0cmF0ZWd5QXJncyA9IGRhdGFTdHJhdGVneUFyZ3M7XG4gICAgcmV0dXJuIHJ1bkNsaWVudE1pZGRsZXdhcmVQaXBlbGluZSh0eXBlZERhdGFTdHJhdGVneUFyZ3MsICgpID0+IHtcbiAgICAgIHJldHVybiBjYih7XG4gICAgICAgIC4uLnR5cGVkRGF0YVN0cmF0ZWd5QXJncyxcbiAgICAgICAgZmV0Y2hlcktleSxcbiAgICAgICAgcnVuQ2xpZW50TWlkZGxld2FyZTogKCkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiQ2Fubm90IGNhbGwgYHJ1bkNsaWVudE1pZGRsZXdhcmUoKWAgZnJvbSB3aXRoaW4gYW4gYHJ1bkNsaWVudE1pZGRsZXdhcmVgIGhhbmRsZXJcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBsZXQgcmVzdWx0cyA9IGF3YWl0IGRhdGFTdHJhdGVneUltcGwoe1xuICAgIC4uLmRhdGFTdHJhdGVneUFyZ3MsXG4gICAgZmV0Y2hlcktleSxcbiAgICBydW5DbGllbnRNaWRkbGV3YXJlXG4gIH0pO1xuICB0cnkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgbWF0Y2hlcy5mbGF0TWFwKChtKSA9PiBbXG4gICAgICAgIG0uX2xhenlQcm9taXNlcz8uaGFuZGxlcixcbiAgICAgICAgbS5fbGF6eVByb21pc2VzPy5yb3V0ZVxuICAgICAgXSlcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5hc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyT3JBY3Rpb24oe1xuICByZXF1ZXN0LFxuICB1bnN0YWJsZV9wYXR0ZXJuLFxuICBtYXRjaCxcbiAgbGF6eUhhbmRsZXJQcm9taXNlLFxuICBsYXp5Um91dGVQcm9taXNlLFxuICBoYW5kbGVyT3ZlcnJpZGUsXG4gIHNjb3BlZENvbnRleHRcbn0pIHtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IG9uUmVqZWN0O1xuICBsZXQgaXNBY3Rpb24gPSBpc011dGF0aW9uTWV0aG9kKHJlcXVlc3QubWV0aG9kKTtcbiAgbGV0IHR5cGUgPSBpc0FjdGlvbiA/IFwiYWN0aW9uXCIgOiBcImxvYWRlclwiO1xuICBsZXQgcnVuSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgbGV0IHJlamVjdDtcbiAgICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIG9uUmVqZWN0ID0gKCkgPT4gcmVqZWN0KCk7XG4gICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uUmVqZWN0KTtcbiAgICBsZXQgYWN0dWFsSGFuZGxlciA9IChjdHgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgWW91IGNhbm5vdCBjYWxsIHRoZSBoYW5kbGVyIGZvciBhIHJvdXRlIHdoaWNoIGRlZmluZXMgYSBib29sZWFuIFwiJHt0eXBlfVwiIFtyb3V0ZUlkOiAke21hdGNoLnJvdXRlLmlkfV1gXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZXIoXG4gICAgICAgIHtcbiAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgIHVuc3RhYmxlX3BhdHRlcm4sXG4gICAgICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXMsXG4gICAgICAgICAgY29udGV4dDogc2NvcGVkQ29udGV4dFxuICAgICAgICB9LFxuICAgICAgICAuLi5jdHggIT09IHZvaWQgMCA/IFtjdHhdIDogW11cbiAgICAgICk7XG4gICAgfTtcbiAgICBsZXQgaGFuZGxlclByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHZhbCA9IGF3YWl0IChoYW5kbGVyT3ZlcnJpZGUgPyBoYW5kbGVyT3ZlcnJpZGUoKGN0eCkgPT4gYWN0dWFsSGFuZGxlcihjdHgpKSA6IGFjdHVhbEhhbmRsZXIoKSk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiZGF0YVwiLCByZXN1bHQ6IHZhbCB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBcImVycm9yXCIsIHJlc3VsdDogZSB9O1xuICAgICAgfVxuICAgIH0pKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbaGFuZGxlclByb21pc2UsIGFib3J0UHJvbWlzZV0pO1xuICB9O1xuICB0cnkge1xuICAgIGxldCBoYW5kbGVyID0gaXNBY3Rpb24gPyBtYXRjaC5yb3V0ZS5hY3Rpb24gOiBtYXRjaC5yb3V0ZS5sb2FkZXI7XG4gICAgaWYgKGxhenlIYW5kbGVyUHJvbWlzZSB8fCBsYXp5Um91dGVQcm9taXNlKSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBsZXQgaGFuZGxlckVycm9yO1xuICAgICAgICBsZXQgW3ZhbHVlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAvLyBJZiB0aGUgaGFuZGxlciB0aHJvd3MsIGRvbid0IGxldCBpdCBpbW1lZGlhdGVseSBidWJibGUgb3V0LFxuICAgICAgICAgIC8vIHNpbmNlIHdlIG5lZWQgdG8gbGV0IHRoZSBsYXp5KCkgZXhlY3V0aW9uIGZpbmlzaCBzbyB3ZSBrbm93IGlmIHRoaXNcbiAgICAgICAgICAvLyByb3V0ZSBoYXMgYSBib3VuZGFyeSB0aGF0IGNhbiBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgcnVuSGFuZGxlcihoYW5kbGVyKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlckVycm9yID0gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBFbnN1cmUgYWxsIGxhenkgcm91dGUgcHJvbWlzZXMgYXJlIHJlc29sdmVkIGJlZm9yZSBjb250aW51aW5nXG4gICAgICAgICAgbGF6eUhhbmRsZXJQcm9taXNlLFxuICAgICAgICAgIGxhenlSb3V0ZVByb21pc2VcbiAgICAgICAgXSk7XG4gICAgICAgIGlmIChoYW5kbGVyRXJyb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHRocm93IGhhbmRsZXJFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGxhenlIYW5kbGVyUHJvbWlzZTtcbiAgICAgICAgbGV0IGhhbmRsZXIyID0gaXNBY3Rpb24gPyBtYXRjaC5yb3V0ZS5hY3Rpb24gOiBtYXRjaC5yb3V0ZS5sb2FkZXI7XG4gICAgICAgIGlmIChoYW5kbGVyMikge1xuICAgICAgICAgIFtyZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW3J1bkhhbmRsZXIoaGFuZGxlcjIpLCBsYXp5Um91dGVQcm9taXNlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICBsZXQgcGF0aG5hbWUgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICByb3V0ZUlkOiBtYXRjaC5yb3V0ZS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiZGF0YVwiIC8qIGRhdGEgKi8sIHJlc3VsdDogdm9pZCAwIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgICBsZXQgcGF0aG5hbWUgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBydW5IYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IHR5cGU6IFwiZXJyb3JcIiAvKiBlcnJvciAqLywgcmVzdWx0OiBlIH07XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKG9uUmVqZWN0KSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuYXN5bmMgZnVuY3Rpb24gcGFyc2VSZXNwb25zZUJvZHkocmVzcG9uc2UpIHtcbiAgbGV0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XG4gIGlmIChjb250ZW50VHlwZSAmJiAvXFxiYXBwbGljYXRpb25cXC9qc29uXFxiLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgIHJldHVybiByZXNwb25zZS5ib2R5ID09IG51bGwgPyBudWxsIDogcmVzcG9uc2UuanNvbigpO1xuICB9XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59XG5hc3luYyBmdW5jdGlvbiBjb252ZXJ0RGF0YVN0cmF0ZWd5UmVzdWx0VG9EYXRhUmVzdWx0KGRhdGFTdHJhdGVneVJlc3VsdCkge1xuICBsZXQgeyByZXN1bHQsIHR5cGUgfSA9IGRhdGFTdHJhdGVneVJlc3VsdDtcbiAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIGxldCBkYXRhMjtcbiAgICB0cnkge1xuICAgICAgZGF0YTIgPSBhd2FpdCBwYXJzZVJlc3BvbnNlQm9keShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiZXJyb3JcIiAvKiBlcnJvciAqLywgZXJyb3I6IGUgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwiZXJyb3JcIiAvKiBlcnJvciAqLykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJlcnJvclwiIC8qIGVycm9yICovLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yUmVzcG9uc2VJbXBsKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0LCBkYXRhMiksXG4gICAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJkYXRhXCIgLyogZGF0YSAqLyxcbiAgICAgIGRhdGE6IGRhdGEyLFxuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1cyxcbiAgICAgIGhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzXG4gICAgfTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJlcnJvclwiIC8qIGVycm9yICovKSB7XG4gICAgaWYgKGlzRGF0YVdpdGhSZXNwb25zZUluaXQocmVzdWx0KSkge1xuICAgICAgaWYgKHJlc3VsdC5kYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIgLyogZXJyb3IgKi8sXG4gICAgICAgICAgZXJyb3I6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5pbml0Py5zdGF0dXMsXG4gICAgICAgICAgaGVhZGVyczogcmVzdWx0LmluaXQ/LmhlYWRlcnMgPyBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKSA6IHZvaWQgMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJlcnJvclwiIC8qIGVycm9yICovLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yUmVzcG9uc2VJbXBsKFxuICAgICAgICAgIHJlc3VsdC5pbml0Py5zdGF0dXMgfHwgNTAwLFxuICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICByZXN1bHQuZGF0YVxuICAgICAgICApLFxuICAgICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQpID8gcmVzdWx0LnN0YXR1cyA6IHZvaWQgMCxcbiAgICAgICAgaGVhZGVyczogcmVzdWx0LmluaXQ/LmhlYWRlcnMgPyBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKSA6IHZvaWQgMFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwiZXJyb3JcIiAvKiBlcnJvciAqLyxcbiAgICAgIGVycm9yOiByZXN1bHQsXG4gICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQpID8gcmVzdWx0LnN0YXR1cyA6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgaWYgKGlzRGF0YVdpdGhSZXNwb25zZUluaXQocmVzdWx0KSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImRhdGFcIiAvKiBkYXRhICovLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuaW5pdD8uc3RhdHVzLFxuICAgICAgaGVhZGVyczogcmVzdWx0LmluaXQ/LmhlYWRlcnMgPyBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKSA6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogXCJkYXRhXCIgLyogZGF0YSAqLywgZGF0YTogcmVzdWx0IH07XG59XG5mdW5jdGlvbiBub3JtYWxpemVSZWxhdGl2ZVJvdXRpbmdSZWRpcmVjdFJlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0LCByb3V0ZUlkLCBtYXRjaGVzLCBiYXNlbmFtZSkge1xuICBsZXQgbG9jYXRpb24gPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICBpbnZhcmlhbnQoXG4gICAgbG9jYXRpb24sXG4gICAgXCJSZWRpcmVjdHMgcmV0dXJuZWQvdGhyb3duIGZyb20gbG9hZGVycy9hY3Rpb25zIG11c3QgaGF2ZSBhIExvY2F0aW9uIGhlYWRlclwiXG4gICk7XG4gIGlmICghaXNBYnNvbHV0ZVVybChsb2NhdGlvbikpIHtcbiAgICBsZXQgdHJpbW1lZE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIG1hdGNoZXMuZmluZEluZGV4KChtKSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSArIDFcbiAgICApO1xuICAgIGxvY2F0aW9uID0gbm9ybWFsaXplVG8oXG4gICAgICBuZXcgVVJMKHJlcXVlc3QudXJsKSxcbiAgICAgIHRyaW1tZWRNYXRjaGVzLFxuICAgICAgYmFzZW5hbWUsXG4gICAgICBsb2NhdGlvblxuICAgICk7XG4gICAgcmVzcG9uc2UuaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCBsb2NhdGlvbik7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUmVkaXJlY3RMb2NhdGlvbihsb2NhdGlvbiwgY3VycmVudFVybCwgYmFzZW5hbWUpIHtcbiAgaWYgKGlzQWJzb2x1dGVVcmwobG9jYXRpb24pKSB7XG4gICAgbGV0IG5vcm1hbGl6ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIGxldCB1cmwgPSBub3JtYWxpemVkTG9jYXRpb24uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgbm9ybWFsaXplZExvY2F0aW9uKSA6IG5ldyBVUkwobm9ybWFsaXplZExvY2F0aW9uKTtcbiAgICBsZXQgaXNTYW1lQmFzZW5hbWUgPSBzdHJpcEJhc2VuYW1lKHVybC5wYXRobmFtZSwgYmFzZW5hbWUpICE9IG51bGw7XG4gICAgaWYgKHVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIGlzU2FtZUJhc2VuYW1lKSB7XG4gICAgICByZXR1cm4gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCArIHVybC5oYXNoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbG9jYXRpb247XG59XG5mdW5jdGlvbiBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChoaXN0b3J5LCBsb2NhdGlvbiwgc2lnbmFsLCBzdWJtaXNzaW9uKSB7XG4gIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdHJpcEhhc2hGcm9tUGF0aChsb2NhdGlvbikpLnRvU3RyaW5nKCk7XG4gIGxldCBpbml0ID0geyBzaWduYWwgfTtcbiAgaWYgKHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgbGV0IHsgZm9ybU1ldGhvZCwgZm9ybUVuY1R5cGUgfSA9IHN1Ym1pc3Npb247XG4gICAgaW5pdC5tZXRob2QgPSBmb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKGZvcm1FbmNUeXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgaW5pdC5oZWFkZXJzID0gbmV3IEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiBmb3JtRW5jVHlwZSB9KTtcbiAgICAgIGluaXQuYm9keSA9IEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24uanNvbik7XG4gICAgfSBlbHNlIGlmIChmb3JtRW5jVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIGluaXQuYm9keSA9IHN1Ym1pc3Npb24udGV4dDtcbiAgICB9IGVsc2UgaWYgKGZvcm1FbmNUeXBlID09PSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICYmIHN1Ym1pc3Npb24uZm9ybURhdGEpIHtcbiAgICAgIGluaXQuYm9keSA9IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKHN1Ym1pc3Npb24uZm9ybURhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0LmJvZHkgPSBzdWJtaXNzaW9uLmZvcm1EYXRhO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlcXVlc3QodXJsLCBpbml0KTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUgOiB2YWx1ZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuZnVuY3Rpb24gY29udmVydFNlYXJjaFBhcmFtc1RvRm9ybURhdGEoc2VhcmNoUGFyYW1zKSB7XG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2Ygc2VhcmNoUGFyYW1zLmVudHJpZXMoKSkge1xuICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZm9ybURhdGE7XG59XG5mdW5jdGlvbiBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIHJlc3VsdHMsIHBlbmRpbmdBY3Rpb25SZXN1bHQsIGlzU3RhdGljSGFuZGxlciA9IGZhbHNlLCBza2lwTG9hZGVyRXJyb3JCdWJibGluZyA9IGZhbHNlKSB7XG4gIGxldCBsb2FkZXJEYXRhID0ge307XG4gIGxldCBlcnJvcnMgPSBudWxsO1xuICBsZXQgc3RhdHVzQ29kZTtcbiAgbGV0IGZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgbGV0IGxvYWRlckhlYWRlcnMgPSB7fTtcbiAgbGV0IHBlbmRpbmdFcnJvciA9IHBlbmRpbmdBY3Rpb25SZXN1bHQgJiYgaXNFcnJvclJlc3VsdChwZW5kaW5nQWN0aW9uUmVzdWx0WzFdKSA/IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZXJyb3IgOiB2b2lkIDA7XG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIShtYXRjaC5yb3V0ZS5pZCBpbiByZXN1bHRzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaWQgPSBtYXRjaC5yb3V0ZS5pZDtcbiAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpZF07XG4gICAgaW52YXJpYW50KFxuICAgICAgIWlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSxcbiAgICAgIFwiQ2Fubm90IGhhbmRsZSByZWRpcmVjdCByZXN1bHRzIGluIHByb2Nlc3NMb2FkZXJEYXRhXCJcbiAgICApO1xuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcjtcbiAgICAgIGlmIChwZW5kaW5nRXJyb3IgIT09IHZvaWQgMCkge1xuICAgICAgICBlcnJvciA9IHBlbmRpbmdFcnJvcjtcbiAgICAgICAgcGVuZGluZ0Vycm9yID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IHt9O1xuICAgICAgaWYgKHNraXBMb2FkZXJFcnJvckJ1YmJsaW5nKSB7XG4gICAgICAgIGVycm9yc1tpZF0gPSBlcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBpZCk7XG4gICAgICAgIGlmIChlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPT0gbnVsbCkge1xuICAgICAgICAgIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzU3RhdGljSGFuZGxlcikge1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IFJlc2V0TG9hZGVyRGF0YVN5bWJvbDtcbiAgICAgIH1cbiAgICAgIGlmICghZm91bmRFcnJvcikge1xuICAgICAgICBmb3VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRhdGE7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1c0NvZGUgJiYgcmVzdWx0LnN0YXR1c0NvZGUgIT09IDIwMCAmJiAhZm91bmRFcnJvcikge1xuICAgICAgICBzdGF0dXNDb2RlID0gcmVzdWx0LnN0YXR1c0NvZGU7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAocGVuZGluZ0Vycm9yICE9PSB2b2lkIDAgJiYgcGVuZGluZ0FjdGlvblJlc3VsdCkge1xuICAgIGVycm9ycyA9IHsgW3BlbmRpbmdBY3Rpb25SZXN1bHRbMF1dOiBwZW5kaW5nRXJyb3IgfTtcbiAgICBpZiAocGVuZGluZ0FjdGlvblJlc3VsdFsyXSkge1xuICAgICAgbG9hZGVyRGF0YVtwZW5kaW5nQWN0aW9uUmVzdWx0WzJdXSA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9ycyxcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIHx8IDIwMCxcbiAgICBsb2FkZXJIZWFkZXJzXG4gIH07XG59XG5mdW5jdGlvbiBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgcmVzdWx0cywgcGVuZGluZ0FjdGlvblJlc3VsdCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzKSB7XG4gIGxldCB7IGxvYWRlckRhdGEsIGVycm9ycyB9ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShcbiAgICBtYXRjaGVzLFxuICAgIHJlc3VsdHMsXG4gICAgcGVuZGluZ0FjdGlvblJlc3VsdFxuICApO1xuICByZXZhbGlkYXRpbmdGZXRjaGVycy5maWx0ZXIoKGYpID0+ICFmLm1hdGNoZXMgfHwgZi5tYXRjaGVzLnNvbWUoKG0pID0+IG0uc2hvdWxkTG9hZCkpLmZvckVhY2goKHJmKSA9PiB7XG4gICAgbGV0IHsga2V5LCBtYXRjaCwgY29udHJvbGxlciB9ID0gcmY7XG4gICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gZmV0Y2hlclJlc3VsdHNba2V5XTtcbiAgICBpbnZhcmlhbnQocmVzdWx0LCBcIkRpZCBub3QgZmluZCBjb3JyZXNwb25kaW5nIGZldGNoZXIgcmVzdWx0XCIpO1xuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCBtYXRjaD8ucm91dGUuaWQpO1xuICAgICAgaWYgKCEoZXJyb3JzICYmIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSkpIHtcbiAgICAgICAgZXJyb3JzID0ge1xuICAgICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgXCJVbmhhbmRsZWQgZmV0Y2hlciByZXZhbGlkYXRpb24gcmVkaXJlY3RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4geyBsb2FkZXJEYXRhLCBlcnJvcnMgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlTG9hZGVyRGF0YShsb2FkZXJEYXRhLCBuZXdMb2FkZXJEYXRhLCBtYXRjaGVzLCBlcnJvcnMpIHtcbiAgbGV0IG1lcmdlZExvYWRlckRhdGEgPSBPYmplY3QuZW50cmllcyhuZXdMb2FkZXJEYXRhKS5maWx0ZXIoKFssIHZdKSA9PiB2ICE9PSBSZXNldExvYWRlckRhdGFTeW1ib2wpLnJlZHVjZSgobWVyZ2VkLCBbaywgdl0pID0+IHtcbiAgICBtZXJnZWRba10gPSB2O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTtcbiAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgIGxldCBpZCA9IG1hdGNoLnJvdXRlLmlkO1xuICAgIGlmICghbmV3TG9hZGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgbG9hZGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgJiYgbWF0Y2gucm91dGUubG9hZGVyKSB7XG4gICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IGxvYWRlckRhdGFbaWRdO1xuICAgIH1cbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkTG9hZGVyRGF0YTtcbn1cbmZ1bmN0aW9uIGdldEFjdGlvbkRhdGFGb3JDb21taXQocGVuZGluZ0FjdGlvblJlc3VsdCkge1xuICBpZiAoIXBlbmRpbmdBY3Rpb25SZXN1bHQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIGlzRXJyb3JSZXN1bHQocGVuZGluZ0FjdGlvblJlc3VsdFsxXSkgPyB7XG4gICAgLy8gQ2xlYXIgb3V0IHByaW9yIGFjdGlvbkRhdGEgb24gZXJyb3JzXG4gICAgYWN0aW9uRGF0YToge31cbiAgfSA6IHtcbiAgICBhY3Rpb25EYXRhOiB7XG4gICAgICBbcGVuZGluZ0FjdGlvblJlc3VsdFswXV06IHBlbmRpbmdBY3Rpb25SZXN1bHRbMV0uZGF0YVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgcm91dGVJZCkge1xuICBsZXQgZWxpZ2libGVNYXRjaGVzID0gcm91dGVJZCA/IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5maW5kSW5kZXgoKG0pID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpICsgMSkgOiBbLi4ubWF0Y2hlc107XG4gIHJldHVybiBlbGlnaWJsZU1hdGNoZXMucmV2ZXJzZSgpLmZpbmQoKG0pID0+IG0ucm91dGUuaGFzRXJyb3JCb3VuZGFyeSA9PT0gdHJ1ZSkgfHwgbWF0Y2hlc1swXTtcbn1cbmZ1bmN0aW9uIGdldFNob3J0Q2lyY3VpdE1hdGNoZXMocm91dGVzKSB7XG4gIGxldCByb3V0ZSA9IHJvdXRlcy5sZW5ndGggPT09IDEgPyByb3V0ZXNbMF0gOiByb3V0ZXMuZmluZCgocikgPT4gci5pbmRleCB8fCAhci5wYXRoIHx8IHIucGF0aCA9PT0gXCIvXCIpIHx8IHtcbiAgICBpZDogYF9fc2hpbS1lcnJvci1yb3V0ZV9fYFxuICB9O1xuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgcGF0aG5hbWU6IFwiXCIsXG4gICAgICAgIHBhdGhuYW1lQmFzZTogXCJcIixcbiAgICAgICAgcm91dGVcbiAgICAgIH1cbiAgICBdLFxuICAgIHJvdXRlXG4gIH07XG59XG5mdW5jdGlvbiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKHN0YXR1cywge1xuICBwYXRobmFtZSxcbiAgcm91dGVJZCxcbiAgbWV0aG9kLFxuICB0eXBlLFxuICBtZXNzYWdlXG59ID0ge30pIHtcbiAgbGV0IHN0YXR1c1RleHQgPSBcIlVua25vd24gU2VydmVyIEVycm9yXCI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gQHJlbWl4LXJ1bi9yb3V0ZXIgZXJyb3JcIjtcbiAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiQmFkIFJlcXVlc3RcIjtcbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBZb3UgbWFkZSBhICR7bWV0aG9kfSByZXF1ZXN0IHRvIFwiJHtwYXRobmFtZX1cIiBidXQgZGlkIG5vdCBwcm92aWRlIGEgXFxgbG9hZGVyXFxgIGZvciByb3V0ZSBcIiR7cm91dGVJZH1cIiwgc28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5gO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJpbnZhbGlkLWJvZHlcIikge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJVbmFibGUgdG8gZW5jb2RlIHN1Ym1pc3Npb24gYm9keVwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xuICAgIHN0YXR1c1RleHQgPSBcIkZvcmJpZGRlblwiO1xuICAgIGVycm9yTWVzc2FnZSA9IGBSb3V0ZSBcIiR7cm91dGVJZH1cIiBkb2VzIG5vdCBtYXRjaCBVUkwgXCIke3BhdGhuYW1lfVwiYDtcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwNCkge1xuICAgIHN0YXR1c1RleHQgPSBcIk5vdCBGb3VuZFwiO1xuICAgIGVycm9yTWVzc2FnZSA9IGBObyByb3V0ZSBtYXRjaGVzIFVSTCBcIiR7cGF0aG5hbWV9XCJgO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA1KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCI7XG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBgWW91IG1hZGUgYSAke21ldGhvZC50b1VwcGVyQ2FzZSgpfSByZXF1ZXN0IHRvIFwiJHtwYXRobmFtZX1cIiBidXQgZGlkIG5vdCBwcm92aWRlIGFuIFxcYGFjdGlvblxcYCBmb3Igcm91dGUgXCIke3JvdXRlSWR9XCIsIHNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuYDtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gYEludmFsaWQgcmVxdWVzdCBtZXRob2QgXCIke21ldGhvZC50b1VwcGVyQ2FzZSgpfVwiYDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlSW1wbChcbiAgICBzdGF0dXMgfHwgNTAwLFxuICAgIHN0YXR1c1RleHQsXG4gICAgbmV3IEVycm9yKGVycm9yTWVzc2FnZSksXG4gICAgdHJ1ZVxuICApO1xufVxuZnVuY3Rpb24gZmluZFJlZGlyZWN0KHJlc3VsdHMpIHtcbiAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhyZXN1bHRzKTtcbiAgZm9yIChsZXQgaSA9IGVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgW2tleSwgcmVzdWx0XSA9IGVudHJpZXNbaV07XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHsga2V5LCByZXN1bHQgfTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhcnNlZFBhdGggPSB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChwYXRoKSA6IHBhdGg7XG4gIHJldHVybiBjcmVhdGVQYXRoKHsgLi4ucGFyc2VkUGF0aCwgaGFzaDogXCJcIiB9KTtcbn1cbmZ1bmN0aW9uIGlzSGFzaENoYW5nZU9ubHkoYSwgYikge1xuICBpZiAoYS5wYXRobmFtZSAhPT0gYi5wYXRobmFtZSB8fCBhLnNlYXJjaCAhPT0gYi5zZWFyY2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGEuaGFzaCA9PT0gXCJcIikge1xuICAgIHJldHVybiBiLmhhc2ggIT09IFwiXCI7XG4gIH0gZWxzZSBpZiAoYS5oYXNoID09PSBiLmhhc2gpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChiLmhhc2ggIT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBkYXRhV2l0aFJlc3BvbnNlSW5pdFRvUmVzcG9uc2UoZGF0YTIpIHtcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oZGF0YTIuZGF0YSwgZGF0YTIuaW5pdCA/PyB2b2lkIDApO1xufVxuZnVuY3Rpb24gZGF0YVdpdGhSZXNwb25zZUluaXRUb0Vycm9yUmVzcG9uc2UoZGF0YTIpIHtcbiAgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlSW1wbChcbiAgICBkYXRhMi5pbml0Py5zdGF0dXMgPz8gNTAwLFxuICAgIGRhdGEyLmluaXQ/LnN0YXR1c1RleHQgPz8gXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgICBkYXRhMi5kYXRhXG4gICk7XG59XG5mdW5jdGlvbiBpc0RhdGFTdHJhdGVneVJlc3VsdHMocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5lbnRyaWVzKHJlc3VsdCkuZXZlcnkoXG4gICAgKFtrZXksIHZhbHVlXSkgPT4gdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBpc0RhdGFTdHJhdGVneVJlc3VsdCh2YWx1ZSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGlzRGF0YVN0cmF0ZWd5UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gXCJvYmplY3RcIiAmJiBcInR5cGVcIiBpbiByZXN1bHQgJiYgXCJyZXN1bHRcIiBpbiByZXN1bHQgJiYgKHJlc3VsdC50eXBlID09PSBcImRhdGFcIiAvKiBkYXRhICovIHx8IHJlc3VsdC50eXBlID09PSBcImVycm9yXCIgLyogZXJyb3IgKi8pO1xufVxuZnVuY3Rpb24gaXNSZWRpcmVjdERhdGFTdHJhdGVneVJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIGlzUmVzcG9uc2UocmVzdWx0LnJlc3VsdCkgJiYgcmVkaXJlY3RTdGF0dXNDb2Rlcy5oYXMocmVzdWx0LnJlc3VsdC5zdGF0dXMpO1xufVxuZnVuY3Rpb24gaXNFcnJvclJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBcImVycm9yXCIgLyogZXJyb3IgKi87XG59XG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQudHlwZSkgPT09IFwicmVkaXJlY3RcIiAvKiByZWRpcmVjdCAqLztcbn1cbmZ1bmN0aW9uIGlzRGF0YVdpdGhSZXNwb25zZUluaXQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPSBudWxsICYmIFwidHlwZVwiIGluIHZhbHVlICYmIFwiZGF0YVwiIGluIHZhbHVlICYmIFwiaW5pdFwiIGluIHZhbHVlICYmIHZhbHVlLnR5cGUgPT09IFwiRGF0YVdpdGhSZXNwb25zZUluaXRcIjtcbn1cbmZ1bmN0aW9uIGlzUmVzcG9uc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnN0YXR1cyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzVGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUuaGVhZGVycyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuYm9keSAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzUmVkaXJlY3RTdGF0dXNDb2RlKHN0YXR1c0NvZGUpIHtcbiAgcmV0dXJuIHJlZGlyZWN0U3RhdHVzQ29kZXMuaGFzKHN0YXR1c0NvZGUpO1xufVxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3BvbnNlKHJlc3VsdCkge1xuICByZXR1cm4gaXNSZXNwb25zZShyZXN1bHQpICYmIGlzUmVkaXJlY3RTdGF0dXNDb2RlKHJlc3VsdC5zdGF0dXMpICYmIHJlc3VsdC5oZWFkZXJzLmhhcyhcIkxvY2F0aW9uXCIpO1xufVxuZnVuY3Rpb24gaXNWYWxpZE1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkUmVxdWVzdE1ldGhvZHMuaGFzKG1ldGhvZC50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTXV0YXRpb25NZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZE11dGF0aW9uTWV0aG9kcy5oYXMobWV0aG9kLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCkge1xuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLmdldEFsbChcImluZGV4XCIpLnNvbWUoKHYpID0+IHYgPT09IFwiXCIpO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pIHtcbiAgbGV0IHNlYXJjaCA9IHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbikuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoO1xuICBpZiAobWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmluZGV4ICYmIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2ggfHwgXCJcIikpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGxldCBwYXRoTWF0Y2hlcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpO1xuICByZXR1cm4gcGF0aE1hdGNoZXNbcGF0aE1hdGNoZXMubGVuZ3RoIC0gMV07XG59XG5mdW5jdGlvbiBnZXRTdWJtaXNzaW9uRnJvbU5hdmlnYXRpb24obmF2aWdhdGlvbikge1xuICBsZXQgeyBmb3JtTWV0aG9kLCBmb3JtQWN0aW9uLCBmb3JtRW5jVHlwZSwgdGV4dCwgZm9ybURhdGEsIGpzb24gfSA9IG5hdmlnYXRpb247XG4gIGlmICghZm9ybU1ldGhvZCB8fCAhZm9ybUFjdGlvbiB8fCAhZm9ybUVuY1R5cGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGE6IHZvaWQgMCxcbiAgICAgIGpzb246IHZvaWQgMCxcbiAgICAgIHRleHRcbiAgICB9O1xuICB9IGVsc2UgaWYgKGZvcm1EYXRhICE9IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAganNvbjogdm9pZCAwLFxuICAgICAgdGV4dDogdm9pZCAwXG4gICAgfTtcbiAgfSBlbHNlIGlmIChqc29uICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhOiB2b2lkIDAsXG4gICAgICBqc29uLFxuICAgICAgdGV4dDogdm9pZCAwXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TG9hZGluZ05hdmlnYXRpb24obG9jYXRpb24sIHN1Ym1pc3Npb24pIHtcbiAgaWYgKHN1Ym1pc3Npb24pIHtcbiAgICBsZXQgbmF2aWdhdGlvbiA9IHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbi5mb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGU6IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YTogc3VibWlzc2lvbi5mb3JtRGF0YSxcbiAgICAgIGpzb246IHN1Ym1pc3Npb24uanNvbixcbiAgICAgIHRleHQ6IHN1Ym1pc3Npb24udGV4dFxuICAgIH07XG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH0gZWxzZSB7XG4gICAgbGV0IG5hdmlnYXRpb24gPSB7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGZvcm1NZXRob2Q6IHZvaWQgMCxcbiAgICAgIGZvcm1BY3Rpb246IHZvaWQgMCxcbiAgICAgIGZvcm1FbmNUeXBlOiB2b2lkIDAsXG4gICAgICBmb3JtRGF0YTogdm9pZCAwLFxuICAgICAganNvbjogdm9pZCAwLFxuICAgICAgdGV4dDogdm9pZCAwXG4gICAgfTtcbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0U3VibWl0dGluZ05hdmlnYXRpb24obG9jYXRpb24sIHN1Ym1pc3Npb24pIHtcbiAgbGV0IG5hdmlnYXRpb24gPSB7XG4gICAgc3RhdGU6IFwic3VibWl0dGluZ1wiLFxuICAgIGxvY2F0aW9uLFxuICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24sXG4gICAgZm9ybUVuY1R5cGU6IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUsXG4gICAgZm9ybURhdGE6IHN1Ym1pc3Npb24uZm9ybURhdGEsXG4gICAganNvbjogc3VibWlzc2lvbi5qc29uLFxuICAgIHRleHQ6IHN1Ym1pc3Npb24udGV4dFxuICB9O1xuICByZXR1cm4gbmF2aWdhdGlvbjtcbn1cbmZ1bmN0aW9uIGdldExvYWRpbmdGZXRjaGVyKHN1Ym1pc3Npb24sIGRhdGEyKSB7XG4gIGlmIChzdWJtaXNzaW9uKSB7XG4gICAgbGV0IGZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbi5mb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uLmZvcm1EYXRhLFxuICAgICAganNvbjogc3VibWlzc2lvbi5qc29uLFxuICAgICAgdGV4dDogc3VibWlzc2lvbi50ZXh0LFxuICAgICAgZGF0YTogZGF0YTJcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaGVyO1xuICB9IGVsc2Uge1xuICAgIGxldCBmZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZm9ybU1ldGhvZDogdm9pZCAwLFxuICAgICAgZm9ybUFjdGlvbjogdm9pZCAwLFxuICAgICAgZm9ybUVuY1R5cGU6IHZvaWQgMCxcbiAgICAgIGZvcm1EYXRhOiB2b2lkIDAsXG4gICAgICBqc29uOiB2b2lkIDAsXG4gICAgICB0ZXh0OiB2b2lkIDAsXG4gICAgICBkYXRhOiBkYXRhMlxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN1Ym1pdHRpbmdGZXRjaGVyKHN1Ym1pc3Npb24sIGV4aXN0aW5nRmV0Y2hlcikge1xuICBsZXQgZmV0Y2hlciA9IHtcbiAgICBzdGF0ZTogXCJzdWJtaXR0aW5nXCIsXG4gICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgIGZvcm1BY3Rpb246IHN1Ym1pc3Npb24uZm9ybUFjdGlvbixcbiAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbi5mb3JtRW5jVHlwZSxcbiAgICBmb3JtRGF0YTogc3VibWlzc2lvbi5mb3JtRGF0YSxcbiAgICBqc29uOiBzdWJtaXNzaW9uLmpzb24sXG4gICAgdGV4dDogc3VibWlzc2lvbi50ZXh0LFxuICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciA/IGV4aXN0aW5nRmV0Y2hlci5kYXRhIDogdm9pZCAwXG4gIH07XG4gIHJldHVybiBmZXRjaGVyO1xufVxuZnVuY3Rpb24gZ2V0RG9uZUZldGNoZXIoZGF0YTIpIHtcbiAgbGV0IGZldGNoZXIgPSB7XG4gICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgIGZvcm1NZXRob2Q6IHZvaWQgMCxcbiAgICBmb3JtQWN0aW9uOiB2b2lkIDAsXG4gICAgZm9ybUVuY1R5cGU6IHZvaWQgMCxcbiAgICBmb3JtRGF0YTogdm9pZCAwLFxuICAgIGpzb246IHZvaWQgMCxcbiAgICB0ZXh0OiB2b2lkIDAsXG4gICAgZGF0YTogZGF0YTJcbiAgfTtcbiAgcmV0dXJuIGZldGNoZXI7XG59XG5mdW5jdGlvbiByZXN0b3JlQXBwbGllZFRyYW5zaXRpb25zKF93aW5kb3csIHRyYW5zaXRpb25zKSB7XG4gIHRyeSB7XG4gICAgbGV0IHNlc3Npb25Qb3NpdGlvbnMgPSBfd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXG4gICAgICBUUkFOU0lUSU9OU19TVE9SQUdFX0tFWVxuICAgICk7XG4gICAgaWYgKHNlc3Npb25Qb3NpdGlvbnMpIHtcbiAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShzZXNzaW9uUG9zaXRpb25zKTtcbiAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhqc29uIHx8IHt9KSkge1xuICAgICAgICBpZiAodiAmJiBBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbnMuc2V0KGssIG5ldyBTZXQodiB8fCBbXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cbmZ1bmN0aW9uIHBlcnNpc3RBcHBsaWVkVHJhbnNpdGlvbnMoX3dpbmRvdywgdHJhbnNpdGlvbnMpIHtcbiAgaWYgKHRyYW5zaXRpb25zLnNpemUgPiAwKSB7XG4gICAgbGV0IGpzb24gPSB7fTtcbiAgICBmb3IgKGxldCBbaywgdl0gb2YgdHJhbnNpdGlvbnMpIHtcbiAgICAgIGpzb25ba10gPSBbLi4udl07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBfd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFRSQU5TSVRJT05TX1NUT1JBR0VfS0VZLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShqc29uKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGBGYWlsZWQgdG8gc2F2ZSBhcHBsaWVkIHZpZXcgdHJhbnNpdGlvbnMgaW4gc2Vzc2lvblN0b3JhZ2UgKCR7ZXJyb3J9KS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRGVmZXJyZWQoKSB7XG4gIGxldCByZXNvbHZlO1xuICBsZXQgcmVqZWN0O1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHJlc29sdmUgPSBhc3luYyAodmFsKSA9PiB7XG4gICAgICByZXModmFsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfTtcbiAgICByZWplY3QgPSBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgIHJlaihlcnJvcik7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb21pc2UsXG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmVzb2x2ZSxcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZWplY3RcbiAgfTtcbn1cblxuLy8gbGliL2NvbnRleHQudHNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIERhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbkRhdGFSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhUm91dGVyXCI7XG52YXIgRGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5EYXRhUm91dGVyU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhUm91dGVyU3RhdGVcIjtcbnZhciBSU0NSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChmYWxzZSk7XG5mdW5jdGlvbiB1c2VJc1JTQ1JvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJTQ1JvdXRlckNvbnRleHQpO1xufVxudmFyIFZpZXdUcmFuc2l0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBpc1RyYW5zaXRpb25pbmc6IGZhbHNlXG59KTtcblZpZXdUcmFuc2l0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiVmlld1RyYW5zaXRpb25cIjtcbnZhciBGZXRjaGVyc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpXG4pO1xuRmV0Y2hlcnNDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJGZXRjaGVyc1wiO1xudmFyIEF3YWl0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5Bd2FpdENvbnRleHQuZGlzcGxheU5hbWUgPSBcIkF3YWl0XCI7XG52YXIgQXdhaXRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCBwcm9wcyk7XG52YXIgTmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICBudWxsXG4pO1xuTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbnZhciBMb2NhdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICBudWxsXG4pO1xuTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xudmFyIFJvdXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvdXRsZXQ6IG51bGwsXG4gIG1hdGNoZXM6IFtdLFxuICBpc0RhdGFSb3V0ZTogZmFsc2Vcbn0pO1xuUm91dGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZVwiO1xudmFyIFJvdXRlRXJyb3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblJvdXRlRXJyb3JDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZUVycm9yXCI7XG52YXIgRU5BQkxFX0RFVl9XQVJOSU5HUyA9IHRydWU7XG5cbi8vIGxpYi9ob29rcy50c3hcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUhyZWYodG8sIHsgcmVsYXRpdmUgfSA9IHt9KSB7XG4gIGludmFyaWFudChcbiAgICB1c2VJblJvdXRlckNvbnRleHQoKSxcbiAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gICAgYHVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LmBcbiAgKTtcbiAgbGV0IHsgYmFzZW5hbWUsIG5hdmlnYXRvciB9ID0gUmVhY3QyLnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgeyBoYXNoLCBwYXRobmFtZSwgc2VhcmNoIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8sIHsgcmVsYXRpdmUgfSk7XG4gIGxldCBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lO1xuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cbiAgcmV0dXJuIG5hdmlnYXRvci5jcmVhdGVIcmVmKHsgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLCBzZWFyY2gsIGhhc2ggfSk7XG59XG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdDIudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgaW52YXJpYW50KFxuICAgIHVzZUluUm91dGVyQ29udGV4dCgpLFxuICAgIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAgIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgICBgdXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LmBcbiAgKTtcbiAgcmV0dXJuIFJlYWN0Mi51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uVHlwZSgpIHtcbiAgcmV0dXJuIFJlYWN0Mi51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubmF2aWdhdGlvblR5cGU7XG59XG5mdW5jdGlvbiB1c2VNYXRjaChwYXR0ZXJuKSB7XG4gIGludmFyaWFudChcbiAgICB1c2VJblJvdXRlckNvbnRleHQoKSxcbiAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gICAgYHVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5gXG4gICk7XG4gIGxldCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICByZXR1cm4gUmVhY3QyLnVzZU1lbW8oXG4gICAgKCkgPT4gbWF0Y2hQYXRoKHBhdHRlcm4sIGRlY29kZVBhdGgocGF0aG5hbWUpKSxcbiAgICBbcGF0aG5hbWUsIHBhdHRlcm5dXG4gICk7XG59XG52YXIgbmF2aWdhdGVFZmZlY3RXYXJuaW5nID0gYFlvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIHlvdXIgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkLmA7XG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGNiKSB7XG4gIGxldCBpc1N0YXRpYyA9IFJlYWN0Mi51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWM7XG4gIGlmICghaXNTdGF0aWMpIHtcbiAgICBSZWFjdDIudXNlTGF5b3V0RWZmZWN0KGNiKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gIGxldCB7IGlzRGF0YVJvdXRlIH0gPSBSZWFjdDIudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICByZXR1cm4gaXNEYXRhUm91dGUgPyB1c2VOYXZpZ2F0ZVN0YWJsZSgpIDogdXNlTmF2aWdhdGVVbnN0YWJsZSgpO1xufVxuZnVuY3Rpb24gdXNlTmF2aWdhdGVVbnN0YWJsZSgpIHtcbiAgaW52YXJpYW50KFxuICAgIHVzZUluUm91dGVyQ29udGV4dCgpLFxuICAgIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAgIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgICBgdXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LmBcbiAgKTtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QyLnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICBsZXQgeyBiYXNlbmFtZSwgbmF2aWdhdG9yIH0gPSBSZWFjdDIudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7IG1hdGNoZXMgfSA9IFJlYWN0Mi51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7IHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoZ2V0UmVzb2x2ZVRvTWF0Y2hlcyhtYXRjaGVzKSk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdDIudXNlUmVmKGZhbHNlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QyLnVzZUNhbGxiYWNrKFxuICAgICh0bywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICB3YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcpO1xuICAgICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBuYXZpZ2F0b3IuZ28odG8pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyhcbiAgICAgICAgdG8sXG4gICAgICAgIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSxcbiAgICAgICAgbG9jYXRpb25QYXRobmFtZSxcbiAgICAgICAgb3B0aW9ucy5yZWxhdGl2ZSA9PT0gXCJwYXRoXCJcbiAgICAgICk7XG4gICAgICBpZiAoZGF0YVJvdXRlckNvbnRleHQgPT0gbnVsbCAmJiBiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICAgICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgICB9XG4gICAgICAoISFvcHRpb25zLnJlcGxhY2UgPyBuYXZpZ2F0b3IucmVwbGFjZSA6IG5hdmlnYXRvci5wdXNoKShcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9LFxuICAgIFtcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgbmF2aWdhdG9yLFxuICAgICAgcm91dGVQYXRobmFtZXNKc29uLFxuICAgICAgbG9jYXRpb25QYXRobmFtZSxcbiAgICAgIGRhdGFSb3V0ZXJDb250ZXh0XG4gICAgXVxuICApO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG52YXIgT3V0bGV0Q29udGV4dCA9IFJlYWN0Mi5jcmVhdGVDb250ZXh0KG51bGwpO1xuZnVuY3Rpb24gdXNlT3V0bGV0Q29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0Mi51c2VDb250ZXh0KE91dGxldENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlT3V0bGV0KGNvbnRleHQpIHtcbiAgbGV0IG91dGxldCA9IFJlYWN0Mi51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuICByZXR1cm4gUmVhY3QyLnVzZU1lbW8oXG4gICAgKCkgPT4gb3V0bGV0ICYmIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChPdXRsZXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIG91dGxldCksXG4gICAgW291dGxldCwgY29udGV4dF1cbiAgKTtcbn1cbmZ1bmN0aW9uIHVzZVBhcmFtcygpIHtcbiAgbGV0IHsgbWF0Y2hlcyB9ID0gUmVhY3QyLnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bywgeyByZWxhdGl2ZSB9ID0ge30pIHtcbiAgbGV0IHsgbWF0Y2hlcyB9ID0gUmVhY3QyLnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHsgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShnZXRSZXNvbHZlVG9NYXRjaGVzKG1hdGNoZXMpKTtcbiAgcmV0dXJuIFJlYWN0Mi51c2VNZW1vKFxuICAgICgpID0+IHJlc29sdmVUbyhcbiAgICAgIHRvLFxuICAgICAgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLFxuICAgICAgbG9jYXRpb25QYXRobmFtZSxcbiAgICAgIHJlbGF0aXZlID09PSBcInBhdGhcIlxuICAgICksXG4gICAgW3RvLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlXVxuICApO1xufVxuZnVuY3Rpb24gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcpIHtcbiAgcmV0dXJuIHVzZVJvdXRlc0ltcGwocm91dGVzLCBsb2NhdGlvbkFyZyk7XG59XG5mdW5jdGlvbiB1c2VSb3V0ZXNJbXBsKHJvdXRlcywgbG9jYXRpb25BcmcsIGRhdGFSb3V0ZXJTdGF0ZSwgdW5zdGFibGVfb25FcnJvciwgZnV0dXJlKSB7XG4gIGludmFyaWFudChcbiAgICB1c2VJblJvdXRlckNvbnRleHQoKSxcbiAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gICAgYHVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuYFxuICApO1xuICBsZXQgeyBuYXZpZ2F0b3IgfSA9IFJlYWN0Mi51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHsgbWF0Y2hlczogcGFyZW50TWF0Y2hlcyB9ID0gUmVhY3QyLnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG4gIGlmIChFTkFCTEVfREVWX1dBUk5JTkdTKSB7XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UoXG4gICAgICBwYXJlbnRQYXRobmFtZSxcbiAgICAgICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKj9cIiksXG4gICAgICBgWW91IHJlbmRlcmVkIGRlc2NlbmRhbnQgPFJvdXRlcz4gKG9yIGNhbGxlZCBcXGB1c2VSb3V0ZXMoKVxcYCkgYXQgXCIke3BhcmVudFBhdGhuYW1lfVwiICh1bmRlciA8Um91dGUgcGF0aD1cIiR7cGFyZW50UGF0aH1cIj4pIGJ1dCB0aGUgcGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFwiKlwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBkZWVwZXIsIHRoZSBwYXJlbnQgd29uJ3QgbWF0Y2ggYW55bW9yZSBhbmQgdGhlcmVmb3JlIHRoZSBjaGlsZCByb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXG5cblBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cIiR7cGFyZW50UGF0aH1cIj4gdG8gPFJvdXRlIHBhdGg9XCIke3BhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBgJHtwYXJlbnRQYXRofS8qYH1cIj4uYFxuICAgICk7XG4gIH1cbiAgbGV0IGxvY2F0aW9uRnJvbUNvbnRleHQgPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbG9jYXRpb247XG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICBpbnZhcmlhbnQoXG4gICAgICBwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8IHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lPy5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSksXG4gICAgICBgV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBcXGA8Um91dGVzIGxvY2F0aW9uPlxcYCBvciBcXGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilcXGAsIHRoZSBsb2NhdGlvbiBwYXRobmFtZSBtdXN0IGJlZ2luIHdpdGggdGhlIHBvcnRpb24gb2YgdGhlIFVSTCBwYXRobmFtZSB0aGF0IHdhcyBtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFwiJHtwYXJlbnRQYXRobmFtZUJhc2V9XCIgYnV0IHBhdGhuYW1lIFwiJHtwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZX1cIiB3YXMgZ2l2ZW4gaW4gdGhlIFxcYGxvY2F0aW9uXFxgIHByb3AuYFxuICAgICk7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhdGhuYW1lO1xuICBpZiAocGFyZW50UGF0aG5hbWVCYXNlICE9PSBcIi9cIikge1xuICAgIGxldCBwYXJlbnRTZWdtZW50cyA9IHBhcmVudFBhdGhuYW1lQmFzZS5yZXBsYWNlKC9eXFwvLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBzZWdtZW50cyA9IHBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gICAgcmVtYWluaW5nUGF0aG5hbWUgPSBcIi9cIiArIHNlZ21lbnRzLnNsaWNlKHBhcmVudFNlZ21lbnRzLmxlbmd0aCkuam9pbihcIi9cIik7XG4gIH1cbiAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXMsIHsgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lIH0pO1xuICBpZiAoRU5BQkxFX0RFVl9XQVJOSU5HUykge1xuICAgIHdhcm5pbmcoXG4gICAgICBwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsXG4gICAgICBgTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXCIke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uc2VhcmNofSR7bG9jYXRpb24uaGFzaH1cIiBgXG4gICAgKTtcbiAgICB3YXJuaW5nKFxuICAgICAgbWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB2b2lkIDAgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLkNvbXBvbmVudCAhPT0gdm9pZCAwIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5sYXp5ICE9PSB2b2lkIDAsXG4gICAgICBgTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFwiJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9XCIgZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50IG9yIENvbXBvbmVudC4gVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBudWxsIHZhbHVlIGJ5IGRlZmF1bHQgcmVzdWx0aW5nIGluIGFuIFwiZW1wdHlcIiBwYWdlLmBcbiAgICApO1xuICB9XG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBfcmVuZGVyTWF0Y2hlcyhcbiAgICBtYXRjaGVzICYmIG1hdGNoZXMubWFwKFxuICAgICAgKG1hdGNoKSA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgICAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudFBhcmFtcywgbWF0Y2gucGFyYW1zKSxcbiAgICAgICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbXG4gICAgICAgICAgcGFyZW50UGF0aG5hbWVCYXNlLFxuICAgICAgICAgIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzLlxuICAgICAgICAgIC8vIFByZS1lbmNvZGUgYD9gIGFuZCBgI2AgYWhlYWQgb2YgYGVuY29kZUxvY2F0aW9uYCBiZWNhdXNlIGl0IHVzZXNcbiAgICAgICAgICAvLyBgbmV3IFVSTCgpYCBpbnRlcm5hbGx5IGFuZCB3ZSBuZWVkIHRvIHByZXZlbnQgaXQgZnJvbSB0cmVhdGluZ1xuICAgICAgICAgIC8vIHRoZW0gYXMgc2VwYXJhdG9yc1xuICAgICAgICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihcbiAgICAgICAgICAgIG1hdGNoLnBhdGhuYW1lLnJlcGxhY2UoL1xcPy9nLCBcIiUzRlwiKS5yZXBsYWNlKC8jL2csIFwiJTIzXCIpXG4gICAgICAgICAgKS5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lXG4gICAgICAgIF0pLFxuICAgICAgICBwYXRobmFtZUJhc2U6IG1hdGNoLnBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXJlbnRQYXRobmFtZUJhc2UgOiBqb2luUGF0aHMoW1xuICAgICAgICAgIHBhcmVudFBhdGhuYW1lQmFzZSxcbiAgICAgICAgICAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgICAgICAgIC8vIFByZS1lbmNvZGUgYD9gIGFuZCBgI2AgYWhlYWQgb2YgYGVuY29kZUxvY2F0aW9uYCBiZWNhdXNlIGl0IHVzZXNcbiAgICAgICAgICAvLyBgbmV3IFVSTCgpYCBpbnRlcm5hbGx5IGFuZCB3ZSBuZWVkIHRvIHByZXZlbnQgaXQgZnJvbSB0cmVhdGluZ1xuICAgICAgICAgIC8vIHRoZW0gYXMgc2VwYXJhdG9yc1xuICAgICAgICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihcbiAgICAgICAgICAgIG1hdGNoLnBhdGhuYW1lQmFzZS5yZXBsYWNlKC9cXD8vZywgXCIlM0ZcIikucmVwbGFjZSgvIy9nLCBcIiUyM1wiKVxuICAgICAgICAgICkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZUJhc2VcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgKSxcbiAgICBwYXJlbnRNYXRjaGVzLFxuICAgIGRhdGFSb3V0ZXJTdGF0ZSxcbiAgICB1bnN0YWJsZV9vbkVycm9yLFxuICAgIGZ1dHVyZVxuICApO1xuICBpZiAobG9jYXRpb25BcmcgJiYgcmVuZGVyZWRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcbiAgICAgIExvY2F0aW9uQ29udGV4dC5Qcm92aWRlcixcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgICAgICAgaGFzaDogXCJcIixcbiAgICAgICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIC4uLmxvY2F0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogXCJQT1BcIiAvKiBQb3AgKi9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbmRlcmVkTWF0Y2hlc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlcmVkTWF0Y2hlcztcbn1cbmZ1bmN0aW9uIERlZmF1bHRFcnJvckNvbXBvbmVudCgpIHtcbiAgbGV0IGVycm9yID0gdXNlUm91dGVFcnJvcigpO1xuICBsZXQgbWVzc2FnZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGAke2Vycm9yLnN0YXR1c30gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgbGV0IHN0YWNrID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogbnVsbDtcbiAgbGV0IGxpZ2h0Z3JleSA9IFwicmdiYSgyMDAsMjAwLDIwMCwgMC41KVwiO1xuICBsZXQgcHJlU3R5bGVzID0geyBwYWRkaW5nOiBcIjAuNXJlbVwiLCBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleSB9O1xuICBsZXQgY29kZVN0eWxlcyA9IHsgcGFkZGluZzogXCIycHggNHB4XCIsIGJhY2tncm91bmRDb2xvcjogbGlnaHRncmV5IH07XG4gIGxldCBkZXZJbmZvID0gbnVsbDtcbiAgaWYgKEVOQUJMRV9ERVZfV0FSTklOR1MpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJFcnJvciBoYW5kbGVkIGJ5IFJlYWN0IFJvdXRlciBkZWZhdWx0IEVycm9yQm91bmRhcnk6XCIsXG4gICAgICBlcnJvclxuICAgICk7XG4gICAgZGV2SW5mbyA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChSZWFjdDIuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJcXHV7MUY0QkZ9IEhleSBkZXZlbG9wZXIgXFx1ezFGNDRCfVwiKSwgLyogQF9fUFVSRV9fICovIFJlYWN0Mi5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIllvdSBjYW4gcHJvdmlkZSBhIHdheSBiZXR0ZXIgVVggdGhhbiB0aGlzIHdoZW4geW91ciBhcHAgdGhyb3dzIGVycm9ycyBieSBwcm92aWRpbmcgeW91ciBvd24gXCIsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgeyBzdHlsZTogY29kZVN0eWxlcyB9LCBcIkVycm9yQm91bmRhcnlcIiksIFwiIG9yXCIsIFwiIFwiLCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHsgc3R5bGU6IGNvZGVTdHlsZXMgfSwgXCJlcnJvckVsZW1lbnRcIiksIFwiIHByb3Agb24geW91ciByb3V0ZS5cIikpO1xuICB9XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoUmVhY3QyLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlVuZXhwZWN0ZWQgQXBwbGljYXRpb24gRXJyb3IhXCIpLCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IHN0eWxlOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9IH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcInByZVwiLCB7IHN0eWxlOiBwcmVTdHlsZXMgfSwgc3RhY2spIDogbnVsbCwgZGV2SW5mbyk7XG59XG52YXIgZGVmYXVsdEVycm9yRWxlbWVudCA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChEZWZhdWx0RXJyb3JDb21wb25lbnQsIG51bGwpO1xudmFyIFJlbmRlckVycm9yQm91bmRhcnkgPSBjbGFzcyBleHRlbmRzIFJlYWN0Mi5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0aW9uOiBwcm9wcy5yZXZhbGlkYXRpb24sXG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3JcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmxvY2F0aW9uICE9PSBwcm9wcy5sb2NhdGlvbiB8fCBzdGF0ZS5yZXZhbGlkYXRpb24gIT09IFwiaWRsZVwiICYmIHByb3BzLnJldmFsaWRhdGlvbiA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBwcm9wcy5lcnJvcixcbiAgICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uLFxuICAgICAgICByZXZhbGlkYXRpb246IHByb3BzLnJldmFsaWRhdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvciAhPT0gdm9pZCAwID8gcHJvcHMuZXJyb3IgOiBzdGF0ZS5lcnJvcixcbiAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgIHJldmFsaWRhdGlvbjogcHJvcHMucmV2YWxpZGF0aW9uIHx8IHN0YXRlLnJldmFsaWRhdGlvblxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGlmICh0aGlzLnByb3BzLnVuc3RhYmxlX29uRXJyb3IpIHtcbiAgICAgIHRoaXMucHJvcHMudW5zdGFibGVfb25FcnJvcihlcnJvciwgZXJyb3JJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJSZWFjdCBSb3V0ZXIgY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLFxuICAgICAgICBlcnJvclxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yICE9PSB2b2lkIDAgPyAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0aGlzLnByb3BzLnJvdXRlQ29udGV4dCB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBSb3V0ZUVycm9yQ29udGV4dC5Qcm92aWRlcixcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuZXJyb3IsXG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNvbXBvbmVudFxuICAgICAgfVxuICAgICkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufTtcbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoeyByb3V0ZUNvbnRleHQsIG1hdGNoLCBjaGlsZHJlbiB9KSB7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0Mi51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgbWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkpIHtcbiAgICBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkID0gbWF0Y2gucm91dGUuaWQ7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHJvdXRlQ29udGV4dCB9LCBjaGlsZHJlbik7XG59XG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzID0gW10sIGRhdGFSb3V0ZXJTdGF0ZSA9IG51bGwsIHVuc3RhYmxlX29uRXJyb3IgPSBudWxsLCBmdXR1cmUgPSBudWxsKSB7XG4gIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICBpZiAoIWRhdGFSb3V0ZXJTdGF0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUuZXJyb3JzKSB7XG4gICAgICBtYXRjaGVzID0gZGF0YVJvdXRlclN0YXRlLm1hdGNoZXM7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRNYXRjaGVzLmxlbmd0aCA9PT0gMCAmJiAhZGF0YVJvdXRlclN0YXRlLmluaXRpYWxpemVkICYmIGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1hdGNoZXMgPSBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBtYXRjaGVzO1xuICBsZXQgZXJyb3JzID0gZGF0YVJvdXRlclN0YXRlPy5lcnJvcnM7XG4gIGlmIChlcnJvcnMgIT0gbnVsbCkge1xuICAgIGxldCBlcnJvckluZGV4ID0gcmVuZGVyZWRNYXRjaGVzLmZpbmRJbmRleChcbiAgICAgIChtKSA9PiBtLnJvdXRlLmlkICYmIGVycm9ycz8uW20ucm91dGUuaWRdICE9PSB2b2lkIDBcbiAgICApO1xuICAgIGludmFyaWFudChcbiAgICAgIGVycm9ySW5kZXggPj0gMCxcbiAgICAgIGBDb3VsZCBub3QgZmluZCBhIG1hdGNoaW5nIHJvdXRlIGZvciBlcnJvcnMgb24gcm91dGUgSURzOiAke09iamVjdC5rZXlzKFxuICAgICAgICBlcnJvcnNcbiAgICAgICkuam9pbihcIixcIil9YFxuICAgICk7XG4gICAgcmVuZGVyZWRNYXRjaGVzID0gcmVuZGVyZWRNYXRjaGVzLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIE1hdGgubWluKHJlbmRlcmVkTWF0Y2hlcy5sZW5ndGgsIGVycm9ySW5kZXggKyAxKVxuICAgICk7XG4gIH1cbiAgbGV0IHJlbmRlckZhbGxiYWNrID0gZmFsc2U7XG4gIGxldCBmYWxsYmFja0luZGV4ID0gLTE7XG4gIGlmIChkYXRhUm91dGVyU3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcmVkTWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1hdGNoID0gcmVuZGVyZWRNYXRjaGVzW2ldO1xuICAgICAgaWYgKG1hdGNoLnJvdXRlLkh5ZHJhdGVGYWxsYmFjayB8fCBtYXRjaC5yb3V0ZS5oeWRyYXRlRmFsbGJhY2tFbGVtZW50KSB7XG4gICAgICAgIGZhbGxiYWNrSW5kZXggPSBpO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoLnJvdXRlLmlkKSB7XG4gICAgICAgIGxldCB7IGxvYWRlckRhdGEsIGVycm9yczogZXJyb3JzMiB9ID0gZGF0YVJvdXRlclN0YXRlO1xuICAgICAgICBsZXQgbmVlZHNUb1J1bkxvYWRlciA9IG1hdGNoLnJvdXRlLmxvYWRlciAmJiAhbG9hZGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShtYXRjaC5yb3V0ZS5pZCkgJiYgKCFlcnJvcnMyIHx8IGVycm9yczJbbWF0Y2gucm91dGUuaWRdID09PSB2b2lkIDApO1xuICAgICAgICBpZiAobWF0Y2gucm91dGUubGF6eSB8fCBuZWVkc1RvUnVuTG9hZGVyKSB7XG4gICAgICAgICAgcmVuZGVyRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgIGlmIChmYWxsYmFja0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIHJlbmRlcmVkTWF0Y2hlcyA9IHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBmYWxsYmFja0luZGV4ICsgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlcmVkTWF0Y2hlcyA9IFtyZW5kZXJlZE1hdGNoZXNbMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzLnJlZHVjZVJpZ2h0KFxuICAgIChvdXRsZXQsIG1hdGNoLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgbGV0IHNob3VsZFJlbmRlckh5ZHJhdGVGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgbGV0IGVycm9yRWxlbWVudCA9IG51bGw7XG4gICAgICBsZXQgaHlkcmF0ZUZhbGxiYWNrRWxlbWVudCA9IG51bGw7XG4gICAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICAgIGVycm9yID0gZXJyb3JzICYmIG1hdGNoLnJvdXRlLmlkID8gZXJyb3JzW21hdGNoLnJvdXRlLmlkXSA6IHZvaWQgMDtcbiAgICAgICAgZXJyb3JFbGVtZW50ID0gbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IGRlZmF1bHRFcnJvckVsZW1lbnQ7XG4gICAgICAgIGlmIChyZW5kZXJGYWxsYmFjaykge1xuICAgICAgICAgIGlmIChmYWxsYmFja0luZGV4IDwgMCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgd2FybmluZ09uY2UoXG4gICAgICAgICAgICAgIFwicm91dGUtZmFsbGJhY2tcIixcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIFwiTm8gYEh5ZHJhdGVGYWxsYmFja2AgZWxlbWVudCBwcm92aWRlZCB0byByZW5kZXIgZHVyaW5nIGluaXRpYWwgaHlkcmF0aW9uXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzaG91bGRSZW5kZXJIeWRyYXRlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgaHlkcmF0ZUZhbGxiYWNrRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChmYWxsYmFja0luZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgc2hvdWxkUmVuZGVySHlkcmF0ZUZhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGh5ZHJhdGVGYWxsYmFja0VsZW1lbnQgPSBtYXRjaC5yb3V0ZS5oeWRyYXRlRmFsbGJhY2tFbGVtZW50IHx8IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbWF0Y2hlczIgPSBwYXJlbnRNYXRjaGVzLmNvbmNhdChyZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSk7XG4gICAgICBsZXQgZ2V0Q2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZHJlbjtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBlcnJvckVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkUmVuZGVySHlkcmF0ZUZhbGxiYWNrKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBoeWRyYXRlRmFsbGJhY2tFbGVtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLnJvdXRlLkNvbXBvbmVudCkge1xuICAgICAgICAgIGNoaWxkcmVuID0gLyogQF9fUFVSRV9fICovIFJlYWN0Mi5jcmVhdGVFbGVtZW50KG1hdGNoLnJvdXRlLkNvbXBvbmVudCwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZWxlbWVudCkge1xuICAgICAgICAgIGNoaWxkcmVuID0gbWF0Y2gucm91dGUuZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZHJlbiA9IG91dGxldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0Mi5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFJlbmRlcmVkUm91dGUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICByb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgb3V0bGV0LFxuICAgICAgICAgICAgICBtYXRjaGVzOiBtYXRjaGVzMixcbiAgICAgICAgICAgICAgaXNEYXRhUm91dGU6IGRhdGFSb3V0ZXJTdGF0ZSAhPSBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRhdGFSb3V0ZXJTdGF0ZSAmJiAobWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSB8fCBtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgaW5kZXggPT09IDApID8gLyogQF9fUFVSRV9fICovIFJlYWN0Mi5jcmVhdGVFbGVtZW50KFxuICAgICAgICBSZW5kZXJFcnJvckJvdW5kYXJ5LFxuICAgICAgICB7XG4gICAgICAgICAgbG9jYXRpb246IGRhdGFSb3V0ZXJTdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgICByZXZhbGlkYXRpb246IGRhdGFSb3V0ZXJTdGF0ZS5yZXZhbGlkYXRpb24sXG4gICAgICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkcmVuKCksXG4gICAgICAgICAgcm91dGVDb250ZXh0OiB7IG91dGxldDogbnVsbCwgbWF0Y2hlczogbWF0Y2hlczIsIGlzRGF0YVJvdXRlOiB0cnVlIH0sXG4gICAgICAgICAgdW5zdGFibGVfb25FcnJvclxuICAgICAgICB9XG4gICAgICApIDogZ2V0Q2hpbGRyZW4oKTtcbiAgICB9LFxuICAgIG51bGxcbiAgKTtcbn1cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGAke2hvb2tOYW1lfSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZW4vbWFpbi9yb3V0ZXJzL3BpY2tpbmctYS1yb3V0ZXIuYDtcbn1cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJDb250ZXh0KGhvb2tOYW1lKSB7XG4gIGxldCBjdHggPSBSZWFjdDIudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gIGludmFyaWFudChjdHgsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKTtcbiAgcmV0dXJuIGN0eDtcbn1cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdDIudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgaW52YXJpYW50KHN0YXRlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHVzZVJvdXRlQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSBSZWFjdDIudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBpbnZhcmlhbnQocm91dGUsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKTtcbiAgcmV0dXJuIHJvdXRlO1xufVxuZnVuY3Rpb24gdXNlQ3VycmVudFJvdXRlSWQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gdXNlUm91dGVDb250ZXh0KGhvb2tOYW1lKTtcbiAgbGV0IHRoaXNSb3V0ZSA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgaW52YXJpYW50KFxuICAgIHRoaXNSb3V0ZS5yb3V0ZS5pZCxcbiAgICBgJHtob29rTmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFwiaWRcImBcbiAgKTtcbiAgcmV0dXJuIHRoaXNSb3V0ZS5yb3V0ZS5pZDtcbn1cbmZ1bmN0aW9uIHVzZVJvdXRlSWQoKSB7XG4gIHJldHVybiB1c2VDdXJyZW50Um91dGVJZChcInVzZVJvdXRlSWRcIiAvKiBVc2VSb3V0ZUlkICovKTtcbn1cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShcInVzZU5hdmlnYXRpb25cIiAvKiBVc2VOYXZpZ2F0aW9uICovKTtcbiAgcmV0dXJuIHN0YXRlLm5hdmlnYXRpb247XG59XG5mdW5jdGlvbiB1c2VSZXZhbGlkYXRvcigpIHtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoXCJ1c2VSZXZhbGlkYXRvclwiIC8qIFVzZVJldmFsaWRhdG9yICovKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKFwidXNlUmV2YWxpZGF0b3JcIiAvKiBVc2VSZXZhbGlkYXRvciAqLyk7XG4gIGxldCByZXZhbGlkYXRlID0gUmVhY3QyLnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucmV2YWxpZGF0ZSgpO1xuICB9LCBbZGF0YVJvdXRlckNvbnRleHQucm91dGVyXSk7XG4gIHJldHVybiBSZWFjdDIudXNlTWVtbyhcbiAgICAoKSA9PiAoeyByZXZhbGlkYXRlLCBzdGF0ZTogc3RhdGUucmV2YWxpZGF0aW9uIH0pLFxuICAgIFtyZXZhbGlkYXRlLCBzdGF0ZS5yZXZhbGlkYXRpb25dXG4gICk7XG59XG5mdW5jdGlvbiB1c2VNYXRjaGVzKCkge1xuICBsZXQgeyBtYXRjaGVzLCBsb2FkZXJEYXRhIH0gPSB1c2VEYXRhUm91dGVyU3RhdGUoXG4gICAgXCJ1c2VNYXRjaGVzXCIgLyogVXNlTWF0Y2hlcyAqL1xuICApO1xuICByZXR1cm4gUmVhY3QyLnVzZU1lbW8oXG4gICAgKCkgPT4gbWF0Y2hlcy5tYXAoKG0pID0+IGNvbnZlcnRSb3V0ZU1hdGNoVG9VaU1hdGNoKG0sIGxvYWRlckRhdGEpKSxcbiAgICBbbWF0Y2hlcywgbG9hZGVyRGF0YV1cbiAgKTtcbn1cbmZ1bmN0aW9uIHVzZUxvYWRlckRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShcInVzZUxvYWRlckRhdGFcIiAvKiBVc2VMb2FkZXJEYXRhICovKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChcInVzZUxvYWRlckRhdGFcIiAvKiBVc2VMb2FkZXJEYXRhICovKTtcbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG5mdW5jdGlvbiB1c2VSb3V0ZUxvYWRlckRhdGEocm91dGVJZCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoXCJ1c2VSb3V0ZUxvYWRlckRhdGFcIiAvKiBVc2VSb3V0ZUxvYWRlckRhdGEgKi8pO1xuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbmZ1bmN0aW9uIHVzZUFjdGlvbkRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShcInVzZUFjdGlvbkRhdGFcIiAvKiBVc2VBY3Rpb25EYXRhICovKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChcInVzZUxvYWRlckRhdGFcIiAvKiBVc2VMb2FkZXJEYXRhICovKTtcbiAgcmV0dXJuIHN0YXRlLmFjdGlvbkRhdGEgPyBzdGF0ZS5hY3Rpb25EYXRhW3JvdXRlSWRdIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gdXNlUm91dGVFcnJvcigpIHtcbiAgbGV0IGVycm9yID0gUmVhY3QyLnVzZUNvbnRleHQoUm91dGVFcnJvckNvbnRleHQpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoXCJ1c2VSb3V0ZUVycm9yXCIgLyogVXNlUm91dGVFcnJvciAqLyk7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoXCJ1c2VSb3V0ZUVycm9yXCIgLyogVXNlUm91dGVFcnJvciAqLyk7XG4gIGlmIChlcnJvciAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG4gIHJldHVybiBzdGF0ZS5lcnJvcnM/Lltyb3V0ZUlkXTtcbn1cbmZ1bmN0aW9uIHVzZUFzeW5jVmFsdWUoKSB7XG4gIGxldCB2YWx1ZSA9IFJlYWN0Mi51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZT8uX2RhdGE7XG59XG5mdW5jdGlvbiB1c2VBc3luY0Vycm9yKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdDIudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWU/Ll9lcnJvcjtcbn1cbnZhciBibG9ja2VySWQgPSAwO1xuZnVuY3Rpb24gdXNlQmxvY2tlcihzaG91bGRCbG9jaykge1xuICBsZXQgeyByb3V0ZXIsIGJhc2VuYW1lIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChcInVzZUJsb2NrZXJcIiAvKiBVc2VCbG9ja2VyICovKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKFwidXNlQmxvY2tlclwiIC8qIFVzZUJsb2NrZXIgKi8pO1xuICBsZXQgW2Jsb2NrZXJLZXksIHNldEJsb2NrZXJLZXldID0gUmVhY3QyLnVzZVN0YXRlKFwiXCIpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9uID0gUmVhY3QyLnVzZUNhbGxiYWNrKFxuICAgIChhcmcpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc2hvdWxkQmxvY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gISFzaG91bGRCbG9jaztcbiAgICAgIH1cbiAgICAgIGlmIChiYXNlbmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgcmV0dXJuIHNob3VsZEJsb2NrKGFyZyk7XG4gICAgICB9XG4gICAgICBsZXQgeyBjdXJyZW50TG9jYXRpb24sIG5leHRMb2NhdGlvbiwgaGlzdG9yeUFjdGlvbiB9ID0gYXJnO1xuICAgICAgcmV0dXJuIHNob3VsZEJsb2NrKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiB7XG4gICAgICAgICAgLi4uY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIHBhdGhuYW1lOiBzdHJpcEJhc2VuYW1lKGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9LFxuICAgICAgICBuZXh0TG9jYXRpb246IHtcbiAgICAgICAgICAuLi5uZXh0TG9jYXRpb24sXG4gICAgICAgICAgcGF0aG5hbWU6IHN0cmlwQmFzZW5hbWUobmV4dExvY2F0aW9uLnBhdGhuYW1lLCBiYXNlbmFtZSkgfHwgbmV4dExvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2Jhc2VuYW1lLCBzaG91bGRCbG9ja11cbiAgKTtcbiAgUmVhY3QyLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGtleSA9IFN0cmluZygrK2Jsb2NrZXJJZCk7XG4gICAgc2V0QmxvY2tlcktleShrZXkpO1xuICAgIHJldHVybiAoKSA9PiByb3V0ZXIuZGVsZXRlQmxvY2tlcihrZXkpO1xuICB9LCBbcm91dGVyXSk7XG4gIFJlYWN0Mi51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyS2V5ICE9PSBcIlwiKSB7XG4gICAgICByb3V0ZXIuZ2V0QmxvY2tlcihibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb24pO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSk7XG4gIHJldHVybiBibG9ja2VyS2V5ICYmIHN0YXRlLmJsb2NrZXJzLmhhcyhibG9ja2VyS2V5KSA/IHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KSA6IElETEVfQkxPQ0tFUjtcbn1cbmZ1bmN0aW9uIHVzZU5hdmlnYXRlU3RhYmxlKCkge1xuICBsZXQgeyByb3V0ZXIgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KFwidXNlTmF2aWdhdGVcIiAvKiBVc2VOYXZpZ2F0ZVN0YWJsZSAqLyk7XG4gIGxldCBpZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKFwidXNlTmF2aWdhdGVcIiAvKiBVc2VOYXZpZ2F0ZVN0YWJsZSAqLyk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdDIudXNlUmVmKGZhbHNlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QyLnVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh0bywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICB3YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcpO1xuICAgICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUodG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgcm91dGVyLm5hdmlnYXRlKHRvLCB7IGZyb21Sb3V0ZUlkOiBpZCwgLi4ub3B0aW9ucyB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtyb3V0ZXIsIGlkXVxuICApO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG52YXIgYWxyZWFkeVdhcm5lZCA9IHt9O1xuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCBtZXNzYWdlKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlUm91dGUoLi4uYXJncykge1xuICBjb25zdCBjdXJyZW50Um91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKFxuICAgIFwidXNlUm91dGVcIiAvKiBVc2VSb3V0ZSAqL1xuICApO1xuICBjb25zdCBpZCA9IGFyZ3NbMF0gPz8gY3VycmVudFJvdXRlSWQ7XG4gIGNvbnN0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKFwidXNlUm91dGVcIiAvKiBVc2VSb3V0ZSAqLyk7XG4gIGNvbnN0IHJvdXRlID0gc3RhdGUubWF0Y2hlcy5maW5kKCh7IHJvdXRlOiByb3V0ZTIgfSkgPT4gcm91dGUyLmlkID09PSBpZCk7XG4gIGlmIChyb3V0ZSA9PT0gdm9pZCAwKSByZXR1cm4gdm9pZCAwO1xuICByZXR1cm4ge1xuICAgIGhhbmRsZTogcm91dGUucm91dGUuaGFuZGxlLFxuICAgIGxvYWRlckRhdGE6IHN0YXRlLmxvYWRlckRhdGFbaWRdLFxuICAgIGFjdGlvbkRhdGE6IHN0YXRlLmFjdGlvbkRhdGE/LltpZF1cbiAgfTtcbn1cblxuLy8gbGliL2NvbXBvbmVudHMudHN4XG5pbXBvcnQgKiBhcyBSZWFjdDMgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGxpYi9zZXJ2ZXItcnVudGltZS93YXJuaW5ncy50c1xudmFyIGFscmVhZHlXYXJuZWQyID0ge307XG5mdW5jdGlvbiB3YXJuT25jZShjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24gJiYgIWFscmVhZHlXYXJuZWQyW21lc3NhZ2VdKSB7XG4gICAgYWxyZWFkeVdhcm5lZDJbbWVzc2FnZV0gPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgfVxufVxuXG4vLyBsaWIvY29tcG9uZW50cy50c3hcbmZ1bmN0aW9uIG1hcFJvdXRlUHJvcGVydGllcyhyb3V0ZSkge1xuICBsZXQgdXBkYXRlcyA9IHtcbiAgICAvLyBOb3RlOiB0aGlzIGNoZWNrIGFsc28gb2NjdXJzIGluIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBzbyB1cGRhdGVcbiAgICAvLyB0aGVyZSBpZiB5b3UgY2hhbmdlIHRoaXMgLS0gcGxlYXNlIGFuZCB0aGFuayB5b3UhXG4gICAgaGFzRXJyb3JCb3VuZGFyeTogcm91dGUuaGFzRXJyb3JCb3VuZGFyeSB8fCByb3V0ZS5FcnJvckJvdW5kYXJ5ICE9IG51bGwgfHwgcm91dGUuZXJyb3JFbGVtZW50ICE9IG51bGxcbiAgfTtcbiAgaWYgKHJvdXRlLkNvbXBvbmVudCkge1xuICAgIGlmIChFTkFCTEVfREVWX1dBUk5JTkdTKSB7XG4gICAgICBpZiAocm91dGUuZWxlbWVudCkge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIFwiWW91IHNob3VsZCBub3QgaW5jbHVkZSBib3RoIGBDb21wb25lbnRgIGFuZCBgZWxlbWVudGAgb24geW91ciByb3V0ZSAtIGBDb21wb25lbnRgIHdpbGwgYmUgdXNlZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHVwZGF0ZXMsIHtcbiAgICAgIGVsZW1lbnQ6IFJlYWN0My5jcmVhdGVFbGVtZW50KHJvdXRlLkNvbXBvbmVudCksXG4gICAgICBDb21wb25lbnQ6IHZvaWQgMFxuICAgIH0pO1xuICB9XG4gIGlmIChyb3V0ZS5IeWRyYXRlRmFsbGJhY2spIHtcbiAgICBpZiAoRU5BQkxFX0RFVl9XQVJOSU5HUykge1xuICAgICAgaWYgKHJvdXRlLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcIllvdSBzaG91bGQgbm90IGluY2x1ZGUgYm90aCBgSHlkcmF0ZUZhbGxiYWNrYCBhbmQgYGh5ZHJhdGVGYWxsYmFja0VsZW1lbnRgIG9uIHlvdXIgcm91dGUgLSBgSHlkcmF0ZUZhbGxiYWNrYCB3aWxsIGJlIHVzZWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbih1cGRhdGVzLCB7XG4gICAgICBoeWRyYXRlRmFsbGJhY2tFbGVtZW50OiBSZWFjdDMuY3JlYXRlRWxlbWVudChyb3V0ZS5IeWRyYXRlRmFsbGJhY2spLFxuICAgICAgSHlkcmF0ZUZhbGxiYWNrOiB2b2lkIDBcbiAgICB9KTtcbiAgfVxuICBpZiAocm91dGUuRXJyb3JCb3VuZGFyeSkge1xuICAgIGlmIChFTkFCTEVfREVWX1dBUk5JTkdTKSB7XG4gICAgICBpZiAocm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYEVycm9yQm91bmRhcnlgIGFuZCBgZXJyb3JFbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gYEVycm9yQm91bmRhcnlgIHdpbGwgYmUgdXNlZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHVwZGF0ZXMsIHtcbiAgICAgIGVycm9yRWxlbWVudDogUmVhY3QzLmNyZWF0ZUVsZW1lbnQocm91dGUuRXJyb3JCb3VuZGFyeSksXG4gICAgICBFcnJvckJvdW5kYXJ5OiB2b2lkIDBcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdXBkYXRlcztcbn1cbnZhciBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMgPSBbXG4gIFwiSHlkcmF0ZUZhbGxiYWNrXCIsXG4gIFwiaHlkcmF0ZUZhbGxiYWNrRWxlbWVudFwiXG5dO1xuZnVuY3Rpb24gY3JlYXRlTWVtb3J5Um91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cz8uYmFzZW5hbWUsXG4gICAgZ2V0Q29udGV4dDogb3B0cz8uZ2V0Q29udGV4dCxcbiAgICBmdXR1cmU6IG9wdHM/LmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzOiBvcHRzPy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleDogb3B0cz8uaW5pdGlhbEluZGV4XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cz8uaHlkcmF0aW9uRGF0YSxcbiAgICByb3V0ZXMsXG4gICAgaHlkcmF0aW9uUm91dGVQcm9wZXJ0aWVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllcyxcbiAgICBkYXRhU3RyYXRlZ3k6IG9wdHM/LmRhdGFTdHJhdGVneSxcbiAgICBwYXRjaFJvdXRlc09uTmF2aWdhdGlvbjogb3B0cz8ucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24sXG4gICAgdW5zdGFibGVfaW5zdHJ1bWVudGF0aW9uczogb3B0cz8udW5zdGFibGVfaW5zdHJ1bWVudGF0aW9uc1xuICB9KS5pbml0aWFsaXplKCk7XG59XG52YXIgRGVmZXJyZWQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdHVzID0gXCJwZW5kaW5nXCI7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwicmVzb2x2ZWRcIjtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMucmVqZWN0ID0gKHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSBcInJlamVjdGVkXCI7XG4gICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn07XG5mdW5jdGlvbiBzaGFsbG93RGlmZihhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICBsZXQgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZm9yIChsZXQga2V5IG9mIGFLZXlzKSB7XG4gICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gVU5TVEFCTEVfVHJhbnNpdGlvbkVuYWJsZWRSb3V0ZXJQcm92aWRlcih7XG4gIHJvdXRlcixcbiAgZmx1c2hTeW5jOiByZWFjdERvbUZsdXNoU3luY0ltcGwsXG4gIHVuc3RhYmxlX29uRXJyb3Jcbn0pIHtcbiAgbGV0IGZldGNoZXJEYXRhID0gUmVhY3QzLnVzZVJlZigvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgbGV0IFtyZXZhbGlkYXRpbmcsIHN0YXJ0UmV2YWxpZGF0aW9uXSA9IFJlYWN0My51c2VUcmFuc2l0aW9uKCk7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0My51c2VTdGF0ZShyb3V0ZXIuc3RhdGUpO1xuICByb3V0ZXIuX19zZXRQZW5kaW5nUmVyZW5kZXIgPSAocHJvbWlzZSkgPT4gc3RhcnRSZXZhbGlkYXRpb24oXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIG5lZWQgcmVhY3QgMTkgdHlwZXMgZm9yIHRoaXMgdG8gYmUgYXN5bmNcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXJlbmRlciA9IGF3YWl0IHByb21pc2U7XG4gICAgICBzdGFydFJldmFsaWRhdGlvbigoKSA9PiB7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdDMudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiAobikgPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZTIsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZTogc3RhdGUyLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHM/LnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlMiwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHN0YXRlOiBzdGF0ZTIsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cz8ucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KVxuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcbiAgbGV0IGJhc2VuYW1lID0gcm91dGVyLmJhc2VuYW1lIHx8IFwiL1wiO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdDMudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgcm91dGVyLFxuICAgICAgbmF2aWdhdG9yLFxuICAgICAgc3RhdGljOiBmYWxzZSxcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgdW5zdGFibGVfb25FcnJvclxuICAgIH0pLFxuICAgIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWUsIHVuc3RhYmxlX29uRXJyb3JdXG4gICk7XG4gIFJlYWN0My51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiByb3V0ZXIuc3Vic2NyaWJlKFxuICAgICAgKG5ld1N0YXRlLCB7IGRlbGV0ZWRGZXRjaGVycywgZmx1c2hTeW5jLCB2aWV3VHJhbnNpdGlvbk9wdHMgfSkgPT4ge1xuICAgICAgICBuZXdTdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChmZXRjaGVyLCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoZmV0Y2hlci5kYXRhICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGZldGNoZXJEYXRhLmN1cnJlbnQuc2V0KGtleSwgZmV0Y2hlci5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGVkRmV0Y2hlcnMuZm9yRWFjaCgoa2V5KSA9PiBmZXRjaGVyRGF0YS5jdXJyZW50LmRlbGV0ZShrZXkpKTtcbiAgICAgICAgY29uc3QgZGlmZiA9IHNoYWxsb3dEaWZmKHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIGlmICghZGlmZikgcmV0dXJuO1xuICAgICAgICBpZiAoZmx1c2hTeW5jKSB7XG4gICAgICAgICAgaWYgKHJlYWN0RG9tRmx1c2hTeW5jSW1wbCkge1xuICAgICAgICAgICAgcmVhY3REb21GbHVzaFN5bmNJbXBsKCgpID0+IHNldFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUmVhY3QzLnN0YXJ0VHJhbnNpdGlvbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9LCBbcm91dGVyLCByZWFjdERvbUZsdXNoU3luY0ltcGwsIHN0YXRlXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoUmVhY3QzLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChcbiAgICBEYXRhUm91dGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyLFxuICAgIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXZhbGlkYXRpb246IHJldmFsaWRhdGluZyA/IFwibG9hZGluZ1wiIDogc3RhdGUucmV2YWxpZGF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoRmV0Y2hlcnNDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBmZXRjaGVyRGF0YS5jdXJyZW50IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChcbiAgICAgIFJvdXRlcixcbiAgICAgIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmhpc3RvcnlBY3Rpb24sXG4gICAgICAgIG5hdmlnYXRvclxuICAgICAgfSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTWVtb2l6ZWREYXRhUm91dGVzLFxuICAgICAgICB7XG4gICAgICAgICAgcm91dGVzOiByb3V0ZXIucm91dGVzLFxuICAgICAgICAgIGZ1dHVyZTogcm91dGVyLmZ1dHVyZSxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICB1bnN0YWJsZV9vbkVycm9yXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApKVxuICApKSwgbnVsbCk7XG59XG5mdW5jdGlvbiBSb3V0ZXJQcm92aWRlcih7XG4gIHJvdXRlcixcbiAgZmx1c2hTeW5jOiByZWFjdERvbUZsdXNoU3luY0ltcGwsXG4gIHVuc3RhYmxlX29uRXJyb3Jcbn0pIHtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0My51c2VTdGF0ZShyb3V0ZXIuc3RhdGUpO1xuICBsZXQgW3BlbmRpbmdTdGF0ZSwgc2V0UGVuZGluZ1N0YXRlXSA9IFJlYWN0My51c2VTdGF0ZSgpO1xuICBsZXQgW3Z0Q29udGV4dCwgc2V0VnRDb250ZXh0XSA9IFJlYWN0My51c2VTdGF0ZSh7XG4gICAgaXNUcmFuc2l0aW9uaW5nOiBmYWxzZVxuICB9KTtcbiAgbGV0IFtyZW5kZXJEZmQsIHNldFJlbmRlckRmZF0gPSBSZWFjdDMudXNlU3RhdGUoKTtcbiAgbGV0IFt0cmFuc2l0aW9uLCBzZXRUcmFuc2l0aW9uXSA9IFJlYWN0My51c2VTdGF0ZSgpO1xuICBsZXQgW2ludGVycnVwdGlvbiwgc2V0SW50ZXJydXB0aW9uXSA9IFJlYWN0My51c2VTdGF0ZSgpO1xuICBsZXQgZmV0Y2hlckRhdGEgPSBSZWFjdDMudXNlUmVmKC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICBsZXQgbG9nRXJyb3JzQW5kU2V0U3RhdGUgPSBSZWFjdDMudXNlQ2FsbGJhY2soXG4gICAgKG5ld1N0YXRlKSA9PiB7XG4gICAgICBzZXRTdGF0ZUltcGwoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAobmV3U3RhdGUuZXJyb3JzICYmIHVuc3RhYmxlX29uRXJyb3IpIHtcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhuZXdTdGF0ZS5lcnJvcnMpLmZvckVhY2goKFtyb3V0ZUlkLCBlcnJvcl0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2U3RhdGUuZXJyb3JzPy5bcm91dGVJZF0gIT09IGVycm9yKSB7XG4gICAgICAgICAgICAgIHVuc3RhYmxlX29uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW3Vuc3RhYmxlX29uRXJyb3JdXG4gICk7XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0My51c2VDYWxsYmFjayhcbiAgICAobmV3U3RhdGUsIHsgZGVsZXRlZEZldGNoZXJzLCBmbHVzaFN5bmMsIHZpZXdUcmFuc2l0aW9uT3B0cyB9KSA9PiB7XG4gICAgICBuZXdTdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChmZXRjaGVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGZldGNoZXIuZGF0YSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZmV0Y2hlckRhdGEuY3VycmVudC5zZXQoa2V5LCBmZXRjaGVyLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZWRGZXRjaGVycy5mb3JFYWNoKChrZXkpID0+IGZldGNoZXJEYXRhLmN1cnJlbnQuZGVsZXRlKGtleSkpO1xuICAgICAgd2Fybk9uY2UoXG4gICAgICAgIGZsdXNoU3luYyA9PT0gZmFsc2UgfHwgcmVhY3REb21GbHVzaFN5bmNJbXBsICE9IG51bGwsXG4gICAgICAgICdZb3UgcHJvdmlkZWQgdGhlIGBmbHVzaFN5bmNgIG9wdGlvbiB0byBhIHJvdXRlciB1cGRhdGUsIGJ1dCB5b3UgYXJlIG5vdCB1c2luZyB0aGUgYDxSb3V0ZXJQcm92aWRlcj5gIGZyb20gYHJlYWN0LXJvdXRlci9kb21gIHNvIGBSZWFjdERPTS5mbHVzaFN5bmMoKWAgaXMgdW5hdmFpbGFibGUuICBQbGVhc2UgdXBkYXRlIHlvdXIgYXBwIHRvIGBpbXBvcnQgeyBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXIvZG9tXCJgIGFuZCBlbnN1cmUgeW91IGhhdmUgYHJlYWN0LWRvbWAgaW5zdGFsbGVkIGFzIGEgZGVwZW5kZW5jeSB0byB1c2UgdGhlIGBmbHVzaFN5bmNgIG9wdGlvbi4nXG4gICAgICApO1xuICAgICAgbGV0IGlzVmlld1RyYW5zaXRpb25BdmFpbGFibGUgPSByb3V0ZXIud2luZG93ICE9IG51bGwgJiYgcm91dGVyLndpbmRvdy5kb2N1bWVudCAhPSBudWxsICYmIHR5cGVvZiByb3V0ZXIud2luZG93LmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIHdhcm5PbmNlKFxuICAgICAgICB2aWV3VHJhbnNpdGlvbk9wdHMgPT0gbnVsbCB8fCBpc1ZpZXdUcmFuc2l0aW9uQXZhaWxhYmxlLFxuICAgICAgICBcIllvdSBwcm92aWRlZCB0aGUgYHZpZXdUcmFuc2l0aW9uYCBvcHRpb24gdG8gYSByb3V0ZXIgdXBkYXRlLCBidXQgeW91IGRvIG5vdCBhcHBlYXIgdG8gYmUgcnVubmluZyBpbiBhIERPTSBlbnZpcm9ubWVudCBhcyBgd2luZG93LnN0YXJ0Vmlld1RyYW5zaXRpb25gIGlzIG5vdCBhdmFpbGFibGUuXCJcbiAgICAgICk7XG4gICAgICBpZiAoIXZpZXdUcmFuc2l0aW9uT3B0cyB8fCAhaXNWaWV3VHJhbnNpdGlvbkF2YWlsYWJsZSkge1xuICAgICAgICBpZiAocmVhY3REb21GbHVzaFN5bmNJbXBsICYmIGZsdXNoU3luYykge1xuICAgICAgICAgIHJlYWN0RG9tRmx1c2hTeW5jSW1wbCgoKSA9PiBsb2dFcnJvcnNBbmRTZXRTdGF0ZShuZXdTdGF0ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWN0My5zdGFydFRyYW5zaXRpb24oKCkgPT4gbG9nRXJyb3JzQW5kU2V0U3RhdGUobmV3U3RhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVhY3REb21GbHVzaFN5bmNJbXBsICYmIGZsdXNoU3luYykge1xuICAgICAgICByZWFjdERvbUZsdXNoU3luY0ltcGwoKCkgPT4ge1xuICAgICAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICByZW5kZXJEZmQgJiYgcmVuZGVyRGZkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2tpcFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VnRDb250ZXh0KHtcbiAgICAgICAgICAgIGlzVHJhbnNpdGlvbmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZsdXNoU3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogdmlld1RyYW5zaXRpb25PcHRzLmN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICAgIG5leHRMb2NhdGlvbjogdmlld1RyYW5zaXRpb25PcHRzLm5leHRMb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHQgPSByb3V0ZXIud2luZG93LmRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAgIHJlYWN0RG9tRmx1c2hTeW5jSW1wbCgoKSA9PiBsb2dFcnJvcnNBbmRTZXRTdGF0ZShuZXdTdGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdC5maW5pc2hlZC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICByZWFjdERvbUZsdXNoU3luY0ltcGwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UmVuZGVyRGZkKHZvaWQgMCk7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uKHZvaWQgMCk7XG4gICAgICAgICAgICBzZXRQZW5kaW5nU3RhdGUodm9pZCAwKTtcbiAgICAgICAgICAgIHNldFZ0Q29udGV4dCh7IGlzVHJhbnNpdGlvbmluZzogZmFsc2UgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFjdERvbUZsdXNoU3luY0ltcGwoKCkgPT4gc2V0VHJhbnNpdGlvbih0KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHJlbmRlckRmZCAmJiByZW5kZXJEZmQucmVzb2x2ZSgpO1xuICAgICAgICB0cmFuc2l0aW9uLnNraXBUcmFuc2l0aW9uKCk7XG4gICAgICAgIHNldEludGVycnVwdGlvbih7XG4gICAgICAgICAgc3RhdGU6IG5ld1N0YXRlLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogdmlld1RyYW5zaXRpb25PcHRzLmN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBuZXh0TG9jYXRpb246IHZpZXdUcmFuc2l0aW9uT3B0cy5uZXh0TG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQZW5kaW5nU3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBzZXRWdENvbnRleHQoe1xuICAgICAgICAgIGlzVHJhbnNpdGlvbmluZzogdHJ1ZSxcbiAgICAgICAgICBmbHVzaFN5bmM6IGZhbHNlLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogdmlld1RyYW5zaXRpb25PcHRzLmN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBuZXh0TG9jYXRpb246IHZpZXdUcmFuc2l0aW9uT3B0cy5uZXh0TG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICByb3V0ZXIud2luZG93LFxuICAgICAgcmVhY3REb21GbHVzaFN5bmNJbXBsLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIHJlbmRlckRmZCxcbiAgICAgIGxvZ0Vycm9yc0FuZFNldFN0YXRlXG4gICAgXVxuICApO1xuICBSZWFjdDMudXNlTGF5b3V0RWZmZWN0KCgpID0+IHJvdXRlci5zdWJzY3JpYmUoc2V0U3RhdGUpLCBbcm91dGVyLCBzZXRTdGF0ZV0pO1xuICBSZWFjdDMudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodnRDb250ZXh0LmlzVHJhbnNpdGlvbmluZyAmJiAhdnRDb250ZXh0LmZsdXNoU3luYykge1xuICAgICAgc2V0UmVuZGVyRGZkKG5ldyBEZWZlcnJlZCgpKTtcbiAgICB9XG4gIH0sIFt2dENvbnRleHRdKTtcbiAgUmVhY3QzLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlbmRlckRmZCAmJiBwZW5kaW5nU3RhdGUgJiYgcm91dGVyLndpbmRvdykge1xuICAgICAgbGV0IG5ld1N0YXRlID0gcGVuZGluZ1N0YXRlO1xuICAgICAgbGV0IHJlbmRlclByb21pc2UgPSByZW5kZXJEZmQucHJvbWlzZTtcbiAgICAgIGxldCB0cmFuc2l0aW9uMiA9IHJvdXRlci53aW5kb3cuZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICAgIFJlYWN0My5zdGFydFRyYW5zaXRpb24oKCkgPT4gbG9nRXJyb3JzQW5kU2V0U3RhdGUobmV3U3RhdGUpKTtcbiAgICAgICAgYXdhaXQgcmVuZGVyUHJvbWlzZTtcbiAgICAgIH0pO1xuICAgICAgdHJhbnNpdGlvbjIuZmluaXNoZWQuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFJlbmRlckRmZCh2b2lkIDApO1xuICAgICAgICBzZXRUcmFuc2l0aW9uKHZvaWQgMCk7XG4gICAgICAgIHNldFBlbmRpbmdTdGF0ZSh2b2lkIDApO1xuICAgICAgICBzZXRWdENvbnRleHQoeyBpc1RyYW5zaXRpb25pbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24yKTtcbiAgICB9XG4gIH0sIFtwZW5kaW5nU3RhdGUsIHJlbmRlckRmZCwgcm91dGVyLndpbmRvdywgbG9nRXJyb3JzQW5kU2V0U3RhdGVdKTtcbiAgUmVhY3QzLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlbmRlckRmZCAmJiBwZW5kaW5nU3RhdGUgJiYgc3RhdGUubG9jYXRpb24ua2V5ID09PSBwZW5kaW5nU3RhdGUubG9jYXRpb24ua2V5KSB7XG4gICAgICByZW5kZXJEZmQucmVzb2x2ZSgpO1xuICAgIH1cbiAgfSwgW3JlbmRlckRmZCwgdHJhbnNpdGlvbiwgc3RhdGUubG9jYXRpb24sIHBlbmRpbmdTdGF0ZV0pO1xuICBSZWFjdDMudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZ0Q29udGV4dC5pc1RyYW5zaXRpb25pbmcgJiYgaW50ZXJydXB0aW9uKSB7XG4gICAgICBzZXRQZW5kaW5nU3RhdGUoaW50ZXJydXB0aW9uLnN0YXRlKTtcbiAgICAgIHNldFZ0Q29udGV4dCh7XG4gICAgICAgIGlzVHJhbnNpdGlvbmluZzogdHJ1ZSxcbiAgICAgICAgZmx1c2hTeW5jOiBmYWxzZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBpbnRlcnJ1cHRpb24uY3VycmVudExvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IGludGVycnVwdGlvbi5uZXh0TG9jYXRpb25cbiAgICAgIH0pO1xuICAgICAgc2V0SW50ZXJydXB0aW9uKHZvaWQgMCk7XG4gICAgfVxuICB9LCBbdnRDb250ZXh0LmlzVHJhbnNpdGlvbmluZywgaW50ZXJydXB0aW9uXSk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdDMudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiAobikgPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZTIsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZTogc3RhdGUyLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHM/LnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlMiwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHN0YXRlOiBzdGF0ZTIsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cz8ucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KVxuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcbiAgbGV0IGJhc2VuYW1lID0gcm91dGVyLmJhc2VuYW1lIHx8IFwiL1wiO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdDMudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgcm91dGVyLFxuICAgICAgbmF2aWdhdG9yLFxuICAgICAgc3RhdGljOiBmYWxzZSxcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgdW5zdGFibGVfb25FcnJvclxuICAgIH0pLFxuICAgIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWUsIHVuc3RhYmxlX29uRXJyb3JdXG4gICk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoUmVhY3QzLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChEYXRhUm91dGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBzdGF0ZSB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoRmV0Y2hlcnNDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBmZXRjaGVyRGF0YS5jdXJyZW50IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChWaWV3VHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHZ0Q29udGV4dCB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoXG4gICAgUm91dGVyLFxuICAgIHtcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmhpc3RvcnlBY3Rpb24sXG4gICAgICBuYXZpZ2F0b3JcbiAgICB9LFxuICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChcbiAgICAgIE1lbW9pemVkRGF0YVJvdXRlcyxcbiAgICAgIHtcbiAgICAgICAgcm91dGVzOiByb3V0ZXIucm91dGVzLFxuICAgICAgICBmdXR1cmU6IHJvdXRlci5mdXR1cmUsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICB1bnN0YWJsZV9vbkVycm9yXG4gICAgICB9XG4gICAgKVxuICApKSkpKSwgbnVsbCk7XG59XG52YXIgTWVtb2l6ZWREYXRhUm91dGVzID0gUmVhY3QzLm1lbW8oRGF0YVJvdXRlcyk7XG5mdW5jdGlvbiBEYXRhUm91dGVzKHtcbiAgcm91dGVzLFxuICBmdXR1cmUsXG4gIHN0YXRlLFxuICB1bnN0YWJsZV9vbkVycm9yXG59KSB7XG4gIHJldHVybiB1c2VSb3V0ZXNJbXBsKHJvdXRlcywgdm9pZCAwLCBzdGF0ZSwgdW5zdGFibGVfb25FcnJvciwgZnV0dXJlKTtcbn1cbmZ1bmN0aW9uIE1lbW9yeVJvdXRlcih7XG4gIGJhc2VuYW1lLFxuICBjaGlsZHJlbixcbiAgaW5pdGlhbEVudHJpZXMsXG4gIGluaXRpYWxJbmRleFxufSkge1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0My51c2VSZWYoKTtcbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleCxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdDMudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0My51c2VDYWxsYmFjayhcbiAgICAobmV3U3RhdGUpID0+IHtcbiAgICAgIFJlYWN0My5zdGFydFRyYW5zaXRpb24oKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSk7XG4gICAgfSxcbiAgICBbc2V0U3RhdGVJbXBsXVxuICApO1xuICBSZWFjdDMudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnksIHNldFN0YXRlXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoXG4gICAgUm91dGVyLFxuICAgIHtcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gTmF2aWdhdGUoe1xuICB0byxcbiAgcmVwbGFjZTogcmVwbGFjZTIsXG4gIHN0YXRlLFxuICByZWxhdGl2ZVxufSkge1xuICBpbnZhcmlhbnQoXG4gICAgdXNlSW5Sb3V0ZXJDb250ZXh0KCksXG4gICAgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgICAvLyB0aGUgcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICAgIGA8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuYFxuICApO1xuICBsZXQgeyBzdGF0aWM6IGlzU3RhdGljIH0gPSBSZWFjdDMudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIHdhcm5pbmcoXG4gICAgIWlzU3RhdGljLFxuICAgIGA8TmF2aWdhdGU+IG11c3Qgbm90IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgcmVuZGVyIGluIGEgPFN0YXRpY1JvdXRlcj4uIFRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBvbmx5IGV2ZXIgcmVuZGVyZWQgaW4gcmVzcG9uc2UgdG8gc29tZSB1c2VyIGludGVyYWN0aW9uIG9yIHN0YXRlIGNoYW5nZS5gXG4gICk7XG4gIGxldCB7IG1hdGNoZXMgfSA9IFJlYWN0My51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7IHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgcGF0aCA9IHJlc29sdmVUbyhcbiAgICB0byxcbiAgICBnZXRSZXNvbHZlVG9NYXRjaGVzKG1hdGNoZXMpLFxuICAgIGxvY2F0aW9uUGF0aG5hbWUsXG4gICAgcmVsYXRpdmUgPT09IFwicGF0aFwiXG4gICk7XG4gIGxldCBqc29uUGF0aCA9IEpTT04uc3RyaW5naWZ5KHBhdGgpO1xuICBSZWFjdDMudXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0ZShKU09OLnBhcnNlKGpzb25QYXRoKSwgeyByZXBsYWNlOiByZXBsYWNlMiwgc3RhdGUsIHJlbGF0aXZlIH0pO1xuICB9LCBbbmF2aWdhdGUsIGpzb25QYXRoLCByZWxhdGl2ZSwgcmVwbGFjZTIsIHN0YXRlXSk7XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gT3V0bGV0KHByb3BzKSB7XG4gIHJldHVybiB1c2VPdXRsZXQocHJvcHMuY29udGV4dCk7XG59XG5mdW5jdGlvbiBSb3V0ZShwcm9wcykge1xuICBpbnZhcmlhbnQoXG4gICAgZmFsc2UsXG4gICAgYEEgPFJvdXRlPiBpcyBvbmx5IGV2ZXIgdG8gYmUgdXNlZCBhcyB0aGUgY2hpbGQgb2YgPFJvdXRlcz4gZWxlbWVudCwgbmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LmBcbiAgKTtcbn1cbmZ1bmN0aW9uIFJvdXRlcih7XG4gIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgY2hpbGRyZW4gPSBudWxsLFxuICBsb2NhdGlvbjogbG9jYXRpb25Qcm9wLFxuICBuYXZpZ2F0aW9uVHlwZSA9IFwiUE9QXCIgLyogUG9wICovLFxuICBuYXZpZ2F0b3IsXG4gIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG59KSB7XG4gIGludmFyaWFudChcbiAgICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCksXG4gICAgYFlvdSBjYW5ub3QgcmVuZGVyIGEgPFJvdXRlcj4gaW5zaWRlIGFub3RoZXIgPFJvdXRlcj4uIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLmBcbiAgKTtcbiAgbGV0IGJhc2VuYW1lID0gYmFzZW5hbWVQcm9wLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuICBsZXQgbmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdDMudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYmFzZW5hbWUsXG4gICAgICBuYXZpZ2F0b3IsXG4gICAgICBzdGF0aWM6IHN0YXRpY1Byb3AsXG4gICAgICBmdXR1cmU6IHt9XG4gICAgfSksXG4gICAgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHN0YXRpY1Byb3BdXG4gICk7XG4gIGlmICh0eXBlb2YgbG9jYXRpb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgbG9jYXRpb25Qcm9wID0gcGFyc2VQYXRoKGxvY2F0aW9uUHJvcCk7XG4gIH1cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbkNvbnRleHQgPSBSZWFjdDMudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG4gICAgaWYgKHRyYWlsaW5nUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAga2V5XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXksIG5hdmlnYXRpb25UeXBlXSk7XG4gIHdhcm5pbmcoXG4gICAgbG9jYXRpb25Db250ZXh0ICE9IG51bGwsXG4gICAgYDxSb3V0ZXIgYmFzZW5hbWU9XCIke2Jhc2VuYW1lfVwiPiBpcyBub3QgYWJsZSB0byBtYXRjaCB0aGUgVVJMIFwiJHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9XCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBiYXNlbmFtZSwgc28gdGhlIDxSb3V0ZXI+IHdvbid0IHJlbmRlciBhbnl0aGluZy5gXG4gICk7XG4gIGlmIChsb2NhdGlvbkNvbnRleHQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IG5hdmlnYXRpb25Db250ZXh0IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgY2hpbGRyZW4sIHZhbHVlOiBsb2NhdGlvbkNvbnRleHQgfSkpO1xufVxuZnVuY3Rpb24gUm91dGVzKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2F0aW9uXG59KSB7XG4gIHJldHVybiB1c2VSb3V0ZXMoY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKSwgbG9jYXRpb24pO1xufVxuZnVuY3Rpb24gQXdhaXQoe1xuICBjaGlsZHJlbixcbiAgZXJyb3JFbGVtZW50LFxuICByZXNvbHZlXG59KSB7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0My51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChcbiAgICBBd2FpdEVycm9yQm91bmRhcnksXG4gICAge1xuICAgICAgcmVzb2x2ZSxcbiAgICAgIGVycm9yRWxlbWVudCxcbiAgICAgIHVuc3RhYmxlX29uRXJyb3I6IGRhdGFSb3V0ZXJDb250ZXh0Py51bnN0YWJsZV9vbkVycm9yXG4gICAgfSxcbiAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoUmVzb2x2ZUF3YWl0LCBudWxsLCBjaGlsZHJlbilcbiAgKTtcbn1cbnZhciBBd2FpdEVycm9yQm91bmRhcnkgPSBjbGFzcyBleHRlbmRzIFJlYWN0My5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogbnVsbCB9O1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBpZiAodGhpcy5wcm9wcy51bnN0YWJsZV9vbkVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLnVuc3RhYmxlX29uRXJyb3IoZXJyb3IsIGVycm9ySW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiPEF3YWl0PiBjYXVnaHQgdGhlIGZvbGxvd2luZyBlcnJvciBkdXJpbmcgcmVuZGVyXCIsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBlcnJvckluZm9cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiwgZXJyb3JFbGVtZW50LCByZXNvbHZlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICBsZXQgc3RhdHVzID0gMCAvKiBwZW5kaW5nICovO1xuICAgIGlmICghKHJlc29sdmUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgc3RhdHVzID0gMSAvKiBzdWNjZXNzICovO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwgeyBnZXQ6ICgpID0+IHRydWUgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZGF0YVwiLCB7IGdldDogKCkgPT4gcmVzb2x2ZSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIHN0YXR1cyA9IDIgLyogZXJyb3IgKi87XG4gICAgICBsZXQgcmVuZGVyRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KCkuY2F0Y2goKCkgPT4ge1xuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7IGdldDogKCkgPT4gdHJ1ZSB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7IGdldDogKCkgPT4gcmVuZGVyRXJyb3IgfSk7XG4gICAgfSBlbHNlIGlmIChyZXNvbHZlLl90cmFja2VkKSB7XG4gICAgICBwcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgIHN0YXR1cyA9IFwiX2Vycm9yXCIgaW4gcHJvbWlzZSA/IDIgLyogZXJyb3IgKi8gOiBcIl9kYXRhXCIgaW4gcHJvbWlzZSA/IDEgLyogc3VjY2VzcyAqLyA6IDAgLyogcGVuZGluZyAqLztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gMCAvKiBwZW5kaW5nICovO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX3RyYWNrZWRcIiwgeyBnZXQ6ICgpID0+IHRydWUgfSk7XG4gICAgICBwcm9taXNlID0gcmVzb2x2ZS50aGVuKFxuICAgICAgICAoZGF0YTIpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9kYXRhXCIsIHsgZ2V0OiAoKSA9PiBkYXRhMiB9KSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy51bnN0YWJsZV9vbkVycm9yPy4oZXJyb3IpO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9lcnJvclwiLCB7IGdldDogKCkgPT4gZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IDIgLyogZXJyb3IgKi8gJiYgIWVycm9yRWxlbWVudCkge1xuICAgICAgdGhyb3cgcHJvbWlzZS5fZXJyb3I7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IDIgLyogZXJyb3IgKi8pIHtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBwcm9taXNlLCBjaGlsZHJlbjogZXJyb3JFbGVtZW50IH0pO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSAxIC8qIHN1Y2Nlc3MgKi8pIHtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBwcm9taXNlLCBjaGlsZHJlbiB9KTtcbiAgICB9XG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxufTtcbmZ1bmN0aW9uIFJlc29sdmVBd2FpdCh7XG4gIGNoaWxkcmVuXG59KSB7XG4gIGxldCBkYXRhMiA9IHVzZUFzeW5jVmFsdWUoKTtcbiAgbGV0IHRvUmVuZGVyID0gdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbihkYXRhMikgOiBjaGlsZHJlbjtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChSZWFjdDMuRnJhZ21lbnQsIG51bGwsIHRvUmVuZGVyKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50UGF0aCA9IFtdKSB7XG4gIGxldCByb3V0ZXMgPSBbXTtcbiAgUmVhY3QzLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmICghUmVhY3QzLmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBpbmRleF07XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QzLkZyYWdtZW50KSB7XG4gICAgICByb3V0ZXMucHVzaC5hcHBseShcbiAgICAgICAgcm91dGVzLFxuICAgICAgICBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBlbGVtZW50LnR5cGUgPT09IFJvdXRlLFxuICAgICAgYFske3R5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZX1dIGlzIG5vdCBhIDxSb3V0ZT4gY29tcG9uZW50LiBBbGwgY29tcG9uZW50IGNoaWxkcmVuIG9mIDxSb3V0ZXM+IG11c3QgYmUgYSA8Um91dGU+IG9yIDxSZWFjdC5GcmFnbWVudD5gXG4gICAgKTtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbixcbiAgICAgIFwiQW4gaW5kZXggcm91dGUgY2Fubm90IGhhdmUgY2hpbGQgcm91dGVzLlwiXG4gICAgKTtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIENvbXBvbmVudDogZWxlbWVudC5wcm9wcy5Db21wb25lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIG1pZGRsZXdhcmU6IGVsZW1lbnQucHJvcHMubWlkZGxld2FyZSxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgaHlkcmF0ZUZhbGxiYWNrRWxlbWVudDogZWxlbWVudC5wcm9wcy5oeWRyYXRlRmFsbGJhY2tFbGVtZW50LFxuICAgICAgSHlkcmF0ZUZhbGxiYWNrOiBlbGVtZW50LnByb3BzLkh5ZHJhdGVGYWxsYmFjayxcbiAgICAgIGVycm9yRWxlbWVudDogZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQsXG4gICAgICBFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnksXG4gICAgICBoYXNFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLmhhc0Vycm9yQm91bmRhcnkgPT09IHRydWUgfHwgZWxlbWVudC5wcm9wcy5FcnJvckJvdW5kYXJ5ICE9IG51bGwgfHwgZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQgIT0gbnVsbCxcbiAgICAgIHNob3VsZFJldmFsaWRhdGU6IGVsZW1lbnQucHJvcHMuc2hvdWxkUmV2YWxpZGF0ZSxcbiAgICAgIGhhbmRsZTogZWxlbWVudC5wcm9wcy5oYW5kbGUsXG4gICAgICBsYXp5OiBlbGVtZW50LnByb3BzLmxhenlcbiAgICB9O1xuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihcbiAgICAgICAgZWxlbWVudC5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdHJlZVBhdGhcbiAgICAgICk7XG4gICAgfVxuICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXM7XG59XG52YXIgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzID0gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuO1xuZnVuY3Rpb24gcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKTtcbn1cbmZ1bmN0aW9uIHVzZVJvdXRlQ29tcG9uZW50UHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zOiB1c2VQYXJhbXMoKSxcbiAgICBsb2FkZXJEYXRhOiB1c2VMb2FkZXJEYXRhKCksXG4gICAgYWN0aW9uRGF0YTogdXNlQWN0aW9uRGF0YSgpLFxuICAgIG1hdGNoZXM6IHVzZU1hdGNoZXMoKVxuICB9O1xufVxuZnVuY3Rpb24gV2l0aENvbXBvbmVudFByb3BzKHtcbiAgY2hpbGRyZW5cbn0pIHtcbiAgY29uc3QgcHJvcHMgPSB1c2VSb3V0ZUNvbXBvbmVudFByb3BzKCk7XG4gIHJldHVybiBSZWFjdDMuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBwcm9wcyk7XG59XG5mdW5jdGlvbiB3aXRoQ29tcG9uZW50UHJvcHMoQ29tcG9uZW50NCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2l0aENvbXBvbmVudFByb3BzMigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHVzZVJvdXRlQ29tcG9uZW50UHJvcHMoKTtcbiAgICByZXR1cm4gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50NCwgcHJvcHMpO1xuICB9O1xufVxuZnVuY3Rpb24gdXNlSHlkcmF0ZUZhbGxiYWNrUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zOiB1c2VQYXJhbXMoKSxcbiAgICBsb2FkZXJEYXRhOiB1c2VMb2FkZXJEYXRhKCksXG4gICAgYWN0aW9uRGF0YTogdXNlQWN0aW9uRGF0YSgpXG4gIH07XG59XG5mdW5jdGlvbiBXaXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMoe1xuICBjaGlsZHJlblxufSkge1xuICBjb25zdCBwcm9wcyA9IHVzZUh5ZHJhdGVGYWxsYmFja1Byb3BzKCk7XG4gIHJldHVybiBSZWFjdDMuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBwcm9wcyk7XG59XG5mdW5jdGlvbiB3aXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMoSHlkcmF0ZUZhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiBXaXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMyKCkge1xuICAgIGNvbnN0IHByb3BzID0gdXNlSHlkcmF0ZUZhbGxiYWNrUHJvcHMoKTtcbiAgICByZXR1cm4gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoSHlkcmF0ZUZhbGxiYWNrLCBwcm9wcyk7XG4gIH07XG59XG5mdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5UHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zOiB1c2VQYXJhbXMoKSxcbiAgICBsb2FkZXJEYXRhOiB1c2VMb2FkZXJEYXRhKCksXG4gICAgYWN0aW9uRGF0YTogdXNlQWN0aW9uRGF0YSgpLFxuICAgIGVycm9yOiB1c2VSb3V0ZUVycm9yKClcbiAgfTtcbn1cbmZ1bmN0aW9uIFdpdGhFcnJvckJvdW5kYXJ5UHJvcHMoe1xuICBjaGlsZHJlblxufSkge1xuICBjb25zdCBwcm9wcyA9IHVzZUVycm9yQm91bmRhcnlQcm9wcygpO1xuICByZXR1cm4gUmVhY3QzLmNsb25lRWxlbWVudChjaGlsZHJlbiwgcHJvcHMpO1xufVxuZnVuY3Rpb24gd2l0aEVycm9yQm91bmRhcnlQcm9wcyhFcnJvckJvdW5kYXJ5KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXaXRoRXJyb3JCb3VuZGFyeVByb3BzMigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHVzZUVycm9yQm91bmRhcnlQcm9wcygpO1xuICAgIHJldHVybiBSZWFjdDMuY3JlYXRlRWxlbWVudChFcnJvckJvdW5kYXJ5LCBwcm9wcyk7XG4gIH07XG59XG5cbi8vIGxpYi9kb20vZG9tLnRzXG52YXIgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG52YXIgZGVmYXVsdEVuY1R5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZnVuY3Rpb24gaXNIdG1sRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QudGFnTmFtZSA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzQnV0dG9uRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJ1dHRvblwiO1xufVxuZnVuY3Rpb24gaXNGb3JtRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImZvcm1cIjtcbn1cbmZ1bmN0aW9uIGlzSW5wdXRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIjtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIExldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpO1xufVxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQgPSBcIlwiKSB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKFxuICAgIHR5cGVvZiBpbml0ID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoaW5pdCkgfHwgaW5pdCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyA/IGluaXQgOiBPYmplY3Qua2V5cyhpbml0KS5yZWR1Y2UoKG1lbW8yLCBrZXkpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGluaXRba2V5XTtcbiAgICAgIHJldHVybiBtZW1vMi5jb25jYXQoXG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKCh2KSA9PiBba2V5LCB2XSkgOiBbW2tleSwgdmFsdWVdXVxuICAgICAgKTtcbiAgICB9LCBbXSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuICBpZiAoZGVmYXVsdFNlYXJjaFBhcmFtcykge1xuICAgIGRlZmF1bHRTZWFyY2hQYXJhbXMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cbnZhciBfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlciA9IG51bGw7XG5mdW5jdGlvbiBpc0Zvcm1EYXRhU3VibWl0dGVyU3VwcG9ydGVkKCkge1xuICBpZiAoX2Zvcm1EYXRhU3VwcG9ydHNTdWJtaXR0ZXIgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgbmV3IEZvcm1EYXRhKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBpZiBGb3JtRGF0YSBzdXBwb3J0cyB0aGUgc3VibWl0dGVyIHBhcmFtZXRlciwgdGhpcyB3aWxsIHRocm93XG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICBfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlciA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyO1xufVxudmFyIHN1cHBvcnRlZEZvcm1FbmNUeXBlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gIFwidGV4dC9wbGFpblwiXG5dKTtcbmZ1bmN0aW9uIGdldEZvcm1FbmNUeXBlKGVuY1R5cGUpIHtcbiAgaWYgKGVuY1R5cGUgIT0gbnVsbCAmJiAhc3VwcG9ydGVkRm9ybUVuY1R5cGVzLmhhcyhlbmNUeXBlKSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBmYWxzZSxcbiAgICAgIGBcIiR7ZW5jVHlwZX1cIiBpcyBub3QgYSB2YWxpZCBcXGBlbmNUeXBlXFxgIGZvciBcXGA8Rm9ybT5cXGAvXFxgPGZldGNoZXIuRm9ybT5cXGAgYW5kIHdpbGwgZGVmYXVsdCB0byBcIiR7ZGVmYXVsdEVuY1R5cGV9XCJgXG4gICAgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gZW5jVHlwZTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGJhc2VuYW1lKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG4gIGxldCBib2R5O1xuICBpZiAoaXNGb3JtRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgbGV0IGF0dHIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpO1xuICAgIGFjdGlvbiA9IGF0dHIgPyBzdHJpcEJhc2VuYW1lKGF0dHIsIGJhc2VuYW1lKSA6IG51bGw7XG4gICAgbWV0aG9kID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGVuY1R5cGUgPSBnZXRGb3JtRW5jVHlwZSh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZW5jdHlwZVwiKSkgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcbiAgfSBlbHNlIGlmIChpc0J1dHRvbkVsZW1lbnQodGFyZ2V0KSB8fCBpc0lucHV0RWxlbWVudCh0YXJnZXQpICYmICh0YXJnZXQudHlwZSA9PT0gXCJzdWJtaXRcIiB8fCB0YXJnZXQudHlwZSA9PT0gXCJpbWFnZVwiKSkge1xuICAgIGxldCBmb3JtID0gdGFyZ2V0LmZvcm07XG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+IHdpdGhvdXQgYSA8Zm9ybT5gXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgYXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtYWN0aW9uXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpO1xuICAgIGFjdGlvbiA9IGF0dHIgPyBzdHJpcEJhc2VuYW1lKGF0dHIsIGJhc2VuYW1lKSA6IG51bGw7XG4gICAgbWV0aG9kID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIikgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBlbmNUeXBlID0gZ2V0Rm9ybUVuY1R5cGUodGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1lbmN0eXBlXCIpKSB8fCBnZXRGb3JtRW5jVHlwZShmb3JtLmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0sIHRhcmdldCk7XG4gICAgaWYgKCFpc0Zvcm1EYXRhU3VibWl0dGVyU3VwcG9ydGVkKCkpIHtcbiAgICAgIGxldCB7IG5hbWUsIHR5cGUsIHZhbHVlIH0gPSB0YXJnZXQ7XG4gICAgICBpZiAodHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSBuYW1lID8gYCR7bmFtZX0uYCA6IFwiXCI7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChgJHtwcmVmaXh9eGAsIFwiMFwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGAke3ByZWZpeH15YCwgXCIwXCIpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzSHRtbEVsZW1lbnQodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBDYW5ub3Qgc3VibWl0IGVsZW1lbnQgdGhhdCBpcyBub3QgPGZvcm0+LCA8YnV0dG9uPiwgb3IgPGlucHV0IHR5cGU9XCJzdWJtaXR8aW1hZ2VcIj5gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2QgPSBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG51bGw7XG4gICAgZW5jVHlwZSA9IGRlZmF1bHRFbmNUeXBlO1xuICAgIGJvZHkgPSB0YXJnZXQ7XG4gIH1cbiAgaWYgKGZvcm1EYXRhICYmIGVuY1R5cGUgPT09IFwidGV4dC9wbGFpblwiKSB7XG4gICAgYm9keSA9IGZvcm1EYXRhO1xuICAgIGZvcm1EYXRhID0gdm9pZCAwO1xuICB9XG4gIHJldHVybiB7IGFjdGlvbiwgbWV0aG9kOiBtZXRob2QudG9Mb3dlckNhc2UoKSwgZW5jVHlwZSwgZm9ybURhdGEsIGJvZHkgfTtcbn1cblxuLy8gbGliL2RvbS9zc3Ivc2luZ2xlLWZldGNoLnRzeFxuaW1wb3J0ICogYXMgUmVhY3Q0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyB2ZW5kb3IvdHVyYm8tc3RyZWFtLXYyL3V0aWxzLnRzXG52YXIgSE9MRSA9IC0xO1xudmFyIE5BTiA9IC0yO1xudmFyIE5FR0FUSVZFX0lORklOSVRZID0gLTM7XG52YXIgTkVHQVRJVkVfWkVSTyA9IC00O1xudmFyIE5VTEwgPSAtNTtcbnZhciBQT1NJVElWRV9JTkZJTklUWSA9IC02O1xudmFyIFVOREVGSU5FRCA9IC03O1xudmFyIFRZUEVfQklHSU5UID0gXCJCXCI7XG52YXIgVFlQRV9EQVRFID0gXCJEXCI7XG52YXIgVFlQRV9FUlJPUiA9IFwiRVwiO1xudmFyIFRZUEVfTUFQID0gXCJNXCI7XG52YXIgVFlQRV9OVUxMX09CSkVDVCA9IFwiTlwiO1xudmFyIFRZUEVfUFJPTUlTRSA9IFwiUFwiO1xudmFyIFRZUEVfUkVHRVhQID0gXCJSXCI7XG52YXIgVFlQRV9TRVQgPSBcIlNcIjtcbnZhciBUWVBFX1NZTUJPTCA9IFwiWVwiO1xudmFyIFRZUEVfVVJMID0gXCJVXCI7XG52YXIgVFlQRV9QUkVWSU9VU19SRVNPTFZFRCA9IFwiWlwiO1xudmFyIERlZmVycmVkMiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlTGluZVNwbGl0dGluZ1RyYW5zZm9ybSgpIHtcbiAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICBsZXQgbGVmdG92ZXIgPSBcIlwiO1xuICByZXR1cm4gbmV3IFRyYW5zZm9ybVN0cmVhbSh7XG4gICAgdHJhbnNmb3JtKGNodW5rLCBjb250cm9sbGVyKSB7XG4gICAgICBjb25zdCBzdHIgPSBkZWNvZGVyLmRlY29kZShjaHVuaywgeyBzdHJlYW06IHRydWUgfSk7XG4gICAgICBjb25zdCBwYXJ0cyA9IChsZWZ0b3ZlciArIHN0cikuc3BsaXQoXCJcXG5cIik7XG4gICAgICBsZWZ0b3ZlciA9IHBhcnRzLnBvcCgpIHx8IFwiXCI7XG4gICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKHBhcnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmx1c2goY29udHJvbGxlcikge1xuICAgICAgaWYgKGxlZnRvdmVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShsZWZ0b3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8gdmVuZG9yL3R1cmJvLXN0cmVhbS12Mi9mbGF0dGVuLnRzXG5mdW5jdGlvbiBmbGF0dGVuKGlucHV0KSB7XG4gIGNvbnN0IHsgaW5kaWNlcyB9ID0gdGhpcztcbiAgY29uc3QgZXhpc3RpbmcgPSBpbmRpY2VzLmdldChpbnB1dCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuIFtleGlzdGluZ107XG4gIGlmIChpbnB1dCA9PT0gdm9pZCAwKSByZXR1cm4gVU5ERUZJTkVEO1xuICBpZiAoaW5wdXQgPT09IG51bGwpIHJldHVybiBOVUxMO1xuICBpZiAoTnVtYmVyLmlzTmFOKGlucHV0KSkgcmV0dXJuIE5BTjtcbiAgaWYgKGlucHV0ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHJldHVybiBQT1NJVElWRV9JTkZJTklUWTtcbiAgaWYgKGlucHV0ID09PSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpIHJldHVybiBORUdBVElWRV9JTkZJTklUWTtcbiAgaWYgKGlucHV0ID09PSAwICYmIDEgLyBpbnB1dCA8IDApIHJldHVybiBORUdBVElWRV9aRVJPO1xuICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgaW5kaWNlcy5zZXQoaW5wdXQsIGluZGV4KTtcbiAgc3RyaW5naWZ5LmNhbGwodGhpcywgaW5wdXQsIGluZGV4KTtcbiAgcmV0dXJuIGluZGV4O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGlucHV0LCBpbmRleCkge1xuICBjb25zdCB7IGRlZmVycmVkLCBwbHVnaW5zLCBwb3N0UGx1Z2lucyB9ID0gdGhpcztcbiAgY29uc3Qgc3RyID0gdGhpcy5zdHJpbmdpZmllZDtcbiAgY29uc3Qgc3RhY2sgPSBbW2lucHV0LCBpbmRleF1dO1xuICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IFtpbnB1dDIsIGluZGV4Ml0gPSBzdGFjay5wb3AoKTtcbiAgICBjb25zdCBwYXJ0c0Zvck9iaiA9IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiBgXCJfJHtmbGF0dGVuLmNhbGwodGhpcywgayl9XCI6JHtmbGF0dGVuLmNhbGwodGhpcywgb2JqW2tdKX1gKS5qb2luKFwiLFwiKTtcbiAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgIHN3aXRjaCAodHlwZW9mIGlucHV0Mikge1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgc3RyW2luZGV4Ml0gPSBKU09OLnN0cmluZ2lmeShpbnB1dDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX0JJR0lOVH1cIixcIiR7aW5wdXQyfVwiXWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN5bWJvbFwiOiB7XG4gICAgICAgIGNvbnN0IGtleUZvciA9IFN5bWJvbC5rZXlGb3IoaW5wdXQyKTtcbiAgICAgICAgaWYgKCFrZXlGb3IpIHtcbiAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiQ2Fubm90IGVuY29kZSBzeW1ib2wgdW5sZXNzIGNyZWF0ZWQgd2l0aCBTeW1ib2wuZm9yKClcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX1NZTUJPTH1cIiwke0pTT04uc3RyaW5naWZ5KGtleUZvcil9XWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwib2JqZWN0XCI6IHtcbiAgICAgICAgaWYgKCFpbnB1dDIpIHtcbiAgICAgICAgICBzdHJbaW5kZXgyXSA9IGAke05VTEx9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShpbnB1dDIpO1xuICAgICAgICBsZXQgcGx1Z2luSGFuZGxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIWlzQXJyYXkgJiYgcGx1Z2lucykge1xuICAgICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpblJlc3VsdCA9IHBsdWdpbihpbnB1dDIpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGx1Z2luUmVzdWx0KSkge1xuICAgICAgICAgICAgICBwbHVnaW5IYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc3QgW3BsdWdpbklkZW50aWZpZXIsIC4uLnJlc3RdID0gcGx1Z2luUmVzdWx0O1xuICAgICAgICAgICAgICBzdHJbaW5kZXgyXSA9IGBbJHtKU09OLnN0cmluZ2lmeShwbHVnaW5JZGVudGlmaWVyKX1gO1xuICAgICAgICAgICAgICBpZiAocmVzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc3RyW2luZGV4Ml0gKz0gYCwke3Jlc3QubWFwKCh2KSA9PiBmbGF0dGVuLmNhbGwodGhpcywgdikpLmpvaW4oXCIsXCIpfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RyW2luZGV4Ml0gKz0gXCJdXCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsdWdpbkhhbmRsZWQpIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gaXNBcnJheSA/IFwiW1wiIDogXCJ7XCI7XG4gICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICByZXN1bHQgKz0gKGkgPyBcIixcIiA6IFwiXCIpICsgKGkgaW4gaW5wdXQyID8gZmxhdHRlbi5jYWxsKHRoaXMsIGlucHV0MltpXSkgOiBIT0xFKTtcbiAgICAgICAgICAgIHN0cltpbmRleDJdID0gYCR7cmVzdWx0fV1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQyIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBpbnB1dDIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX0RBVEV9XCIsJHtOdW1iZXIuaXNOYU4oZGF0ZVRpbWUpID8gSlNPTi5zdHJpbmdpZnkoXCJpbnZhbGlkXCIpIDogZGF0ZVRpbWV9XWA7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dDIgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFtcIiR7VFlQRV9VUkx9XCIsJHtKU09OLnN0cmluZ2lmeShpbnB1dDIuaHJlZil9XWA7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dDIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFtcIiR7VFlQRV9SRUdFWFB9XCIsJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgaW5wdXQyLnNvdXJjZVxuICAgICAgICAgICAgKX0sJHtKU09OLnN0cmluZ2lmeShpbnB1dDIuZmxhZ3MpfV1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQyIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFtcIiR7VFlQRV9TRVR9XCIsJHtbLi4uaW5wdXQyXS5tYXAoKHZhbCkgPT4gZmxhdHRlbi5jYWxsKHRoaXMsIHZhbCkpLmpvaW4oXCIsXCIpfV1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX1NFVH1cIl1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQyIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFtcIiR7VFlQRV9NQVB9XCIsJHtbLi4uaW5wdXQyXS5mbGF0TWFwKChbaywgdl0pID0+IFtcbiAgICAgICAgICAgICAgICBmbGF0dGVuLmNhbGwodGhpcywgayksXG4gICAgICAgICAgICAgICAgZmxhdHRlbi5jYWxsKHRoaXMsIHYpXG4gICAgICAgICAgICAgIF0pLmpvaW4oXCIsXCIpfV1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX01BUH1cIl1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQyIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX1BST01JU0V9XCIsJHtpbmRleDJ9XWA7XG4gICAgICAgICAgICBkZWZlcnJlZFtpbmRleDJdID0gaW5wdXQyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFtcIiR7VFlQRV9FUlJPUn1cIiwke0pTT04uc3RyaW5naWZ5KGlucHV0Mi5tZXNzYWdlKX1gO1xuICAgICAgICAgICAgaWYgKGlucHV0Mi5uYW1lICE9PSBcIkVycm9yXCIpIHtcbiAgICAgICAgICAgICAgc3RyW2luZGV4Ml0gKz0gYCwke0pTT04uc3RyaW5naWZ5KGlucHV0Mi5uYW1lKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyW2luZGV4Ml0gKz0gXCJdXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5wdXQyKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgW1wiJHtUWVBFX05VTExfT0JKRUNUfVwiLHske3BhcnRzRm9yT2JqKGlucHV0Mil9fV1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdDIoaW5wdXQyKSkge1xuICAgICAgICAgICAgc3RyW2luZGV4Ml0gPSBgeyR7cGFydHNGb3JPYmooaW5wdXQyKX19YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZW5jb2RlIG9iamVjdCB3aXRoIHByb3RvdHlwZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGlucHV0Mik7XG4gICAgICAgIGxldCBwbHVnaW5IYW5kbGVkID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNBcnJheSAmJiBwbHVnaW5zKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luUmVzdWx0ID0gcGx1Z2luKGlucHV0Mik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwbHVnaW5SZXN1bHQpKSB7XG4gICAgICAgICAgICAgIHBsdWdpbkhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBbcGx1Z2luSWRlbnRpZmllciwgLi4ucmVzdF0gPSBwbHVnaW5SZXN1bHQ7XG4gICAgICAgICAgICAgIHN0cltpbmRleDJdID0gYFske0pTT04uc3RyaW5naWZ5KHBsdWdpbklkZW50aWZpZXIpfWA7XG4gICAgICAgICAgICAgIGlmIChyZXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzdHJbaW5kZXgyXSArPSBgLCR7cmVzdC5tYXAoKHYpID0+IGZsYXR0ZW4uY2FsbCh0aGlzLCB2KSkuam9pbihcIixcIil9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdHJbaW5kZXgyXSArPSBcIl1cIjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcGx1Z2luSGFuZGxlZCkge1xuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFwiQ2Fubm90IGVuY29kZSBmdW5jdGlvbiBvciB1bmV4cGVjdGVkIHR5cGVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsZXQgcGx1Z2luSGFuZGxlZCA9IGZhbHNlO1xuICAgICAgaWYgKHBvc3RQbHVnaW5zKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBvc3RQbHVnaW5zKSB7XG4gICAgICAgICAgY29uc3QgcGx1Z2luUmVzdWx0ID0gcGx1Z2luKGlucHV0Mik7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGx1Z2luUmVzdWx0KSkge1xuICAgICAgICAgICAgcGx1Z2luSGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBbcGx1Z2luSWRlbnRpZmllciwgLi4ucmVzdF0gPSBwbHVnaW5SZXN1bHQ7XG4gICAgICAgICAgICBzdHJbaW5kZXgyXSA9IGBbJHtKU09OLnN0cmluZ2lmeShwbHVnaW5JZGVudGlmaWVyKX1gO1xuICAgICAgICAgICAgaWYgKHJlc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBzdHJbaW5kZXgyXSArPSBgLCR7cmVzdC5tYXAoKHYpID0+IGZsYXR0ZW4uY2FsbCh0aGlzLCB2KSkuam9pbihcIixcIil9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cltpbmRleDJdICs9IFwiXVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXBsdWdpbkhhbmRsZWQpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG52YXIgb2JqZWN0UHJvdG9OYW1lczIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QucHJvdG90eXBlKS5zb3J0KCkuam9pbihcIlxcMFwiKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QyKHRoaW5nKSB7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvID09PSBudWxsIHx8IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKS5zb3J0KCkuam9pbihcIlxcMFwiKSA9PT0gb2JqZWN0UHJvdG9OYW1lczI7XG59XG5cbi8vIHZlbmRvci90dXJiby1zdHJlYW0tdjIvdW5mbGF0dGVuLnRzXG52YXIgZ2xvYmFsT2JqID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHZvaWQgMDtcbmZ1bmN0aW9uIHVuZmxhdHRlbihwYXJzZWQpIHtcbiAgY29uc3QgeyBoeWRyYXRlZCwgdmFsdWVzIH0gPSB0aGlzO1xuICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGh5ZHJhdGUuY2FsbCh0aGlzLCBwYXJzZWQpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGFyc2VkKSB8fCAhcGFyc2VkLmxlbmd0aCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCk7XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSB2YWx1ZXMubGVuZ3RoO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIHBhcnNlZCkge1xuICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfVxuICBoeWRyYXRlZC5sZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuICByZXR1cm4gaHlkcmF0ZS5jYWxsKHRoaXMsIHN0YXJ0SW5kZXgpO1xufVxuZnVuY3Rpb24gaHlkcmF0ZShpbmRleCkge1xuICBjb25zdCB7IGh5ZHJhdGVkLCB2YWx1ZXMsIGRlZmVycmVkLCBwbHVnaW5zIH0gPSB0aGlzO1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBzdGFjayA9IFtcbiAgICBbXG4gICAgICBpbmRleCxcbiAgICAgICh2KSA9PiB7XG4gICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICB9XG4gICAgXVxuICBdO1xuICBsZXQgcG9zdFJ1biA9IFtdO1xuICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IFtpbmRleDIsIHNldF0gPSBzdGFjay5wb3AoKTtcbiAgICBzd2l0Y2ggKGluZGV4Mikge1xuICAgICAgY2FzZSBVTkRFRklORUQ6XG4gICAgICAgIHNldCh2b2lkIDApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgTlVMTDpcbiAgICAgICAgc2V0KG51bGwpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgTkFOOlxuICAgICAgICBzZXQoTmFOKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICBjYXNlIFBPU0lUSVZFX0lORklOSVRZOlxuICAgICAgICBzZXQoSW5maW5pdHkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgTkVHQVRJVkVfSU5GSU5JVFk6XG4gICAgICAgIHNldCgtSW5maW5pdHkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgTkVHQVRJVkVfWkVSTzpcbiAgICAgICAgc2V0KC0wKTtcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChoeWRyYXRlZFtpbmRleDJdKSB7XG4gICAgICBzZXQoaHlkcmF0ZWRbaW5kZXgyXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXgyXTtcbiAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgaHlkcmF0ZWRbaW5kZXgyXSA9IHZhbHVlO1xuICAgICAgc2V0KHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgW3R5cGUsIGIsIGNdID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgVFlQRV9EQVRFOlxuICAgICAgICAgICAgc2V0KGh5ZHJhdGVkW2luZGV4Ml0gPSBuZXcgRGF0ZShiKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBjYXNlIFRZUEVfVVJMOlxuICAgICAgICAgICAgc2V0KGh5ZHJhdGVkW2luZGV4Ml0gPSBuZXcgVVJMKGIpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNhc2UgVFlQRV9CSUdJTlQ6XG4gICAgICAgICAgICBzZXQoaHlkcmF0ZWRbaW5kZXgyXSA9IEJpZ0ludChiKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBjYXNlIFRZUEVfUkVHRVhQOlxuICAgICAgICAgICAgc2V0KGh5ZHJhdGVkW2luZGV4Ml0gPSBuZXcgUmVnRXhwKGIsIGMpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNhc2UgVFlQRV9TWU1CT0w6XG4gICAgICAgICAgICBzZXQoaHlkcmF0ZWRbaW5kZXgyXSA9IFN5bWJvbC5mb3IoYikpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgY2FzZSBUWVBFX1NFVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgICBoeWRyYXRlZFtpbmRleDJdID0gbmV3U2V0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZhbHVlLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goW1xuICAgICAgICAgICAgICAgIHZhbHVlW2ldLFxuICAgICAgICAgICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICBuZXdTZXQuYWRkKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBzZXQobmV3U2V0KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNhc2UgVFlQRV9NQVA6XG4gICAgICAgICAgICBjb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICAgICAgaHlkcmF0ZWRbaW5kZXgyXSA9IG1hcDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2YWx1ZS5sZW5ndGggLSAyOyBpID4gMDsgaSAtPSAyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChbXG4gICAgICAgICAgICAgICAgdmFsdWVbaSArIDFdLFxuICAgICAgICAgICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICByWzFdID0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKFtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpXSxcbiAgICAgICAgICAgICAgICAoaykgPT4ge1xuICAgICAgICAgICAgICAgICAgclswXSA9IGs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgcG9zdFJ1bi5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KHJbMF0sIHJbMV0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldChtYXApO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgY2FzZSBUWVBFX05VTExfT0JKRUNUOlxuICAgICAgICAgICAgY29uc3Qgb2JqID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBoeWRyYXRlZFtpbmRleDJdID0gb2JqO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYikucmV2ZXJzZSgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChbXG4gICAgICAgICAgICAgICAgYltrZXldLFxuICAgICAgICAgICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICByWzFdID0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKFtcbiAgICAgICAgICAgICAgICBOdW1iZXIoa2V5LnNsaWNlKDEpKSxcbiAgICAgICAgICAgICAgICAoaykgPT4ge1xuICAgICAgICAgICAgICAgICAgclswXSA9IGs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgcG9zdFJ1bi5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpbclswXV0gPSByWzFdO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldChvYmopO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgY2FzZSBUWVBFX1BST01JU0U6XG4gICAgICAgICAgICBpZiAoaHlkcmF0ZWRbYl0pIHtcbiAgICAgICAgICAgICAgc2V0KGh5ZHJhdGVkW2luZGV4Ml0gPSBoeWRyYXRlZFtiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBkID0gbmV3IERlZmVycmVkMigpO1xuICAgICAgICAgICAgICBkZWZlcnJlZFtiXSA9IGQ7XG4gICAgICAgICAgICAgIHNldChoeWRyYXRlZFtpbmRleDJdID0gZC5wcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGNhc2UgVFlQRV9FUlJPUjpcbiAgICAgICAgICAgIGNvbnN0IFssIG1lc3NhZ2UsIGVycm9yVHlwZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGVycm9yVHlwZSAmJiBnbG9iYWxPYmogJiYgZ2xvYmFsT2JqW2Vycm9yVHlwZV0gPyBuZXcgZ2xvYmFsT2JqW2Vycm9yVHlwZV0obWVzc2FnZSkgOiBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICBoeWRyYXRlZFtpbmRleDJdID0gZXJyb3I7XG4gICAgICAgICAgICBzZXQoZXJyb3IpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgY2FzZSBUWVBFX1BSRVZJT1VTX1JFU09MVkVEOlxuICAgICAgICAgICAgc2V0KGh5ZHJhdGVkW2luZGV4Ml0gPSBoeWRyYXRlZFtiXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGx1Z2lucykpIHtcbiAgICAgICAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAgICAgICBjb25zdCB2YWxzID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB2YWxzW2ldO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goW1xuICAgICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICAgICh2MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByW2ldID0gdjI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcG9zdFJ1bi5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQyID0gcGx1Z2luKHZhbHVlWzBdLCAuLi5yKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldChoeWRyYXRlZFtpbmRleDJdID0gcmVzdWx0Mi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBoeWRyYXRlZFtpbmRleDJdID0gYXJyYXk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBuID0gdmFsdWVbaV07XG4gICAgICAgICAgaWYgKG4gIT09IEhPTEUpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goW1xuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICAodikgPT4ge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gdjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldChhcnJheSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvYmplY3QgPSB7fTtcbiAgICAgIGh5ZHJhdGVkW2luZGV4Ml0gPSBvYmplY3Q7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkucmV2ZXJzZSgpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgICAgc3RhY2sucHVzaChbXG4gICAgICAgICAgdmFsdWVba2V5XSxcbiAgICAgICAgICAodikgPT4ge1xuICAgICAgICAgICAgclsxXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgICAgc3RhY2sucHVzaChbXG4gICAgICAgICAgTnVtYmVyKGtleS5zbGljZSgxKSksXG4gICAgICAgICAgKGspID0+IHtcbiAgICAgICAgICAgIHJbMF0gPSBrO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICAgIHBvc3RSdW4ucHVzaCgoKSA9PiB7XG4gICAgICAgICAgb2JqZWN0W3JbMF1dID0gclsxXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXQob2JqZWN0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAocG9zdFJ1bi5sZW5ndGggPiAwKSB7XG4gICAgcG9zdFJ1bi5wb3AoKSgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHZlbmRvci90dXJiby1zdHJlYW0tdjIvdHVyYm8tc3RyZWFtLnRzXG5hc3luYyBmdW5jdGlvbiBkZWNvZGUocmVhZGFibGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBwbHVnaW5zIH0gPSBvcHRpb25zID8/IHt9O1xuICBjb25zdCBkb25lID0gbmV3IERlZmVycmVkMigpO1xuICBjb25zdCByZWFkZXIgPSByZWFkYWJsZS5waXBlVGhyb3VnaChjcmVhdGVMaW5lU3BsaXR0aW5nVHJhbnNmb3JtKCkpLmdldFJlYWRlcigpO1xuICBjb25zdCBkZWNvZGVyID0ge1xuICAgIHZhbHVlczogW10sXG4gICAgaHlkcmF0ZWQ6IFtdLFxuICAgIGRlZmVycmVkOiB7fSxcbiAgICBwbHVnaW5zXG4gIH07XG4gIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBkZWNvZGVJbml0aWFsLmNhbGwoZGVjb2RlciwgcmVhZGVyKTtcbiAgbGV0IGRvbmVQcm9taXNlID0gZG9uZS5wcm9taXNlO1xuICBpZiAoZGVjb2RlZC5kb25lKSB7XG4gICAgZG9uZS5yZXNvbHZlKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9uZVByb21pc2UgPSBkZWNvZGVEZWZlcnJlZC5jYWxsKGRlY29kZXIsIHJlYWRlcikudGhlbihkb25lLnJlc29sdmUpLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgIGZvciAoY29uc3QgZGVmZXJyZWQgb2YgT2JqZWN0LnZhbHVlcyhkZWNvZGVyLmRlZmVycmVkKSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICAgIH1cbiAgICAgIGRvbmUucmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb25lOiBkb25lUHJvbWlzZS50aGVuKCgpID0+IHJlYWRlci5jbG9zZWQpLFxuICAgIHZhbHVlOiBkZWNvZGVkLnZhbHVlXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiBkZWNvZGVJbml0aWFsKHJlYWRlcikge1xuICBjb25zdCByZWFkID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgaWYgKCFyZWFkLnZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCk7XG4gIH1cbiAgbGV0IGxpbmU7XG4gIHRyeSB7XG4gICAgbGluZSA9IEpTT04ucGFyc2UocmVhZC52YWx1ZSk7XG4gIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9uZTogcmVhZC5kb25lLFxuICAgIHZhbHVlOiB1bmZsYXR0ZW4uY2FsbCh0aGlzLCBsaW5lKVxuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlRGVmZXJyZWQocmVhZGVyKSB7XG4gIGxldCByZWFkID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgd2hpbGUgKCFyZWFkLmRvbmUpIHtcbiAgICBpZiAoIXJlYWQudmFsdWUpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGxpbmUgPSByZWFkLnZhbHVlO1xuICAgIHN3aXRjaCAobGluZVswXSkge1xuICAgICAgY2FzZSBUWVBFX1BST01JU0U6IHtcbiAgICAgICAgY29uc3QgY29sb25JbmRleCA9IGxpbmUuaW5kZXhPZihcIjpcIik7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkSWQgPSBOdW1iZXIobGluZS5zbGljZSgxLCBjb2xvbkluZGV4KSk7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5kZWZlcnJlZFtkZWZlcnJlZElkXTtcbiAgICAgICAgaWYgKCFkZWZlcnJlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGVmZXJyZWQgSUQgJHtkZWZlcnJlZElkfSBub3QgZm91bmQgaW4gc3RyZWFtYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZURhdGEgPSBsaW5lLnNsaWNlKGNvbG9uSW5kZXggKyAxKTtcbiAgICAgICAgbGV0IGpzb25MaW5lO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGpzb25MaW5lID0gSlNPTi5wYXJzZShsaW5lRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdW5mbGF0dGVuLmNhbGwodGhpcywganNvbkxpbmUpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFRZUEVfRVJST1I6IHtcbiAgICAgICAgY29uc3QgY29sb25JbmRleCA9IGxpbmUuaW5kZXhPZihcIjpcIik7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkSWQgPSBOdW1iZXIobGluZS5zbGljZSgxLCBjb2xvbkluZGV4KSk7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5kZWZlcnJlZFtkZWZlcnJlZElkXTtcbiAgICAgICAgaWYgKCFkZWZlcnJlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGVmZXJyZWQgSUQgJHtkZWZlcnJlZElkfSBub3QgZm91bmQgaW4gc3RyZWFtYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZURhdGEgPSBsaW5lLnNsaWNlKGNvbG9uSW5kZXggKyAxKTtcbiAgICAgICAgbGV0IGpzb25MaW5lO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGpzb25MaW5lID0gSlNPTi5wYXJzZShsaW5lRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdW5mbGF0dGVuLmNhbGwodGhpcywganNvbkxpbmUpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgIH1cbiAgICByZWFkID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZW5jb2RlKGlucHV0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgcGx1Z2lucywgcG9zdFBsdWdpbnMsIHNpZ25hbCB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgY29uc3QgZW5jb2RlciA9IHtcbiAgICBkZWZlcnJlZDoge30sXG4gICAgaW5kZXg6IDAsXG4gICAgaW5kaWNlczogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICBzdHJpbmdpZmllZDogW10sXG4gICAgcGx1Z2lucyxcbiAgICBwb3N0UGx1Z2lucyxcbiAgICBzaWduYWxcbiAgfTtcbiAgY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgbGV0IGxhc3RTZW50SW5kZXggPSAwO1xuICBjb25zdCByZWFkYWJsZSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgYXN5bmMgc3RhcnQoY29udHJvbGxlcikge1xuICAgICAgY29uc3QgaWQgPSBmbGF0dGVuLmNhbGwoZW5jb2RlciwgaW5wdXQpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlblwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZCA8IDApIHtcbiAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKHRleHRFbmNvZGVyLmVuY29kZShgJHtpZH1cbmApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShcbiAgICAgICAgICB0ZXh0RW5jb2Rlci5lbmNvZGUoYFske2VuY29kZXIuc3RyaW5naWZpZWQuam9pbihcIixcIil9XVxuYClcbiAgICAgICAgKTtcbiAgICAgICAgbGFzdFNlbnRJbmRleCA9IGVuY29kZXIuc3RyaW5naWZpZWQubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlZW5Qcm9taXNlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVuY29kZXIuZGVmZXJyZWQpLmxlbmd0aCkge1xuICAgICAgICBsZXQgcmFjZURvbmU7XG4gICAgICAgIGNvbnN0IHJhY2VQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHJhY2VEb25lID0gcmVzb2x2ZTtcbiAgICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgICBjb25zdCByZWplY3RQcm9taXNlID0gKCkgPT4gcmVqZWN0KHNpZ25hbC5yZWFzb24gfHwgbmV3IEVycm9yKFwiU2lnbmFsIHdhcyBhYm9ydGVkLlwiKSk7XG4gICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgcmVqZWN0UHJvbWlzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3RQcm9taXNlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlIChPYmplY3Qua2V5cyhlbmNvZGVyLmRlZmVycmVkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBbZGVmZXJyZWRJZCwgZGVmZXJyZWRdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgICAgZW5jb2Rlci5kZWZlcnJlZFxuICAgICAgICAgICkpIHtcbiAgICAgICAgICAgIGlmIChzZWVuUHJvbWlzZXMuaGFzKGRlZmVycmVkKSkgY29udGludWU7XG4gICAgICAgICAgICBzZWVuUHJvbWlzZXMuYWRkKFxuICAgICAgICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQXNzaWduSW5FeHByZXNzaW9uczogPGV4cGxhbmF0aW9uPlxuICAgICAgICAgICAgICBlbmNvZGVyLmRlZmVycmVkW051bWJlcihkZWZlcnJlZElkKV0gPSBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgICAgIHJhY2VQcm9taXNlLFxuICAgICAgICAgICAgICAgIGRlZmVycmVkXG4gICAgICAgICAgICAgIF0pLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc29sdmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpZDIgPSBmbGF0dGVuLmNhbGwoZW5jb2RlciwgcmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXIuZW5jb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7VFlQRV9QUk9NSVNFfSR7ZGVmZXJyZWRJZH06W1tcIiR7VFlQRV9QUkVWSU9VU19SRVNPTFZFRH1cIiwke2lkMlswXX1dXVxuYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2Rlci5pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBsYXN0U2VudEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkMiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRFbmNvZGVyLmVuY29kZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke1RZUEVfUFJPTUlTRX0ke2RlZmVycmVkSWR9OiR7aWQyfVxuYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGVuY29kZXIuc3RyaW5naWZpZWQuc2xpY2UobGFzdFNlbnRJbmRleCArIDEpLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXIuZW5jb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7VFlQRV9QUk9NSVNFfSR7ZGVmZXJyZWRJZH06WyR7dmFsdWVzfV1cbmBcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RTZW50SW5kZXggPSBlbmNvZGVyLnN0cmluZ2lmaWVkLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXJlYXNvbiB8fCB0eXBlb2YgcmVhc29uICE9PSBcIm9iamVjdFwiIHx8ICEocmVhc29uIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IG5ldyBFcnJvcihcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBpZDIgPSBmbGF0dGVuLmNhbGwoZW5jb2RlciwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRFbmNvZGVyLmVuY29kZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke1RZUEVfRVJST1J9JHtkZWZlcnJlZElkfTpbW1wiJHtUWVBFX1BSRVZJT1VTX1JFU09MVkVEfVwiLCR7aWQyWzBdfV1dXG5gXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVyLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RTZW50SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQyIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXIuZW5jb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7VFlQRV9FUlJPUn0ke2RlZmVycmVkSWR9OiR7aWQyfVxuYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGVuY29kZXIuc3RyaW5naWZpZWQuc2xpY2UobGFzdFNlbnRJbmRleCArIDEpLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXIuZW5jb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7VFlQRV9FUlJPUn0ke2RlZmVycmVkSWR9Olske3ZhbHVlc31dXG5gXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsYXN0U2VudEluZGV4ID0gZW5jb2Rlci5zdHJpbmdpZmllZC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZW5jb2Rlci5kZWZlcnJlZFtOdW1iZXIoZGVmZXJyZWRJZCldO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKE9iamVjdC52YWx1ZXMoZW5jb2Rlci5kZWZlcnJlZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJhY2VEb25lKCk7XG4gICAgICB9XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGVuY29kZXIuZGVmZXJyZWQpKTtcbiAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVhZGFibGU7XG59XG5cbi8vIGxpYi9kb20vc3NyL2RhdGEudHNcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RJbml0KHJlcXVlc3QpIHtcbiAgbGV0IGluaXQgPSB7IHNpZ25hbDogcmVxdWVzdC5zaWduYWwgfTtcbiAgaWYgKHJlcXVlc3QubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgaW5pdC5tZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgY29udGVudFR5cGUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiAvXFxiYXBwbGljYXRpb25cXC9qc29uXFxiLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgaW5pdC5oZWFkZXJzID0geyBcIkNvbnRlbnQtVHlwZVwiOiBjb250ZW50VHlwZSB9O1xuICAgICAgaW5pdC5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYXdhaXQgcmVxdWVzdC5qc29uKCkpO1xuICAgIH0gZWxzZSBpZiAoY29udGVudFR5cGUgJiYgL1xcYnRleHRcXC9wbGFpblxcYi8udGVzdChjb250ZW50VHlwZSkpIHtcbiAgICAgIGluaXQuaGVhZGVycyA9IHsgXCJDb250ZW50LVR5cGVcIjogY29udGVudFR5cGUgfTtcbiAgICAgIGluaXQuYm9keSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuICAgIH0gZWxzZSBpZiAoY29udGVudFR5cGUgJiYgL1xcYmFwcGxpY2F0aW9uXFwveC13d3ctZm9ybS11cmxlbmNvZGVkXFxiLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgaW5pdC5ib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhd2FpdCByZXF1ZXN0LnRleHQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXQuYm9keSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluaXQ7XG59XG5cbi8vIGxpYi9kb20vc3NyL21hcmt1cC50c1xudmFyIEVTQ0FQRV9MT09LVVAgPSB7XG4gIFwiJlwiOiBcIlxcXFx1MDAyNlwiLFxuICBcIj5cIjogXCJcXFxcdTAwM2VcIixcbiAgXCI8XCI6IFwiXFxcXHUwMDNjXCIsXG4gIFwiXFx1MjAyOFwiOiBcIlxcXFx1MjAyOFwiLFxuICBcIlxcdTIwMjlcIjogXCJcXFxcdTIwMjlcIlxufTtcbnZhciBFU0NBUEVfUkVHRVggPSAvWyY+PFxcdTIwMjhcXHUyMDI5XS9nO1xuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCAobWF0Y2gpID0+IEVTQ0FQRV9MT09LVVBbbWF0Y2hdKTtcbn1cblxuLy8gbGliL2RvbS9zc3IvaW52YXJpYW50LnRzXG5mdW5jdGlvbiBpbnZhcmlhbnQyKHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5cbi8vIGxpYi9kb20vc3NyL3NpbmdsZS1mZXRjaC50c3hcbnZhciBTaW5nbGVGZXRjaFJlZGlyZWN0U3ltYm9sID0gU3ltYm9sKFwiU2luZ2xlRmV0Y2hSZWRpcmVjdFwiKTtcbnZhciBTaW5nbGVGZXRjaE5vUmVzdWx0RXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbn07XG52YXIgU0lOR0xFX0ZFVENIX1JFRElSRUNUX1NUQVRVUyA9IDIwMjtcbnZhciBOT19CT0RZX1NUQVRVU19DT0RFUyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsxMDAsIDEwMSwgMjA0LCAyMDVdKTtcbmZ1bmN0aW9uIFN0cmVhbVRyYW5zZmVyKHtcbiAgY29udGV4dCxcbiAgaWRlbnRpZmllcixcbiAgcmVhZGVyLFxuICB0ZXh0RGVjb2RlcixcbiAgbm9uY2Vcbn0pIHtcbiAgaWYgKCFjb250ZXh0LnJlbmRlck1ldGEgfHwgIWNvbnRleHQucmVuZGVyTWV0YS5kaWRSZW5kZXJTY3JpcHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFjb250ZXh0LnJlbmRlck1ldGEuc3RyZWFtQ2FjaGUpIHtcbiAgICBjb250ZXh0LnJlbmRlck1ldGEuc3RyZWFtQ2FjaGUgPSB7fTtcbiAgfVxuICBsZXQgeyBzdHJlYW1DYWNoZSB9ID0gY29udGV4dC5yZW5kZXJNZXRhO1xuICBsZXQgcHJvbWlzZSA9IHN0cmVhbUNhY2hlW2lkZW50aWZpZXJdO1xuICBpZiAoIXByb21pc2UpIHtcbiAgICBwcm9taXNlID0gc3RyZWFtQ2FjaGVbaWRlbnRpZmllcl0gPSByZWFkZXIucmVhZCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgc3RyZWFtQ2FjaGVbaWRlbnRpZmllcl0ucmVzdWx0ID0ge1xuICAgICAgICBkb25lOiByZXN1bHQuZG9uZSxcbiAgICAgICAgdmFsdWU6IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICB9O1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBzdHJlYW1DYWNoZVtpZGVudGlmaWVyXS5lcnJvciA9IGU7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHByb21pc2UuZXJyb3IpIHtcbiAgICB0aHJvdyBwcm9taXNlLmVycm9yO1xuICB9XG4gIGlmIChwcm9taXNlLnJlc3VsdCA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxuICBsZXQgeyBkb25lLCB2YWx1ZSB9ID0gcHJvbWlzZS5yZXN1bHQ7XG4gIGxldCBzY3JpcHRUYWcgPSB2YWx1ZSA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDQuY3JlYXRlRWxlbWVudChcbiAgICBcInNjcmlwdFwiLFxuICAgIHtcbiAgICAgIG5vbmNlLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiBgd2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0LnN0cmVhbUNvbnRyb2xsZXIuZW5xdWV1ZSgke2VzY2FwZUh0bWwoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgICl9KTtgXG4gICAgICB9XG4gICAgfVxuICApIDogbnVsbDtcbiAgaWYgKGRvbmUpIHtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0NC5jcmVhdGVFbGVtZW50KFJlYWN0NC5GcmFnbWVudCwgbnVsbCwgc2NyaXB0VGFnLCAvKiBAX19QVVJFX18gKi8gUmVhY3Q0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInNjcmlwdFwiLFxuICAgICAge1xuICAgICAgICBub25jZSxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuX19yZWFjdFJvdXRlckNvbnRleHQuc3RyZWFtQ29udHJvbGxlci5jbG9zZSgpO2BcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3Q0LmNyZWF0ZUVsZW1lbnQoUmVhY3Q0LkZyYWdtZW50LCBudWxsLCBzY3JpcHRUYWcsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDQuY3JlYXRlRWxlbWVudChSZWFjdDQuU3VzcGVuc2UsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDQuY3JlYXRlRWxlbWVudChcbiAgICAgIFN0cmVhbVRyYW5zZmVyLFxuICAgICAge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyICsgMSxcbiAgICAgICAgcmVhZGVyLFxuICAgICAgICB0ZXh0RGVjb2RlcixcbiAgICAgICAgbm9uY2VcbiAgICAgIH1cbiAgICApKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFR1cmJvU3RyZWFtU2luZ2xlRmV0Y2hEYXRhU3RyYXRlZ3koZ2V0Um91dGVyLCBtYW5pZmVzdCwgcm91dGVNb2R1bGVzLCBzc3IsIGJhc2VuYW1lKSB7XG4gIGxldCBkYXRhU3RyYXRlZ3kgPSBnZXRTaW5nbGVGZXRjaERhdGFTdHJhdGVneUltcGwoXG4gICAgZ2V0Um91dGVyLFxuICAgIChtYXRjaCkgPT4ge1xuICAgICAgbGV0IG1hbmlmZXN0Um91dGUgPSBtYW5pZmVzdC5yb3V0ZXNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgaW52YXJpYW50MihtYW5pZmVzdFJvdXRlLCBcIlJvdXRlIG5vdCBmb3VuZCBpbiBtYW5pZmVzdFwiKTtcbiAgICAgIGxldCByb3V0ZU1vZHVsZSA9IHJvdXRlTW9kdWxlc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNMb2FkZXI6IG1hbmlmZXN0Um91dGUuaGFzTG9hZGVyLFxuICAgICAgICBoYXNDbGllbnRMb2FkZXI6IG1hbmlmZXN0Um91dGUuaGFzQ2xpZW50TG9hZGVyLFxuICAgICAgICBoYXNTaG91bGRSZXZhbGlkYXRlOiBCb29sZWFuKHJvdXRlTW9kdWxlPy5zaG91bGRSZXZhbGlkYXRlKVxuICAgICAgfTtcbiAgICB9LFxuICAgIGZldGNoQW5kRGVjb2RlVmlhVHVyYm9TdHJlYW0sXG4gICAgc3NyLFxuICAgIGJhc2VuYW1lXG4gICk7XG4gIHJldHVybiBhc3luYyAoYXJncykgPT4gYXJncy5ydW5DbGllbnRNaWRkbGV3YXJlKGRhdGFTdHJhdGVneSk7XG59XG5mdW5jdGlvbiBnZXRTaW5nbGVGZXRjaERhdGFTdHJhdGVneUltcGwoZ2V0Um91dGVyLCBnZXRSb3V0ZUluZm8sIGZldGNoQW5kRGVjb2RlLCBzc3IsIGJhc2VuYW1lLCBzaG91bGRBbGxvd09wdE91dCA9ICgpID0+IHRydWUpIHtcbiAgcmV0dXJuIGFzeW5jIChhcmdzKSA9PiB7XG4gICAgbGV0IHsgcmVxdWVzdCwgbWF0Y2hlcywgZmV0Y2hlcktleSB9ID0gYXJncztcbiAgICBsZXQgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgaWYgKHJlcXVlc3QubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICByZXR1cm4gc2luZ2xlRmV0Y2hBY3Rpb25TdHJhdGVneShhcmdzLCBmZXRjaEFuZERlY29kZSwgYmFzZW5hbWUpO1xuICAgIH1cbiAgICBsZXQgZm91bmRSZXZhbGlkYXRpbmdTZXJ2ZXJMb2FkZXIgPSBtYXRjaGVzLnNvbWUoKG0pID0+IHtcbiAgICAgIGxldCB7IGhhc0xvYWRlciwgaGFzQ2xpZW50TG9hZGVyIH0gPSBnZXRSb3V0ZUluZm8obSk7XG4gICAgICByZXR1cm4gbS51bnN0YWJsZV9zaG91bGRDYWxsSGFuZGxlcigpICYmIGhhc0xvYWRlciAmJiAhaGFzQ2xpZW50TG9hZGVyO1xuICAgIH0pO1xuICAgIGlmICghc3NyICYmICFmb3VuZFJldmFsaWRhdGluZ1NlcnZlckxvYWRlcikge1xuICAgICAgcmV0dXJuIG5vblNzclN0cmF0ZWd5KGFyZ3MsIGdldFJvdXRlSW5mbywgZmV0Y2hBbmREZWNvZGUsIGJhc2VuYW1lKTtcbiAgICB9XG4gICAgaWYgKGZldGNoZXJLZXkpIHtcbiAgICAgIHJldHVybiBzaW5nbGVGZXRjaExvYWRlckZldGNoZXJTdHJhdGVneShhcmdzLCBmZXRjaEFuZERlY29kZSwgYmFzZW5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xlRmV0Y2hMb2FkZXJOYXZpZ2F0aW9uU3RyYXRlZ3koXG4gICAgICBhcmdzLFxuICAgICAgcm91dGVyLFxuICAgICAgZ2V0Um91dGVJbmZvLFxuICAgICAgZmV0Y2hBbmREZWNvZGUsXG4gICAgICBzc3IsXG4gICAgICBiYXNlbmFtZSxcbiAgICAgIHNob3VsZEFsbG93T3B0T3V0XG4gICAgKTtcbiAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHNpbmdsZUZldGNoQWN0aW9uU3RyYXRlZ3koYXJncywgZmV0Y2hBbmREZWNvZGUsIGJhc2VuYW1lKSB7XG4gIGxldCBhY3Rpb25NYXRjaCA9IGFyZ3MubWF0Y2hlcy5maW5kKChtKSA9PiBtLnVuc3RhYmxlX3Nob3VsZENhbGxIYW5kbGVyKCkpO1xuICBpbnZhcmlhbnQyKGFjdGlvbk1hdGNoLCBcIk5vIGFjdGlvbiBtYXRjaCBmb3VuZFwiKTtcbiAgbGV0IGFjdGlvblN0YXR1cyA9IHZvaWQgMDtcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IGFjdGlvbk1hdGNoLnJlc29sdmUoYXN5bmMgKGhhbmRsZXIpID0+IHtcbiAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IGhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHsgZGF0YTogZGF0YTIsIHN0YXR1cyB9ID0gYXdhaXQgZmV0Y2hBbmREZWNvZGUoYXJncywgYmFzZW5hbWUsIFtcbiAgICAgICAgYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgIF0pO1xuICAgICAgYWN0aW9uU3RhdHVzID0gc3RhdHVzO1xuICAgICAgcmV0dXJuIHVud3JhcFNpbmdsZUZldGNoUmVzdWx0KGRhdGEyLCBhY3Rpb25NYXRjaC5yb3V0ZS5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH0pO1xuICBpZiAoaXNSZXNwb25zZShyZXN1bHQucmVzdWx0KSB8fCBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQucmVzdWx0KSB8fCBpc0RhdGFXaXRoUmVzcG9uc2VJbml0KHJlc3VsdC5yZXN1bHQpKSB7XG4gICAgcmV0dXJuIHsgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0IH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiB7XG4gICAgICB0eXBlOiByZXN1bHQudHlwZSxcbiAgICAgIHJlc3VsdDogZGF0YShyZXN1bHQucmVzdWx0LCBhY3Rpb25TdGF0dXMpXG4gICAgfVxuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gbm9uU3NyU3RyYXRlZ3koYXJncywgZ2V0Um91dGVJbmZvLCBmZXRjaEFuZERlY29kZSwgYmFzZW5hbWUpIHtcbiAgbGV0IG1hdGNoZXNUb0xvYWQgPSBhcmdzLm1hdGNoZXMuZmlsdGVyKFxuICAgIChtKSA9PiBtLnVuc3RhYmxlX3Nob3VsZENhbGxIYW5kbGVyKClcbiAgKTtcbiAgbGV0IHJlc3VsdHMgPSB7fTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgbWF0Y2hlc1RvTG9hZC5tYXAoXG4gICAgICAobSkgPT4gbS5yZXNvbHZlKGFzeW5jIChoYW5kbGVyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHsgaGFzQ2xpZW50TG9hZGVyIH0gPSBnZXRSb3V0ZUluZm8obSk7XG4gICAgICAgICAgbGV0IHJvdXRlSWQgPSBtLnJvdXRlLmlkO1xuICAgICAgICAgIGxldCByZXN1bHQgPSBoYXNDbGllbnRMb2FkZXIgPyBhd2FpdCBoYW5kbGVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IGRhdGE6IGRhdGEyIH0gPSBhd2FpdCBmZXRjaEFuZERlY29kZShhcmdzLCBiYXNlbmFtZSwgW3JvdXRlSWRdKTtcbiAgICAgICAgICAgIHJldHVybiB1bndyYXBTaW5nbGVGZXRjaFJlc3VsdChkYXRhMiwgcm91dGVJZCk7XG4gICAgICAgICAgfSkgOiBhd2FpdCBoYW5kbGVyKCk7XG4gICAgICAgICAgcmVzdWx0c1ttLnJvdXRlLmlkXSA9IHsgdHlwZTogXCJkYXRhXCIsIHJlc3VsdCB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVzdWx0c1ttLnJvdXRlLmlkXSA9IHsgdHlwZTogXCJlcnJvclwiLCByZXN1bHQ6IGUgfTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gICk7XG4gIHJldHVybiByZXN1bHRzO1xufVxuYXN5bmMgZnVuY3Rpb24gc2luZ2xlRmV0Y2hMb2FkZXJOYXZpZ2F0aW9uU3RyYXRlZ3koYXJncywgcm91dGVyLCBnZXRSb3V0ZUluZm8sIGZldGNoQW5kRGVjb2RlLCBzc3IsIGJhc2VuYW1lLCBzaG91bGRBbGxvd09wdE91dCA9ICgpID0+IHRydWUpIHtcbiAgbGV0IHJvdXRlc1BhcmFtcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBmb3VuZE9wdE91dFJvdXRlID0gZmFsc2U7XG4gIGxldCByb3V0ZURmZHMgPSBhcmdzLm1hdGNoZXMubWFwKCgpID0+IGNyZWF0ZURlZmVycmVkMigpKTtcbiAgbGV0IHNpbmdsZUZldGNoRGZkID0gY3JlYXRlRGVmZXJyZWQyKCk7XG4gIGxldCByZXN1bHRzID0ge307XG4gIGxldCByZXNvbHZlUHJvbWlzZSA9IFByb21pc2UuYWxsKFxuICAgIGFyZ3MubWF0Y2hlcy5tYXAoXG4gICAgICBhc3luYyAobSwgaSkgPT4gbS5yZXNvbHZlKGFzeW5jIChoYW5kbGVyKSA9PiB7XG4gICAgICAgIHJvdXRlRGZkc1tpXS5yZXNvbHZlKCk7XG4gICAgICAgIGxldCByb3V0ZUlkID0gbS5yb3V0ZS5pZDtcbiAgICAgICAgbGV0IHsgaGFzTG9hZGVyLCBoYXNDbGllbnRMb2FkZXIsIGhhc1Nob3VsZFJldmFsaWRhdGUgfSA9IGdldFJvdXRlSW5mbyhtKTtcbiAgICAgICAgbGV0IGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlID0gIW0udW5zdGFibGVfc2hvdWxkUmV2YWxpZGF0ZUFyZ3MgfHwgbS51bnN0YWJsZV9zaG91bGRSZXZhbGlkYXRlQXJncy5hY3Rpb25TdGF0dXMgPT0gbnVsbCB8fCBtLnVuc3RhYmxlX3Nob3VsZFJldmFsaWRhdGVBcmdzLmFjdGlvblN0YXR1cyA8IDQwMDtcbiAgICAgICAgbGV0IHNob3VsZENhbGwgPSBtLnVuc3RhYmxlX3Nob3VsZENhbGxIYW5kbGVyKGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlKTtcbiAgICAgICAgaWYgKCFzaG91bGRDYWxsKSB7XG4gICAgICAgICAgZm91bmRPcHRPdXRSb3V0ZSB8fCAoZm91bmRPcHRPdXRSb3V0ZSA9IG0udW5zdGFibGVfc2hvdWxkUmV2YWxpZGF0ZUFyZ3MgIT0gbnVsbCAmJiAvLyBUaGlzIGlzIGEgcmV2YWxpZGF0aW9uLFxuICAgICAgICAgIGhhc0xvYWRlciAmJiAvLyBmb3IgYSByb3V0ZSB3aXRoIGEgc2VydmVyIGxvYWRlcixcbiAgICAgICAgICBoYXNTaG91bGRSZXZhbGlkYXRlID09PSB0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFsbG93T3B0T3V0KG0pICYmIGhhc0NsaWVudExvYWRlcikge1xuICAgICAgICAgIGlmIChoYXNMb2FkZXIpIHtcbiAgICAgICAgICAgIGZvdW5kT3B0T3V0Um91dGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgeyBkYXRhOiBkYXRhMiB9ID0gYXdhaXQgZmV0Y2hBbmREZWNvZGUoYXJncywgYmFzZW5hbWUsIFtyb3V0ZUlkXSk7XG4gICAgICAgICAgICAgIHJldHVybiB1bndyYXBTaW5nbGVGZXRjaFJlc3VsdChkYXRhMiwgcm91dGVJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc3VsdHNbcm91dGVJZF0gPSB7IHR5cGU6IFwiZGF0YVwiLCByZXN1bHQgfTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXN1bHRzW3JvdXRlSWRdID0geyB0eXBlOiBcImVycm9yXCIsIHJlc3VsdDogZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0xvYWRlcikge1xuICAgICAgICAgIHJvdXRlc1BhcmFtcy5hZGQocm91dGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgaGFuZGxlcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YTIgPSBhd2FpdCBzaW5nbGVGZXRjaERmZC5wcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHVud3JhcFNpbmdsZUZldGNoUmVzdWx0KGRhdGEyLCByb3V0ZUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXN1bHRzW3JvdXRlSWRdID0geyB0eXBlOiBcImRhdGFcIiwgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXN1bHRzW3JvdXRlSWRdID0geyB0eXBlOiBcImVycm9yXCIsIHJlc3VsdDogZSB9O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocm91dGVEZmRzLm1hcCgoZCkgPT4gZC5wcm9taXNlKSk7XG4gIGxldCBpc0luaXRpYWxMb2FkID0gIXJvdXRlci5zdGF0ZS5pbml0aWFsaXplZCAmJiByb3V0ZXIuc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCI7XG4gIGlmICgoaXNJbml0aWFsTG9hZCB8fCByb3V0ZXNQYXJhbXMuc2l6ZSA9PT0gMCkgJiYgIXdpbmRvdy5fX3JlYWN0Um91dGVySGRyQWN0aXZlKSB7XG4gICAgc2luZ2xlRmV0Y2hEZmQucmVzb2x2ZSh7IHJvdXRlczoge30gfSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRhcmdldFJvdXRlcyA9IHNzciAmJiBmb3VuZE9wdE91dFJvdXRlICYmIHJvdXRlc1BhcmFtcy5zaXplID4gMCA/IFsuLi5yb3V0ZXNQYXJhbXMua2V5cygpXSA6IHZvaWQgMDtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGEyID0gYXdhaXQgZmV0Y2hBbmREZWNvZGUoYXJncywgYmFzZW5hbWUsIHRhcmdldFJvdXRlcyk7XG4gICAgICBzaW5nbGVGZXRjaERmZC5yZXNvbHZlKGRhdGEyLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNpbmdsZUZldGNoRGZkLnJlamVjdChlKTtcbiAgICB9XG4gIH1cbiAgYXdhaXQgcmVzb2x2ZVByb21pc2U7XG4gIGF3YWl0IGJ1YmJsZU1pZGRsZXdhcmVFcnJvcnMoXG4gICAgc2luZ2xlRmV0Y2hEZmQucHJvbWlzZSxcbiAgICBhcmdzLm1hdGNoZXMsXG4gICAgcm91dGVzUGFyYW1zLFxuICAgIHJlc3VsdHNcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5hc3luYyBmdW5jdGlvbiBidWJibGVNaWRkbGV3YXJlRXJyb3JzKHNpbmdsZUZldGNoUHJvbWlzZSwgbWF0Y2hlcywgcm91dGVzUGFyYW1zLCByZXN1bHRzKSB7XG4gIHRyeSB7XG4gICAgbGV0IG1pZGRsZXdhcmVFcnJvcjtcbiAgICBsZXQgZmV0Y2hlZERhdGEgPSBhd2FpdCBzaW5nbGVGZXRjaFByb21pc2U7XG4gICAgaWYgKFwicm91dGVzXCIgaW4gZmV0Y2hlZERhdGEpIHtcbiAgICAgIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgICAgaWYgKG1hdGNoLnJvdXRlLmlkIGluIGZldGNoZWREYXRhLnJvdXRlcykge1xuICAgICAgICAgIGxldCByb3V0ZVJlc3VsdCA9IGZldGNoZWREYXRhLnJvdXRlc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgICAgICAgaWYgKFwiZXJyb3JcIiBpbiByb3V0ZVJlc3VsdCkge1xuICAgICAgICAgICAgbWlkZGxld2FyZUVycm9yID0gcm91dGVSZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICBpZiAocmVzdWx0c1ttYXRjaC5yb3V0ZS5pZF0/LnJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3VsdHNbbWF0Y2gucm91dGUuaWRdID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICByZXN1bHQ6IG1pZGRsZXdhcmVFcnJvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaWRkbGV3YXJlRXJyb3IgIT09IHZvaWQgMCkge1xuICAgICAgQXJyYXkuZnJvbShyb3V0ZXNQYXJhbXMudmFsdWVzKCkpLmZvckVhY2goKHJvdXRlSWQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHNbcm91dGVJZF0ucmVzdWx0IGluc3RhbmNlb2YgU2luZ2xlRmV0Y2hOb1Jlc3VsdEVycm9yKSB7XG4gICAgICAgICAgcmVzdWx0c1tyb3V0ZUlkXS5yZXN1bHQgPSBtaWRkbGV3YXJlRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBzaW5nbGVGZXRjaExvYWRlckZldGNoZXJTdHJhdGVneShhcmdzLCBmZXRjaEFuZERlY29kZSwgYmFzZW5hbWUpIHtcbiAgbGV0IGZldGNoZXJNYXRjaCA9IGFyZ3MubWF0Y2hlcy5maW5kKChtKSA9PiBtLnVuc3RhYmxlX3Nob3VsZENhbGxIYW5kbGVyKCkpO1xuICBpbnZhcmlhbnQyKGZldGNoZXJNYXRjaCwgXCJObyBmZXRjaGVyIG1hdGNoIGZvdW5kXCIpO1xuICBsZXQgcm91dGVJZCA9IGZldGNoZXJNYXRjaC5yb3V0ZS5pZDtcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoZXJNYXRjaC5yZXNvbHZlKFxuICAgIGFzeW5jIChoYW5kbGVyKSA9PiBoYW5kbGVyKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCB7IGRhdGE6IGRhdGEyIH0gPSBhd2FpdCBmZXRjaEFuZERlY29kZShhcmdzLCBiYXNlbmFtZSwgW3JvdXRlSWRdKTtcbiAgICAgIHJldHVybiB1bndyYXBTaW5nbGVGZXRjaFJlc3VsdChkYXRhMiwgcm91dGVJZCk7XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHsgW2ZldGNoZXJNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdCB9O1xufVxuZnVuY3Rpb24gc3RyaXBJbmRleFBhcmFtKHVybCkge1xuICBsZXQgaW5kZXhWYWx1ZXMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldEFsbChcImluZGV4XCIpO1xuICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShcImluZGV4XCIpO1xuICBsZXQgaW5kZXhWYWx1ZXNUb0tlZXAgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXhWYWx1ZSBvZiBpbmRleFZhbHVlcykge1xuICAgIGlmIChpbmRleFZhbHVlKSB7XG4gICAgICBpbmRleFZhbHVlc1RvS2VlcC5wdXNoKGluZGV4VmFsdWUpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCB0b0tlZXAgb2YgaW5kZXhWYWx1ZXNUb0tlZXApIHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImluZGV4XCIsIHRvS2VlcCk7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbmZ1bmN0aW9uIHNpbmdsZUZldGNoVXJsKHJlcVVybCwgYmFzZW5hbWUsIGV4dGVuc2lvbikge1xuICBsZXQgdXJsID0gdHlwZW9mIHJlcVVybCA9PT0gXCJzdHJpbmdcIiA/IG5ldyBVUkwoXG4gICAgcmVxVXJsLFxuICAgIC8vIFRoaXMgY2FuIGJlIGNhbGxlZCBkdXJpbmcgdGhlIFNTUiBmbG93IHZpYSBQcmVmZXRjaFBhZ2VMaW5rc0ltcGwgc29cbiAgICAvLyBkb24ndCBhc3N1bWUgd2luZG93IGlzIGF2YWlsYWJsZVxuICAgIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInNlcnZlcjovL3NpbmdsZWZldGNoL1wiIDogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICApIDogcmVxVXJsO1xuICBpZiAodXJsLnBhdGhuYW1lID09PSBcIi9cIikge1xuICAgIHVybC5wYXRobmFtZSA9IGBfcm9vdC4ke2V4dGVuc2lvbn1gO1xuICB9IGVsc2UgaWYgKGJhc2VuYW1lICYmIHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgPT09IFwiL1wiKSB7XG4gICAgdXJsLnBhdGhuYW1lID0gYCR7YmFzZW5hbWUucmVwbGFjZSgvXFwvJC8sIFwiXCIpfS9fcm9vdC4ke2V4dGVuc2lvbn1gO1xuICB9IGVsc2Uge1xuICAgIHVybC5wYXRobmFtZSA9IGAke3VybC5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgXCJcIil9LiR7ZXh0ZW5zaW9ufWA7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kRGVjb2RlVmlhVHVyYm9TdHJlYW0oYXJncywgYmFzZW5hbWUsIHRhcmdldFJvdXRlcykge1xuICBsZXQgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICBsZXQgdXJsID0gc2luZ2xlRmV0Y2hVcmwocmVxdWVzdC51cmwsIGJhc2VuYW1lLCBcImRhdGFcIik7XG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHVybCA9IHN0cmlwSW5kZXhQYXJhbSh1cmwpO1xuICAgIGlmICh0YXJnZXRSb3V0ZXMpIHtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwiX3JvdXRlc1wiLCB0YXJnZXRSb3V0ZXMuam9pbihcIixcIikpO1xuICAgIH1cbiAgfVxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsLCBhd2FpdCBjcmVhdGVSZXF1ZXN0SW5pdChyZXF1ZXN0KSk7XG4gIGlmIChyZXMuc3RhdHVzID49IDQwMCAmJiAhcmVzLmhlYWRlcnMuaGFzKFwiWC1SZW1peC1SZXNwb25zZVwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvclJlc3BvbnNlSW1wbChyZXMuc3RhdHVzLCByZXMuc3RhdHVzVGV4dCwgYXdhaXQgcmVzLnRleHQoKSk7XG4gIH1cbiAgaWYgKHJlcy5zdGF0dXMgPT09IDIwNCAmJiByZXMuaGVhZGVycy5oYXMoXCJYLVJlbWl4LVJlZGlyZWN0XCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogU0lOR0xFX0ZFVENIX1JFRElSRUNUX1NUQVRVUyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICByZWRpcmVjdDogcmVzLmhlYWRlcnMuZ2V0KFwiWC1SZW1peC1SZWRpcmVjdFwiKSxcbiAgICAgICAgICBzdGF0dXM6IE51bWJlcihyZXMuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVN0YXR1c1wiKSB8fCBcIjMwMlwiKSxcbiAgICAgICAgICByZXZhbGlkYXRlOiByZXMuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVJldmFsaWRhdGVcIikgPT09IFwidHJ1ZVwiLFxuICAgICAgICAgIHJlbG9hZDogcmVzLmhlYWRlcnMuZ2V0KFwiWC1SZW1peC1SZWxvYWQtRG9jdW1lbnRcIikgPT09IFwidHJ1ZVwiLFxuICAgICAgICAgIHJlcGxhY2U6IHJlcy5oZWFkZXJzLmdldChcIlgtUmVtaXgtUmVwbGFjZVwiKSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKE5PX0JPRFlfU1RBVFVTX0NPREVTLmhhcyhyZXMuc3RhdHVzKSkge1xuICAgIGxldCByb3V0ZXMgPSB7fTtcbiAgICBpZiAodGFyZ2V0Um91dGVzICYmIHJlcXVlc3QubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICByb3V0ZXNbdGFyZ2V0Um91dGVzWzBdXSA9IHsgZGF0YTogdm9pZCAwIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgICBkYXRhOiB7IHJvdXRlcyB9XG4gICAgfTtcbiAgfVxuICBpbnZhcmlhbnQyKHJlcy5ib2R5LCBcIk5vIHJlc3BvbnNlIGJvZHkgdG8gZGVjb2RlXCIpO1xuICB0cnkge1xuICAgIGxldCBkZWNvZGVkID0gYXdhaXQgZGVjb2RlVmlhVHVyYm9TdHJlYW0ocmVzLmJvZHksIHdpbmRvdyk7XG4gICAgbGV0IGRhdGEyO1xuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgbGV0IHR5cGVkID0gZGVjb2RlZC52YWx1ZTtcbiAgICAgIGlmIChTaW5nbGVGZXRjaFJlZGlyZWN0U3ltYm9sIGluIHR5cGVkKSB7XG4gICAgICAgIGRhdGEyID0geyByZWRpcmVjdDogdHlwZWRbU2luZ2xlRmV0Y2hSZWRpcmVjdFN5bWJvbF0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEyID0geyByb3V0ZXM6IHR5cGVkIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0eXBlZCA9IGRlY29kZWQudmFsdWU7XG4gICAgICBsZXQgcm91dGVJZCA9IHRhcmdldFJvdXRlcz8uWzBdO1xuICAgICAgaW52YXJpYW50Mihyb3V0ZUlkLCBcIk5vIHJvdXRlSWQgZm91bmQgZm9yIHNpbmdsZSBmZXRjaCBjYWxsIGRlY29kaW5nXCIpO1xuICAgICAgaWYgKFwicmVkaXJlY3RcIiBpbiB0eXBlZCkge1xuICAgICAgICBkYXRhMiA9IHsgcmVkaXJlY3Q6IHR5cGVkIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhMiA9IHsgcm91dGVzOiB7IFtyb3V0ZUlkXTogdHlwZWQgfSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzdGF0dXM6IHJlcy5zdGF0dXMsIGRhdGE6IGRhdGEyIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZGVjb2RlIHR1cmJvLXN0cmVhbSByZXNwb25zZVwiKTtcbiAgfVxufVxuZnVuY3Rpb24gZGVjb2RlVmlhVHVyYm9TdHJlYW0oYm9keSwgZ2xvYmFsKSB7XG4gIHJldHVybiBkZWNvZGUoYm9keSwge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICh0eXBlLCAuLi5yZXN0KSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIlNhbml0aXplZEVycm9yXCIpIHtcbiAgICAgICAgICBsZXQgW25hbWUsIG1lc3NhZ2UsIHN0YWNrXSA9IHJlc3Q7XG4gICAgICAgICAgbGV0IENvbnN0cnVjdG9yID0gRXJyb3I7XG4gICAgICAgICAgaWYgKG5hbWUgJiYgbmFtZSBpbiBnbG9iYWwgJiYgdHlwZW9mIGdsb2JhbFtuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3RvciA9IGdsb2JhbFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGVycm9yID0gbmV3IENvbnN0cnVjdG9yKG1lc3NhZ2UpO1xuICAgICAgICAgIGVycm9yLnN0YWNrID0gc3RhY2s7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiRXJyb3JSZXNwb25zZVwiKSB7XG4gICAgICAgICAgbGV0IFtkYXRhMiwgc3RhdHVzLCBzdGF0dXNUZXh0XSA9IHJlc3Q7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRXJyb3JSZXNwb25zZUltcGwoc3RhdHVzLCBzdGF0dXNUZXh0LCBkYXRhMilcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcIlNpbmdsZUZldGNoUmVkaXJlY3RcIikge1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB7IFtTaW5nbGVGZXRjaFJlZGlyZWN0U3ltYm9sXTogcmVzdFswXSB9IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiU2luZ2xlRmV0Y2hDbGFzc0luc3RhbmNlXCIpIHtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdFswXSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcIlNpbmdsZUZldGNoRmFsbGJhY2tcIikge1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2b2lkIDAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSk7XG59XG5mdW5jdGlvbiB1bndyYXBTaW5nbGVGZXRjaFJlc3VsdChyZXN1bHQsIHJvdXRlSWQpIHtcbiAgaWYgKFwicmVkaXJlY3RcIiBpbiByZXN1bHQpIHtcbiAgICBsZXQge1xuICAgICAgcmVkaXJlY3Q6IGxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0ZSxcbiAgICAgIHJlbG9hZCxcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UyLFxuICAgICAgc3RhdHVzXG4gICAgfSA9IHJlc3VsdC5yZWRpcmVjdDtcbiAgICB0aHJvdyByZWRpcmVjdChsb2NhdGlvbiwge1xuICAgICAgc3RhdHVzLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBUaHJlZSBSJ3Mgb2YgcmVkaXJlY3RpbmcgKGxvbCBWZWVwKVxuICAgICAgICAuLi5yZXZhbGlkYXRlID8geyBcIlgtUmVtaXgtUmV2YWxpZGF0ZVwiOiBcInllc1wiIH0gOiBudWxsLFxuICAgICAgICAuLi5yZWxvYWQgPyB7IFwiWC1SZW1peC1SZWxvYWQtRG9jdW1lbnRcIjogXCJ5ZXNcIiB9IDogbnVsbCxcbiAgICAgICAgLi4ucmVwbGFjZTIgPyB7IFwiWC1SZW1peC1SZXBsYWNlXCI6IFwieWVzXCIgfSA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgcm91dGVSZXN1bHQgPSByZXN1bHQucm91dGVzW3JvdXRlSWRdO1xuICBpZiAocm91dGVSZXN1bHQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBTaW5nbGVGZXRjaE5vUmVzdWx0RXJyb3IoXG4gICAgICBgTm8gcmVzdWx0IGZvdW5kIGZvciByb3V0ZUlkIFwiJHtyb3V0ZUlkfVwiYFxuICAgICk7XG4gIH0gZWxzZSBpZiAoXCJlcnJvclwiIGluIHJvdXRlUmVzdWx0KSB7XG4gICAgdGhyb3cgcm91dGVSZXN1bHQuZXJyb3I7XG4gIH0gZWxzZSBpZiAoXCJkYXRhXCIgaW4gcm91dGVSZXN1bHQpIHtcbiAgICByZXR1cm4gcm91dGVSZXN1bHQuZGF0YTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgZm91bmQgZm9yIHJvdXRlSWQgXCIke3JvdXRlSWR9XCJgKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRGVmZXJyZWQyKCkge1xuICBsZXQgcmVzb2x2ZTtcbiAgbGV0IHJlamVjdDtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICByZXNvbHZlID0gYXN5bmMgKHZhbCkgPT4ge1xuICAgICAgcmVzKHZhbCk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH07XG4gICAgcmVqZWN0ID0gYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICByZWooZXJyb3IpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9taXNlLFxuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJlc29sdmUsXG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmVqZWN0XG4gIH07XG59XG5cbi8vIGxpYi9kb20vc3NyL2Vycm9yQm91bmRhcmllcy50c3hcbmltcG9ydCAqIGFzIFJlYWN0OSBmcm9tIFwicmVhY3RcIjtcblxuLy8gbGliL2RvbS9zc3IvY29tcG9uZW50cy50c3hcbmltcG9ydCAqIGFzIFJlYWN0OCBmcm9tIFwicmVhY3RcIjtcblxuLy8gbGliL2RvbS9zc3Ivcm91dGVNb2R1bGVzLnRzXG5hc3luYyBmdW5jdGlvbiBsb2FkUm91dGVNb2R1bGUocm91dGUsIHJvdXRlTW9kdWxlc0NhY2hlKSB7XG4gIGlmIChyb3V0ZS5pZCBpbiByb3V0ZU1vZHVsZXNDYWNoZSkge1xuICAgIHJldHVybiByb3V0ZU1vZHVsZXNDYWNoZVtyb3V0ZS5pZF07XG4gIH1cbiAgdHJ5IHtcbiAgICBsZXQgcm91dGVNb2R1bGUgPSBhd2FpdCBpbXBvcnQoXG4gICAgICAvKiBAdml0ZS1pZ25vcmUgKi9cbiAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgIHJvdXRlLm1vZHVsZVxuICAgICk7XG4gICAgcm91dGVNb2R1bGVzQ2FjaGVbcm91dGUuaWRdID0gcm91dGVNb2R1bGU7XG4gICAgcmV0dXJuIHJvdXRlTW9kdWxlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgbG9hZGluZyByb3V0ZSBtb2R1bGUgXFxgJHtyb3V0ZS5tb2R1bGV9XFxgLCByZWxvYWRpbmcgcGFnZS4uLmBcbiAgICApO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIGlmICh3aW5kb3cuX19yZWFjdFJvdXRlckNvbnRleHQgJiYgd2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0LmlzU3BhTW9kZSAmJiAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgaW1wb3J0Lm1ldGEuaG90KSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gbGliL2RvbS9zc3IvbGlua3MudHNcbmZ1bmN0aW9uIGdldEtleWVkTGlua3NGb3JNYXRjaGVzKG1hdGNoZXMsIHJvdXRlTW9kdWxlcywgbWFuaWZlc3QpIHtcbiAgbGV0IGRlc2NyaXB0b3JzID0gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XG4gICAgbGV0IG1vZHVsZSA9IHJvdXRlTW9kdWxlc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgbGV0IHJvdXRlID0gbWFuaWZlc3Qucm91dGVzW21hdGNoLnJvdXRlLmlkXTtcbiAgICByZXR1cm4gW1xuICAgICAgcm91dGUgJiYgcm91dGUuY3NzID8gcm91dGUuY3NzLm1hcCgoaHJlZikgPT4gKHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZiB9KSkgOiBbXSxcbiAgICAgIG1vZHVsZT8ubGlua3M/LigpIHx8IFtdXG4gICAgXTtcbiAgfSkuZmxhdCgyKTtcbiAgbGV0IHByZWxvYWRzID0gZ2V0TW9kdWxlTGlua0hyZWZzKG1hdGNoZXMsIG1hbmlmZXN0KTtcbiAgcmV0dXJuIGRlZHVwZUxpbmtEZXNjcmlwdG9ycyhkZXNjcmlwdG9ycywgcHJlbG9hZHMpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVDc3NEZXNjcmlwdG9ycyhyb3V0ZSkge1xuICBpZiAoIXJvdXRlLmNzcykgcmV0dXJuIFtdO1xuICByZXR1cm4gcm91dGUuY3NzLm1hcCgoaHJlZikgPT4gKHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZiB9KSk7XG59XG5hc3luYyBmdW5jdGlvbiBwcmVmZXRjaFJvdXRlQ3NzKHJvdXRlKSB7XG4gIGlmICghcm91dGUuY3NzKSByZXR1cm47XG4gIGxldCBkZXNjcmlwdG9ycyA9IGdldFJvdXRlQ3NzRGVzY3JpcHRvcnMocm91dGUpO1xuICBhd2FpdCBQcm9taXNlLmFsbChkZXNjcmlwdG9ycy5tYXAocHJlZmV0Y2hTdHlsZUxpbmspKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHByZWZldGNoU3R5bGVMaW5rcyhyb3V0ZSwgcm91dGVNb2R1bGUpIHtcbiAgaWYgKCFyb3V0ZS5jc3MgJiYgIXJvdXRlTW9kdWxlLmxpbmtzIHx8ICFpc1ByZWxvYWRTdXBwb3J0ZWQoKSkgcmV0dXJuO1xuICBsZXQgZGVzY3JpcHRvcnMgPSBbXTtcbiAgaWYgKHJvdXRlLmNzcykge1xuICAgIGRlc2NyaXB0b3JzLnB1c2goLi4uZ2V0Um91dGVDc3NEZXNjcmlwdG9ycyhyb3V0ZSkpO1xuICB9XG4gIGlmIChyb3V0ZU1vZHVsZS5saW5rcykge1xuICAgIGRlc2NyaXB0b3JzLnB1c2goLi4ucm91dGVNb2R1bGUubGlua3MoKSk7XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBsZXQgc3R5bGVMaW5rcyA9IFtdO1xuICBmb3IgKGxldCBkZXNjcmlwdG9yIG9mIGRlc2NyaXB0b3JzKSB7XG4gICAgaWYgKCFpc1BhZ2VMaW5rRGVzY3JpcHRvcihkZXNjcmlwdG9yKSAmJiBkZXNjcmlwdG9yLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIpIHtcbiAgICAgIHN0eWxlTGlua3MucHVzaCh7XG4gICAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcInN0eWxlXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhd2FpdCBQcm9taXNlLmFsbChzdHlsZUxpbmtzLm1hcChwcmVmZXRjaFN0eWxlTGluaykpO1xufVxuYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hTdHlsZUxpbmsoZGVzY3JpcHRvcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAoZGVzY3JpcHRvci5tZWRpYSAmJiAhd2luZG93Lm1hdGNoTWVkaWEoZGVzY3JpcHRvci5tZWRpYSkubWF0Y2hlcyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXVtocmVmPVwiJHtkZXNjcmlwdG9yLmhyZWZ9XCJdYFxuICAgICkpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfVxuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgT2JqZWN0LmFzc2lnbihsaW5rLCBkZXNjcmlwdG9yKTtcbiAgICBmdW5jdGlvbiByZW1vdmVMaW5rKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmhlYWQuY29udGFpbnMobGluaykpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGluay5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZW1vdmVMaW5rKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgICBsaW5rLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZW1vdmVMaW5rKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGlzUGFnZUxpbmtEZXNjcmlwdG9yKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC5wYWdlID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNIdG1sTGlua0Rlc2NyaXB0b3Iob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2JqZWN0LmhyZWYgPT0gbnVsbCkge1xuICAgIHJldHVybiBvYmplY3QucmVsID09PSBcInByZWxvYWRcIiAmJiB0eXBlb2Ygb2JqZWN0LmltYWdlU3JjU2V0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvYmplY3QuaW1hZ2VTaXplcyA9PT0gXCJzdHJpbmdcIjtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iamVjdC5yZWwgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG9iamVjdC5ocmVmID09PSBcInN0cmluZ1wiO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0S2V5ZWRQcmVmZXRjaExpbmtzKG1hdGNoZXMsIG1hbmlmZXN0LCByb3V0ZU1vZHVsZXMpIHtcbiAgbGV0IGxpbmtzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgbWF0Y2hlcy5tYXAoYXN5bmMgKG1hdGNoKSA9PiB7XG4gICAgICBsZXQgcm91dGUgPSBtYW5pZmVzdC5yb3V0ZXNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgIGxldCBtb2QgPSBhd2FpdCBsb2FkUm91dGVNb2R1bGUocm91dGUsIHJvdXRlTW9kdWxlcyk7XG4gICAgICAgIHJldHVybiBtb2QubGlua3MgPyBtb2QubGlua3MoKSA6IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0pXG4gICk7XG4gIHJldHVybiBkZWR1cGVMaW5rRGVzY3JpcHRvcnMoXG4gICAgbGlua3MuZmxhdCgxKS5maWx0ZXIoaXNIdG1sTGlua0Rlc2NyaXB0b3IpLmZpbHRlcigobGluaykgPT4gbGluay5yZWwgPT09IFwic3R5bGVzaGVldFwiIHx8IGxpbmsucmVsID09PSBcInByZWxvYWRcIikubWFwKFxuICAgICAgKGxpbmspID0+IGxpbmsucmVsID09PSBcInN0eWxlc2hlZXRcIiA/IHsgLi4ubGluaywgcmVsOiBcInByZWZldGNoXCIsIGFzOiBcInN0eWxlXCIgfSA6IHsgLi4ubGluaywgcmVsOiBcInByZWZldGNoXCIgfVxuICAgIClcbiAgKTtcbn1cbmZ1bmN0aW9uIGdldE5ld01hdGNoZXNGb3JMaW5rcyhwYWdlLCBuZXh0TWF0Y2hlcywgY3VycmVudE1hdGNoZXMsIG1hbmlmZXN0LCBsb2NhdGlvbiwgbW9kZSkge1xuICBsZXQgaXNOZXcgPSAobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFjdXJyZW50TWF0Y2hlc1tpbmRleF0pIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBtYXRjaC5yb3V0ZS5pZCAhPT0gY3VycmVudE1hdGNoZXNbaW5kZXhdLnJvdXRlLmlkO1xuICB9O1xuICBsZXQgbWF0Y2hQYXRoQ2hhbmdlZCA9IChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gcGFyYW0gY2hhbmdlLCAvdXNlcnMvMTIzIC0+IC91c2Vycy80NTZcbiAgICAgIGN1cnJlbnRNYXRjaGVzW2luZGV4XS5wYXRobmFtZSAhPT0gbWF0Y2gucGF0aG5hbWUgfHwgLy8gc3BsYXQgcGFyYW0gY2hhbmdlZCwgd2hpY2ggaXMgbm90IHByZXNlbnQgaW4gbWF0Y2gucGF0aFxuICAgICAgLy8gZS5nLiAvZmlsZXMvaW1hZ2VzL2F2YXRhci5qcGcgLT4gZmlsZXMvZmluYW5jZXMueGxzXG4gICAgICBjdXJyZW50TWF0Y2hlc1tpbmRleF0ucm91dGUucGF0aD8uZW5kc1dpdGgoXCIqXCIpICYmIGN1cnJlbnRNYXRjaGVzW2luZGV4XS5wYXJhbXNbXCIqXCJdICE9PSBtYXRjaC5wYXJhbXNbXCIqXCJdXG4gICAgKTtcbiAgfTtcbiAgaWYgKG1vZGUgPT09IFwiYXNzZXRzXCIpIHtcbiAgICByZXR1cm4gbmV4dE1hdGNoZXMuZmlsdGVyKFxuICAgICAgKG1hdGNoLCBpbmRleCkgPT4gaXNOZXcobWF0Y2gsIGluZGV4KSB8fCBtYXRjaFBhdGhDaGFuZ2VkKG1hdGNoLCBpbmRleClcbiAgICApO1xuICB9XG4gIGlmIChtb2RlID09PSBcImRhdGFcIikge1xuICAgIHJldHVybiBuZXh0TWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IG1hbmlmZXN0Um91dGUgPSBtYW5pZmVzdC5yb3V0ZXNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgaWYgKCFtYW5pZmVzdFJvdXRlIHx8ICFtYW5pZmVzdFJvdXRlLmhhc0xvYWRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaXNOZXcobWF0Y2gsIGluZGV4KSB8fCBtYXRjaFBhdGhDaGFuZ2VkKG1hdGNoLCBpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICBsZXQgcm91dGVDaG9pY2UgPSBtYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKHtcbiAgICAgICAgICBjdXJyZW50VXJsOiBuZXcgVVJMKFxuICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoLFxuICAgICAgICAgICAgd2luZG93Lm9yaWdpblxuICAgICAgICAgICksXG4gICAgICAgICAgY3VycmVudFBhcmFtczogY3VycmVudE1hdGNoZXNbMF0/LnBhcmFtcyB8fCB7fSxcbiAgICAgICAgICBuZXh0VXJsOiBuZXcgVVJMKHBhZ2UsIHdpbmRvdy5vcmlnaW4pLFxuICAgICAgICAgIG5leHRQYXJhbXM6IG1hdGNoLnBhcmFtcyxcbiAgICAgICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0ZUNob2ljZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICByZXR1cm4gcm91dGVDaG9pY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBbXTtcbn1cbmZ1bmN0aW9uIGdldE1vZHVsZUxpbmtIcmVmcyhtYXRjaGVzLCBtYW5pZmVzdCwgeyBpbmNsdWRlSHlkcmF0ZUZhbGxiYWNrIH0gPSB7fSkge1xuICByZXR1cm4gZGVkdXBlSHJlZnMoXG4gICAgbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XG4gICAgICBsZXQgcm91dGUgPSBtYW5pZmVzdC5yb3V0ZXNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgaWYgKCFyb3V0ZSkgcmV0dXJuIFtdO1xuICAgICAgbGV0IGhyZWZzID0gW3JvdXRlLm1vZHVsZV07XG4gICAgICBpZiAocm91dGUuY2xpZW50QWN0aW9uTW9kdWxlKSB7XG4gICAgICAgIGhyZWZzID0gaHJlZnMuY29uY2F0KHJvdXRlLmNsaWVudEFjdGlvbk1vZHVsZSk7XG4gICAgICB9XG4gICAgICBpZiAocm91dGUuY2xpZW50TG9hZGVyTW9kdWxlKSB7XG4gICAgICAgIGhyZWZzID0gaHJlZnMuY29uY2F0KHJvdXRlLmNsaWVudExvYWRlck1vZHVsZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZUh5ZHJhdGVGYWxsYmFjayAmJiByb3V0ZS5oeWRyYXRlRmFsbGJhY2tNb2R1bGUpIHtcbiAgICAgICAgaHJlZnMgPSBocmVmcy5jb25jYXQocm91dGUuaHlkcmF0ZUZhbGxiYWNrTW9kdWxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3V0ZS5pbXBvcnRzKSB7XG4gICAgICAgIGhyZWZzID0gaHJlZnMuY29uY2F0KHJvdXRlLmltcG9ydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhyZWZzO1xuICAgIH0pLmZsYXQoMSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGRlZHVwZUhyZWZzKGhyZWZzKSB7XG4gIHJldHVybiBbLi4ubmV3IFNldChocmVmcyldO1xufVxuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIGxldCBzb3J0ZWQgPSB7fTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopLnNvcnQoKTtcbiAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICBzb3J0ZWRba2V5XSA9IG9ialtrZXldO1xuICB9XG4gIHJldHVybiBzb3J0ZWQ7XG59XG5mdW5jdGlvbiBkZWR1cGVMaW5rRGVzY3JpcHRvcnMoZGVzY3JpcHRvcnMsIHByZWxvYWRzKSB7XG4gIGxldCBzZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBsZXQgcHJlbG9hZHNTZXQgPSBuZXcgU2V0KHByZWxvYWRzKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3JzLnJlZHVjZSgoZGVkdXBlZCwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGxldCBhbHJlYWR5TW9kdWxlUHJlbG9hZCA9IHByZWxvYWRzICYmICFpc1BhZ2VMaW5rRGVzY3JpcHRvcihkZXNjcmlwdG9yKSAmJiBkZXNjcmlwdG9yLmFzID09PSBcInNjcmlwdFwiICYmIGRlc2NyaXB0b3IuaHJlZiAmJiBwcmVsb2Fkc1NldC5oYXMoZGVzY3JpcHRvci5ocmVmKTtcbiAgICBpZiAoYWxyZWFkeU1vZHVsZVByZWxvYWQpIHtcbiAgICAgIHJldHVybiBkZWR1cGVkO1xuICAgIH1cbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoc29ydEtleXMoZGVzY3JpcHRvcikpO1xuICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgICBkZWR1cGVkLnB1c2goeyBrZXksIGxpbms6IGRlc2NyaXB0b3IgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWR1cGVkO1xuICB9LCBbXSk7XG59XG52YXIgX2lzUHJlbG9hZFN1cHBvcnRlZDtcbmZ1bmN0aW9uIGlzUHJlbG9hZFN1cHBvcnRlZCgpIHtcbiAgaWYgKF9pc1ByZWxvYWRTdXBwb3J0ZWQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiBfaXNQcmVsb2FkU3VwcG9ydGVkO1xuICB9XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBfaXNQcmVsb2FkU3VwcG9ydGVkID0gZWwucmVsTGlzdC5zdXBwb3J0cyhcInByZWxvYWRcIik7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIF9pc1ByZWxvYWRTdXBwb3J0ZWQ7XG59XG5cbi8vIGxpYi9kb20vc3NyL2ZvZy1vZi13YXIudHNcbmltcG9ydCAqIGFzIFJlYWN0NyBmcm9tIFwicmVhY3RcIjtcblxuLy8gbGliL2RvbS9zc3Ivcm91dGVzLnRzeFxuaW1wb3J0ICogYXMgUmVhY3Q2IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBsaWIvZG9tL3Nzci9mYWxsYmFjay50c3hcbmltcG9ydCAqIGFzIFJlYWN0NSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIFJlbWl4Um9vdERlZmF1bHRIeWRyYXRlRmFsbGJhY2soKSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3Q1LmNyZWF0ZUVsZW1lbnQoQm91bmRhcnlTaGVsbCwgeyB0aXRsZTogXCJMb2FkaW5nLi4uXCIsIHJlbmRlclNjcmlwdHM6IHRydWUgfSwgRU5BQkxFX0RFVl9XQVJOSU5HUyA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDUuY3JlYXRlRWxlbWVudChcbiAgICBcInNjcmlwdFwiLFxuICAgIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIlxcdXsxRjRCRn0gSGV5IGRldmVsb3BlciBcXHV7MUY0NEJ9LiBZb3UgY2FuIHByb3ZpZGUgYSB3YXkgYmV0dGVyIFVYIHRoYW4gdGhpcyBcIiArXG4gICAgICAgICAgICAgICAgXCJ3aGVuIHlvdXIgYXBwIGlzIGxvYWRpbmcgSlMgbW9kdWxlcyBhbmQvb3IgcnVubmluZyBcXGBjbGllbnRMb2FkZXJcXGAgXCIgK1xuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25zLiBDaGVjayBvdXQgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vc3RhcnQvZnJhbWV3b3JrL3JvdXRlLW1vZHVsZSNoeWRyYXRlZmFsbGJhY2sgXCIgK1xuICAgICAgICAgICAgICAgIFwiZm9yIG1vcmUgaW5mb3JtYXRpb24uXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gICkgOiBudWxsKTtcbn1cblxuLy8gbGliL2RvbS9zc3Ivcm91dGVzLnRzeFxuZnVuY3Rpb24gZ3JvdXBSb3V0ZXNCeVBhcmVudElkKG1hbmlmZXN0KSB7XG4gIGxldCByb3V0ZXMgPSB7fTtcbiAgT2JqZWN0LnZhbHVlcyhtYW5pZmVzdCkuZm9yRWFjaCgocm91dGUpID0+IHtcbiAgICBpZiAocm91dGUpIHtcbiAgICAgIGxldCBwYXJlbnRJZCA9IHJvdXRlLnBhcmVudElkIHx8IFwiXCI7XG4gICAgICBpZiAoIXJvdXRlc1twYXJlbnRJZF0pIHtcbiAgICAgICAgcm91dGVzW3BhcmVudElkXSA9IFtdO1xuICAgICAgfVxuICAgICAgcm91dGVzW3BhcmVudElkXS5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcm91dGVzO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVDb21wb25lbnRzKHJvdXRlLCByb3V0ZU1vZHVsZSwgaXNTcGFNb2RlKSB7XG4gIGxldCBDb21wb25lbnQ0ID0gZ2V0Um91dGVNb2R1bGVDb21wb25lbnQocm91dGVNb2R1bGUpO1xuICBsZXQgSHlkcmF0ZUZhbGxiYWNrID0gcm91dGVNb2R1bGUuSHlkcmF0ZUZhbGxiYWNrICYmICghaXNTcGFNb2RlIHx8IHJvdXRlLmlkID09PSBcInJvb3RcIikgPyByb3V0ZU1vZHVsZS5IeWRyYXRlRmFsbGJhY2sgOiByb3V0ZS5pZCA9PT0gXCJyb290XCIgPyBSZW1peFJvb3REZWZhdWx0SHlkcmF0ZUZhbGxiYWNrIDogdm9pZCAwO1xuICBsZXQgRXJyb3JCb3VuZGFyeSA9IHJvdXRlTW9kdWxlLkVycm9yQm91bmRhcnkgPyByb3V0ZU1vZHVsZS5FcnJvckJvdW5kYXJ5IDogcm91dGUuaWQgPT09IFwicm9vdFwiID8gKCkgPT4gLyogQF9fUFVSRV9fICovIFJlYWN0Ni5jcmVhdGVFbGVtZW50KFJlbWl4Um9vdERlZmF1bHRFcnJvckJvdW5kYXJ5LCB7IGVycm9yOiB1c2VSb3V0ZUVycm9yKCkgfSkgOiB2b2lkIDA7XG4gIGlmIChyb3V0ZS5pZCA9PT0gXCJyb290XCIgJiYgcm91dGVNb2R1bGUuTGF5b3V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLkNvbXBvbmVudDQgPyB7XG4gICAgICAgIGVsZW1lbnQ6IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChyb3V0ZU1vZHVsZS5MYXlvdXQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChDb21wb25lbnQ0LCBudWxsKSlcbiAgICAgIH0gOiB7IENvbXBvbmVudDogQ29tcG9uZW50NCB9LFxuICAgICAgLi4uRXJyb3JCb3VuZGFyeSA/IHtcbiAgICAgICAgZXJyb3JFbGVtZW50OiAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQocm91dGVNb2R1bGUuTGF5b3V0LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQoRXJyb3JCb3VuZGFyeSwgbnVsbCkpXG4gICAgICB9IDogeyBFcnJvckJvdW5kYXJ5IH0sXG4gICAgICAuLi5IeWRyYXRlRmFsbGJhY2sgPyB7XG4gICAgICAgIGh5ZHJhdGVGYWxsYmFja0VsZW1lbnQ6IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChyb3V0ZU1vZHVsZS5MYXlvdXQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChIeWRyYXRlRmFsbGJhY2ssIG51bGwpKVxuICAgICAgfSA6IHsgSHlkcmF0ZUZhbGxiYWNrIH1cbiAgICB9O1xuICB9XG4gIHJldHVybiB7IENvbXBvbmVudDogQ29tcG9uZW50NCwgRXJyb3JCb3VuZGFyeSwgSHlkcmF0ZUZhbGxiYWNrIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTZXJ2ZXJSb3V0ZXMobWFuaWZlc3QsIHJvdXRlTW9kdWxlcywgZnV0dXJlLCBpc1NwYU1vZGUsIHBhcmVudElkID0gXCJcIiwgcm91dGVzQnlQYXJlbnRJZCA9IGdyb3VwUm91dGVzQnlQYXJlbnRJZChtYW5pZmVzdCksIHNwYU1vZGVMYXp5UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh7IENvbXBvbmVudDogKCkgPT4gbnVsbCB9KSkge1xuICByZXR1cm4gKHJvdXRlc0J5UGFyZW50SWRbcGFyZW50SWRdIHx8IFtdKS5tYXAoKHJvdXRlKSA9PiB7XG4gICAgbGV0IHJvdXRlTW9kdWxlID0gcm91dGVNb2R1bGVzW3JvdXRlLmlkXTtcbiAgICBpbnZhcmlhbnQyKFxuICAgICAgcm91dGVNb2R1bGUsXG4gICAgICBcIk5vIGByb3V0ZU1vZHVsZWAgYXZhaWxhYmxlIHRvIGNyZWF0ZSBzZXJ2ZXIgcm91dGVzXCJcbiAgICApO1xuICAgIGxldCBkYXRhUm91dGUgPSB7XG4gICAgICAuLi5nZXRSb3V0ZUNvbXBvbmVudHMocm91dGUsIHJvdXRlTW9kdWxlLCBpc1NwYU1vZGUpLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlkOiByb3V0ZS5pZCxcbiAgICAgIGluZGV4OiByb3V0ZS5pbmRleCxcbiAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXG4gICAgICBoYW5kbGU6IHJvdXRlTW9kdWxlLmhhbmRsZSxcbiAgICAgIC8vIEZvciBTUEEgTW9kZSwgYWxsIHJvdXRlcyBhcmUgbGF6eSBleGNlcHQgcm9vdC4gIEhvd2V2ZXIgd2UgdGVsbCB0aGVcbiAgICAgIC8vIHJvdXRlciByb290IGlzIGFsc28gbGF6eSBoZXJlIHRvbyBzaW5jZSB3ZSBkb24ndCBuZWVkIGEgZnVsbFxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gLSB3ZSBqdXN0IG5lZWQgYSBgbGF6eWAgcHJvcCB0byB0ZWxsIHRoZSBSUiByZW5kZXJpbmdcbiAgICAgIC8vIHdoZXJlIHRvIHN0b3Agd2hpY2ggaXMgYWx3YXlzIGF0IHRoZSByb290IHJvdXRlIGluIFNQQSBtb2RlXG4gICAgICBsYXp5OiBpc1NwYU1vZGUgPyAoKSA9PiBzcGFNb2RlTGF6eVByb21pc2UgOiB2b2lkIDAsXG4gICAgICAvLyBGb3IgcGFydGlhbCBoeWRyYXRpb24gcmVuZGVyaW5nLCB3ZSBuZWVkIHRvIGluZGljYXRlIHdoZW4gdGhlIHJvdXRlXG4gICAgICAvLyBoYXMgYSBsb2FkZXIvY2xpZW50TG9hZGVyLCBidXQgaXQgd29uJ3QgZXZlciBiZSBjYWxsZWQgZHVyaW5nIHRoZSBzdGF0aWNcbiAgICAgIC8vIHJlbmRlciwgc28ganVzdCBnaXZlIGl0IGEgbm8tb3AgZnVuY3Rpb24gc28gd2UgY2FuIHJlbmRlciBkb3duIHRvIHRoZVxuICAgICAgLy8gcHJvcGVyIGZhbGxiYWNrXG4gICAgICBsb2FkZXI6IHJvdXRlLmhhc0xvYWRlciB8fCByb3V0ZS5oYXNDbGllbnRMb2FkZXIgPyAoKSA9PiBudWxsIDogdm9pZCAwXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIG1pZGRsZXdhcmUvYWN0aW9uL3Nob3VsZFJldmFsaWRhdGUgb24gdGhlc2Ugcm91dGVzIHNpbmNlXG4gICAgICAvLyB0aGV5J3JlIGZvciBhIHN0YXRpYyByZW5kZXJcbiAgICB9O1xuICAgIGxldCBjaGlsZHJlbiA9IGNyZWF0ZVNlcnZlclJvdXRlcyhcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgcm91dGVNb2R1bGVzLFxuICAgICAgZnV0dXJlLFxuICAgICAgaXNTcGFNb2RlLFxuICAgICAgcm91dGUuaWQsXG4gICAgICByb3V0ZXNCeVBhcmVudElkLFxuICAgICAgc3BhTW9kZUxhenlQcm9taXNlXG4gICAgKTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkgZGF0YVJvdXRlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgcmV0dXJuIGRhdGFSb3V0ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVDbGllbnRSb3V0ZXNXaXRoSE1SUmV2YWxpZGF0aW9uT3B0T3V0KG5lZWRzUmV2YWxpZGF0aW9uLCBtYW5pZmVzdCwgcm91dGVNb2R1bGVzQ2FjaGUsIGluaXRpYWxTdGF0ZSwgc3NyLCBpc1NwYU1vZGUpIHtcbiAgcmV0dXJuIGNyZWF0ZUNsaWVudFJvdXRlcyhcbiAgICBtYW5pZmVzdCxcbiAgICByb3V0ZU1vZHVsZXNDYWNoZSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyLFxuICAgIGlzU3BhTW9kZSxcbiAgICBcIlwiLFxuICAgIGdyb3VwUm91dGVzQnlQYXJlbnRJZChtYW5pZmVzdCksXG4gICAgbmVlZHNSZXZhbGlkYXRpb25cbiAgKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRJbnZhbGlkU2VydmVySGFuZGxlckNhbGwodHlwZSwgcm91dGUpIHtcbiAgaWYgKHR5cGUgPT09IFwibG9hZGVyXCIgJiYgIXJvdXRlLmhhc0xvYWRlciB8fCB0eXBlID09PSBcImFjdGlvblwiICYmICFyb3V0ZS5oYXNBY3Rpb24pIHtcbiAgICBsZXQgZm4gPSB0eXBlID09PSBcImFjdGlvblwiID8gXCJzZXJ2ZXJBY3Rpb24oKVwiIDogXCJzZXJ2ZXJMb2FkZXIoKVwiO1xuICAgIGxldCBtc2cgPSBgWW91IGFyZSB0cnlpbmcgdG8gY2FsbCAke2ZufSBvbiBhIHJvdXRlIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHNlcnZlciAke3R5cGV9IChyb3V0ZUlkOiBcIiR7cm91dGUuaWR9XCIpYDtcbiAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgdGhyb3cgbmV3IEVycm9yUmVzcG9uc2VJbXBsKDQwMCwgXCJCYWQgUmVxdWVzdFwiLCBuZXcgRXJyb3IobXNnKSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vQWN0aW9uRGVmaW5lZEVycm9yKHR5cGUsIHJvdXRlSWQpIHtcbiAgbGV0IGFydGljbGUgPSB0eXBlID09PSBcImNsaWVudEFjdGlvblwiID8gXCJhXCIgOiBcImFuXCI7XG4gIGxldCBtc2cgPSBgUm91dGUgXCIke3JvdXRlSWR9XCIgZG9lcyBub3QgaGF2ZSAke2FydGljbGV9ICR7dHlwZX0sIGJ1dCB5b3UgYXJlIHRyeWluZyB0byBzdWJtaXQgdG8gaXQuIFRvIGZpeCB0aGlzLCBwbGVhc2UgYWRkICR7YXJ0aWNsZX0gXFxgJHt0eXBlfVxcYCBmdW5jdGlvbiB0byB0aGUgcm91dGVgO1xuICBjb25zb2xlLmVycm9yKG1zZyk7XG4gIHRocm93IG5ldyBFcnJvclJlc3BvbnNlSW1wbCg0MDUsIFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsIG5ldyBFcnJvcihtc2cpLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudFJvdXRlcyhtYW5pZmVzdCwgcm91dGVNb2R1bGVzQ2FjaGUsIGluaXRpYWxTdGF0ZSwgc3NyLCBpc1NwYU1vZGUsIHBhcmVudElkID0gXCJcIiwgcm91dGVzQnlQYXJlbnRJZCA9IGdyb3VwUm91dGVzQnlQYXJlbnRJZChtYW5pZmVzdCksIG5lZWRzUmV2YWxpZGF0aW9uKSB7XG4gIHJldHVybiAocm91dGVzQnlQYXJlbnRJZFtwYXJlbnRJZF0gfHwgW10pLm1hcCgocm91dGUpID0+IHtcbiAgICBsZXQgcm91dGVNb2R1bGUgPSByb3V0ZU1vZHVsZXNDYWNoZVtyb3V0ZS5pZF07XG4gICAgZnVuY3Rpb24gZmV0Y2hTZXJ2ZXJIYW5kbGVyKHNpbmdsZUZldGNoKSB7XG4gICAgICBpbnZhcmlhbnQyKFxuICAgICAgICB0eXBlb2Ygc2luZ2xlRmV0Y2ggPT09IFwiZnVuY3Rpb25cIixcbiAgICAgICAgXCJObyBzaW5nbGUgZmV0Y2ggZnVuY3Rpb24gYXZhaWxhYmxlIGZvciByb3V0ZSBoYW5kbGVyXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2luZ2xlRmV0Y2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTZXJ2ZXJMb2FkZXIoc2luZ2xlRmV0Y2gpIHtcbiAgICAgIGlmICghcm91dGUuaGFzTG9hZGVyKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgcmV0dXJuIGZldGNoU2VydmVySGFuZGxlcihzaW5nbGVGZXRjaCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU2VydmVyQWN0aW9uKHNpbmdsZUZldGNoKSB7XG4gICAgICBpZiAoIXJvdXRlLmhhc0FjdGlvbikge1xuICAgICAgICB0aHJvdyBub0FjdGlvbkRlZmluZWRFcnJvcihcImFjdGlvblwiLCByb3V0ZS5pZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmV0Y2hTZXJ2ZXJIYW5kbGVyKHNpbmdsZUZldGNoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlZmV0Y2hNb2R1bGUobW9kdWxlUGF0aCkge1xuICAgICAgaW1wb3J0KFxuICAgICAgICAvKiBAdml0ZS1pZ25vcmUgKi9cbiAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICBtb2R1bGVQYXRoXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmVmZXRjaFJvdXRlTW9kdWxlQ2h1bmtzKHJvdXRlMikge1xuICAgICAgaWYgKHJvdXRlMi5jbGllbnRBY3Rpb25Nb2R1bGUpIHtcbiAgICAgICAgcHJlZmV0Y2hNb2R1bGUocm91dGUyLmNsaWVudEFjdGlvbk1vZHVsZSk7XG4gICAgICB9XG4gICAgICBpZiAocm91dGUyLmNsaWVudExvYWRlck1vZHVsZSkge1xuICAgICAgICBwcmVmZXRjaE1vZHVsZShyb3V0ZTIuY2xpZW50TG9hZGVyTW9kdWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hTdHlsZXNBbmRDYWxsSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICBsZXQgY2FjaGVkTW9kdWxlID0gcm91dGVNb2R1bGVzQ2FjaGVbcm91dGUuaWRdO1xuICAgICAgbGV0IGxpbmtQcmVmZXRjaFByb21pc2UgPSBjYWNoZWRNb2R1bGUgPyBwcmVmZXRjaFN0eWxlTGlua3Mocm91dGUsIGNhY2hlZE1vZHVsZSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBsaW5rUHJlZmV0Y2hQcm9taXNlO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGF0YVJvdXRlID0ge1xuICAgICAgaWQ6IHJvdXRlLmlkLFxuICAgICAgaW5kZXg6IHJvdXRlLmluZGV4LFxuICAgICAgcGF0aDogcm91dGUucGF0aFxuICAgIH07XG4gICAgaWYgKHJvdXRlTW9kdWxlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGFSb3V0ZSwge1xuICAgICAgICAuLi5kYXRhUm91dGUsXG4gICAgICAgIC4uLmdldFJvdXRlQ29tcG9uZW50cyhyb3V0ZSwgcm91dGVNb2R1bGUsIGlzU3BhTW9kZSksXG4gICAgICAgIG1pZGRsZXdhcmU6IHJvdXRlTW9kdWxlLmNsaWVudE1pZGRsZXdhcmUsXG4gICAgICAgIGhhbmRsZTogcm91dGVNb2R1bGUuaGFuZGxlLFxuICAgICAgICBzaG91bGRSZXZhbGlkYXRlOiBnZXRTaG91bGRSZXZhbGlkYXRlRnVuY3Rpb24oXG4gICAgICAgICAgZGF0YVJvdXRlLnBhdGgsXG4gICAgICAgICAgcm91dGVNb2R1bGUsXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgc3NyLFxuICAgICAgICAgIG5lZWRzUmV2YWxpZGF0aW9uXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgICAgbGV0IGhhc0luaXRpYWxEYXRhID0gaW5pdGlhbFN0YXRlICYmIGluaXRpYWxTdGF0ZS5sb2FkZXJEYXRhICYmIHJvdXRlLmlkIGluIGluaXRpYWxTdGF0ZS5sb2FkZXJEYXRhO1xuICAgICAgbGV0IGluaXRpYWxEYXRhID0gaGFzSW5pdGlhbERhdGEgPyBpbml0aWFsU3RhdGU/LmxvYWRlckRhdGE/Lltyb3V0ZS5pZF0gOiB2b2lkIDA7XG4gICAgICBsZXQgaGFzSW5pdGlhbEVycm9yID0gaW5pdGlhbFN0YXRlICYmIGluaXRpYWxTdGF0ZS5lcnJvcnMgJiYgcm91dGUuaWQgaW4gaW5pdGlhbFN0YXRlLmVycm9ycztcbiAgICAgIGxldCBpbml0aWFsRXJyb3IgPSBoYXNJbml0aWFsRXJyb3IgPyBpbml0aWFsU3RhdGU/LmVycm9ycz8uW3JvdXRlLmlkXSA6IHZvaWQgMDtcbiAgICAgIGxldCBpc0h5ZHJhdGlvblJlcXVlc3QgPSBuZWVkc1JldmFsaWRhdGlvbiA9PSBudWxsICYmIChyb3V0ZU1vZHVsZS5jbGllbnRMb2FkZXI/Lmh5ZHJhdGUgPT09IHRydWUgfHwgIXJvdXRlLmhhc0xvYWRlcik7XG4gICAgICBkYXRhUm91dGUubG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zLCBjb250ZXh0LCB1bnN0YWJsZV9wYXR0ZXJuIH0sIHNpbmdsZUZldGNoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByZWZldGNoU3R5bGVzQW5kQ2FsbEhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaW52YXJpYW50MihcbiAgICAgICAgICAgICAgcm91dGVNb2R1bGUsXG4gICAgICAgICAgICAgIFwiTm8gYHJvdXRlTW9kdWxlYCBhdmFpbGFibGUgZm9yIGNyaXRpY2FsLXJvdXRlIGxvYWRlclwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1vZHVsZS5jbGllbnRMb2FkZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZldGNoU2VydmVyTG9hZGVyKHNpbmdsZUZldGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZU1vZHVsZS5jbGllbnRMb2FkZXIoe1xuICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHVuc3RhYmxlX3BhdHRlcm4sXG4gICAgICAgICAgICAgIGFzeW5jIHNlcnZlckxvYWRlcigpIHtcbiAgICAgICAgICAgICAgICBwcmV2ZW50SW52YWxpZFNlcnZlckhhbmRsZXJDYWxsKFwibG9hZGVyXCIsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNIeWRyYXRpb25SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFzSW5pdGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGhhc0luaXRpYWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbml0aWFsRXJyb3I7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFNlcnZlckxvYWRlcihzaW5nbGVGZXRjaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaXNIeWRyYXRpb25SZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkYXRhUm91dGUubG9hZGVyLmh5ZHJhdGUgPSBzaG91bGRIeWRyYXRlUm91dGVMb2FkZXIoXG4gICAgICAgIHJvdXRlLmlkLFxuICAgICAgICByb3V0ZU1vZHVsZS5jbGllbnRMb2FkZXIsXG4gICAgICAgIHJvdXRlLmhhc0xvYWRlcixcbiAgICAgICAgaXNTcGFNb2RlXG4gICAgICApO1xuICAgICAgZGF0YVJvdXRlLmFjdGlvbiA9ICh7IHJlcXVlc3QsIHBhcmFtcywgY29udGV4dCwgdW5zdGFibGVfcGF0dGVybiB9LCBzaW5nbGVGZXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJlZmV0Y2hTdHlsZXNBbmRDYWxsSGFuZGxlcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaW52YXJpYW50MihcbiAgICAgICAgICAgIHJvdXRlTW9kdWxlLFxuICAgICAgICAgICAgXCJObyBgcm91dGVNb2R1bGVgIGF2YWlsYWJsZSBmb3IgY3JpdGljYWwtcm91dGUgYWN0aW9uXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghcm91dGVNb2R1bGUuY2xpZW50QWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaXNTcGFNb2RlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5vQWN0aW9uRGVmaW5lZEVycm9yKFwiY2xpZW50QWN0aW9uXCIsIHJvdXRlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZXRjaFNlcnZlckFjdGlvbihzaW5nbGVGZXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3V0ZU1vZHVsZS5jbGllbnRBY3Rpb24oe1xuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB1bnN0YWJsZV9wYXR0ZXJuLFxuICAgICAgICAgICAgYXN5bmMgc2VydmVyQWN0aW9uKCkge1xuICAgICAgICAgICAgICBwcmV2ZW50SW52YWxpZFNlcnZlckhhbmRsZXJDYWxsKFwiYWN0aW9uXCIsIHJvdXRlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZldGNoU2VydmVyQWN0aW9uKHNpbmdsZUZldGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXJvdXRlLmhhc0NsaWVudExvYWRlcikge1xuICAgICAgICBkYXRhUm91dGUubG9hZGVyID0gKF8sIHNpbmdsZUZldGNoKSA9PiBwcmVmZXRjaFN0eWxlc0FuZENhbGxIYW5kbGVyKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2hTZXJ2ZXJMb2FkZXIoc2luZ2xlRmV0Y2gpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghcm91dGUuaGFzQ2xpZW50QWN0aW9uKSB7XG4gICAgICAgIGRhdGFSb3V0ZS5hY3Rpb24gPSAoXywgc2luZ2xlRmV0Y2gpID0+IHByZWZldGNoU3R5bGVzQW5kQ2FsbEhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgIGlmIChpc1NwYU1vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5vQWN0aW9uRGVmaW5lZEVycm9yKFwiY2xpZW50QWN0aW9uXCIsIHJvdXRlLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZldGNoU2VydmVyQWN0aW9uKHNpbmdsZUZldGNoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsZXQgbGF6eVJvdXRlUHJvbWlzZTtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldExhenlSb3V0ZSgpIHtcbiAgICAgICAgaWYgKGxhenlSb3V0ZVByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgbGF6eVJvdXRlUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBsYXp5Um91dGVQcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAocm91dGUuY2xpZW50TG9hZGVyTW9kdWxlIHx8IHJvdXRlLmNsaWVudEFjdGlvbk1vZHVsZSkge1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcm91dGVNb2R1bGVQcm9taXNlID0gbG9hZFJvdXRlTW9kdWxlV2l0aEJsb2NraW5nTGlua3MoXG4gICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgIHJvdXRlTW9kdWxlc0NhY2hlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcmVmZXRjaFJvdXRlTW9kdWxlQ2h1bmtzKHJvdXRlKTtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcm91dGVNb2R1bGVQcm9taXNlO1xuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4gYXdhaXQgbGF6eVJvdXRlUHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGRhdGFSb3V0ZS5sYXp5ID0ge1xuICAgICAgICBsb2FkZXI6IHJvdXRlLmhhc0NsaWVudExvYWRlciA/IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBsZXQgeyBjbGllbnRMb2FkZXIgfSA9IHJvdXRlLmNsaWVudExvYWRlck1vZHVsZSA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgICAgcm91dGUuY2xpZW50TG9hZGVyTW9kdWxlXG4gICAgICAgICAgKSA6IGF3YWl0IGdldExhenlSb3V0ZSgpO1xuICAgICAgICAgIGludmFyaWFudDIoY2xpZW50TG9hZGVyLCBcIk5vIGBjbGllbnRMb2FkZXJgIGV4cG9ydCBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gKGFyZ3MsIHNpbmdsZUZldGNoKSA9PiBjbGllbnRMb2FkZXIoe1xuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAgIGFzeW5jIHNlcnZlckxvYWRlcigpIHtcbiAgICAgICAgICAgICAgcHJldmVudEludmFsaWRTZXJ2ZXJIYW5kbGVyQ2FsbChcImxvYWRlclwiLCByb3V0ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaFNlcnZlckxvYWRlcihzaW5nbGVGZXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiB2b2lkIDAsXG4gICAgICAgIGFjdGlvbjogcm91dGUuaGFzQ2xpZW50QWN0aW9uID8gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGxldCBjbGllbnRBY3Rpb25Qcm9taXNlID0gcm91dGUuY2xpZW50QWN0aW9uTW9kdWxlID8gaW1wb3J0KFxuICAgICAgICAgICAgLyogQHZpdGUtaWdub3JlICovXG4gICAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgICAgICByb3V0ZS5jbGllbnRBY3Rpb25Nb2R1bGVcbiAgICAgICAgICApIDogZ2V0TGF6eVJvdXRlKCk7XG4gICAgICAgICAgcHJlZmV0Y2hSb3V0ZU1vZHVsZUNodW5rcyhyb3V0ZSk7XG4gICAgICAgICAgbGV0IHsgY2xpZW50QWN0aW9uIH0gPSBhd2FpdCBjbGllbnRBY3Rpb25Qcm9taXNlO1xuICAgICAgICAgIGludmFyaWFudDIoY2xpZW50QWN0aW9uLCBcIk5vIGBjbGllbnRBY3Rpb25gIGV4cG9ydCBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gKGFyZ3MsIHNpbmdsZUZldGNoKSA9PiBjbGllbnRBY3Rpb24oe1xuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAgIGFzeW5jIHNlcnZlckFjdGlvbigpIHtcbiAgICAgICAgICAgICAgcHJldmVudEludmFsaWRTZXJ2ZXJIYW5kbGVyQ2FsbChcImFjdGlvblwiLCByb3V0ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaFNlcnZlckFjdGlvbihzaW5nbGVGZXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gOiB2b2lkIDAsXG4gICAgICAgIG1pZGRsZXdhcmU6IHJvdXRlLmhhc0NsaWVudE1pZGRsZXdhcmUgPyBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgbGV0IHsgY2xpZW50TWlkZGxld2FyZSB9ID0gcm91dGUuY2xpZW50TWlkZGxld2FyZU1vZHVsZSA/IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgICAgcm91dGUuY2xpZW50TWlkZGxld2FyZU1vZHVsZVxuICAgICAgICAgICkgOiBhd2FpdCBnZXRMYXp5Um91dGUoKTtcbiAgICAgICAgICBpbnZhcmlhbnQyKGNsaWVudE1pZGRsZXdhcmUsIFwiTm8gYGNsaWVudE1pZGRsZXdhcmVgIGV4cG9ydCBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gY2xpZW50TWlkZGxld2FyZTtcbiAgICAgICAgfSA6IHZvaWQgMCxcbiAgICAgICAgc2hvdWxkUmV2YWxpZGF0ZTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGxldCBsYXp5Um91dGUgPSBhd2FpdCBnZXRMYXp5Um91dGUoKTtcbiAgICAgICAgICByZXR1cm4gZ2V0U2hvdWxkUmV2YWxpZGF0ZUZ1bmN0aW9uKFxuICAgICAgICAgICAgZGF0YVJvdXRlLnBhdGgsXG4gICAgICAgICAgICBsYXp5Um91dGUsXG4gICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgIHNzcixcbiAgICAgICAgICAgIG5lZWRzUmV2YWxpZGF0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlOiBhc3luYyAoKSA9PiAoYXdhaXQgZ2V0TGF6eVJvdXRlKCkpLmhhbmRsZSxcbiAgICAgICAgLy8gTm8gbmVlZCB0byB3cmFwIHRoZXNlIGluIGxheW91dCBzaW5jZSB0aGUgcm9vdCByb3V0ZSBpcyBuZXZlclxuICAgICAgICAvLyBsb2FkZWQgdmlhIHJvdXRlLmxhenkoKVxuICAgICAgICBDb21wb25lbnQ6IGFzeW5jICgpID0+IChhd2FpdCBnZXRMYXp5Um91dGUoKSkuQ29tcG9uZW50LFxuICAgICAgICBFcnJvckJvdW5kYXJ5OiByb3V0ZS5oYXNFcnJvckJvdW5kYXJ5ID8gYXN5bmMgKCkgPT4gKGF3YWl0IGdldExhenlSb3V0ZSgpKS5FcnJvckJvdW5kYXJ5IDogdm9pZCAwXG4gICAgICB9O1xuICAgIH1cbiAgICBsZXQgY2hpbGRyZW4gPSBjcmVhdGVDbGllbnRSb3V0ZXMoXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIHJvdXRlTW9kdWxlc0NhY2hlLFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgc3NyLFxuICAgICAgaXNTcGFNb2RlLFxuICAgICAgcm91dGUuaWQsXG4gICAgICByb3V0ZXNCeVBhcmVudElkLFxuICAgICAgbmVlZHNSZXZhbGlkYXRpb25cbiAgICApO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSBkYXRhUm91dGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICByZXR1cm4gZGF0YVJvdXRlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNob3VsZFJldmFsaWRhdGVGdW5jdGlvbihwYXRoLCByb3V0ZSwgbWFuaWZlc3RSb3V0ZSwgc3NyLCBuZWVkc1JldmFsaWRhdGlvbikge1xuICBpZiAobmVlZHNSZXZhbGlkYXRpb24pIHtcbiAgICByZXR1cm4gd3JhcFNob3VsZFJldmFsaWRhdGVGb3JIZHIoXG4gICAgICBtYW5pZmVzdFJvdXRlLmlkLFxuICAgICAgcm91dGUuc2hvdWxkUmV2YWxpZGF0ZSxcbiAgICAgIG5lZWRzUmV2YWxpZGF0aW9uXG4gICAgKTtcbiAgfVxuICBpZiAoIXNzciAmJiBtYW5pZmVzdFJvdXRlLmhhc0xvYWRlciAmJiAhbWFuaWZlc3RSb3V0ZS5oYXNDbGllbnRMb2FkZXIpIHtcbiAgICBsZXQgbXlQYXJhbXMgPSBwYXRoID8gY29tcGlsZVBhdGgocGF0aClbMV0ubWFwKChwKSA9PiBwLnBhcmFtTmFtZSkgOiBbXTtcbiAgICBjb25zdCBkaWRQYXJhbXNDaGFuZ2UgPSAob3B0cykgPT4gbXlQYXJhbXMuc29tZSgocCkgPT4gb3B0cy5jdXJyZW50UGFyYW1zW3BdICE9PSBvcHRzLm5leHRQYXJhbXNbcF0pO1xuICAgIGlmIChyb3V0ZS5zaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgICBsZXQgZm4gPSByb3V0ZS5zaG91bGRSZXZhbGlkYXRlO1xuICAgICAgcmV0dXJuIChvcHRzKSA9PiBmbih7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBkaWRQYXJhbXNDaGFuZ2Uob3B0cylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdHMpID0+IGRpZFBhcmFtc0NoYW5nZShvcHRzKTtcbiAgICB9XG4gIH1cbiAgaWYgKHNzciAmJiByb3V0ZS5zaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgbGV0IGZuID0gcm91dGUuc2hvdWxkUmV2YWxpZGF0ZTtcbiAgICByZXR1cm4gKG9wdHMpID0+IGZuKHsgLi4ub3B0cywgZGVmYXVsdFNob3VsZFJldmFsaWRhdGU6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHJvdXRlLnNob3VsZFJldmFsaWRhdGU7XG59XG5mdW5jdGlvbiB3cmFwU2hvdWxkUmV2YWxpZGF0ZUZvckhkcihyb3V0ZUlkLCByb3V0ZVNob3VsZFJldmFsaWRhdGUsIG5lZWRzUmV2YWxpZGF0aW9uKSB7XG4gIGxldCBoYW5kbGVkUmV2YWxpZGF0aW9uID0gZmFsc2U7XG4gIHJldHVybiAoYXJnKSA9PiB7XG4gICAgaWYgKCFoYW5kbGVkUmV2YWxpZGF0aW9uKSB7XG4gICAgICBoYW5kbGVkUmV2YWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZWVkc1JldmFsaWRhdGlvbi5oYXMocm91dGVJZCk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZVNob3VsZFJldmFsaWRhdGUgPyByb3V0ZVNob3VsZFJldmFsaWRhdGUoYXJnKSA6IGFyZy5kZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTtcbiAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRSb3V0ZU1vZHVsZVdpdGhCbG9ja2luZ0xpbmtzKHJvdXRlLCByb3V0ZU1vZHVsZXMpIHtcbiAgbGV0IHJvdXRlTW9kdWxlUHJvbWlzZSA9IGxvYWRSb3V0ZU1vZHVsZShyb3V0ZSwgcm91dGVNb2R1bGVzKTtcbiAgbGV0IHByZWZldGNoUm91dGVDc3NQcm9taXNlID0gcHJlZmV0Y2hSb3V0ZUNzcyhyb3V0ZSk7XG4gIGxldCByb3V0ZU1vZHVsZSA9IGF3YWl0IHJvdXRlTW9kdWxlUHJvbWlzZTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHByZWZldGNoUm91dGVDc3NQcm9taXNlLFxuICAgIHByZWZldGNoU3R5bGVMaW5rcyhyb3V0ZSwgcm91dGVNb2R1bGUpXG4gIF0pO1xuICByZXR1cm4ge1xuICAgIENvbXBvbmVudDogZ2V0Um91dGVNb2R1bGVDb21wb25lbnQocm91dGVNb2R1bGUpLFxuICAgIEVycm9yQm91bmRhcnk6IHJvdXRlTW9kdWxlLkVycm9yQm91bmRhcnksXG4gICAgY2xpZW50TWlkZGxld2FyZTogcm91dGVNb2R1bGUuY2xpZW50TWlkZGxld2FyZSxcbiAgICBjbGllbnRBY3Rpb246IHJvdXRlTW9kdWxlLmNsaWVudEFjdGlvbixcbiAgICBjbGllbnRMb2FkZXI6IHJvdXRlTW9kdWxlLmNsaWVudExvYWRlcixcbiAgICBoYW5kbGU6IHJvdXRlTW9kdWxlLmhhbmRsZSxcbiAgICBsaW5rczogcm91dGVNb2R1bGUubGlua3MsXG4gICAgbWV0YTogcm91dGVNb2R1bGUubWV0YSxcbiAgICBzaG91bGRSZXZhbGlkYXRlOiByb3V0ZU1vZHVsZS5zaG91bGRSZXZhbGlkYXRlXG4gIH07XG59XG5mdW5jdGlvbiBnZXRSb3V0ZU1vZHVsZUNvbXBvbmVudChyb3V0ZU1vZHVsZSkge1xuICBpZiAocm91dGVNb2R1bGUuZGVmYXVsdCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICBsZXQgaXNFbXB0eU9iamVjdCA9IHR5cGVvZiByb3V0ZU1vZHVsZS5kZWZhdWx0ID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHJvdXRlTW9kdWxlLmRlZmF1bHQpLmxlbmd0aCA9PT0gMDtcbiAgaWYgKCFpc0VtcHR5T2JqZWN0KSB7XG4gICAgcmV0dXJuIHJvdXRlTW9kdWxlLmRlZmF1bHQ7XG4gIH1cbn1cbmZ1bmN0aW9uIHNob3VsZEh5ZHJhdGVSb3V0ZUxvYWRlcihyb3V0ZUlkLCBjbGllbnRMb2FkZXIsIGhhc0xvYWRlciwgaXNTcGFNb2RlKSB7XG4gIHJldHVybiBpc1NwYU1vZGUgJiYgcm91dGVJZCAhPT0gXCJyb290XCIgfHwgY2xpZW50TG9hZGVyICE9IG51bGwgJiYgKGNsaWVudExvYWRlci5oeWRyYXRlID09PSB0cnVlIHx8IGhhc0xvYWRlciAhPT0gdHJ1ZSk7XG59XG5cbi8vIGxpYi9kb20vc3NyL2ZvZy1vZi13YXIudHNcbnZhciBuZXh0UGF0aHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGRpc2NvdmVyZWRQYXRoc01heFNpemUgPSAxZTM7XG52YXIgZGlzY292ZXJlZFBhdGhzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBVUkxfTElNSVQgPSA3NjgwO1xuZnVuY3Rpb24gaXNGb2dPZldhckVuYWJsZWQocm91dGVEaXNjb3ZlcnksIHNzcikge1xuICByZXR1cm4gcm91dGVEaXNjb3ZlcnkubW9kZSA9PT0gXCJsYXp5XCIgJiYgc3NyID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0UGFydGlhbE1hbmlmZXN0KHsgc3JpLCAuLi5tYW5pZmVzdCB9LCByb3V0ZXIpIHtcbiAgbGV0IHJvdXRlSWRzID0gbmV3IFNldChyb3V0ZXIuc3RhdGUubWF0Y2hlcy5tYXAoKG0pID0+IG0ucm91dGUuaWQpKTtcbiAgbGV0IHNlZ21lbnRzID0gcm91dGVyLnN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBwYXRocyA9IFtcIi9cIl07XG4gIHNlZ21lbnRzLnBvcCgpO1xuICB3aGlsZSAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgIHBhdGhzLnB1c2goYC8ke3NlZ21lbnRzLmpvaW4oXCIvXCIpfWApO1xuICAgIHNlZ21lbnRzLnBvcCgpO1xuICB9XG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlci5yb3V0ZXMsIHBhdGgsIHJvdXRlci5iYXNlbmFtZSk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIG1hdGNoZXMuZm9yRWFjaCgobSkgPT4gcm91dGVJZHMuYWRkKG0ucm91dGUuaWQpKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgaW5pdGlhbFJvdXRlcyA9IFsuLi5yb3V0ZUlkc10ucmVkdWNlKFxuICAgIChhY2MsIGlkKSA9PiBPYmplY3QuYXNzaWduKGFjYywgeyBbaWRdOiBtYW5pZmVzdC5yb3V0ZXNbaWRdIH0pLFxuICAgIHt9XG4gICk7XG4gIHJldHVybiB7XG4gICAgLi4ubWFuaWZlc3QsXG4gICAgcm91dGVzOiBpbml0aWFsUm91dGVzLFxuICAgIHNyaTogc3JpID8gdHJ1ZSA6IHZvaWQgMFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25GdW5jdGlvbihtYW5pZmVzdCwgcm91dGVNb2R1bGVzLCBzc3IsIHJvdXRlRGlzY292ZXJ5LCBpc1NwYU1vZGUsIGJhc2VuYW1lKSB7XG4gIGlmICghaXNGb2dPZldhckVuYWJsZWQocm91dGVEaXNjb3ZlcnksIHNzcikpIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIHJldHVybiBhc3luYyAoeyBwYXRoLCBwYXRjaCwgc2lnbmFsLCBmZXRjaGVyS2V5IH0pID0+IHtcbiAgICBpZiAoZGlzY292ZXJlZFBhdGhzLmhhcyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBmZXRjaEFuZEFwcGx5TWFuaWZlc3RQYXRjaGVzKFxuICAgICAgW3BhdGhdLFxuICAgICAgZmV0Y2hlcktleSA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogcGF0aCxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgcm91dGVNb2R1bGVzLFxuICAgICAgc3NyLFxuICAgICAgaXNTcGFNb2RlLFxuICAgICAgYmFzZW5hbWUsXG4gICAgICByb3V0ZURpc2NvdmVyeS5tYW5pZmVzdFBhdGgsXG4gICAgICBwYXRjaCxcbiAgICAgIHNpZ25hbFxuICAgICk7XG4gIH07XG59XG5mdW5jdGlvbiB1c2VGb2dPRldhckRpc2NvdmVyeShyb3V0ZXIsIG1hbmlmZXN0LCByb3V0ZU1vZHVsZXMsIHNzciwgcm91dGVEaXNjb3ZlcnksIGlzU3BhTW9kZSkge1xuICBSZWFjdDcudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzRm9nT2ZXYXJFbmFibGVkKHJvdXRlRGlzY292ZXJ5LCBzc3IpIHx8IC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyB5ZXRcbiAgICB3aW5kb3cubmF2aWdhdG9yPy5jb25uZWN0aW9uPy5zYXZlRGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnQoZWwpIHtcbiAgICAgIGxldCBwYXRoID0gZWwudGFnTmFtZSA9PT0gXCJGT1JNXCIgPyBlbC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgOiBlbC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBwYXRobmFtZSA9IGVsLnRhZ05hbWUgPT09IFwiQVwiID8gZWwucGF0aG5hbWUgOiBuZXcgVVJMKHBhdGgsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLnBhdGhuYW1lO1xuICAgICAgaWYgKCFkaXNjb3ZlcmVkUGF0aHMuaGFzKHBhdGhuYW1lKSkge1xuICAgICAgICBuZXh0UGF0aHMuYWRkKHBhdGhuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQYXRjaGVzKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbZGF0YS1kaXNjb3Zlcl0sIGZvcm1bZGF0YS1kaXNjb3Zlcl1cIikuZm9yRWFjaChyZWdpc3RlckVsZW1lbnQpO1xuICAgICAgbGV0IGxhenlQYXRocyA9IEFycmF5LmZyb20obmV4dFBhdGhzLmtleXMoKSkuZmlsdGVyKChwYXRoKSA9PiB7XG4gICAgICAgIGlmIChkaXNjb3ZlcmVkUGF0aHMuaGFzKHBhdGgpKSB7XG4gICAgICAgICAgbmV4dFBhdGhzLmRlbGV0ZShwYXRoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChsYXp5UGF0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZldGNoQW5kQXBwbHlNYW5pZmVzdFBhdGNoZXMoXG4gICAgICAgICAgbGF6eVBhdGhzLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgICAgcm91dGVNb2R1bGVzLFxuICAgICAgICAgIHNzcixcbiAgICAgICAgICBpc1NwYU1vZGUsXG4gICAgICAgICAgcm91dGVyLmJhc2VuYW1lLFxuICAgICAgICAgIHJvdXRlRGlzY292ZXJ5Lm1hbmlmZXN0UGF0aCxcbiAgICAgICAgICByb3V0ZXIucGF0Y2hSb3V0ZXNcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtYW5pZmVzdCBwYXRjaGVzXCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVib3VuY2VkRmV0Y2hQYXRjaGVzID0gZGVib3VuY2UoZmV0Y2hQYXRjaGVzLCAxMDApO1xuICAgIGZldGNoUGF0Y2hlcygpO1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IGRlYm91bmNlZEZldGNoUGF0Y2hlcygpKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZGlzY292ZXJcIiwgXCJocmVmXCIsIFwiYWN0aW9uXCJdXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfSwgW3NzciwgaXNTcGFNb2RlLCBtYW5pZmVzdCwgcm91dGVNb2R1bGVzLCByb3V0ZXIsIHJvdXRlRGlzY292ZXJ5XSk7XG59XG5mdW5jdGlvbiBnZXRNYW5pZmVzdFBhdGgoX21hbmlmZXN0UGF0aCwgYmFzZW5hbWUpIHtcbiAgbGV0IG1hbmlmZXN0UGF0aCA9IF9tYW5pZmVzdFBhdGggfHwgXCIvX19tYW5pZmVzdFwiO1xuICBpZiAoYmFzZW5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBtYW5pZmVzdFBhdGg7XG4gIH1cbiAgcmV0dXJuIGAke2Jhc2VuYW1lfSR7bWFuaWZlc3RQYXRofWAucmVwbGFjZSgvXFwvKy9nLCBcIi9cIik7XG59XG52YXIgTUFOSUZFU1RfVkVSU0lPTl9TVE9SQUdFX0tFWSA9IFwicmVhY3Qtcm91dGVyLW1hbmlmZXN0LXZlcnNpb25cIjtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQXBwbHlNYW5pZmVzdFBhdGNoZXMocGF0aHMsIGVycm9yUmVsb2FkUGF0aCwgbWFuaWZlc3QsIHJvdXRlTW9kdWxlcywgc3NyLCBpc1NwYU1vZGUsIGJhc2VuYW1lLCBtYW5pZmVzdFBhdGgsIHBhdGNoUm91dGVzLCBzaWduYWwpIHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICBzZWFyY2hQYXJhbXMuc2V0KFwicGF0aHNcIiwgcGF0aHMuc29ydCgpLmpvaW4oXCIsXCIpKTtcbiAgc2VhcmNoUGFyYW1zLnNldChcInZlcnNpb25cIiwgbWFuaWZlc3QudmVyc2lvbik7XG4gIGxldCB1cmwgPSBuZXcgVVJMKFxuICAgIGdldE1hbmlmZXN0UGF0aChtYW5pZmVzdFBhdGgsIGJhc2VuYW1lKSxcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICk7XG4gIHVybC5zZWFyY2ggPSBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcbiAgaWYgKHVybC50b1N0cmluZygpLmxlbmd0aCA+IFVSTF9MSU1JVCkge1xuICAgIG5leHRQYXRocy5jbGVhcigpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VydmVyUGF0Y2hlcztcbiAgdHJ5IHtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IHNpZ25hbCB9KTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09PSAyMDQgJiYgcmVzLmhlYWRlcnMuaGFzKFwiWC1SZW1peC1SZWxvYWQtRG9jdW1lbnRcIikpIHtcbiAgICAgIGlmICghZXJyb3JSZWxvYWRQYXRoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkRldGVjdGVkIGEgbWFuaWZlc3QgdmVyc2lvbiBtaXNtYXRjaCBkdXJpbmcgZWFnZXIgcm91dGUgZGlzY292ZXJ5LiBUaGUgbmV4dCBuYXZpZ2F0aW9uL2ZldGNoIHRvIGFuIHVuZGlzY292ZXJlZCByb3V0ZSB3aWxsIHJlc3VsdCBpbiBhIG5ldyBkb2N1bWVudCBuYXZpZ2F0aW9uIHRvIHN5bmMgdXAgd2l0aCB0aGUgbGF0ZXN0IG1hbmlmZXN0LlwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKE1BTklGRVNUX1ZFUlNJT05fU1RPUkFHRV9LRVkpID09PSBtYW5pZmVzdC52ZXJzaW9uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiVW5hYmxlIHRvIGRpc2NvdmVyIHJvdXRlcyBkdWUgdG8gbWFuaWZlc3QgdmVyc2lvbiBtaXNtYXRjaC5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oTUFOSUZFU1RfVkVSU0lPTl9TVE9SQUdFX0tFWSwgbWFuaWZlc3QudmVyc2lvbik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXJyb3JSZWxvYWRQYXRoO1xuICAgICAgY29uc29sZS53YXJuKFwiRGV0ZWN0ZWQgbWFuaWZlc3QgdmVyc2lvbiBtaXNtYXRjaCwgcmVsb2FkaW5nLi4uXCIpO1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShNQU5JRkVTVF9WRVJTSU9OX1NUT1JBR0VfS0VZKTtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gICAgc2VydmVyUGF0Y2hlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoc2lnbmFsPy5hYm9ydGVkKSByZXR1cm47XG4gICAgdGhyb3cgZTtcbiAgfVxuICBsZXQga25vd25Sb3V0ZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG1hbmlmZXN0LnJvdXRlcykpO1xuICBsZXQgcGF0Y2hlcyA9IE9iamVjdC52YWx1ZXMoc2VydmVyUGF0Y2hlcykucmVkdWNlKChhY2MsIHJvdXRlKSA9PiB7XG4gICAgaWYgKHJvdXRlICYmICFrbm93blJvdXRlcy5oYXMocm91dGUuaWQpKSB7XG4gICAgICBhY2Nbcm91dGUuaWRdID0gcm91dGU7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgT2JqZWN0LmFzc2lnbihtYW5pZmVzdC5yb3V0ZXMsIHBhdGNoZXMpO1xuICBwYXRocy5mb3JFYWNoKChwKSA9PiBhZGRUb0ZpZm9RdWV1ZShwLCBkaXNjb3ZlcmVkUGF0aHMpKTtcbiAgbGV0IHBhcmVudElkcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIE9iamVjdC52YWx1ZXMocGF0Y2hlcykuZm9yRWFjaCgocGF0Y2gpID0+IHtcbiAgICBpZiAocGF0Y2ggJiYgKCFwYXRjaC5wYXJlbnRJZCB8fCAhcGF0Y2hlc1twYXRjaC5wYXJlbnRJZF0pKSB7XG4gICAgICBwYXJlbnRJZHMuYWRkKHBhdGNoLnBhcmVudElkKTtcbiAgICB9XG4gIH0pO1xuICBwYXJlbnRJZHMuZm9yRWFjaChcbiAgICAocGFyZW50SWQpID0+IHBhdGNoUm91dGVzKFxuICAgICAgcGFyZW50SWQgfHwgbnVsbCxcbiAgICAgIGNyZWF0ZUNsaWVudFJvdXRlcyhwYXRjaGVzLCByb3V0ZU1vZHVsZXMsIG51bGwsIHNzciwgaXNTcGFNb2RlLCBwYXJlbnRJZClcbiAgICApXG4gICk7XG59XG5mdW5jdGlvbiBhZGRUb0ZpZm9RdWV1ZShwYXRoLCBxdWV1ZSkge1xuICBpZiAocXVldWUuc2l6ZSA+PSBkaXNjb3ZlcmVkUGF0aHNNYXhTaXplKSB7XG4gICAgbGV0IGZpcnN0ID0gcXVldWUudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgIHF1ZXVlLmRlbGV0ZShmaXJzdCk7XG4gIH1cbiAgcXVldWUuYWRkKHBhdGgpO1xufVxuZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHdhaXQpIHtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKC4uLmFyZ3MpLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gbGliL2RvbS9zc3IvY29tcG9uZW50cy50c3hcbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJDb250ZXh0MigpIHtcbiAgbGV0IGNvbnRleHQgPSBSZWFjdDgudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gIGludmFyaWFudDIoXG4gICAgY29udGV4dCxcbiAgICBcIllvdSBtdXN0IHJlbmRlciB0aGlzIGVsZW1lbnQgaW5zaWRlIGEgPERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyPiBlbGVtZW50XCJcbiAgKTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGVDb250ZXh0KCkge1xuICBsZXQgY29udGV4dCA9IFJlYWN0OC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBpbnZhcmlhbnQyKFxuICAgIGNvbnRleHQsXG4gICAgXCJZb3UgbXVzdCByZW5kZXIgdGhpcyBlbGVtZW50IGluc2lkZSBhIDxEYXRhUm91dGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyPiBlbGVtZW50XCJcbiAgKTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG52YXIgRnJhbWV3b3JrQ29udGV4dCA9IFJlYWN0OC5jcmVhdGVDb250ZXh0KHZvaWQgMCk7XG5GcmFtZXdvcmtDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJGcmFtZXdvcmtDb250ZXh0XCI7XG5mdW5jdGlvbiB1c2VGcmFtZXdvcmtDb250ZXh0KCkge1xuICBsZXQgY29udGV4dCA9IFJlYWN0OC51c2VDb250ZXh0KEZyYW1ld29ya0NvbnRleHQpO1xuICBpbnZhcmlhbnQyKFxuICAgIGNvbnRleHQsXG4gICAgXCJZb3UgbXVzdCByZW5kZXIgdGhpcyBlbGVtZW50IGluc2lkZSBhIDxIeWRyYXRlZFJvdXRlcj4gZWxlbWVudFwiXG4gICk7XG4gIHJldHVybiBjb250ZXh0O1xufVxuZnVuY3Rpb24gdXNlUHJlZmV0Y2hCZWhhdmlvcihwcmVmZXRjaCwgdGhlaXJFbGVtZW50UHJvcHMpIHtcbiAgbGV0IGZyYW1ld29ya0NvbnRleHQgPSBSZWFjdDgudXNlQ29udGV4dChGcmFtZXdvcmtDb250ZXh0KTtcbiAgbGV0IFttYXliZVByZWZldGNoLCBzZXRNYXliZVByZWZldGNoXSA9IFJlYWN0OC51c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc2hvdWxkUHJlZmV0Y2gsIHNldFNob3VsZFByZWZldGNoXSA9IFJlYWN0OC51c2VTdGF0ZShmYWxzZSk7XG4gIGxldCB7IG9uRm9jdXMsIG9uQmx1ciwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUsIG9uVG91Y2hTdGFydCB9ID0gdGhlaXJFbGVtZW50UHJvcHM7XG4gIGxldCByZWYgPSBSZWFjdDgudXNlUmVmKG51bGwpO1xuICBSZWFjdDgudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJlZmV0Y2ggPT09IFwicmVuZGVyXCIpIHtcbiAgICAgIHNldFNob3VsZFByZWZldGNoKHRydWUpO1xuICAgIH1cbiAgICBpZiAocHJlZmV0Y2ggPT09IFwidmlld3BvcnRcIikge1xuICAgICAgbGV0IGNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIHNldFNob3VsZFByZWZldGNoKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCB7IHRocmVzaG9sZDogMC41IH0pO1xuICAgICAgaWYgKHJlZi5jdXJyZW50KSBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcHJlZmV0Y2hdKTtcbiAgUmVhY3Q4LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heWJlUHJlZmV0Y2gpIHtcbiAgICAgIGxldCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaG91bGRQcmVmZXRjaCh0cnVlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFttYXliZVByZWZldGNoXSk7XG4gIGxldCBzZXRJbnRlbnQgPSAoKSA9PiB7XG4gICAgc2V0TWF5YmVQcmVmZXRjaCh0cnVlKTtcbiAgfTtcbiAgbGV0IGNhbmNlbEludGVudCA9ICgpID0+IHtcbiAgICBzZXRNYXliZVByZWZldGNoKGZhbHNlKTtcbiAgICBzZXRTaG91bGRQcmVmZXRjaChmYWxzZSk7XG4gIH07XG4gIGlmICghZnJhbWV3b3JrQ29udGV4dCkge1xuICAgIHJldHVybiBbZmFsc2UsIHJlZiwge31dO1xuICB9XG4gIGlmIChwcmVmZXRjaCAhPT0gXCJpbnRlbnRcIikge1xuICAgIHJldHVybiBbc2hvdWxkUHJlZmV0Y2gsIHJlZiwge31dO1xuICB9XG4gIHJldHVybiBbXG4gICAgc2hvdWxkUHJlZmV0Y2gsXG4gICAgcmVmLFxuICAgIHtcbiAgICAgIG9uRm9jdXM6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIHNldEludGVudCksXG4gICAgICBvbkJsdXI6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQmx1ciwgY2FuY2VsSW50ZW50KSxcbiAgICAgIG9uTW91c2VFbnRlcjogY29tcG9zZUV2ZW50SGFuZGxlcnMob25Nb3VzZUVudGVyLCBzZXRJbnRlbnQpLFxuICAgICAgb25Nb3VzZUxlYXZlOiBjb21wb3NlRXZlbnRIYW5kbGVycyhvbk1vdXNlTGVhdmUsIGNhbmNlbEludGVudCksXG4gICAgICBvblRvdWNoU3RhcnQ6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uVG91Y2hTdGFydCwgc2V0SW50ZW50KVxuICAgIH1cbiAgXTtcbn1cbmZ1bmN0aW9uIGNvbXBvc2VFdmVudEhhbmRsZXJzKHRoZWlySGFuZGxlciwgb3VySGFuZGxlcikge1xuICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgdGhlaXJIYW5kbGVyICYmIHRoZWlySGFuZGxlcihldmVudCk7XG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBvdXJIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXRBY3RpdmVNYXRjaGVzKG1hdGNoZXMsIGVycm9ycywgaXNTcGFNb2RlKSB7XG4gIGlmIChpc1NwYU1vZGUgJiYgIWlzSHlkcmF0ZWQpIHtcbiAgICByZXR1cm4gW21hdGNoZXNbMF1dO1xuICB9XG4gIGlmIChlcnJvcnMpIHtcbiAgICBsZXQgZXJyb3JJZHggPSBtYXRjaGVzLmZpbmRJbmRleCgobSkgPT4gZXJyb3JzW20ucm91dGUuaWRdICE9PSB2b2lkIDApO1xuICAgIHJldHVybiBtYXRjaGVzLnNsaWNlKDAsIGVycm9ySWR4ICsgMSk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG52YXIgQ1JJVElDQUxfQ1NTX0RBVEFfQVRUUklCVVRFID0gXCJkYXRhLXJlYWN0LXJvdXRlci1jcml0aWNhbC1jc3NcIjtcbmZ1bmN0aW9uIExpbmtzKHsgbm9uY2UgfSkge1xuICBsZXQgeyBpc1NwYU1vZGUsIG1hbmlmZXN0LCByb3V0ZU1vZHVsZXMsIGNyaXRpY2FsQ3NzIH0gPSB1c2VGcmFtZXdvcmtDb250ZXh0KCk7XG4gIGxldCB7IGVycm9ycywgbWF0Y2hlczogcm91dGVyTWF0Y2hlcyB9ID0gdXNlRGF0YVJvdXRlclN0YXRlQ29udGV4dCgpO1xuICBsZXQgbWF0Y2hlcyA9IGdldEFjdGl2ZU1hdGNoZXMocm91dGVyTWF0Y2hlcywgZXJyb3JzLCBpc1NwYU1vZGUpO1xuICBsZXQga2V5ZWRMaW5rcyA9IFJlYWN0OC51c2VNZW1vKFxuICAgICgpID0+IGdldEtleWVkTGlua3NGb3JNYXRjaGVzKG1hdGNoZXMsIHJvdXRlTW9kdWxlcywgbWFuaWZlc3QpLFxuICAgIFttYXRjaGVzLCByb3V0ZU1vZHVsZXMsIG1hbmlmZXN0XVxuICApO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFJlYWN0OC5GcmFnbWVudCwgbnVsbCwgdHlwZW9mIGNyaXRpY2FsQ3NzID09PSBcInN0cmluZ1wiID8gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgIFwic3R5bGVcIixcbiAgICB7XG4gICAgICAuLi57IFtDUklUSUNBTF9DU1NfREFUQV9BVFRSSUJVVEVdOiBcIlwiIH0sXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGNyaXRpY2FsQ3NzIH1cbiAgICB9XG4gICkgOiBudWxsLCB0eXBlb2YgY3JpdGljYWxDc3MgPT09IFwib2JqZWN0XCIgPyAvKiBAX19QVVJFX18gKi8gUmVhY3Q4LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJsaW5rXCIsXG4gICAge1xuICAgICAgLi4ueyBbQ1JJVElDQUxfQ1NTX0RBVEFfQVRUUklCVVRFXTogXCJcIiB9LFxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGNyaXRpY2FsQ3NzLmhyZWYsXG4gICAgICBub25jZVxuICAgIH1cbiAgKSA6IG51bGwsIGtleWVkTGlua3MubWFwKFxuICAgICh7IGtleSwgbGluayB9KSA9PiBpc1BhZ2VMaW5rRGVzY3JpcHRvcihsaW5rKSA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChQcmVmZXRjaFBhZ2VMaW5rcywgeyBrZXksIG5vbmNlLCAuLi5saW5rIH0pIDogLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGtleSwgbm9uY2UsIC4uLmxpbmsgfSlcbiAgKSk7XG59XG5mdW5jdGlvbiBQcmVmZXRjaFBhZ2VMaW5rcyh7IHBhZ2UsIC4uLmxpbmtQcm9wcyB9KSB7XG4gIGxldCB7IHJvdXRlciB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQyKCk7XG4gIGxldCBtYXRjaGVzID0gUmVhY3Q4LnVzZU1lbW8oXG4gICAgKCkgPT4gbWF0Y2hSb3V0ZXMocm91dGVyLnJvdXRlcywgcGFnZSwgcm91dGVyLmJhc2VuYW1lKSxcbiAgICBbcm91dGVyLnJvdXRlcywgcGFnZSwgcm91dGVyLmJhc2VuYW1lXVxuICApO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFByZWZldGNoUGFnZUxpbmtzSW1wbCwgeyBwYWdlLCBtYXRjaGVzLCAuLi5saW5rUHJvcHMgfSk7XG59XG5mdW5jdGlvbiB1c2VLZXllZFByZWZldGNoTGlua3MobWF0Y2hlcykge1xuICBsZXQgeyBtYW5pZmVzdCwgcm91dGVNb2R1bGVzIH0gPSB1c2VGcmFtZXdvcmtDb250ZXh0KCk7XG4gIGxldCBba2V5ZWRQcmVmZXRjaExpbmtzLCBzZXRLZXllZFByZWZldGNoTGlua3NdID0gUmVhY3Q4LnVzZVN0YXRlKFtdKTtcbiAgUmVhY3Q4LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVycnVwdGVkID0gZmFsc2U7XG4gICAgdm9pZCBnZXRLZXllZFByZWZldGNoTGlua3MobWF0Y2hlcywgbWFuaWZlc3QsIHJvdXRlTW9kdWxlcykudGhlbihcbiAgICAgIChsaW5rcykgPT4ge1xuICAgICAgICBpZiAoIWludGVycnVwdGVkKSB7XG4gICAgICAgICAgc2V0S2V5ZWRQcmVmZXRjaExpbmtzKGxpbmtzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbbWF0Y2hlcywgbWFuaWZlc3QsIHJvdXRlTW9kdWxlc10pO1xuICByZXR1cm4ga2V5ZWRQcmVmZXRjaExpbmtzO1xufVxuZnVuY3Rpb24gUHJlZmV0Y2hQYWdlTGlua3NJbXBsKHtcbiAgcGFnZSxcbiAgbWF0Y2hlczogbmV4dE1hdGNoZXMsXG4gIC4uLmxpbmtQcm9wc1xufSkge1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgeyBtYW5pZmVzdCwgcm91dGVNb2R1bGVzIH0gPSB1c2VGcmFtZXdvcmtDb250ZXh0KCk7XG4gIGxldCB7IGJhc2VuYW1lIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dDIoKTtcbiAgbGV0IHsgbG9hZGVyRGF0YSwgbWF0Y2hlcyB9ID0gdXNlRGF0YVJvdXRlclN0YXRlQ29udGV4dCgpO1xuICBsZXQgbmV3TWF0Y2hlc0ZvckRhdGEgPSBSZWFjdDgudXNlTWVtbyhcbiAgICAoKSA9PiBnZXROZXdNYXRjaGVzRm9yTGlua3MoXG4gICAgICBwYWdlLFxuICAgICAgbmV4dE1hdGNoZXMsXG4gICAgICBtYXRjaGVzLFxuICAgICAgbWFuaWZlc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIFwiZGF0YVwiXG4gICAgKSxcbiAgICBbcGFnZSwgbmV4dE1hdGNoZXMsIG1hdGNoZXMsIG1hbmlmZXN0LCBsb2NhdGlvbl1cbiAgKTtcbiAgbGV0IG5ld01hdGNoZXNGb3JBc3NldHMgPSBSZWFjdDgudXNlTWVtbyhcbiAgICAoKSA9PiBnZXROZXdNYXRjaGVzRm9yTGlua3MoXG4gICAgICBwYWdlLFxuICAgICAgbmV4dE1hdGNoZXMsXG4gICAgICBtYXRjaGVzLFxuICAgICAgbWFuaWZlc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIFwiYXNzZXRzXCJcbiAgICApLFxuICAgIFtwYWdlLCBuZXh0TWF0Y2hlcywgbWF0Y2hlcywgbWFuaWZlc3QsIGxvY2F0aW9uXVxuICApO1xuICBsZXQgZGF0YUhyZWZzID0gUmVhY3Q4LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChwYWdlID09PSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IHJvdXRlc1BhcmFtcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgbGV0IGZvdW5kT3B0T3V0Um91dGUgPSBmYWxzZTtcbiAgICBuZXh0TWF0Y2hlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBsZXQgbWFuaWZlc3RSb3V0ZSA9IG1hbmlmZXN0LnJvdXRlc1ttLnJvdXRlLmlkXTtcbiAgICAgIGlmICghbWFuaWZlc3RSb3V0ZSB8fCAhbWFuaWZlc3RSb3V0ZS5oYXNMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXdNYXRjaGVzRm9yRGF0YS5zb21lKChtMikgPT4gbTIucm91dGUuaWQgPT09IG0ucm91dGUuaWQpICYmIG0ucm91dGUuaWQgaW4gbG9hZGVyRGF0YSAmJiByb3V0ZU1vZHVsZXNbbS5yb3V0ZS5pZF0/LnNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgZm91bmRPcHRPdXRSb3V0ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG1hbmlmZXN0Um91dGUuaGFzQ2xpZW50TG9hZGVyKSB7XG4gICAgICAgIGZvdW5kT3B0T3V0Um91dGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVzUGFyYW1zLmFkZChtLnJvdXRlLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocm91dGVzUGFyYW1zLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IHVybCA9IHNpbmdsZUZldGNoVXJsKHBhZ2UsIGJhc2VuYW1lLCBcImRhdGFcIik7XG4gICAgaWYgKGZvdW5kT3B0T3V0Um91dGUgJiYgcm91dGVzUGFyYW1zLnNpemUgPiAwKSB7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChcbiAgICAgICAgXCJfcm91dGVzXCIsXG4gICAgICAgIG5leHRNYXRjaGVzLmZpbHRlcigobSkgPT4gcm91dGVzUGFyYW1zLmhhcyhtLnJvdXRlLmlkKSkubWFwKChtKSA9PiBtLnJvdXRlLmlkKS5qb2luKFwiLFwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFt1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoXTtcbiAgfSwgW1xuICAgIGJhc2VuYW1lLFxuICAgIGxvYWRlckRhdGEsXG4gICAgbG9jYXRpb24sXG4gICAgbWFuaWZlc3QsXG4gICAgbmV3TWF0Y2hlc0ZvckRhdGEsXG4gICAgbmV4dE1hdGNoZXMsXG4gICAgcGFnZSxcbiAgICByb3V0ZU1vZHVsZXNcbiAgXSk7XG4gIGxldCBtb2R1bGVIcmVmcyA9IFJlYWN0OC51c2VNZW1vKFxuICAgICgpID0+IGdldE1vZHVsZUxpbmtIcmVmcyhuZXdNYXRjaGVzRm9yQXNzZXRzLCBtYW5pZmVzdCksXG4gICAgW25ld01hdGNoZXNGb3JBc3NldHMsIG1hbmlmZXN0XVxuICApO1xuICBsZXQga2V5ZWRQcmVmZXRjaExpbmtzID0gdXNlS2V5ZWRQcmVmZXRjaExpbmtzKG5ld01hdGNoZXNGb3JBc3NldHMpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFJlYWN0OC5GcmFnbWVudCwgbnVsbCwgZGF0YUhyZWZzLm1hcCgoaHJlZikgPT4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGtleTogaHJlZiwgcmVsOiBcInByZWZldGNoXCIsIGFzOiBcImZldGNoXCIsIGhyZWYsIC4uLmxpbmtQcm9wcyB9KSksIG1vZHVsZUhyZWZzLm1hcCgoaHJlZikgPT4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGtleTogaHJlZiwgcmVsOiBcIm1vZHVsZXByZWxvYWRcIiwgaHJlZiwgLi4ubGlua1Byb3BzIH0pKSwga2V5ZWRQcmVmZXRjaExpbmtzLm1hcCgoeyBrZXksIGxpbmsgfSkgPT4gKFxuICAgIC8vIHRoZXNlIGRvbid0IHNwcmVhZCBgbGlua1Byb3BzYCBiZWNhdXNlIHRoZXkgYXJlIGZ1bGwgbGluayBkZXNjcmlwdG9yc1xuICAgIC8vIGFscmVhZHkgd2l0aCB0aGVpciBvd24gcHJvcHNcbiAgICAvKiBAX19QVVJFX18gKi8gUmVhY3Q4LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsga2V5LCBub25jZTogbGlua1Byb3BzLm5vbmNlLCAuLi5saW5rIH0pXG4gICkpKTtcbn1cbmZ1bmN0aW9uIE1ldGEoKSB7XG4gIGxldCB7IGlzU3BhTW9kZSwgcm91dGVNb2R1bGVzIH0gPSB1c2VGcmFtZXdvcmtDb250ZXh0KCk7XG4gIGxldCB7XG4gICAgZXJyb3JzLFxuICAgIG1hdGNoZXM6IHJvdXRlck1hdGNoZXMsXG4gICAgbG9hZGVyRGF0YVxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlQ29udGV4dCgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgX21hdGNoZXMgPSBnZXRBY3RpdmVNYXRjaGVzKHJvdXRlck1hdGNoZXMsIGVycm9ycywgaXNTcGFNb2RlKTtcbiAgbGV0IGVycm9yID0gbnVsbDtcbiAgaWYgKGVycm9ycykge1xuICAgIGVycm9yID0gZXJyb3JzW19tYXRjaGVzW19tYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmlkXTtcbiAgfVxuICBsZXQgbWV0YSA9IFtdO1xuICBsZXQgbGVhZk1ldGEgPSBudWxsO1xuICBsZXQgbWF0Y2hlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9tYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IF9tYXRjaCA9IF9tYXRjaGVzW2ldO1xuICAgIGxldCByb3V0ZUlkID0gX21hdGNoLnJvdXRlLmlkO1xuICAgIGxldCBkYXRhMiA9IGxvYWRlckRhdGFbcm91dGVJZF07XG4gICAgbGV0IHBhcmFtcyA9IF9tYXRjaC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlTW9kdWxlID0gcm91dGVNb2R1bGVzW3JvdXRlSWRdO1xuICAgIGxldCByb3V0ZU1ldGEgPSBbXTtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICBpZDogcm91dGVJZCxcbiAgICAgIGRhdGE6IGRhdGEyLFxuICAgICAgbG9hZGVyRGF0YTogZGF0YTIsXG4gICAgICBtZXRhOiBbXSxcbiAgICAgIHBhcmFtczogX21hdGNoLnBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBfbWF0Y2gucGF0aG5hbWUsXG4gICAgICBoYW5kbGU6IF9tYXRjaC5yb3V0ZS5oYW5kbGUsXG4gICAgICBlcnJvclxuICAgIH07XG4gICAgbWF0Y2hlc1tpXSA9IG1hdGNoO1xuICAgIGlmIChyb3V0ZU1vZHVsZT8ubWV0YSkge1xuICAgICAgcm91dGVNZXRhID0gdHlwZW9mIHJvdXRlTW9kdWxlLm1ldGEgPT09IFwiZnVuY3Rpb25cIiA/IHJvdXRlTW9kdWxlLm1ldGEoe1xuICAgICAgICBkYXRhOiBkYXRhMixcbiAgICAgICAgbG9hZGVyRGF0YTogZGF0YTIsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGVycm9yXG4gICAgICB9KSA6IEFycmF5LmlzQXJyYXkocm91dGVNb2R1bGUubWV0YSkgPyBbLi4ucm91dGVNb2R1bGUubWV0YV0gOiByb3V0ZU1vZHVsZS5tZXRhO1xuICAgIH0gZWxzZSBpZiAobGVhZk1ldGEpIHtcbiAgICAgIHJvdXRlTWV0YSA9IFsuLi5sZWFmTWV0YV07XG4gICAgfVxuICAgIHJvdXRlTWV0YSA9IHJvdXRlTWV0YSB8fCBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm91dGVNZXRhKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZSByb3V0ZSBhdCBcIiArIF9tYXRjaC5yb3V0ZS5wYXRoICsgXCIgcmV0dXJucyBhbiBpbnZhbGlkIHZhbHVlLiBBbGwgcm91dGUgbWV0YSBmdW5jdGlvbnMgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgbWV0YSBvYmplY3RzLlxcblxcblRvIHJlZmVyZW5jZSB0aGUgbWV0YSBmdW5jdGlvbiBBUEksIHNlZSBodHRwczovL3JlbWl4LnJ1bi9yb3V0ZS9tZXRhXCJcbiAgICAgICk7XG4gICAgfVxuICAgIG1hdGNoLm1ldGEgPSByb3V0ZU1ldGE7XG4gICAgbWF0Y2hlc1tpXSA9IG1hdGNoO1xuICAgIG1ldGEgPSBbLi4ucm91dGVNZXRhXTtcbiAgICBsZWFmTWV0YSA9IG1ldGE7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChSZWFjdDguRnJhZ21lbnQsIG51bGwsIG1ldGEuZmxhdCgpLm1hcCgobWV0YVByb3BzKSA9PiB7XG4gICAgaWYgKCFtZXRhUHJvcHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoXCJ0YWdOYW1lXCIgaW4gbWV0YVByb3BzKSB7XG4gICAgICBsZXQgeyB0YWdOYW1lLCAuLi5yZXN0IH0gPSBtZXRhUHJvcHM7XG4gICAgICBpZiAoIWlzVmFsaWRNZXRhVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgQSBtZXRhIG9iamVjdCB1c2VzIGFuIGludmFsaWQgdGFnTmFtZTogJHt0YWdOYW1lfS4gRXhwZWN0ZWQgZWl0aGVyICdsaW5rJyBvciAnbWV0YSdgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGV0IENvbXAgPSB0YWdOYW1lO1xuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChDb21wLCB7IGtleTogSlNPTi5zdHJpbmdpZnkocmVzdCksIC4uLnJlc3QgfSk7XG4gICAgfVxuICAgIGlmIChcInRpdGxlXCIgaW4gbWV0YVByb3BzKSB7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgeyBrZXk6IFwidGl0bGVcIiB9LCBTdHJpbmcobWV0YVByb3BzLnRpdGxlKSk7XG4gICAgfVxuICAgIGlmIChcImNoYXJzZXRcIiBpbiBtZXRhUHJvcHMpIHtcbiAgICAgIG1ldGFQcm9wcy5jaGFyU2V0ID8/IChtZXRhUHJvcHMuY2hhclNldCA9IG1ldGFQcm9wcy5jaGFyc2V0KTtcbiAgICAgIGRlbGV0ZSBtZXRhUHJvcHMuY2hhcnNldDtcbiAgICB9XG4gICAgaWYgKFwiY2hhclNldFwiIGluIG1ldGFQcm9wcyAmJiBtZXRhUHJvcHMuY2hhclNldCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG1ldGFQcm9wcy5jaGFyU2V0ID09PSBcInN0cmluZ1wiID8gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IGtleTogXCJjaGFyU2V0XCIsIGNoYXJTZXQ6IG1ldGFQcm9wcy5jaGFyU2V0IH0pIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKFwic2NyaXB0OmxkK2pzb25cIiBpbiBtZXRhUHJvcHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkobWV0YVByb3BzW1wic2NyaXB0OmxkK2pzb25cIl0pO1xuICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwic2NyaXB0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBgc2NyaXB0OmxkK2pzb246JHtqc29ufWAsXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogZXNjYXBlSHRtbChqc29uKSB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IGtleTogSlNPTi5zdHJpbmdpZnkobWV0YVByb3BzKSwgLi4ubWV0YVByb3BzIH0pO1xuICB9KSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkTWV0YVRhZyh0YWdOYW1lKSB7XG4gIHJldHVybiB0eXBlb2YgdGFnTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAvXihtZXRhfGxpbmspJC8udGVzdCh0YWdOYW1lKTtcbn1cbnZhciBpc0h5ZHJhdGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzZXRJc0h5ZHJhdGVkKCkge1xuICBpc0h5ZHJhdGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIFNjcmlwdHMoc2NyaXB0UHJvcHMpIHtcbiAgbGV0IHtcbiAgICBtYW5pZmVzdCxcbiAgICBzZXJ2ZXJIYW5kb2ZmU3RyaW5nLFxuICAgIGlzU3BhTW9kZSxcbiAgICByZW5kZXJNZXRhLFxuICAgIHJvdXRlRGlzY292ZXJ5LFxuICAgIHNzclxuICB9ID0gdXNlRnJhbWV3b3JrQ29udGV4dCgpO1xuICBsZXQgeyByb3V0ZXIsIHN0YXRpYzogaXNTdGF0aWMsIHN0YXRpY0NvbnRleHQgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0MigpO1xuICBsZXQgeyBtYXRjaGVzOiByb3V0ZXJNYXRjaGVzIH0gPSB1c2VEYXRhUm91dGVyU3RhdGVDb250ZXh0KCk7XG4gIGxldCBpc1JTQ1JvdXRlckNvbnRleHQgPSB1c2VJc1JTQ1JvdXRlckNvbnRleHQoKTtcbiAgbGV0IGVuYWJsZUZvZ09mV2FyID0gaXNGb2dPZldhckVuYWJsZWQocm91dGVEaXNjb3ZlcnksIHNzcik7XG4gIGlmIChyZW5kZXJNZXRhKSB7XG4gICAgcmVuZGVyTWV0YS5kaWRSZW5kZXJTY3JpcHRzID0gdHJ1ZTtcbiAgfVxuICBsZXQgbWF0Y2hlcyA9IGdldEFjdGl2ZU1hdGNoZXMocm91dGVyTWF0Y2hlcywgbnVsbCwgaXNTcGFNb2RlKTtcbiAgUmVhY3Q4LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNIeWRyYXRlZCgpO1xuICB9LCBbXSk7XG4gIGxldCBpbml0aWFsU2NyaXB0cyA9IFJlYWN0OC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaXNSU0NSb3V0ZXJDb250ZXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0cmVhbVNjcmlwdCA9IFwid2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0LnN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7c3RhcnQoY29udHJvbGxlcil7d2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0LnN0cmVhbUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO319KS5waXBlVGhyb3VnaChuZXcgVGV4dEVuY29kZXJTdHJlYW0oKSk7XCI7XG4gICAgbGV0IGNvbnRleHRTY3JpcHQgPSBzdGF0aWNDb250ZXh0ID8gYHdpbmRvdy5fX3JlYWN0Um91dGVyQ29udGV4dCA9ICR7c2VydmVySGFuZG9mZlN0cmluZ307JHtzdHJlYW1TY3JpcHR9YCA6IFwiIFwiO1xuICAgIGxldCByb3V0ZU1vZHVsZXNTY3JpcHQgPSAhaXNTdGF0aWMgPyBcIiBcIiA6IGAke21hbmlmZXN0Lmhtcj8ucnVudGltZSA/IGBpbXBvcnQgJHtKU09OLnN0cmluZ2lmeShtYW5pZmVzdC5obXIucnVudGltZSl9O2AgOiBcIlwifSR7IWVuYWJsZUZvZ09mV2FyID8gYGltcG9ydCAke0pTT04uc3RyaW5naWZ5KG1hbmlmZXN0LnVybCl9YCA6IFwiXCJ9O1xuJHttYXRjaGVzLm1hcCgobWF0Y2gsIHJvdXRlSW5kZXgpID0+IHtcbiAgICAgIGxldCByb3V0ZVZhck5hbWUgPSBgcm91dGUke3JvdXRlSW5kZXh9YDtcbiAgICAgIGxldCBtYW5pZmVzdEVudHJ5ID0gbWFuaWZlc3Qucm91dGVzW21hdGNoLnJvdXRlLmlkXTtcbiAgICAgIGludmFyaWFudDIobWFuaWZlc3RFbnRyeSwgYFJvdXRlICR7bWF0Y2gucm91dGUuaWR9IG5vdCBmb3VuZCBpbiBtYW5pZmVzdGApO1xuICAgICAgbGV0IHtcbiAgICAgICAgY2xpZW50QWN0aW9uTW9kdWxlLFxuICAgICAgICBjbGllbnRMb2FkZXJNb2R1bGUsXG4gICAgICAgIGNsaWVudE1pZGRsZXdhcmVNb2R1bGUsXG4gICAgICAgIGh5ZHJhdGVGYWxsYmFja01vZHVsZSxcbiAgICAgICAgbW9kdWxlXG4gICAgICB9ID0gbWFuaWZlc3RFbnRyeTtcbiAgICAgIGxldCBjaHVua3MgPSBbXG4gICAgICAgIC4uLmNsaWVudEFjdGlvbk1vZHVsZSA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2R1bGU6IGNsaWVudEFjdGlvbk1vZHVsZSxcbiAgICAgICAgICAgIHZhck5hbWU6IGAke3JvdXRlVmFyTmFtZX1fY2xpZW50QWN0aW9uYFxuICAgICAgICAgIH1cbiAgICAgICAgXSA6IFtdLFxuICAgICAgICAuLi5jbGllbnRMb2FkZXJNb2R1bGUgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9kdWxlOiBjbGllbnRMb2FkZXJNb2R1bGUsXG4gICAgICAgICAgICB2YXJOYW1lOiBgJHtyb3V0ZVZhck5hbWV9X2NsaWVudExvYWRlcmBcbiAgICAgICAgICB9XG4gICAgICAgIF0gOiBbXSxcbiAgICAgICAgLi4uY2xpZW50TWlkZGxld2FyZU1vZHVsZSA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2R1bGU6IGNsaWVudE1pZGRsZXdhcmVNb2R1bGUsXG4gICAgICAgICAgICB2YXJOYW1lOiBgJHtyb3V0ZVZhck5hbWV9X2NsaWVudE1pZGRsZXdhcmVgXG4gICAgICAgICAgfVxuICAgICAgICBdIDogW10sXG4gICAgICAgIC4uLmh5ZHJhdGVGYWxsYmFja01vZHVsZSA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2R1bGU6IGh5ZHJhdGVGYWxsYmFja01vZHVsZSxcbiAgICAgICAgICAgIHZhck5hbWU6IGAke3JvdXRlVmFyTmFtZX1fSHlkcmF0ZUZhbGxiYWNrYFxuICAgICAgICAgIH1cbiAgICAgICAgXSA6IFtdLFxuICAgICAgICB7IG1vZHVsZSwgdmFyTmFtZTogYCR7cm91dGVWYXJOYW1lfV9tYWluYCB9XG4gICAgICBdO1xuICAgICAgaWYgKGNodW5rcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgKiBhcyAke3JvdXRlVmFyTmFtZX0gZnJvbSAke0pTT04uc3RyaW5naWZ5KG1vZHVsZSl9O2A7XG4gICAgICB9XG4gICAgICBsZXQgY2h1bmtJbXBvcnRzU25pcHBldCA9IGNodW5rcy5tYXAoKGNodW5rKSA9PiBgaW1wb3J0ICogYXMgJHtjaHVuay52YXJOYW1lfSBmcm9tIFwiJHtjaHVuay5tb2R1bGV9XCI7YCkuam9pbihcIlxcblwiKTtcbiAgICAgIGxldCBtZXJnZWRDaHVua3NTbmlwcGV0ID0gYGNvbnN0ICR7cm91dGVWYXJOYW1lfSA9IHske2NodW5rcy5tYXAoKGNodW5rKSA9PiBgLi4uJHtjaHVuay52YXJOYW1lfWApLmpvaW4oXCIsXCIpfX07YDtcbiAgICAgIHJldHVybiBbY2h1bmtJbXBvcnRzU25pcHBldCwgbWVyZ2VkQ2h1bmtzU25pcHBldF0uam9pbihcIlxcblwiKTtcbiAgICB9KS5qb2luKFwiXFxuXCIpfVxuICAke2VuYWJsZUZvZ09mV2FyID8gKFxuICAgICAgLy8gSW5saW5lIGEgbWluaW1hbCBtYW5pZmVzdCB3aXRoIHRoZSBTU1IgbWF0Y2hlc1xuICAgICAgYHdpbmRvdy5fX3JlYWN0Um91dGVyTWFuaWZlc3QgPSAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBnZXRQYXJ0aWFsTWFuaWZlc3QobWFuaWZlc3QsIHJvdXRlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIDJcbiAgICAgICl9O2BcbiAgICApIDogXCJcIn1cbiAgd2luZG93Ll9fcmVhY3RSb3V0ZXJSb3V0ZU1vZHVsZXMgPSB7JHttYXRjaGVzLm1hcCgobWF0Y2gsIGluZGV4KSA9PiBgJHtKU09OLnN0cmluZ2lmeShtYXRjaC5yb3V0ZS5pZCl9OnJvdXRlJHtpbmRleH1gKS5qb2luKFwiLFwiKX19O1xuXG5pbXBvcnQoJHtKU09OLnN0cmluZ2lmeShtYW5pZmVzdC5lbnRyeS5tb2R1bGUpfSk7YDtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFJlYWN0OC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzY3JpcHRcIixcbiAgICAgIHtcbiAgICAgICAgLi4uc2NyaXB0UHJvcHMsXG4gICAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogdHJ1ZSxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBjb250ZXh0U2NyaXB0IH0sXG4gICAgICAgIHR5cGU6IHZvaWQgMFxuICAgICAgfVxuICAgICksIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2NyaXB0XCIsXG4gICAgICB7XG4gICAgICAgIC4uLnNjcmlwdFByb3BzLFxuICAgICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IHRydWUsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogcm91dGVNb2R1bGVzU2NyaXB0IH0sXG4gICAgICAgIHR5cGU6IFwibW9kdWxlXCIsXG4gICAgICAgIGFzeW5jOiB0cnVlXG4gICAgICB9XG4gICAgKSk7XG4gIH0sIFtdKTtcbiAgbGV0IHByZWxvYWRzID0gaXNIeWRyYXRlZCB8fCBpc1JTQ1JvdXRlckNvbnRleHQgPyBbXSA6IGRlZHVwZShcbiAgICBtYW5pZmVzdC5lbnRyeS5pbXBvcnRzLmNvbmNhdChcbiAgICAgIGdldE1vZHVsZUxpbmtIcmVmcyhtYXRjaGVzLCBtYW5pZmVzdCwge1xuICAgICAgICBpbmNsdWRlSHlkcmF0ZUZhbGxiYWNrOiB0cnVlXG4gICAgICB9KVxuICAgIClcbiAgKTtcbiAgbGV0IHNyaSA9IHR5cGVvZiBtYW5pZmVzdC5zcmkgPT09IFwib2JqZWN0XCIgPyBtYW5pZmVzdC5zcmkgOiB7fTtcbiAgd2Fybk9uY2UoXG4gICAgIWlzUlNDUm91dGVyQ29udGV4dCxcbiAgICBcIlRoZSA8U2NyaXB0cyAvPiBlbGVtZW50IGlzIGEgbm8tb3Agd2hlbiB1c2luZyBSU0MgYW5kIGNhbiBiZSBzYWZlbHkgcmVtb3ZlZC5cIlxuICApO1xuICByZXR1cm4gaXNIeWRyYXRlZCB8fCBpc1JTQ1JvdXRlckNvbnRleHQgPyBudWxsIDogLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFJlYWN0OC5GcmFnbWVudCwgbnVsbCwgdHlwZW9mIG1hbmlmZXN0LnNyaSA9PT0gXCJvYmplY3RcIiA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChcbiAgICBcInNjcmlwdFwiLFxuICAgIHtcbiAgICAgIFwicnItaW1wb3J0bWFwXCI6IFwiXCIsXG4gICAgICB0eXBlOiBcImltcG9ydG1hcFwiLFxuICAgICAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiB0cnVlLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW50ZWdyaXR5OiBzcmlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICkgOiBudWxsLCAhZW5hYmxlRm9nT2ZXYXIgPyAvKiBAX19QVVJFX18gKi8gUmVhY3Q4LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJsaW5rXCIsXG4gICAge1xuICAgICAgcmVsOiBcIm1vZHVsZXByZWxvYWRcIixcbiAgICAgIGhyZWY6IG1hbmlmZXN0LnVybCxcbiAgICAgIGNyb3NzT3JpZ2luOiBzY3JpcHRQcm9wcy5jcm9zc09yaWdpbixcbiAgICAgIGludGVncml0eTogc3JpW21hbmlmZXN0LnVybF0sXG4gICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IHRydWVcbiAgICB9XG4gICkgOiBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3Q4LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJsaW5rXCIsXG4gICAge1xuICAgICAgcmVsOiBcIm1vZHVsZXByZWxvYWRcIixcbiAgICAgIGhyZWY6IG1hbmlmZXN0LmVudHJ5Lm1vZHVsZSxcbiAgICAgIGNyb3NzT3JpZ2luOiBzY3JpcHRQcm9wcy5jcm9zc09yaWdpbixcbiAgICAgIGludGVncml0eTogc3JpW21hbmlmZXN0LmVudHJ5Lm1vZHVsZV0sXG4gICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IHRydWVcbiAgICB9XG4gICksIHByZWxvYWRzLm1hcCgocGF0aCkgPT4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgIFwibGlua1wiLFxuICAgIHtcbiAgICAgIGtleTogcGF0aCxcbiAgICAgIHJlbDogXCJtb2R1bGVwcmVsb2FkXCIsXG4gICAgICBocmVmOiBwYXRoLFxuICAgICAgY3Jvc3NPcmlnaW46IHNjcmlwdFByb3BzLmNyb3NzT3JpZ2luLFxuICAgICAgaW50ZWdyaXR5OiBzcmlbcGF0aF0sXG4gICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IHRydWVcbiAgICB9XG4gICkpLCBpbml0aWFsU2NyaXB0cyk7XG59XG5mdW5jdGlvbiBkZWR1cGUoYXJyYXkpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycmF5KV07XG59XG5mdW5jdGlvbiBtZXJnZVJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgcmVmcy5mb3JFYWNoKChyZWYpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gbGliL2RvbS9zc3IvZXJyb3JCb3VuZGFyaWVzLnRzeFxudmFyIFJlbWl4RXJyb3JCb3VuZGFyeSA9IGNsYXNzIGV4dGVuZHMgUmVhY3Q5LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiBwcm9wcy5lcnJvciB8fCBudWxsLCBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24gfTtcbiAgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5sb2NhdGlvbiAhPT0gcHJvcHMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiBwcm9wcy5lcnJvciB8fCBudWxsLCBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24gfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZXJyb3I6IHByb3BzLmVycm9yIHx8IHN0YXRlLmVycm9yLCBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24gfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3Q5LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFJlbWl4Um9vdERlZmF1bHRFcnJvckJvdW5kYXJ5LFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IsXG4gICAgICAgICAgaXNPdXRzaWRlUmVtaXhBcHA6IHRydWVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gUmVtaXhSb290RGVmYXVsdEVycm9yQm91bmRhcnkoe1xuICBlcnJvcixcbiAgaXNPdXRzaWRlUmVtaXhBcHBcbn0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIGxldCBoZXlEZXZlbG9wZXIgPSAvKiBAX19QVVJFX18gKi8gUmVhY3Q5LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzY3JpcHRcIixcbiAgICB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJcXHV7MUY0QkZ9IEhleSBkZXZlbG9wZXIgXFx1ezFGNDRCfS4gWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzLiBDaGVjayBvdXQgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG93LXRvL2Vycm9yLWJvdW5kYXJ5IGZvciBtb3JlIGluZm9ybWF0aW9uLlwiXG4gICAgICAgICk7XG4gICAgICBgXG4gICAgICB9XG4gICAgfVxuICApO1xuICBpZiAoaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpKSB7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDkuY3JlYXRlRWxlbWVudChCb3VuZGFyeVNoZWxsLCB7IHRpdGxlOiBcIlVuaGFuZGxlZCBUaHJvd24gUmVzcG9uc2UhXCIgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogXCIyNHB4XCIgfSB9LCBlcnJvci5zdGF0dXMsIFwiIFwiLCBlcnJvci5zdGF0dXNUZXh0KSwgRU5BQkxFX0RFVl9XQVJOSU5HUyA/IGhleURldmVsb3BlciA6IG51bGwpO1xuICB9XG4gIGxldCBlcnJvckluc3RhbmNlO1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIGVycm9ySW5zdGFuY2UgPSBlcnJvcjtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZXJyb3JTdHJpbmcgPSBlcnJvciA9PSBudWxsID8gXCJVbmtub3duIEVycm9yXCIgOiB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiYgXCJ0b1N0cmluZ1wiIGluIGVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICBlcnJvckluc3RhbmNlID0gbmV3IEVycm9yKGVycm9yU3RyaW5nKTtcbiAgfVxuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFxuICAgIEJvdW5kYXJ5U2hlbGwsXG4gICAge1xuICAgICAgdGl0bGU6IFwiQXBwbGljYXRpb24gRXJyb3IhXCIsXG4gICAgICBpc091dHNpZGVSZW1peEFwcFxuICAgIH0sXG4gICAgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogXCIyNHB4XCIgfSB9LCBcIkFwcGxpY2F0aW9uIEVycm9yXCIpLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDkuY3JlYXRlRWxlbWVudChcbiAgICAgIFwicHJlXCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgcGFkZGluZzogXCIycmVtXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJoc2xhKDEwLCA1MCUsIDUwJSwgMC4xKVwiLFxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3JJbnN0YW5jZS5zdGFja1xuICAgICksXG4gICAgaGV5RGV2ZWxvcGVyXG4gICk7XG59XG5mdW5jdGlvbiBCb3VuZGFyeVNoZWxsKHtcbiAgdGl0bGUsXG4gIHJlbmRlclNjcmlwdHMsXG4gIGlzT3V0c2lkZVJlbWl4QXBwLFxuICBjaGlsZHJlblxufSkge1xuICBsZXQgeyByb3V0ZU1vZHVsZXMgfSA9IHVzZUZyYW1ld29ya0NvbnRleHQoKTtcbiAgaWYgKHJvdXRlTW9kdWxlcy5yb290Py5MYXlvdXQgJiYgIWlzT3V0c2lkZVJlbWl4QXBwKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3Q5LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIHsgbGFuZzogXCJlblwiIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDkuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IGNoYXJTZXQ6IFwidXRmLThcIiB9KSwgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFxuICAgIFwibWV0YVwiLFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx2aWV3cG9ydC1maXQ9Y292ZXJcIlxuICAgIH1cbiAgKSwgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgdGl0bGUpKSwgLyogQF9fUFVSRV9fICovIFJlYWN0OS5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3Q5LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIHsgc3R5bGU6IHsgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgcGFkZGluZzogXCIycmVtXCIgfSB9LCBjaGlsZHJlbiwgcmVuZGVyU2NyaXB0cyA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDkuY3JlYXRlRWxlbWVudChTY3JpcHRzLCBudWxsKSA6IG51bGwpKSk7XG59XG5cbi8vIGxpYi9kb20vbGliLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QxMCBmcm9tIFwicmVhY3RcIjtcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xudHJ5IHtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHdpbmRvdy5fX3JlYWN0Um91dGVyVmVyc2lvbiA9IC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBcIjcuOS41XCI7XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzPy5iYXNlbmFtZSxcbiAgICBnZXRDb250ZXh0OiBvcHRzPy5nZXRDb250ZXh0LFxuICAgIGZ1dHVyZTogb3B0cz8uZnV0dXJlLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHsgd2luZG93OiBvcHRzPy53aW5kb3cgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cz8uaHlkcmF0aW9uRGF0YSB8fCBwYXJzZUh5ZHJhdGlvbkRhdGEoKSxcbiAgICByb3V0ZXMsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzLFxuICAgIGh5ZHJhdGlvblJvdXRlUHJvcGVydGllcyxcbiAgICBkYXRhU3RyYXRlZ3k6IG9wdHM/LmRhdGFTdHJhdGVneSxcbiAgICBwYXRjaFJvdXRlc09uTmF2aWdhdGlvbjogb3B0cz8ucGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb24sXG4gICAgd2luZG93OiBvcHRzPy53aW5kb3csXG4gICAgdW5zdGFibGVfaW5zdHJ1bWVudGF0aW9uczogb3B0cz8udW5zdGFibGVfaW5zdHJ1bWVudGF0aW9uc1xuICB9KS5pbml0aWFsaXplKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIYXNoUm91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cz8uYmFzZW5hbWUsXG4gICAgZ2V0Q29udGV4dDogb3B0cz8uZ2V0Q29udGV4dCxcbiAgICBmdXR1cmU6IG9wdHM/LmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVIYXNoSGlzdG9yeSh7IHdpbmRvdzogb3B0cz8ud2luZG93IH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IG9wdHM/Lmh5ZHJhdGlvbkRhdGEgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllcyxcbiAgICBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMsXG4gICAgZGF0YVN0cmF0ZWd5OiBvcHRzPy5kYXRhU3RyYXRlZ3ksXG4gICAgcGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb246IG9wdHM/LnBhdGNoUm91dGVzT25OYXZpZ2F0aW9uLFxuICAgIHdpbmRvdzogb3B0cz8ud2luZG93LFxuICAgIHVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnM6IG9wdHM/LnVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnNcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufVxuZnVuY3Rpb24gcGFyc2VIeWRyYXRpb25EYXRhKCkge1xuICBsZXQgc3RhdGUgPSB3aW5kb3c/Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcbiAgaWYgKHN0YXRlICYmIHN0YXRlLmVycm9ycykge1xuICAgIHN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBlcnJvcnM6IGRlc2VyaWFsaXplRXJyb3JzKHN0YXRlLmVycm9ycylcbiAgICB9O1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIGRlc2VyaWFsaXplRXJyb3JzKGVycm9ycykge1xuICBpZiAoIWVycm9ycykgcmV0dXJuIG51bGw7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZXJyb3JzKTtcbiAgbGV0IHNlcmlhbGl6ZWQgPSB7fTtcbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIlJvdXRlRXJyb3JSZXNwb25zZVwiKSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBuZXcgRXJyb3JSZXNwb25zZUltcGwoXG4gICAgICAgIHZhbC5zdGF0dXMsXG4gICAgICAgIHZhbC5zdGF0dXNUZXh0LFxuICAgICAgICB2YWwuZGF0YSxcbiAgICAgICAgdmFsLmludGVybmFsID09PSB0cnVlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiRXJyb3JcIikge1xuICAgICAgaWYgKHZhbC5fX3N1YlR5cGUpIHtcbiAgICAgICAgbGV0IEVycm9yQ29uc3RydWN0b3IgPSB3aW5kb3dbdmFsLl9fc3ViVHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3JDb25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvckNvbnN0cnVjdG9yKHZhbC5tZXNzYWdlKTtcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gXCJcIjtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZXJpYWxpemVkW2tleV0gPT0gbnVsbCkge1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IodmFsLm1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuZnVuY3Rpb24gQnJvd3NlclJvdXRlcih7XG4gIGJhc2VuYW1lLFxuICBjaGlsZHJlbixcbiAgd2luZG93OiB3aW5kb3cyXG59KSB7XG4gIGxldCBoaXN0b3J5UmVmID0gUmVhY3QxMC51c2VSZWYoKTtcbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoeyB3aW5kb3c6IHdpbmRvdzIsIHY1Q29tcGF0OiB0cnVlIH0pO1xuICB9XG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QxMC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgbGV0IHNldFN0YXRlID0gUmVhY3QxMC51c2VDYWxsYmFjayhcbiAgICAobmV3U3RhdGUpID0+IHtcbiAgICAgIFJlYWN0MTAuc3RhcnRUcmFuc2l0aW9uKCgpID0+IHNldFN0YXRlSW1wbChuZXdTdGF0ZSkpO1xuICAgIH0sXG4gICAgW3NldFN0YXRlSW1wbF1cbiAgKTtcbiAgUmVhY3QxMC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeSwgc2V0U3RhdGVdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDEwLmNyZWF0ZUVsZW1lbnQoXG4gICAgUm91dGVyLFxuICAgIHtcbiAgICAgIGJhc2VuYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gSGFzaFJvdXRlcih7IGJhc2VuYW1lLCBjaGlsZHJlbiwgd2luZG93OiB3aW5kb3cyIH0pIHtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdDEwLnVzZVJlZigpO1xuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7IHdpbmRvdzogd2luZG93MiwgdjVDb21wYXQ6IHRydWUgfSk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdDEwLnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBsZXQgc2V0U3RhdGUgPSBSZWFjdDEwLnVzZUNhbGxiYWNrKFxuICAgIChuZXdTdGF0ZSkgPT4ge1xuICAgICAgUmVhY3QxMC5zdGFydFRyYW5zaXRpb24oKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSk7XG4gICAgfSxcbiAgICBbc2V0U3RhdGVJbXBsXVxuICApO1xuICBSZWFjdDEwLnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5LCBzZXRTdGF0ZV0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0MTAuY3JlYXRlRWxlbWVudChcbiAgICBSb3V0ZXIsXG4gICAge1xuICAgICAgYmFzZW5hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBIaXN0b3J5Um91dGVyKHtcbiAgYmFzZW5hbWUsXG4gIGNoaWxkcmVuLFxuICBoaXN0b3J5XG59KSB7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdDEwLnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBsZXQgc2V0U3RhdGUgPSBSZWFjdDEwLnVzZUNhbGxiYWNrKFxuICAgIChuZXdTdGF0ZSkgPT4ge1xuICAgICAgUmVhY3QxMC5zdGFydFRyYW5zaXRpb24oKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSk7XG4gICAgfSxcbiAgICBbc2V0U3RhdGVJbXBsXVxuICApO1xuICBSZWFjdDEwLnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5LCBzZXRTdGF0ZV0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0MTAuY3JlYXRlRWxlbWVudChcbiAgICBSb3V0ZXIsXG4gICAge1xuICAgICAgYmFzZW5hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgICB9XG4gICk7XG59XG5IaXN0b3J5Um91dGVyLmRpc3BsYXlOYW1lID0gXCJ1bnN0YWJsZV9IaXN0b3J5Um91dGVyXCI7XG52YXIgQUJTT0xVVEVfVVJMX1JFR0VYMiA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbnZhciBMaW5rID0gUmVhY3QxMC5mb3J3YXJkUmVmKFxuICBmdW5jdGlvbiBMaW5rV2l0aFJlZih7XG4gICAgb25DbGljayxcbiAgICBkaXNjb3ZlciA9IFwicmVuZGVyXCIsXG4gICAgcHJlZmV0Y2ggPSBcIm5vbmVcIixcbiAgICByZWxhdGl2ZSxcbiAgICByZWxvYWREb2N1bWVudCxcbiAgICByZXBsYWNlOiByZXBsYWNlMixcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG8sXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHZpZXdUcmFuc2l0aW9uLFxuICAgIC4uLnJlc3RcbiAgfSwgZm9yd2FyZGVkUmVmKSB7XG4gICAgbGV0IHsgYmFzZW5hbWUgfSA9IFJlYWN0MTAudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gICAgbGV0IGlzQWJzb2x1dGUgPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgQUJTT0xVVEVfVVJMX1JFR0VYMi50ZXN0KHRvKTtcbiAgICBsZXQgYWJzb2x1dGVIcmVmO1xuICAgIGxldCBpc0V4dGVybmFsID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiAmJiBpc0Fic29sdXRlKSB7XG4gICAgICBhYnNvbHV0ZUhyZWYgPSB0bztcbiAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgY3VycmVudFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgIGxldCB0YXJnZXRVcmwgPSB0by5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyB0bykgOiBuZXcgVVJMKHRvKTtcbiAgICAgICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG4gICAgICAgICAgaWYgKHRhcmdldFVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIHBhdGggIT0gbnVsbCkge1xuICAgICAgICAgICAgdG8gPSBwYXRoICsgdGFyZ2V0VXJsLnNlYXJjaCArIHRhcmdldFVybC5oYXNoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBgPExpbmsgdG89XCIke3RvfVwiPiBjb250YWlucyBhbiBpbnZhbGlkIFVSTCB3aGljaCB3aWxsIHByb2JhYmx5IGJyZWFrIHdoZW4gY2xpY2tlZCAtIHBsZWFzZSB1cGRhdGUgdG8gYSB2YWxpZCBVUkwgcGF0aC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaHJlZiA9IHVzZUhyZWYodG8sIHsgcmVsYXRpdmUgfSk7XG4gICAgbGV0IFtzaG91bGRQcmVmZXRjaCwgcHJlZmV0Y2hSZWYsIHByZWZldGNoSGFuZGxlcnNdID0gdXNlUHJlZmV0Y2hCZWhhdmlvcihcbiAgICAgIHByZWZldGNoLFxuICAgICAgcmVzdFxuICAgICk7XG4gICAgbGV0IGludGVybmFsT25DbGljayA9IHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIHtcbiAgICAgIHJlcGxhY2U6IHJlcGxhY2UyLFxuICAgICAgc3RhdGUsXG4gICAgICB0YXJnZXQsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIHZpZXdUcmFuc2l0aW9uXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbGluayA9IChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDEwLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAuLi5wcmVmZXRjaEhhbmRsZXJzLFxuICAgICAgICAgIGhyZWY6IGFic29sdXRlSHJlZiB8fCBocmVmLFxuICAgICAgICAgIG9uQ2xpY2s6IGlzRXh0ZXJuYWwgfHwgcmVsb2FkRG9jdW1lbnQgPyBvbkNsaWNrIDogaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgcmVmOiBtZXJnZVJlZnMoZm9yd2FyZGVkUmVmLCBwcmVmZXRjaFJlZiksXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIFwiZGF0YS1kaXNjb3ZlclwiOiAhaXNBYnNvbHV0ZSAmJiBkaXNjb3ZlciA9PT0gXCJyZW5kZXJcIiA/IFwidHJ1ZVwiIDogdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBzaG91bGRQcmVmZXRjaCAmJiAhaXNBYnNvbHV0ZSA/IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDEwLmNyZWF0ZUVsZW1lbnQoUmVhY3QxMC5GcmFnbWVudCwgbnVsbCwgbGluaywgLyogQF9fUFVSRV9fICovIFJlYWN0MTAuY3JlYXRlRWxlbWVudChQcmVmZXRjaFBhZ2VMaW5rcywgeyBwYWdlOiBocmVmIH0pKSA6IGxpbms7XG4gIH1cbik7XG5MaW5rLmRpc3BsYXlOYW1lID0gXCJMaW5rXCI7XG52YXIgTmF2TGluayA9IFJlYWN0MTAuZm9yd2FyZFJlZihcbiAgZnVuY3Rpb24gTmF2TGlua1dpdGhSZWYoe1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50UHJvcCA9IFwicGFnZVwiLFxuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AgPSBcIlwiLFxuICAgIGVuZCA9IGZhbHNlLFxuICAgIHN0eWxlOiBzdHlsZVByb3AsXG4gICAgdG8sXG4gICAgdmlld1RyYW5zaXRpb24sXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucmVzdFxuICB9LCByZWYpIHtcbiAgICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0bywgeyByZWxhdGl2ZTogcmVzdC5yZWxhdGl2ZSB9KTtcbiAgICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0MTAudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgICBsZXQgeyBuYXZpZ2F0b3IsIGJhc2VuYW1lIH0gPSBSZWFjdDEwLnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICAgIGxldCBpc1RyYW5zaXRpb25pbmcgPSByb3V0ZXJTdGF0ZSAhPSBudWxsICYmIC8vIENvbmRpdGlvbmFsIHVzYWdlIGlzIE9LIGhlcmUgYmVjYXVzZSB0aGUgdXNhZ2Ugb2YgYSBkYXRhIHJvdXRlciBpcyBzdGF0aWNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VWaWV3VHJhbnNpdGlvblN0YXRlKHBhdGgpICYmIHZpZXdUcmFuc2l0aW9uID09PSB0cnVlO1xuICAgIGxldCB0b1BhdGhuYW1lID0gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKHBhdGgpLnBhdGhuYW1lIDogcGF0aC5wYXRobmFtZTtcbiAgICBsZXQgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIG5leHRMb2NhdGlvblBhdGhuYW1lID0gbmV4dExvY2F0aW9uUGF0aG5hbWUgPyBuZXh0TG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChuZXh0TG9jYXRpb25QYXRobmFtZSAmJiBiYXNlbmFtZSkge1xuICAgICAgbmV4dExvY2F0aW9uUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKG5leHRMb2NhdGlvblBhdGhuYW1lLCBiYXNlbmFtZSkgfHwgbmV4dExvY2F0aW9uUGF0aG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IGVuZFNsYXNoUG9zaXRpb24gPSB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUubGVuZ3RoIC0gMSA6IHRvUGF0aG5hbWUubGVuZ3RoO1xuICAgIGxldCBpc0FjdGl2ZSA9IGxvY2F0aW9uUGF0aG5hbWUgPT09IHRvUGF0aG5hbWUgfHwgIWVuZCAmJiBsb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbG9jYXRpb25QYXRobmFtZS5jaGFyQXQoZW5kU2xhc2hQb3NpdGlvbikgPT09IFwiL1wiO1xuICAgIGxldCBpc1BlbmRpbmcgPSBuZXh0TG9jYXRpb25QYXRobmFtZSAhPSBudWxsICYmIChuZXh0TG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIG5leHRMb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCIpO1xuICAgIGxldCByZW5kZXJQcm9wcyA9IHtcbiAgICAgIGlzQWN0aXZlLFxuICAgICAgaXNQZW5kaW5nLFxuICAgICAgaXNUcmFuc2l0aW9uaW5nXG4gICAgfTtcbiAgICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHZvaWQgMDtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lUHJvcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVQcm9wKHJlbmRlclByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gW1xuICAgICAgICBjbGFzc05hbWVQcm9wLFxuICAgICAgICBpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsLFxuICAgICAgICBpc1BlbmRpbmcgPyBcInBlbmRpbmdcIiA6IG51bGwsXG4gICAgICAgIGlzVHJhbnNpdGlvbmluZyA/IFwidHJhbnNpdGlvbmluZ1wiIDogbnVsbFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGxldCBzdHlsZSA9IHR5cGVvZiBzdHlsZVByb3AgPT09IFwiZnVuY3Rpb25cIiA/IHN0eWxlUHJvcChyZW5kZXJQcm9wcykgOiBzdHlsZVByb3A7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDEwLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBMaW5rLFxuICAgICAge1xuICAgICAgICAuLi5yZXN0LFxuICAgICAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICByZWYsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICB0byxcbiAgICAgICAgdmlld1RyYW5zaXRpb25cbiAgICAgIH0sXG4gICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKHJlbmRlclByb3BzKSA6IGNoaWxkcmVuXG4gICAgKTtcbiAgfVxuKTtcbk5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbnZhciBGb3JtID0gUmVhY3QxMC5mb3J3YXJkUmVmKFxuICAoe1xuICAgIGRpc2NvdmVyID0gXCJyZW5kZXJcIixcbiAgICBmZXRjaGVyS2V5LFxuICAgIG5hdmlnYXRlLFxuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2U6IHJlcGxhY2UyLFxuICAgIHN0YXRlLFxuICAgIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QsXG4gICAgYWN0aW9uLFxuICAgIG9uU3VibWl0LFxuICAgIHJlbGF0aXZlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICB2aWV3VHJhbnNpdGlvbixcbiAgICAuLi5wcm9wc1xuICB9LCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgICBsZXQgc3VibWl0ID0gdXNlU3VibWl0KCk7XG4gICAgbGV0IGZvcm1BY3Rpb24gPSB1c2VGb3JtQWN0aW9uKGFjdGlvbiwgeyByZWxhdGl2ZSB9KTtcbiAgICBsZXQgZm9ybU1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSBcImdldFwiID8gXCJnZXRcIiA6IFwicG9zdFwiO1xuICAgIGxldCBpc0Fic29sdXRlID0gdHlwZW9mIGFjdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiBBQlNPTFVURV9VUkxfUkVHRVgyLnRlc3QoYWN0aW9uKTtcbiAgICBsZXQgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgb25TdWJtaXQgJiYgb25TdWJtaXQoZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgc3VibWl0dGVyID0gZXZlbnQubmF0aXZlRXZlbnQuc3VibWl0dGVyO1xuICAgICAgbGV0IHN1Ym1pdE1ldGhvZCA9IHN1Ym1pdHRlcj8uZ2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiKSB8fCBtZXRob2Q7XG4gICAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgICAgZmV0Y2hlcktleSxcbiAgICAgICAgbWV0aG9kOiBzdWJtaXRNZXRob2QsXG4gICAgICAgIG5hdmlnYXRlLFxuICAgICAgICByZXBsYWNlOiByZXBsYWNlMixcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIHZpZXdUcmFuc2l0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QxMC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogZm9yd2FyZGVkUmVmLFxuICAgICAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICAgICAgb25TdWJtaXQ6IHJlbG9hZERvY3VtZW50ID8gb25TdWJtaXQgOiBzdWJtaXRIYW5kbGVyLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgXCJkYXRhLWRpc2NvdmVyXCI6ICFpc0Fic29sdXRlICYmIGRpc2NvdmVyID09PSBcInJlbmRlclwiID8gXCJ0cnVlXCIgOiB2b2lkIDBcbiAgICAgIH1cbiAgICApO1xuICB9XG4pO1xuRm9ybS5kaXNwbGF5TmFtZSA9IFwiRm9ybVwiO1xuZnVuY3Rpb24gU2Nyb2xsUmVzdG9yYXRpb24oe1xuICBnZXRLZXksXG4gIHN0b3JhZ2VLZXksXG4gIC4uLnByb3BzXG59KSB7XG4gIGxldCByZW1peENvbnRleHQgPSBSZWFjdDEwLnVzZUNvbnRleHQoRnJhbWV3b3JrQ29udGV4dCk7XG4gIGxldCB7IGJhc2VuYW1lIH0gPSBSZWFjdDEwLnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oeyBnZXRLZXksIHN0b3JhZ2VLZXkgfSk7XG4gIGxldCBzc3JLZXkgPSBSZWFjdDEwLnVzZU1lbW8oXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKCFyZW1peENvbnRleHQgfHwgIWdldEtleSkgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgdXNlcktleSA9IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5KFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGdldEtleVxuICAgICAgKTtcbiAgICAgIHJldHVybiB1c2VyS2V5ICE9PSBsb2NhdGlvbi5rZXkgPyB1c2VyS2V5IDogbnVsbDtcbiAgICB9LFxuICAgIC8vIE5haCwgd2Ugb25seSBuZWVkIHRoaXMgdGhlIGZpcnN0IHRpbWUgZm9yIHRoZSBTU1IgcmVuZGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtdXG4gICk7XG4gIGlmICghcmVtaXhDb250ZXh0IHx8IHJlbWl4Q29udGV4dC5pc1NwYU1vZGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgcmVzdG9yZVNjcm9sbCA9ICgoc3RvcmFnZUtleTIsIHJlc3RvcmVLZXkpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8ICF3aW5kb3cuaGlzdG9yeS5zdGF0ZS5rZXkpIHtcbiAgICAgIGxldCBrZXkgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleSB9LCBcIlwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwb3NpdGlvbnMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleTIpIHx8IFwie31cIik7XG4gICAgICBsZXQgc3RvcmVkWSA9IHBvc2l0aW9uc1tyZXN0b3JlS2V5IHx8IHdpbmRvdy5oaXN0b3J5LnN0YXRlLmtleV07XG4gICAgICBpZiAodHlwZW9mIHN0b3JlZFkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHN0b3JlZFkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleTIpO1xuICAgIH1cbiAgfSkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDEwLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzY3JpcHRcIixcbiAgICB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogdHJ1ZSxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogYCgke3Jlc3RvcmVTY3JvbGx9KSgke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZXG4gICAgICAgICl9LCAke0pTT04uc3RyaW5naWZ5KHNzcktleSl9KWBcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5TY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IyKGhvb2tOYW1lKSB7XG4gIHJldHVybiBgJHtob29rTmFtZX0gbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2VuL21haW4vcm91dGVycy9waWNraW5nLWEtcm91dGVyLmA7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dDMoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0MTAudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gIGludmFyaWFudChjdHgsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IyKGhvb2tOYW1lKSk7XG4gIHJldHVybiBjdHg7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUyKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0MTAudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgaW52YXJpYW50KHN0YXRlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yMihob29rTmFtZSkpO1xuICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gIHRhcmdldCxcbiAgcmVwbGFjZTogcmVwbGFjZVByb3AsXG4gIHN0YXRlLFxuICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gIHJlbGF0aXZlLFxuICB2aWV3VHJhbnNpdGlvblxufSA9IHt9KSB7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7IHJlbGF0aXZlIH0pO1xuICByZXR1cm4gUmVhY3QxMC51c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCByZXBsYWNlMiA9IHJlcGxhY2VQcm9wICE9PSB2b2lkIDAgPyByZXBsYWNlUHJvcCA6IGNyZWF0ZVBhdGgobG9jYXRpb24pID09PSBjcmVhdGVQYXRoKHBhdGgpO1xuICAgICAgICBuYXZpZ2F0ZSh0bywge1xuICAgICAgICAgIHJlcGxhY2U6IHJlcGxhY2UyLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgICB2aWV3VHJhbnNpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgbmF2aWdhdGUsXG4gICAgICBwYXRoLFxuICAgICAgcmVwbGFjZVByb3AsXG4gICAgICBzdGF0ZSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHRvLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgcmVsYXRpdmUsXG4gICAgICB2aWV3VHJhbnNpdGlvblxuICAgIF1cbiAgKTtcbn1cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICB3YXJuaW5nKFxuICAgIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsXG4gICAgYFlvdSBjYW5ub3QgdXNlIHRoZSBcXGB1c2VTZWFyY2hQYXJhbXNcXGAgaG9vayBpbiBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IEV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIGh0dHBzOi8vZ2l0aHViLmNvbS91bmdhcC91cmwtc2VhcmNoLXBhcmFtcy5gXG4gICk7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QxMC51c2VSZWYoY3JlYXRlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSk7XG4gIGxldCBoYXNTZXRTZWFyY2hQYXJhbXNSZWYgPSBSZWFjdDEwLnVzZVJlZihmYWxzZSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBSZWFjdDEwLnVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgLy8gT25seSBtZXJnZSBpbiB0aGUgZGVmYXVsdHMgaWYgd2UgaGF2ZW4ndCB5ZXQgY2FsbGVkIHNldFNlYXJjaFBhcmFtcy5cbiAgICAgIC8vIE9uY2Ugd2UgY2FsbCB0aGF0IHdlIHdhbnQgdGhvc2UgdG8gdGFrZSBwcmVjZWRlbmNlLCBvdGhlcndpc2UgeW91IGNhbid0XG4gICAgICAvLyByZW1vdmUgYSBwYXJhbSB3aXRoIHNldFNlYXJjaFBhcmFtcyh7fSkgaWYgaXQgaGFzIGFuIGluaXRpYWwgdmFsdWVcbiAgICAgIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKFxuICAgICAgICBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID8gbnVsbCA6IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudFxuICAgICAgKVxuICAgICksXG4gICAgW2xvY2F0aW9uLnNlYXJjaF1cbiAgKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHNldFNlYXJjaFBhcmFtcyA9IFJlYWN0MTAudXNlQ2FsbGJhY2soXG4gICAgKG5leHRJbml0LCBuYXZpZ2F0ZU9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1NlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyhcbiAgICAgICAgdHlwZW9mIG5leHRJbml0ID09PSBcImZ1bmN0aW9uXCIgPyBuZXh0SW5pdChuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcykpIDogbmV4dEluaXRcbiAgICAgICk7XG4gICAgICBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBuYXZpZ2F0ZShcIj9cIiArIG5ld1NlYXJjaFBhcmFtcywgbmF2aWdhdGVPcHRpb25zKTtcbiAgICB9LFxuICAgIFtuYXZpZ2F0ZSwgc2VhcmNoUGFyYW1zXVxuICApO1xuICByZXR1cm4gW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXTtcbn1cbnZhciBmZXRjaGVySWQgPSAwO1xudmFyIGdldFVuaXF1ZUZldGNoZXJJZCA9ICgpID0+IGBfXyR7U3RyaW5nKCsrZmV0Y2hlcklkKX1fX2A7XG5mdW5jdGlvbiB1c2VTdWJtaXQoKSB7XG4gIGxldCB7IHJvdXRlciB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQzKFwidXNlU3VibWl0XCIgLyogVXNlU3VibWl0ICovKTtcbiAgbGV0IHsgYmFzZW5hbWUgfSA9IFJlYWN0MTAudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCBjdXJyZW50Um91dGVJZCA9IHVzZVJvdXRlSWQoKTtcbiAgcmV0dXJuIFJlYWN0MTAudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHRhcmdldCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICBsZXQgeyBhY3Rpb24sIG1ldGhvZCwgZW5jVHlwZSwgZm9ybURhdGEsIGJvZHkgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyhcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBiYXNlbmFtZVxuICAgICAgKTtcbiAgICAgIGlmIChvcHRpb25zLm5hdmlnYXRlID09PSBmYWxzZSkge1xuICAgICAgICBsZXQga2V5ID0gb3B0aW9ucy5mZXRjaGVyS2V5IHx8IGdldFVuaXF1ZUZldGNoZXJJZCgpO1xuICAgICAgICBhd2FpdCByb3V0ZXIuZmV0Y2goa2V5LCBjdXJyZW50Um91dGVJZCwgb3B0aW9ucy5hY3Rpb24gfHwgYWN0aW9uLCB7XG4gICAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGZvcm1NZXRob2Q6IG9wdGlvbnMubWV0aG9kIHx8IG1ldGhvZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogb3B0aW9ucy5lbmNUeXBlIHx8IGVuY1R5cGUsXG4gICAgICAgICAgZmx1c2hTeW5jOiBvcHRpb25zLmZsdXNoU3luY1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHJvdXRlci5uYXZpZ2F0ZShvcHRpb25zLmFjdGlvbiB8fCBhY3Rpb24sIHtcbiAgICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdGlvbnMucHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgZm9ybU1ldGhvZDogb3B0aW9ucy5tZXRob2QgfHwgbWV0aG9kLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiBvcHRpb25zLmVuY1R5cGUgfHwgZW5jVHlwZSxcbiAgICAgICAgICByZXBsYWNlOiBvcHRpb25zLnJlcGxhY2UsXG4gICAgICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgICAgICAgZnJvbVJvdXRlSWQ6IGN1cnJlbnRSb3V0ZUlkLFxuICAgICAgICAgIGZsdXNoU3luYzogb3B0aW9ucy5mbHVzaFN5bmMsXG4gICAgICAgICAgdmlld1RyYW5zaXRpb246IG9wdGlvbnMudmlld1RyYW5zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbcm91dGVyLCBiYXNlbmFtZSwgY3VycmVudFJvdXRlSWRdXG4gICk7XG59XG5mdW5jdGlvbiB1c2VGb3JtQWN0aW9uKGFjdGlvbiwgeyByZWxhdGl2ZSB9ID0ge30pIHtcbiAgbGV0IHsgYmFzZW5hbWUgfSA9IFJlYWN0MTAudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCByb3V0ZUNvbnRleHQgPSBSZWFjdDEwLnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgaW52YXJpYW50KHJvdXRlQ29udGV4dCwgXCJ1c2VGb3JtQWN0aW9uIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIik7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpO1xuICBsZXQgcGF0aCA9IHsgLi4udXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7IHJlbGF0aXZlIH0pIH07XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGlmIChhY3Rpb24gPT0gbnVsbCkge1xuICAgIHBhdGguc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICBsZXQgaW5kZXhWYWx1ZXMgPSBwYXJhbXMuZ2V0QWxsKFwiaW5kZXhcIik7XG4gICAgbGV0IGhhc05ha2VkSW5kZXhQYXJhbSA9IGluZGV4VmFsdWVzLnNvbWUoKHYpID0+IHYgPT09IFwiXCIpO1xuICAgIGlmIChoYXNOYWtlZEluZGV4UGFyYW0pIHtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIGluZGV4VmFsdWVzLmZpbHRlcigodikgPT4gdikuZm9yRWFjaCgodikgPT4gcGFyYW1zLmFwcGVuZChcImluZGV4XCIsIHYpKTtcbiAgICAgIGxldCBxcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgcGF0aC5zZWFyY2ggPSBxcyA/IGA/JHtxc31gIDogXCJcIjtcbiAgICB9XG4gIH1cbiAgaWYgKCghYWN0aW9uIHx8IGFjdGlvbiA9PT0gXCIuXCIpICYmIG1hdGNoLnJvdXRlLmluZGV4KSB7XG4gICAgcGF0aC5zZWFyY2ggPSBwYXRoLnNlYXJjaCA/IHBhdGguc2VhcmNoLnJlcGxhY2UoL15cXD8vLCBcIj9pbmRleCZcIikgOiBcIj9pbmRleFwiO1xuICB9XG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlUGF0aChwYXRoKTtcbn1cbmZ1bmN0aW9uIHVzZUZldGNoZXIoe1xuICBrZXlcbn0gPSB7fSkge1xuICBsZXQgeyByb3V0ZXIgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0MyhcInVzZUZldGNoZXJcIiAvKiBVc2VGZXRjaGVyICovKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlMihcInVzZUZldGNoZXJcIiAvKiBVc2VGZXRjaGVyICovKTtcbiAgbGV0IGZldGNoZXJEYXRhID0gUmVhY3QxMC51c2VDb250ZXh0KEZldGNoZXJzQ29udGV4dCk7XG4gIGxldCByb3V0ZSA9IFJlYWN0MTAudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVJZCA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXT8ucm91dGUuaWQ7XG4gIGludmFyaWFudChmZXRjaGVyRGF0YSwgYHVzZUZldGNoZXIgbXVzdCBiZSB1c2VkIGluc2lkZSBhIEZldGNoZXJzQ29udGV4dGApO1xuICBpbnZhcmlhbnQocm91dGUsIGB1c2VGZXRjaGVyIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRgKTtcbiAgaW52YXJpYW50KFxuICAgIHJvdXRlSWQgIT0gbnVsbCxcbiAgICBgdXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXCJpZFwiYFxuICApO1xuICBsZXQgZGVmYXVsdEtleSA9IFJlYWN0MTAudXNlSWQoKTtcbiAgbGV0IFtmZXRjaGVyS2V5LCBzZXRGZXRjaGVyS2V5XSA9IFJlYWN0MTAudXNlU3RhdGUoa2V5IHx8IGRlZmF1bHRLZXkpO1xuICBpZiAoa2V5ICYmIGtleSAhPT0gZmV0Y2hlcktleSkge1xuICAgIHNldEZldGNoZXJLZXkoa2V5KTtcbiAgfVxuICBSZWFjdDEwLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLmdldEZldGNoZXIoZmV0Y2hlcktleSk7XG4gICAgcmV0dXJuICgpID0+IHJvdXRlci5kZWxldGVGZXRjaGVyKGZldGNoZXJLZXkpO1xuICB9LCBbcm91dGVyLCBmZXRjaGVyS2V5XSk7XG4gIGxldCBsb2FkID0gUmVhY3QxMC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAoaHJlZiwgb3B0cykgPT4ge1xuICAgICAgaW52YXJpYW50KHJvdXRlSWQsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIGZldGNoZXIubG9hZCgpXCIpO1xuICAgICAgYXdhaXQgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpO1xuICAgIH0sXG4gICAgW2ZldGNoZXJLZXksIHJvdXRlSWQsIHJvdXRlcl1cbiAgKTtcbiAgbGV0IHN1Ym1pdEltcGwgPSB1c2VTdWJtaXQoKTtcbiAgbGV0IHN1Ym1pdCA9IFJlYWN0MTAudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHRhcmdldCwgb3B0cykgPT4ge1xuICAgICAgYXdhaXQgc3VibWl0SW1wbCh0YXJnZXQsIHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgbmF2aWdhdGU6IGZhbHNlLFxuICAgICAgICBmZXRjaGVyS2V5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtmZXRjaGVyS2V5LCBzdWJtaXRJbXBsXVxuICApO1xuICBsZXQgdW5zdGFibGVfcmVzZXQgPSBSZWFjdDEwLnVzZUNhbGxiYWNrKChvcHRzKSA9PiByb3V0ZXIucmVzZXRGZXRjaGVyKGZldGNoZXJLZXksIG9wdHMpLCBbcm91dGVyLCBmZXRjaGVyS2V5XSk7XG4gIGxldCBGZXRjaGVyRm9ybSA9IFJlYWN0MTAudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IEZldGNoZXJGb3JtMiA9IFJlYWN0MTAuZm9yd2FyZFJlZihcbiAgICAgIChwcm9wcywgcmVmKSA9PiB7XG4gICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QxMC5jcmVhdGVFbGVtZW50KEZvcm0sIHsgLi4ucHJvcHMsIG5hdmlnYXRlOiBmYWxzZSwgZmV0Y2hlcktleSwgcmVmIH0pO1xuICAgICAgfVxuICAgICk7XG4gICAgRmV0Y2hlckZvcm0yLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgICByZXR1cm4gRmV0Y2hlckZvcm0yO1xuICB9LCBbZmV0Y2hlcktleV0pO1xuICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChmZXRjaGVyS2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIGxldCBkYXRhMiA9IGZldGNoZXJEYXRhLmdldChmZXRjaGVyS2V5KTtcbiAgbGV0IGZldGNoZXJXaXRoQ29tcG9uZW50cyA9IFJlYWN0MTAudXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgRm9ybTogRmV0Y2hlckZvcm0sXG4gICAgICBzdWJtaXQsXG4gICAgICBsb2FkLFxuICAgICAgdW5zdGFibGVfcmVzZXQsXG4gICAgICAuLi5mZXRjaGVyLFxuICAgICAgZGF0YTogZGF0YTJcbiAgICB9KSxcbiAgICBbRmV0Y2hlckZvcm0sIHN1Ym1pdCwgbG9hZCwgdW5zdGFibGVfcmVzZXQsIGZldGNoZXIsIGRhdGEyXVxuICApO1xuICByZXR1cm4gZmV0Y2hlcldpdGhDb21wb25lbnRzO1xufVxuZnVuY3Rpb24gdXNlRmV0Y2hlcnMoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZTIoXCJ1c2VGZXRjaGVyc1wiIC8qIFVzZUZldGNoZXJzICovKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oc3RhdGUuZmV0Y2hlcnMuZW50cmllcygpKS5tYXAoKFtrZXksIGZldGNoZXJdKSA9PiAoe1xuICAgIC4uLmZldGNoZXIsXG4gICAga2V5XG4gIH0pKTtcbn1cbnZhciBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkgPSBcInJlYWN0LXJvdXRlci1zY3JvbGwtcG9zaXRpb25zXCI7XG52YXIgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5KGxvY2F0aW9uLCBtYXRjaGVzLCBiYXNlbmFtZSwgZ2V0S2V5KSB7XG4gIGxldCBrZXkgPSBudWxsO1xuICBpZiAoZ2V0S2V5KSB7XG4gICAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgICAga2V5ID0gZ2V0S2V5KFxuICAgICAgICB7XG4gICAgICAgICAgLi4ubG9jYXRpb24sXG4gICAgICAgICAgcGF0aG5hbWU6IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9LFxuICAgICAgICBtYXRjaGVzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBnZXRLZXkobG9jYXRpb24sIG1hdGNoZXMpO1xuICAgIH1cbiAgfVxuICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICBrZXkgPSBsb2NhdGlvbi5rZXk7XG4gIH1cbiAgcmV0dXJuIGtleTtcbn1cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKHtcbiAgZ2V0S2V5LFxuICBzdG9yYWdlS2V5XG59ID0ge30pIHtcbiAgbGV0IHsgcm91dGVyIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dDMoXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiIC8qIFVzZVNjcm9sbFJlc3RvcmF0aW9uICovKTtcbiAgbGV0IHsgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXQgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZTIoXG4gICAgXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiIC8qIFVzZVNjcm9sbFJlc3RvcmF0aW9uICovXG4gICk7XG4gIGxldCB7IGJhc2VuYW1lIH0gPSBSZWFjdDEwLnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0aW9uKCk7XG4gIFJlYWN0MTAudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pO1xuICB1c2VQYWdlSGlkZShcbiAgICBSZWFjdDEwLnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIG1hdGNoZXMsIGJhc2VuYW1lLCBnZXRLZXkpO1xuICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gd2luZG93LnNjcm9sbFk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHNhdmVkU2Nyb2xsUG9zaXRpb25zKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBgRmFpbGVkIHRvIHNhdmUgc2Nyb2xsIHBvc2l0aW9ucyBpbiBzZXNzaW9uU3RvcmFnZSwgPFNjcm9sbFJlc3RvcmF0aW9uIC8+IHdpbGwgbm90IHdvcmsgcHJvcGVybHkgKCR7ZXJyb3J9KS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiO1xuICAgIH0sIFtuYXZpZ2F0aW9uLnN0YXRlLCBnZXRLZXksIGJhc2VuYW1lLCBsb2NhdGlvbiwgbWF0Y2hlcywgc3RvcmFnZUtleV0pXG4gICk7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBSZWFjdDEwLnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlc3Npb25Qb3NpdGlvbnMpIHtcbiAgICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IEpTT04ucGFyc2Uoc2Vzc2lvblBvc2l0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9LCBbc3RvcmFnZUtleV0pO1xuICAgIFJlYWN0MTAudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gPSByb3V0ZXI/LmVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKFxuICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyxcbiAgICAgICAgKCkgPT4gd2luZG93LnNjcm9sbFksXG4gICAgICAgIGdldEtleSA/IChsb2NhdGlvbjIsIG1hdGNoZXMyKSA9PiBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbjIsIG1hdGNoZXMyLCBiYXNlbmFtZSwgZ2V0S2V5KSA6IHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PiBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gJiYgZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uKCk7XG4gICAgfSwgW3JvdXRlciwgYmFzZW5hbWUsIGdldEtleV0pO1xuICAgIFJlYWN0MTAudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChyZXN0b3JlU2Nyb2xsUG9zaXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBgXCIke2xvY2F0aW9uLmhhc2guc2xpY2UoXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKX1cIiBpcyBub3QgYSBkZWNvZGFibGUgZWxlbWVudCBJRC4gVGhlIHZpZXcgd2lsbCBub3Qgc2Nyb2xsIHRvIGl0LmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlQmVmb3JlVW5sb2FkKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGxldCB7IGNhcHR1cmUgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0MTAudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3B0cyA9IGNhcHR1cmUgIT0gbnVsbCA/IHsgY2FwdHVyZSB9IDogdm9pZCAwO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH07XG4gIH0sIFtjYWxsYmFjaywgY2FwdHVyZV0pO1xufVxuZnVuY3Rpb24gdXNlUGFnZUhpZGUoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IHsgY2FwdHVyZSB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgUmVhY3QxMC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvcHRzID0gY2FwdHVyZSAhPSBudWxsID8geyBjYXB0dXJlIH0gOiB2b2lkIDA7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH07XG4gIH0sIFtjYWxsYmFjaywgY2FwdHVyZV0pO1xufVxuZnVuY3Rpb24gdXNlUHJvbXB0KHtcbiAgd2hlbixcbiAgbWVzc2FnZVxufSkge1xuICBsZXQgYmxvY2tlciA9IHVzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0MTAudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIpIHtcbiAgICAgIGxldCBwcm9jZWVkID0gd2luZG93LmNvbmZpcm0obWVzc2FnZSk7XG4gICAgICBpZiAocHJvY2VlZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGJsb2NrZXIucHJvY2VlZCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYmxvY2tlciwgbWVzc2FnZV0pO1xuICBSZWFjdDEwLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmICF3aGVuKSB7XG4gICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgfVxuICB9LCBbYmxvY2tlciwgd2hlbl0pO1xufVxuZnVuY3Rpb24gdXNlVmlld1RyYW5zaXRpb25TdGF0ZSh0bywgeyByZWxhdGl2ZSB9ID0ge30pIHtcbiAgbGV0IHZ0Q29udGV4dCA9IFJlYWN0MTAudXNlQ29udGV4dChWaWV3VHJhbnNpdGlvbkNvbnRleHQpO1xuICBpbnZhcmlhbnQoXG4gICAgdnRDb250ZXh0ICE9IG51bGwsXG4gICAgXCJgdXNlVmlld1RyYW5zaXRpb25TdGF0ZWAgbXVzdCBiZSB1c2VkIHdpdGhpbiBgcmVhY3Qtcm91dGVyLWRvbWAncyBgUm91dGVyUHJvdmlkZXJgLiAgRGlkIHlvdSBhY2NpZGVudGFsbHkgaW1wb3J0IGBSb3V0ZXJQcm92aWRlcmAgZnJvbSBgcmVhY3Qtcm91dGVyYD9cIlxuICApO1xuICBsZXQgeyBiYXNlbmFtZSB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQzKFxuICAgIFwidXNlVmlld1RyYW5zaXRpb25TdGF0ZVwiIC8qIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGUgKi9cbiAgKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHsgcmVsYXRpdmUgfSk7XG4gIGlmICghdnRDb250ZXh0LmlzVHJhbnNpdGlvbmluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgY3VycmVudFBhdGggPSBzdHJpcEJhc2VuYW1lKHZ0Q29udGV4dC5jdXJyZW50TG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCB2dENvbnRleHQuY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICBsZXQgbmV4dFBhdGggPSBzdHJpcEJhc2VuYW1lKHZ0Q29udGV4dC5uZXh0TG9jYXRpb24ucGF0aG5hbWUsIGJhc2VuYW1lKSB8fCB2dENvbnRleHQubmV4dExvY2F0aW9uLnBhdGhuYW1lO1xuICByZXR1cm4gbWF0Y2hQYXRoKHBhdGgucGF0aG5hbWUsIG5leHRQYXRoKSAhPSBudWxsIHx8IG1hdGNoUGF0aChwYXRoLnBhdGhuYW1lLCBjdXJyZW50UGF0aCkgIT0gbnVsbDtcbn1cblxuLy8gbGliL2RvbS9zZXJ2ZXIudHN4XG5pbXBvcnQgKiBhcyBSZWFjdDExIGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU3RhdGljUm91dGVyKHtcbiAgYmFzZW5hbWUsXG4gIGNoaWxkcmVuLFxuICBsb2NhdGlvbjogbG9jYXRpb25Qcm9wID0gXCIvXCJcbn0pIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsb2NhdGlvblByb3AgPSBwYXJzZVBhdGgobG9jYXRpb25Qcm9wKTtcbiAgfVxuICBsZXQgYWN0aW9uID0gXCJQT1BcIiAvKiBQb3AgKi87XG4gIGxldCBsb2NhdGlvbiA9IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25Qcm9wLnBhdGhuYW1lIHx8IFwiL1wiLFxuICAgIHNlYXJjaDogbG9jYXRpb25Qcm9wLnNlYXJjaCB8fCBcIlwiLFxuICAgIGhhc2g6IGxvY2F0aW9uUHJvcC5oYXNoIHx8IFwiXCIsXG4gICAgc3RhdGU6IGxvY2F0aW9uUHJvcC5zdGF0ZSAhPSBudWxsID8gbG9jYXRpb25Qcm9wLnN0YXRlIDogbnVsbCxcbiAgICBrZXk6IGxvY2F0aW9uUHJvcC5rZXkgfHwgXCJkZWZhdWx0XCJcbiAgfTtcbiAgbGV0IHN0YXRpY05hdmlnYXRvciA9IGdldFN0YXRlbGVzc05hdmlnYXRvcigpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0MTEuY3JlYXRlRWxlbWVudChcbiAgICBSb3V0ZXIsXG4gICAge1xuICAgICAgYmFzZW5hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgbmF2aWdhdGlvblR5cGU6IGFjdGlvbixcbiAgICAgIG5hdmlnYXRvcjogc3RhdGljTmF2aWdhdG9yLFxuICAgICAgc3RhdGljOiB0cnVlXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gU3RhdGljUm91dGVyUHJvdmlkZXIoe1xuICBjb250ZXh0LFxuICByb3V0ZXIsXG4gIGh5ZHJhdGU6IGh5ZHJhdGUyID0gdHJ1ZSxcbiAgbm9uY2Vcbn0pIHtcbiAgaW52YXJpYW50KFxuICAgIHJvdXRlciAmJiBjb250ZXh0LFxuICAgIFwiWW91IG11c3QgcHJvdmlkZSBgcm91dGVyYCBhbmQgYGNvbnRleHRgIHRvIDxTdGF0aWNSb3V0ZXJQcm92aWRlcj5cIlxuICApO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSB7XG4gICAgcm91dGVyLFxuICAgIG5hdmlnYXRvcjogZ2V0U3RhdGVsZXNzTmF2aWdhdG9yKCksXG4gICAgc3RhdGljOiB0cnVlLFxuICAgIHN0YXRpY0NvbnRleHQ6IGNvbnRleHQsXG4gICAgYmFzZW5hbWU6IGNvbnRleHQuYmFzZW5hbWUgfHwgXCIvXCJcbiAgfTtcbiAgbGV0IGZldGNoZXJzQ29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGxldCBoeWRyYXRlU2NyaXB0ID0gXCJcIjtcbiAgaWYgKGh5ZHJhdGUyICE9PSBmYWxzZSkge1xuICAgIGxldCBkYXRhMiA9IHtcbiAgICAgIGxvYWRlckRhdGE6IGNvbnRleHQubG9hZGVyRGF0YSxcbiAgICAgIGFjdGlvbkRhdGE6IGNvbnRleHQuYWN0aW9uRGF0YSxcbiAgICAgIGVycm9yczogc2VyaWFsaXplRXJyb3JzKGNvbnRleHQuZXJyb3JzKVxuICAgIH07XG4gICAgbGV0IGpzb24gPSBodG1sRXNjYXBlKEpTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGRhdGEyKSkpO1xuICAgIGh5ZHJhdGVTY3JpcHQgPSBgd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YSA9IEpTT04ucGFyc2UoJHtqc29ufSk7YDtcbiAgfVxuICBsZXQgeyBzdGF0ZSB9ID0gZGF0YVJvdXRlckNvbnRleHQucm91dGVyO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0MTEuY3JlYXRlRWxlbWVudChSZWFjdDExLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QxMS5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBkYXRhUm91dGVyQ29udGV4dCB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3QxMS5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHN0YXRlIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDExLmNyZWF0ZUVsZW1lbnQoRmV0Y2hlcnNDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBmZXRjaGVyc0NvbnRleHQgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0MTEuY3JlYXRlRWxlbWVudChWaWV3VHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgaXNUcmFuc2l0aW9uaW5nOiBmYWxzZSB9IH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDExLmNyZWF0ZUVsZW1lbnQoXG4gICAgUm91dGVyLFxuICAgIHtcbiAgICAgIGJhc2VuYW1lOiBkYXRhUm91dGVyQ29udGV4dC5iYXNlbmFtZSxcbiAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5oaXN0b3J5QWN0aW9uLFxuICAgICAgbmF2aWdhdG9yOiBkYXRhUm91dGVyQ29udGV4dC5uYXZpZ2F0b3IsXG4gICAgICBzdGF0aWM6IGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpY1xuICAgIH0sXG4gICAgLyogQF9fUFVSRV9fICovIFJlYWN0MTEuY3JlYXRlRWxlbWVudChcbiAgICAgIERhdGFSb3V0ZXMyLFxuICAgICAge1xuICAgICAgICByb3V0ZXM6IHJvdXRlci5yb3V0ZXMsXG4gICAgICAgIGZ1dHVyZTogcm91dGVyLmZ1dHVyZSxcbiAgICAgICAgc3RhdGVcbiAgICAgIH1cbiAgICApXG4gICkpKSkpLCBoeWRyYXRlU2NyaXB0ID8gLyogQF9fUFVSRV9fICovIFJlYWN0MTEuY3JlYXRlRWxlbWVudChcbiAgICBcInNjcmlwdFwiLFxuICAgIHtcbiAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogdHJ1ZSxcbiAgICAgIG5vbmNlLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBoeWRyYXRlU2NyaXB0IH1cbiAgICB9XG4gICkgOiBudWxsKTtcbn1cbmZ1bmN0aW9uIERhdGFSb3V0ZXMyKHtcbiAgcm91dGVzLFxuICBmdXR1cmUsXG4gIHN0YXRlXG59KSB7XG4gIHJldHVybiB1c2VSb3V0ZXNJbXBsKHJvdXRlcywgdm9pZCAwLCBzdGF0ZSwgdm9pZCAwLCBmdXR1cmUpO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplRXJyb3JzKGVycm9ycykge1xuICBpZiAoIWVycm9ycykgcmV0dXJuIG51bGw7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZXJyb3JzKTtcbiAgbGV0IHNlcmlhbGl6ZWQgPSB7fTtcbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgaWYgKGlzUm91dGVFcnJvclJlc3BvbnNlKHZhbCkpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHsgLi4udmFsLCBfX3R5cGU6IFwiUm91dGVFcnJvclJlc3BvbnNlXCIgfTtcbiAgICB9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSB7XG4gICAgICAgIG1lc3NhZ2U6IHZhbC5tZXNzYWdlLFxuICAgICAgICBfX3R5cGU6IFwiRXJyb3JcIixcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN1YmNsYXNzIChpLmUuLCBSZWZlcmVuY2VFcnJvciksIHNlbmQgdXAgdGhlIHR5cGUgc28gd2VcbiAgICAgICAgLy8gY2FuIHJlLWNyZWF0ZSB0aGUgc2FtZSB0eXBlIGR1cmluZyBoeWRyYXRpb24uXG4gICAgICAgIC4uLnZhbC5uYW1lICE9PSBcIkVycm9yXCIgPyB7XG4gICAgICAgICAgX19zdWJUeXBlOiB2YWwubmFtZVxuICAgICAgICB9IDoge31cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG5mdW5jdGlvbiBnZXRTdGF0ZWxlc3NOYXZpZ2F0b3IoKSB7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlSHJlZixcbiAgICBlbmNvZGVMb2NhdGlvbixcbiAgICBwdXNoKHRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UgY2Fubm90IHVzZSBuYXZpZ2F0b3IucHVzaCgpIG9uIHRoZSBzZXJ2ZXIgYmVjYXVzZSBpdCBpcyBhIHN0YXRlbGVzcyBlbnZpcm9ubWVudC4gVGhpcyBlcnJvciB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkIHdoZW4geW91IGRpZCBhIFxcYG5hdmlnYXRlKCR7SlNPTi5zdHJpbmdpZnkodG8pfSlcXGAgc29tZXdoZXJlIGluIHlvdXIgYXBwLmBcbiAgICAgICk7XG4gICAgfSxcbiAgICByZXBsYWNlKHRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UgY2Fubm90IHVzZSBuYXZpZ2F0b3IucmVwbGFjZSgpIG9uIHRoZSBzZXJ2ZXIgYmVjYXVzZSBpdCBpcyBhIHN0YXRlbGVzcyBlbnZpcm9ubWVudC4gVGhpcyBlcnJvciB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkIHdoZW4geW91IGRpZCBhIFxcYG5hdmlnYXRlKCR7SlNPTi5zdHJpbmdpZnkodG8pfSwgeyByZXBsYWNlOiB0cnVlIH0pXFxgIHNvbWV3aGVyZSBpbiB5b3VyIGFwcC5gXG4gICAgICApO1xuICAgIH0sXG4gICAgZ28oZGVsdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFlvdSBjYW5ub3QgdXNlIG5hdmlnYXRvci5nbygpIG9uIHRoZSBzZXJ2ZXIgYmVjYXVzZSBpdCBpcyBhIHN0YXRlbGVzcyBlbnZpcm9ubWVudC4gVGhpcyBlcnJvciB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkIHdoZW4geW91IGRpZCBhIFxcYG5hdmlnYXRlKCR7ZGVsdGF9KVxcYCBzb21ld2hlcmUgaW4geW91ciBhcHAuYFxuICAgICAgKTtcbiAgICB9LFxuICAgIGJhY2soKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UgY2Fubm90IHVzZSBuYXZpZ2F0b3IuYmFjaygpIG9uIHRoZSBzZXJ2ZXIgYmVjYXVzZSBpdCBpcyBhIHN0YXRlbGVzcyBlbnZpcm9ubWVudC5gXG4gICAgICApO1xuICAgIH0sXG4gICAgZm9yd2FyZCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFlvdSBjYW5ub3QgdXNlIG5hdmlnYXRvci5mb3J3YXJkKCkgb24gdGhlIHNlcnZlciBiZWNhdXNlIGl0IGlzIGEgc3RhdGVsZXNzIGVudmlyb25tZW50LmBcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU3RhdGljSGFuZGxlcjIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVTdGF0aWNIYW5kbGVyKHJvdXRlcywge1xuICAgIC4uLm9wdHMsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzXG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU3RhdGljUm91dGVyKHJvdXRlcywgY29udGV4dCwgb3B0cyA9IHt9KSB7XG4gIGxldCBtYW5pZmVzdCA9IHt9O1xuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllcyxcbiAgICB2b2lkIDAsXG4gICAgbWFuaWZlc3RcbiAgKTtcbiAgbGV0IG1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IG1hbmlmZXN0W21hdGNoLnJvdXRlLmlkXSB8fCBtYXRjaC5yb3V0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubWF0Y2gsXG4gICAgICByb3V0ZVxuICAgIH07XG4gIH0pO1xuICBsZXQgbXNnID0gKG1ldGhvZCkgPT4gYFlvdSBjYW5ub3QgdXNlIHJvdXRlci4ke21ldGhvZH0oKSBvbiB0aGUgc2VydmVyIGJlY2F1c2UgaXQgaXMgYSBzdGF0ZWxlc3MgZW52aXJvbm1lbnRgO1xuICByZXR1cm4ge1xuICAgIGdldCBiYXNlbmFtZSgpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LmJhc2VuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZ1dHVyZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY4X21pZGRsZXdhcmU6IGZhbHNlLFxuICAgICAgICAuLi5vcHRzPy5mdXR1cmVcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoaXN0b3J5QWN0aW9uOiBcIlBPUFwiIC8qIFBvcCAqLyxcbiAgICAgICAgbG9jYXRpb246IGNvbnRleHQubG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IGNvbnRleHQubG9hZGVyRGF0YSxcbiAgICAgICAgYWN0aW9uRGF0YTogY29udGV4dC5hY3Rpb25EYXRhLFxuICAgICAgICBlcnJvcnM6IGNvbnRleHQuZXJyb3JzLFxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IG51bGwsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogZmFsc2UsXG4gICAgICAgIHJldmFsaWRhdGlvbjogXCJpZGxlXCIsXG4gICAgICAgIGZldGNoZXJzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgICAgICBibG9ja2VyczogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICByZXR1cm4gZGF0YVJvdXRlcztcbiAgICB9LFxuICAgIGdldCB3aW5kb3coKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRocm93IG1zZyhcImluaXRpYWxpemVcIik7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoKSB7XG4gICAgICB0aHJvdyBtc2coXCJzdWJzY3JpYmVcIik7XG4gICAgfSxcbiAgICBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbigpIHtcbiAgICAgIHRocm93IG1zZyhcImVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uXCIpO1xuICAgIH0sXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICB0aHJvdyBtc2coXCJuYXZpZ2F0ZVwiKTtcbiAgICB9LFxuICAgIGZldGNoKCkge1xuICAgICAgdGhyb3cgbXNnKFwiZmV0Y2hcIik7XG4gICAgfSxcbiAgICByZXZhbGlkYXRlKCkge1xuICAgICAgdGhyb3cgbXNnKFwicmV2YWxpZGF0ZVwiKTtcbiAgICB9LFxuICAgIGNyZWF0ZUhyZWYsXG4gICAgZW5jb2RlTG9jYXRpb24sXG4gICAgZ2V0RmV0Y2hlcigpIHtcbiAgICAgIHJldHVybiBJRExFX0ZFVENIRVI7XG4gICAgfSxcbiAgICBkZWxldGVGZXRjaGVyKCkge1xuICAgICAgdGhyb3cgbXNnKFwiZGVsZXRlRmV0Y2hlclwiKTtcbiAgICB9LFxuICAgIHJlc2V0RmV0Y2hlcigpIHtcbiAgICAgIHRocm93IG1zZyhcInJlc2V0RmV0Y2hlclwiKTtcbiAgICB9LFxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICB0aHJvdyBtc2coXCJkaXNwb3NlXCIpO1xuICAgIH0sXG4gICAgZ2V0QmxvY2tlcigpIHtcbiAgICAgIHJldHVybiBJRExFX0JMT0NLRVI7XG4gICAgfSxcbiAgICBkZWxldGVCbG9ja2VyKCkge1xuICAgICAgdGhyb3cgbXNnKFwiZGVsZXRlQmxvY2tlclwiKTtcbiAgICB9LFxuICAgIHBhdGNoUm91dGVzKCkge1xuICAgICAgdGhyb3cgbXNnKFwicGF0Y2hSb3V0ZXNcIik7XG4gICAgfSxcbiAgICBfaW50ZXJuYWxGZXRjaENvbnRyb2xsZXJzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgIF9pbnRlcm5hbFNldFJvdXRlcygpIHtcbiAgICAgIHRocm93IG1zZyhcIl9pbnRlcm5hbFNldFJvdXRlc1wiKTtcbiAgICB9LFxuICAgIF9pbnRlcm5hbFNldFN0YXRlRG9Ob3RVc2VPcllvdVdpbGxCcmVha1lvdXJBcHAoKSB7XG4gICAgICB0aHJvdyBtc2coXCJfaW50ZXJuYWxTZXRTdGF0ZURvTm90VXNlT3JZb3VXaWxsQnJlYWtZb3VyQXBwXCIpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYodG8pIHtcbiAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG59XG5mdW5jdGlvbiBlbmNvZGVMb2NhdGlvbih0bykge1xuICBsZXQgaHJlZiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIGhyZWYgPSBocmVmLnJlcGxhY2UoLyAkLywgXCIlMjBcIik7XG4gIGxldCBlbmNvZGVkID0gQUJTT0xVVEVfVVJMX1JFR0VYMy50ZXN0KGhyZWYpID8gbmV3IFVSTChocmVmKSA6IG5ldyBVUkwoaHJlZiwgXCJodHRwOi8vbG9jYWxob3N0XCIpO1xuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBlbmNvZGVkLnBhdGhuYW1lLFxuICAgIHNlYXJjaDogZW5jb2RlZC5zZWFyY2gsXG4gICAgaGFzaDogZW5jb2RlZC5oYXNoXG4gIH07XG59XG52YXIgQUJTT0xVVEVfVVJMX1JFR0VYMyA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbnZhciBFU0NBUEVfTE9PS1VQMiA9IHtcbiAgXCImXCI6IFwiXFxcXHUwMDI2XCIsXG4gIFwiPlwiOiBcIlxcXFx1MDAzZVwiLFxuICBcIjxcIjogXCJcXFxcdTAwM2NcIixcbiAgXCJcXHUyMDI4XCI6IFwiXFxcXHUyMDI4XCIsXG4gIFwiXFx1MjAyOVwiOiBcIlxcXFx1MjAyOVwiXG59O1xudmFyIEVTQ0FQRV9SRUdFWDIgPSAvWyY+PFxcdTIwMjhcXHUyMDI5XS9nO1xuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWDIsIChtYXRjaCkgPT4gRVNDQVBFX0xPT0tVUDJbbWF0Y2hdKTtcbn1cblxuZXhwb3J0IHtcbiAgQWN0aW9uLFxuICBjcmVhdGVCcm93c2VySGlzdG9yeSxcbiAgaW52YXJpYW50LFxuICBjcmVhdGVQYXRoLFxuICBwYXJzZVBhdGgsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJvdXRlckNvbnRleHRQcm92aWRlcixcbiAgY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyxcbiAgbWF0Y2hSb3V0ZXMsXG4gIGdlbmVyYXRlUGF0aCxcbiAgbWF0Y2hQYXRoLFxuICBzdHJpcEJhc2VuYW1lLFxuICByZXNvbHZlUGF0aCxcbiAgZGF0YSxcbiAgcmVkaXJlY3QsXG4gIHJlZGlyZWN0RG9jdW1lbnQsXG4gIHJlcGxhY2UsXG4gIEVycm9yUmVzcG9uc2VJbXBsLFxuICBpc1JvdXRlRXJyb3JSZXNwb25zZSxcbiAgaW5zdHJ1bWVudEhhbmRsZXIsXG4gIElETEVfTkFWSUdBVElPTixcbiAgSURMRV9GRVRDSEVSLFxuICBJRExFX0JMT0NLRVIsXG4gIGNyZWF0ZVJvdXRlcixcbiAgY3JlYXRlU3RhdGljSGFuZGxlcixcbiAgZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcixcbiAgaXNEYXRhV2l0aFJlc3BvbnNlSW5pdCxcbiAgaXNSZXNwb25zZSxcbiAgaXNSZWRpcmVjdFN0YXR1c0NvZGUsXG4gIGlzUmVkaXJlY3RSZXNwb25zZSxcbiAgaXNNdXRhdGlvbk1ldGhvZCxcbiAgRGF0YVJvdXRlckNvbnRleHQsXG4gIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsXG4gIFJTQ1JvdXRlckNvbnRleHQsXG4gIFZpZXdUcmFuc2l0aW9uQ29udGV4dCxcbiAgRmV0Y2hlcnNDb250ZXh0LFxuICBBd2FpdENvbnRleHRQcm92aWRlcixcbiAgTmF2aWdhdGlvbkNvbnRleHQsXG4gIExvY2F0aW9uQ29udGV4dCxcbiAgUm91dGVDb250ZXh0LFxuICBFTkFCTEVfREVWX1dBUk5JTkdTLFxuICB1c2VIcmVmLFxuICB1c2VJblJvdXRlckNvbnRleHQsXG4gIHVzZUxvY2F0aW9uLFxuICB1c2VOYXZpZ2F0aW9uVHlwZSxcbiAgdXNlTWF0Y2gsXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VPdXRsZXRDb250ZXh0LFxuICB1c2VPdXRsZXQsXG4gIHVzZVBhcmFtcyxcbiAgdXNlUmVzb2x2ZWRQYXRoLFxuICB1c2VSb3V0ZXMsXG4gIHVzZU5hdmlnYXRpb24sXG4gIHVzZVJldmFsaWRhdG9yLFxuICB1c2VNYXRjaGVzLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VSb3V0ZUxvYWRlckRhdGEsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZVJvdXRlRXJyb3IsXG4gIHVzZUFzeW5jVmFsdWUsXG4gIHVzZUFzeW5jRXJyb3IsXG4gIHVzZUJsb2NrZXIsXG4gIHVzZVJvdXRlLFxuICB3YXJuT25jZSxcbiAgbWFwUm91dGVQcm9wZXJ0aWVzLFxuICBoeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMsXG4gIGNyZWF0ZU1lbW9yeVJvdXRlcixcbiAgVU5TVEFCTEVfVHJhbnNpdGlvbkVuYWJsZWRSb3V0ZXJQcm92aWRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG4gIE1lbW9yeVJvdXRlcixcbiAgTmF2aWdhdGUsXG4gIE91dGxldCxcbiAgUm91dGUsXG4gIFJvdXRlcixcbiAgUm91dGVzLFxuICBBd2FpdCxcbiAgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLFxuICBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsXG4gIHJlbmRlck1hdGNoZXMsXG4gIFdpdGhDb21wb25lbnRQcm9wcyxcbiAgd2l0aENvbXBvbmVudFByb3BzLFxuICBXaXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMsXG4gIHdpdGhIeWRyYXRlRmFsbGJhY2tQcm9wcyxcbiAgV2l0aEVycm9yQm91bmRhcnlQcm9wcyxcbiAgd2l0aEVycm9yQm91bmRhcnlQcm9wcyxcbiAgY3JlYXRlU2VhcmNoUGFyYW1zLFxuICBlc2NhcGVIdG1sLFxuICBlbmNvZGUsXG4gIGNyZWF0ZVJlcXVlc3RJbml0LFxuICBTaW5nbGVGZXRjaFJlZGlyZWN0U3ltYm9sLFxuICBTSU5HTEVfRkVUQ0hfUkVESVJFQ1RfU1RBVFVTLFxuICBOT19CT0RZX1NUQVRVU19DT0RFUyxcbiAgU3RyZWFtVHJhbnNmZXIsXG4gIGdldFR1cmJvU3RyZWFtU2luZ2xlRmV0Y2hEYXRhU3RyYXRlZ3ksXG4gIGdldFNpbmdsZUZldGNoRGF0YVN0cmF0ZWd5SW1wbCxcbiAgc3RyaXBJbmRleFBhcmFtLFxuICBzaW5nbGVGZXRjaFVybCxcbiAgZGVjb2RlVmlhVHVyYm9TdHJlYW0sXG4gIFJlbWl4RXJyb3JCb3VuZGFyeSxcbiAgY3JlYXRlU2VydmVyUm91dGVzLFxuICBjcmVhdGVDbGllbnRSb3V0ZXNXaXRoSE1SUmV2YWxpZGF0aW9uT3B0T3V0LFxuICBub0FjdGlvbkRlZmluZWRFcnJvcixcbiAgY3JlYXRlQ2xpZW50Um91dGVzLFxuICBzaG91bGRIeWRyYXRlUm91dGVMb2FkZXIsXG4gIGdldFBhdGNoUm91dGVzT25OYXZpZ2F0aW9uRnVuY3Rpb24sXG4gIHVzZUZvZ09GV2FyRGlzY292ZXJ5LFxuICBnZXRNYW5pZmVzdFBhdGgsXG4gIEZyYW1ld29ya0NvbnRleHQsXG4gIENSSVRJQ0FMX0NTU19EQVRBX0FUVFJJQlVURSxcbiAgTGlua3MsXG4gIFByZWZldGNoUGFnZUxpbmtzLFxuICBNZXRhLFxuICBzZXRJc0h5ZHJhdGVkLFxuICBTY3JpcHRzLFxuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBjcmVhdGVIYXNoUm91dGVyLFxuICBCcm93c2VyUm91dGVyLFxuICBIYXNoUm91dGVyLFxuICBIaXN0b3J5Um91dGVyLFxuICBMaW5rLFxuICBOYXZMaW5rLFxuICBGb3JtLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTGlua0NsaWNrSGFuZGxlcixcbiAgdXNlU2VhcmNoUGFyYW1zLFxuICB1c2VTdWJtaXQsXG4gIHVzZUZvcm1BY3Rpb24sXG4gIHVzZUZldGNoZXIsXG4gIHVzZUZldGNoZXJzLFxuICB1c2VTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQmVmb3JlVW5sb2FkLFxuICB1c2VQcm9tcHQsXG4gIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGUsXG4gIFN0YXRpY1JvdXRlcixcbiAgU3RhdGljUm91dGVyUHJvdmlkZXIsXG4gIGNyZWF0ZVN0YXRpY0hhbmRsZXIyLFxuICBjcmVhdGVTdGF0aWNSb3V0ZXJcbn07XG4iLAogICAgIi8qKlxuICogcmVhY3Qtcm91dGVyIHY3LjkuNVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCB7XG4gIFJTQ0RlZmF1bHRSb290RXJyb3JCb3VuZGFyeSxcbiAgUlNDU3RhdGljUm91dGVyLFxuICBTZXJ2ZXJNb2RlLFxuICBTZXJ2ZXJSb3V0ZXIsXG4gIGNyZWF0ZUNvb2tpZSxcbiAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsXG4gIGNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcixcbiAgY3JlYXRlUm91dGVzU3R1YixcbiAgY3JlYXRlU2Vzc2lvbixcbiAgY3JlYXRlU2Vzc2lvblN0b3JhZ2UsXG4gIGRlc2VyaWFsaXplRXJyb3JzLFxuICBnZXRIeWRyYXRpb25EYXRhLFxuICBocmVmLFxuICBpc0Nvb2tpZSxcbiAgaXNTZXNzaW9uLFxuICByb3V0ZVJTQ1NlcnZlclJlcXVlc3QsXG4gIHNldERldlNlcnZlckhvb2tzXG59IGZyb20gXCIuL2NodW5rLUpHM1hORDVBLm1qc1wiO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBd2FpdCxcbiAgQXdhaXRDb250ZXh0UHJvdmlkZXIsXG4gIEJyb3dzZXJSb3V0ZXIsXG4gIERhdGFSb3V0ZXJDb250ZXh0LFxuICBEYXRhUm91dGVyU3RhdGVDb250ZXh0LFxuICBFcnJvclJlc3BvbnNlSW1wbCxcbiAgRmV0Y2hlcnNDb250ZXh0LFxuICBGb3JtLFxuICBGcmFtZXdvcmtDb250ZXh0LFxuICBIYXNoUm91dGVyLFxuICBIaXN0b3J5Um91dGVyLFxuICBJRExFX0JMT0NLRVIsXG4gIElETEVfRkVUQ0hFUixcbiAgSURMRV9OQVZJR0FUSU9OLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTG9jYXRpb25Db250ZXh0LFxuICBNZW1vcnlSb3V0ZXIsXG4gIE1ldGEsXG4gIE5hdkxpbmssXG4gIE5hdmlnYXRlLFxuICBOYXZpZ2F0aW9uQ29udGV4dCxcbiAgT3V0bGV0LFxuICBQcmVmZXRjaFBhZ2VMaW5rcyxcbiAgUmVtaXhFcnJvckJvdW5kYXJ5LFxuICBSb3V0ZSxcbiAgUm91dGVDb250ZXh0LFxuICBSb3V0ZXIsXG4gIFJvdXRlckNvbnRleHRQcm92aWRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG4gIFJvdXRlcyxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIFNpbmdsZUZldGNoUmVkaXJlY3RTeW1ib2wsXG4gIFN0YXRpY1JvdXRlcixcbiAgU3RhdGljUm91dGVyUHJvdmlkZXIsXG4gIFZpZXdUcmFuc2l0aW9uQ29udGV4dCxcbiAgV2l0aENvbXBvbmVudFByb3BzLFxuICBXaXRoRXJyb3JCb3VuZGFyeVByb3BzLFxuICBXaXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMsXG4gIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LFxuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBjcmVhdGVDbGllbnRSb3V0ZXMsXG4gIGNyZWF0ZUNsaWVudFJvdXRlc1dpdGhITVJSZXZhbGlkYXRpb25PcHRPdXQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIGNyZWF0ZUhhc2hSb3V0ZXIsXG4gIGNyZWF0ZU1lbW9yeVJvdXRlcixcbiAgY3JlYXRlUGF0aCxcbiAgY3JlYXRlUm91dGVyLFxuICBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4sXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyxcbiAgY3JlYXRlU2VhcmNoUGFyYW1zLFxuICBjcmVhdGVTdGF0aWNIYW5kbGVyMiBhcyBjcmVhdGVTdGF0aWNIYW5kbGVyLFxuICBjcmVhdGVTdGF0aWNSb3V0ZXIsXG4gIGRhdGEsXG4gIGRlY29kZVZpYVR1cmJvU3RyZWFtLFxuICBnZW5lcmF0ZVBhdGgsXG4gIGdldFBhdGNoUm91dGVzT25OYXZpZ2F0aW9uRnVuY3Rpb24sXG4gIGdldFR1cmJvU3RyZWFtU2luZ2xlRmV0Y2hEYXRhU3RyYXRlZ3ksXG4gIGh5ZHJhdGlvblJvdXRlUHJvcGVydGllcyxcbiAgaW52YXJpYW50LFxuICBpc1JvdXRlRXJyb3JSZXNwb25zZSxcbiAgbWFwUm91dGVQcm9wZXJ0aWVzLFxuICBtYXRjaFBhdGgsXG4gIG1hdGNoUm91dGVzLFxuICBwYXJzZVBhdGgsXG4gIHJlZGlyZWN0LFxuICByZWRpcmVjdERvY3VtZW50LFxuICByZW5kZXJNYXRjaGVzLFxuICByZXBsYWNlLFxuICByZXNvbHZlUGF0aCxcbiAgc2hvdWxkSHlkcmF0ZVJvdXRlTG9hZGVyLFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VBc3luY0Vycm9yLFxuICB1c2VBc3luY1ZhbHVlLFxuICB1c2VCZWZvcmVVbmxvYWQsXG4gIHVzZUJsb2NrZXIsXG4gIHVzZUZldGNoZXIsXG4gIHVzZUZldGNoZXJzLFxuICB1c2VGb2dPRldhckRpc2NvdmVyeSxcbiAgdXNlRm9ybUFjdGlvbixcbiAgdXNlSHJlZixcbiAgdXNlSW5Sb3V0ZXJDb250ZXh0LFxuICB1c2VMaW5rQ2xpY2tIYW5kbGVyLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VMb2NhdGlvbixcbiAgdXNlTWF0Y2gsXG4gIHVzZU1hdGNoZXMsXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VOYXZpZ2F0aW9uLFxuICB1c2VOYXZpZ2F0aW9uVHlwZSxcbiAgdXNlT3V0bGV0LFxuICB1c2VPdXRsZXRDb250ZXh0LFxuICB1c2VQYXJhbXMsXG4gIHVzZVByb21wdCxcbiAgdXNlUmVzb2x2ZWRQYXRoLFxuICB1c2VSZXZhbGlkYXRvcixcbiAgdXNlUm91dGUsXG4gIHVzZVJvdXRlRXJyb3IsXG4gIHVzZVJvdXRlTG9hZGVyRGF0YSxcbiAgdXNlUm91dGVzLFxuICB1c2VTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlU2VhcmNoUGFyYW1zLFxuICB1c2VTdWJtaXQsXG4gIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGUsXG4gIHdpdGhDb21wb25lbnRQcm9wcyxcbiAgd2l0aEVycm9yQm91bmRhcnlQcm9wcyxcbiAgd2l0aEh5ZHJhdGVGYWxsYmFja1Byb3BzXG59IGZyb20gXCIuL2NodW5rLVVJR0RTV1BILm1qc1wiO1xuZXhwb3J0IHtcbiAgQXdhaXQsXG4gIEJyb3dzZXJSb3V0ZXIsXG4gIEZvcm0sXG4gIEhhc2hSb3V0ZXIsXG4gIElETEVfQkxPQ0tFUixcbiAgSURMRV9GRVRDSEVSLFxuICBJRExFX05BVklHQVRJT04sXG4gIExpbmssXG4gIExpbmtzLFxuICBNZW1vcnlSb3V0ZXIsXG4gIE1ldGEsXG4gIE5hdkxpbmssXG4gIE5hdmlnYXRlLFxuICBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsXG4gIE91dGxldCxcbiAgUHJlZmV0Y2hQYWdlTGlua3MsXG4gIFJvdXRlLFxuICBSb3V0ZXIsXG4gIFJvdXRlckNvbnRleHRQcm92aWRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG4gIFJvdXRlcyxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIFNlcnZlclJvdXRlcixcbiAgU3RhdGljUm91dGVyLFxuICBTdGF0aWNSb3V0ZXJQcm92aWRlcixcbiAgQXdhaXRDb250ZXh0UHJvdmlkZXIgYXMgVU5TQUZFX0F3YWl0Q29udGV4dFByb3ZpZGVyLFxuICBEYXRhUm91dGVyQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsXG4gIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsXG4gIEVycm9yUmVzcG9uc2VJbXBsIGFzIFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCxcbiAgRmV0Y2hlcnNDb250ZXh0IGFzIFVOU0FGRV9GZXRjaGVyc0NvbnRleHQsXG4gIEZyYW1ld29ya0NvbnRleHQgYXMgVU5TQUZFX0ZyYW1ld29ya0NvbnRleHQsXG4gIExvY2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTG9jYXRpb25Db250ZXh0LFxuICBOYXZpZ2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsXG4gIFJTQ0RlZmF1bHRSb290RXJyb3JCb3VuZGFyeSBhcyBVTlNBRkVfUlNDRGVmYXVsdFJvb3RFcnJvckJvdW5kYXJ5LFxuICBSZW1peEVycm9yQm91bmRhcnkgYXMgVU5TQUZFX1JlbWl4RXJyb3JCb3VuZGFyeSxcbiAgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsXG4gIFNlcnZlck1vZGUgYXMgVU5TQUZFX1NlcnZlck1vZGUsXG4gIFNpbmdsZUZldGNoUmVkaXJlY3RTeW1ib2wgYXMgVU5TQUZFX1NpbmdsZUZldGNoUmVkaXJlY3RTeW1ib2wsXG4gIFZpZXdUcmFuc2l0aW9uQ29udGV4dCBhcyBVTlNBRkVfVmlld1RyYW5zaXRpb25Db250ZXh0LFxuICBXaXRoQ29tcG9uZW50UHJvcHMgYXMgVU5TQUZFX1dpdGhDb21wb25lbnRQcm9wcyxcbiAgV2l0aEVycm9yQm91bmRhcnlQcm9wcyBhcyBVTlNBRkVfV2l0aEVycm9yQm91bmRhcnlQcm9wcyxcbiAgV2l0aEh5ZHJhdGVGYWxsYmFja1Byb3BzIGFzIFVOU0FGRV9XaXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMsXG4gIGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGFzIFVOU0FGRV9jcmVhdGVCcm93c2VySGlzdG9yeSxcbiAgY3JlYXRlQ2xpZW50Um91dGVzIGFzIFVOU0FGRV9jcmVhdGVDbGllbnRSb3V0ZXMsXG4gIGNyZWF0ZUNsaWVudFJvdXRlc1dpdGhITVJSZXZhbGlkYXRpb25PcHRPdXQgYXMgVU5TQUZFX2NyZWF0ZUNsaWVudFJvdXRlc1dpdGhITVJSZXZhbGlkYXRpb25PcHRPdXQsXG4gIGNyZWF0ZVJvdXRlciBhcyBVTlNBRkVfY3JlYXRlUm91dGVyLFxuICBkZWNvZGVWaWFUdXJib1N0cmVhbSBhcyBVTlNBRkVfZGVjb2RlVmlhVHVyYm9TdHJlYW0sXG4gIGRlc2VyaWFsaXplRXJyb3JzIGFzIFVOU0FGRV9kZXNlcmlhbGl6ZUVycm9ycyxcbiAgZ2V0SHlkcmF0aW9uRGF0YSBhcyBVTlNBRkVfZ2V0SHlkcmF0aW9uRGF0YSxcbiAgZ2V0UGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25GdW5jdGlvbiBhcyBVTlNBRkVfZ2V0UGF0Y2hSb3V0ZXNPbk5hdmlnYXRpb25GdW5jdGlvbixcbiAgZ2V0VHVyYm9TdHJlYW1TaW5nbGVGZXRjaERhdGFTdHJhdGVneSBhcyBVTlNBRkVfZ2V0VHVyYm9TdHJlYW1TaW5nbGVGZXRjaERhdGFTdHJhdGVneSxcbiAgaHlkcmF0aW9uUm91dGVQcm9wZXJ0aWVzIGFzIFVOU0FGRV9oeWRyYXRpb25Sb3V0ZVByb3BlcnRpZXMsXG4gIGludmFyaWFudCBhcyBVTlNBRkVfaW52YXJpYW50LFxuICBtYXBSb3V0ZVByb3BlcnRpZXMgYXMgVU5TQUZFX21hcFJvdXRlUHJvcGVydGllcyxcbiAgc2hvdWxkSHlkcmF0ZVJvdXRlTG9hZGVyIGFzIFVOU0FGRV9zaG91bGRIeWRyYXRlUm91dGVMb2FkZXIsXG4gIHVzZUZvZ09GV2FyRGlzY292ZXJ5IGFzIFVOU0FGRV91c2VGb2dPRldhckRpc2NvdmVyeSxcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24gYXMgVU5TQUZFX3VzZVNjcm9sbFJlc3RvcmF0aW9uLFxuICB3aXRoQ29tcG9uZW50UHJvcHMgYXMgVU5TQUZFX3dpdGhDb21wb25lbnRQcm9wcyxcbiAgd2l0aEVycm9yQm91bmRhcnlQcm9wcyBhcyBVTlNBRkVfd2l0aEVycm9yQm91bmRhcnlQcm9wcyxcbiAgd2l0aEh5ZHJhdGVGYWxsYmFja1Byb3BzIGFzIFVOU0FGRV93aXRoSHlkcmF0ZUZhbGxiYWNrUHJvcHMsXG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIGNyZWF0ZUNvb2tpZSxcbiAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsXG4gIGNyZWF0ZUhhc2hSb3V0ZXIsXG4gIGNyZWF0ZU1lbW9yeVJvdXRlcixcbiAgY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UsXG4gIGNyZWF0ZVBhdGgsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyLFxuICBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4sXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyxcbiAgY3JlYXRlUm91dGVzU3R1YixcbiAgY3JlYXRlU2VhcmNoUGFyYW1zLFxuICBjcmVhdGVTZXNzaW9uLFxuICBjcmVhdGVTZXNzaW9uU3RvcmFnZSxcbiAgY3JlYXRlU3RhdGljSGFuZGxlcixcbiAgY3JlYXRlU3RhdGljUm91dGVyLFxuICBkYXRhLFxuICBnZW5lcmF0ZVBhdGgsXG4gIGhyZWYsXG4gIGlzQ29va2llLFxuICBpc1JvdXRlRXJyb3JSZXNwb25zZSxcbiAgaXNTZXNzaW9uLFxuICBtYXRjaFBhdGgsXG4gIG1hdGNoUm91dGVzLFxuICBwYXJzZVBhdGgsXG4gIHJlZGlyZWN0LFxuICByZWRpcmVjdERvY3VtZW50LFxuICByZW5kZXJNYXRjaGVzLFxuICByZXBsYWNlLFxuICByZXNvbHZlUGF0aCxcbiAgSGlzdG9yeVJvdXRlciBhcyB1bnN0YWJsZV9IaXN0b3J5Um91dGVyLFxuICBSU0NTdGF0aWNSb3V0ZXIgYXMgdW5zdGFibGVfUlNDU3RhdGljUm91dGVyLFxuICByb3V0ZVJTQ1NlcnZlclJlcXVlc3QgYXMgdW5zdGFibGVfcm91dGVSU0NTZXJ2ZXJSZXF1ZXN0LFxuICBzZXREZXZTZXJ2ZXJIb29rcyBhcyB1bnN0YWJsZV9zZXREZXZTZXJ2ZXJIb29rcyxcbiAgdXNlUHJvbXB0IGFzIHVuc3RhYmxlX3VzZVByb21wdCxcbiAgdXNlUm91dGUgYXMgdW5zdGFibGVfdXNlUm91dGUsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUFzeW5jRXJyb3IsXG4gIHVzZUFzeW5jVmFsdWUsXG4gIHVzZUJlZm9yZVVubG9hZCxcbiAgdXNlQmxvY2tlcixcbiAgdXNlRmV0Y2hlcixcbiAgdXNlRmV0Y2hlcnMsXG4gIHVzZUZvcm1BY3Rpb24sXG4gIHVzZUhyZWYsXG4gIHVzZUluUm91dGVyQ29udGV4dCxcbiAgdXNlTGlua0NsaWNrSGFuZGxlcixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTG9jYXRpb24sXG4gIHVzZU1hdGNoLFxuICB1c2VNYXRjaGVzLFxuICB1c2VOYXZpZ2F0ZSxcbiAgdXNlTmF2aWdhdGlvbixcbiAgdXNlTmF2aWdhdGlvblR5cGUsXG4gIHVzZU91dGxldCxcbiAgdXNlT3V0bGV0Q29udGV4dCxcbiAgdXNlUGFyYW1zLFxuICB1c2VSZXNvbHZlZFBhdGgsXG4gIHVzZVJldmFsaWRhdG9yLFxuICB1c2VSb3V0ZUVycm9yLFxuICB1c2VSb3V0ZUxvYWRlckRhdGEsXG4gIHVzZVJvdXRlcyxcbiAgdXNlU2VhcmNoUGFyYW1zLFxuICB1c2VTdWJtaXQsXG4gIHVzZVZpZXdUcmFuc2l0aW9uU3RhdGVcbn07XG4iLAogICAgIi8qKlxuICogcmVhY3Qtcm91dGVyIHY3LjkuNVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCB7XG4gIFJTQ1JvdXRlckdsb2JhbEVycm9yQm91bmRhcnksXG4gIGRlc2VyaWFsaXplRXJyb3JzLFxuICBnZXRIeWRyYXRpb25EYXRhLFxuICBwb3B1bGF0ZVJTQ1JvdXRlTW9kdWxlc1xufSBmcm9tIFwiLi9jaHVuay1KRzNYTkQ1QS5tanNcIjtcbmltcG9ydCB7XG4gIENSSVRJQ0FMX0NTU19EQVRBX0FUVFJJQlVURSxcbiAgRXJyb3JSZXNwb25zZUltcGwsXG4gIEZyYW1ld29ya0NvbnRleHQsXG4gIFJTQ1JvdXRlckNvbnRleHQsXG4gIFJlbWl4RXJyb3JCb3VuZGFyeSxcbiAgUm91dGVyUHJvdmlkZXIsXG4gIFVOU1RBQkxFX1RyYW5zaXRpb25FbmFibGVkUm91dGVyUHJvdmlkZXIsXG4gIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LFxuICBjcmVhdGVDbGllbnRSb3V0ZXMsXG4gIGNyZWF0ZUNsaWVudFJvdXRlc1dpdGhITVJSZXZhbGlkYXRpb25PcHRPdXQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIGNyZWF0ZVJlcXVlc3RJbml0LFxuICBjcmVhdGVSb3V0ZXIsXG4gIGRlY29kZVZpYVR1cmJvU3RyZWFtLFxuICBnZXRQYXRjaFJvdXRlc09uTmF2aWdhdGlvbkZ1bmN0aW9uLFxuICBnZXRTaW5nbGVGZXRjaERhdGFTdHJhdGVneUltcGwsXG4gIGdldFR1cmJvU3RyZWFtU2luZ2xlRmV0Y2hEYXRhU3RyYXRlZ3ksXG4gIGh5ZHJhdGlvblJvdXRlUHJvcGVydGllcyxcbiAgaW52YXJpYW50LFxuICBpc011dGF0aW9uTWV0aG9kLFxuICBtYXBSb3V0ZVByb3BlcnRpZXMsXG4gIG5vQWN0aW9uRGVmaW5lZEVycm9yLFxuICBzZXRJc0h5ZHJhdGVkLFxuICBzaG91bGRIeWRyYXRlUm91dGVMb2FkZXIsXG4gIHNpbmdsZUZldGNoVXJsLFxuICBzdHJpcEluZGV4UGFyYW0sXG4gIHVzZUZvZ09GV2FyRGlzY292ZXJ5XG59IGZyb20gXCIuL2NodW5rLVVJR0RTV1BILm1qc1wiO1xuXG4vLyBsaWIvZG9tLWV4cG9ydC9kb20tcm91dGVyLXByb3ZpZGVyLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5mdW5jdGlvbiBSb3V0ZXJQcm92aWRlcjIocHJvcHMpIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlclByb3ZpZGVyLCB7IGZsdXNoU3luYzogUmVhY3RET00uZmx1c2hTeW5jLCAuLi5wcm9wcyB9KTtcbn1cblxuLy8gbGliL2RvbS1leHBvcnQvaHlkcmF0ZWQtcm91dGVyLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xudmFyIHNzckluZm8gPSBudWxsO1xudmFyIHJvdXRlciA9IG51bGw7XG5mdW5jdGlvbiBpbml0U3NySW5mbygpIHtcbiAgaWYgKCFzc3JJbmZvICYmIHdpbmRvdy5fX3JlYWN0Um91dGVyQ29udGV4dCAmJiB3aW5kb3cuX19yZWFjdFJvdXRlck1hbmlmZXN0ICYmIHdpbmRvdy5fX3JlYWN0Um91dGVyUm91dGVNb2R1bGVzKSB7XG4gICAgaWYgKHdpbmRvdy5fX3JlYWN0Um91dGVyTWFuaWZlc3Quc3JpID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBpbXBvcnRNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0W3JyLWltcG9ydG1hcF1cIik7XG4gICAgICBpZiAoaW1wb3J0TWFwPy50ZXh0Q29udGVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvdy5fX3JlYWN0Um91dGVyTWFuaWZlc3Quc3JpID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIGltcG9ydE1hcC50ZXh0Q29udGVudFxuICAgICAgICAgICkuaW50ZWdyaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGltcG9ydCBtYXBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzc3JJbmZvID0ge1xuICAgICAgY29udGV4dDogd2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0LFxuICAgICAgbWFuaWZlc3Q6IHdpbmRvdy5fX3JlYWN0Um91dGVyTWFuaWZlc3QsXG4gICAgICByb3V0ZU1vZHVsZXM6IHdpbmRvdy5fX3JlYWN0Um91dGVyUm91dGVNb2R1bGVzLFxuICAgICAgc3RhdGVEZWNvZGluZ1Byb21pc2U6IHZvaWQgMCxcbiAgICAgIHJvdXRlcjogdm9pZCAwLFxuICAgICAgcm91dGVySW5pdGlhbGl6ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlSHlkcmF0ZWRSb3V0ZXIoe1xuICBnZXRDb250ZXh0LFxuICB1bnN0YWJsZV9pbnN0cnVtZW50YXRpb25zXG59KSB7XG4gIGluaXRTc3JJbmZvKCk7XG4gIGlmICghc3NySW5mbykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiWW91IG11c3QgYmUgdXNpbmcgdGhlIFNTUiBmZWF0dXJlcyBvZiBSZWFjdCBSb3V0ZXIgaW4gb3JkZXIgdG8gc2tpcCBwYXNzaW5nIGEgYHJvdXRlcmAgcHJvcCB0byBgPFJvdXRlclByb3ZpZGVyPmBcIlxuICAgICk7XG4gIH1cbiAgbGV0IGxvY2FsU3NySW5mbyA9IHNzckluZm87XG4gIGlmICghc3NySW5mby5zdGF0ZURlY29kaW5nUHJvbWlzZSkge1xuICAgIGxldCBzdHJlYW0gPSBzc3JJbmZvLmNvbnRleHQuc3RyZWFtO1xuICAgIGludmFyaWFudChzdHJlYW0sIFwiTm8gc3RyZWFtIGZvdW5kIGZvciBzaW5nbGUgZmV0Y2ggZGVjb2RpbmdcIik7XG4gICAgc3NySW5mby5jb250ZXh0LnN0cmVhbSA9IHZvaWQgMDtcbiAgICBzc3JJbmZvLnN0YXRlRGVjb2RpbmdQcm9taXNlID0gZGVjb2RlVmlhVHVyYm9TdHJlYW0oc3RyZWFtLCB3aW5kb3cpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICBzc3JJbmZvLmNvbnRleHQuc3RhdGUgPSB2YWx1ZS52YWx1ZTtcbiAgICAgIGxvY2FsU3NySW5mby5zdGF0ZURlY29kaW5nUHJvbWlzZS52YWx1ZSA9IHRydWU7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGxvY2FsU3NySW5mby5zdGF0ZURlY29kaW5nUHJvbWlzZS5lcnJvciA9IGU7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHNzckluZm8uc3RhdGVEZWNvZGluZ1Byb21pc2UuZXJyb3IpIHtcbiAgICB0aHJvdyBzc3JJbmZvLnN0YXRlRGVjb2RpbmdQcm9taXNlLmVycm9yO1xuICB9XG4gIGlmICghc3NySW5mby5zdGF0ZURlY29kaW5nUHJvbWlzZS52YWx1ZSkge1xuICAgIHRocm93IHNzckluZm8uc3RhdGVEZWNvZGluZ1Byb21pc2U7XG4gIH1cbiAgbGV0IHJvdXRlcyA9IGNyZWF0ZUNsaWVudFJvdXRlcyhcbiAgICBzc3JJbmZvLm1hbmlmZXN0LnJvdXRlcyxcbiAgICBzc3JJbmZvLnJvdXRlTW9kdWxlcyxcbiAgICBzc3JJbmZvLmNvbnRleHQuc3RhdGUsXG4gICAgc3NySW5mby5jb250ZXh0LnNzcixcbiAgICBzc3JJbmZvLmNvbnRleHQuaXNTcGFNb2RlXG4gICk7XG4gIGxldCBoeWRyYXRpb25EYXRhID0gdm9pZCAwO1xuICBpZiAoc3NySW5mby5jb250ZXh0LmlzU3BhTW9kZSkge1xuICAgIGxldCB7IGxvYWRlckRhdGEgfSA9IHNzckluZm8uY29udGV4dC5zdGF0ZTtcbiAgICBpZiAoc3NySW5mby5tYW5pZmVzdC5yb3V0ZXMucm9vdD8uaGFzTG9hZGVyICYmIGxvYWRlckRhdGEgJiYgXCJyb290XCIgaW4gbG9hZGVyRGF0YSkge1xuICAgICAgaHlkcmF0aW9uRGF0YSA9IHtcbiAgICAgICAgbG9hZGVyRGF0YToge1xuICAgICAgICAgIHJvb3Q6IGxvYWRlckRhdGEucm9vdFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoeWRyYXRpb25EYXRhID0gZ2V0SHlkcmF0aW9uRGF0YSh7XG4gICAgICBzdGF0ZTogc3NySW5mby5jb250ZXh0LnN0YXRlLFxuICAgICAgcm91dGVzLFxuICAgICAgZ2V0Um91dGVJbmZvOiAocm91dGVJZCkgPT4gKHtcbiAgICAgICAgY2xpZW50TG9hZGVyOiBzc3JJbmZvLnJvdXRlTW9kdWxlc1tyb3V0ZUlkXT8uY2xpZW50TG9hZGVyLFxuICAgICAgICBoYXNMb2FkZXI6IHNzckluZm8ubWFuaWZlc3Qucm91dGVzW3JvdXRlSWRdPy5oYXNMb2FkZXIgPT09IHRydWUsXG4gICAgICAgIGhhc0h5ZHJhdGVGYWxsYmFjazogc3NySW5mby5yb3V0ZU1vZHVsZXNbcm91dGVJZF0/Lkh5ZHJhdGVGYWxsYmFjayAhPSBudWxsXG4gICAgICB9KSxcbiAgICAgIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24sXG4gICAgICBiYXNlbmFtZTogd2luZG93Ll9fcmVhY3RSb3V0ZXJDb250ZXh0Py5iYXNlbmFtZSxcbiAgICAgIGlzU3BhTW9kZTogc3NySW5mby5jb250ZXh0LmlzU3BhTW9kZVxuICAgIH0pO1xuICAgIGlmIChoeWRyYXRpb25EYXRhICYmIGh5ZHJhdGlvbkRhdGEuZXJyb3JzKSB7XG4gICAgICBoeWRyYXRpb25EYXRhLmVycm9ycyA9IGRlc2VyaWFsaXplRXJyb3JzKGh5ZHJhdGlvbkRhdGEuZXJyb3JzKTtcbiAgICB9XG4gIH1cbiAgbGV0IHJvdXRlcjIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIHJvdXRlcyxcbiAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSgpLFxuICAgIGJhc2VuYW1lOiBzc3JJbmZvLmNvbnRleHQuYmFzZW5hbWUsXG4gICAgZ2V0Q29udGV4dCxcbiAgICBoeWRyYXRpb25EYXRhLFxuICAgIGh5ZHJhdGlvblJvdXRlUHJvcGVydGllcyxcbiAgICB1bnN0YWJsZV9pbnN0cnVtZW50YXRpb25zLFxuICAgIG1hcFJvdXRlUHJvcGVydGllcyxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG1pZGRsZXdhcmU6IHNzckluZm8uY29udGV4dC5mdXR1cmUudjhfbWlkZGxld2FyZVxuICAgIH0sXG4gICAgZGF0YVN0cmF0ZWd5OiBnZXRUdXJib1N0cmVhbVNpbmdsZUZldGNoRGF0YVN0cmF0ZWd5KFxuICAgICAgKCkgPT4gcm91dGVyMixcbiAgICAgIHNzckluZm8ubWFuaWZlc3QsXG4gICAgICBzc3JJbmZvLnJvdXRlTW9kdWxlcyxcbiAgICAgIHNzckluZm8uY29udGV4dC5zc3IsXG4gICAgICBzc3JJbmZvLmNvbnRleHQuYmFzZW5hbWVcbiAgICApLFxuICAgIHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uOiBnZXRQYXRjaFJvdXRlc09uTmF2aWdhdGlvbkZ1bmN0aW9uKFxuICAgICAgc3NySW5mby5tYW5pZmVzdCxcbiAgICAgIHNzckluZm8ucm91dGVNb2R1bGVzLFxuICAgICAgc3NySW5mby5jb250ZXh0LnNzcixcbiAgICAgIHNzckluZm8uY29udGV4dC5yb3V0ZURpc2NvdmVyeSxcbiAgICAgIHNzckluZm8uY29udGV4dC5pc1NwYU1vZGUsXG4gICAgICBzc3JJbmZvLmNvbnRleHQuYmFzZW5hbWVcbiAgICApXG4gIH0pO1xuICBzc3JJbmZvLnJvdXRlciA9IHJvdXRlcjI7XG4gIGlmIChyb3V0ZXIyLnN0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgc3NySW5mby5yb3V0ZXJJbml0aWFsaXplZCA9IHRydWU7XG4gICAgcm91dGVyMi5pbml0aWFsaXplKCk7XG4gIH1cbiAgcm91dGVyMi5jcmVhdGVSb3V0ZXNGb3JITVIgPSAvKiBzcGFjZXIgc28gdHMtaWdub3JlIGRvZXMgbm90IGFmZmVjdCB0aGUgcmlnaHQgaGFuZCBvZiB0aGUgYXNzaWdubWVudCAqL1xuICBjcmVhdGVDbGllbnRSb3V0ZXNXaXRoSE1SUmV2YWxpZGF0aW9uT3B0T3V0O1xuICB3aW5kb3cuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIgPSByb3V0ZXIyO1xuICByZXR1cm4gcm91dGVyMjtcbn1cbmZ1bmN0aW9uIEh5ZHJhdGVkUm91dGVyKHByb3BzKSB7XG4gIGlmICghcm91dGVyKSB7XG4gICAgcm91dGVyID0gY3JlYXRlSHlkcmF0ZWRSb3V0ZXIoe1xuICAgICAgZ2V0Q29udGV4dDogcHJvcHMuZ2V0Q29udGV4dCxcbiAgICAgIHVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnM6IHByb3BzLnVuc3RhYmxlX2luc3RydW1lbnRhdGlvbnNcbiAgICB9KTtcbiAgfVxuICBsZXQgW2NyaXRpY2FsQ3NzLCBzZXRDcml0aWNhbENzc10gPSBSZWFjdDIudXNlU3RhdGUoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IHNzckluZm8/LmNvbnRleHQuY3JpdGljYWxDc3MgOiB2b2lkIDBcbiAgKTtcbiAgUmVhY3QyLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIHNldENyaXRpY2FsQ3NzKHZvaWQgMCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIFJlYWN0Mi51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNyaXRpY2FsQ3NzID09PSB2b2lkIDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0NSSVRJQ0FMX0NTU19EQVRBX0FUVFJJQlVURX1dYCkuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgfVxuICB9LCBbY3JpdGljYWxDc3NdKTtcbiAgbGV0IFtsb2NhdGlvbjIsIHNldExvY2F0aW9uXSA9IFJlYWN0Mi51c2VTdGF0ZShyb3V0ZXIuc3RhdGUubG9jYXRpb24pO1xuICBSZWFjdDIudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3NySW5mbyAmJiBzc3JJbmZvLnJvdXRlciAmJiAhc3NySW5mby5yb3V0ZXJJbml0aWFsaXplZCkge1xuICAgICAgc3NySW5mby5yb3V0ZXJJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBzc3JJbmZvLnJvdXRlci5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIFJlYWN0Mi51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzc3JJbmZvICYmIHNzckluZm8ucm91dGVyKSB7XG4gICAgICByZXR1cm4gc3NySW5mby5yb3V0ZXIuc3Vic2NyaWJlKChuZXdTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAobmV3U3RhdGUubG9jYXRpb24gIT09IGxvY2F0aW9uMikge1xuICAgICAgICAgIHNldExvY2F0aW9uKG5ld1N0YXRlLmxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbG9jYXRpb24yXSk7XG4gIGludmFyaWFudChzc3JJbmZvLCBcInNzckluZm8gdW5hdmFpbGFibGUgZm9yIEh5ZHJhdGVkUm91dGVyXCIpO1xuICB1c2VGb2dPRldhckRpc2NvdmVyeShcbiAgICByb3V0ZXIsXG4gICAgc3NySW5mby5tYW5pZmVzdCxcbiAgICBzc3JJbmZvLnJvdXRlTW9kdWxlcyxcbiAgICBzc3JJbmZvLmNvbnRleHQuc3NyLFxuICAgIHNzckluZm8uY29udGV4dC5yb3V0ZURpc2NvdmVyeSxcbiAgICBzc3JJbmZvLmNvbnRleHQuaXNTcGFNb2RlXG4gICk7XG4gIHJldHVybiAoXG4gICAgLy8gVGhpcyBmcmFnbWVudCBpcyBpbXBvcnRhbnQgdG8gZW5zdXJlIHdlIG1hdGNoIHRoZSA8U2VydmVyUm91dGVyPiBKU1hcbiAgICAvLyBzdHJ1Y3R1cmUgc28gdGhhdCB1c2VJZCB2YWx1ZXMgaHlkcmF0ZSBjb3JyZWN0bHlcbiAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoUmVhY3QyLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBGcmFtZXdvcmtDb250ZXh0LlByb3ZpZGVyLFxuICAgICAge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIG1hbmlmZXN0OiBzc3JJbmZvLm1hbmlmZXN0LFxuICAgICAgICAgIHJvdXRlTW9kdWxlczogc3NySW5mby5yb3V0ZU1vZHVsZXMsXG4gICAgICAgICAgZnV0dXJlOiBzc3JJbmZvLmNvbnRleHQuZnV0dXJlLFxuICAgICAgICAgIGNyaXRpY2FsQ3NzLFxuICAgICAgICAgIHNzcjogc3NySW5mby5jb250ZXh0LnNzcixcbiAgICAgICAgICBpc1NwYU1vZGU6IHNzckluZm8uY29udGV4dC5pc1NwYU1vZGUsXG4gICAgICAgICAgcm91dGVEaXNjb3Zlcnk6IHNzckluZm8uY29udGV4dC5yb3V0ZURpc2NvdmVyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0Mi5jcmVhdGVFbGVtZW50KFJlbWl4RXJyb3JCb3VuZGFyeSwgeyBsb2NhdGlvbjogbG9jYXRpb24yIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUm91dGVyUHJvdmlkZXIyLFxuICAgICAgICB7XG4gICAgICAgICAgcm91dGVyLFxuICAgICAgICAgIHVuc3RhYmxlX29uRXJyb3I6IHByb3BzLnVuc3RhYmxlX29uRXJyb3JcbiAgICAgICAgfVxuICAgICAgKSlcbiAgICApLCAvKiBAX19QVVJFX18gKi8gUmVhY3QyLmNyZWF0ZUVsZW1lbnQoUmVhY3QyLkZyYWdtZW50LCBudWxsKSlcbiAgKTtcbn1cblxuLy8gbGliL3JzYy9icm93c2VyLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QzIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00yIGZyb20gXCJyZWFjdC1kb21cIjtcbmZ1bmN0aW9uIGNyZWF0ZUNhbGxTZXJ2ZXIoe1xuICBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0sXG4gIGNyZWF0ZVRlbXBvcmFyeVJlZmVyZW5jZVNldCxcbiAgZW5jb2RlUmVwbHksXG4gIGZldGNoOiBmZXRjaEltcGxlbWVudGF0aW9uID0gZmV0Y2hcbn0pIHtcbiAgY29uc3QgZ2xvYmFsVmFyID0gd2luZG93O1xuICBsZXQgbGFuZGVkQWN0aW9uSWQgPSAwO1xuICByZXR1cm4gYXN5bmMgKGlkLCBhcmdzKSA9PiB7XG4gICAgbGV0IGFjdGlvbklkID0gZ2xvYmFsVmFyLl9fcm91dGVyQWN0aW9uSUQgPSAoZ2xvYmFsVmFyLl9fcm91dGVyQWN0aW9uSUQgPz8gKGdsb2JhbFZhci5fX3JvdXRlckFjdGlvbklEID0gMCkpICsgMTtcbiAgICBjb25zdCB0ZW1wb3JhcnlSZWZlcmVuY2VzID0gY3JlYXRlVGVtcG9yYXJ5UmVmZXJlbmNlU2V0KCk7XG4gICAgY29uc3QgcGF5bG9hZFByb21pc2UgPSBmZXRjaEltcGxlbWVudGF0aW9uKFxuICAgICAgbmV3IFJlcXVlc3QobG9jYXRpb24uaHJlZiwge1xuICAgICAgICBib2R5OiBhd2FpdCBlbmNvZGVSZXBseShhcmdzLCB7IHRlbXBvcmFyeVJlZmVyZW5jZXMgfSksXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwidGV4dC94LWNvbXBvbmVudFwiLFxuICAgICAgICAgIFwicnNjLWFjdGlvbi1pZFwiOiBpZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2UuYm9keSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBib2R5XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWF0ZUZyb21SZWFkYWJsZVN0cmVhbShyZXNwb25zZS5ib2R5LCB7XG4gICAgICAgIHRlbXBvcmFyeVJlZmVyZW5jZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdsb2JhbFZhci5fX3JlYWN0Um91dGVyRGF0YVJvdXRlci5fX3NldFBlbmRpbmdSZXJlbmRlcihcbiAgICAgIFByb21pc2UucmVzb2x2ZShwYXlsb2FkUHJvbWlzZSkudGhlbihhc3luYyAocGF5bG9hZCkgPT4ge1xuICAgICAgICBpZiAocGF5bG9hZC50eXBlID09PSBcInJlZGlyZWN0XCIpIHtcbiAgICAgICAgICBpZiAocGF5bG9hZC5yZWxvYWQgfHwgaXNFeHRlcm5hbExvY2F0aW9uKHBheWxvYWQubG9jYXRpb24pKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBheWxvYWQubG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbFZhci5fX3JlYWN0Um91dGVyRGF0YVJvdXRlci5uYXZpZ2F0ZShwYXlsb2FkLmxvY2F0aW9uLCB7XG4gICAgICAgICAgICAgIHJlcGxhY2U6IHBheWxvYWQucmVwbGFjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC50eXBlICE9PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBwYXlsb2FkIHR5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVyZW5kZXIgPSBhd2FpdCBwYXlsb2FkLnJlcmVuZGVyO1xuICAgICAgICBpZiAocmVyZW5kZXIgJiYgbGFuZGVkQWN0aW9uSWQgPCBhY3Rpb25JZCAmJiBnbG9iYWxWYXIuX19yb3V0ZXJBY3Rpb25JRCA8PSBhY3Rpb25JZCkge1xuICAgICAgICAgIGlmIChyZXJlbmRlci50eXBlID09PSBcInJlZGlyZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChyZXJlbmRlci5yZWxvYWQgfHwgaXNFeHRlcm5hbExvY2F0aW9uKHJlcmVuZGVyLmxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcmVuZGVyLmxvY2F0aW9uO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIubmF2aWdhdGUocmVyZW5kZXIubG9jYXRpb24sIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlOiByZXJlbmRlci5yZXBsYWNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0TWF0Y2g7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIHJlcmVuZGVyLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJEYXRhUm91dGVyLnBhdGNoUm91dGVzKFxuICAgICAgICAgICAgICAgIGxhc3RNYXRjaD8uaWQgPz8gbnVsbCxcbiAgICAgICAgICAgICAgICBbY3JlYXRlUm91dGVGcm9tU2VydmVyTWFuaWZlc3QobWF0Y2gpXSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxhc3RNYXRjaCA9IG1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93Ll9fcmVhY3RSb3V0ZXJEYXRhUm91dGVyLl9pbnRlcm5hbFNldFN0YXRlRG9Ob3RVc2VPcllvdVdpbGxCcmVha1lvdXJBcHAoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2FkZXJEYXRhOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuc3RhdGUubG9hZGVyRGF0YSxcbiAgICAgICAgICAgICAgICAgIHJlcmVuZGVyLmxvYWRlckRhdGFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGVycm9yczogcmVyZW5kZXIuZXJyb3JzID8gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJEYXRhUm91dGVyLnN0YXRlLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgIHJlcmVuZGVyLmVycm9yc1xuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB9O1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiBwYXlsb2FkUHJvbWlzZS50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICBpZiAocGF5bG9hZC50eXBlICE9PSBcImFjdGlvblwiICYmIHBheWxvYWQudHlwZSAhPT0gXCJyZWRpcmVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgcGF5bG9hZCB0eXBlXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBheWxvYWQuYWN0aW9uUmVzdWx0O1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyRnJvbVBheWxvYWQoe1xuICBmZXRjaEltcGxlbWVudGF0aW9uLFxuICBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0sXG4gIGdldENvbnRleHQsXG4gIHBheWxvYWRcbn0pIHtcbiAgY29uc3QgZ2xvYmFsVmFyID0gd2luZG93O1xuICBpZiAoZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJEYXRhUm91dGVyICYmIGdsb2JhbFZhci5fX3JlYWN0Um91dGVyUm91dGVNb2R1bGVzKVxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZXI6IGdsb2JhbFZhci5fX3JlYWN0Um91dGVyRGF0YVJvdXRlcixcbiAgICAgIHJvdXRlTW9kdWxlczogZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJSb3V0ZU1vZHVsZXNcbiAgICB9O1xuICBpZiAocGF5bG9hZC50eXBlICE9PSBcInJlbmRlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBheWxvYWQgdHlwZVwiKTtcbiAgZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJSb3V0ZU1vZHVsZXMgPSBnbG9iYWxWYXIuX19yZWFjdFJvdXRlclJvdXRlTW9kdWxlcyA/PyB7fTtcbiAgcG9wdWxhdGVSU0NSb3V0ZU1vZHVsZXMoZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJSb3V0ZU1vZHVsZXMsIHBheWxvYWQubWF0Y2hlcyk7XG4gIGxldCBwYXRjaGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgcGF5bG9hZC5wYXRjaGVzPy5mb3JFYWNoKChwYXRjaCkgPT4ge1xuICAgIGludmFyaWFudChwYXRjaC5wYXJlbnRJZCwgXCJJbnZhbGlkIHBhdGNoIHBhcmVudElkXCIpO1xuICAgIGlmICghcGF0Y2hlcy5oYXMocGF0Y2gucGFyZW50SWQpKSB7XG4gICAgICBwYXRjaGVzLnNldChwYXRjaC5wYXJlbnRJZCwgW10pO1xuICAgIH1cbiAgICBwYXRjaGVzLmdldChwYXRjaC5wYXJlbnRJZCk/LnB1c2gocGF0Y2gpO1xuICB9KTtcbiAgbGV0IHJvdXRlcyA9IHBheWxvYWQubWF0Y2hlcy5yZWR1Y2VSaWdodCgocHJldmlvdXMsIG1hdGNoKSA9PiB7XG4gICAgY29uc3Qgcm91dGUgPSBjcmVhdGVSb3V0ZUZyb21TZXJ2ZXJNYW5pZmVzdChcbiAgICAgIG1hdGNoLFxuICAgICAgcGF5bG9hZFxuICAgICk7XG4gICAgaWYgKHByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gcHJldmlvdXM7XG4gICAgICBsZXQgY2hpbGRyZW5Ub1BhdGNoID0gcGF0Y2hlcy5nZXQobWF0Y2guaWQpO1xuICAgICAgaWYgKGNoaWxkcmVuVG9QYXRjaCkge1xuICAgICAgICByb3V0ZS5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIC4uLmNoaWxkcmVuVG9QYXRjaC5tYXAoKHIpID0+IGNyZWF0ZVJvdXRlRnJvbVNlcnZlck1hbmlmZXN0KHIpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3JvdXRlXTtcbiAgfSwgW10pO1xuICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIHJvdXRlcyxcbiAgICBnZXRDb250ZXh0LFxuICAgIGJhc2VuYW1lOiBwYXlsb2FkLmJhc2VuYW1lLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksXG4gICAgaHlkcmF0aW9uRGF0YTogZ2V0SHlkcmF0aW9uRGF0YSh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBsb2FkZXJEYXRhOiBwYXlsb2FkLmxvYWRlckRhdGEsXG4gICAgICAgIGFjdGlvbkRhdGE6IHBheWxvYWQuYWN0aW9uRGF0YSxcbiAgICAgICAgZXJyb3JzOiBwYXlsb2FkLmVycm9yc1xuICAgICAgfSxcbiAgICAgIHJvdXRlcyxcbiAgICAgIGdldFJvdXRlSW5mbzogKHJvdXRlSWQpID0+IHtcbiAgICAgICAgbGV0IG1hdGNoID0gcGF5bG9hZC5tYXRjaGVzLmZpbmQoKG0pID0+IG0uaWQgPT09IHJvdXRlSWQpO1xuICAgICAgICBpbnZhcmlhbnQobWF0Y2gsIFwiUm91dGUgbm90IGZvdW5kIGluIHBheWxvYWRcIik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2xpZW50TG9hZGVyOiBtYXRjaC5jbGllbnRMb2FkZXIsXG4gICAgICAgICAgaGFzTG9hZGVyOiBtYXRjaC5oYXNMb2FkZXIsXG4gICAgICAgICAgaGFzSHlkcmF0ZUZhbGxiYWNrOiBtYXRjaC5oeWRyYXRlRmFsbGJhY2tFbGVtZW50ICE9IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbjogcGF5bG9hZC5sb2NhdGlvbixcbiAgICAgIGJhc2VuYW1lOiBwYXlsb2FkLmJhc2VuYW1lLFxuICAgICAgaXNTcGFNb2RlOiBmYWxzZVxuICAgIH0pLFxuICAgIGFzeW5jIHBhdGNoUm91dGVzT25OYXZpZ2F0aW9uKHsgcGF0aCwgc2lnbmFsIH0pIHtcbiAgICAgIGlmIChkaXNjb3ZlcmVkUGF0aHMuaGFzKHBhdGgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGZldGNoQW5kQXBwbHlNYW5pZmVzdFBhdGNoZXMoXG4gICAgICAgIFtwYXRoXSxcbiAgICAgICAgY3JlYXRlRnJvbVJlYWRhYmxlU3RyZWFtLFxuICAgICAgICBmZXRjaEltcGxlbWVudGF0aW9uLFxuICAgICAgICBzaWduYWxcbiAgICAgICk7XG4gICAgfSxcbiAgICAvLyBGSVhNRTogUGFzcyBgYnVpbGQuc3NyYCBpbnRvIHRoaXMgZnVuY3Rpb25cbiAgICBkYXRhU3RyYXRlZ3k6IGdldFJTQ1NpbmdsZUZldGNoRGF0YVN0cmF0ZWd5KFxuICAgICAgKCkgPT4gZ2xvYmFsVmFyLl9fcmVhY3RSb3V0ZXJEYXRhUm91dGVyLFxuICAgICAgdHJ1ZSxcbiAgICAgIHBheWxvYWQuYmFzZW5hbWUsXG4gICAgICBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0sXG4gICAgICBmZXRjaEltcGxlbWVudGF0aW9uXG4gICAgKVxuICB9KTtcbiAgaWYgKGdsb2JhbFZhci5fX3JlYWN0Um91dGVyRGF0YVJvdXRlci5zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgIGdsb2JhbFZhci5fX3JvdXRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuaW5pdGlhbGl6ZSgpO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbFZhci5fX3JvdXRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cbiAgbGV0IGxhc3RMb2FkZXJEYXRhID0gdm9pZCAwO1xuICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuc3Vic2NyaWJlKCh7IGxvYWRlckRhdGEsIGFjdGlvbkRhdGEgfSkgPT4ge1xuICAgIGlmIChsYXN0TG9hZGVyRGF0YSAhPT0gbG9hZGVyRGF0YSkge1xuICAgICAgZ2xvYmFsVmFyLl9fcm91dGVyQWN0aW9uSUQgPSAoZ2xvYmFsVmFyLl9fcm91dGVyQWN0aW9uSUQgPz8gKGdsb2JhbFZhci5fX3JvdXRlckFjdGlvbklEID0gMCkpICsgMTtcbiAgICB9XG4gIH0pO1xuICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuX3VwZGF0ZVJvdXRlc0ZvckhNUiA9IChyb3V0ZVVwZGF0ZUJ5Um91dGVJZCkgPT4ge1xuICAgIGNvbnN0IG9sZFJvdXRlcyA9IHdpbmRvdy5fX3JlYWN0Um91dGVyRGF0YVJvdXRlci5yb3V0ZXM7XG4gICAgY29uc3QgbmV3Um91dGVzID0gW107XG4gICAgZnVuY3Rpb24gd2Fsa1JvdXRlcyhyb3V0ZXMyLCBwYXJlbnRJZCkge1xuICAgICAgcmV0dXJuIHJvdXRlczIubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZVVwZGF0ZSA9IHJvdXRlVXBkYXRlQnlSb3V0ZUlkLmdldChyb3V0ZS5pZCk7XG4gICAgICAgIGlmIChyb3V0ZVVwZGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJvdXRlTW9kdWxlLFxuICAgICAgICAgICAgaGFzQWN0aW9uLFxuICAgICAgICAgICAgaGFzQ29tcG9uZW50LFxuICAgICAgICAgICAgaGFzRXJyb3JCb3VuZGFyeSxcbiAgICAgICAgICAgIGhhc0xvYWRlclxuICAgICAgICAgIH0gPSByb3V0ZVVwZGF0ZTtcbiAgICAgICAgICBjb25zdCBuZXdSb3V0ZSA9IGNyZWF0ZVJvdXRlRnJvbVNlcnZlck1hbmlmZXN0KHtcbiAgICAgICAgICAgIGNsaWVudEFjdGlvbjogcm91dGVNb2R1bGUuY2xpZW50QWN0aW9uLFxuICAgICAgICAgICAgY2xpZW50TG9hZGVyOiByb3V0ZU1vZHVsZS5jbGllbnRMb2FkZXIsXG4gICAgICAgICAgICBlbGVtZW50OiByb3V0ZS5lbGVtZW50LFxuICAgICAgICAgICAgZXJyb3JFbGVtZW50OiByb3V0ZS5lcnJvckVsZW1lbnQsXG4gICAgICAgICAgICBoYW5kbGU6IHJvdXRlLmhhbmRsZSxcbiAgICAgICAgICAgIGhhc0FjdGlvbixcbiAgICAgICAgICAgIGhhc0NvbXBvbmVudCxcbiAgICAgICAgICAgIGhhc0Vycm9yQm91bmRhcnksXG4gICAgICAgICAgICBoYXNMb2FkZXIsXG4gICAgICAgICAgICBoeWRyYXRlRmFsbGJhY2tFbGVtZW50OiByb3V0ZS5oeWRyYXRlRmFsbGJhY2tFbGVtZW50LFxuICAgICAgICAgICAgaWQ6IHJvdXRlLmlkLFxuICAgICAgICAgICAgaW5kZXg6IHJvdXRlLmluZGV4LFxuICAgICAgICAgICAgbGlua3M6IHJvdXRlTW9kdWxlLmxpbmtzLFxuICAgICAgICAgICAgbWV0YTogcm91dGVNb2R1bGUubWV0YSxcbiAgICAgICAgICAgIHBhcmVudElkLFxuICAgICAgICAgICAgcGF0aDogcm91dGUucGF0aCxcbiAgICAgICAgICAgIHNob3VsZFJldmFsaWRhdGU6IHJvdXRlTW9kdWxlLnNob3VsZFJldmFsaWRhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5ld1JvdXRlLmNoaWxkcmVuID0gd2Fsa1JvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgcm91dGUuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3Um91dGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXBkYXRlZFJvdXRlID0geyAuLi5yb3V0ZSB9O1xuICAgICAgICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICB1cGRhdGVkUm91dGUuY2hpbGRyZW4gPSB3YWxrUm91dGVzKHJvdXRlLmNoaWxkcmVuLCByb3V0ZS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRSb3V0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBuZXdSb3V0ZXMucHVzaChcbiAgICAgIC4uLndhbGtSb3V0ZXMob2xkUm91dGVzLCB2b2lkIDApXG4gICAgKTtcbiAgICB3aW5kb3cuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuX2ludGVybmFsU2V0Um91dGVzKG5ld1JvdXRlcyk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIsXG4gICAgcm91dGVNb2R1bGVzOiBnbG9iYWxWYXIuX19yZWFjdFJvdXRlclJvdXRlTW9kdWxlc1xuICB9O1xufVxudmFyIHJlbmRlcmVkUm91dGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmZ1bmN0aW9uIGdldFJTQ1NpbmdsZUZldGNoRGF0YVN0cmF0ZWd5KGdldFJvdXRlciwgc3NyLCBiYXNlbmFtZSwgY3JlYXRlRnJvbVJlYWRhYmxlU3RyZWFtLCBmZXRjaEltcGxlbWVudGF0aW9uKSB7XG4gIGxldCBkYXRhU3RyYXRlZ3kgPSBnZXRTaW5nbGVGZXRjaERhdGFTdHJhdGVneUltcGwoXG4gICAgZ2V0Um91dGVyLFxuICAgIChtYXRjaCkgPT4ge1xuICAgICAgbGV0IE0gPSBtYXRjaDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc0xvYWRlcjogTS5yb3V0ZS5oYXNMb2FkZXIsXG4gICAgICAgIGhhc0NsaWVudExvYWRlcjogTS5yb3V0ZS5oYXNDbGllbnRMb2FkZXIsXG4gICAgICAgIGhhc0NvbXBvbmVudDogTS5yb3V0ZS5oYXNDb21wb25lbnQsXG4gICAgICAgIGhhc0FjdGlvbjogTS5yb3V0ZS5oYXNBY3Rpb24sXG4gICAgICAgIGhhc0NsaWVudEFjdGlvbjogTS5yb3V0ZS5oYXNDbGllbnRBY3Rpb24sXG4gICAgICAgIGhhc1Nob3VsZFJldmFsaWRhdGU6IE0ucm91dGUuaGFzU2hvdWxkUmV2YWxpZGF0ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIC8vIHBhc3MgbWFwIGludG8gZmV0Y2hBbmREZWNvZGUgc28gaXQgY2FuIGFkZCBwYXlsb2Fkc1xuICAgIGdldEZldGNoQW5kRGVjb2RlVmlhUlNDKGNyZWF0ZUZyb21SZWFkYWJsZVN0cmVhbSwgZmV0Y2hJbXBsZW1lbnRhdGlvbiksXG4gICAgc3NyLFxuICAgIGJhc2VuYW1lLFxuICAgIC8vIElmIHRoZSByb3V0ZSBoYXMgYSBjb21wb25lbnQgYnV0IHdlIGRvbid0IGhhdmUgYW4gZWxlbWVudCwgd2UgbmVlZCB0byBoaXRcbiAgICAvLyB0aGUgc2VydmVyIGxvYWRlciBmbG93IHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY2xpZW50IGxvYWRlciBjYWxsc1xuICAgIC8vIGBzZXJ2ZXJMb2FkZXJgIG9yIG5vdCwgb3RoZXJ3aXNlIHdlJ2xsIGhhdmUgbm90aGluZyB0byByZW5kZXIuXG4gICAgKG1hdGNoKSA9PiB7XG4gICAgICBsZXQgTSA9IG1hdGNoO1xuICAgICAgcmV0dXJuIE0ucm91dGUuaGFzQ29tcG9uZW50ICYmICFNLnJvdXRlLmVsZW1lbnQ7XG4gICAgfVxuICApO1xuICByZXR1cm4gYXN5bmMgKGFyZ3MpID0+IGFyZ3MucnVuQ2xpZW50TWlkZGxld2FyZShhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XG4gICAgY29udGV4dC5zZXQocmVuZGVyZWRSb3V0ZXNDb250ZXh0LCBbXSk7XG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBkYXRhU3RyYXRlZ3koYXJncyk7XG4gICAgY29uc3QgcmVuZGVyZWRSb3V0ZXNCeUlkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIGNvbnRleHQuZ2V0KHJlbmRlcmVkUm91dGVzQ29udGV4dCkpIHtcbiAgICAgIGlmICghcmVuZGVyZWRSb3V0ZXNCeUlkLmhhcyhyb3V0ZS5pZCkpIHtcbiAgICAgICAgcmVuZGVyZWRSb3V0ZXNCeUlkLnNldChyb3V0ZS5pZCwgW10pO1xuICAgICAgfVxuICAgICAgcmVuZGVyZWRSb3V0ZXNCeUlkLmdldChyb3V0ZS5pZCkucHVzaChyb3V0ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgYXJncy5tYXRjaGVzKSB7XG4gICAgICBjb25zdCByZW5kZXJlZFJvdXRlcyA9IHJlbmRlcmVkUm91dGVzQnlJZC5nZXQobWF0Y2gucm91dGUuaWQpO1xuICAgICAgaWYgKHJlbmRlcmVkUm91dGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVuZGVyZWQgb2YgcmVuZGVyZWRSb3V0ZXMpIHtcbiAgICAgICAgICB3aW5kb3cuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIucGF0Y2hSb3V0ZXMoXG4gICAgICAgICAgICByZW5kZXJlZC5wYXJlbnRJZCA/PyBudWxsLFxuICAgICAgICAgICAgW2NyZWF0ZVJvdXRlRnJvbVNlcnZlck1hbmlmZXN0KHJlbmRlcmVkKV0sXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRGZXRjaEFuZERlY29kZVZpYVJTQyhjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0sIGZldGNoSW1wbGVtZW50YXRpb24pIHtcbiAgcmV0dXJuIGFzeW5jIChhcmdzLCBiYXNlbmFtZSwgdGFyZ2V0Um91dGVzKSA9PiB7XG4gICAgbGV0IHsgcmVxdWVzdCwgY29udGV4dCB9ID0gYXJncztcbiAgICBsZXQgdXJsID0gc2luZ2xlRmV0Y2hVcmwocmVxdWVzdC51cmwsIGJhc2VuYW1lLCBcInJzY1wiKTtcbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgIHVybCA9IHN0cmlwSW5kZXhQYXJhbSh1cmwpO1xuICAgICAgaWYgKHRhcmdldFJvdXRlcykge1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChcIl9yb3V0ZXNcIiwgdGFyZ2V0Um91dGVzLmpvaW4oXCIsXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoSW1wbGVtZW50YXRpb24oXG4gICAgICBuZXcgUmVxdWVzdCh1cmwsIGF3YWl0IGNyZWF0ZVJlcXVlc3RJbml0KHJlcXVlc3QpKVxuICAgICk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwICYmICFyZXMuaGVhZGVycy5oYXMoXCJYLVJlbWl4LVJlc3BvbnNlXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JSZXNwb25zZUltcGwocmVzLnN0YXR1cywgcmVzLnN0YXR1c1RleHQsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgIH1cbiAgICBpbnZhcmlhbnQocmVzLmJvZHksIFwiTm8gcmVzcG9uc2UgYm9keSB0byBkZWNvZGVcIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0ocmVzLmJvZHksIHtcbiAgICAgICAgdGVtcG9yYXJ5UmVmZXJlbmNlczogdm9pZCAwXG4gICAgICB9KTtcbiAgICAgIGlmIChwYXlsb2FkLnR5cGUgPT09IFwicmVkaXJlY3RcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICByZWRpcmVjdDogcGF5bG9hZC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgcmVsb2FkOiBwYXlsb2FkLnJlbG9hZCxcbiAgICAgICAgICAgICAgcmVwbGFjZTogcGF5bG9hZC5yZXBsYWNlLFxuICAgICAgICAgICAgICByZXZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiBwYXlsb2FkLnN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXlsb2FkLnR5cGUgIT09IFwicmVuZGVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBwYXlsb2FkIHR5cGVcIik7XG4gICAgICB9XG4gICAgICBjb250ZXh0LmdldChyZW5kZXJlZFJvdXRlc0NvbnRleHQpLnB1c2goLi4ucGF5bG9hZC5tYXRjaGVzKTtcbiAgICAgIGxldCByZXN1bHRzID0geyByb3V0ZXM6IHt9IH07XG4gICAgICBjb25zdCBkYXRhS2V5ID0gaXNNdXRhdGlvbk1ldGhvZChyZXF1ZXN0Lm1ldGhvZCkgPyBcImFjdGlvbkRhdGFcIiA6IFwibG9hZGVyRGF0YVwiO1xuICAgICAgZm9yIChsZXQgW3JvdXRlSWQsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWRbZGF0YUtleV0gfHwge30pKSB7XG4gICAgICAgIHJlc3VsdHMucm91dGVzW3JvdXRlSWRdID0geyBkYXRhIH07XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5lcnJvcnMpIHtcbiAgICAgICAgZm9yIChsZXQgW3JvdXRlSWQsIGVycm9yXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkLmVycm9ycykpIHtcbiAgICAgICAgICByZXN1bHRzLnJvdXRlc1tyb3V0ZUlkXSA9IHsgZXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiByZXMuc3RhdHVzLCBkYXRhOiByZXN1bHRzIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGRlY29kZSBSU0MgcmVzcG9uc2VcIik7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gUlNDSHlkcmF0ZWRSb3V0ZXIoe1xuICBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0sXG4gIGZldGNoOiBmZXRjaEltcGxlbWVudGF0aW9uID0gZmV0Y2gsXG4gIHBheWxvYWQsXG4gIHJvdXRlRGlzY292ZXJ5ID0gXCJlYWdlclwiLFxuICBnZXRDb250ZXh0XG59KSB7XG4gIGlmIChwYXlsb2FkLnR5cGUgIT09IFwicmVuZGVyXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGF5bG9hZCB0eXBlXCIpO1xuICBsZXQgeyByb3V0ZXI6IHJvdXRlcjIsIHJvdXRlTW9kdWxlcyB9ID0gUmVhY3QzLnVzZU1lbW8oXG4gICAgKCkgPT4gY3JlYXRlUm91dGVyRnJvbVBheWxvYWQoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGZldGNoSW1wbGVtZW50YXRpb24sXG4gICAgICBnZXRDb250ZXh0LFxuICAgICAgY3JlYXRlRnJvbVJlYWRhYmxlU3RyZWFtXG4gICAgfSksXG4gICAgW2NyZWF0ZUZyb21SZWFkYWJsZVN0cmVhbSwgcGF5bG9hZCwgZmV0Y2hJbXBsZW1lbnRhdGlvbiwgZ2V0Q29udGV4dF1cbiAgKTtcbiAgUmVhY3QzLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNIeWRyYXRlZCgpO1xuICB9LCBbXSk7XG4gIFJlYWN0My51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdsb2JhbFZhciA9IHdpbmRvdztcbiAgICBpZiAoIWdsb2JhbFZhci5fX3JvdXRlckluaXRpYWxpemVkKSB7XG4gICAgICBnbG9iYWxWYXIuX19yb3V0ZXJJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgfSwgW10pO1xuICBsZXQgW2xvY2F0aW9uMiwgc2V0TG9jYXRpb25dID0gUmVhY3QzLnVzZVN0YXRlKHJvdXRlcjIuc3RhdGUubG9jYXRpb24pO1xuICBSZWFjdDMudXNlTGF5b3V0RWZmZWN0KFxuICAgICgpID0+IHJvdXRlcjIuc3Vic2NyaWJlKChuZXdTdGF0ZSkgPT4ge1xuICAgICAgaWYgKG5ld1N0YXRlLmxvY2F0aW9uICE9PSBsb2NhdGlvbjIpIHtcbiAgICAgICAgc2V0TG9jYXRpb24obmV3U3RhdGUubG9jYXRpb24pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIFtyb3V0ZXIyLCBsb2NhdGlvbjJdXG4gICk7XG4gIFJlYWN0My51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZURpc2NvdmVyeSA9PT0gXCJsYXp5XCIgfHwgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHlldFxuICAgIHdpbmRvdy5uYXZpZ2F0b3I/LmNvbm5lY3Rpb24/LnNhdmVEYXRhID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudChlbCkge1xuICAgICAgbGV0IHBhdGggPSBlbC50YWdOYW1lID09PSBcIkZPUk1cIiA/IGVsLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSA6IGVsLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHBhdGhuYW1lID0gZWwudGFnTmFtZSA9PT0gXCJBXCIgPyBlbC5wYXRobmFtZSA6IG5ldyBVUkwocGF0aCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbikucGF0aG5hbWU7XG4gICAgICBpZiAoIWRpc2NvdmVyZWRQYXRocy5oYXMocGF0aG5hbWUpKSB7XG4gICAgICAgIG5leHRQYXRocy5hZGQocGF0aG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFBhdGNoZXMoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtkYXRhLWRpc2NvdmVyXSwgZm9ybVtkYXRhLWRpc2NvdmVyXVwiKS5mb3JFYWNoKHJlZ2lzdGVyRWxlbWVudCk7XG4gICAgICBsZXQgcGF0aHMgPSBBcnJheS5mcm9tKG5leHRQYXRocy5rZXlzKCkpLmZpbHRlcigocGF0aCkgPT4ge1xuICAgICAgICBpZiAoZGlzY292ZXJlZFBhdGhzLmhhcyhwYXRoKSkge1xuICAgICAgICAgIG5leHRQYXRocy5kZWxldGUocGF0aCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZldGNoQW5kQXBwbHlNYW5pZmVzdFBhdGNoZXMoXG4gICAgICAgICAgcGF0aHMsXG4gICAgICAgICAgY3JlYXRlRnJvbVJlYWRhYmxlU3RyZWFtLFxuICAgICAgICAgIGZldGNoSW1wbGVtZW50YXRpb25cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtYW5pZmVzdCBwYXRjaGVzXCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVib3VuY2VkRmV0Y2hQYXRjaGVzID0gZGVib3VuY2UoZmV0Y2hQYXRjaGVzLCAxMDApO1xuICAgIGZldGNoUGF0Y2hlcygpO1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IGRlYm91bmNlZEZldGNoUGF0Y2hlcygpKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZGlzY292ZXJcIiwgXCJocmVmXCIsIFwiYWN0aW9uXCJdXG4gICAgfSk7XG4gIH0sIFtyb3V0ZURpc2NvdmVyeSwgY3JlYXRlRnJvbVJlYWRhYmxlU3RyZWFtLCBmZXRjaEltcGxlbWVudGF0aW9uXSk7XG4gIGNvbnN0IGZyYW1ld29ya0NvbnRleHQgPSB7XG4gICAgZnV0dXJlOiB7XG4gICAgICAvLyBUaGVzZSBmbGFncyBoYXZlIG5vIHJ1bnRpbWUgaW1wYWN0IHNvIGNhbiBhbHdheXMgYmUgZmFsc2UuICBJZiB3ZSBhZGRcbiAgICAgIC8vIGZsYWdzIHRoYXQgZHJpdmUgcnVudGltZSBiZWhhdmlvciB0aGV5J2xsIG5lZWQgdG8gYmUgcHJveGllZCB0aHJvdWdoLlxuICAgICAgdjhfbWlkZGxld2FyZTogZmFsc2UsXG4gICAgICB1bnN0YWJsZV9zdWJSZXNvdXJjZUludGVncml0eTogZmFsc2VcbiAgICB9LFxuICAgIGlzU3BhTW9kZTogZmFsc2UsXG4gICAgc3NyOiB0cnVlLFxuICAgIGNyaXRpY2FsQ3NzOiBcIlwiLFxuICAgIG1hbmlmZXN0OiB7XG4gICAgICByb3V0ZXM6IHt9LFxuICAgICAgdmVyc2lvbjogXCIxXCIsXG4gICAgICB1cmw6IFwiXCIsXG4gICAgICBlbnRyeToge1xuICAgICAgICBtb2R1bGU6IFwiXCIsXG4gICAgICAgIGltcG9ydHM6IFtdXG4gICAgICB9XG4gICAgfSxcbiAgICByb3V0ZURpc2NvdmVyeTogeyBtb2RlOiBcImxhenlcIiwgbWFuaWZlc3RQYXRoOiBcIi9fX21hbmlmZXN0XCIgfSxcbiAgICByb3V0ZU1vZHVsZXNcbiAgfTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChSU0NSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0cnVlIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDMuY3JlYXRlRWxlbWVudChSU0NSb3V0ZXJHbG9iYWxFcnJvckJvdW5kYXJ5LCB7IGxvY2F0aW9uOiBsb2NhdGlvbjIgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0My5jcmVhdGVFbGVtZW50KEZyYW1ld29ya0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGZyYW1ld29ya0NvbnRleHQgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0My5jcmVhdGVFbGVtZW50KFVOU1RBQkxFX1RyYW5zaXRpb25FbmFibGVkUm91dGVyUHJvdmlkZXIsIHsgcm91dGVyOiByb3V0ZXIyLCBmbHVzaFN5bmM6IFJlYWN0RE9NMi5mbHVzaFN5bmMgfSkpKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21TZXJ2ZXJNYW5pZmVzdChtYXRjaCwgcGF5bG9hZCkge1xuICBsZXQgaGFzSW5pdGlhbERhdGEgPSBwYXlsb2FkICYmIG1hdGNoLmlkIGluIHBheWxvYWQubG9hZGVyRGF0YTtcbiAgbGV0IGluaXRpYWxEYXRhID0gcGF5bG9hZD8ubG9hZGVyRGF0YVttYXRjaC5pZF07XG4gIGxldCBoYXNJbml0aWFsRXJyb3IgPSBwYXlsb2FkPy5lcnJvcnMgJiYgbWF0Y2guaWQgaW4gcGF5bG9hZC5lcnJvcnM7XG4gIGxldCBpbml0aWFsRXJyb3IgPSBwYXlsb2FkPy5lcnJvcnM/LlttYXRjaC5pZF07XG4gIGxldCBpc0h5ZHJhdGlvblJlcXVlc3QgPSBtYXRjaC5jbGllbnRMb2FkZXI/Lmh5ZHJhdGUgPT09IHRydWUgfHwgIW1hdGNoLmhhc0xvYWRlciB8fCAvLyBJZiB0aGUgcm91dGUgaGFzIGEgY29tcG9uZW50IGJ1dCB3ZSBkb24ndCBoYXZlIGFuIGVsZW1lbnQsIHdlIG5lZWQgdG8gaGl0XG4gIC8vIHRoZSBzZXJ2ZXIgbG9hZGVyIGZsb3cgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjbGllbnQgbG9hZGVyIGNhbGxzXG4gIC8vIGBzZXJ2ZXJMb2FkZXJgIG9yIG5vdCwgb3RoZXJ3aXNlIHdlJ2xsIGhhdmUgbm90aGluZyB0byByZW5kZXIuXG4gIG1hdGNoLmhhc0NvbXBvbmVudCAmJiAhbWF0Y2guZWxlbWVudDtcbiAgaW52YXJpYW50KHdpbmRvdy5fX3JlYWN0Um91dGVyUm91dGVNb2R1bGVzKTtcbiAgcG9wdWxhdGVSU0NSb3V0ZU1vZHVsZXMod2luZG93Ll9fcmVhY3RSb3V0ZXJSb3V0ZU1vZHVsZXMsIG1hdGNoKTtcbiAgbGV0IGRhdGFSb3V0ZSA9IHtcbiAgICBpZDogbWF0Y2guaWQsXG4gICAgZWxlbWVudDogbWF0Y2guZWxlbWVudCxcbiAgICBlcnJvckVsZW1lbnQ6IG1hdGNoLmVycm9yRWxlbWVudCxcbiAgICBoYW5kbGU6IG1hdGNoLmhhbmRsZSxcbiAgICBoYXNFcnJvckJvdW5kYXJ5OiBtYXRjaC5oYXNFcnJvckJvdW5kYXJ5LFxuICAgIGh5ZHJhdGVGYWxsYmFja0VsZW1lbnQ6IG1hdGNoLmh5ZHJhdGVGYWxsYmFja0VsZW1lbnQsXG4gICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgIGxvYWRlcjogbWF0Y2guY2xpZW50TG9hZGVyID8gYXN5bmMgKGFyZ3MsIHNpbmdsZUZldGNoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbWF0Y2guY2xpZW50TG9hZGVyKHtcbiAgICAgICAgICAuLi5hcmdzLFxuICAgICAgICAgIHNlcnZlckxvYWRlcjogKCkgPT4ge1xuICAgICAgICAgICAgcHJldmVudEludmFsaWRTZXJ2ZXJIYW5kbGVyQ2FsbChcbiAgICAgICAgICAgICAgXCJsb2FkZXJcIixcbiAgICAgICAgICAgICAgbWF0Y2guaWQsXG4gICAgICAgICAgICAgIG1hdGNoLmhhc0xvYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChpc0h5ZHJhdGlvblJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgaWYgKGhhc0luaXRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChoYXNJbml0aWFsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBpbml0aWFsRXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWxsU2luZ2xlRmV0Y2goc2luZ2xlRmV0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0h5ZHJhdGlvblJlcXVlc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IDogKFxuICAgICAgLy8gV2UgYWx3YXlzIG1ha2UgdGhlIGNhbGwgaW4gdGhpcyBSU0Mgd29ybGQgc2luY2UgZXZlbiBpZiB3ZSBkb24ndFxuICAgICAgLy8gaGF2ZSBhIGBsb2FkZXJgIHdlIG1heSBuZWVkIHRvIGdldCB0aGUgYGVsZW1lbnRgIGltcGxlbWVudGF0aW9uXG4gICAgICAoXywgc2luZ2xlRmV0Y2gpID0+IGNhbGxTaW5nbGVGZXRjaChzaW5nbGVGZXRjaClcbiAgICApLFxuICAgIGFjdGlvbjogbWF0Y2guY2xpZW50QWN0aW9uID8gKGFyZ3MsIHNpbmdsZUZldGNoKSA9PiBtYXRjaC5jbGllbnRBY3Rpb24oe1xuICAgICAgLi4uYXJncyxcbiAgICAgIHNlcnZlckFjdGlvbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBwcmV2ZW50SW52YWxpZFNlcnZlckhhbmRsZXJDYWxsKFxuICAgICAgICAgIFwiYWN0aW9uXCIsXG4gICAgICAgICAgbWF0Y2guaWQsXG4gICAgICAgICAgbWF0Y2guaGFzTG9hZGVyXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhd2FpdCBjYWxsU2luZ2xlRmV0Y2goc2luZ2xlRmV0Y2gpO1xuICAgICAgfVxuICAgIH0pIDogbWF0Y2guaGFzQWN0aW9uID8gKF8sIHNpbmdsZUZldGNoKSA9PiBjYWxsU2luZ2xlRmV0Y2goc2luZ2xlRmV0Y2gpIDogKCkgPT4ge1xuICAgICAgdGhyb3cgbm9BY3Rpb25EZWZpbmVkRXJyb3IoXCJhY3Rpb25cIiwgbWF0Y2guaWQpO1xuICAgIH0sXG4gICAgcGF0aDogbWF0Y2gucGF0aCxcbiAgICBzaG91bGRSZXZhbGlkYXRlOiBtYXRjaC5zaG91bGRSZXZhbGlkYXRlLFxuICAgIC8vIFdlIGFsd2F5cyBoYXZlIGEgXCJsb2FkZXJcIiBpbiB0aGlzIFJTQyB3b3JsZCBzaW5jZSBldmVuIGlmIHdlIGRvbid0XG4gICAgLy8gaGF2ZSBhIGBsb2FkZXJgIHdlIG1heSBuZWVkIHRvIGdldCB0aGUgYGVsZW1lbnRgIGltcGxlbWVudGF0aW9uXG4gICAgaGFzTG9hZGVyOiB0cnVlLFxuICAgIGhhc0NsaWVudExvYWRlcjogbWF0Y2guY2xpZW50TG9hZGVyICE9IG51bGwsXG4gICAgaGFzQWN0aW9uOiBtYXRjaC5oYXNBY3Rpb24sXG4gICAgaGFzQ2xpZW50QWN0aW9uOiBtYXRjaC5jbGllbnRBY3Rpb24gIT0gbnVsbCxcbiAgICBoYXNTaG91bGRSZXZhbGlkYXRlOiBtYXRjaC5zaG91bGRSZXZhbGlkYXRlICE9IG51bGxcbiAgfTtcbiAgaWYgKHR5cGVvZiBkYXRhUm91dGUubG9hZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBkYXRhUm91dGUubG9hZGVyLmh5ZHJhdGUgPSBzaG91bGRIeWRyYXRlUm91dGVMb2FkZXIoXG4gICAgICBtYXRjaC5pZCxcbiAgICAgIG1hdGNoLmNsaWVudExvYWRlcixcbiAgICAgIG1hdGNoLmhhc0xvYWRlcixcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZGF0YVJvdXRlO1xufVxuZnVuY3Rpb24gY2FsbFNpbmdsZUZldGNoKHNpbmdsZUZldGNoKSB7XG4gIGludmFyaWFudCh0eXBlb2Ygc2luZ2xlRmV0Y2ggPT09IFwiZnVuY3Rpb25cIiwgXCJJbnZhbGlkIHNpbmdsZUZldGNoIHBhcmFtZXRlclwiKTtcbiAgcmV0dXJuIHNpbmdsZUZldGNoKCk7XG59XG5mdW5jdGlvbiBwcmV2ZW50SW52YWxpZFNlcnZlckhhbmRsZXJDYWxsKHR5cGUsIHJvdXRlSWQsIGhhc0hhbmRsZXIpIHtcbiAgaWYgKCFoYXNIYW5kbGVyKSB7XG4gICAgbGV0IGZuID0gdHlwZSA9PT0gXCJhY3Rpb25cIiA/IFwic2VydmVyQWN0aW9uKClcIiA6IFwic2VydmVyTG9hZGVyKClcIjtcbiAgICBsZXQgbXNnID0gYFlvdSBhcmUgdHJ5aW5nIHRvIGNhbGwgJHtmbn0gb24gYSByb3V0ZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBzZXJ2ZXIgJHt0eXBlfSAocm91dGVJZDogXCIke3JvdXRlSWR9XCIpYDtcbiAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgdGhyb3cgbmV3IEVycm9yUmVzcG9uc2VJbXBsKDQwMCwgXCJCYWQgUmVxdWVzdFwiLCBuZXcgRXJyb3IobXNnKSwgdHJ1ZSk7XG4gIH1cbn1cbnZhciBuZXh0UGF0aHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGRpc2NvdmVyZWRQYXRoc01heFNpemUgPSAxZTM7XG52YXIgZGlzY292ZXJlZFBhdGhzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBVUkxfTElNSVQgPSA3NjgwO1xuZnVuY3Rpb24gZ2V0TWFuaWZlc3RVcmwocGF0aHMpIHtcbiAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwYXRocy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbmV3IFVSTChgJHtwYXRoc1swXX0ubWFuaWZlc3RgLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgfVxuICBjb25zdCBnbG9iYWxWYXIgPSB3aW5kb3c7XG4gIGxldCBiYXNlbmFtZSA9IChnbG9iYWxWYXIuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIuYmFzZW5hbWUgPz8gXCJcIikucmVwbGFjZShcbiAgICAvXlxcL3xcXC8kL2csXG4gICAgXCJcIlxuICApO1xuICBsZXQgdXJsID0gbmV3IFVSTChgJHtiYXNlbmFtZX0vLm1hbmlmZXN0YCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG4gIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwicGF0aHNcIiwgcGF0aHMuc29ydCgpLmpvaW4oXCIsXCIpKTtcbiAgcmV0dXJuIHVybDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kQXBwbHlNYW5pZmVzdFBhdGNoZXMocGF0aHMsIGNyZWF0ZUZyb21SZWFkYWJsZVN0cmVhbSwgZmV0Y2hJbXBsZW1lbnRhdGlvbiwgc2lnbmFsKSB7XG4gIGxldCB1cmwgPSBnZXRNYW5pZmVzdFVybChwYXRocyk7XG4gIGlmICh1cmwgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodXJsLnRvU3RyaW5nKCkubGVuZ3RoID4gVVJMX0xJTUlUKSB7XG4gICAgbmV4dFBhdGhzLmNsZWFyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoSW1wbGVtZW50YXRpb24obmV3IFJlcXVlc3QodXJsLCB7IHNpZ25hbCB9KSk7XG4gIGlmICghcmVzcG9uc2UuYm9keSB8fCByZXNwb25zZS5zdGF0dXMgPCAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmZXRjaCBuZXcgcm91dGUgbWF0Y2hlcyBmcm9tIHRoZSBzZXJ2ZXJcIik7XG4gIH1cbiAgbGV0IHBheWxvYWQgPSBhd2FpdCBjcmVhdGVGcm9tUmVhZGFibGVTdHJlYW0ocmVzcG9uc2UuYm9keSwge1xuICAgIHRlbXBvcmFyeVJlZmVyZW5jZXM6IHZvaWQgMFxuICB9KTtcbiAgaWYgKHBheWxvYWQudHlwZSAhPT0gXCJtYW5pZmVzdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhdGNoIHJvdXRlc1wiKTtcbiAgfVxuICBwYXRocy5mb3JFYWNoKChwKSA9PiBhZGRUb0ZpZm9RdWV1ZShwLCBkaXNjb3ZlcmVkUGF0aHMpKTtcbiAgcGF5bG9hZC5wYXRjaGVzLmZvckVhY2goKHApID0+IHtcbiAgICB3aW5kb3cuX19yZWFjdFJvdXRlckRhdGFSb3V0ZXIucGF0Y2hSb3V0ZXMoXG4gICAgICBwLnBhcmVudElkID8/IG51bGwsXG4gICAgICBbY3JlYXRlUm91dGVGcm9tU2VydmVyTWFuaWZlc3QocCldXG4gICAgKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRUb0ZpZm9RdWV1ZShwYXRoLCBxdWV1ZSkge1xuICBpZiAocXVldWUuc2l6ZSA+PSBkaXNjb3ZlcmVkUGF0aHNNYXhTaXplKSB7XG4gICAgbGV0IGZpcnN0ID0gcXVldWUudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgIHF1ZXVlLmRlbGV0ZShmaXJzdCk7XG4gIH1cbiAgcXVldWUuYWRkKHBhdGgpO1xufVxuZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHdhaXQpIHtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKC4uLmFyZ3MpLCB3YWl0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzRXh0ZXJuYWxMb2NhdGlvbihsb2NhdGlvbjIpIHtcbiAgY29uc3QgbmV3TG9jYXRpb24gPSBuZXcgVVJMKGxvY2F0aW9uMiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICByZXR1cm4gbmV3TG9jYXRpb24ub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xufVxuXG4vLyBsaWIvcnNjL2h0bWwtc3RyZWFtL2Jyb3dzZXIudHNcbmZ1bmN0aW9uIGdldFJTQ1N0cmVhbSgpIHtcbiAgbGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgbGV0IHN0cmVhbUNvbnRyb2xsZXIgPSBudWxsO1xuICBsZXQgcnNjU3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICBzdGFydChjb250cm9sbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaGFuZGxlQ2h1bmsgPSAoY2h1bmspID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShlbmNvZGVyLmVuY29kZShjaHVuaykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShjaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuX19GTElHSFRfREFUQSB8fCAod2luZG93Ll9fRkxJR0hUX0RBVEEgPSBbXSk7XG4gICAgICB3aW5kb3cuX19GTElHSFRfREFUQS5mb3JFYWNoKGhhbmRsZUNodW5rKTtcbiAgICAgIHdpbmRvdy5fX0ZMSUdIVF9EQVRBLnB1c2ggPSAoY2h1bmspID0+IHtcbiAgICAgICAgaGFuZGxlQ2h1bmsoY2h1bmspO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH07XG4gICAgICBzdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9XG4gIH0pO1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgc3RyZWFtQ29udHJvbGxlcj8uY2xvc2UoKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW1Db250cm9sbGVyPy5jbG9zZSgpO1xuICB9XG4gIHJldHVybiByc2NTdHJlYW07XG59XG5leHBvcnQge1xuICBIeWRyYXRlZFJvdXRlcixcbiAgUm91dGVyUHJvdmlkZXIyIGFzIFJvdXRlclByb3ZpZGVyLFxuICBSU0NIeWRyYXRlZFJvdXRlciBhcyB1bnN0YWJsZV9SU0NIeWRyYXRlZFJvdXRlcixcbiAgY3JlYXRlQ2FsbFNlcnZlciBhcyB1bnN0YWJsZV9jcmVhdGVDYWxsU2VydmVyLFxuICBnZXRSU0NTdHJlYW0gYXMgdW5zdGFibGVfZ2V0UlNDU3RyZWFtXG59O1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQWdwS0E7QUF1Q0E7QUEybEJBO0FBdTNCQTtBQTBwQ0E7QUFHQTtBQTRPQTtBQUdBO0FBR0E7QUErdENBO0FBMHpCQTtBQXZpVUEsSUFBSSxjQUFjLENBQUMsUUFBUTtBQUFBLEVBQ3pCLE1BQU0sVUFBVSxHQUFHO0FBQUE7QUFFckIsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVEsUUFBUSxPQUFPLElBQUksR0FBRyxLQUFLLFlBQVksWUFBWSxHQUFHO0FBQ3hGLElBQUksZUFBZSxDQUFDLEtBQUssUUFBUSxZQUFZLGNBQWMsS0FBSyxRQUFRLHlCQUF5QixHQUFHLFNBQVMsT0FBTyxLQUFLLEdBQUcsSUFBSSxPQUFPLElBQUksR0FBRztBQUM5SSxJQUFJLGVBQWUsQ0FBQyxLQUFLLFFBQVEsVUFBVSxPQUFPLElBQUksR0FBRyxJQUFJLFlBQVksbURBQW1ELElBQUksa0JBQWtCLFVBQVUsT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUFPLElBQUksS0FBSyxLQUFLO0FBU25NLElBQUksb0JBQW9CO0FBaUd4QixTQUFTLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxHQUFHO0FBQUEsRUFDMUMsU0FBUyxxQkFBcUIsQ0FBQyxTQUFTLGVBQWU7QUFBQSxJQUNyRCxNQUFNLFVBQVUsUUFBUSxTQUFTLFFBQVE7QUFBQSxJQUN6QyxPQUFPLGVBQ0wsSUFDQSxFQUFFLFVBQVUsUUFBUSxLQUFLLEdBRXpCLGNBQWMsU0FBUyxjQUFjLE1BQU0sT0FBTyxNQUNsRCxjQUFjLFNBQVMsY0FBYyxNQUFNLE9BQU8sU0FDcEQ7QUFBQTtBQUFBLEVBRUYsU0FBUyxpQkFBaUIsQ0FBQyxTQUFTLElBQUk7QUFBQSxJQUN0QyxPQUFPLE9BQU8sT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFFO0FBQUE7QUFBQSxFQUVwRCxPQUFPLG1CQUNMLHVCQUNBLG1CQUNBLE1BQ0EsT0FDRjtBQUFBO0FBNkNGLFNBQVMsU0FBUyxDQUFDLE9BQU8sU0FBUztBQUFBLEVBQ2pDLElBQUksVUFBVSxTQUFTLFVBQVUsUUFBUSxPQUFPLFVBQVUsYUFBYTtBQUFBLElBQ3JFLE1BQU0sSUFBSSxNQUFNLE9BQU87QUFBQSxFQUN6QjtBQUFBO0FBRUYsU0FBUyxPQUFPLENBQUMsTUFBTSxTQUFTO0FBQUEsRUFDOUIsSUFBSSxDQUFDLE1BQU07QUFBQSxJQUNULElBQUksT0FBTyxZQUFZO0FBQUEsTUFBYSxRQUFRLEtBQUssT0FBTztBQUFBLElBQ3hELElBQUk7QUFBQSxNQUNGLE1BQU0sSUFBSSxNQUFNLE9BQU87QUFBQSxNQUN2QixPQUFPLEdBQUc7QUFBQSxFQUVkO0FBQUE7QUFFRixTQUFTLFNBQVMsR0FBRztBQUFBLEVBQ25CLE9BQU8sS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFBQTtBQUVuRCxTQUFTLGVBQWUsQ0FBQyxXQUFVLE9BQU87QUFBQSxFQUN4QyxPQUFPO0FBQUEsSUFDTCxLQUFLLFVBQVM7QUFBQSxJQUNkLEtBQUssVUFBUztBQUFBLElBQ2QsS0FBSztBQUFBLEVBQ1A7QUFBQTtBQUVGLFNBQVMsY0FBYyxDQUFDLFNBQVMsSUFBSSxRQUFRLE1BQU0sS0FBSztBQUFBLEVBQ3RELElBQUksWUFBVztBQUFBLElBQ2IsVUFBVSxPQUFPLFlBQVksV0FBVyxVQUFVLFFBQVE7QUFBQSxJQUMxRCxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsT0FDSCxPQUFPLE9BQU8sV0FBVyxVQUFVLEVBQUUsSUFBSTtBQUFBLElBQzVDO0FBQUEsSUFLQSxLQUFLLE1BQU0sR0FBRyxPQUFPLE9BQU8sVUFBVTtBQUFBLEVBQ3hDO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLFVBQVU7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsR0FDTjtBQUFBLEVBQ0QsSUFBSSxVQUFVLFdBQVc7QUFBQSxJQUN2QixZQUFZLE9BQU8sT0FBTyxDQUFDLE1BQU0sTUFBTSxTQUFTLE1BQU07QUFBQSxFQUN4RCxJQUFJLFFBQVEsU0FBUztBQUFBLElBQ25CLFlBQVksS0FBSyxPQUFPLENBQUMsTUFBTSxNQUFNLE9BQU8sTUFBTTtBQUFBLEVBQ3BELE9BQU87QUFBQTtBQUVULFNBQVMsU0FBUyxDQUFDLE1BQU07QUFBQSxFQUN2QixJQUFJLGFBQWEsQ0FBQztBQUFBLEVBQ2xCLElBQUksTUFBTTtBQUFBLElBQ1IsSUFBSSxZQUFZLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDaEMsSUFBSSxhQUFhLEdBQUc7QUFBQSxNQUNsQixXQUFXLE9BQU8sS0FBSyxVQUFVLFNBQVM7QUFBQSxNQUMxQyxPQUFPLEtBQUssVUFBVSxHQUFHLFNBQVM7QUFBQSxJQUNwQztBQUFBLElBQ0EsSUFBSSxjQUFjLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDbEMsSUFBSSxlQUFlLEdBQUc7QUFBQSxNQUNwQixXQUFXLFNBQVMsS0FBSyxVQUFVLFdBQVc7QUFBQSxNQUM5QyxPQUFPLEtBQUssVUFBVSxHQUFHLFdBQVc7QUFBQSxJQUN0QztBQUFBLElBQ0EsSUFBSSxNQUFNO0FBQUEsTUFDUixXQUFXLFdBQVc7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMsa0JBQWtCLENBQUMsYUFBYSxhQUFhLGtCQUFrQixVQUFVLENBQUMsR0FBRztBQUFBLEVBQ3BGLE1BQU0sUUFBUSxVQUFVLFNBQVMsYUFBYSxXQUFXLFVBQVU7QUFBQSxFQUNuRSxJQUFJLGdCQUFnQixRQUFRO0FBQUEsRUFDNUIsSUFBSSxTQUFTO0FBQUEsRUFDYixJQUFJLFdBQVc7QUFBQSxFQUNmLElBQUksUUFBUSxTQUFTO0FBQUEsRUFDckIsSUFBSSxTQUFTLE1BQU07QUFBQSxJQUNqQixRQUFRO0FBQUEsSUFDUixjQUFjLGFBQWEsS0FBSyxjQUFjLE9BQU8sS0FBSyxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ3ZFO0FBQUEsRUFDQSxTQUFTLFFBQVEsR0FBRztBQUFBLElBQ2xCLElBQUksUUFBUSxjQUFjLFNBQVMsRUFBRSxLQUFLLEtBQUs7QUFBQSxJQUMvQyxPQUFPLE1BQU07QUFBQTtBQUFBLEVBRWYsU0FBUyxTQUFTLEdBQUc7QUFBQSxJQUNuQixTQUFTO0FBQUEsSUFDVCxJQUFJLFlBQVksU0FBUztBQUFBLElBQ3pCLElBQUksUUFBUSxhQUFhLE9BQU8sT0FBTyxZQUFZO0FBQUEsSUFDbkQsUUFBUTtBQUFBLElBQ1IsSUFBSSxVQUFVO0FBQUEsTUFDWixTQUFTLEVBQUUsUUFBUSxVQUFVLFFBQVEsVUFBVSxNQUFNLENBQUM7QUFBQSxJQUN4RDtBQUFBO0FBQUEsRUFFRixTQUFTLElBQUksQ0FBQyxJQUFJLE9BQU87QUFBQSxJQUN2QixTQUFTO0FBQUEsSUFDVCxJQUFJLFlBQVcsZUFBZSxRQUFRLFVBQVUsSUFBSSxLQUFLO0FBQUEsSUFDekQsSUFBSTtBQUFBLE1BQWtCLGlCQUFpQixXQUFVLEVBQUU7QUFBQSxJQUNuRCxRQUFRLFNBQVMsSUFBSTtBQUFBLElBQ3JCLElBQUksZUFBZSxnQkFBZ0IsV0FBVSxLQUFLO0FBQUEsSUFDbEQsSUFBSSxNQUFNLFFBQVEsV0FBVyxTQUFRO0FBQUEsSUFDckMsSUFBSTtBQUFBLE1BQ0YsY0FBYyxVQUFVLGNBQWMsSUFBSSxHQUFHO0FBQUEsTUFDN0MsT0FBTyxPQUFPO0FBQUEsTUFDZCxJQUFJLGlCQUFpQixnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQjtBQUFBLFFBQ3BFLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxRQUFRLFNBQVMsT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUU3QixJQUFJLFlBQVksVUFBVTtBQUFBLE1BQ3hCLFNBQVMsRUFBRSxRQUFRLFVBQVUsUUFBUSxVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDM0Q7QUFBQTtBQUFBLEVBRUYsU0FBUyxRQUFRLENBQUMsSUFBSSxPQUFPO0FBQUEsSUFDM0IsU0FBUztBQUFBLElBQ1QsSUFBSSxZQUFXLGVBQWUsUUFBUSxVQUFVLElBQUksS0FBSztBQUFBLElBQ3pELElBQUk7QUFBQSxNQUFrQixpQkFBaUIsV0FBVSxFQUFFO0FBQUEsSUFDbkQsUUFBUSxTQUFTO0FBQUEsSUFDakIsSUFBSSxlQUFlLGdCQUFnQixXQUFVLEtBQUs7QUFBQSxJQUNsRCxJQUFJLE1BQU0sUUFBUSxXQUFXLFNBQVE7QUFBQSxJQUNyQyxjQUFjLGFBQWEsY0FBYyxJQUFJLEdBQUc7QUFBQSxJQUNoRCxJQUFJLFlBQVksVUFBVTtBQUFBLE1BQ3hCLFNBQVMsRUFBRSxRQUFRLFVBQVUsUUFBUSxVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDM0Q7QUFBQTtBQUFBLEVBRUYsU0FBUyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ3JCLE9BQU8scUJBQXFCLEVBQUU7QUFBQTtBQUFBLEVBRWhDLElBQUksVUFBVTtBQUFBLFFBQ1IsTUFBTSxHQUFHO0FBQUEsTUFDWCxPQUFPO0FBQUE7QUFBQSxRQUVMLFFBQVEsR0FBRztBQUFBLE1BQ2IsT0FBTyxZQUFZLFNBQVMsYUFBYTtBQUFBO0FBQUEsSUFFM0MsTUFBTSxDQUFDLElBQUk7QUFBQSxNQUNULElBQUksVUFBVTtBQUFBLFFBQ1osTUFBTSxJQUFJLE1BQU0sNENBQTRDO0FBQUEsTUFDOUQ7QUFBQSxNQUNBLFFBQVEsaUJBQWlCLG1CQUFtQixTQUFTO0FBQUEsTUFDckQsV0FBVztBQUFBLE1BQ1gsT0FBTyxNQUFNO0FBQUEsUUFDWCxRQUFRLG9CQUFvQixtQkFBbUIsU0FBUztBQUFBLFFBQ3hELFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFHZixVQUFVLENBQUMsSUFBSTtBQUFBLE1BQ2IsT0FBTyxZQUFZLFNBQVMsRUFBRTtBQUFBO0FBQUEsSUFFaEM7QUFBQSxJQUNBLGNBQWMsQ0FBQyxJQUFJO0FBQUEsTUFDakIsSUFBSSxNQUFNLFVBQVUsRUFBRTtBQUFBLE1BQ3RCLE9BQU87QUFBQSxRQUNMLFVBQVUsSUFBSTtBQUFBLFFBQ2QsUUFBUSxJQUFJO0FBQUEsUUFDWixNQUFNLElBQUk7QUFBQSxNQUNaO0FBQUE7QUFBQSxJQUVGO0FBQUEsSUFDQSxTQUFTO0FBQUEsSUFDVCxFQUFFLENBQUMsR0FBRztBQUFBLE1BQ0osT0FBTyxjQUFjLEdBQUcsQ0FBQztBQUFBO0FBQUEsRUFFN0I7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMsb0JBQW9CLENBQUMsSUFBSSxhQUFhLE9BQU87QUFBQSxFQUNwRCxJQUFJLE9BQU87QUFBQSxFQUNYLElBQUksT0FBTyxXQUFXLGFBQWE7QUFBQSxJQUNqQyxPQUFPLE9BQU8sU0FBUyxXQUFXLFNBQVMsT0FBTyxTQUFTLFNBQVMsT0FBTyxTQUFTO0FBQUEsRUFDdEY7QUFBQSxFQUNBLFVBQVUsTUFBTSwwREFBMEQ7QUFBQSxFQUMxRSxJQUFJLE9BQU8sT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUU7QUFBQSxFQUN0RCxPQUFPLEtBQUssUUFBUSxNQUFNLEtBQUs7QUFBQSxFQUMvQixJQUFJLENBQUMsY0FBYyxLQUFLLFdBQVcsSUFBSSxHQUFHO0FBQUEsSUFDeEMsT0FBTyxPQUFPO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSTtBQUFBO0FBSTNCLFNBQVMsY0FBYSxDQUFDLGNBQWM7QUFBQSxFQUNuQyxPQUFPLEVBQUUsYUFBYTtBQUFBO0FBRXhCLElBQUk7QUFDSixJQUFJLHdCQUF3QixNQUFNO0FBQUEsRUFLaEMsV0FBVyxDQUFDLE1BQU07QUFBQSxJQUNoQixhQUFhLE1BQU0sc0JBQXNCLElBQUksR0FBSztBQUFBLElBQ2xELElBQUksTUFBTTtBQUFBLE1BQ1IsVUFBVSxTQUFTLFVBQVUsTUFBTTtBQUFBLFFBQ2pDLEtBQUssSUFBSSxTQUFTLEtBQUs7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBVUYsR0FBRyxDQUFDLFNBQVM7QUFBQSxJQUNYLElBQUksYUFBYSxNQUFNLElBQUksRUFBRSxJQUFJLE9BQU8sR0FBRztBQUFBLE1BQ3pDLE9BQU8sYUFBYSxNQUFNLElBQUksRUFBRSxJQUFJLE9BQU87QUFBQSxJQUM3QztBQUFBLElBQ0EsSUFBSSxRQUFRLGlCQUFzQixXQUFHO0FBQUEsTUFDbkMsT0FBTyxRQUFRO0FBQUEsSUFDakI7QUFBQSxJQUNBLE1BQU0sSUFBSSxNQUFNLDRCQUE0QjtBQUFBO0FBQUEsRUFVOUMsR0FBRyxDQUFDLFNBQVMsT0FBTztBQUFBLElBQ2xCLGFBQWEsTUFBTSxJQUFJLEVBQUUsSUFBSSxTQUFTLEtBQUs7QUFBQTtBQUUvQztBQUNBLE9BQU8sSUFBSTtBQUNYLElBQUksaURBQWlELElBQUksSUFBSTtBQUFBLEVBQzNEO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixDQUFDO0FBQ0QsU0FBUywrQkFBK0IsQ0FBQyxLQUFLO0FBQUEsRUFDNUMsT0FBTywrQkFBK0IsSUFDcEMsR0FDRjtBQUFBO0FBRUYsSUFBSSxtREFBbUQsSUFBSSxJQUFJO0FBQUEsRUFDN0Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixDQUFDO0FBQ0QsU0FBUyxpQ0FBaUMsQ0FBQyxLQUFLO0FBQUEsRUFDOUMsT0FBTyxpQ0FBaUMsSUFDdEMsR0FDRjtBQUFBO0FBRUYsU0FBUyxZQUFZLENBQUMsT0FBTztBQUFBLEVBQzNCLE9BQU8sTUFBTSxVQUFVO0FBQUE7QUFFekIsU0FBUyx5QkFBeUIsQ0FBQyxRQUFRLHFCQUFxQixhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyx3QkFBd0IsT0FBTztBQUFBLEVBQzdILE9BQU8sT0FBTyxJQUFJLENBQUMsT0FBTyxVQUFVO0FBQUEsSUFDbEMsSUFBSSxXQUFXLENBQUMsR0FBRyxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQUEsSUFDNUMsSUFBSSxLQUFLLE9BQU8sTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFNBQVMsS0FBSyxHQUFHO0FBQUEsSUFDcEUsVUFDRSxNQUFNLFVBQVUsUUFBUSxDQUFDLE1BQU0sVUFDL0IsMkNBQ0Y7QUFBQSxJQUNBLFVBQ0UseUJBQXlCLENBQUMsU0FBUyxLQUNuQyxxQ0FBcUMsb0VBQ3ZDO0FBQUEsSUFDQSxJQUFJLGFBQWEsS0FBSyxHQUFHO0FBQUEsTUFDdkIsSUFBSSxhQUFhO0FBQUEsV0FDWjtBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLE1BQU0sa0JBQ2IsWUFDQSxvQkFBb0IsVUFBVSxDQUNoQztBQUFBLE1BQ0EsT0FBTztBQUFBLElBQ1QsRUFBTztBQUFBLE1BQ0wsSUFBSSxvQkFBb0I7QUFBQSxXQUNuQjtBQUFBLFFBQ0g7QUFBQSxRQUNBLFVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsU0FBUyxNQUFNLGtCQUNiLG1CQUNBLG9CQUFvQixpQkFBaUIsQ0FDdkM7QUFBQSxNQUNBLElBQUksTUFBTSxVQUFVO0FBQUEsUUFDbEIsa0JBQWtCLFdBQVcsMEJBQzNCLE1BQU0sVUFDTixxQkFDQSxVQUNBLFVBQ0EscUJBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUE7QUFBQSxHQUVWO0FBQUE7QUFFSCxTQUFTLGlCQUFpQixDQUFDLE9BQU8sU0FBUztBQUFBLEVBQ3pDLE9BQU8sT0FBTyxPQUFPLE9BQU87QUFBQSxPQUN2QjtBQUFBLE9BQ0EsT0FBTyxRQUFRLFNBQVMsWUFBWSxRQUFRLFFBQVEsT0FBTztBQUFBLE1BQzVELE1BQU07QUFBQSxXQUNELE1BQU07QUFBQSxXQUNOLFFBQVE7QUFBQSxNQUNiO0FBQUEsSUFDRixJQUFJLENBQUM7QUFBQSxFQUNQLENBQUM7QUFBQTtBQUVILFNBQVMsV0FBVyxDQUFDLFFBQVEsYUFBYSxXQUFXLEtBQUs7QUFBQSxFQUN4RCxPQUFPLGdCQUFnQixRQUFRLGFBQWEsVUFBVSxLQUFLO0FBQUE7QUFFN0QsU0FBUyxlQUFlLENBQUMsUUFBUSxhQUFhLFVBQVUsY0FBYztBQUFBLEVBQ3BFLElBQUksWUFBVyxPQUFPLGdCQUFnQixXQUFXLFVBQVUsV0FBVyxJQUFJO0FBQUEsRUFDMUUsSUFBSSxXQUFXLGNBQWMsVUFBUyxZQUFZLEtBQUssUUFBUTtBQUFBLEVBQy9ELElBQUksWUFBWSxNQUFNO0FBQUEsSUFDcEIsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksV0FBVyxjQUFjLE1BQU07QUFBQSxFQUNuQyxrQkFBa0IsUUFBUTtBQUFBLEVBQzFCLElBQUksVUFBVTtBQUFBLEVBQ2QsU0FBUyxJQUFJLEVBQUcsV0FBVyxRQUFRLElBQUksU0FBUyxRQUFRLEVBQUUsR0FBRztBQUFBLElBQzNELElBQUksVUFBVSxXQUFXLFFBQVE7QUFBQSxJQUNqQyxVQUFVLGlCQUNSLFNBQVMsSUFDVCxTQUNBLFlBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLDBCQUEwQixDQUFDLE9BQU8sWUFBWTtBQUFBLEVBQ3JELE1BQU0sT0FBTyxVQUFVLFdBQVc7QUFBQSxFQUNsQyxPQUFPO0FBQUEsSUFDTCxJQUFJLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBTSxXQUFXLE1BQU07QUFBQSxJQUN2QixZQUFZLFdBQVcsTUFBTTtBQUFBLElBQzdCLFFBQVEsTUFBTTtBQUFBLEVBQ2hCO0FBQUE7QUFFRixTQUFTLGFBQWEsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLGFBQWEsSUFBSSw2QkFBNkIsT0FBTztBQUFBLEVBQ25ILElBQUksZUFBZSxDQUFDLE9BQU8sT0FBTyw0QkFBNEIsNEJBQTRCLGlCQUFpQjtBQUFBLElBQ3pHLElBQUksT0FBTztBQUFBLE1BQ1QsY0FBYyxpQkFBc0IsWUFBSSxNQUFNLFFBQVEsS0FBSztBQUFBLE1BQzNELGVBQWUsTUFBTSxrQkFBa0I7QUFBQSxNQUN2QyxlQUFlO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksS0FBSyxhQUFhLFdBQVcsR0FBRyxHQUFHO0FBQUEsTUFDckMsSUFBSSxDQUFDLEtBQUssYUFBYSxXQUFXLFVBQVUsS0FBSywyQkFBMkI7QUFBQSxRQUMxRTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQ0UsS0FBSyxhQUFhLFdBQVcsVUFBVSxHQUN2Qyx3QkFBd0IsS0FBSyxvQ0FBb0Msb0hBQ25FO0FBQUEsTUFDQSxLQUFLLGVBQWUsS0FBSyxhQUFhLE1BQU0sV0FBVyxNQUFNO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLElBQUksT0FBTyxVQUFVLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQztBQUFBLElBQ3BELElBQUksYUFBYSxZQUFZLE9BQU8sSUFBSTtBQUFBLElBQ3hDLElBQUksTUFBTSxZQUFZLE1BQU0sU0FBUyxTQUFTLEdBQUc7QUFBQSxNQUMvQyxVQUdFLE1BQU0sVUFBVSxNQUNoQiw0RkFBNEYsUUFDOUY7QUFBQSxNQUNBLGNBQ0UsTUFBTSxVQUNOLFVBQ0EsWUFDQSxNQUNBLHlCQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxNQUFNLFFBQVEsUUFBUSxDQUFDLE1BQU0sT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxLQUFLO0FBQUEsTUFDWjtBQUFBLE1BQ0EsT0FBTyxhQUFhLE1BQU0sTUFBTSxLQUFLO0FBQUEsTUFDckM7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLEVBRUgsT0FBTyxRQUFRLENBQUMsT0FBTyxVQUFVO0FBQUEsSUFDL0IsSUFBSSxNQUFNLFNBQVMsTUFBTSxDQUFDLE1BQU0sTUFBTSxTQUFTLEdBQUcsR0FBRztBQUFBLE1BQ25ELGFBQWEsT0FBTyxLQUFLO0FBQUEsSUFDM0IsRUFBTztBQUFBLE1BQ0wsU0FBUyxZQUFZLHdCQUF3QixNQUFNLElBQUksR0FBRztBQUFBLFFBQ3hELGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQzNDO0FBQUE7QUFBQSxHQUVIO0FBQUEsRUFDRCxPQUFPO0FBQUE7QUFFVCxTQUFTLHVCQUF1QixDQUFDLE1BQU07QUFBQSxFQUNyQyxJQUFJLFdBQVcsS0FBSyxNQUFNLEdBQUc7QUFBQSxFQUM3QixJQUFJLFNBQVMsV0FBVztBQUFBLElBQUcsT0FBTyxDQUFDO0FBQUEsRUFDbkMsS0FBSyxVQUFVLFFBQVE7QUFBQSxFQUN2QixJQUFJLGFBQWEsTUFBTSxTQUFTLEdBQUc7QUFBQSxFQUNuQyxJQUFJLFdBQVcsTUFBTSxRQUFRLE9BQU8sRUFBRTtBQUFBLEVBQ3RDLElBQUksS0FBSyxXQUFXLEdBQUc7QUFBQSxJQUNyQixPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsSUFBSSxlQUFlLHdCQUF3QixLQUFLLEtBQUssR0FBRyxDQUFDO0FBQUEsRUFDekQsSUFBSSxTQUFTLENBQUM7QUFBQSxFQUNkLE9BQU8sS0FDTCxHQUFHLGFBQWEsSUFDZCxDQUFDLFlBQVksWUFBWSxLQUFLLFdBQVcsQ0FBQyxVQUFVLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FDdkUsQ0FDRjtBQUFBLEVBQ0EsSUFBSSxZQUFZO0FBQUEsSUFDZCxPQUFPLEtBQUssR0FBRyxZQUFZO0FBQUEsRUFDN0I7QUFBQSxFQUNBLE9BQU8sT0FBTyxJQUNaLENBQUMsYUFBYSxLQUFLLFdBQVcsR0FBRyxLQUFLLGFBQWEsS0FBSyxNQUFNLFFBQ2hFO0FBQUE7QUFFRixTQUFTLGlCQUFpQixDQUFDLFVBQVU7QUFBQSxFQUNuQyxTQUFTLEtBQ1AsQ0FBQyxHQUFHLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLGVBQ2xELEVBQUUsV0FBVyxJQUFJLENBQUMsU0FBUyxLQUFLLGFBQWEsR0FDN0MsRUFBRSxXQUFXLElBQUksQ0FBQyxTQUFTLEtBQUssYUFBYSxDQUMvQyxDQUNGO0FBQUE7QUFFRixJQUFJLFVBQVU7QUFDZCxJQUFJLHNCQUFzQjtBQUMxQixJQUFJLGtCQUFrQjtBQUN0QixJQUFJLG9CQUFvQjtBQUN4QixJQUFJLHFCQUFxQjtBQUN6QixJQUFJLGVBQWU7QUFDbkIsSUFBSSxVQUFVLENBQUMsTUFBTSxNQUFNO0FBQzNCLFNBQVMsWUFBWSxDQUFDLE1BQU0sT0FBTztBQUFBLEVBQ2pDLElBQUksV0FBVyxLQUFLLE1BQU0sR0FBRztBQUFBLEVBQzdCLElBQUksZUFBZSxTQUFTO0FBQUEsRUFDNUIsSUFBSSxTQUFTLEtBQUssT0FBTyxHQUFHO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLElBQUksT0FBTztBQUFBLElBQ1QsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLE9BQU8sU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FDekMsQ0FBQyxPQUFPLFlBQVksU0FBUyxRQUFRLEtBQUssT0FBTyxJQUFJLHNCQUFzQixZQUFZLEtBQUssb0JBQW9CLHFCQUNoSCxZQUNGO0FBQUE7QUFFRixTQUFTLGNBQWMsQ0FBQyxHQUFHLEdBQUc7QUFBQSxFQUM1QixJQUFJLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLEVBQUUsRUFBRTtBQUFBLEVBQ2pGLE9BQU8sV0FLTCxFQUFFLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxTQUFTLEtBSS9CO0FBQUE7QUFHSixTQUFTLGdCQUFnQixDQUFDLFFBQVEsVUFBVSxlQUFlLE9BQU87QUFBQSxFQUNoRSxNQUFNLGVBQWU7QUFBQSxFQUNyQixJQUFJLGdCQUFnQixDQUFDO0FBQUEsRUFDckIsSUFBSSxrQkFBa0I7QUFBQSxFQUN0QixJQUFJLFVBQVUsQ0FBQztBQUFBLEVBQ2YsU0FBUyxJQUFJLEVBQUcsSUFBSSxXQUFXLFFBQVEsRUFBRSxHQUFHO0FBQUEsSUFDMUMsSUFBSSxPQUFPLFdBQVc7QUFBQSxJQUN0QixJQUFJLE1BQU0sTUFBTSxXQUFXLFNBQVM7QUFBQSxJQUNwQyxJQUFJLG9CQUFvQixvQkFBb0IsTUFBTSxXQUFXLFNBQVMsTUFBTSxnQkFBZ0IsTUFBTSxLQUFLO0FBQUEsSUFDdkcsSUFBSSxRQUFRLFVBQ1YsRUFBRSxNQUFNLEtBQUssY0FBYyxlQUFlLEtBQUssZUFBZSxJQUFJLEdBQ2xFLGlCQUNGO0FBQUEsSUFDQSxJQUFJLFFBQVEsS0FBSztBQUFBLElBQ2pCLElBQUksQ0FBQyxTQUFTLE9BQU8sZ0JBQWdCLENBQUMsV0FBVyxXQUFXLFNBQVMsR0FBRyxNQUFNLE9BQU87QUFBQSxNQUNuRixRQUFRLFVBQ047QUFBQSxRQUNFLE1BQU0sS0FBSztBQUFBLFFBQ1gsZUFBZSxLQUFLO0FBQUEsUUFDcEIsS0FBSztBQUFBLE1BQ1AsR0FDQSxpQkFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksQ0FBQyxPQUFPO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsT0FBTyxPQUFPLGVBQWUsTUFBTSxNQUFNO0FBQUEsSUFDekMsUUFBUSxLQUFLO0FBQUEsTUFFWCxRQUFRO0FBQUEsTUFDUixVQUFVLFVBQVUsQ0FBQyxpQkFBaUIsTUFBTSxRQUFRLENBQUM7QUFBQSxNQUNyRCxjQUFjLGtCQUNaLFVBQVUsQ0FBQyxpQkFBaUIsTUFBTSxZQUFZLENBQUMsQ0FDakQ7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxJQUFJLE1BQU0saUJBQWlCLEtBQUs7QUFBQSxNQUM5QixrQkFBa0IsVUFBVSxDQUFDLGlCQUFpQixNQUFNLFlBQVksQ0FBQztBQUFBLElBQ25FO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBOEJULFNBQVMsU0FBUyxDQUFDLFNBQVMsVUFBVTtBQUFBLEVBQ3BDLElBQUksT0FBTyxZQUFZLFVBQVU7QUFBQSxJQUMvQixVQUFVLEVBQUUsTUFBTSxTQUFTLGVBQWUsT0FBTyxLQUFLLEtBQUs7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsS0FBSyxTQUFTLGtCQUFrQixZQUM5QixRQUFRLE1BQ1IsUUFBUSxlQUNSLFFBQVEsR0FDVjtBQUFBLEVBQ0EsSUFBSSxRQUFRLFNBQVMsTUFBTSxPQUFPO0FBQUEsRUFDbEMsSUFBSSxDQUFDO0FBQUEsSUFBTyxPQUFPO0FBQUEsRUFDbkIsSUFBSSxrQkFBa0IsTUFBTTtBQUFBLEVBQzVCLElBQUksZUFBZSxnQkFBZ0IsUUFBUSxXQUFXLElBQUk7QUFBQSxFQUMxRCxJQUFJLGdCQUFnQixNQUFNLE1BQU0sQ0FBQztBQUFBLEVBQ2pDLElBQUksU0FBUyxlQUFlLE9BQzFCLENBQUMsU0FBUyxXQUFXLGNBQWMsVUFBVTtBQUFBLElBQzNDLElBQUksY0FBYyxLQUFLO0FBQUEsTUFDckIsSUFBSSxhQUFhLGNBQWMsVUFBVTtBQUFBLE1BQ3pDLGVBQWUsZ0JBQWdCLE1BQU0sR0FBRyxnQkFBZ0IsU0FBUyxXQUFXLE1BQU0sRUFBRSxRQUFRLFdBQVcsSUFBSTtBQUFBLElBQzdHO0FBQUEsSUFDQSxNQUFNLFFBQVEsY0FBYztBQUFBLElBQzVCLElBQUksY0FBYyxDQUFDLE9BQU87QUFBQSxNQUN4QixNQUFNLGFBQWtCO0FBQUEsSUFDMUIsRUFBTztBQUFBLE1BQ0wsTUFBTSxjQUFjLFNBQVMsSUFBSSxRQUFRLFFBQVEsR0FBRztBQUFBO0FBQUEsSUFFdEQsT0FBTztBQUFBLEtBRVQsQ0FBQyxDQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsVUFBVTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBO0FBRUYsU0FBUyxXQUFXLENBQUMsTUFBTSxnQkFBZ0IsT0FBTyxNQUFNLE1BQU07QUFBQSxFQUM1RCxRQUNFLFNBQVMsT0FBTyxDQUFDLEtBQUssU0FBUyxHQUFHLEtBQUssS0FBSyxTQUFTLElBQUksR0FDekQsZUFBZSx3Q0FBd0MsS0FBSyxRQUFRLE9BQU8sSUFBSSwwSUFBMEksS0FBSyxRQUFRLE9BQU8sSUFBSSxLQUNuUDtBQUFBLEVBQ0EsSUFBSSxTQUFTLENBQUM7QUFBQSxFQUNkLElBQUksZUFBZSxNQUFNLEtBQUssUUFBUSxXQUFXLEVBQUUsRUFBRSxRQUFRLFFBQVEsR0FBRyxFQUFFLFFBQVEsc0JBQXNCLE1BQU0sRUFBRSxRQUM5RyxxQkFDQSxDQUFDLEdBQUcsV0FBVyxlQUFlO0FBQUEsSUFDNUIsT0FBTyxLQUFLLEVBQUUsV0FBVyxZQUFZLGNBQWMsS0FBSyxDQUFDO0FBQUEsSUFDekQsT0FBTyxhQUFhLGlCQUFpQjtBQUFBLEdBRXpDLEVBQUUsUUFBUSx1QkFBdUIsVUFBVTtBQUFBLEVBQzNDLElBQUksS0FBSyxTQUFTLEdBQUcsR0FBRztBQUFBLElBQ3RCLE9BQU8sS0FBSyxFQUFFLFdBQVcsSUFBSSxDQUFDO0FBQUEsSUFDOUIsZ0JBQWdCLFNBQVMsT0FBTyxTQUFTLE9BQU8sVUFBVTtBQUFBLEVBQzVELEVBQU8sU0FBSSxLQUFLO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxFQUNsQixFQUFPLFNBQUksU0FBUyxNQUFNLFNBQVMsS0FBSztBQUFBLElBQ3RDLGdCQUFnQjtBQUFBLEVBQ2xCLEVBQU87QUFBQSxFQUVQLElBQUksVUFBVSxJQUFJLE9BQU8sY0FBYyxnQkFBcUIsWUFBSSxHQUFHO0FBQUEsRUFDbkUsT0FBTyxDQUFDLFNBQVMsTUFBTTtBQUFBO0FBRXpCLFNBQVMsVUFBVSxDQUFDLE9BQU87QUFBQSxFQUN6QixJQUFJO0FBQUEsSUFDRixPQUFPLE1BQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sbUJBQW1CLENBQUMsRUFBRSxRQUFRLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBQUEsSUFDeEYsT0FBTyxPQUFPO0FBQUEsSUFDZCxRQUNFLE9BQ0EsaUJBQWlCLHNIQUFzSCxTQUN6STtBQUFBLElBQ0EsT0FBTztBQUFBO0FBQUE7QUFHWCxTQUFTLGFBQWEsQ0FBQyxVQUFVLFVBQVU7QUFBQSxFQUN6QyxJQUFJLGFBQWE7QUFBQSxJQUFLLE9BQU87QUFBQSxFQUM3QixJQUFJLENBQUMsU0FBUyxZQUFZLEVBQUUsV0FBVyxTQUFTLFlBQVksQ0FBQyxHQUFHO0FBQUEsSUFDOUQsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksYUFBYSxTQUFTLFNBQVMsR0FBRyxJQUFJLFNBQVMsU0FBUyxJQUFJLFNBQVM7QUFBQSxFQUN6RSxJQUFJLFdBQVcsU0FBUyxPQUFPLFVBQVU7QUFBQSxFQUN6QyxJQUFJLFlBQVksYUFBYSxLQUFLO0FBQUEsSUFDaEMsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU8sU0FBUyxNQUFNLFVBQVUsS0FBSztBQUFBO0FBRXZDLFNBQVMsZUFBZTtBQUFBLEVBQ3RCO0FBQUEsRUFDQTtBQUFBLEdBQ0M7QUFBQSxFQUNELE9BQU8sYUFBYSxNQUFNLFdBQVcsVUFBVSxDQUFDLFVBQVUsUUFBUSxDQUFDO0FBQUE7QUFFckUsU0FBUyxXQUFXLENBQUMsSUFBSSxlQUFlLEtBQUs7QUFBQSxFQUMzQztBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsT0FBTyxPQUFPLFdBQVcsVUFBVSxFQUFFLElBQUk7QUFBQSxFQUM3QyxJQUFJLFdBQVcsYUFBYSxXQUFXLFdBQVcsR0FBRyxJQUFJLGFBQWEsZ0JBQWdCLFlBQVksWUFBWSxJQUFJO0FBQUEsRUFDbEgsT0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLFFBQVEsZ0JBQWdCLE1BQU07QUFBQSxJQUM5QixNQUFNLGNBQWMsSUFBSTtBQUFBLEVBQzFCO0FBQUE7QUFFRixTQUFTLGVBQWUsQ0FBQyxjQUFjLGNBQWM7QUFBQSxFQUNuRCxJQUFJLFdBQVcsYUFBYSxRQUFRLFFBQVEsRUFBRSxFQUFFLE1BQU0sR0FBRztBQUFBLEVBQ3pELElBQUksbUJBQW1CLGFBQWEsTUFBTSxHQUFHO0FBQUEsRUFDN0MsaUJBQWlCLFFBQVEsQ0FBQyxZQUFZO0FBQUEsSUFDcEMsSUFBSSxZQUFZLE1BQU07QUFBQSxNQUNwQixJQUFJLFNBQVMsU0FBUztBQUFBLFFBQUcsU0FBUyxJQUFJO0FBQUEsSUFDeEMsRUFBTyxTQUFJLFlBQVksS0FBSztBQUFBLE1BQzFCLFNBQVMsS0FBSyxPQUFPO0FBQUEsSUFDdkI7QUFBQSxHQUNEO0FBQUEsRUFDRCxPQUFPLFNBQVMsU0FBUyxJQUFJLFNBQVMsS0FBSyxHQUFHLElBQUk7QUFBQTtBQUVwRCxTQUFTLG1CQUFtQixDQUFDLE1BQU0sT0FBTyxNQUFNLE1BQU07QUFBQSxFQUNwRCxPQUFPLHFCQUFxQixnREFBZ0Qsa0JBQWtCLEtBQUssVUFDakcsSUFDRiwyQ0FBMkM7QUFBQTtBQUU3QyxTQUFTLDBCQUEwQixDQUFDLFNBQVM7QUFBQSxFQUMzQyxPQUFPLFFBQVEsT0FDYixDQUFDLE9BQU8sVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUssU0FBUyxDQUNqRjtBQUFBO0FBRUYsU0FBUyxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsRUFDcEMsSUFBSSxjQUFjLDJCQUEyQixPQUFPO0FBQUEsRUFDcEQsT0FBTyxZQUFZLElBQ2pCLENBQUMsT0FBTyxRQUFRLFFBQVEsWUFBWSxTQUFTLElBQUksTUFBTSxXQUFXLE1BQU0sWUFDMUU7QUFBQTtBQUVGLFNBQVMsU0FBUyxDQUFDLE9BQU8sZ0JBQWdCLGtCQUFrQixpQkFBaUIsT0FBTztBQUFBLEVBQ2xGLElBQUk7QUFBQSxFQUNKLElBQUksT0FBTyxVQUFVLFVBQVU7QUFBQSxJQUM3QixLQUFLLFVBQVUsS0FBSztBQUFBLEVBQ3RCLEVBQU87QUFBQSxJQUNMLEtBQUssS0FBSyxNQUFNO0FBQUEsSUFDaEIsVUFDRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsU0FBUyxTQUFTLEdBQUcsR0FDekMsb0JBQW9CLEtBQUssWUFBWSxVQUFVLEVBQUUsQ0FDbkQ7QUFBQSxJQUNBLFVBQ0UsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLFNBQVMsU0FBUyxHQUFHLEdBQ3pDLG9CQUFvQixLQUFLLFlBQVksUUFBUSxFQUFFLENBQ2pEO0FBQUEsSUFDQSxVQUNFLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxPQUFPLFNBQVMsR0FBRyxHQUNyQyxvQkFBb0IsS0FBSyxVQUFVLFFBQVEsRUFBRSxDQUMvQztBQUFBO0FBQUEsRUFFRixJQUFJLGNBQWMsVUFBVSxNQUFNLEdBQUcsYUFBYTtBQUFBLEVBQ2xELElBQUksYUFBYSxjQUFjLE1BQU0sR0FBRztBQUFBLEVBQ3hDLElBQUk7QUFBQSxFQUNKLElBQUksY0FBYyxNQUFNO0FBQUEsSUFDdEIsT0FBTztBQUFBLEVBQ1QsRUFBTztBQUFBLElBQ0wsSUFBSSxxQkFBcUIsZUFBZSxTQUFTO0FBQUEsSUFDakQsSUFBSSxDQUFDLGtCQUFrQixXQUFXLFdBQVcsSUFBSSxHQUFHO0FBQUEsTUFDbEQsSUFBSSxhQUFhLFdBQVcsTUFBTSxHQUFHO0FBQUEsTUFDckMsT0FBTyxXQUFXLE9BQU8sTUFBTTtBQUFBLFFBQzdCLFdBQVcsTUFBTTtBQUFBLFFBQ2pCLHNCQUFzQjtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxHQUFHLFdBQVcsV0FBVyxLQUFLLEdBQUc7QUFBQSxJQUNuQztBQUFBLElBQ0EsT0FBTyxzQkFBc0IsSUFBSSxlQUFlLHNCQUFzQjtBQUFBO0FBQUEsRUFFeEUsSUFBSSxPQUFPLFlBQVksSUFBSSxJQUFJO0FBQUEsRUFDL0IsSUFBSSwyQkFBMkIsY0FBYyxlQUFlLE9BQU8sV0FBVyxTQUFTLEdBQUc7QUFBQSxFQUMxRixJQUFJLDJCQUEyQixlQUFlLGVBQWUsUUFBUSxpQkFBaUIsU0FBUyxHQUFHO0FBQUEsRUFDbEcsSUFBSSxDQUFDLEtBQUssU0FBUyxTQUFTLEdBQUcsTUFBTSw0QkFBNEIsMEJBQTBCO0FBQUEsSUFDekYsS0FBSyxZQUFZO0FBQUEsRUFDbkI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULElBQUksWUFBWSxDQUFDLFVBQVUsTUFBTSxLQUFLLEdBQUcsRUFBRSxRQUFRLFVBQVUsR0FBRztBQUNoRSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsU0FBUyxRQUFRLFFBQVEsRUFBRSxFQUFFLFFBQVEsUUFBUSxHQUFHO0FBQ3RGLElBQUksa0JBQWtCLENBQUMsV0FBVyxDQUFDLFVBQVUsV0FBVyxNQUFNLEtBQUssT0FBTyxXQUFXLEdBQUcsSUFBSSxTQUFTLE1BQU07QUFDM0csSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxTQUFTLE1BQU0sS0FBSyxLQUFLLFdBQVcsR0FBRyxJQUFJLE9BQU8sTUFBTTtBQW1DL0YsSUFBSSxvQkFBb0IsTUFBTTtBQUFBLEVBQzVCLFdBQVcsQ0FBQyxRQUFRLFlBQVksT0FBTyxXQUFXLE9BQU87QUFBQSxJQUN2RCxLQUFLLFNBQVM7QUFBQSxJQUNkLEtBQUssYUFBYSxjQUFjO0FBQUEsSUFDaEMsS0FBSyxXQUFXO0FBQUEsSUFDaEIsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzFCLEtBQUssT0FBTyxNQUFNLFNBQVM7QUFBQSxNQUMzQixLQUFLLFFBQVE7QUFBQSxJQUNmLEVBQU87QUFBQSxNQUNMLEtBQUssT0FBTztBQUFBO0FBQUE7QUFHbEI7QUFDQSxTQUFTLG9CQUFvQixDQUFDLE9BQU87QUFBQSxFQUNuQyxPQUFPLFNBQVMsUUFBUSxPQUFPLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxlQUFlLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxVQUFVO0FBQUE7QUFFdkosU0FBUyxlQUFlLENBQUMsT0FBTztBQUFBLEVBQzlCLE9BQU8sTUFBTSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUcsRUFBRSxRQUFRLFVBQVUsR0FBRyxLQUFLO0FBQUE7QUFJbkUsSUFBSSx1QkFBdUIsT0FBTyxnQkFBZ0I7QUFDbEQsU0FBUyw4QkFBOEIsQ0FBQyxLQUFLLE9BQU87QUFBQSxFQUNsRCxJQUFJLGFBQWE7QUFBQSxJQUNmLE1BQU0sQ0FBQztBQUFBLElBQ1AsZUFBZSxDQUFDO0FBQUEsSUFDaEIsZUFBZSxDQUFDO0FBQUEsSUFDaEIsbUJBQW1CLENBQUM7QUFBQSxJQUNwQixZQUFZLENBQUM7QUFBQSxJQUNiLFFBQVEsQ0FBQztBQUFBLElBQ1QsUUFBUSxDQUFDO0FBQUEsRUFDWDtBQUFBLEVBQ0EsSUFBSSxRQUNGLENBQUMsT0FBTyxHQUFHO0FBQUEsSUFDVCxJQUFJLE1BQU07QUFBQSxJQUNWLE9BQU8sTUFBTTtBQUFBLElBQ2IsTUFBTSxNQUFNO0FBQUEsSUFDWixVQUFVLENBQUMsR0FBRztBQUFBLE1BQ1osSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVO0FBQUEsTUFDakMsU0FBUyxPQUFPLE1BQU07QUFBQSxRQUNwQixJQUFJLEVBQUUsTUFBTTtBQUFBLFVBQ1YsV0FBVyxLQUFLLEtBQUssRUFBRSxJQUFJO0FBQUEsUUFDN0I7QUFBQSxNQUNGO0FBQUE7QUFBQSxFQUVKLENBQUMsQ0FDSDtBQUFBLEVBQ0EsSUFBSSxVQUFVLENBQUM7QUFBQSxFQUNmLElBQUksT0FBTyxNQUFNLFNBQVMsY0FBYyxXQUFXLEtBQUssU0FBUyxHQUFHO0FBQUEsSUFDbEUsSUFBSSxlQUFlLFNBQVMsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFHO0FBQUEsTUFBRztBQUFBLEtBQU07QUFBQSxJQUNyRSxJQUFJLGNBQWM7QUFBQSxNQUNoQixRQUFRLE9BQU87QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksT0FBTyxNQUFNLFNBQVMsVUFBVTtBQUFBLElBQ2xDLElBQUksYUFBYSxNQUFNO0FBQUEsSUFDdkIsQ0FBQyxjQUFjLFVBQVUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO0FBQUEsTUFDbEQsSUFBSSxTQUFTLFdBQVc7QUFBQSxNQUN4QixJQUFJLG1CQUFtQixXQUFXLFFBQVE7QUFBQSxNQUMxQyxJQUFJLE9BQU8sV0FBVyxjQUFjLGlCQUFpQixTQUFTLEdBQUc7QUFBQSxRQUMvRCxJQUFJLGVBQWUsU0FBUyxrQkFBa0IsUUFBUSxNQUFHO0FBQUEsVUFBRztBQUFBLFNBQU07QUFBQSxRQUNsRSxJQUFJLGNBQWM7QUFBQSxVQUNoQixRQUFRLE9BQU8sT0FBTyxPQUFPLFFBQVEsUUFBUSxDQUFDLEdBQUc7QUFBQSxhQUM5QyxNQUFNO0FBQUEsVUFDVCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxLQUNEO0FBQUEsRUFDSDtBQUFBLEVBQ0EsQ0FBQyxVQUFVLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtBQUFBLElBQ3BDLElBQUksVUFBVSxNQUFNO0FBQUEsSUFDcEIsSUFBSSxPQUFPLFlBQVksY0FBYyxXQUFXLEtBQUssU0FBUyxHQUFHO0FBQUEsTUFDL0QsSUFBSSxXQUFXLFFBQVEseUJBQXlCO0FBQUEsTUFDaEQsSUFBSSxlQUFlLFNBQ2pCLFdBQVcsTUFDWCxVQUNBLElBQUksU0FBUyxlQUFlLEtBQUssRUFBRSxDQUNyQztBQUFBLE1BQ0EsSUFBSSxjQUFjO0FBQUEsUUFDaEIsYUFBYSx3QkFBd0I7QUFBQSxRQUNyQyxRQUFRLE9BQU87QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxHQUNEO0FBQUEsRUFDRCxJQUFJLE1BQU0sY0FBYyxNQUFNLFdBQVcsU0FBUyxLQUFLLFdBQVcsV0FBVyxTQUFTLEdBQUc7QUFBQSxJQUN2RixRQUFRLGFBQWEsTUFBTSxXQUFXLElBQUksQ0FBQyxlQUFlO0FBQUEsTUFDeEQsSUFBSSxXQUFXLFdBQVcseUJBQXlCO0FBQUEsTUFDbkQsSUFBSSxlQUFlLFNBQ2pCLFdBQVcsWUFDWCxVQUNBLElBQUksU0FBUyxlQUFlLEtBQUssRUFBRSxDQUNyQztBQUFBLE1BQ0EsSUFBSSxjQUFjO0FBQUEsUUFDaEIsYUFBYSx3QkFBd0I7QUFBQSxRQUNyQyxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsT0FBTztBQUFBLEtBQ1I7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLDBCQUEwQixDQUFDLFFBQVEsS0FBSztBQUFBLEVBQy9DLElBQUksYUFBYTtBQUFBLElBQ2YsVUFBVSxDQUFDO0FBQUEsSUFDWCxPQUFPLENBQUM7QUFBQSxFQUNWO0FBQUEsRUFDQSxJQUFJLFFBQ0YsQ0FBQyxPQUFPLEdBQUc7QUFBQSxJQUNULFVBQVUsQ0FBQyxHQUFHO0FBQUEsTUFDWixJQUFJLE9BQU8sT0FBTyxLQUFLLENBQUM7QUFBQSxNQUN4QixTQUFTLE9BQU8sTUFBTTtBQUFBLFFBQ3BCLElBQUksRUFBRSxNQUFNO0FBQUEsVUFDVixXQUFXLEtBQUssS0FBSyxFQUFFLElBQUk7QUFBQSxRQUM3QjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLEVBRUosQ0FBQyxDQUNIO0FBQUEsRUFDQSxJQUFJLFdBQVcsU0FBUyxTQUFTLEdBQUc7QUFBQSxJQUNsQyxJQUFJLFdBQVcsT0FBTyxTQUFTLHlCQUF5QixPQUFPO0FBQUEsSUFDL0QsSUFBSSx1QkFBdUIsU0FDekIsV0FBVyxVQUNYLFVBQ0EsSUFBSSxTQUFTO0FBQUEsTUFDWCxLQUFLLElBQUksUUFBUTtBQUFBLE1BQ2pCLE9BQU87QUFBQSxRQUNMLElBQUksT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsS0FBSyxLQUFLLFdBQVcsRUFBRSxJQUFJO0FBQUEsV0FDL0UsY0FBYyxRQUFRLFFBQVEsQ0FBQyxDQUFDO0FBQUEsTUFDckM7QUFBQSxLQUVKO0FBQUEsSUFDQSxJQUFJLHNCQUFzQjtBQUFBLE1BQ3hCLHFCQUFxQix3QkFBd0I7QUFBQSxNQUM3QyxPQUFPLFdBQVc7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksV0FBVyxNQUFNLFNBQVMsR0FBRztBQUFBLElBQy9CLElBQUksU0FBUyxPQUFPLE1BQU0seUJBQXlCLE9BQU87QUFBQSxJQUMxRCxJQUFJLG9CQUFvQixTQUFTLFdBQVcsT0FBTyxRQUFRLElBQUksU0FBUztBQUFBLE1BQ3RFLEtBQUssT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUMxQixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVE7QUFBQSxRQUNkLFlBQVk7QUFBQSxXQUNULGNBQWMsUUFBUSxRQUFRLENBQUMsQ0FBQztBQUFBLE1BQ3JDO0FBQUEsS0FDRDtBQUFBLElBQ0QsSUFBSSxtQkFBbUI7QUFBQSxNQUNyQixrQkFBa0Isd0JBQXdCO0FBQUEsTUFDMUMsT0FBTyxRQUFRO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUE4QlQsU0FBUyxRQUFRLENBQUMsT0FBTyxTQUFTLFNBQVM7QUFBQSxFQUN6QyxJQUFJLE1BQU0sV0FBVyxHQUFHO0FBQUEsSUFDdEIsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU8sVUFBVSxTQUFTO0FBQUEsSUFDeEIsSUFBSSxTQUFTLE1BQU0sYUFDakIsT0FDQSxRQUFRLEdBQUcsSUFBSSxHQUNmLE1BQU0sUUFBUSxHQUFHLElBQUksR0FDckIsTUFBTSxTQUFTLENBQ2pCO0FBQUEsSUFDQSxJQUFJLE9BQU8sU0FBUyxTQUFTO0FBQUEsTUFDM0IsTUFBTSxPQUFPO0FBQUEsSUFDZjtBQUFBLElBQ0EsT0FBTyxPQUFPO0FBQUE7QUFBQTtBQUdsQixlQUFlLFlBQVksQ0FBQyxPQUFPLE1BQU0sU0FBUyxPQUFPO0FBQUEsRUFDdkQsSUFBSSxPQUFPLE1BQU07QUFBQSxFQUNqQixJQUFJO0FBQUEsRUFDSixJQUFJLENBQUMsTUFBTTtBQUFBLElBQ1QsSUFBSTtBQUFBLE1BQ0YsSUFBSSxRQUFRLE1BQU0sUUFBUTtBQUFBLE1BQzFCLFNBQVMsRUFBRSxNQUFNLFdBQVcsTUFBTTtBQUFBLE1BQ2xDLE9BQU8sR0FBRztBQUFBLE1BQ1YsU0FBUyxFQUFFLE1BQU0sU0FBUyxPQUFPLEVBQUU7QUFBQTtBQUFBLEVBRXZDLEVBQU87QUFBQSxJQUNMLElBQUksaUJBQXNCO0FBQUEsSUFDMUIsSUFBSSxjQUFjLFlBQVk7QUFBQSxNQUM1QixJQUFJLGdCQUFnQjtBQUFBLFFBQ2xCLFFBQVEsTUFBTSxzREFBc0Q7QUFBQSxNQUN0RSxFQUFPO0FBQUEsUUFDTCxpQkFBaUIsYUFBYSxPQUFPLE1BQU0sU0FBUyxRQUFRLENBQUM7QUFBQTtBQUFBLE1BRS9ELFNBQVMsTUFBTTtBQUFBLE1BQ2YsVUFBVSxRQUFRLG1CQUFtQjtBQUFBLE1BQ3JDLElBQUksT0FBTyxTQUFTLFdBQVcsT0FBTyxpQkFBaUIsT0FBTztBQUFBLFFBQzVELE9BQU8sRUFBRSxRQUFRLFNBQVMsT0FBTyxPQUFPLE1BQU07QUFBQSxNQUNoRDtBQUFBLE1BQ0EsT0FBTyxFQUFFLFFBQVEsV0FBVyxPQUFZLFVBQUU7QUFBQTtBQUFBLElBRTVDLElBQUk7QUFBQSxNQUNGLE1BQU0sS0FBSyxhQUFhLElBQUk7QUFBQSxNQUM1QixPQUFPLEdBQUc7QUFBQSxNQUNWLFFBQVEsTUFBTSwrQ0FBK0MsQ0FBQztBQUFBO0FBQUEsSUFFaEUsSUFBSSxDQUFDLGdCQUFnQjtBQUFBLE1BQ25CLE1BQU0sWUFBWTtBQUFBLElBQ3BCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQSxFQUVSLElBQUksUUFBUTtBQUFBLElBQ1YsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU8sSUFBSSxNQUFNLDhDQUE4QztBQUFBLEVBQ2pFO0FBQUE7QUFFRixTQUFTLGNBQWMsQ0FBQyxNQUFNO0FBQUEsRUFDNUIsTUFBTSxTQUFTLFNBQVMsUUFBUSxxQkFBcUI7QUFBQSxFQUNyRCxPQUFPO0FBQUEsSUFDTCxTQUFTLG1CQUFtQixPQUFPO0FBQUEsSUFDbkMsUUFBUSxLQUFLLE9BQU87QUFBQSxJQUNwQjtBQUFBLElBQ0EsU0FBUyxtQkFBbUIsT0FBTztBQUFBLEVBQ3JDO0FBQUE7QUFFRixTQUFTLGFBQWEsQ0FBQyxRQUFRLE1BQU07QUFBQSxFQUNuQyxPQUFPO0FBQUEsSUFDTCxZQUFZLFdBQVcsT0FBTyxNQUFNLFFBQVE7QUFBQSxPQUN6QyxnQkFBZ0IsT0FBTyxFQUFFLFlBQVksS0FBSyxXQUFXLElBQUksQ0FBQztBQUFBLE9BQzFELGlCQUFpQixPQUFPLEVBQUUsYUFBYSxLQUFLLFlBQVksSUFBSSxDQUFDO0FBQUEsT0FDN0QsY0FBYyxPQUFPLEVBQUUsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDO0FBQUEsT0FDcEQsVUFBVSxPQUFPLEVBQUUsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQUEsRUFDN0M7QUFBQTtBQUVGLFNBQVMsa0JBQWtCLENBQUMsU0FBUztBQUFBLEVBQ25DLE9BQU87QUFBQSxJQUNMLFFBQVEsUUFBUTtBQUFBLElBQ2hCLEtBQUssUUFBUTtBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1AsS0FBSyxJQUFJLFNBQVMsUUFBUSxRQUFRLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDL0M7QUFBQSxFQUNGO0FBQUE7QUFFRixTQUFTLGtCQUFrQixDQUFDLFNBQVM7QUFBQSxFQUNuQyxJQUFJLGNBQWMsT0FBTyxHQUFHO0FBQUEsSUFDMUIsSUFBSSxTQUFTLEtBQUssUUFBUTtBQUFBLElBQzFCLE9BQU8sT0FBTyxNQUFNO0FBQUEsSUFDcEIsT0FBTztBQUFBLEVBQ1QsRUFBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsS0FBSyxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUc7QUFBQSxJQUMvQjtBQUFBO0FBQUE7QUFHSixJQUFJLG1CQUFtQixPQUFPLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxNQUFJO0FBQ3BGLFNBQVMsYUFBYSxDQUFDLE9BQU87QUFBQSxFQUM1QixJQUFJLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVTtBQUFBLElBQy9DLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxNQUFNLFFBQVEsT0FBTyxlQUFlLEtBQUs7QUFBQSxFQUN6QyxPQUFPLFVBQVUsT0FBTyxhQUFhLFVBQVUsUUFBUSxPQUFPLG9CQUFvQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssTUFBSSxNQUFNO0FBQUE7QUFJakgsSUFBSSwwQkFBMEI7QUFBQSxFQUM1QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBQ0EsSUFBSSx1QkFBdUIsSUFBSSxJQUM3Qix1QkFDRjtBQUNBLElBQUkseUJBQXlCO0FBQUEsRUFDM0I7QUFBQSxFQUNBLEdBQUc7QUFDTDtBQUNBLElBQUksc0JBQXNCLElBQUksSUFBSSxzQkFBc0I7QUFDeEQsSUFBSSxzQ0FBc0MsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDM0UsSUFBSSxvREFBb0QsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7QUFDMUUsSUFBSSxrQkFBa0I7QUFBQSxFQUNwQixPQUFPO0FBQUEsRUFDUCxVQUFlO0FBQUEsRUFDZixZQUFpQjtBQUFBLEVBQ2pCLFlBQWlCO0FBQUEsRUFDakIsYUFBa0I7QUFBQSxFQUNsQixVQUFlO0FBQUEsRUFDZixNQUFXO0FBQUEsRUFDWCxNQUFXO0FBQ2I7QUFDQSxJQUFJLGVBQWU7QUFBQSxFQUNqQixPQUFPO0FBQUEsRUFDUCxNQUFXO0FBQUEsRUFDWCxZQUFpQjtBQUFBLEVBQ2pCLFlBQWlCO0FBQUEsRUFDakIsYUFBa0I7QUFBQSxFQUNsQixVQUFlO0FBQUEsRUFDZixNQUFXO0FBQUEsRUFDWCxNQUFXO0FBQ2I7QUFDQSxJQUFJLGVBQWU7QUFBQSxFQUNqQixPQUFPO0FBQUEsRUFDUCxTQUFjO0FBQUEsRUFDZCxPQUFZO0FBQUEsRUFDWixVQUFlO0FBQ2pCO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLG1CQUFtQixLQUFLLEdBQUc7QUFDeEQsSUFBSSw0QkFBNEIsQ0FBQyxXQUFXO0FBQUEsRUFDMUMsa0JBQWtCLFFBQVEsTUFBTSxnQkFBZ0I7QUFDbEQ7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QixJQUFJLHdCQUF3QixPQUFPLGlCQUFpQjtBQUNwRCxTQUFTLFlBQVksQ0FBQyxNQUFNO0FBQUEsRUFDMUIsTUFBTSxlQUFlLEtBQUssU0FBUyxLQUFLLFNBQVMsT0FBTyxXQUFXLGNBQWMsU0FBYztBQUFBLEVBQy9GLE1BQU0sYUFBYSxPQUFPLGlCQUFpQixlQUFlLE9BQU8sYUFBYSxhQUFhLGVBQWUsT0FBTyxhQUFhLFNBQVMsa0JBQWtCO0FBQUEsRUFDekosVUFDRSxLQUFLLE9BQU8sU0FBUyxHQUNyQiwyREFDRjtBQUFBLEVBQ0EsSUFBSSw0QkFBNEIsS0FBSyw0QkFBNEIsQ0FBQztBQUFBLEVBQ2xFLElBQUksc0JBQXNCLEtBQUssc0JBQXNCO0FBQUEsRUFDckQsSUFBSSxzQkFBc0I7QUFBQSxFQUMxQixJQUFJLEtBQUssMkJBQTJCO0FBQUEsSUFDbEMsSUFBSSxtQkFBbUIsS0FBSztBQUFBLElBQzVCLHNCQUFzQixDQUFDLFVBQVU7QUFBQSxNQUMvQixPQUFPO0FBQUEsV0FDRixvQkFBb0IsS0FBSztBQUFBLFdBQ3pCLCtCQUNELGlCQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQU8sR0FDbkQsS0FDRjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLEVBRUo7QUFBQSxFQUNBLElBQUksV0FBVyxDQUFDO0FBQUEsRUFDaEIsSUFBSSxhQUFhLDBCQUNmLEtBQUssUUFDTCxxQkFDSyxXQUNMLFFBQ0Y7QUFBQSxFQUNBLElBQUk7QUFBQSxFQUNKLElBQUksV0FBVyxLQUFLLFlBQVk7QUFBQSxFQUNoQyxJQUFJLENBQUMsU0FBUyxXQUFXLEdBQUcsR0FBRztBQUFBLElBQzdCLFdBQVcsSUFBSTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxJQUFJLG1CQUFtQixLQUFLLGdCQUFnQjtBQUFBLEVBQzVDLElBQUksU0FBUztBQUFBLE9BQ1IsS0FBSztBQUFBLEVBQ1Y7QUFBQSxFQUNBLElBQUksa0JBQWtCO0FBQUEsRUFDdEIsSUFBSSw4QkFBOEIsSUFBSTtBQUFBLEVBQ3RDLElBQUksd0JBQXdCO0FBQUEsRUFDNUIsSUFBSSwyQkFBMkI7QUFBQSxFQUMvQixJQUFJLG9CQUFvQjtBQUFBLEVBQ3hCLElBQUksd0JBQXdCLEtBQUssaUJBQWlCO0FBQUEsRUFDbEQsSUFBSSxpQkFBaUIsWUFBWSxZQUFZLEtBQUssUUFBUSxVQUFVLFFBQVE7QUFBQSxFQUM1RSxJQUFJLHNCQUFzQjtBQUFBLEVBQzFCLElBQUksZ0JBQWdCO0FBQUEsRUFDcEIsSUFBSTtBQUFBLEVBQ0osSUFBSSxrQkFBa0IsUUFBUSxDQUFDLEtBQUsseUJBQXlCO0FBQUEsSUFDM0QsSUFBSSxRQUFRLHVCQUF1QixLQUFLO0FBQUEsTUFDdEMsVUFBVSxLQUFLLFFBQVEsU0FBUztBQUFBLElBQ2xDLENBQUM7QUFBQSxJQUNELE1BQU0sU0FBUyxVQUFVLHVCQUF1QixVQUFVO0FBQUEsSUFDMUQsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCLEdBQUcsTUFBTSxLQUFLLE1BQU07QUFBQSxFQUN0QyxFQUFPO0FBQUEsSUFDTCxJQUFJLGtCQUFrQixDQUFDLEtBQUssZUFBZTtBQUFBLE1BQ3pDLElBQUksV0FBVyxjQUNiLGdCQUNBLFlBQ0EsS0FBSyxRQUFRLFNBQVMsUUFDeEI7QUFBQSxNQUNBLElBQUksU0FBUyxRQUFRO0FBQUEsUUFDbkIsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLENBQUMsZ0JBQWdCO0FBQUEsTUFDbkIsY0FBYztBQUFBLE1BQ2QsaUJBQWlCLENBQUM7QUFBQSxNQUNsQixJQUFJLFdBQVcsY0FDYixNQUNBLFlBQ0EsS0FBSyxRQUFRLFNBQVMsUUFDeEI7QUFBQSxNQUNBLElBQUksU0FBUyxVQUFVLFNBQVMsU0FBUztBQUFBLFFBQ3ZDLHNCQUFzQjtBQUFBLFFBQ3RCLGlCQUFpQixTQUFTO0FBQUEsTUFDNUI7QUFBQSxJQUNGLEVBQU8sU0FBSSxlQUFlLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUc7QUFBQSxNQUNuRCxjQUFjO0FBQUEsSUFDaEIsRUFBTyxTQUFJLENBQUMsZUFBZSxLQUFLLENBQUMsTUFBTSwyQkFBMkIsRUFBRSxLQUFLLENBQUMsR0FBRztBQUFBLE1BQzNFLGNBQWM7QUFBQSxJQUNoQixFQUFPO0FBQUEsTUFDTCxJQUFJLGFBQWEsS0FBSyxnQkFBZ0IsS0FBSyxjQUFjLGFBQWE7QUFBQSxNQUN0RSxJQUFJLFNBQVMsS0FBSyxnQkFBZ0IsS0FBSyxjQUFjLFNBQVM7QUFBQSxNQUM5RCxJQUFJLFFBQVE7QUFBQSxRQUNWLElBQUksTUFBTSxlQUFlLFVBQ3ZCLENBQUMsTUFBTSxPQUFPLEVBQUUsTUFBTSxRQUFhLFNBQ3JDO0FBQUEsUUFDQSxjQUFjLGVBQWUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLE1BQzdDLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLE9BQU8sWUFBWSxNQUFNLENBQ2hFO0FBQUEsTUFDRixFQUFPO0FBQUEsUUFDTCxjQUFjLGVBQWUsTUFDM0IsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxZQUFZLE1BQU0sQ0FDaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlOLElBQUk7QUFBQSxFQUNKLElBQUksUUFBUTtBQUFBLElBQ1YsZUFBZSxLQUFLLFFBQVE7QUFBQSxJQUM1QixVQUFVLEtBQUssUUFBUTtBQUFBLElBQ3ZCLFNBQVM7QUFBQSxJQUNUO0FBQUEsSUFDQSxZQUFZO0FBQUEsSUFFWix1QkFBdUIsS0FBSyxpQkFBaUIsT0FBTyxRQUFRO0FBQUEsSUFDNUQsb0JBQW9CO0FBQUEsSUFDcEIsY0FBYztBQUFBLElBQ2QsWUFBWSxLQUFLLGlCQUFpQixLQUFLLGNBQWMsY0FBYyxDQUFDO0FBQUEsSUFDcEUsWUFBWSxLQUFLLGlCQUFpQixLQUFLLGNBQWMsY0FBYztBQUFBLElBQ25FLFFBQVEsS0FBSyxpQkFBaUIsS0FBSyxjQUFjLFVBQVU7QUFBQSxJQUMzRCwwQkFBMEIsSUFBSTtBQUFBLElBQzlCLDBCQUEwQixJQUFJO0FBQUEsRUFDaEM7QUFBQSxFQUNBLElBQUksZ0JBQWdCO0FBQUEsRUFDcEIsSUFBSSw0QkFBNEI7QUFBQSxFQUNoQyxJQUFJO0FBQUEsRUFDSixJQUFJLCtCQUErQjtBQUFBLEVBQ25DLElBQUkseUNBQXlDLElBQUk7QUFBQSxFQUNqRCxJQUFJLDhCQUE4QjtBQUFBLEVBQ2xDLElBQUksOEJBQThCO0FBQUEsRUFDbEMsSUFBSSx5QkFBeUI7QUFBQSxFQUM3QixJQUFJLHdDQUF3QyxJQUFJO0FBQUEsRUFDaEQsSUFBSSxtQ0FBbUMsSUFBSTtBQUFBLEVBQzNDLElBQUkscUJBQXFCO0FBQUEsRUFDekIsSUFBSSwwQkFBMEI7QUFBQSxFQUM5QixJQUFJLGlDQUFpQyxJQUFJO0FBQUEsRUFDekMsSUFBSSxtQ0FBbUMsSUFBSTtBQUFBLEVBQzNDLElBQUksbUNBQW1DLElBQUk7QUFBQSxFQUMzQyxJQUFJLGlDQUFpQyxJQUFJO0FBQUEsRUFDekMsSUFBSSw0Q0FBNEMsSUFBSTtBQUFBLEVBQ3BELElBQUksbUNBQW1DLElBQUk7QUFBQSxFQUMzQyxJQUFJLDhCQUFtQztBQUFBLEVBQ3ZDLElBQUkseUJBQXlCO0FBQUEsRUFDN0IsU0FBUyxVQUFVLEdBQUc7QUFBQSxJQUNwQixrQkFBa0IsS0FBSyxRQUFRLE9BQzdCLEdBQUcsUUFBUSxlQUFlLHFCQUFVLFlBQVk7QUFBQSxNQUM5QyxJQUFJLDZCQUE2QjtBQUFBLFFBQy9CLDRCQUE0QjtBQUFBLFFBQzVCLDhCQUFtQztBQUFBLFFBQ25DO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFDRSxpQkFBaUIsU0FBUyxLQUFLLFNBQVMsTUFDeEMsNFlBQ0Y7QUFBQSxNQUNBLElBQUksYUFBYSxzQkFBc0I7QUFBQSxRQUNyQyxpQkFBaUIsTUFBTTtBQUFBLFFBQ3ZCLGNBQWM7QUFBQSxRQUNkO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxJQUFJLGNBQWMsU0FBUyxNQUFNO0FBQUEsUUFDL0IsSUFBSSwyQkFBMkIsSUFBSSxRQUFRLENBQUMsWUFBWTtBQUFBLFVBQ3RELDhCQUE4QjtBQUFBLFNBQy9CO0FBQUEsUUFDRCxLQUFLLFFBQVEsR0FBRyxRQUFRLEVBQUU7QUFBQSxRQUMxQixjQUFjLFlBQVk7QUFBQSxVQUN4QixPQUFPO0FBQUEsVUFDUDtBQUFBLFVBQ0EsT0FBTyxHQUFHO0FBQUEsWUFDUixjQUFjLFlBQVk7QUFBQSxjQUN4QixPQUFPO0FBQUEsY0FDUCxTQUFjO0FBQUEsY0FDZCxPQUFZO0FBQUEsY0FDWjtBQUFBLFlBQ0YsQ0FBQztBQUFBLFlBQ0QseUJBQXlCLEtBQUssTUFBTSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFBQTtBQUFBLFVBRTVELEtBQUssR0FBRztBQUFBLFlBQ04sSUFBSSxXQUFXLElBQUksSUFBSSxNQUFNLFFBQVE7QUFBQSxZQUNyQyxTQUFTLElBQUksWUFBWSxZQUFZO0FBQUEsWUFDckMsWUFBWSxFQUFFLFNBQVMsQ0FBQztBQUFBO0FBQUEsUUFFNUIsQ0FBQztBQUFBLFFBQ0Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPLGdCQUFnQixlQUFlLFNBQVE7QUFBQSxLQUVsRDtBQUFBLElBQ0EsSUFBSSxZQUFZO0FBQUEsTUFDZCwwQkFBMEIsY0FBYyxzQkFBc0I7QUFBQSxNQUM5RCxJQUFJLDBCQUEwQixNQUFNLDBCQUEwQixjQUFjLHNCQUFzQjtBQUFBLE1BQ2xHLGFBQWEsaUJBQWlCLFlBQVksdUJBQXVCO0FBQUEsTUFDakUsOEJBQThCLE1BQU0sYUFBYSxvQkFBb0IsWUFBWSx1QkFBdUI7QUFBQSxJQUMxRztBQUFBLElBQ0EsSUFBSSxDQUFDLE1BQU0sYUFBYTtBQUFBLE1BQ3RCLGdCQUFnQixPQUFpQixNQUFNLFVBQVU7QUFBQSxRQUMvQyxrQkFBa0I7QUFBQSxNQUNwQixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsT0FBTztBQUFBO0FBQUEsRUFFVCxTQUFTLE9BQU8sR0FBRztBQUFBLElBQ2pCLElBQUksaUJBQWlCO0FBQUEsTUFDbkIsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBLElBQUksNkJBQTZCO0FBQUEsTUFDL0IsNEJBQTRCO0FBQUEsSUFDOUI7QUFBQSxJQUNBLFlBQVksTUFBTTtBQUFBLElBQ2xCLCtCQUErQiw0QkFBNEIsTUFBTTtBQUFBLElBQ2pFLE1BQU0sU0FBUyxRQUFRLENBQUMsR0FBRyxRQUFRLGNBQWMsR0FBRyxDQUFDO0FBQUEsSUFDckQsTUFBTSxTQUFTLFFBQVEsQ0FBQyxHQUFHLFFBQVEsY0FBYyxHQUFHLENBQUM7QUFBQTtBQUFBLEVBRXZELFNBQVMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNyQixZQUFZLElBQUksRUFBRTtBQUFBLElBQ2xCLE9BQU8sTUFBTSxZQUFZLE9BQU8sRUFBRTtBQUFBO0FBQUEsRUFFcEMsU0FBUyxXQUFXLENBQUMsVUFBVSxPQUFPLENBQUMsR0FBRztBQUFBLElBQ3hDLElBQUksU0FBUyxTQUFTO0FBQUEsTUFDcEIsU0FBUyxVQUFVLFNBQVMsUUFBUSxJQUFJLENBQUMsTUFBTTtBQUFBLFFBQzdDLElBQUksUUFBUSxTQUFTLEVBQUUsTUFBTTtBQUFBLFFBQzdCLElBQUksYUFBYSxFQUFFO0FBQUEsUUFDbkIsSUFBSSxXQUFXLFlBQVksTUFBTSxXQUFXLFdBQVcsaUJBQWlCLE1BQU0sZ0JBQWdCLFdBQVcsMkJBQTJCLE1BQU0sd0JBQXdCO0FBQUEsVUFDaEssT0FBTztBQUFBLGVBQ0Y7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU87QUFBQSxPQUNSO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTtBQUFBLFNBQ0g7QUFBQSxTQUNBO0FBQUEsSUFDTDtBQUFBLElBQ0EsSUFBSSxvQkFBb0IsQ0FBQztBQUFBLElBQ3pCLElBQUksa0JBQWtCLENBQUM7QUFBQSxJQUN2QixNQUFNLFNBQVMsUUFBUSxDQUFDLFNBQVMsUUFBUTtBQUFBLE1BQ3ZDLElBQUksUUFBUSxVQUFVLFFBQVE7QUFBQSxRQUM1QixJQUFJLDBCQUEwQixJQUFJLEdBQUcsR0FBRztBQUFBLFVBQ3RDLGtCQUFrQixLQUFLLEdBQUc7QUFBQSxRQUM1QixFQUFPO0FBQUEsVUFDTCxnQkFBZ0IsS0FBSyxHQUFHO0FBQUE7QUFBQSxNQUU1QjtBQUFBLEtBQ0Q7QUFBQSxJQUNELDBCQUEwQixRQUFRLENBQUMsUUFBUTtBQUFBLE1BQ3pDLElBQUksQ0FBQyxNQUFNLFNBQVMsSUFBSSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLEdBQUc7QUFBQSxRQUMxRCxrQkFBa0IsS0FBSyxHQUFHO0FBQUEsTUFDNUI7QUFBQSxLQUNEO0FBQUEsSUFDRCxDQUFDLEdBQUcsV0FBVyxFQUFFLFFBQ2YsQ0FBQyxlQUFlLFdBQVcsT0FBTztBQUFBLE1BQ2hDLGlCQUFpQjtBQUFBLE1BQ2pCLG9CQUFvQixLQUFLO0FBQUEsTUFDekIsV0FBVyxLQUFLLGNBQWM7QUFBQSxJQUNoQyxDQUFDLENBQ0g7QUFBQSxJQUNBLGtCQUFrQixRQUFRLENBQUMsUUFBUSxjQUFjLEdBQUcsQ0FBQztBQUFBLElBQ3JELGdCQUFnQixRQUFRLENBQUMsUUFBUSxNQUFNLFNBQVMsT0FBTyxHQUFHLENBQUM7QUFBQTtBQUFBLEVBRTdELFNBQVMsa0JBQWtCLENBQUMsV0FBVSxZQUFZLGNBQWMsQ0FBQyxHQUFHO0FBQUEsSUFDbEUsSUFBSSxpQkFBaUIsTUFBTSxjQUFjLFFBQVEsTUFBTSxXQUFXLGNBQWMsUUFBUSxpQkFBaUIsTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxhQUFhLFVBQVMsT0FBTyxnQkFBZ0I7QUFBQSxJQUNqTixJQUFJO0FBQUEsSUFDSixJQUFJLFNBQVMsWUFBWTtBQUFBLE1BQ3ZCLElBQUksT0FBTyxLQUFLLFNBQVMsVUFBVSxFQUFFLFNBQVMsR0FBRztBQUFBLFFBQy9DLGFBQWEsU0FBUztBQUFBLE1BQ3hCLEVBQU87QUFBQSxRQUNMLGFBQWE7QUFBQTtBQUFBLElBRWpCLEVBQU8sU0FBSSxnQkFBZ0I7QUFBQSxNQUN6QixhQUFhLE1BQU07QUFBQSxJQUNyQixFQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUE7QUFBQSxJQUVmLElBQUksYUFBYSxTQUFTLGFBQWEsZ0JBQ3JDLE1BQU0sWUFDTixTQUFTLFlBQ1QsU0FBUyxXQUFXLENBQUMsR0FDckIsU0FBUyxNQUNYLElBQUksTUFBTTtBQUFBLElBQ1YsSUFBSSxXQUFXLE1BQU07QUFBQSxJQUNyQixJQUFJLFNBQVMsT0FBTyxHQUFHO0FBQUEsTUFDckIsV0FBVyxJQUFJLElBQUksUUFBUTtBQUFBLE1BQzNCLFNBQVMsUUFBUSxDQUFDLEdBQUcsTUFBTSxTQUFTLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxJQUMxRDtBQUFBLElBQ0EsSUFBSSx3QkFBd0IsOEJBQThCLFFBQVEsdUJBQXVCLFdBQVUsU0FBUyxXQUFXLE1BQU0sT0FBTztBQUFBLElBQ3BJLElBQUkscUJBQXFCLDhCQUE4QixRQUFRLE1BQU0sV0FBVyxjQUFjLFFBQVEsaUJBQWlCLE1BQU0sV0FBVyxVQUFVLEtBQUssVUFBUyxPQUFPLGdCQUFnQjtBQUFBLElBQ3ZMLElBQUksb0JBQW9CO0FBQUEsTUFDdEIsYUFBYTtBQUFBLE1BQ2IscUJBQTBCO0FBQUEsSUFDNUI7QUFBQSxJQUNBLElBQUksNkJBQTZCLENBQ2pDLEVBQU8sU0FBSSxrQkFBa0IsT0FBaUIsQ0FDOUMsRUFBTyxTQUFJLGtCQUFrQixRQUFtQjtBQUFBLE1BQzlDLEtBQUssUUFBUSxLQUFLLFdBQVUsVUFBUyxLQUFLO0FBQUEsSUFDNUMsRUFBTyxTQUFJLGtCQUFrQixXQUF5QjtBQUFBLE1BQ3BELEtBQUssUUFBUSxRQUFRLFdBQVUsVUFBUyxLQUFLO0FBQUEsSUFDL0M7QUFBQSxJQUNBLElBQUk7QUFBQSxJQUNKLElBQUksa0JBQWtCLE9BQWlCO0FBQUEsTUFDckMsSUFBSSxhQUFhLHVCQUF1QixJQUFJLE1BQU0sU0FBUyxRQUFRO0FBQUEsTUFDbkUsSUFBSSxjQUFjLFdBQVcsSUFBSSxVQUFTLFFBQVEsR0FBRztBQUFBLFFBQ25ELHFCQUFxQjtBQUFBLFVBQ25CLGlCQUFpQixNQUFNO0FBQUEsVUFDdkIsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRixFQUFPLFNBQUksdUJBQXVCLElBQUksVUFBUyxRQUFRLEdBQUc7QUFBQSxRQUN4RCxxQkFBcUI7QUFBQSxVQUNuQixpQkFBaUI7QUFBQSxVQUNqQixjQUFjLE1BQU07QUFBQSxRQUN0QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLEVBQU8sU0FBSSw4QkFBOEI7QUFBQSxNQUN2QyxJQUFJLFVBQVUsdUJBQXVCLElBQUksTUFBTSxTQUFTLFFBQVE7QUFBQSxNQUNoRSxJQUFJLFNBQVM7QUFBQSxRQUNYLFFBQVEsSUFBSSxVQUFTLFFBQVE7QUFBQSxNQUMvQixFQUFPO0FBQUEsUUFDTCwwQkFBMEIsSUFBSSxJQUFJLENBQUMsVUFBUyxRQUFRLENBQUM7QUFBQSxRQUNyRCx1QkFBdUIsSUFBSSxNQUFNLFNBQVMsVUFBVSxPQUFPO0FBQUE7QUFBQSxNQUU3RCxxQkFBcUI7QUFBQSxRQUNuQixpQkFBaUIsTUFBTTtBQUFBLFFBQ3ZCLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQ0U7QUFBQSxTQUNLO0FBQUEsTUFFSDtBQUFBLE1BQ0E7QUFBQSxNQUNBLGVBQWU7QUFBQSxNQUNmO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixHQUNBO0FBQUEsTUFDRTtBQUFBLE1BQ0EsV0FBVyxjQUFjO0FBQUEsSUFDM0IsQ0FDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsSUFDaEIsNEJBQTRCO0FBQUEsSUFDNUIsK0JBQStCO0FBQUEsSUFDL0IsOEJBQThCO0FBQUEsSUFDOUIseUJBQXlCO0FBQUEsSUFDekIsd0JBQXdCLFFBQVE7QUFBQSxJQUNoQyx5QkFBeUI7QUFBQTtBQUFBLEVBRTNCLGVBQWUsUUFBUSxDQUFDLElBQUksTUFBTTtBQUFBLElBQ2hDLElBQUksT0FBTyxPQUFPLFVBQVU7QUFBQSxNQUMxQixLQUFLLFFBQVEsR0FBRyxFQUFFO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLGlCQUFpQixZQUNuQixNQUFNLFVBQ04sTUFBTSxTQUNOLFVBQ0EsSUFDQSxNQUFNLGFBQ04sTUFBTSxRQUNSO0FBQUEsSUFDQSxNQUFNLE1BQU0sWUFBWSxVQUFVLHlCQUNoQyxPQUNBLGdCQUNBLElBQ0Y7QUFBQSxJQUNBLElBQUksa0JBQWtCLE1BQU07QUFBQSxJQUM1QixJQUFJLGVBQWUsZUFBZSxNQUFNLFVBQVUsTUFBTSxRQUFRLEtBQUssS0FBSztBQUFBLElBQzFFLGVBQWU7QUFBQSxTQUNWO0FBQUEsU0FDQSxLQUFLLFFBQVEsZUFBZSxZQUFZO0FBQUEsSUFDN0M7QUFBQSxJQUNBLElBQUksY0FBYyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBZTtBQUFBLElBQ3JFLElBQUksZ0JBQWdCO0FBQUEsSUFDcEIsSUFBSSxnQkFBZ0IsTUFBTTtBQUFBLE1BQ3hCLGdCQUFnQjtBQUFBLElBQ2xCLEVBQU8sU0FBSSxnQkFBZ0IsT0FBTyxDQUNsQyxFQUFPLFNBQUksY0FBYyxRQUFRLGlCQUFpQixXQUFXLFVBQVUsS0FBSyxXQUFXLGVBQWUsTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTLFFBQVE7QUFBQSxNQUNySixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0EsSUFBSSxxQkFBcUIsUUFBUSx3QkFBd0IsT0FBTyxLQUFLLHVCQUF1QixPQUFZO0FBQUEsSUFDeEcsSUFBSSxhQUFhLFFBQVEsS0FBSyxlQUFlO0FBQUEsSUFDN0MsSUFBSSxhQUFhLHNCQUFzQjtBQUFBLE1BQ3JDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELElBQUksWUFBWTtBQUFBLE1BQ2QsY0FBYyxZQUFZO0FBQUEsUUFDeEIsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsT0FBTyxHQUFHO0FBQUEsVUFDUixjQUFjLFlBQVk7QUFBQSxZQUN4QixPQUFPO0FBQUEsWUFDUCxTQUFjO0FBQUEsWUFDZCxPQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsVUFDWixDQUFDO0FBQUEsVUFDRCxTQUFTLElBQUksSUFBSTtBQUFBO0FBQUEsUUFFbkIsS0FBSyxHQUFHO0FBQUEsVUFDTixJQUFJLFdBQVcsSUFBSSxJQUFJLE1BQU0sUUFBUTtBQUFBLFVBQ3JDLFNBQVMsSUFBSSxZQUFZLFlBQVk7QUFBQSxVQUNyQyxZQUFZLEVBQUUsU0FBUyxDQUFDO0FBQUE7QUFBQSxNQUU1QixDQUFDO0FBQUEsTUFDRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU0sZ0JBQWdCLGVBQWUsY0FBYztBQUFBLE1BQ2pEO0FBQUEsTUFHQSxjQUFjO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUyxRQUFRLEtBQUs7QUFBQSxNQUN0QixzQkFBc0IsUUFBUSxLQUFLO0FBQUEsTUFDbkM7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLEVBRUgsU0FBUyxVQUFVLEdBQUc7QUFBQSxJQUNwQixJQUFJLENBQUMsd0JBQXdCO0FBQUEsTUFDM0IseUJBQXlCLGVBQWU7QUFBQSxJQUMxQztBQUFBLElBQ0EscUJBQXFCO0FBQUEsSUFDckIsWUFBWSxFQUFFLGNBQWMsVUFBVSxDQUFDO0FBQUEsSUFDdkMsSUFBSSxVQUFVLHVCQUF1QjtBQUFBLElBQ3JDLElBQUksTUFBTSxXQUFXLFVBQVUsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxJQUFJLE1BQU0sV0FBVyxVQUFVLFFBQVE7QUFBQSxNQUNyQyxnQkFBZ0IsTUFBTSxlQUFlLE1BQU0sVUFBVTtBQUFBLFFBQ25ELGdDQUFnQztBQUFBLE1BQ2xDLENBQUM7QUFBQSxNQUNELE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxnQkFDRSxpQkFBaUIsTUFBTSxlQUN2QixNQUFNLFdBQVcsVUFDakI7QUFBQSxNQUNFLG9CQUFvQixNQUFNO0FBQUEsTUFFMUIsc0JBQXNCLGlDQUFpQztBQUFBLElBQ3pELENBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBRVQsZUFBZSxlQUFlLENBQUMsZUFBZSxXQUFVLE1BQU07QUFBQSxJQUM1RCwrQkFBK0IsNEJBQTRCLE1BQU07QUFBQSxJQUNqRSw4QkFBOEI7QUFBQSxJQUM5QixnQkFBZ0I7QUFBQSxJQUNoQiwrQkFBK0IsUUFBUSxLQUFLLG9DQUFvQztBQUFBLElBQ2hGLG1CQUFtQixNQUFNLFVBQVUsTUFBTSxPQUFPO0FBQUEsSUFDaEQsNkJBQTZCLFFBQVEsS0FBSyx3QkFBd0I7QUFBQSxJQUNsRSxnQ0FBZ0MsUUFBUSxLQUFLLDBCQUEwQjtBQUFBLElBQ3ZFLElBQUksY0FBYyxzQkFBc0I7QUFBQSxJQUN4QyxJQUFJLG9CQUFvQixRQUFRLEtBQUs7QUFBQSxJQUNyQyxJQUFJLFVBQVUsTUFBTSxvQkFBb0IsTUFBTSxXQUFXLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQyxzQkFFcEYsTUFBTSxVQUNKLFlBQVksYUFBYSxXQUFVLFFBQVE7QUFBQSxJQUMvQyxJQUFJLGFBQWEsUUFBUSxLQUFLLGVBQWU7QUFBQSxJQUM3QyxJQUFJLFdBQVcsTUFBTSxlQUFlLENBQUMsMEJBQTBCLGlCQUFpQixNQUFNLFVBQVUsU0FBUSxLQUFLLEVBQUUsUUFBUSxLQUFLLGNBQWMsaUJBQWlCLEtBQUssV0FBVyxVQUFVLElBQUk7QUFBQSxNQUN2TCxtQkFBbUIsV0FBVSxFQUFFLFFBQVEsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUFBLE1BQ3ZEO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxXQUFXLGNBQWMsU0FBUyxhQUFhLFVBQVMsUUFBUTtBQUFBLElBQ3BFLElBQUksU0FBUyxVQUFVLFNBQVMsU0FBUztBQUFBLE1BQ3ZDLFVBQVUsU0FBUztBQUFBLElBQ3JCO0FBQUEsSUFDQSxJQUFJLENBQUMsU0FBUztBQUFBLE1BQ1osTUFBTSxPQUFPLGlCQUFpQixVQUFVLHNCQUN0QyxVQUFTLFFBQ1g7QUFBQSxNQUNBLG1CQUNFLFdBQ0E7QUFBQSxRQUNFLFNBQVM7QUFBQSxRQUNULFlBQVksQ0FBQztBQUFBLFFBQ2IsUUFBUTtBQUFBLFdBQ0wsTUFBTSxLQUFLO0FBQUEsUUFDZDtBQUFBLE1BQ0YsR0FDQSxFQUFFLFVBQVUsQ0FDZDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSw4QkFBOEIsSUFBSTtBQUFBLElBQ2xDLElBQUksVUFBVSx3QkFDWixLQUFLLFNBQ0wsV0FDQSw0QkFBNEIsUUFDNUIsUUFBUSxLQUFLLFVBQ2Y7QUFBQSxJQUNBLElBQUksZ0JBQWdCLEtBQUssYUFBYSxNQUFNLEtBQUssV0FBVyxJQUFJLElBQUk7QUFBQSxJQUNwRSxJQUFJO0FBQUEsSUFDSixJQUFJLFFBQVEsS0FBSyxjQUFjO0FBQUEsTUFDN0Isc0JBQXNCO0FBQUEsUUFDcEIsb0JBQW9CLE9BQU8sRUFBRSxNQUFNO0FBQUEsUUFDbkMsRUFBRSxNQUFNLFNBQXFCLE9BQU8sS0FBSyxhQUFhO0FBQUEsTUFDeEQ7QUFBQSxJQUNGLEVBQU8sU0FBSSxRQUFRLEtBQUssY0FBYyxpQkFBaUIsS0FBSyxXQUFXLFVBQVUsR0FBRztBQUFBLE1BQ2xGLElBQUksZUFBZSxNQUFNLGFBQ3ZCLFNBQ0EsV0FDQSxLQUFLLFlBQ0wsU0FDQSxlQUNBLFNBQVMsUUFDVCxRQUFRLEtBQUsscUJBQXFCLE1BQ2xDLEVBQUUsU0FBUyxLQUFLLFNBQVMsVUFBVSxDQUNyQztBQUFBLE1BQ0EsSUFBSSxhQUFhLGdCQUFnQjtBQUFBLFFBQy9CO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSSxhQUFhLHFCQUFxQjtBQUFBLFFBQ3BDLEtBQUssU0FBUyxVQUFVLGFBQWE7QUFBQSxRQUNyQyxJQUFJLGNBQWMsTUFBTSxLQUFLLHFCQUFxQixPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLO0FBQUEsVUFDOUYsOEJBQThCO0FBQUEsVUFDOUIsbUJBQW1CLFdBQVU7QUFBQSxZQUMzQixTQUFTLGFBQWE7QUFBQSxZQUN0QixZQUFZLENBQUM7QUFBQSxZQUNiLFFBQVE7QUFBQSxlQUNMLFVBQVUsT0FBTztBQUFBLFlBQ3BCO0FBQUEsVUFDRixDQUFDO0FBQUEsVUFDRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVLGFBQWEsV0FBVztBQUFBLE1BQ2xDLHNCQUFzQixhQUFhO0FBQUEsTUFDbkMsb0JBQW9CLHFCQUFxQixXQUFVLEtBQUssVUFBVTtBQUFBLE1BQ2xFLFlBQVk7QUFBQSxNQUNaLFNBQVMsU0FBUztBQUFBLE1BQ2xCLFVBQVUsd0JBQ1IsS0FBSyxTQUNMLFFBQVEsS0FDUixRQUFRLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0U7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTSxjQUNSLFNBQ0EsV0FDQSxTQUNBLGVBQ0EsU0FBUyxRQUNULG1CQUNBLFFBQVEsS0FBSyxZQUNiLFFBQVEsS0FBSyxtQkFDYixRQUFRLEtBQUssU0FDYixRQUFRLEtBQUsscUJBQXFCLE1BQ2xDLFdBQ0EsbUJBQ0Y7QUFBQSxJQUNBLElBQUksZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSw4QkFBOEI7QUFBQSxJQUM5QixtQkFBbUIsV0FBVTtBQUFBLE1BQzNCLFNBQVMsa0JBQWtCO0FBQUEsU0FDeEIsdUJBQXVCLG1CQUFtQjtBQUFBLE1BQzdDO0FBQUEsTUFDQTtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsRUFFSCxlQUFlLFlBQVksQ0FBQyxTQUFTLFdBQVUsWUFBWSxTQUFTLGVBQWUsWUFBWSxrQkFBa0IsT0FBTyxDQUFDLEdBQUc7QUFBQSxJQUMxSCxxQkFBcUI7QUFBQSxJQUNyQixJQUFJLGFBQWEsd0JBQXdCLFdBQVUsVUFBVTtBQUFBLElBQzdELFlBQVksRUFBRSxXQUFXLEdBQUcsRUFBRSxXQUFXLEtBQUssY0FBYyxLQUFLLENBQUM7QUFBQSxJQUNsRSxJQUFJLFlBQVk7QUFBQSxNQUNkLElBQUksaUJBQWlCLE1BQU0sZUFDekIsU0FDQSxVQUFTLFVBQ1QsUUFBUSxNQUNWO0FBQUEsTUFDQSxJQUFJLGVBQWUsU0FBUyxXQUFXO0FBQUEsUUFDckMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO0FBQUEsTUFDaEMsRUFBTyxTQUFJLGVBQWUsU0FBUyxTQUFTO0FBQUEsUUFDMUMsSUFBSSxlQUFlLGVBQWUsV0FBVyxHQUFHO0FBQUEsVUFDOUMsTUFBTSxTQUFTLFVBQVUsVUFBVSx1QkFBdUIsVUFBVTtBQUFBLFVBQ3BFLE9BQU87QUFBQSxZQUNMLFNBQVM7QUFBQSxZQUNULHFCQUFxQjtBQUFBLGNBQ25CLE1BQU07QUFBQSxjQUNOO0FBQUEsZ0JBQ0UsTUFBTTtBQUFBLGdCQUNOLE9BQU8sZUFBZTtBQUFBLGNBQ3hCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxJQUFJLGFBQWEsb0JBQW9CLGVBQWUsY0FBYyxFQUFFLE1BQU07QUFBQSxRQUMxRSxPQUFPO0FBQUEsVUFDTCxTQUFTLGVBQWU7QUFBQSxVQUN4QixxQkFBcUI7QUFBQSxZQUNuQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE9BQU8sZUFBZTtBQUFBLFlBQ3hCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLEVBQU8sU0FBSSxDQUFDLGVBQWUsU0FBUztBQUFBLFFBQ2xDLE1BQU0saUJBQWlCLE9BQU8sVUFBVSxzQkFDdEMsVUFBUyxRQUNYO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxxQkFBcUI7QUFBQSxZQUNuQixNQUFNO0FBQUEsWUFDTjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ047QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLEVBQU87QUFBQSxRQUNMLFVBQVUsZUFBZTtBQUFBO0FBQUEsSUFFN0I7QUFBQSxJQUNBLElBQUk7QUFBQSxJQUNKLElBQUksY0FBYyxlQUFlLFNBQVMsU0FBUTtBQUFBLElBQ2xELElBQUksQ0FBQyxZQUFZLE1BQU0sVUFBVSxDQUFDLFlBQVksTUFBTSxNQUFNO0FBQUEsTUFDeEQsU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTyx1QkFBdUIsS0FBSztBQUFBLFVBQ2pDLFFBQVEsUUFBUTtBQUFBLFVBQ2hCLFVBQVUsVUFBUztBQUFBLFVBQ25CLFNBQVMsWUFBWSxNQUFNO0FBQUEsUUFDN0IsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLEVBQU87QUFBQSxNQUNMLElBQUksWUFBWSwrQkFDZCxxQkFDQSxVQUNBLFNBQ0EsU0FDQSxhQUNBLG1CQUFtQixDQUFDLElBQUksMkJBQ3hCLGFBQ0Y7QUFBQSxNQUNBLElBQUksVUFBVSxNQUFNLGlCQUNsQixTQUNBLFdBQ0EsZUFDQSxJQUNGO0FBQUEsTUFDQSxTQUFTLFFBQVEsWUFBWSxNQUFNO0FBQUEsTUFDbkMsSUFBSSxDQUFDLFFBQVE7QUFBQSxRQUNYLFNBQVMsU0FBUyxTQUFTO0FBQUEsVUFDekIsSUFBSSxRQUFRLE1BQU0sTUFBTSxLQUFLO0FBQUEsWUFDM0IsU0FBUyxRQUFRLE1BQU0sTUFBTTtBQUFBLFlBQzdCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxJQUFJLFFBQVEsT0FBTyxTQUFTO0FBQUEsUUFDMUIsT0FBTyxFQUFFLGdCQUFnQixLQUFLO0FBQUEsTUFDaEM7QUFBQTtBQUFBLElBRUYsSUFBSSxpQkFBaUIsTUFBTSxHQUFHO0FBQUEsTUFDNUIsSUFBSTtBQUFBLE1BQ0osSUFBSSxRQUFRLEtBQUssV0FBVyxNQUFNO0FBQUEsUUFDaEMsV0FBVyxLQUFLO0FBQUEsTUFDbEIsRUFBTztBQUFBLFFBQ0wsSUFBSSxhQUFZLDBCQUNkLE9BQU8sU0FBUyxRQUFRLElBQUksVUFBVSxHQUN0QyxJQUFJLElBQUksUUFBUSxHQUFHLEdBQ25CLFFBQ0Y7QUFBQSxRQUNBLFdBQVcsZUFBYyxNQUFNLFNBQVMsV0FBVyxNQUFNLFNBQVM7QUFBQTtBQUFBLE1BRXBFLE1BQU0sd0JBQXdCLFNBQVMsUUFBUSxNQUFNO0FBQUEsUUFDbkQ7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxNQUNELE9BQU8sRUFBRSxnQkFBZ0IsS0FBSztBQUFBLElBQ2hDO0FBQUEsSUFDQSxJQUFJLGNBQWMsTUFBTSxHQUFHO0FBQUEsTUFDekIsSUFBSSxnQkFBZ0Isb0JBQW9CLFNBQVMsWUFBWSxNQUFNLEVBQUU7QUFBQSxNQUNyRSxLQUFLLFFBQVEsS0FBSyxhQUFhLE1BQU07QUFBQSxRQUNuQyxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLHFCQUFxQjtBQUFBLFVBQ25CLGNBQWMsTUFBTTtBQUFBLFVBQ3BCO0FBQUEsVUFDQSxZQUFZLE1BQU07QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0EscUJBQXFCLENBQUMsWUFBWSxNQUFNLElBQUksTUFBTTtBQUFBLElBQ3BEO0FBQUE7QUFBQSxFQUVGLGVBQWUsYUFBYSxDQUFDLFNBQVMsV0FBVSxTQUFTLGVBQWUsWUFBWSxvQkFBb0IsWUFBWSxtQkFBbUIsVUFBVSxrQkFBa0IsV0FBVyxxQkFBcUI7QUFBQSxJQUNqTSxJQUFJLG9CQUFvQixzQkFBc0IscUJBQXFCLFdBQVUsVUFBVTtBQUFBLElBQ3ZGLElBQUksbUJBQW1CLGNBQWMscUJBQXFCLDRCQUE0QixpQkFBaUI7QUFBQSxJQUN2RyxJQUFJLDhCQUE4QixDQUFDLCtCQUErQixDQUFDO0FBQUEsSUFDbkUsSUFBSSxZQUFZO0FBQUEsTUFDZCxJQUFJLDZCQUE2QjtBQUFBLFFBQy9CLElBQUksYUFBYSxxQkFBcUIsbUJBQW1CO0FBQUEsUUFDekQsWUFDRTtBQUFBLFVBQ0UsWUFBWTtBQUFBLGFBQ1QsZUFBb0IsWUFBSSxFQUFFLFdBQVcsSUFBSSxDQUFDO0FBQUEsUUFDL0MsR0FDQTtBQUFBLFVBQ0U7QUFBQSxRQUNGLENBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxJQUFJLGlCQUFpQixNQUFNLGVBQ3pCLFNBQ0EsVUFBUyxVQUNULFFBQVEsTUFDVjtBQUFBLE1BQ0EsSUFBSSxlQUFlLFNBQVMsV0FBVztBQUFBLFFBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsS0FBSztBQUFBLE1BQ2hDLEVBQU8sU0FBSSxlQUFlLFNBQVMsU0FBUztBQUFBLFFBQzFDLElBQUksZUFBZSxlQUFlLFdBQVcsR0FBRztBQUFBLFVBQzlDLE1BQU0sU0FBUyxVQUFVLFVBQVUsdUJBQXVCLFVBQVU7QUFBQSxVQUNwRSxPQUFPO0FBQUEsWUFDTCxTQUFTO0FBQUEsWUFDVCxZQUFZLENBQUM7QUFBQSxZQUNiLFFBQVE7QUFBQSxlQUNMLE1BQU0sS0FBSyxlQUFlO0FBQUEsWUFDN0I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsSUFBSSxhQUFhLG9CQUFvQixlQUFlLGNBQWMsRUFBRSxNQUFNO0FBQUEsUUFDMUUsT0FBTztBQUFBLFVBQ0wsU0FBUyxlQUFlO0FBQUEsVUFDeEIsWUFBWSxDQUFDO0FBQUEsVUFDYixRQUFRO0FBQUEsYUFDTCxhQUFhLGVBQWU7QUFBQSxVQUMvQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLEVBQU8sU0FBSSxDQUFDLGVBQWUsU0FBUztBQUFBLFFBQ2xDLE1BQU0sT0FBTyxpQkFBaUIsVUFBVSxzQkFDdEMsVUFBUyxRQUNYO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxZQUFZLENBQUM7QUFBQSxVQUNiLFFBQVE7QUFBQSxhQUNMLE1BQU0sS0FBSztBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRixFQUFPO0FBQUEsUUFDTCxVQUFVLGVBQWU7QUFBQTtBQUFBLElBRTdCO0FBQUEsSUFDQSxJQUFJLGNBQWMsc0JBQXNCO0FBQUEsSUFDeEMsTUFBTSxXQUFXLHlCQUF5QixpQkFDeEMsU0FDQSxlQUNBLHFCQUNBLFVBQ0EsS0FBSyxTQUNMLE9BQ0EsU0FDQSxrQkFDQSxXQUNBLG1CQUFtQixDQUFDLElBQUksMkJBQ3hCLHFCQUFxQixNQUNyQix3QkFDQSx1QkFDQSwyQkFDQSxrQkFDQSxrQkFDQSxhQUNBLFVBQ0EsS0FBSywyQkFBMkIsTUFDaEMsbUJBQ0Y7QUFBQSxJQUNBLDBCQUEwQixFQUFFO0FBQUEsSUFDNUIsSUFBSSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsVUFBVSxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsS0FBSyxDQUFDLFVBQVUsS0FDM0UsQ0FBQyxNQUFNLEVBQUUsTUFBTSxjQUFjLEVBQUUsTUFBTSxXQUFXLFNBQVMsQ0FDM0QsS0FBSyxxQkFBcUIsV0FBVyxHQUFHO0FBQUEsTUFDdEMsSUFBSSxtQkFBbUIsdUJBQXVCO0FBQUEsTUFDOUMsbUJBQ0UsV0FDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBLFlBQVksQ0FBQztBQUFBLFFBRWIsUUFBUSx1QkFBdUIsY0FBYyxvQkFBb0IsRUFBRSxJQUFJLEdBQUcsb0JBQW9CLEtBQUssb0JBQW9CLEdBQUcsTUFBTSxJQUFJO0FBQUEsV0FDakksdUJBQXVCLG1CQUFtQjtBQUFBLFdBQzFDLG1CQUFtQixFQUFFLFVBQVUsSUFBSSxJQUFJLE1BQU0sUUFBUSxFQUFFLElBQUksQ0FBQztBQUFBLE1BQ2pFLEdBQ0EsRUFBRSxVQUFVLENBQ2Q7QUFBQSxNQUNBLE9BQU8sRUFBRSxnQkFBZ0IsS0FBSztBQUFBLElBQ2hDO0FBQUEsSUFDQSxJQUFJLDZCQUE2QjtBQUFBLE1BQy9CLElBQUksVUFBVSxDQUFDO0FBQUEsTUFDZixJQUFJLENBQUMsWUFBWTtBQUFBLFFBQ2YsUUFBUSxhQUFhO0FBQUEsUUFDckIsSUFBSSxhQUFhLHFCQUFxQixtQkFBbUI7QUFBQSxRQUN6RCxJQUFJLGVBQW9CLFdBQUc7QUFBQSxVQUN6QixRQUFRLGFBQWE7QUFBQSxRQUN2QjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUkscUJBQXFCLFNBQVMsR0FBRztBQUFBLFFBQ25DLFFBQVEsV0FBVywrQkFBK0Isb0JBQW9CO0FBQUEsTUFDeEU7QUFBQSxNQUNBLFlBQVksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUFBLElBQ3BDO0FBQUEsSUFDQSxxQkFBcUIsUUFBUSxDQUFDLE9BQU87QUFBQSxNQUNuQyxhQUFhLEdBQUcsR0FBRztBQUFBLE1BQ25CLElBQUksR0FBRyxZQUFZO0FBQUEsUUFDakIsaUJBQWlCLElBQUksR0FBRyxLQUFLLEdBQUcsVUFBVTtBQUFBLE1BQzVDO0FBQUEsS0FDRDtBQUFBLElBQ0QsSUFBSSxpQ0FBaUMsTUFBTSxxQkFBcUIsUUFBUSxDQUFDLE1BQU0sYUFBYSxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2xHLElBQUksNkJBQTZCO0FBQUEsTUFDL0IsNEJBQTRCLE9BQU8saUJBQ2pDLFNBQ0EsOEJBQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNLGVBQWUsbUJBQW1CLE1BQU0sK0JBQzVDLFdBQ0Esc0JBQ0EsU0FDQSxhQUNGO0FBQUEsSUFDQSxJQUFJLFFBQVEsT0FBTyxTQUFTO0FBQUEsTUFDMUIsT0FBTyxFQUFFLGdCQUFnQixLQUFLO0FBQUEsSUFDaEM7QUFBQSxJQUNBLElBQUksNkJBQTZCO0FBQUEsTUFDL0IsNEJBQTRCLE9BQU8sb0JBQ2pDLFNBQ0EsOEJBQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxxQkFBcUIsUUFBUSxDQUFDLE9BQU8saUJBQWlCLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFBQSxJQUNwRSxJQUFJLFlBQVksYUFBYSxhQUFhO0FBQUEsSUFDMUMsSUFBSSxXQUFXO0FBQUEsTUFDYixNQUFNLHdCQUF3QixTQUFTLFVBQVUsUUFBUSxNQUFNO0FBQUEsUUFDN0QsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLE1BQ0QsT0FBTyxFQUFFLGdCQUFnQixLQUFLO0FBQUEsSUFDaEM7QUFBQSxJQUNBLFlBQVksYUFBYSxjQUFjO0FBQUEsSUFDdkMsSUFBSSxXQUFXO0FBQUEsTUFDYixpQkFBaUIsSUFBSSxVQUFVLEdBQUc7QUFBQSxNQUNsQyxNQUFNLHdCQUF3QixTQUFTLFVBQVUsUUFBUSxNQUFNO0FBQUEsUUFDN0QsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLE1BQ0QsT0FBTyxFQUFFLGdCQUFnQixLQUFLO0FBQUEsSUFDaEM7QUFBQSxJQUNBLE1BQU0sWUFBWSxXQUFXLGtCQUMzQixPQUNBLFNBQ0EsZUFDQSxxQkFDQSxzQkFDQSxjQUNGO0FBQUEsSUFDQSxJQUFJLG9CQUFvQixNQUFNLFFBQVE7QUFBQSxNQUNwQyxTQUFTLEtBQUssTUFBTSxXQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLElBQ0EsSUFBSSxrQkFBa0IsdUJBQXVCO0FBQUEsSUFDN0MsSUFBSSxxQkFBcUIscUJBQXFCLHVCQUF1QjtBQUFBLElBQ3JFLElBQUksdUJBQXVCLG1CQUFtQixzQkFBc0IscUJBQXFCLFNBQVM7QUFBQSxJQUNsRyxPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsU0FDRyx1QkFBdUIsRUFBRSxVQUFVLElBQUksSUFBSSxNQUFNLFFBQVEsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUNyRTtBQUFBO0FBQUEsRUFFRixTQUFTLG9CQUFvQixDQUFDLHFCQUFxQjtBQUFBLElBQ2pELElBQUksdUJBQXVCLENBQUMsY0FBYyxvQkFBb0IsRUFBRSxHQUFHO0FBQUEsTUFDakUsT0FBTztBQUFBLFNBQ0osb0JBQW9CLEtBQUssb0JBQW9CLEdBQUc7QUFBQSxNQUNuRDtBQUFBLElBQ0YsRUFBTyxTQUFJLE1BQU0sWUFBWTtBQUFBLE1BQzNCLElBQUksT0FBTyxLQUFLLE1BQU0sVUFBVSxFQUFFLFdBQVcsR0FBRztBQUFBLFFBQzlDLE9BQU87QUFBQSxNQUNULEVBQU87QUFBQSxRQUNMLE9BQU8sTUFBTTtBQUFBO0FBQUEsSUFFakI7QUFBQTtBQUFBLEVBRUYsU0FBUyw4QkFBOEIsQ0FBQyxzQkFBc0I7QUFBQSxJQUM1RCxxQkFBcUIsUUFBUSxDQUFDLE9BQU87QUFBQSxNQUNuQyxJQUFJLFVBQVUsTUFBTSxTQUFTLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDdkMsSUFBSSxzQkFBc0Isa0JBQ25CLFdBQ0wsVUFBVSxRQUFRLE9BQVksU0FDaEM7QUFBQSxNQUNBLE1BQU0sU0FBUyxJQUFJLEdBQUcsS0FBSyxtQkFBbUI7QUFBQSxLQUMvQztBQUFBLElBQ0QsT0FBTyxJQUFJLElBQUksTUFBTSxRQUFRO0FBQUE7QUFBQSxFQUUvQixlQUFlLE1BQU0sQ0FBQyxLQUFLLFNBQVMsTUFBTSxNQUFNO0FBQUEsSUFDOUMsYUFBYSxHQUFHO0FBQUEsSUFDaEIsSUFBSSxhQUFhLFFBQVEsS0FBSyxlQUFlO0FBQUEsSUFDN0MsSUFBSSxjQUFjLHNCQUFzQjtBQUFBLElBQ3hDLElBQUksaUJBQWlCLFlBQ25CLE1BQU0sVUFDTixNQUFNLFNBQ04sVUFDQSxNQUNBLFNBQ0EsTUFBTSxRQUNSO0FBQUEsSUFDQSxJQUFJLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixRQUFRO0FBQUEsSUFDL0QsSUFBSSxXQUFXLGNBQWMsU0FBUyxhQUFhLGNBQWM7QUFBQSxJQUNqRSxJQUFJLFNBQVMsVUFBVSxTQUFTLFNBQVM7QUFBQSxNQUN2QyxVQUFVLFNBQVM7QUFBQSxJQUNyQjtBQUFBLElBQ0EsSUFBSSxDQUFDLFNBQVM7QUFBQSxNQUNaLGdCQUNFLEtBQ0EsU0FDQSx1QkFBdUIsS0FBSyxFQUFFLFVBQVUsZUFBZSxDQUFDLEdBQ3hELEVBQUUsVUFBVSxDQUNkO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU0sTUFBTSxZQUFZLFVBQVUseUJBQ2hDLE1BQ0EsZ0JBQ0EsSUFDRjtBQUFBLElBQ0EsSUFBSSxPQUFPO0FBQUEsTUFDVCxnQkFBZ0IsS0FBSyxTQUFTLE9BQU8sRUFBRSxVQUFVLENBQUM7QUFBQSxNQUNsRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksZ0JBQWdCLEtBQUssYUFBYSxNQUFNLEtBQUssV0FBVyxJQUFJLElBQUk7QUFBQSxJQUNwRSxJQUFJLHNCQUFzQixRQUFRLEtBQUssd0JBQXdCO0FBQUEsSUFDL0QsSUFBSSxjQUFjLGlCQUFpQixXQUFXLFVBQVUsR0FBRztBQUFBLE1BQ3pELE1BQU0sb0JBQ0osS0FDQSxTQUNBLE1BQ0EsU0FDQSxlQUNBLFNBQVMsUUFDVCxXQUNBLG9CQUNBLFVBQ0Y7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsSUFDM0MsTUFBTSxvQkFDSixLQUNBLFNBQ0EsTUFDQSxTQUNBLGVBQ0EsU0FBUyxRQUNULFdBQ0Esb0JBQ0EsVUFDRjtBQUFBO0FBQUEsRUFFRixlQUFlLG1CQUFtQixDQUFDLEtBQUssU0FBUyxNQUFNLGdCQUFnQixlQUFlLFlBQVksV0FBVyxvQkFBb0IsWUFBWTtBQUFBLElBQzNJLHFCQUFxQjtBQUFBLElBQ3JCLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxJQUMzQixJQUFJLGtCQUFrQixNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQUEsSUFDNUMsbUJBQW1CLEtBQUsscUJBQXFCLFlBQVksZUFBZSxHQUFHO0FBQUEsTUFDekU7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELElBQUksa0JBQWtCLElBQUk7QUFBQSxJQUMxQixJQUFJLGVBQWUsd0JBQ2pCLEtBQUssU0FDTCxNQUNBLGdCQUFnQixRQUNoQixVQUNGO0FBQUEsSUFDQSxJQUFJLFlBQVk7QUFBQSxNQUNkLElBQUksaUJBQWlCLE1BQU0sZUFDekIsZ0JBQ0EsSUFBSSxJQUFJLGFBQWEsR0FBRyxFQUFFLFVBQzFCLGFBQWEsUUFDYixHQUNGO0FBQUEsTUFDQSxJQUFJLGVBQWUsU0FBUyxXQUFXO0FBQUEsUUFDckM7QUFBQSxNQUNGLEVBQU8sU0FBSSxlQUFlLFNBQVMsU0FBUztBQUFBLFFBQzFDLGdCQUFnQixLQUFLLFNBQVMsZUFBZSxPQUFPLEVBQUUsVUFBVSxDQUFDO0FBQUEsUUFDakU7QUFBQSxNQUNGLEVBQU8sU0FBSSxDQUFDLGVBQWUsU0FBUztBQUFBLFFBQ2xDLGdCQUNFLEtBQ0EsU0FDQSx1QkFBdUIsS0FBSyxFQUFFLFVBQVUsS0FBSyxDQUFDLEdBQzlDLEVBQUUsVUFBVSxDQUNkO0FBQUEsUUFDQTtBQUFBLE1BQ0YsRUFBTztBQUFBLFFBQ0wsaUJBQWlCLGVBQWU7QUFBQTtBQUFBLElBRXBDO0FBQUEsSUFDQSxJQUFJLFFBQVEsZUFBZSxnQkFBZ0IsSUFBSTtBQUFBLElBQy9DLElBQUksQ0FBQyxNQUFNLE1BQU0sVUFBVSxDQUFDLE1BQU0sTUFBTSxNQUFNO0FBQUEsTUFDNUMsSUFBSSxRQUFRLHVCQUF1QixLQUFLO0FBQUEsUUFDdEMsUUFBUSxXQUFXO0FBQUEsUUFDbkIsVUFBVTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELGdCQUFnQixLQUFLLFNBQVMsT0FBTyxFQUFFLFVBQVUsQ0FBQztBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCLElBQUksS0FBSyxlQUFlO0FBQUEsSUFDekMsSUFBSSxvQkFBb0I7QUFBQSxJQUN4QixJQUFJLGVBQWUsK0JBQ2pCLHFCQUNBLFVBQ0EsY0FDQSxnQkFDQSxPQUNBLDJCQUNBLGFBQ0Y7QUFBQSxJQUNBLElBQUksZ0JBQWdCLE1BQU0saUJBQ3hCLGNBQ0EsY0FDQSxlQUNBLEdBQ0Y7QUFBQSxJQUNBLElBQUksZUFBZSxjQUFjLE1BQU0sTUFBTTtBQUFBLElBQzdDLElBQUksYUFBYSxPQUFPLFNBQVM7QUFBQSxNQUMvQixJQUFJLGlCQUFpQixJQUFJLEdBQUcsTUFBTSxpQkFBaUI7QUFBQSxRQUNqRCxpQkFBaUIsT0FBTyxHQUFHO0FBQUEsTUFDN0I7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSwwQkFBMEIsSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUN0QyxJQUFJLGlCQUFpQixZQUFZLEtBQUssY0FBYyxZQUFZLEdBQUc7QUFBQSxRQUNqRSxtQkFBbUIsS0FBSyxlQUFvQixTQUFDLENBQUM7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLEVBQU87QUFBQSxNQUNMLElBQUksaUJBQWlCLFlBQVksR0FBRztBQUFBLFFBQ2xDLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxRQUMzQixJQUFJLDBCQUEwQixtQkFBbUI7QUFBQSxVQUMvQyxtQkFBbUIsS0FBSyxlQUFvQixTQUFDLENBQUM7QUFBQSxVQUM5QztBQUFBLFFBQ0YsRUFBTztBQUFBLFVBQ0wsaUJBQWlCLElBQUksR0FBRztBQUFBLFVBQ3hCLG1CQUFtQixLQUFLLGtCQUFrQixVQUFVLENBQUM7QUFBQSxVQUNyRCxPQUFPLHdCQUF3QixjQUFjLGNBQWMsT0FBTztBQUFBLFlBQ2hFLG1CQUFtQjtBQUFBLFlBQ25CO0FBQUEsVUFDRixDQUFDO0FBQUE7QUFBQSxNQUVMO0FBQUEsTUFDQSxJQUFJLGNBQWMsWUFBWSxHQUFHO0FBQUEsUUFDL0IsZ0JBQWdCLEtBQUssU0FBUyxhQUFhLEtBQUs7QUFBQSxRQUNoRDtBQUFBLE1BQ0Y7QUFBQTtBQUFBLElBRUYsSUFBSSxlQUFlLE1BQU0sV0FBVyxZQUFZLE1BQU07QUFBQSxJQUN0RCxJQUFJLHNCQUFzQix3QkFDeEIsS0FBSyxTQUNMLGNBQ0EsZ0JBQWdCLE1BQ2xCO0FBQUEsSUFDQSxJQUFJLGNBQWMsc0JBQXNCO0FBQUEsSUFDeEMsSUFBSSxVQUFVLE1BQU0sV0FBVyxVQUFVLFNBQVMsWUFBWSxhQUFhLE1BQU0sV0FBVyxVQUFVLFFBQVEsSUFBSSxNQUFNO0FBQUEsSUFDeEgsVUFBVSxTQUFTLDhDQUE4QztBQUFBLElBQ2pFLElBQUksU0FBUyxFQUFFO0FBQUEsSUFDZixlQUFlLElBQUksS0FBSyxNQUFNO0FBQUEsSUFDOUIsSUFBSSxjQUFjLGtCQUFrQixZQUFZLGFBQWEsSUFBSTtBQUFBLElBQ2pFLE1BQU0sU0FBUyxJQUFJLEtBQUssV0FBVztBQUFBLElBQ25DLE1BQU0sV0FBVyx5QkFBeUIsaUJBQ3hDLHFCQUNBLGVBQ0EscUJBQ0EsVUFDQSxLQUFLLFNBQ0wsT0FDQSxTQUNBLFlBQ0EsY0FDQSwyQkFDQSxPQUNBLHdCQUNBLHVCQUNBLDJCQUNBLGtCQUNBLGtCQUNBLGFBQ0EsVUFDQSxLQUFLLDJCQUEyQixNQUNoQyxDQUFDLE1BQU0sTUFBTSxJQUFJLFlBQVksQ0FDL0I7QUFBQSxJQUNBLHFCQUFxQixPQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPO0FBQUEsTUFDbEUsSUFBSSxXQUFXLEdBQUc7QUFBQSxNQUNsQixJQUFJLG1CQUFtQixNQUFNLFNBQVMsSUFBSSxRQUFRO0FBQUEsTUFDbEQsSUFBSSxzQkFBc0Isa0JBQ25CLFdBQ0wsbUJBQW1CLGlCQUFpQixPQUFZLFNBQ2xEO0FBQUEsTUFDQSxNQUFNLFNBQVMsSUFBSSxVQUFVLG1CQUFtQjtBQUFBLE1BQ2hELGFBQWEsUUFBUTtBQUFBLE1BQ3JCLElBQUksR0FBRyxZQUFZO0FBQUEsUUFDakIsaUJBQWlCLElBQUksVUFBVSxHQUFHLFVBQVU7QUFBQSxNQUM5QztBQUFBLEtBQ0Q7QUFBQSxJQUNELFlBQVksRUFBRSxVQUFVLElBQUksSUFBSSxNQUFNLFFBQVEsRUFBRSxDQUFDO0FBQUEsSUFDakQsSUFBSSxpQ0FBaUMsTUFBTSxxQkFBcUIsUUFBUSxDQUFDLE9BQU8sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3BHLGdCQUFnQixPQUFPLGlCQUNyQixTQUNBLDhCQUNGO0FBQUEsSUFDQSxNQUFNLGVBQWUsbUJBQW1CLE1BQU0sK0JBQzVDLFdBQ0Esc0JBQ0EscUJBQ0EsYUFDRjtBQUFBLElBQ0EsSUFBSSxnQkFBZ0IsT0FBTyxTQUFTO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0IsT0FBTyxvQkFDckIsU0FDQSw4QkFDRjtBQUFBLElBQ0EsZUFBZSxPQUFPLEdBQUc7QUFBQSxJQUN6QixpQkFBaUIsT0FBTyxHQUFHO0FBQUEsSUFDM0IscUJBQXFCLFFBQVEsQ0FBQyxNQUFNLGlCQUFpQixPQUFPLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDbEUsSUFBSSxNQUFNLFNBQVMsSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUMzQixJQUFJLGNBQWMsZUFBZSxhQUFhLElBQUk7QUFBQSxNQUNsRCxNQUFNLFNBQVMsSUFBSSxLQUFLLFdBQVc7QUFBQSxJQUNyQztBQUFBLElBQ0EsSUFBSSxZQUFZLGFBQWEsYUFBYTtBQUFBLElBQzFDLElBQUksV0FBVztBQUFBLE1BQ2IsT0FBTyx3QkFDTCxxQkFDQSxVQUFVLFFBQ1YsT0FDQSxFQUFFLG1CQUFtQixDQUN2QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVksYUFBYSxjQUFjO0FBQUEsSUFDdkMsSUFBSSxXQUFXO0FBQUEsTUFDYixpQkFBaUIsSUFBSSxVQUFVLEdBQUc7QUFBQSxNQUNsQyxPQUFPLHdCQUNMLHFCQUNBLFVBQVUsUUFDVixPQUNBLEVBQUUsbUJBQW1CLENBQ3ZCO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTSxZQUFZLFdBQVcsa0JBQzNCLE9BQ0EsU0FDQSxlQUNLLFdBQ0wsc0JBQ0EsY0FDRjtBQUFBLElBQ0EscUJBQXFCLE1BQU07QUFBQSxJQUMzQixJQUFJLE1BQU0sV0FBVyxVQUFVLGFBQWEsU0FBUyx5QkFBeUI7QUFBQSxNQUM1RSxVQUFVLGVBQWUseUJBQXlCO0FBQUEsTUFDbEQsK0JBQStCLDRCQUE0QixNQUFNO0FBQUEsTUFDakUsbUJBQW1CLE1BQU0sV0FBVyxVQUFVO0FBQUEsUUFDNUM7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0EsVUFBVSxJQUFJLElBQUksTUFBTSxRQUFRO0FBQUEsTUFDbEMsQ0FBQztBQUFBLElBQ0gsRUFBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLFlBQVksZ0JBQ1YsTUFBTSxZQUNOLFlBQ0EsU0FDQSxNQUNGO0FBQUEsUUFDQSxVQUFVLElBQUksSUFBSSxNQUFNLFFBQVE7QUFBQSxNQUNsQyxDQUFDO0FBQUEsTUFDRCx5QkFBeUI7QUFBQTtBQUFBO0FBQUEsRUFHN0IsZUFBZSxtQkFBbUIsQ0FBQyxLQUFLLFNBQVMsTUFBTSxTQUFTLGVBQWUsWUFBWSxXQUFXLG9CQUFvQixZQUFZO0FBQUEsSUFDcEksSUFBSSxrQkFBa0IsTUFBTSxTQUFTLElBQUksR0FBRztBQUFBLElBQzVDLG1CQUNFLEtBQ0Esa0JBQ0UsWUFDQSxrQkFBa0IsZ0JBQWdCLE9BQVksU0FDaEQsR0FDQSxFQUFFLFVBQVUsQ0FDZDtBQUFBLElBQ0EsSUFBSSxrQkFBa0IsSUFBSTtBQUFBLElBQzFCLElBQUksZUFBZSx3QkFDakIsS0FBSyxTQUNMLE1BQ0EsZ0JBQWdCLE1BQ2xCO0FBQUEsSUFDQSxJQUFJLFlBQVk7QUFBQSxNQUNkLElBQUksaUJBQWlCLE1BQU0sZUFDekIsU0FDQSxJQUFJLElBQUksYUFBYSxHQUFHLEVBQUUsVUFDMUIsYUFBYSxRQUNiLEdBQ0Y7QUFBQSxNQUNBLElBQUksZUFBZSxTQUFTLFdBQVc7QUFBQSxRQUNyQztBQUFBLE1BQ0YsRUFBTyxTQUFJLGVBQWUsU0FBUyxTQUFTO0FBQUEsUUFDMUMsZ0JBQWdCLEtBQUssU0FBUyxlQUFlLE9BQU8sRUFBRSxVQUFVLENBQUM7QUFBQSxRQUNqRTtBQUFBLE1BQ0YsRUFBTyxTQUFJLENBQUMsZUFBZSxTQUFTO0FBQUEsUUFDbEMsZ0JBQ0UsS0FDQSxTQUNBLHVCQUF1QixLQUFLLEVBQUUsVUFBVSxLQUFLLENBQUMsR0FDOUMsRUFBRSxVQUFVLENBQ2Q7QUFBQSxRQUNBO0FBQUEsTUFDRixFQUFPO0FBQUEsUUFDTCxVQUFVLGVBQWU7QUFBQTtBQUFBLElBRTdCO0FBQUEsSUFDQSxJQUFJLFFBQVEsZUFBZSxTQUFTLElBQUk7QUFBQSxJQUN4QyxpQkFBaUIsSUFBSSxLQUFLLGVBQWU7QUFBQSxJQUN6QyxJQUFJLG9CQUFvQjtBQUFBLElBQ3hCLElBQUksWUFBWSwrQkFDZCxxQkFDQSxVQUNBLGNBQ0EsU0FDQSxPQUNBLDJCQUNBLGFBQ0Y7QUFBQSxJQUNBLElBQUksVUFBVSxNQUFNLGlCQUNsQixjQUNBLFdBQ0EsZUFDQSxHQUNGO0FBQUEsSUFDQSxJQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU07QUFBQSxJQUNqQyxJQUFJLGlCQUFpQixJQUFJLEdBQUcsTUFBTSxpQkFBaUI7QUFBQSxNQUNqRCxpQkFBaUIsT0FBTyxHQUFHO0FBQUEsSUFDN0I7QUFBQSxJQUNBLElBQUksYUFBYSxPQUFPLFNBQVM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksMEJBQTBCLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDdEMsbUJBQW1CLEtBQUssZUFBb0IsU0FBQyxDQUFDO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLGlCQUFpQixNQUFNLEdBQUc7QUFBQSxNQUM1QixJQUFJLDBCQUEwQixtQkFBbUI7QUFBQSxRQUMvQyxtQkFBbUIsS0FBSyxlQUFvQixTQUFDLENBQUM7QUFBQSxRQUM5QztBQUFBLE1BQ0YsRUFBTztBQUFBLFFBQ0wsaUJBQWlCLElBQUksR0FBRztBQUFBLFFBQ3hCLE1BQU0sd0JBQXdCLGNBQWMsUUFBUSxPQUFPO0FBQUEsVUFDekQ7QUFBQSxRQUNGLENBQUM7QUFBQSxRQUNEO0FBQUE7QUFBQSxJQUVKO0FBQUEsSUFDQSxJQUFJLGNBQWMsTUFBTSxHQUFHO0FBQUEsTUFDekIsZ0JBQWdCLEtBQUssU0FBUyxPQUFPLEtBQUs7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQSxJQUNBLG1CQUFtQixLQUFLLGVBQWUsT0FBTyxJQUFJLENBQUM7QUFBQTtBQUFBLEVBRXJELGVBQWUsdUJBQXVCLENBQUMsU0FBUyxXQUFXO0FBQUEsSUFDekQ7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsQ0FBQyxHQUFHO0FBQUEsSUFDTixJQUFJLFVBQVUsU0FBUyxRQUFRLElBQUksb0JBQW9CLEdBQUc7QUFBQSxNQUN4RCx5QkFBeUI7QUFBQSxJQUMzQjtBQUFBLElBQ0EsSUFBSSxZQUFXLFVBQVUsU0FBUyxRQUFRLElBQUksVUFBVTtBQUFBLElBQ3hELFVBQVUsV0FBVSxxREFBcUQ7QUFBQSxJQUN6RSxZQUFXLDBCQUNULFdBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxHQUNuQixRQUNGO0FBQUEsSUFDQSxJQUFJLG1CQUFtQixlQUFlLE1BQU0sVUFBVSxXQUFVO0FBQUEsTUFDOUQsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsSUFBSSxZQUFZO0FBQUEsTUFDZCxJQUFJLG1CQUFtQjtBQUFBLE1BQ3ZCLElBQUksVUFBVSxTQUFTLFFBQVEsSUFBSSx5QkFBeUIsR0FBRztBQUFBLFFBQzdELG1CQUFtQjtBQUFBLE1BQ3JCLEVBQU8sU0FBSSxjQUFjLFNBQVEsR0FBRztBQUFBLFFBQ2xDLE1BQU0sTUFBTSxxQkFBcUIsV0FBVSxJQUFJO0FBQUEsUUFDL0MsbUJBQ0EsSUFBSSxXQUFXLGFBQWEsU0FBUyxVQUNyQyxjQUFjLElBQUksVUFBVSxRQUFRLEtBQUs7QUFBQSxNQUMzQztBQUFBLE1BQ0EsSUFBSSxrQkFBa0I7QUFBQSxRQUNwQixJQUFJLFVBQVU7QUFBQSxVQUNaLGFBQWEsU0FBUyxRQUFRLFNBQVE7QUFBQSxRQUN4QyxFQUFPO0FBQUEsVUFDTCxhQUFhLFNBQVMsT0FBTyxTQUFRO0FBQUE7QUFBQSxRQUV2QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSw4QkFBOEI7QUFBQSxJQUM5QixJQUFJLHlCQUF5QixhQUFhLFFBQVEsVUFBVSxTQUFTLFFBQVEsSUFBSSxpQkFBaUIsSUFBSSxZQUEwQjtBQUFBLElBQ2hJLE1BQU0sWUFBWSxZQUFZLGdCQUFnQixNQUFNO0FBQUEsSUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsY0FBYyxjQUFjLGFBQWE7QUFBQSxNQUNoRixhQUFhLDRCQUE0QixNQUFNLFVBQVU7QUFBQSxJQUMzRDtBQUFBLElBQ0EsSUFBSSxtQkFBbUIsY0FBYztBQUFBLElBQ3JDLElBQUksa0NBQWtDLElBQUksVUFBVSxTQUFTLE1BQU0sS0FBSyxvQkFBb0IsaUJBQWlCLGlCQUFpQixVQUFVLEdBQUc7QUFBQSxNQUN6SSxNQUFNLGdCQUFnQix3QkFBd0Isa0JBQWtCO0FBQUEsUUFDOUQsWUFBWTtBQUFBLGFBQ1A7QUFBQSxVQUNILFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFFQSxvQkFBb0Isc0JBQXNCO0FBQUEsUUFDMUMsc0JBQXNCLGVBQWUsK0JBQW9DO0FBQUEsTUFDM0UsQ0FBQztBQUFBLElBQ0gsRUFBTztBQUFBLE1BQ0wsSUFBSSxxQkFBcUIscUJBQ3ZCLGtCQUNBLFVBQ0Y7QUFBQSxNQUNBLE1BQU0sZ0JBQWdCLHdCQUF3QixrQkFBa0I7QUFBQSxRQUM5RDtBQUFBLFFBRUE7QUFBQSxRQUVBLG9CQUFvQixzQkFBc0I7QUFBQSxRQUMxQyxzQkFBc0IsZUFBZSwrQkFBb0M7QUFBQSxNQUMzRSxDQUFDO0FBQUE7QUFBQTtBQUFBLEVBR0wsZUFBZSxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVMsZUFBZSxZQUFZO0FBQUEsSUFDM0UsSUFBSTtBQUFBLElBQ0osSUFBSSxjQUFjLENBQUM7QUFBQSxJQUNuQixJQUFJO0FBQUEsTUFDRixVQUFVLE1BQU0scUJBQ2Qsa0JBQ0EsU0FDQSxTQUNBLFlBQ0EsZUFDQSxLQUNGO0FBQUEsTUFDQSxPQUFPLEdBQUc7QUFBQSxNQUNWLFFBQVEsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFBQSxRQUNqRCxZQUFZLEVBQUUsTUFBTSxNQUFNO0FBQUEsVUFDeEIsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1Q7QUFBQSxPQUNEO0FBQUEsTUFDRCxPQUFPO0FBQUE7QUFBQSxJQUVULElBQUksUUFBUSxPQUFPLFNBQVM7QUFBQSxNQUMxQixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsVUFBVSxTQUFTLFdBQVcsT0FBTyxRQUFRLE9BQU8sR0FBRztBQUFBLE1BQ3JELElBQUksNkJBQTZCLE1BQU0sR0FBRztBQUFBLFFBQ3hDLElBQUksV0FBVyxPQUFPO0FBQUEsUUFDdEIsWUFBWSxXQUFXO0FBQUEsVUFDckIsTUFBTTtBQUFBLFVBQ04sVUFBVSx5Q0FDUixVQUNBLFNBQ0EsU0FDQSxTQUNBLFFBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRixFQUFPO0FBQUEsUUFDTCxZQUFZLFdBQVcsTUFBTSxzQ0FBc0MsTUFBTTtBQUFBO0FBQUEsSUFFN0U7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBRVQsZUFBZSw4QkFBOEIsQ0FBQyxTQUFTLGdCQUFnQixTQUFTLGVBQWU7QUFBQSxJQUM3RixJQUFJLHVCQUF1QixpQkFDekIsU0FDQSxTQUNBLGVBQ0EsSUFDRjtBQUFBLElBQ0EsSUFBSSx3QkFBd0IsUUFBUSxJQUNsQyxlQUFlLElBQUksT0FBTyxNQUFNO0FBQUEsTUFDOUIsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVk7QUFBQSxRQUNyRCxJQUFJLFVBQVUsTUFBTSxpQkFDbEIsRUFBRSxTQUNGLEVBQUUsU0FDRixlQUNBLEVBQUUsR0FDSjtBQUFBLFFBQ0EsSUFBSSxTQUFTLFFBQVEsRUFBRSxNQUFNLE1BQU07QUFBQSxRQUNuQyxPQUFPLEdBQUcsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUMzQixFQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsUUFBUTtBQUFBLFdBQ3BCLEVBQUUsTUFBTTtBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sT0FBTyx1QkFBdUIsS0FBSztBQUFBLGNBQ2pDLFVBQVUsRUFBRTtBQUFBLFlBQ2QsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNGLENBQUM7QUFBQTtBQUFBLEtBRUosQ0FDSDtBQUFBLElBQ0EsSUFBSSxnQkFBZ0IsTUFBTTtBQUFBLElBQzFCLElBQUksa0JBQWtCLE1BQU0sdUJBQXVCLE9BQ2pELENBQUMsS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FDaEMsQ0FBQyxDQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUVGLFNBQVMsb0JBQW9CLEdBQUc7QUFBQSxJQUM5Qix5QkFBeUI7QUFBQSxJQUN6QixpQkFBaUIsUUFBUSxDQUFDLEdBQUcsUUFBUTtBQUFBLE1BQ25DLElBQUksaUJBQWlCLElBQUksR0FBRyxHQUFHO0FBQUEsUUFDN0Isc0JBQXNCLElBQUksR0FBRztBQUFBLE1BQy9CO0FBQUEsTUFDQSxhQUFhLEdBQUc7QUFBQSxLQUNqQjtBQUFBO0FBQUEsRUFFSCxTQUFTLGtCQUFrQixDQUFDLEtBQUssU0FBUyxPQUFPLENBQUMsR0FBRztBQUFBLElBQ25ELE1BQU0sU0FBUyxJQUFJLEtBQUssT0FBTztBQUFBLElBQy9CLFlBQ0UsRUFBRSxVQUFVLElBQUksSUFBSSxNQUFNLFFBQVEsRUFBRSxHQUNwQyxFQUFFLFlBQVksUUFBUSxLQUFLLGVBQWUsS0FBSyxDQUNqRDtBQUFBO0FBQUEsRUFFRixTQUFTLGVBQWUsQ0FBQyxLQUFLLFNBQVMsT0FBTyxPQUFPLENBQUMsR0FBRztBQUFBLElBQ3ZELElBQUksZ0JBQWdCLG9CQUFvQixNQUFNLFNBQVMsT0FBTztBQUFBLElBQzlELGNBQWMsR0FBRztBQUFBLElBQ2pCLFlBQ0U7QUFBQSxNQUNFLFFBQVE7QUFBQSxTQUNMLGNBQWMsTUFBTSxLQUFLO0FBQUEsTUFDNUI7QUFBQSxNQUNBLFVBQVUsSUFBSSxJQUFJLE1BQU0sUUFBUTtBQUFBLElBQ2xDLEdBQ0EsRUFBRSxZQUFZLFFBQVEsS0FBSyxlQUFlLEtBQUssQ0FDakQ7QUFBQTtBQUFBLEVBRUYsU0FBUyxVQUFVLENBQUMsS0FBSztBQUFBLElBQ3ZCLGVBQWUsSUFBSSxNQUFNLGVBQWUsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUEsSUFDMUQsSUFBSSwwQkFBMEIsSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUN0QywwQkFBMEIsT0FBTyxHQUFHO0FBQUEsSUFDdEM7QUFBQSxJQUNBLE9BQU8sTUFBTSxTQUFTLElBQUksR0FBRyxLQUFLO0FBQUE7QUFBQSxFQUVwQyxTQUFTLFlBQVksQ0FBQyxLQUFLLE1BQU07QUFBQSxJQUMvQixhQUFhLEtBQUssTUFBTSxNQUFNO0FBQUEsSUFDOUIsbUJBQW1CLEtBQUssZUFBZSxJQUFJLENBQUM7QUFBQTtBQUFBLEVBRTlDLFNBQVMsYUFBYSxDQUFDLEtBQUs7QUFBQSxJQUMxQixJQUFJLFVBQVUsTUFBTSxTQUFTLElBQUksR0FBRztBQUFBLElBQ3BDLElBQUksaUJBQWlCLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxRQUFRLFVBQVUsYUFBYSxlQUFlLElBQUksR0FBRyxJQUFJO0FBQUEsTUFDckcsYUFBYSxHQUFHO0FBQUEsSUFDbEI7QUFBQSxJQUNBLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxJQUMzQixlQUFlLE9BQU8sR0FBRztBQUFBLElBQ3pCLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxJQUMzQiwwQkFBMEIsT0FBTyxHQUFHO0FBQUEsSUFDcEMsc0JBQXNCLE9BQU8sR0FBRztBQUFBLElBQ2hDLE1BQU0sU0FBUyxPQUFPLEdBQUc7QUFBQTtBQUFBLEVBRTNCLFNBQVMsdUJBQXVCLENBQUMsS0FBSztBQUFBLElBQ3BDLElBQUksU0FBUyxlQUFlLElBQUksR0FBRyxLQUFLLEtBQUs7QUFBQSxJQUM3QyxJQUFJLFNBQVMsR0FBRztBQUFBLE1BQ2QsZUFBZSxPQUFPLEdBQUc7QUFBQSxNQUN6QiwwQkFBMEIsSUFBSSxHQUFHO0FBQUEsSUFDbkMsRUFBTztBQUFBLE1BQ0wsZUFBZSxJQUFJLEtBQUssS0FBSztBQUFBO0FBQUEsSUFFL0IsWUFBWSxFQUFFLFVBQVUsSUFBSSxJQUFJLE1BQU0sUUFBUSxFQUFFLENBQUM7QUFBQTtBQUFBLEVBRW5ELFNBQVMsWUFBWSxDQUFDLEtBQUssUUFBUTtBQUFBLElBQ2pDLElBQUksYUFBYSxpQkFBaUIsSUFBSSxHQUFHO0FBQUEsSUFDekMsSUFBSSxZQUFZO0FBQUEsTUFDZCxXQUFXLE1BQU0sTUFBTTtBQUFBLE1BQ3ZCLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxJQUM3QjtBQUFBO0FBQUEsRUFFRixTQUFTLGdCQUFnQixDQUFDLE1BQU07QUFBQSxJQUM5QixTQUFTLE9BQU8sTUFBTTtBQUFBLE1BQ3BCLElBQUksVUFBVSxXQUFXLEdBQUc7QUFBQSxNQUM1QixJQUFJLGNBQWMsZUFBZSxRQUFRLElBQUk7QUFBQSxNQUM3QyxNQUFNLFNBQVMsSUFBSSxLQUFLLFdBQVc7QUFBQSxJQUNyQztBQUFBO0FBQUEsRUFFRixTQUFTLHNCQUFzQixHQUFHO0FBQUEsSUFDaEMsSUFBSSxXQUFXLENBQUM7QUFBQSxJQUNoQixJQUFJLGtCQUFrQjtBQUFBLElBQ3RCLFNBQVMsT0FBTyxrQkFBa0I7QUFBQSxNQUNoQyxJQUFJLFVBQVUsTUFBTSxTQUFTLElBQUksR0FBRztBQUFBLE1BQ3BDLFVBQVUsU0FBUyxxQkFBcUIsS0FBSztBQUFBLE1BQzdDLElBQUksUUFBUSxVQUFVLFdBQVc7QUFBQSxRQUMvQixpQkFBaUIsT0FBTyxHQUFHO0FBQUEsUUFDM0IsU0FBUyxLQUFLLEdBQUc7QUFBQSxRQUNqQixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGlCQUFpQixRQUFRO0FBQUEsSUFDekIsT0FBTztBQUFBO0FBQUEsRUFFVCxTQUFTLG9CQUFvQixDQUFDLFVBQVU7QUFBQSxJQUN0QyxJQUFJLGFBQWEsQ0FBQztBQUFBLElBQ2xCLFVBQVUsS0FBSyxPQUFPLGdCQUFnQjtBQUFBLE1BQ3BDLElBQUksS0FBSyxVQUFVO0FBQUEsUUFDakIsSUFBSSxVQUFVLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFBQSxRQUNwQyxVQUFVLFNBQVMscUJBQXFCLEtBQUs7QUFBQSxRQUM3QyxJQUFJLFFBQVEsVUFBVSxXQUFXO0FBQUEsVUFDL0IsYUFBYSxHQUFHO0FBQUEsVUFDaEIsZUFBZSxPQUFPLEdBQUc7QUFBQSxVQUN6QixXQUFXLEtBQUssR0FBRztBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGlCQUFpQixVQUFVO0FBQUEsSUFDM0IsT0FBTyxXQUFXLFNBQVM7QUFBQTtBQUFBLEVBRTdCLFNBQVMsVUFBVSxDQUFDLEtBQUssSUFBSTtBQUFBLElBQzNCLElBQUksVUFBVSxNQUFNLFNBQVMsSUFBSSxHQUFHLEtBQUs7QUFBQSxJQUN6QyxJQUFJLGlCQUFpQixJQUFJLEdBQUcsTUFBTSxJQUFJO0FBQUEsTUFDcEMsaUJBQWlCLElBQUksS0FBSyxFQUFFO0FBQUEsSUFDOUI7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBRVQsU0FBUyxhQUFhLENBQUMsS0FBSztBQUFBLElBQzFCLE1BQU0sU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUN6QixpQkFBaUIsT0FBTyxHQUFHO0FBQUE7QUFBQSxFQUU3QixTQUFTLGFBQWEsQ0FBQyxLQUFLLFlBQVk7QUFBQSxJQUN0QyxJQUFJLFVBQVUsTUFBTSxTQUFTLElBQUksR0FBRyxLQUFLO0FBQUEsSUFDekMsVUFDRSxRQUFRLFVBQVUsZUFBZSxXQUFXLFVBQVUsYUFBYSxRQUFRLFVBQVUsYUFBYSxXQUFXLFVBQVUsYUFBYSxRQUFRLFVBQVUsYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLFFBQVEsVUFBVSxhQUFhLFdBQVcsVUFBVSxlQUFlLFFBQVEsVUFBVSxnQkFBZ0IsV0FBVyxVQUFVLGFBQ2xVLHFDQUFxQyxRQUFRLFlBQVksV0FBVyxPQUN0RTtBQUFBLElBQ0EsSUFBSSxXQUFXLElBQUksSUFBSSxNQUFNLFFBQVE7QUFBQSxJQUNyQyxTQUFTLElBQUksS0FBSyxVQUFVO0FBQUEsSUFDNUIsWUFBWSxFQUFFLFNBQVMsQ0FBQztBQUFBO0FBQUEsRUFFMUIsU0FBUyxxQkFBcUI7QUFBQSxJQUM1QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsS0FDQztBQUFBLElBQ0QsSUFBSSxpQkFBaUIsU0FBUyxHQUFHO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLGlCQUFpQixPQUFPLEdBQUc7QUFBQSxNQUM3QixRQUFRLE9BQU8sOENBQThDO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLElBQUksVUFBVSxNQUFNLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLElBQ25ELEtBQUssWUFBWSxtQkFBbUIsUUFBUSxRQUFRLFNBQVM7QUFBQSxJQUM3RCxJQUFJLFVBQVUsTUFBTSxTQUFTLElBQUksVUFBVTtBQUFBLElBQzNDLElBQUksV0FBVyxRQUFRLFVBQVUsY0FBYztBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxnQkFBZ0IsRUFBRSxpQkFBaUIsY0FBYyxjQUFjLENBQUMsR0FBRztBQUFBLE1BQ3JFLE9BQU87QUFBQSxJQUNUO0FBQUE7QUFBQSxFQUVGLFNBQVMscUJBQXFCLENBQUMsVUFBVTtBQUFBLElBQ3ZDLElBQUksUUFBUSx1QkFBdUIsS0FBSyxFQUFFLFNBQVMsQ0FBQztBQUFBLElBQ3BELElBQUksY0FBYyxzQkFBc0I7QUFBQSxJQUN4QyxNQUFNLFNBQVMsVUFBVSx1QkFBdUIsV0FBVztBQUFBLElBQzNELE9BQU8sRUFBRSxpQkFBaUIsU0FBUyxPQUFPLE1BQU07QUFBQTtBQUFBLEVBRWxELFNBQVMsdUJBQXVCLENBQUMsV0FBVyxhQUFhLFFBQVE7QUFBQSxJQUMvRCx3QkFBd0I7QUFBQSxJQUN4QixvQkFBb0I7QUFBQSxJQUNwQiwyQkFBMkIsVUFBVTtBQUFBLElBQ3JDLElBQUksQ0FBQyx5QkFBeUIsTUFBTSxlQUFlLGlCQUFpQjtBQUFBLE1BQ2xFLHdCQUF3QjtBQUFBLE1BQ3hCLElBQUksSUFBSSx1QkFBdUIsTUFBTSxVQUFVLE1BQU0sT0FBTztBQUFBLE1BQzVELElBQUksS0FBSyxNQUFNO0FBQUEsUUFDYixZQUFZLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTyxNQUFNO0FBQUEsTUFDWCx3QkFBd0I7QUFBQSxNQUN4QixvQkFBb0I7QUFBQSxNQUNwQiwyQkFBMkI7QUFBQTtBQUFBO0FBQUEsRUFHL0IsU0FBUyxZQUFZLENBQUMsV0FBVSxTQUFTO0FBQUEsSUFDdkMsSUFBSSwwQkFBMEI7QUFBQSxNQUM1QixJQUFJLE1BQU0seUJBQ1IsV0FDQSxRQUFRLElBQUksQ0FBQyxNQUFNLDJCQUEyQixHQUFHLE1BQU0sVUFBVSxDQUFDLENBQ3BFO0FBQUEsTUFDQSxPQUFPLE9BQU8sVUFBUztBQUFBLElBQ3pCO0FBQUEsSUFDQSxPQUFPLFVBQVM7QUFBQTtBQUFBLEVBRWxCLFNBQVMsa0JBQWtCLENBQUMsV0FBVSxTQUFTO0FBQUEsSUFDN0MsSUFBSSx5QkFBeUIsbUJBQW1CO0FBQUEsTUFDOUMsSUFBSSxNQUFNLGFBQWEsV0FBVSxPQUFPO0FBQUEsTUFDeEMsc0JBQXNCLE9BQU8sa0JBQWtCO0FBQUEsSUFDakQ7QUFBQTtBQUFBLEVBRUYsU0FBUyxzQkFBc0IsQ0FBQyxXQUFVLFNBQVM7QUFBQSxJQUNqRCxJQUFJLHVCQUF1QjtBQUFBLE1BQ3pCLElBQUksTUFBTSxhQUFhLFdBQVUsT0FBTztBQUFBLE1BQ3hDLElBQUksSUFBSSxzQkFBc0I7QUFBQSxNQUM5QixJQUFJLE9BQU8sTUFBTSxVQUFVO0FBQUEsUUFDekIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxFQUVULFNBQVMsYUFBYSxDQUFDLFNBQVMsYUFBYSxVQUFVO0FBQUEsSUFDckQsSUFBSSxLQUFLLHlCQUF5QjtBQUFBLE1BQ2hDLElBQUksQ0FBQyxTQUFTO0FBQUEsUUFDWixJQUFJLGFBQWEsZ0JBQ2YsYUFDQSxVQUNBLFVBQ0EsSUFDRjtBQUFBLFFBQ0EsT0FBTyxFQUFFLFFBQVEsTUFBTSxTQUFTLGNBQWMsQ0FBQyxFQUFFO0FBQUEsTUFDbkQsRUFBTztBQUFBLFFBQ0wsSUFBSSxPQUFPLEtBQUssUUFBUSxHQUFHLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxVQUM3QyxJQUFJLGlCQUFpQixnQkFDbkIsYUFDQSxVQUNBLFVBQ0EsSUFDRjtBQUFBLFVBQ0EsT0FBTyxFQUFFLFFBQVEsTUFBTSxTQUFTLGVBQWU7QUFBQSxRQUNqRDtBQUFBO0FBQUEsSUFFSjtBQUFBLElBQ0EsT0FBTyxFQUFFLFFBQVEsT0FBTyxTQUFTLEtBQUs7QUFBQTtBQUFBLEVBRXhDLGVBQWUsY0FBYyxDQUFDLFNBQVMsVUFBVSxRQUFRLFlBQVk7QUFBQSxJQUNuRSxJQUFJLENBQUMsS0FBSyx5QkFBeUI7QUFBQSxNQUNqQyxPQUFPLEVBQUUsTUFBTSxXQUFXLFFBQVE7QUFBQSxJQUNwQztBQUFBLElBQ0EsSUFBSSxpQkFBaUI7QUFBQSxJQUNyQixPQUFPLE1BQU07QUFBQSxNQUNYLElBQUksV0FBVyxzQkFBc0I7QUFBQSxNQUNyQyxJQUFJLGNBQWMsc0JBQXNCO0FBQUEsTUFDeEMsSUFBSSxnQkFBZ0I7QUFBQSxNQUNwQixJQUFJO0FBQUEsUUFDRixNQUFNLEtBQUssd0JBQXdCO0FBQUEsVUFDakM7QUFBQSxVQUNBLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNUO0FBQUEsVUFDQSxPQUFPLENBQUMsU0FBUyxhQUFhO0FBQUEsWUFDNUIsSUFBSSxPQUFPO0FBQUEsY0FBUztBQUFBLFlBQ3BCLGdCQUNFLFNBQ0EsVUFDQSxhQUNBLGVBQ0EscUJBQ0EsS0FDRjtBQUFBO0FBQUEsUUFFSixDQUFDO0FBQUEsUUFDRCxPQUFPLEdBQUc7QUFBQSxRQUNWLE9BQU8sRUFBRSxNQUFNLFNBQVMsT0FBTyxHQUFHLGVBQWU7QUFBQSxnQkFDakQ7QUFBQSxRQUNBLElBQUksWUFBWSxDQUFDLE9BQU8sU0FBUztBQUFBLFVBQy9CLGFBQWEsQ0FBQyxHQUFHLFVBQVU7QUFBQSxRQUM3QjtBQUFBO0FBQUEsTUFFRixJQUFJLE9BQU8sU0FBUztBQUFBLFFBQ2xCLE9BQU8sRUFBRSxNQUFNLFVBQVU7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsSUFBSSxhQUFhLFlBQVksYUFBYSxVQUFVLFFBQVE7QUFBQSxNQUM1RCxJQUFJLFlBQVk7QUFBQSxRQUNkLE9BQU8sRUFBRSxNQUFNLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLElBQUksb0JBQW9CLGdCQUN0QixhQUNBLFVBQ0EsVUFDQSxJQUNGO0FBQUEsTUFDQSxJQUFJLENBQUMscUJBQXFCLGVBQWUsV0FBVyxrQkFBa0IsVUFBVSxlQUFlLE1BQzdGLENBQUMsR0FBRyxNQUFNLEVBQUUsTUFBTSxPQUFPLGtCQUFrQixHQUFHLE1BQU0sRUFDdEQsR0FBRztBQUFBLFFBQ0QsT0FBTyxFQUFFLE1BQU0sV0FBVyxTQUFTLEtBQUs7QUFBQSxNQUMxQztBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQTtBQUFBLEVBRUYsU0FBUyxrQkFBa0IsQ0FBQyxXQUFXO0FBQUEsSUFDckMsV0FBVyxDQUFDO0FBQUEsSUFDWixxQkFBcUIsMEJBQ25CLFdBQ0EscUJBQ0ssV0FDTCxRQUNGO0FBQUE7QUFBQSxFQUVGLFNBQVMsV0FBVyxDQUFDLFNBQVMsVUFBVSxpQ0FBaUMsT0FBTztBQUFBLElBQzlFLElBQUksV0FBVyxzQkFBc0I7QUFBQSxJQUNyQyxJQUFJLGNBQWMsc0JBQXNCO0FBQUEsSUFDeEMsZ0JBQ0UsU0FDQSxVQUNBLGFBQ0EsVUFDQSxxQkFDQSw4QkFDRjtBQUFBLElBQ0EsSUFBSSxVQUFVO0FBQUEsTUFDWixhQUFhLENBQUMsR0FBRyxVQUFVO0FBQUEsTUFDM0IsWUFBWSxDQUFDLENBQUM7QUFBQSxJQUNoQjtBQUFBO0FBQUEsRUFFRixTQUFTO0FBQUEsUUFDSCxRQUFRLEdBQUc7QUFBQSxNQUNiLE9BQU87QUFBQTtBQUFBLFFBRUwsTUFBTSxHQUFHO0FBQUEsTUFDWCxPQUFPO0FBQUE7QUFBQSxRQUVMLEtBQUssR0FBRztBQUFBLE1BQ1YsT0FBTztBQUFBO0FBQUEsUUFFTCxNQUFNLEdBQUc7QUFBQSxNQUNYLE9BQU87QUFBQTtBQUFBLFFBRUwsTUFBTSxHQUFHO0FBQUEsTUFDWCxPQUFPO0FBQUE7QUFBQSxJQUVUO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxPQUFPO0FBQUEsSUFDUDtBQUFBLElBR0EsWUFBWSxDQUFDLE9BQU8sS0FBSyxRQUFRLFdBQVcsRUFBRTtBQUFBLElBQzlDLGdCQUFnQixDQUFDLE9BQU8sS0FBSyxRQUFRLGVBQWUsRUFBRTtBQUFBLElBQ3REO0FBQUEsSUFDQTtBQUFBLElBQ0EsZUFBZTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLDJCQUEyQjtBQUFBLElBRzNCO0FBQUEsSUFDQSw4Q0FBOEMsQ0FBQyxVQUFVO0FBQUEsTUFDdkQsWUFBWSxRQUFRO0FBQUE7QUFBQSxFQUV4QjtBQUFBLEVBQ0EsSUFBSSxLQUFLLDJCQUEyQjtBQUFBLElBQ2xDLFNBQVMsMkJBQ1AsUUFDQSxLQUFLLDBCQUEwQixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLE9BQU8sQ0FDcEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUE0bkJULFNBQVMsc0JBQXNCLENBQUMsTUFBTTtBQUFBLEVBQ3BDLE9BQU8sUUFBUSxVQUFTLGNBQWMsU0FBUSxLQUFLLFlBQVksU0FBUSxVQUFVLFNBQVEsS0FBSyxTQUFjO0FBQUE7QUFFOUcsU0FBUyxXQUFXLENBQUMsV0FBVSxTQUFTLFVBQVUsSUFBSSxhQUFhLFVBQVU7QUFBQSxFQUMzRSxJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJLGFBQWE7QUFBQSxJQUNmLG9CQUFvQixDQUFDO0FBQUEsSUFDckIsU0FBUyxTQUFTLFNBQVM7QUFBQSxNQUN6QixrQkFBa0IsS0FBSyxLQUFLO0FBQUEsTUFDNUIsSUFBSSxNQUFNLE1BQU0sT0FBTyxhQUFhO0FBQUEsUUFDbEMsbUJBQW1CO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsRUFBTztBQUFBLElBQ0wsb0JBQW9CO0FBQUEsSUFDcEIsbUJBQW1CLFFBQVEsUUFBUSxTQUFTO0FBQUE7QUFBQSxFQUU5QyxJQUFJLE9BQU8sVUFDVCxLQUFLLEtBQUssS0FDVixvQkFBb0IsaUJBQWlCLEdBQ3JDLGNBQWMsVUFBUyxVQUFVLFFBQVEsS0FBSyxVQUFTLFVBQ3ZELGFBQWEsTUFDZjtBQUFBLEVBQ0EsSUFBSSxNQUFNLE1BQU07QUFBQSxJQUNkLEtBQUssU0FBUyxVQUFTO0FBQUEsSUFDdkIsS0FBSyxPQUFPLFVBQVM7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsS0FBSyxNQUFNLFFBQVEsT0FBTyxNQUFNLE9BQU8sUUFBUSxrQkFBa0I7QUFBQSxJQUMvRCxJQUFJLGFBQWEsbUJBQW1CLEtBQUssTUFBTTtBQUFBLElBQy9DLElBQUksaUJBQWlCLE1BQU0sU0FBUyxDQUFDLFlBQVk7QUFBQSxNQUMvQyxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssT0FBTyxRQUFRLE9BQU8sU0FBUyxJQUFJO0FBQUEsSUFDdEUsRUFBTyxTQUFJLENBQUMsaUJBQWlCLE1BQU0sU0FBUyxZQUFZO0FBQUEsTUFDdEQsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEtBQUssTUFBTTtBQUFBLE1BQzVDLElBQUksY0FBYyxPQUFPLE9BQU8sT0FBTztBQUFBLE1BQ3ZDLE9BQU8sT0FBTyxPQUFPO0FBQUEsTUFDckIsWUFBWSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sT0FBTyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBQUEsTUFDckUsSUFBSSxLQUFLLE9BQU8sU0FBUztBQUFBLE1BQ3pCLEtBQUssU0FBUyxLQUFLLElBQUksT0FBTztBQUFBLElBQ2hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxhQUFhLEtBQUs7QUFBQSxJQUNwQixLQUFLLFdBQVcsZ0JBQWdCLEVBQUUsVUFBVSxVQUFVLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDdkU7QUFBQSxFQUNBLE9BQU8sV0FBVyxJQUFJO0FBQUE7QUFFeEIsU0FBUyx3QkFBd0IsQ0FBQyxXQUFXLE1BQU0sTUFBTTtBQUFBLEVBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLElBQUksR0FBRztBQUFBLElBQzFDLE9BQU8sRUFBRSxLQUFLO0FBQUEsRUFDaEI7QUFBQSxFQUNBLElBQUksS0FBSyxjQUFjLENBQUMsY0FBYyxLQUFLLFVBQVUsR0FBRztBQUFBLElBQ3RELE9BQU87QUFBQSxNQUNMO0FBQUEsTUFDQSxPQUFPLHVCQUF1QixLQUFLLEVBQUUsUUFBUSxLQUFLLFdBQVcsQ0FBQztBQUFBLElBQ2hFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxzQkFBc0IsT0FBTztBQUFBLElBQy9CO0FBQUEsSUFDQSxPQUFPLHVCQUF1QixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsSUFBSSxnQkFBZ0IsS0FBSyxjQUFjO0FBQUEsRUFDdkMsSUFBSSxhQUFhLGNBQWMsWUFBWTtBQUFBLEVBQzNDLElBQUksYUFBYSxrQkFBa0IsSUFBSTtBQUFBLEVBQ3ZDLElBQUksS0FBSyxTQUFjLFdBQUc7QUFBQSxJQUN4QixJQUFJLEtBQUssZ0JBQWdCLGNBQWM7QUFBQSxNQUNyQyxJQUFJLENBQUMsaUJBQWlCLFVBQVUsR0FBRztBQUFBLFFBQ2pDLE9BQU8sb0JBQW9CO0FBQUEsTUFDN0I7QUFBQSxNQUNBLElBQUksT0FBTyxPQUFPLEtBQUssU0FBUyxXQUFXLEtBQUssT0FBTyxLQUFLLGdCQUFnQixZQUFZLEtBQUssZ0JBQWdCLGtCQUUzRyxNQUFNLEtBQUssS0FBSyxLQUFLLFFBQVEsQ0FBQyxFQUFFLE9BQzlCLENBQUMsTUFBTSxNQUFNLFdBQVcsR0FBRyxNQUFNLFFBQVE7QUFBQSxHQUV6QyxFQUNGLElBQ0UsT0FBTyxLQUFLLElBQUk7QUFBQSxNQUNwQixPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQSxhQUFhLEtBQUs7QUFBQSxVQUNsQixVQUFlO0FBQUEsVUFDZixNQUFXO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixFQUFPLFNBQUksS0FBSyxnQkFBZ0Isb0JBQW9CO0FBQUEsTUFDbEQsSUFBSSxDQUFDLGlCQUFpQixVQUFVLEdBQUc7QUFBQSxRQUNqQyxPQUFPLG9CQUFvQjtBQUFBLE1BQzdCO0FBQUEsTUFDQSxJQUFJO0FBQUEsUUFDRixJQUFJLE9BQU8sT0FBTyxLQUFLLFNBQVMsV0FBVyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSztBQUFBLFFBQ3hFLE9BQU87QUFBQSxVQUNMO0FBQUEsVUFDQSxZQUFZO0FBQUEsWUFDVjtBQUFBLFlBQ0E7QUFBQSxZQUNBLGFBQWEsS0FBSztBQUFBLFlBQ2xCLFVBQWU7QUFBQSxZQUNmO0FBQUEsWUFDQSxNQUFXO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU8sR0FBRztBQUFBLFFBQ1YsT0FBTyxvQkFBb0I7QUFBQTtBQUFBLElBRS9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFDRSxPQUFPLGFBQWEsWUFDcEIsK0NBQ0Y7QUFBQSxFQUNBLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUksS0FBSyxVQUFVO0FBQUEsSUFDakIsZUFBZSw4QkFBOEIsS0FBSyxRQUFRO0FBQUEsSUFDMUQsV0FBVyxLQUFLO0FBQUEsRUFDbEIsRUFBTyxTQUFJLEtBQUssZ0JBQWdCLFVBQVU7QUFBQSxJQUN4QyxlQUFlLDhCQUE4QixLQUFLLElBQUk7QUFBQSxJQUN0RCxXQUFXLEtBQUs7QUFBQSxFQUNsQixFQUFPLFNBQUksS0FBSyxnQkFBZ0IsaUJBQWlCO0FBQUEsSUFDL0MsZUFBZSxLQUFLO0FBQUEsSUFDcEIsV0FBVyw4QkFBOEIsWUFBWTtBQUFBLEVBQ3ZELEVBQU8sU0FBSSxLQUFLLFFBQVEsTUFBTTtBQUFBLElBQzVCLGVBQWUsSUFBSTtBQUFBLElBQ25CLFdBQVcsSUFBSTtBQUFBLEVBQ2pCLEVBQU87QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNGLGVBQWUsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJO0FBQUEsTUFDNUMsV0FBVyw4QkFBOEIsWUFBWTtBQUFBLE1BQ3JELE9BQU8sR0FBRztBQUFBLE1BQ1YsT0FBTyxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsRUFHL0IsSUFBSSxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxJQUNBLGFBQWEsUUFBUSxLQUFLLGVBQWU7QUFBQSxJQUN6QztBQUFBLElBQ0EsTUFBVztBQUFBLElBQ1gsTUFBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLElBQUksaUJBQWlCLFdBQVcsVUFBVSxHQUFHO0FBQUEsSUFDM0MsT0FBTyxFQUFFLE1BQU0sV0FBVztBQUFBLEVBQzVCO0FBQUEsRUFDQSxJQUFJLGFBQWEsVUFBVSxJQUFJO0FBQUEsRUFDL0IsSUFBSSxhQUFhLFdBQVcsVUFBVSxtQkFBbUIsV0FBVyxNQUFNLEdBQUc7QUFBQSxJQUMzRSxhQUFhLE9BQU8sU0FBUyxFQUFFO0FBQUEsRUFDakM7QUFBQSxFQUNBLFdBQVcsU0FBUyxJQUFJO0FBQUEsRUFDeEIsT0FBTyxFQUFFLE1BQU0sV0FBVyxVQUFVLEdBQUcsV0FBVztBQUFBO0FBRXBELFNBQVMsZ0JBQWdCLENBQUMsU0FBUyxlQUFlLHFCQUFxQixVQUFVLFNBQVMsT0FBTyxTQUFTLFlBQVksV0FBVSwyQkFBMkIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLGtCQUFrQixrQkFBa0IsYUFBYSxVQUFVLDRCQUE0QixxQkFBcUI7QUFBQSxFQUNqVyxJQUFJLGVBQWUsc0JBQXNCLGNBQWMsb0JBQW9CLEVBQUUsSUFBSSxvQkFBb0IsR0FBRyxRQUFRLG9CQUFvQixHQUFHLE9BQVk7QUFBQSxFQUNuSixJQUFJLGFBQWEsUUFBUSxVQUFVLE1BQU0sUUFBUTtBQUFBLEVBQ2pELElBQUksVUFBVSxRQUFRLFVBQVUsU0FBUTtBQUFBLEVBQ3hDLElBQUk7QUFBQSxFQUNKLElBQUksb0JBQW9CLE1BQU0sUUFBUTtBQUFBLElBQ3BDLElBQUksYUFBYSxPQUFPLEtBQUssTUFBTSxNQUFNLEVBQUU7QUFBQSxJQUMzQyxTQUFTLFFBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLE9BQU8sVUFBVTtBQUFBLEVBQzdELEVBQU8sU0FBSSx1QkFBdUIsY0FBYyxvQkFBb0IsRUFBRSxHQUFHO0FBQUEsSUFDdkUsSUFBSSxhQUFhLG9CQUFvQjtBQUFBLElBQ3JDLFNBQVMsUUFBUSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sT0FBTyxVQUFVLElBQUk7QUFBQSxFQUNqRTtBQUFBLEVBQ0EsSUFBSSxlQUFlLHNCQUFzQixvQkFBb0IsR0FBRyxhQUFrQjtBQUFBLEVBQ2xGLElBQUkseUJBQXlCLGdCQUFnQixnQkFBZ0I7QUFBQSxFQUM3RCxJQUFJLDJCQUEyQjtBQUFBLElBQzdCO0FBQUEsSUFDQSxlQUFlLE1BQU0sUUFBUSxJQUFJLFVBQVUsQ0FBQztBQUFBLElBQzVDO0FBQUEsSUFDQSxZQUFZLFFBQVEsR0FBRztBQUFBLE9BQ3BCO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLFVBQVUsZ0JBQWdCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQztBQUFBLEVBQzlELElBQUksWUFBWSxRQUFRLElBQUksQ0FBQyxPQUFPLFVBQVU7QUFBQSxJQUM1QyxNQUFNLFVBQVU7QUFBQSxJQUNoQixJQUFJLGtCQUFrQjtBQUFBLElBQ3RCLElBQUksVUFBVSxRQUFRLFFBQVEsUUFBUTtBQUFBLE1BQ3BDLGtCQUFrQjtBQUFBLElBQ3BCLEVBQU8sU0FBSSxNQUFNLE1BQU07QUFBQSxNQUNyQixrQkFBa0I7QUFBQSxJQUNwQixFQUFPLFNBQUksQ0FBQywyQkFBMkIsS0FBSyxHQUFHO0FBQUEsTUFDN0Msa0JBQWtCO0FBQUEsSUFDcEIsRUFBTyxTQUFJLGtCQUFrQjtBQUFBLE1BQzNCLGtCQUFrQiwyQkFDaEIsT0FDQSxNQUFNLFlBQ04sTUFBTSxNQUNSO0FBQUEsSUFDRixFQUFPLFNBQUksWUFBWSxNQUFNLFlBQVksTUFBTSxRQUFRLFFBQVEsS0FBSyxHQUFHO0FBQUEsTUFDckUsa0JBQWtCO0FBQUEsSUFDcEI7QUFBQSxJQUNBLElBQUksb0JBQW9CLE1BQU07QUFBQSxNQUM1QixPQUFPLHFCQUNMLHFCQUNBLFVBQ0EsU0FDQSxTQUNBLE9BQ0EsMkJBQ0EsZUFDQSxlQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSwwQkFBMEIseUJBQXlCLFFBRXJELDBCQUEwQixXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsV0FBVyxRQUFRLFVBQ2pHLFdBQVcsV0FBVyxRQUFRLFVBQVUsbUJBQW1CLE1BQU0sUUFBUSxRQUFRLEtBQUs7QUFBQSxJQUV4RixJQUFJLHVCQUF1QjtBQUFBLFNBQ3RCO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksYUFBYSx1QkFBdUIsT0FBTyxvQkFBb0I7QUFBQSxJQUNuRSxPQUFPLHFCQUNMLHFCQUNBLFVBQ0EsU0FDQSxTQUNBLE9BQ0EsMkJBQ0EsZUFDQSxZQUNBLG9CQUNGO0FBQUEsR0FDRDtBQUFBLEVBQ0QsSUFBSSx1QkFBdUIsQ0FBQztBQUFBLEVBQzVCLGlCQUFpQixRQUFRLENBQUMsR0FBRyxRQUFRO0FBQUEsSUFDbkMsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxPQUFPLEVBQUUsT0FBTyxLQUFLLDBCQUEwQixJQUFJLEdBQUcsR0FBRztBQUFBLE1BQzVHO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxVQUFVLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFBQSxJQUNwQyxJQUFJLG1CQUFtQixXQUFXLFFBQVEsVUFBVSxVQUFVLFFBQVEsU0FBYztBQUFBLElBQ3BGLElBQUksaUJBQWlCLFlBQVksYUFBYSxFQUFFLE1BQU0sUUFBUTtBQUFBLElBQzlELElBQUksQ0FBQyxnQkFBZ0I7QUFBQSxNQUNuQixJQUFJLDhCQUE4QixrQkFBa0I7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLHFCQUFxQixLQUFLO0FBQUEsUUFDeEI7QUFBQSxRQUNBLFNBQVMsRUFBRTtBQUFBLFFBQ1gsTUFBTSxFQUFFO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsTUFDRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksaUJBQWlCLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLGVBQWUsZUFBZSxnQkFBZ0IsRUFBRSxJQUFJO0FBQUEsSUFDeEQsSUFBSSxrQkFBa0IsSUFBSTtBQUFBLElBQzFCLElBQUksZUFBZSx3QkFDakIsU0FDQSxFQUFFLE1BQ0YsZ0JBQWdCLE1BQ2xCO0FBQUEsSUFDQSxJQUFJLG1CQUFtQjtBQUFBLElBQ3ZCLElBQUksc0JBQXNCLElBQUksR0FBRyxHQUFHO0FBQUEsTUFDbEMsc0JBQXNCLE9BQU8sR0FBRztBQUFBLE1BQ2hDLG1CQUFtQiwrQkFDakIscUJBQ0EsVUFDQSxjQUNBLGdCQUNBLGNBQ0EsMkJBQ0EsYUFDRjtBQUFBLElBQ0YsRUFBTyxTQUFJLGtCQUFrQjtBQUFBLE1BQzNCLElBQUksd0JBQXdCO0FBQUEsUUFDMUIsbUJBQW1CLCtCQUNqQixxQkFDQSxVQUNBLGNBQ0EsZ0JBQ0EsY0FDQSwyQkFDQSxhQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsRUFBTztBQUFBLE1BQ0wsSUFBSSx1QkFBdUI7QUFBQSxXQUN0QjtBQUFBLFFBQ0gseUJBQXlCLHlCQUF5QixRQUFRO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLElBQUksdUJBQXVCLGNBQWMsb0JBQW9CLEdBQUc7QUFBQSxRQUM5RCxtQkFBbUIsK0JBQ2pCLHFCQUNBLFVBQ0EsY0FDQSxnQkFDQSxjQUNBLDJCQUNBLGVBQ0Esb0JBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQSxJQUVGLElBQUksa0JBQWtCO0FBQUEsTUFDcEIscUJBQXFCLEtBQUs7QUFBQSxRQUN4QjtBQUFBLFFBQ0EsU0FBUyxFQUFFO0FBQUEsUUFDWCxNQUFNLEVBQUU7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxNQUNkLENBQUM7QUFBQSxJQUNIO0FBQUEsR0FDRDtBQUFBLEVBQ0QsT0FBTyxFQUFFLFdBQVcscUJBQXFCO0FBQUE7QUFFM0MsU0FBUywwQkFBMEIsQ0FBQyxPQUFPO0FBQUEsRUFDekMsT0FBTyxNQUFNLFVBQVUsUUFBUSxNQUFNLGNBQWMsUUFBUSxNQUFNLFdBQVcsU0FBUztBQUFBO0FBRXZGLFNBQVMsMEJBQTBCLENBQUMsT0FBTyxZQUFZLFFBQVE7QUFBQSxFQUM3RCxJQUFJLE1BQU0sTUFBTTtBQUFBLElBQ2QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksQ0FBQywyQkFBMkIsS0FBSyxHQUFHO0FBQUEsSUFDdEMsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksVUFBVSxjQUFjLFFBQVEsTUFBTSxNQUFNO0FBQUEsRUFDaEQsSUFBSSxXQUFXLFVBQVUsUUFBUSxPQUFPLE1BQU0sUUFBYTtBQUFBLEVBQzNELElBQUksQ0FBQyxXQUFXLFVBQVU7QUFBQSxJQUN4QixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsSUFBSSxPQUFPLE1BQU0sV0FBVyxjQUFjLE1BQU0sT0FBTyxZQUFZLE1BQU07QUFBQSxJQUN2RSxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUFBO0FBRXRCLFNBQVMsV0FBVyxDQUFDLG1CQUFtQixjQUFjLE9BQU87QUFBQSxFQUMzRCxJQUFJLFFBRUYsQ0FBQyxnQkFDRCxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU07QUFBQSxFQUV4QyxJQUFJLGdCQUFnQixDQUFDLGtCQUFrQixlQUFlLE1BQU0sTUFBTSxFQUFFO0FBQUEsRUFDcEUsT0FBTyxTQUFTO0FBQUE7QUFFbEIsU0FBUyxrQkFBa0IsQ0FBQyxjQUFjLE9BQU87QUFBQSxFQUMvQyxJQUFJLGNBQWMsYUFBYSxNQUFNO0FBQUEsRUFDckMsT0FFRSxhQUFhLGFBQWEsTUFBTSxZQUVoQyxlQUFlLFFBQVEsWUFBWSxTQUFTLEdBQUcsS0FBSyxhQUFhLE9BQU8sU0FBUyxNQUFNLE9BQU87QUFBQTtBQUdsRyxTQUFTLHNCQUFzQixDQUFDLGFBQWEsS0FBSztBQUFBLEVBQ2hELElBQUksWUFBWSxNQUFNLGtCQUFrQjtBQUFBLElBQ3RDLElBQUksY0FBYyxZQUFZLE1BQU0saUJBQWlCLEdBQUc7QUFBQSxJQUN4RCxJQUFJLE9BQU8sZ0JBQWdCLFdBQVc7QUFBQSxNQUNwQyxPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sSUFBSTtBQUFBO0FBRWIsU0FBUyxlQUFlLENBQUMsU0FBUyxVQUFVLGFBQWEsVUFBVSxxQkFBcUIsdUJBQXVCO0FBQUEsRUFDN0csSUFBSTtBQUFBLEVBQ0osSUFBSSxTQUFTO0FBQUEsSUFDWCxJQUFJLFFBQVEsU0FBUztBQUFBLElBQ3JCLFVBQ0UsT0FDQSxvREFBb0QsU0FDdEQ7QUFBQSxJQUNBLElBQUksQ0FBQyxNQUFNLFVBQVU7QUFBQSxNQUNuQixNQUFNLFdBQVcsQ0FBQztBQUFBLElBQ3BCO0FBQUEsSUFDQSxrQkFBa0IsTUFBTTtBQUFBLEVBQzFCLEVBQU87QUFBQSxJQUNMLGtCQUFrQjtBQUFBO0FBQUEsRUFFcEIsSUFBSSxpQkFBaUIsQ0FBQztBQUFBLEVBQ3RCLElBQUksbUJBQW1CLENBQUM7QUFBQSxFQUN4QixTQUFTLFFBQVEsQ0FBQyxhQUFhO0FBQUEsSUFDN0IsSUFBSSxnQkFBZ0IsZ0JBQWdCLEtBQ2xDLENBQUMsbUJBQW1CLFlBQVksVUFBVSxjQUFjLENBQzFEO0FBQUEsSUFDQSxJQUFJLGVBQWU7QUFBQSxNQUNqQixpQkFBaUIsS0FBSyxFQUFFLGVBQWUsU0FBUyxDQUFDO0FBQUEsSUFDbkQsRUFBTztBQUFBLE1BQ0wsZUFBZSxLQUFLLFFBQVE7QUFBQTtBQUFBLEdBRS9CO0FBQUEsRUFDRCxJQUFJLGVBQWUsU0FBUyxHQUFHO0FBQUEsSUFDN0IsSUFBSSxZQUFZLDBCQUNkLGdCQUNBLHFCQUNBLENBQUMsV0FBVyxLQUFLLFNBQVMsT0FBTyxpQkFBaUIsVUFBVSxHQUFHLENBQUMsR0FDaEUsUUFDRjtBQUFBLElBQ0EsZ0JBQWdCLEtBQUssR0FBRyxTQUFTO0FBQUEsRUFDbkM7QUFBQSxFQUNBLElBQUkseUJBQXlCLGlCQUFpQixTQUFTLEdBQUc7QUFBQSxJQUN4RCxTQUFTLElBQUksRUFBRyxJQUFJLGlCQUFpQixRQUFRLEtBQUs7QUFBQSxNQUNoRCxNQUFNLGVBQWUsYUFBYSxpQkFBaUI7QUFBQSxNQUNuRCxJQUFJLHFCQUFxQjtBQUFBLE1BQ3pCLEtBQUssaUJBQWlCLDBCQUNwQixDQUFDLFFBQVEsR0FDVCxxQkFDQSxDQUFDLEdBRUQsQ0FBQyxHQUVELElBQ0Y7QUFBQSxNQUNBLE9BQU8sT0FBTyxvQkFBb0I7QUFBQSxRQUNoQyxTQUFTLGNBQWMsVUFBVSxjQUFjLFVBQVUsbUJBQW1CO0FBQUEsUUFDNUUsY0FBYyxjQUFjLGVBQWUsY0FBYyxlQUFlLG1CQUFtQjtBQUFBLFFBQzNGLHdCQUF3QixjQUFjLHlCQUF5QixjQUFjLHlCQUF5QixtQkFBbUI7QUFBQSxNQUMzSCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQTtBQUVGLFNBQVMsV0FBVyxDQUFDLFVBQVUsZUFBZTtBQUFBLEVBQzVDLElBQUksUUFBUSxZQUFZLFFBQVEsaUJBQWlCLFNBQVMsT0FBTyxjQUFjLElBQUk7QUFBQSxJQUNqRixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsSUFBSSxFQUFFLFNBQVMsVUFBVSxjQUFjLFNBQVMsU0FBUyxTQUFTLGNBQWMsUUFBUSxTQUFTLGtCQUFrQixjQUFjLGdCQUFnQjtBQUFBLElBQy9JLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxLQUFLLENBQUMsU0FBUyxZQUFZLFNBQVMsU0FBUyxXQUFXLE9BQU8sQ0FBQyxjQUFjLFlBQVksY0FBYyxTQUFTLFdBQVcsSUFBSTtBQUFBLElBQzlILE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPLFNBQVMsU0FBUyxNQUN2QixDQUFDLFFBQVEsTUFBTSxjQUFjLFVBQVUsS0FBSyxDQUFDLFdBQVcsWUFBWSxRQUFRLE1BQU0sQ0FBQyxDQUNyRjtBQUFBO0FBRUYsSUFBSSx5Q0FBeUMsSUFBSTtBQUNqRCxJQUFJLHdCQUF3QjtBQUFBLEVBQzFCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLG9CQUFvQjtBQUFBLE1BQ2hCO0FBQUEsRUFDSixJQUFJLGdCQUFnQixTQUFTLE1BQU07QUFBQSxFQUNuQyxVQUFVLGVBQWUsNEJBQTRCO0FBQUEsRUFDckQsSUFBSSxDQUFDLGNBQWMsUUFBUSxPQUFPLGNBQWMsU0FBUyxVQUFVO0FBQUEsSUFDakU7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLFNBQVMsY0FBYyxLQUFLO0FBQUEsRUFDaEMsSUFBSSxDQUFDLFFBQVE7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxRQUFRLHVCQUF1QixJQUFJLGFBQWE7QUFBQSxFQUNwRCxJQUFJLENBQUMsT0FBTztBQUFBLElBQ1YsUUFBUSxDQUFDO0FBQUEsSUFDVCx1QkFBdUIsSUFBSSxlQUFlLEtBQUs7QUFBQSxFQUNqRDtBQUFBLEVBQ0EsSUFBSSxnQkFBZ0IsTUFBTTtBQUFBLEVBQzFCLElBQUksZUFBZTtBQUFBLElBQ2pCLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxJQUFJLG1CQUFtQixZQUFZO0FBQUEsSUFDakMsSUFBSSxnQkFBZ0IsZ0NBQWdDLEdBQUc7QUFBQSxJQUN2RCxJQUFJLG1CQUFtQixjQUFjO0FBQUEsSUFDckMsSUFBSSxzQkFBc0IscUJBQTBCLGFBQUssUUFBUTtBQUFBLElBQ2pFLElBQUksZUFBZTtBQUFBLE1BQ2pCLFFBQ0UsQ0FBQyxlQUNELG9CQUFvQixNQUFNLHlFQUM1QjtBQUFBLE1BQ0EsTUFBTSxPQUFPLFFBQVEsUUFBUTtBQUFBLElBQy9CLEVBQU8sU0FBSSxxQkFBcUI7QUFBQSxNQUM5QixRQUNFLE9BQ0EsVUFBVSxjQUFjLDhCQUE4QixrREFDeEQ7QUFBQSxJQUNGLEVBQU87QUFBQSxNQUNMLElBQUksUUFBUSxNQUFNLE9BQU87QUFBQSxNQUN6QixJQUFJLFNBQVMsTUFBTTtBQUFBLFFBQ2pCLE9BQU8sT0FBTyxlQUFlLEdBQUcsTUFBTSxNQUFNLENBQUM7QUFBQSxRQUM3QyxPQUFPLE9BQU8sZUFBZSxvQkFBb0IsYUFBYSxDQUFDO0FBQUEsTUFDakU7QUFBQTtBQUFBLElBRUYsSUFBSSxPQUFPLGNBQWMsU0FBUyxVQUFVO0FBQUEsTUFDMUMsY0FBYyxLQUFLLE9BQVk7QUFBQSxNQUMvQixJQUFJLE9BQU8sT0FBTyxjQUFjLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxVQUFlLFNBQUMsR0FBRztBQUFBLFFBQ3hFLGNBQWMsT0FBWTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBLEtBQ0M7QUFBQSxFQUNILE1BQU0sT0FBTztBQUFBLEVBQ2IsT0FBTztBQUFBO0FBRVQsSUFBSSx5Q0FBeUMsSUFBSTtBQUNqRCxTQUFTLGFBQWEsQ0FBQyxPQUFPLE1BQU0sVUFBVSxxQkFBcUIsMkJBQTJCO0FBQUEsRUFDNUYsSUFBSSxnQkFBZ0IsU0FBUyxNQUFNO0FBQUEsRUFDbkMsVUFBVSxlQUFlLDRCQUE0QjtBQUFBLEVBQ3JELElBQUksQ0FBQyxNQUFNLE1BQU07QUFBQSxJQUNmLE9BQU87QUFBQSxNQUNMLGtCQUF1QjtBQUFBLE1BQ3ZCLG9CQUF5QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxPQUFPLE1BQU0sU0FBUyxZQUFZO0FBQUEsSUFDcEMsSUFBSSxnQkFBZ0IsdUJBQXVCLElBQUksYUFBYTtBQUFBLElBQzVELElBQUksZUFBZTtBQUFBLE1BQ2pCLE9BQU87QUFBQSxRQUNMLGtCQUFrQjtBQUFBLFFBQ2xCLG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxxQkFBcUIsWUFBWTtBQUFBLE1BQ25DLFVBQ0UsT0FBTyxNQUFNLFNBQVMsWUFDdEIsOEJBQ0Y7QUFBQSxNQUNBLElBQUksWUFBWSxNQUFNLE1BQU0sS0FBSztBQUFBLE1BQ2pDLElBQUksZUFBZSxDQUFDO0FBQUEsTUFDcEIsU0FBUyxxQkFBcUIsV0FBVztBQUFBLFFBQ3ZDLElBQUksWUFBWSxVQUFVO0FBQUEsUUFDMUIsSUFBSSxjQUFtQixXQUFHO0FBQUEsVUFDeEI7QUFBQSxRQUNGO0FBQUEsUUFDQSxJQUFJLGdCQUFnQixrQ0FBa0MsaUJBQWlCO0FBQUEsUUFDdkUsSUFBSSxtQkFBbUIsY0FBYztBQUFBLFFBQ3JDLElBQUksc0JBQXNCLHFCQUEwQixhQUVwRCxzQkFBc0I7QUFBQSxRQUN0QixJQUFJLGVBQWU7QUFBQSxVQUNqQixRQUNFLENBQUMsZUFDRCxvQkFBb0Isb0JBQW9CLHdHQUMxQztBQUFBLFFBQ0YsRUFBTyxTQUFJLHFCQUFxQjtBQUFBLFVBQzlCLFFBQ0UsQ0FBQyxxQkFDRCxVQUFVLGNBQWMsOEJBQThCLDBIQUEwSCxxQ0FDbEw7QUFBQSxRQUNGLEVBQU87QUFBQSxVQUNMLGFBQWEscUJBQXFCO0FBQUE7QUFBQSxNQUV0QztBQUFBLE1BQ0EsT0FBTyxPQUFPLGVBQWUsWUFBWTtBQUFBLE1BQ3pDLE9BQU8sT0FBTyxlQUFlO0FBQUEsV0FJeEIsb0JBQW9CLGFBQWE7QUFBQSxRQUNwQyxNQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsT0FDQTtBQUFBLElBQ0gsdUJBQXVCLElBQUksZUFBZSxpQkFBaUI7QUFBQSxJQUMzRCxrQkFBa0IsTUFBTSxNQUFNLEVBQzdCO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDTCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxJQUN0QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksV0FBVyxPQUFPLEtBQUssTUFBTSxJQUFJO0FBQUEsRUFDckMsSUFBSSx1QkFBdUIsQ0FBQztBQUFBLEVBQzVCLElBQUkscUJBQTBCO0FBQUEsRUFDOUIsU0FBUyxPQUFPLFVBQVU7QUFBQSxJQUN4QixJQUFJLDZCQUE2QiwwQkFBMEIsU0FBUyxHQUFHLEdBQUc7QUFBQSxNQUN4RTtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksVUFBVSxzQkFBc0I7QUFBQSxNQUNsQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxvQkFBb0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsSUFDRCxJQUFJLFNBQVM7QUFBQSxNQUNYLHFCQUFxQixLQUFLLE9BQU87QUFBQSxNQUNqQyxJQUFJLFFBQVEsTUFBTTtBQUFBLFFBQ2hCLHFCQUFxQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksbUJBQW1CLHFCQUFxQixTQUFTLElBQUksUUFBUSxJQUFJLG9CQUFvQixFQUFFLEtBQUssTUFBTSxFQUNyRyxJQUFTO0FBQUEsRUFDVixrQkFBa0IsTUFBTSxNQUFNLEVBQzdCO0FBQUEsRUFDRCxvQkFBb0IsTUFBTSxNQUFNLEVBQy9CO0FBQUEsRUFDRCxPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUE7QUFtQkYsZUFBZSxtQkFBbUIsQ0FBQyxNQUFNO0FBQUEsRUFDdkMsSUFBSSxnQkFBZ0IsS0FBSyxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVTtBQUFBLEVBQzNELElBQUksZUFBZSxDQUFDO0FBQUEsRUFDcEIsSUFBSSxVQUFVLE1BQU0sUUFBUSxJQUFJLGNBQWMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQ3JFLFFBQVEsUUFBUSxDQUFDLFFBQVEsTUFBTTtBQUFBLElBQzdCLGFBQWEsY0FBYyxHQUFHLE1BQU0sTUFBTTtBQUFBLEdBQzNDO0FBQUEsRUFDRCxPQUFPO0FBQUE7QUFFVCxlQUFlLGlDQUFpQyxDQUFDLE1BQU07QUFBQSxFQUNyRCxJQUFJLENBQUMsS0FBSyxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxVQUFVLEdBQUc7QUFBQSxJQUNqRCxPQUFPLG9CQUFvQixJQUFJO0FBQUEsRUFDakM7QUFBQSxFQUNBLE9BQU8sNEJBQTRCLE1BQU0sTUFBTSxvQkFBb0IsSUFBSSxDQUFDO0FBQUE7QUFjMUUsU0FBUywyQkFBMkIsQ0FBQyxNQUFNLFNBQVM7QUFBQSxFQUNsRCxPQUFPLHNCQUNMLE1BQ0EsU0FDQSxDQUFDLE1BQU0sR0FFUCx1QkFDQSxZQUNGO0FBQUEsRUFDQSxTQUFTLFlBQVksQ0FBQyxPQUFPLFNBQVMsWUFBWTtBQUFBLElBQ2hELElBQUksWUFBWTtBQUFBLE1BQ2QsT0FBTyxRQUFRLFFBQ2IsT0FBTyxPQUFPLFdBQVcsT0FBTztBQUFBLFNBQzdCLFVBQVUsRUFBRSxNQUFNLFNBQVMsUUFBUSxNQUFNO0FBQUEsTUFDNUMsQ0FBQyxDQUNIO0FBQUEsSUFDRixFQUFPO0FBQUEsTUFDTCxNQUFNLFlBQVk7QUFBQSxNQUNsQixJQUFJLGlCQUFpQixLQUFLLElBRXhCLEtBQUssSUFDSCxRQUFRLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxPQUFPLE9BQU8sR0FDL0MsQ0FDRixHQUVBLEtBQUssSUFDSCxRQUFRLFVBQVUsQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsR0FDdkQsQ0FDRixDQUNGO0FBQUEsTUFDQSxJQUFJLGtCQUFrQixvQkFDcEIsU0FDQSxRQUFRLGdCQUFnQixNQUFNLEVBQ2hDLEVBQUUsTUFBTTtBQUFBLE1BQ1IsT0FBTyxRQUFRLFFBQVE7QUFBQSxTQUNwQixrQkFBa0IsRUFBRSxNQUFNLFNBQVMsUUFBUSxNQUFNO0FBQUEsTUFDcEQsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUlQLGVBQWUscUJBQXFCLENBQUMsTUFBTSxTQUFTLGVBQWUsVUFBVSxjQUFjO0FBQUEsRUFDekYsTUFBTSxTQUFTLFNBQVMsUUFBUSxTQUFTLHFCQUFxQjtBQUFBLEVBQzlELElBQUksU0FBUyxRQUFRLFFBQ25CLENBQUMsTUFBTSxFQUFFLE1BQU0sYUFBYSxFQUFFLE1BQU0sV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEY7QUFBQSxFQUNBLElBQUksU0FBUyxNQUFNLG9CQUNqQjtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLEdBQ0EsUUFDQSxTQUNBLGVBQ0EsVUFDQSxZQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxlQUFlLG1CQUFtQixDQUFDLE1BQU0sYUFBYSxTQUFTLGVBQWUsVUFBVSxjQUFjLE1BQU0sR0FBRztBQUFBLEVBQzdHLE1BQU0sWUFBWTtBQUFBLEVBQ2xCLElBQUksUUFBUSxPQUFPLFNBQVM7QUFBQSxJQUMxQixNQUFNLFFBQVEsT0FBTyxVQUFVLElBQUksTUFBTSxvQkFBb0IsUUFBUSxVQUFVLFFBQVEsS0FBSztBQUFBLEVBQzlGO0FBQUEsRUFDQSxJQUFJLFFBQVEsWUFBWTtBQUFBLEVBQ3hCLElBQUksQ0FBQyxPQUFPO0FBQUEsSUFDVixJQUFJLFNBQVMsTUFBTSxRQUFRO0FBQUEsSUFDM0IsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLEtBQUssU0FBUyxjQUFjO0FBQUEsRUFDNUIsSUFBSTtBQUFBLEVBQ0osSUFBSSxPQUFPLFlBQVk7QUFBQSxJQUNyQixJQUFJLFlBQVk7QUFBQSxNQUNkLE1BQU0sSUFBSSxNQUFNLGdEQUFnRDtBQUFBLElBQ2xFO0FBQUEsSUFDQSxJQUFJO0FBQUEsTUFDRixJQUFJLFNBQVMsTUFBTSxvQkFDakIsTUFDQSxhQUNBLFNBQ0EsZUFDQSxVQUNBLGNBQ0EsTUFBTSxDQUNSO0FBQUEsTUFDQSxhQUFhLEVBQUUsT0FBTyxPQUFPO0FBQUEsTUFDN0IsT0FBTyxXQUFXO0FBQUEsTUFDbEIsT0FBTyxPQUFPO0FBQUEsTUFDZCxhQUFhLEVBQUUsT0FBTyxNQUFNLGFBQWEsT0FBTyxTQUFTLFVBQVUsRUFBRTtBQUFBLE1BQ3JFLE9BQU8sV0FBVztBQUFBO0FBQUE7QUFBQSxFQUd0QixJQUFJO0FBQUEsSUFDRixJQUFJLFFBQVEsTUFBTSxXQUFXLE1BQU0sSUFBSTtBQUFBLElBQ3ZDLElBQUksU0FBUyxTQUFTLE9BQU8sY0FBYyxLQUFLLElBQVM7QUFBQSxJQUN6RCxJQUFJLFNBQVMsTUFBTSxHQUFHO0FBQUEsTUFDcEIsT0FBTztBQUFBLElBQ1QsRUFBTyxTQUFJLFlBQVk7QUFBQSxNQUNyQixPQUFPLFVBQVUsV0FBVztBQUFBLElBQzlCLEVBQU87QUFBQSxNQUNMLGFBQWEsRUFBRSxPQUFPLE1BQU0sS0FBSyxFQUFFO0FBQUEsTUFDbkMsT0FBTyxXQUFXO0FBQUE7QUFBQSxJQUVwQixPQUFPLE9BQU87QUFBQSxJQUNkLElBQUksV0FBVyxNQUFNLGFBQWEsT0FBTyxTQUFTLFVBQVU7QUFBQSxJQUM1RCxPQUFPO0FBQUE7QUFBQTtBQUdYLFNBQVMsZ0NBQWdDLENBQUMscUJBQXFCLFVBQVUsU0FBUyxPQUFPLDJCQUEyQjtBQUFBLEVBQ2xILElBQUksd0JBQXdCLHNCQUFzQjtBQUFBLElBQ2hELEtBQUs7QUFBQSxJQUNMLE9BQU8sTUFBTTtBQUFBLElBQ2I7QUFBQSxJQUNBLG9CQUFvQjtBQUFBLEVBQ3RCLENBQUM7QUFBQSxFQUNELElBQUksb0JBQW9CLGNBQ3RCLE1BQU0sT0FDTixpQkFBaUIsUUFBUSxNQUFNLElBQUksV0FBVyxVQUM5QyxVQUNBLHFCQUNBLHlCQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixPQUFPLGtCQUFrQjtBQUFBLElBQ3pCLFNBQVMsa0JBQWtCO0FBQUEsRUFDN0I7QUFBQTtBQUVGLFNBQVMsb0JBQW9CLENBQUMscUJBQXFCLFVBQVUsU0FBUyxrQkFBa0IsT0FBTywyQkFBMkIsZUFBZSxZQUFZLGdDQUFnQyxNQUFNO0FBQUEsRUFDekwsSUFBSSxnQkFBZ0I7QUFBQSxFQUNwQixJQUFJLGdCQUFnQixpQ0FDbEIscUJBQ0EsVUFDQSxTQUNBLE9BQ0EseUJBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxPQUNGO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSwwQkFBMEIsQ0FBQyx5QkFBeUI7QUFBQSxNQUNsRCxnQkFBZ0I7QUFBQSxNQUNoQixJQUFJLENBQUMsK0JBQStCO0FBQUEsUUFDbEMsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLElBQUksT0FBTyw0QkFBNEIsV0FBVztBQUFBLFFBQ2hELE9BQU8sdUJBQXVCLE9BQU87QUFBQSxhQUNoQztBQUFBLFVBQ0g7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxPQUFPLHVCQUF1QixPQUFPLDZCQUE2QjtBQUFBO0FBQUEsSUFFcEUsT0FBTyxDQUFDLGlCQUFpQjtBQUFBLE1BQ3ZCLE1BQU0sTUFBTSxRQUFRLGVBQWUsTUFBTTtBQUFBLE1BQ3pDLElBQUksY0FBYyxpQkFBaUIsY0FBYyxtQkFBbUIsQ0FBQyxpQkFBaUIsUUFBUSxNQUFNLE1BQU0sUUFBUTtBQUFBLE1BQ2xILElBQUksd0JBQXdCLGNBQWMsV0FBVyxTQUFTLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFBQSxNQUMvRSxJQUFJLGdCQUFnQixpQkFBaUIsUUFBUSxNQUFNLEtBQUssQ0FBQyx3QkFBd0I7QUFBQSxRQUMvRSxPQUFPLG1CQUFtQjtBQUFBLFVBQ3hCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLG9CQUFvQixlQUFlO0FBQUEsVUFDbkMsa0JBQWtCLGVBQWU7QUFBQSxVQUNqQztBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxPQUFPLFFBQVEsUUFBUSxFQUFFLE1BQU0sUUFBbUIsUUFBYSxVQUFFLENBQUM7QUFBQTtBQUFBLEVBRXRFO0FBQUE7QUFFRixTQUFTLDhCQUE4QixDQUFDLHFCQUFxQixVQUFVLFNBQVMsU0FBUyxhQUFhLDJCQUEyQixlQUFlLHVCQUF1QixNQUFNO0FBQUEsRUFDM0ssT0FBTyxRQUFRLElBQUksQ0FBQyxVQUFVO0FBQUEsSUFDNUIsSUFBSSxNQUFNLE1BQU0sT0FBTyxZQUFZLE1BQU0sSUFBSTtBQUFBLE1BQzNDLE9BQU87QUFBQSxXQUNGO0FBQUEsUUFDSCxZQUFZO0FBQUEsUUFDWiwrQkFBK0I7QUFBQSxRQUMvQiw0QkFBNEIsTUFBTTtBQUFBLFFBQ2xDLGVBQWUsaUNBQ2IscUJBQ0EsVUFDQSxTQUNBLE9BQ0EseUJBQ0Y7QUFBQSxRQUNBLFNBQVMsTUFBTSxRQUFRLFFBQVEsRUFBRSxNQUFNLFFBQVEsUUFBYSxVQUFFLENBQUM7QUFBQSxNQUNqRTtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU8scUJBQ0wscUJBQ0EsVUFDQSxTQUNBLGdCQUFnQixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FDaEQsT0FDQSwyQkFDQSxlQUNBLE1BQ0Esb0JBQ0Y7QUFBQSxHQUNEO0FBQUE7QUFFSCxlQUFlLG9CQUFvQixDQUFDLGtCQUFrQixTQUFTLFNBQVMsWUFBWSxlQUFlLGlCQUFpQjtBQUFBLEVBQ2xILElBQUksUUFBUSxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsVUFBVSxHQUFHO0FBQUEsSUFDcEQsTUFBTSxRQUFRLElBQUksUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsVUFBVSxDQUFDO0FBQUEsRUFDbkU7QUFBQSxFQUNBLElBQUksbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBLGtCQUFrQixnQkFBZ0IsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQUEsSUFDbEUsUUFBUSxRQUFRLEdBQUc7QUFBQSxJQUNuQixTQUFTO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksc0JBQXNCLGtCQUFrQixNQUFNO0FBQUEsSUFDaEQsTUFBTSxJQUFJLE1BQ1IsbVBBQ0Y7QUFBQSxNQUNFLENBQUMsT0FBTztBQUFBLElBQ1YsSUFBSSx3QkFBd0I7QUFBQSxJQUM1QixPQUFPLDRCQUE0Qix1QkFBdUIsTUFBTTtBQUFBLE1BQzlELE9BQU8sR0FBRztBQUFBLFdBQ0w7QUFBQSxRQUNIO0FBQUEsUUFDQSxxQkFBcUIsTUFBTTtBQUFBLFVBQ3pCLE1BQU0sSUFBSSxNQUNSLGtGQUNGO0FBQUE7QUFBQSxNQUVKLENBQUM7QUFBQSxLQUNGO0FBQUE7QUFBQSxFQUVILElBQUksVUFBVSxNQUFNLGlCQUFpQjtBQUFBLE9BQ2hDO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxFQUNGLENBQUM7QUFBQSxFQUNELElBQUk7QUFBQSxJQUNGLE1BQU0sUUFBUSxJQUNaLFFBQVEsUUFBUSxDQUFDLE1BQU07QUFBQSxNQUNyQixFQUFFLGVBQWU7QUFBQSxNQUNqQixFQUFFLGVBQWU7QUFBQSxJQUNuQixDQUFDLENBQ0g7QUFBQSxJQUNBLE9BQU8sR0FBRztBQUFBLEVBRVosT0FBTztBQUFBO0FBRVQsZUFBZSxrQkFBa0I7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ0M7QUFBQSxFQUNELElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUksV0FBVyxpQkFBaUIsUUFBUSxNQUFNO0FBQUEsRUFDOUMsSUFBSSxPQUFPLFdBQVcsV0FBVztBQUFBLEVBQ2pDLElBQUksYUFBYSxDQUFDLFlBQVk7QUFBQSxJQUM1QixJQUFJO0FBQUEsSUFDSixJQUFJLGVBQWUsSUFBSSxRQUFRLENBQUMsR0FBRyxNQUFNLFNBQVMsQ0FBQztBQUFBLElBQ25ELFdBQVcsTUFBTSxPQUFPO0FBQUEsSUFDeEIsUUFBUSxPQUFPLGlCQUFpQixTQUFTLFFBQVE7QUFBQSxJQUNqRCxJQUFJLGdCQUFnQixDQUFDLFFBQVE7QUFBQSxNQUMzQixJQUFJLE9BQU8sWUFBWSxZQUFZO0FBQUEsUUFDakMsT0FBTyxRQUFRLE9BQ2IsSUFBSSxNQUNGLG9FQUFvRSxtQkFBbUIsTUFBTSxNQUFNLEtBQ3JHLENBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPLFFBQ0w7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0EsUUFBUSxNQUFNO0FBQUEsUUFDZCxTQUFTO0FBQUEsTUFDWCxHQUNBLEdBQUcsUUFBYSxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FDL0I7QUFBQTtBQUFBLElBRUYsSUFBSSxrQkFBa0IsWUFBWTtBQUFBLE1BQ2hDLElBQUk7QUFBQSxRQUNGLElBQUksTUFBTSxPQUFPLGtCQUFrQixnQkFBZ0IsQ0FBQyxRQUFRLGNBQWMsR0FBRyxDQUFDLElBQUksY0FBYztBQUFBLFFBQ2hHLE9BQU8sRUFBRSxNQUFNLFFBQVEsUUFBUSxJQUFJO0FBQUEsUUFDbkMsT0FBTyxHQUFHO0FBQUEsUUFDVixPQUFPLEVBQUUsTUFBTSxTQUFTLFFBQVEsRUFBRTtBQUFBO0FBQUEsT0FFbkM7QUFBQSxJQUNILE9BQU8sUUFBUSxLQUFLLENBQUMsZ0JBQWdCLFlBQVksQ0FBQztBQUFBO0FBQUEsRUFFcEQsSUFBSTtBQUFBLElBQ0YsSUFBSSxVQUFVLFdBQVcsTUFBTSxNQUFNLFNBQVMsTUFBTSxNQUFNO0FBQUEsSUFDMUQsSUFBSSxzQkFBc0Isa0JBQWtCO0FBQUEsTUFDMUMsSUFBSSxTQUFTO0FBQUEsUUFDWCxJQUFJO0FBQUEsUUFDSixLQUFLLFNBQVMsTUFBTSxRQUFRLElBQUk7QUFBQSxVQUk5QixXQUFXLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtBQUFBLFlBQy9CLGVBQWU7QUFBQSxXQUNoQjtBQUFBLFVBRUQ7QUFBQSxVQUNBO0FBQUEsUUFDRixDQUFDO0FBQUEsUUFDRCxJQUFJLGlCQUFzQixXQUFHO0FBQUEsVUFDM0IsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYLEVBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLElBQUksV0FBVyxXQUFXLE1BQU0sTUFBTSxTQUFTLE1BQU0sTUFBTTtBQUFBLFFBQzNELElBQUksVUFBVTtBQUFBLFVBQ1osQ0FBQyxNQUFNLElBQUksTUFBTSxRQUFRLElBQUksQ0FBQyxXQUFXLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLFFBQ3ZFLEVBQU8sU0FBSSxTQUFTLFVBQVU7QUFBQSxVQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUFBLFVBQzdCLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSTtBQUFBLFVBQ2xDLE1BQU0sdUJBQXVCLEtBQUs7QUFBQSxZQUNoQyxRQUFRLFFBQVE7QUFBQSxZQUNoQjtBQUFBLFlBQ0EsU0FBUyxNQUFNLE1BQU07QUFBQSxVQUN2QixDQUFDO0FBQUEsUUFDSCxFQUFPO0FBQUEsVUFDTCxPQUFPLEVBQUUsTUFBTSxRQUFtQixRQUFhLFVBQUU7QUFBQTtBQUFBO0FBQUEsSUFHdkQsRUFBTyxTQUFJLENBQUMsU0FBUztBQUFBLE1BQ25CLElBQUksTUFBTSxJQUFJLElBQUksUUFBUSxHQUFHO0FBQUEsTUFDN0IsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJO0FBQUEsTUFDbEMsTUFBTSx1QkFBdUIsS0FBSztBQUFBLFFBQ2hDO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSCxFQUFPO0FBQUEsTUFDTCxTQUFTLE1BQU0sV0FBVyxPQUFPO0FBQUE7QUFBQSxJQUVuQyxPQUFPLEdBQUc7QUFBQSxJQUNWLE9BQU8sRUFBRSxNQUFNLFNBQXFCLFFBQVEsRUFBRTtBQUFBLFlBQzlDO0FBQUEsSUFDQSxJQUFJLFVBQVU7QUFBQSxNQUNaLFFBQVEsT0FBTyxvQkFBb0IsU0FBUyxRQUFRO0FBQUEsSUFDdEQ7QUFBQTtBQUFBLEVBRUYsT0FBTztBQUFBO0FBRVQsZUFBZSxpQkFBaUIsQ0FBQyxVQUFVO0FBQUEsRUFDekMsSUFBSSxjQUFjLFNBQVMsUUFBUSxJQUFJLGNBQWM7QUFBQSxFQUNyRCxJQUFJLGVBQWUsd0JBQXdCLEtBQUssV0FBVyxHQUFHO0FBQUEsSUFDNUQsT0FBTyxTQUFTLFFBQVEsT0FBTyxPQUFPLFNBQVMsS0FBSztBQUFBLEVBQ3REO0FBQUEsRUFDQSxPQUFPLFNBQVMsS0FBSztBQUFBO0FBRXZCLGVBQWUscUNBQXFDLENBQUMsb0JBQW9CO0FBQUEsRUFDdkUsTUFBTSxRQUFRLFNBQVM7QUFBQSxFQUN2QixJQUFJLFdBQVcsTUFBTSxHQUFHO0FBQUEsSUFDdEIsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLE1BQ0YsUUFBUSxNQUFNLGtCQUFrQixNQUFNO0FBQUEsTUFDdEMsT0FBTyxHQUFHO0FBQUEsTUFDVixPQUFPLEVBQUUsTUFBTSxTQUFxQixPQUFPLEVBQUU7QUFBQTtBQUFBLElBRS9DLElBQUksU0FBUyxTQUFxQjtBQUFBLE1BQ2hDLE9BQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU8sSUFBSSxrQkFBa0IsT0FBTyxRQUFRLE9BQU8sWUFBWSxLQUFLO0FBQUEsUUFDcEUsWUFBWSxPQUFPO0FBQUEsUUFDbkIsU0FBUyxPQUFPO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixZQUFZLE9BQU87QUFBQSxNQUNuQixTQUFTLE9BQU87QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksU0FBUyxTQUFxQjtBQUFBLElBQ2hDLElBQUksdUJBQXVCLE1BQU0sR0FBRztBQUFBLE1BQ2xDLElBQUksT0FBTyxnQkFBZ0IsT0FBTztBQUFBLFFBQ2hDLE9BQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE9BQU8sT0FBTztBQUFBLFVBQ2QsWUFBWSxPQUFPLE1BQU07QUFBQSxVQUN6QixTQUFTLE9BQU8sTUFBTSxVQUFVLElBQUksUUFBUSxPQUFPLEtBQUssT0FBTyxJQUFTO0FBQUEsUUFDMUU7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPLElBQUksa0JBQ1QsT0FBTyxNQUFNLFVBQVUsS0FDbEIsV0FDTCxPQUFPLElBQ1Q7QUFBQSxRQUNBLFlBQVkscUJBQXFCLE1BQU0sSUFBSSxPQUFPLFNBQWM7QUFBQSxRQUNoRSxTQUFTLE9BQU8sTUFBTSxVQUFVLElBQUksUUFBUSxPQUFPLEtBQUssT0FBTyxJQUFTO0FBQUEsTUFDMUU7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZLHFCQUFxQixNQUFNLElBQUksT0FBTyxTQUFjO0FBQUEsSUFDbEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLHVCQUF1QixNQUFNLEdBQUc7QUFBQSxJQUNsQyxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNLE9BQU87QUFBQSxNQUNiLFlBQVksT0FBTyxNQUFNO0FBQUEsTUFDekIsU0FBUyxPQUFPLE1BQU0sVUFBVSxJQUFJLFFBQVEsT0FBTyxLQUFLLE9BQU8sSUFBUztBQUFBLElBQzFFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxFQUFFLE1BQU0sUUFBbUIsTUFBTSxPQUFPO0FBQUE7QUFFakQsU0FBUyx3Q0FBd0MsQ0FBQyxVQUFVLFNBQVMsU0FBUyxTQUFTLFVBQVU7QUFBQSxFQUMvRixJQUFJLFlBQVcsU0FBUyxRQUFRLElBQUksVUFBVTtBQUFBLEVBQzlDLFVBQ0UsV0FDQSw0RUFDRjtBQUFBLEVBQ0EsSUFBSSxDQUFDLGNBQWMsU0FBUSxHQUFHO0FBQUEsSUFDNUIsSUFBSSxpQkFBaUIsUUFBUSxNQUMzQixHQUNBLFFBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLE9BQU8sT0FBTyxJQUFJLENBQ3JEO0FBQUEsSUFDQSxZQUFXLFlBQ1QsSUFBSSxJQUFJLFFBQVEsR0FBRyxHQUNuQixnQkFDQSxVQUNBLFNBQ0Y7QUFBQSxJQUNBLFNBQVMsUUFBUSxJQUFJLFlBQVksU0FBUTtBQUFBLEVBQzNDO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLHlCQUF5QixDQUFDLFdBQVUsWUFBWSxVQUFVO0FBQUEsRUFDakUsSUFBSSxjQUFjLFNBQVEsR0FBRztBQUFBLElBQzNCLElBQUkscUJBQXFCO0FBQUEsSUFDekIsSUFBSSxNQUFNLG1CQUFtQixXQUFXLElBQUksSUFBSSxJQUFJLElBQUksV0FBVyxXQUFXLGtCQUFrQixJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFBQSxJQUM5SCxJQUFJLGlCQUFpQixjQUFjLElBQUksVUFBVSxRQUFRLEtBQUs7QUFBQSxJQUM5RCxJQUFJLElBQUksV0FBVyxXQUFXLFVBQVUsZ0JBQWdCO0FBQUEsTUFDdEQsT0FBTyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUk7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMsdUJBQXVCLENBQUMsU0FBUyxXQUFVLFFBQVEsWUFBWTtBQUFBLEVBQ3RFLElBQUksTUFBTSxRQUFRLFVBQVUsa0JBQWtCLFNBQVEsQ0FBQyxFQUFFLFNBQVM7QUFBQSxFQUNsRSxJQUFJLE9BQU8sRUFBRSxPQUFPO0FBQUEsRUFDcEIsSUFBSSxjQUFjLGlCQUFpQixXQUFXLFVBQVUsR0FBRztBQUFBLElBQ3pELE1BQU0sWUFBWSxnQkFBZ0I7QUFBQSxJQUNsQyxLQUFLLFNBQVMsV0FBVyxZQUFZO0FBQUEsSUFDckMsSUFBSSxnQkFBZ0Isb0JBQW9CO0FBQUEsTUFDdEMsS0FBSyxVQUFVLElBQUksUUFBUSxFQUFFLGdCQUFnQixZQUFZLENBQUM7QUFBQSxNQUMxRCxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsSUFBSTtBQUFBLElBQzVDLEVBQU8sU0FBSSxnQkFBZ0IsY0FBYztBQUFBLE1BQ3ZDLEtBQUssT0FBTyxXQUFXO0FBQUEsSUFDekIsRUFBTyxTQUFJLGdCQUFnQix1Q0FBdUMsV0FBVyxVQUFVO0FBQUEsTUFDckYsS0FBSyxPQUFPLDhCQUE4QixXQUFXLFFBQVE7QUFBQSxJQUMvRCxFQUFPO0FBQUEsTUFDTCxLQUFLLE9BQU8sV0FBVztBQUFBO0FBQUEsRUFFM0I7QUFBQSxFQUNBLE9BQU8sSUFBSSxRQUFRLEtBQUssSUFBSTtBQUFBO0FBRTlCLFNBQVMsNkJBQTZCLENBQUMsVUFBVTtBQUFBLEVBQy9DLElBQUksZUFBZSxJQUFJO0FBQUEsRUFDdkIsVUFBVSxLQUFLLFVBQVUsU0FBUyxRQUFRLEdBQUc7QUFBQSxJQUMzQyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxRQUFRLE1BQU0sSUFBSTtBQUFBLEVBQ3pFO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLDZCQUE2QixDQUFDLGNBQWM7QUFBQSxFQUNuRCxJQUFJLFdBQVcsSUFBSTtBQUFBLEVBQ25CLFVBQVUsS0FBSyxVQUFVLGFBQWEsUUFBUSxHQUFHO0FBQUEsSUFDL0MsU0FBUyxPQUFPLEtBQUssS0FBSztBQUFBLEVBQzVCO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLHNCQUFzQixDQUFDLFNBQVMsU0FBUyxxQkFBcUIsa0JBQWtCLE9BQU8sMEJBQTBCLE9BQU87QUFBQSxFQUMvSCxJQUFJLGFBQWEsQ0FBQztBQUFBLEVBQ2xCLElBQUksU0FBUztBQUFBLEVBQ2IsSUFBSTtBQUFBLEVBQ0osSUFBSSxhQUFhO0FBQUEsRUFDakIsSUFBSSxnQkFBZ0IsQ0FBQztBQUFBLEVBQ3JCLElBQUksZUFBZSx1QkFBdUIsY0FBYyxvQkFBb0IsRUFBRSxJQUFJLG9CQUFvQixHQUFHLFFBQWE7QUFBQSxFQUN0SCxRQUFRLFFBQVEsQ0FBQyxVQUFVO0FBQUEsSUFDekIsSUFBSSxFQUFFLE1BQU0sTUFBTSxNQUFNLFVBQVU7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksS0FBSyxNQUFNLE1BQU07QUFBQSxJQUNyQixJQUFJLFNBQVMsUUFBUTtBQUFBLElBQ3JCLFVBQ0UsQ0FBQyxpQkFBaUIsTUFBTSxHQUN4QixxREFDRjtBQUFBLElBQ0EsSUFBSSxjQUFjLE1BQU0sR0FBRztBQUFBLE1BQ3pCLElBQUksUUFBUSxPQUFPO0FBQUEsTUFDbkIsSUFBSSxpQkFBc0IsV0FBRztBQUFBLFFBQzNCLFFBQVE7QUFBQSxRQUNSLGVBQW9CO0FBQUEsTUFDdEI7QUFBQSxNQUNBLFNBQVMsVUFBVSxDQUFDO0FBQUEsTUFDcEIsSUFBSSx5QkFBeUI7QUFBQSxRQUMzQixPQUFPLE1BQU07QUFBQSxNQUNmLEVBQU87QUFBQSxRQUNMLElBQUksZ0JBQWdCLG9CQUFvQixTQUFTLEVBQUU7QUFBQSxRQUNuRCxJQUFJLE9BQU8sY0FBYyxNQUFNLE9BQU8sTUFBTTtBQUFBLFVBQzFDLE9BQU8sY0FBYyxNQUFNLE1BQU07QUFBQSxRQUNuQztBQUFBO0FBQUEsTUFFRixJQUFJLENBQUMsaUJBQWlCO0FBQUEsUUFDcEIsV0FBVyxNQUFNO0FBQUEsTUFDbkI7QUFBQSxNQUNBLElBQUksQ0FBQyxZQUFZO0FBQUEsUUFDZixhQUFhO0FBQUEsUUFDYixhQUFhLHFCQUFxQixPQUFPLEtBQUssSUFBSSxPQUFPLE1BQU0sU0FBUztBQUFBLE1BQzFFO0FBQUEsTUFDQSxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQ2xCLGNBQWMsTUFBTSxPQUFPO0FBQUEsTUFDN0I7QUFBQSxJQUNGLEVBQU87QUFBQSxNQUNMLFdBQVcsTUFBTSxPQUFPO0FBQUEsTUFDeEIsSUFBSSxPQUFPLGNBQWMsT0FBTyxlQUFlLE9BQU8sQ0FBQyxZQUFZO0FBQUEsUUFDakUsYUFBYSxPQUFPO0FBQUEsTUFDdEI7QUFBQSxNQUNBLElBQUksT0FBTyxTQUFTO0FBQUEsUUFDbEIsY0FBYyxNQUFNLE9BQU87QUFBQSxNQUM3QjtBQUFBO0FBQUEsR0FFSDtBQUFBLEVBQ0QsSUFBSSxpQkFBc0IsYUFBSyxxQkFBcUI7QUFBQSxJQUNsRCxTQUFTLEdBQUcsb0JBQW9CLEtBQUssYUFBYTtBQUFBLElBQ2xELElBQUksb0JBQW9CLElBQUk7QUFBQSxNQUMxQixXQUFXLG9CQUFvQixNQUFXO0FBQUEsSUFDNUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBLFlBQVksY0FBYztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBO0FBRUYsU0FBUyxpQkFBaUIsQ0FBQyxPQUFPLFNBQVMsU0FBUyxxQkFBcUIsc0JBQXNCLGdCQUFnQjtBQUFBLEVBQzdHLE1BQU0sWUFBWSxXQUFXLHVCQUMzQixTQUNBLFNBQ0EsbUJBQ0Y7QUFBQSxFQUNBLHFCQUFxQixPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTztBQUFBLElBQ3BHLE1BQU0sS0FBSyxPQUFPLGVBQWU7QUFBQSxJQUNqQyxJQUFJLGNBQWMsV0FBVyxPQUFPLFNBQVM7QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksU0FBUyxlQUFlO0FBQUEsSUFDNUIsVUFBVSxRQUFRLDJDQUEyQztBQUFBLElBQzdELElBQUksY0FBYyxNQUFNLEdBQUc7QUFBQSxNQUN6QixJQUFJLGdCQUFnQixvQkFBb0IsTUFBTSxTQUFTLE9BQU8sTUFBTSxFQUFFO0FBQUEsTUFDdEUsSUFBSSxFQUFFLFVBQVUsT0FBTyxjQUFjLE1BQU0sTUFBTTtBQUFBLFFBQy9DLFNBQVM7QUFBQSxhQUNKO0FBQUEsV0FDRixjQUFjLE1BQU0sS0FBSyxPQUFPO0FBQUEsUUFDbkM7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNLFNBQVMsT0FBTyxHQUFHO0FBQUEsSUFDM0IsRUFBTyxTQUFJLGlCQUFpQixNQUFNLEdBQUc7QUFBQSxNQUNuQyxVQUFVLE9BQU8seUNBQXlDO0FBQUEsSUFDNUQsRUFBTztBQUFBLE1BQ0wsSUFBSSxjQUFjLGVBQWUsT0FBTyxJQUFJO0FBQUEsTUFDNUMsTUFBTSxTQUFTLElBQUksS0FBSyxXQUFXO0FBQUE7QUFBQSxHQUV0QztBQUFBLEVBQ0QsT0FBTyxFQUFFLFlBQVksT0FBTztBQUFBO0FBRTlCLFNBQVMsZUFBZSxDQUFDLFlBQVksZUFBZSxTQUFTLFFBQVE7QUFBQSxFQUNuRSxJQUFJLG1CQUFtQixPQUFPLFFBQVEsYUFBYSxFQUFFLE9BQU8sSUFBSSxPQUFPLE1BQU0scUJBQXFCLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFDN0gsT0FBTyxLQUFLO0FBQUEsSUFDWixPQUFPO0FBQUEsS0FDTixDQUFDLENBQUM7QUFBQSxFQUNMLFNBQVMsU0FBUyxTQUFTO0FBQUEsSUFDekIsSUFBSSxLQUFLLE1BQU0sTUFBTTtBQUFBLElBQ3JCLElBQUksQ0FBQyxjQUFjLGVBQWUsRUFBRSxLQUFLLFdBQVcsZUFBZSxFQUFFLEtBQUssTUFBTSxNQUFNLFFBQVE7QUFBQSxNQUM1RixpQkFBaUIsTUFBTSxXQUFXO0FBQUEsSUFDcEM7QUFBQSxJQUNBLElBQUksVUFBVSxPQUFPLGVBQWUsRUFBRSxHQUFHO0FBQUEsTUFDdkM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsU0FBUyxzQkFBc0IsQ0FBQyxxQkFBcUI7QUFBQSxFQUNuRCxJQUFJLENBQUMscUJBQXFCO0FBQUEsSUFDeEIsT0FBTyxDQUFDO0FBQUEsRUFDVjtBQUFBLEVBQ0EsT0FBTyxjQUFjLG9CQUFvQixFQUFFLElBQUk7QUFBQSxJQUU3QyxZQUFZLENBQUM7QUFBQSxFQUNmLElBQUk7QUFBQSxJQUNGLFlBQVk7QUFBQSxPQUNULG9CQUFvQixLQUFLLG9CQUFvQixHQUFHO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFFRixTQUFTLG1CQUFtQixDQUFDLFNBQVMsU0FBUztBQUFBLEVBQzdDLElBQUksa0JBQWtCLFVBQVUsUUFBUSxNQUFNLEdBQUcsUUFBUSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sT0FBTyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDcEgsT0FBTyxnQkFBZ0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsSUFBSSxLQUFLLFFBQVE7QUFBQTtBQUU3RixTQUFTLHNCQUFzQixDQUFDLFFBQVE7QUFBQSxFQUN0QyxJQUFJLFFBQVEsT0FBTyxXQUFXLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxHQUFHLEtBQUs7QUFBQSxJQUN4RyxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLFFBQVEsQ0FBQztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUE7QUFFRixTQUFTLHNCQUFzQixDQUFDO0FBQUEsRUFDOUI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsSUFDRSxDQUFDLEdBQUc7QUFBQSxFQUNOLElBQUksYUFBYTtBQUFBLEVBQ2pCLElBQUksZUFBZTtBQUFBLEVBQ25CLElBQUksV0FBVyxLQUFLO0FBQUEsSUFDbEIsYUFBYTtBQUFBLElBQ2IsSUFBSSxVQUFVLFlBQVksU0FBUztBQUFBLE1BQ2pDLGVBQWUsY0FBYyxzQkFBc0IseURBQXlEO0FBQUEsSUFDOUcsRUFBTyxTQUFJLFNBQVMsZ0JBQWdCO0FBQUEsTUFDbEMsZUFBZTtBQUFBLElBQ2pCO0FBQUEsRUFDRixFQUFPLFNBQUksV0FBVyxLQUFLO0FBQUEsSUFDekIsYUFBYTtBQUFBLElBQ2IsZUFBZSxVQUFVLGdDQUFnQztBQUFBLEVBQzNELEVBQU8sU0FBSSxXQUFXLEtBQUs7QUFBQSxJQUN6QixhQUFhO0FBQUEsSUFDYixlQUFlLHlCQUF5QjtBQUFBLEVBQzFDLEVBQU8sU0FBSSxXQUFXLEtBQUs7QUFBQSxJQUN6QixhQUFhO0FBQUEsSUFDYixJQUFJLFVBQVUsWUFBWSxTQUFTO0FBQUEsTUFDakMsZUFBZSxjQUFjLE9BQU8sWUFBWSxpQkFBaUIsMERBQTBEO0FBQUEsSUFDN0gsRUFBTyxTQUFJLFFBQVE7QUFBQSxNQUNqQixlQUFlLDJCQUEyQixPQUFPLFlBQVk7QUFBQSxJQUMvRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sSUFBSSxrQkFDVCxVQUFVLEtBQ1YsWUFDQSxJQUFJLE1BQU0sWUFBWSxHQUN0QixJQUNGO0FBQUE7QUFFRixTQUFTLFlBQVksQ0FBQyxTQUFTO0FBQUEsRUFDN0IsSUFBSSxVQUFVLE9BQU8sUUFBUSxPQUFPO0FBQUEsRUFDcEMsU0FBUyxJQUFJLFFBQVEsU0FBUyxFQUFHLEtBQUssR0FBRyxLQUFLO0FBQUEsSUFDNUMsS0FBSyxLQUFLLFVBQVUsUUFBUTtBQUFBLElBQzVCLElBQUksaUJBQWlCLE1BQU0sR0FBRztBQUFBLE1BQzVCLE9BQU8sRUFBRSxLQUFLLE9BQU87QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQTtBQUVGLFNBQVMsaUJBQWlCLENBQUMsTUFBTTtBQUFBLEVBQy9CLElBQUksYUFBYSxPQUFPLFNBQVMsV0FBVyxVQUFVLElBQUksSUFBSTtBQUFBLEVBQzlELE9BQU8sV0FBVyxLQUFLLFlBQVksTUFBTSxHQUFHLENBQUM7QUFBQTtBQUUvQyxTQUFTLGdCQUFnQixDQUFDLEdBQUcsR0FBRztBQUFBLEVBQzlCLElBQUksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQUEsSUFDdEQsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksRUFBRSxTQUFTLElBQUk7QUFBQSxJQUNqQixPQUFPLEVBQUUsU0FBUztBQUFBLEVBQ3BCLEVBQU8sU0FBSSxFQUFFLFNBQVMsRUFBRSxNQUFNO0FBQUEsSUFDNUIsT0FBTztBQUFBLEVBQ1QsRUFBTyxTQUFJLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFDeEIsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU87QUFBQTtBQVlULFNBQVMscUJBQXFCLENBQUMsUUFBUTtBQUFBLEVBQ3JDLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxZQUFZLE9BQU8sUUFBUSxNQUFNLEVBQUUsTUFDNUUsRUFBRSxLQUFLLFdBQVcsT0FBTyxRQUFRLFlBQVkscUJBQXFCLEtBQUssQ0FDekU7QUFBQTtBQUVGLFNBQVMsb0JBQW9CLENBQUMsUUFBUTtBQUFBLEVBQ3BDLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxZQUFZLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxTQUFTLFVBQXFCLE9BQU8sU0FBUztBQUFBO0FBRXpKLFNBQVMsNEJBQTRCLENBQUMsUUFBUTtBQUFBLEVBQzVDLE9BQU8sV0FBVyxPQUFPLE1BQU0sS0FBSyxvQkFBb0IsSUFBSSxPQUFPLE9BQU8sTUFBTTtBQUFBO0FBRWxGLFNBQVMsYUFBYSxDQUFDLFFBQVE7QUFBQSxFQUM3QixPQUFPLE9BQU8sU0FBUztBQUFBO0FBRXpCLFNBQVMsZ0JBQWdCLENBQUMsUUFBUTtBQUFBLEVBQ2hDLFFBQVEsVUFBVSxPQUFPLFVBQVU7QUFBQTtBQUVyQyxTQUFTLHNCQUFzQixDQUFDLE9BQU87QUFBQSxFQUNyQyxPQUFPLE9BQU8sVUFBVSxZQUFZLFNBQVMsUUFBUSxVQUFVLFNBQVMsVUFBVSxTQUFTLFVBQVUsU0FBUyxNQUFNLFNBQVM7QUFBQTtBQUUvSCxTQUFTLFVBQVUsQ0FBQyxPQUFPO0FBQUEsRUFDekIsT0FBTyxTQUFTLFFBQVEsT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sZUFBZSxZQUFZLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFNBQVM7QUFBQTtBQVFqSyxTQUFTLGFBQWEsQ0FBQyxRQUFRO0FBQUEsRUFDN0IsT0FBTyxvQkFBb0IsSUFBSSxPQUFPLFlBQVksQ0FBQztBQUFBO0FBRXJELFNBQVMsZ0JBQWdCLENBQUMsUUFBUTtBQUFBLEVBQ2hDLE9BQU8scUJBQXFCLElBQUksT0FBTyxZQUFZLENBQUM7QUFBQTtBQUV0RCxTQUFTLGtCQUFrQixDQUFDLFFBQVE7QUFBQSxFQUNsQyxPQUFPLElBQUksZ0JBQWdCLE1BQU0sRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxNQUFNLEVBQUU7QUFBQTtBQUV6RSxTQUFTLGNBQWMsQ0FBQyxTQUFTLFdBQVU7QUFBQSxFQUN6QyxJQUFJLFNBQVMsT0FBTyxjQUFhLFdBQVcsVUFBVSxTQUFRLEVBQUUsU0FBUyxVQUFTO0FBQUEsRUFDbEYsSUFBSSxRQUFRLFFBQVEsU0FBUyxHQUFHLE1BQU0sU0FBUyxtQkFBbUIsVUFBVSxFQUFFLEdBQUc7QUFBQSxJQUMvRSxPQUFPLFFBQVEsUUFBUSxTQUFTO0FBQUEsRUFDbEM7QUFBQSxFQUNBLElBQUksY0FBYywyQkFBMkIsT0FBTztBQUFBLEVBQ3BELE9BQU8sWUFBWSxZQUFZLFNBQVM7QUFBQTtBQUUxQyxTQUFTLDJCQUEyQixDQUFDLFlBQVk7QUFBQSxFQUMvQyxNQUFNLFlBQVksWUFBWSxhQUFhLE1BQU0sVUFBVSxTQUFTO0FBQUEsRUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsYUFBYTtBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxRQUFRLE1BQU07QUFBQSxJQUNoQixPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxVQUFlO0FBQUEsTUFDZixNQUFXO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxFQUNGLEVBQU8sU0FBSSxZQUFZLE1BQU07QUFBQSxJQUMzQixPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBVztBQUFBLE1BQ1gsTUFBVztBQUFBLElBQ2I7QUFBQSxFQUNGLEVBQU8sU0FBSSxTQUFjLFdBQUc7QUFBQSxJQUMxQixPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxVQUFlO0FBQUEsTUFDZjtBQUFBLE1BQ0EsTUFBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFFRixTQUFTLG9CQUFvQixDQUFDLFdBQVUsWUFBWTtBQUFBLEVBQ2xELElBQUksWUFBWTtBQUFBLElBQ2QsSUFBSSxhQUFhO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUDtBQUFBLE1BQ0EsWUFBWSxXQUFXO0FBQUEsTUFDdkIsWUFBWSxXQUFXO0FBQUEsTUFDdkIsYUFBYSxXQUFXO0FBQUEsTUFDeEIsVUFBVSxXQUFXO0FBQUEsTUFDckIsTUFBTSxXQUFXO0FBQUEsTUFDakIsTUFBTSxXQUFXO0FBQUEsSUFDbkI7QUFBQSxJQUNBLE9BQU87QUFBQSxFQUNULEVBQU87QUFBQSxJQUNMLElBQUksYUFBYTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBLFlBQWlCO0FBQUEsTUFDakIsWUFBaUI7QUFBQSxNQUNqQixhQUFrQjtBQUFBLE1BQ2xCLFVBQWU7QUFBQSxNQUNmLE1BQVc7QUFBQSxNQUNYLE1BQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQTtBQUdYLFNBQVMsdUJBQXVCLENBQUMsV0FBVSxZQUFZO0FBQUEsRUFDckQsSUFBSSxhQUFhO0FBQUEsSUFDZixPQUFPO0FBQUEsSUFDUDtBQUFBLElBQ0EsWUFBWSxXQUFXO0FBQUEsSUFDdkIsWUFBWSxXQUFXO0FBQUEsSUFDdkIsYUFBYSxXQUFXO0FBQUEsSUFDeEIsVUFBVSxXQUFXO0FBQUEsSUFDckIsTUFBTSxXQUFXO0FBQUEsSUFDakIsTUFBTSxXQUFXO0FBQUEsRUFDbkI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMsaUJBQWlCLENBQUMsWUFBWSxPQUFPO0FBQUEsRUFDNUMsSUFBSSxZQUFZO0FBQUEsSUFDZCxJQUFJLFVBQVU7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFlBQVksV0FBVztBQUFBLE1BQ3ZCLFlBQVksV0FBVztBQUFBLE1BQ3ZCLGFBQWEsV0FBVztBQUFBLE1BQ3hCLFVBQVUsV0FBVztBQUFBLE1BQ3JCLE1BQU0sV0FBVztBQUFBLE1BQ2pCLE1BQU0sV0FBVztBQUFBLE1BQ2pCLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDVCxFQUFPO0FBQUEsSUFDTCxJQUFJLFVBQVU7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFlBQWlCO0FBQUEsTUFDakIsWUFBaUI7QUFBQSxNQUNqQixhQUFrQjtBQUFBLE1BQ2xCLFVBQWU7QUFBQSxNQUNmLE1BQVc7QUFBQSxNQUNYLE1BQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQTtBQUdYLFNBQVMsb0JBQW9CLENBQUMsWUFBWSxpQkFBaUI7QUFBQSxFQUN6RCxJQUFJLFVBQVU7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFlBQVksV0FBVztBQUFBLElBQ3ZCLFlBQVksV0FBVztBQUFBLElBQ3ZCLGFBQWEsV0FBVztBQUFBLElBQ3hCLFVBQVUsV0FBVztBQUFBLElBQ3JCLE1BQU0sV0FBVztBQUFBLElBQ2pCLE1BQU0sV0FBVztBQUFBLElBQ2pCLE1BQU0sa0JBQWtCLGdCQUFnQixPQUFZO0FBQUEsRUFDdEQ7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMsY0FBYyxDQUFDLE9BQU87QUFBQSxFQUM3QixJQUFJLFVBQVU7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFlBQWlCO0FBQUEsSUFDakIsWUFBaUI7QUFBQSxJQUNqQixhQUFrQjtBQUFBLElBQ2xCLFVBQWU7QUFBQSxJQUNmLE1BQVc7QUFBQSxJQUNYLE1BQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLHlCQUF5QixDQUFDLFNBQVMsYUFBYTtBQUFBLEVBQ3ZELElBQUk7QUFBQSxJQUNGLElBQUksbUJBQW1CLFFBQVEsZUFBZSxRQUM1Qyx1QkFDRjtBQUFBLElBQ0EsSUFBSSxrQkFBa0I7QUFBQSxNQUNwQixJQUFJLE9BQU8sS0FBSyxNQUFNLGdCQUFnQjtBQUFBLE1BQ3RDLFVBQVUsR0FBRyxNQUFNLE9BQU8sUUFBUSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUEsUUFDN0MsSUFBSSxLQUFLLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFBQSxVQUN6QixZQUFZLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztBQUFBLFFBQ3JDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU8sR0FBRztBQUFBO0FBR2QsU0FBUyx5QkFBeUIsQ0FBQyxTQUFTLGFBQWE7QUFBQSxFQUN2RCxJQUFJLFlBQVksT0FBTyxHQUFHO0FBQUEsSUFDeEIsSUFBSSxPQUFPLENBQUM7QUFBQSxJQUNaLFVBQVUsR0FBRyxNQUFNLGFBQWE7QUFBQSxNQUM5QixLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUNqQjtBQUFBLElBQ0EsSUFBSTtBQUFBLE1BQ0YsUUFBUSxlQUFlLFFBQ3JCLHlCQUNBLEtBQUssVUFBVSxJQUFJLENBQ3JCO0FBQUEsTUFDQSxPQUFPLE9BQU87QUFBQSxNQUNkLFFBQ0UsT0FDQSw4REFBOEQsU0FDaEU7QUFBQTtBQUFBLEVBRUo7QUFBQTtBQUVGLFNBQVMsY0FBYyxHQUFHO0FBQUEsRUFDeEIsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSSxVQUFVLElBQUksUUFBUSxDQUFDLEtBQUssUUFBUTtBQUFBLElBQ3RDLFVBQVUsT0FBTyxRQUFRO0FBQUEsTUFDdkIsSUFBSSxHQUFHO0FBQUEsTUFDUCxJQUFJO0FBQUEsUUFDRixNQUFNO0FBQUEsUUFDTixPQUFPLEdBQUc7QUFBQTtBQUFBLElBR2QsU0FBUyxPQUFPLFVBQVU7QUFBQSxNQUN4QixJQUFJLEtBQUs7QUFBQSxNQUNULElBQUk7QUFBQSxRQUNGLE1BQU07QUFBQSxRQUNOLE9BQU8sR0FBRztBQUFBO0FBQUEsR0FHZjtBQUFBLEVBQ0QsT0FBTztBQUFBLElBQ0w7QUFBQSxJQUVBO0FBQUEsSUFFQTtBQUFBLEVBQ0Y7QUFBQTtBQUtGLElBQUksb0JBQTBCLG9CQUFjLElBQUk7QUFDaEQsa0JBQWtCLGNBQWM7QUFDaEMsSUFBSSx5QkFBK0Isb0JBQWMsSUFBSTtBQUNyRCx1QkFBdUIsY0FBYztBQUNyQyxJQUFJLG1CQUF5QixvQkFBYyxLQUFLO0FBSWhELElBQUksd0JBQThCLG9CQUFjO0FBQUEsRUFDOUMsaUJBQWlCO0FBQ25CLENBQUM7QUFDRCxzQkFBc0IsY0FBYztBQUNwQyxJQUFJLGtCQUF3QixvQ0FDVixJQUFJLEdBQ3RCO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsSUFBSSxlQUFxQixvQkFBYyxJQUFJO0FBQzNDLGFBQWEsY0FBYztBQUUzQixJQUFJLG9CQUEwQixvQkFDNUIsSUFDRjtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDLElBQUksa0JBQXdCLG9CQUMxQixJQUNGO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsSUFBSSxlQUFxQixvQkFBYztBQUFBLEVBQ3JDLFFBQVE7QUFBQSxFQUNSLFNBQVMsQ0FBQztBQUFBLEVBQ1YsYUFBYTtBQUNmLENBQUM7QUFDRCxhQUFhLGNBQWM7QUFDM0IsSUFBSSxvQkFBMEIsb0JBQWMsSUFBSTtBQUNoRCxrQkFBa0IsY0FBYztBQUNoQyxJQUFJLHNCQUFzQjtBQUkxQixTQUFTLE9BQU8sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxHQUFHO0FBQUEsRUFDdEMsVUFDRSxtQkFBbUIsR0FHbkIsb0VBQ0Y7QUFBQSxFQUNBLE1BQU0sVUFBVSxjQUFxQixrQkFBVyxpQkFBaUI7QUFBQSxFQUNqRSxNQUFNLE1BQU0sVUFBVSxXQUFXLGdCQUFnQixJQUFJLEVBQUUsU0FBUyxDQUFDO0FBQUEsRUFDakUsSUFBSSxpQkFBaUI7QUFBQSxFQUNyQixJQUFJLGFBQWEsS0FBSztBQUFBLElBQ3BCLGlCQUFpQixhQUFhLE1BQU0sV0FBVyxVQUFVLENBQUMsVUFBVSxRQUFRLENBQUM7QUFBQSxFQUMvRTtBQUFBLEVBQ0EsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLGdCQUFnQixRQUFRLEtBQUssQ0FBQztBQUFBO0FBRXhFLFNBQVMsa0JBQWtCLEdBQUc7QUFBQSxFQUM1QixPQUFjLGtCQUFXLGVBQWUsS0FBSztBQUFBO0FBRS9DLFNBQVMsV0FBVyxHQUFHO0FBQUEsRUFDckIsVUFDRSxtQkFBbUIsR0FHbkIsd0VBQ0Y7QUFBQSxFQUNBLE9BQWMsa0JBQVcsZUFBZSxFQUFFO0FBQUE7QUFrQjVDLElBQUksd0JBQXdCO0FBQzVCLFNBQVMseUJBQXlCLENBQUMsSUFBSTtBQUFBLEVBQ3JDLElBQUksV0FBa0Isa0JBQVcsaUJBQWlCLEVBQUU7QUFBQSxFQUNwRCxJQUFJLENBQUMsVUFBVTtBQUFBLElBQ04sdUJBQWdCLEVBQUU7QUFBQSxFQUMzQjtBQUFBO0FBRUYsU0FBUyxXQUFXLEdBQUc7QUFBQSxFQUNyQixNQUFNLGdCQUF1QixrQkFBVyxZQUFZO0FBQUEsRUFDcEQsT0FBTyxjQUFjLGtCQUFrQixJQUFJLG9CQUFvQjtBQUFBO0FBRWpFLFNBQVMsbUJBQW1CLEdBQUc7QUFBQSxFQUM3QixVQUNFLG1CQUFtQixHQUduQix3RUFDRjtBQUFBLEVBQ0EsSUFBSSxvQkFBMkIsa0JBQVcsaUJBQWlCO0FBQUEsRUFDM0QsTUFBTSxVQUFVLGNBQXFCLGtCQUFXLGlCQUFpQjtBQUFBLEVBQ2pFLE1BQU0sWUFBbUIsa0JBQVcsWUFBWTtBQUFBLEVBQ2hELE1BQU0sVUFBVSxxQkFBcUIsWUFBWTtBQUFBLEVBQ2pELElBQUkscUJBQXFCLEtBQUssVUFBVSxvQkFBb0IsT0FBTyxDQUFDO0FBQUEsRUFDcEUsSUFBSSxZQUFtQixjQUFPLEtBQUs7QUFBQSxFQUNuQywwQkFBMEIsTUFBTTtBQUFBLElBQzlCLFVBQVUsVUFBVTtBQUFBLEdBQ3JCO0FBQUEsRUFDRCxJQUFJLFdBQWtCLG1CQUNwQixDQUFDLElBQUksVUFBVSxDQUFDLE1BQU07QUFBQSxJQUNwQixRQUFRLFVBQVUsU0FBUyxxQkFBcUI7QUFBQSxJQUNoRCxJQUFJLENBQUMsVUFBVTtBQUFBLE1BQVM7QUFBQSxJQUN4QixJQUFJLE9BQU8sT0FBTyxVQUFVO0FBQUEsTUFDMUIsVUFBVSxHQUFHLEVBQUU7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxPQUFPLFVBQ1QsSUFDQSxLQUFLLE1BQU0sa0JBQWtCLEdBQzdCLGtCQUNBLFFBQVEsYUFBYSxNQUN2QjtBQUFBLElBQ0EsSUFBSSxxQkFBcUIsUUFBUSxhQUFhLEtBQUs7QUFBQSxNQUNqRCxLQUFLLFdBQVcsS0FBSyxhQUFhLE1BQU0sV0FBVyxVQUFVLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQztBQUFBLElBQ3hGO0FBQUEsS0FDRyxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFDakQsTUFDQSxRQUFRLE9BQ1IsT0FDRjtBQUFBLEtBRUY7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsSUFBSSxnQkFBdUIscUJBQWMsSUFBSTtBQUk3QyxTQUFTLFNBQVMsQ0FBQyxTQUFTO0FBQUEsRUFDMUIsSUFBSSxTQUFnQixrQkFBVyxZQUFZLEVBQUU7QUFBQSxFQUM3QyxPQUFjLGVBQ1osTUFBTSwwQkFBaUMscUJBQWMsY0FBYyxVQUFVLEVBQUUsT0FBTyxRQUFRLEdBQUcsTUFBTSxHQUN2RyxDQUFDLFFBQVEsT0FBTyxDQUNsQjtBQUFBO0FBT0YsU0FBUyxlQUFlLENBQUMsTUFBTSxhQUFhLENBQUMsR0FBRztBQUFBLEVBQzlDLE1BQU0sWUFBbUIsa0JBQVcsWUFBWTtBQUFBLEVBQ2hELE1BQU0sVUFBVSxxQkFBcUIsWUFBWTtBQUFBLEVBQ2pELElBQUkscUJBQXFCLEtBQUssVUFBVSxvQkFBb0IsT0FBTyxDQUFDO0FBQUEsRUFDcEUsT0FBYyxlQUNaLE1BQU0sVUFDSixJQUNBLEtBQUssTUFBTSxrQkFBa0IsR0FDN0Isa0JBQ0EsYUFBYSxNQUNmLEdBQ0EsQ0FBQyxJQUFJLG9CQUFvQixrQkFBa0IsUUFBUSxDQUNyRDtBQUFBO0FBS0YsU0FBUyxhQUFhLENBQUMsUUFBUSxhQUFhLGlCQUFpQixrQkFBa0IsUUFBUTtBQUFBLEVBQ3JGLFVBQ0UsbUJBQW1CLEdBR25CLHNFQUNGO0FBQUEsRUFDQSxNQUFNLGNBQXFCLGtCQUFXLGlCQUFpQjtBQUFBLEVBQ3ZELE1BQU0sU0FBUyxrQkFBeUIsa0JBQVcsWUFBWTtBQUFBLEVBQy9ELElBQUksYUFBYSxjQUFjLGNBQWMsU0FBUztBQUFBLEVBQ3RELElBQUksZUFBZSxhQUFhLFdBQVcsU0FBUyxDQUFDO0FBQUEsRUFDckQsSUFBSSxpQkFBaUIsYUFBYSxXQUFXLFdBQVc7QUFBQSxFQUN4RCxJQUFJLHFCQUFxQixhQUFhLFdBQVcsZUFBZTtBQUFBLEVBQ2hFLElBQUksY0FBYyxjQUFjLFdBQVc7QUFBQSxFQUMzQyxJQUFJLHFCQUFxQjtBQUFBLElBQ3ZCLElBQUksYUFBYSxlQUFlLFlBQVksUUFBUTtBQUFBLElBQ3BELFlBQ0UsZ0JBQ0EsQ0FBQyxlQUFlLFdBQVcsU0FBUyxHQUFHLEtBQUssV0FBVyxTQUFTLElBQUksR0FDcEUsb0VBQW9FLHVDQUF1QztBQUFBO0FBQUEsd0NBRXpFLGdDQUFnQyxlQUFlLE1BQU0sTUFBTSxHQUFHLG1CQUNsRztBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksc0JBQXNCLFlBQVk7QUFBQSxFQUN0QyxJQUFJO0FBQUEsRUFDSixJQUFJLGFBQWE7QUFBQSxJQUNmLElBQUksb0JBQW9CLE9BQU8sZ0JBQWdCLFdBQVcsVUFBVSxXQUFXLElBQUk7QUFBQSxJQUNuRixVQUNFLHVCQUF1QixPQUFPLGtCQUFrQixVQUFVLFdBQVcsa0JBQWtCLEdBQ3ZGLDJPQUEyTyxxQ0FBcUMsa0JBQWtCLCtDQUNwUztBQUFBLElBQ0EsWUFBVztBQUFBLEVBQ2IsRUFBTztBQUFBLElBQ0wsWUFBVztBQUFBO0FBQUEsRUFFYixJQUFJLFdBQVcsVUFBUyxZQUFZO0FBQUEsRUFDcEMsSUFBSSxvQkFBb0I7QUFBQSxFQUN4QixJQUFJLHVCQUF1QixLQUFLO0FBQUEsSUFDOUIsSUFBSSxpQkFBaUIsbUJBQW1CLFFBQVEsT0FBTyxFQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUEsSUFDcEUsSUFBSSxXQUFXLFNBQVMsUUFBUSxPQUFPLEVBQUUsRUFBRSxNQUFNLEdBQUc7QUFBQSxJQUNwRCxvQkFBb0IsTUFBTSxTQUFTLE1BQU0sZUFBZSxNQUFNLEVBQUUsS0FBSyxHQUFHO0FBQUEsRUFDMUU7QUFBQSxFQUNBLElBQUksVUFBVSxZQUFZLFFBQVEsRUFBRSxVQUFVLGtCQUFrQixDQUFDO0FBQUEsRUFDakUsSUFBSSxxQkFBcUI7QUFBQSxJQUN2QixRQUNFLGVBQWUsV0FBVyxNQUMxQiwrQkFBK0IsVUFBUyxXQUFXLFVBQVMsU0FBUyxVQUFTLFFBQ2hGO0FBQUEsSUFDQSxRQUNFLFdBQVcsUUFBUSxRQUFRLFFBQVEsU0FBUyxHQUFHLE1BQU0sWUFBaUIsYUFBSyxRQUFRLFFBQVEsU0FBUyxHQUFHLE1BQU0sY0FBbUIsYUFBSyxRQUFRLFFBQVEsU0FBUyxHQUFHLE1BQU0sU0FBYyxXQUNyTCxtQ0FBbUMsVUFBUyxXQUFXLFVBQVMsU0FBUyxVQUFTLGlKQUNwRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksa0JBQWtCLGVBQ3BCLFdBQVcsUUFBUSxJQUNqQixDQUFDLFVBQVUsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsSUFDbEMsUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFHLGNBQWMsTUFBTSxNQUFNO0FBQUEsSUFDcEQsVUFBVSxVQUFVO0FBQUEsTUFDbEI7QUFBQSxNQUtBLFVBQVUsaUJBQWlCLFVBQVUsZUFDbkMsTUFBTSxTQUFTLFFBQVEsT0FBTyxLQUFLLEVBQUUsUUFBUSxNQUFNLEtBQUssQ0FDMUQsRUFBRSxXQUFXLE1BQU07QUFBQSxJQUNyQixDQUFDO0FBQUEsSUFDRCxjQUFjLE1BQU0saUJBQWlCLE1BQU0scUJBQXFCLFVBQVU7QUFBQSxNQUN4RTtBQUFBLE1BS0EsVUFBVSxpQkFBaUIsVUFBVSxlQUNuQyxNQUFNLGFBQWEsUUFBUSxPQUFPLEtBQUssRUFBRSxRQUFRLE1BQU0sS0FBSyxDQUM5RCxFQUFFLFdBQVcsTUFBTTtBQUFBLElBQ3JCLENBQUM7QUFBQSxFQUNILENBQUMsQ0FDSCxHQUNBLGVBQ0EsaUJBQ0Esa0JBQ0EsTUFDRjtBQUFBLEVBQ0EsSUFBSSxlQUFlLGlCQUFpQjtBQUFBLElBQ2xDLHVCQUE4QixxQkFDNUIsZ0JBQWdCLFVBQ2hCO0FBQUEsTUFDRSxPQUFPO0FBQUEsUUFDTCxVQUFVO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsYUFDRjtBQUFBLFFBQ0w7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixHQUNBLGVBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLHFCQUFxQixHQUFHO0FBQUEsRUFDL0IsSUFBSSxRQUFRLGNBQWM7QUFBQSxFQUMxQixJQUFJLFVBQVUscUJBQXFCLEtBQUssSUFBSSxHQUFHLE1BQU0sVUFBVSxNQUFNLGVBQWUsaUJBQWlCLFFBQVEsTUFBTSxVQUFVLEtBQUssVUFBVSxLQUFLO0FBQUEsRUFDakosSUFBSSxRQUFRLGlCQUFpQixRQUFRLE1BQU0sUUFBUTtBQUFBLEVBQ25ELElBQUksWUFBWTtBQUFBLEVBQ2hCLElBQUksWUFBWSxFQUFFLFNBQVMsVUFBVSxpQkFBaUIsVUFBVTtBQUFBLEVBQ2hFLElBQUksYUFBYSxFQUFFLFNBQVMsV0FBVyxpQkFBaUIsVUFBVTtBQUFBLEVBQ2xFLElBQUksVUFBVTtBQUFBLEVBQ2QsSUFBSSxxQkFBcUI7QUFBQSxJQUN2QixRQUFRLE1BQ04sd0RBQ0EsS0FDRjtBQUFBLElBQ0EsMEJBQWlDLHFCQUFxQixpQkFBVSxzQkFBNkIscUJBQWMsS0FBSyxNQUFNLHlDQUFtQyxtQkFBMEIscUJBQWMsS0FBSyxNQUFNLGdIQUF1SCxxQkFBYyxRQUFRLEVBQUUsT0FBTyxXQUFXLEdBQUcsZUFBZSxHQUFHLE9BQU8scUJBQTRCLHFCQUFjLFFBQVEsRUFBRSxPQUFPLFdBQVcsR0FBRyxjQUFjLEdBQUcsc0JBQXNCLENBQUM7QUFBQSxFQUM1ZjtBQUFBLEVBQ0EsdUJBQThCLHFCQUFxQixpQkFBVSxzQkFBNkIscUJBQWMsTUFBTSxNQUFNLCtCQUErQixtQkFBMEIscUJBQWMsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLFNBQVMsRUFBRSxHQUFHLE9BQU8sR0FBRyx3QkFBK0IscUJBQWMsT0FBTyxFQUFFLE9BQU8sVUFBVSxHQUFHLEtBQUssSUFBSSxNQUFNLE9BQU87QUFBQTtBQUVqVixJQUFJLHNDQUE2QyxxQkFBYyx1QkFBdUIsSUFBSTtBQUMxRixJQUFJLHNCQUFzQixjQUFxQixpQkFBVTtBQUFBLEVBQ3ZELFdBQVcsQ0FBQyxPQUFPO0FBQUEsSUFDakIsTUFBTSxLQUFLO0FBQUEsSUFDWCxLQUFLLFFBQVE7QUFBQSxNQUNYLFVBQVUsTUFBTTtBQUFBLE1BQ2hCLGNBQWMsTUFBTTtBQUFBLE1BQ3BCLE9BQU8sTUFBTTtBQUFBLElBQ2Y7QUFBQTtBQUFBLFNBRUssd0JBQXdCLENBQUMsT0FBTztBQUFBLElBQ3JDLE9BQU8sRUFBRSxNQUFNO0FBQUE7QUFBQSxTQUVWLHdCQUF3QixDQUFDLE9BQU8sT0FBTztBQUFBLElBQzVDLElBQUksTUFBTSxhQUFhLE1BQU0sWUFBWSxNQUFNLGlCQUFpQixVQUFVLE1BQU0saUJBQWlCLFFBQVE7QUFBQSxNQUN2RyxPQUFPO0FBQUEsUUFDTCxPQUFPLE1BQU07QUFBQSxRQUNiLFVBQVUsTUFBTTtBQUFBLFFBQ2hCLGNBQWMsTUFBTTtBQUFBLE1BQ3RCO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsT0FBTyxNQUFNLFVBQWUsWUFBSSxNQUFNLFFBQVEsTUFBTTtBQUFBLE1BQ3BELFVBQVUsTUFBTTtBQUFBLE1BQ2hCLGNBQWMsTUFBTSxnQkFBZ0IsTUFBTTtBQUFBLElBQzVDO0FBQUE7QUFBQSxFQUVGLGlCQUFpQixDQUFDLE9BQU8sV0FBVztBQUFBLElBQ2xDLElBQUksS0FBSyxNQUFNLGtCQUFrQjtBQUFBLE1BQy9CLEtBQUssTUFBTSxpQkFBaUIsT0FBTyxTQUFTO0FBQUEsSUFDOUMsRUFBTztBQUFBLE1BQ0wsUUFBUSxNQUNOLHlEQUNBLEtBQ0Y7QUFBQTtBQUFBO0FBQUEsRUFHSixNQUFNLEdBQUc7QUFBQSxJQUNQLE9BQU8sS0FBSyxNQUFNLFVBQWUsNEJBQTJCLHFCQUFjLGFBQWEsVUFBVSxFQUFFLE9BQU8sS0FBSyxNQUFNLGFBQWEsbUJBQTBCLHFCQUMxSixrQkFBa0IsVUFDbEI7QUFBQSxNQUNFLE9BQU8sS0FBSyxNQUFNO0FBQUEsTUFDbEIsVUFBVSxLQUFLLE1BQU07QUFBQSxJQUN2QixDQUNGLENBQUMsSUFBSSxLQUFLLE1BQU07QUFBQTtBQUVwQjtBQUNBLFNBQVMsYUFBYSxHQUFHLGNBQWMsT0FBTyxZQUFZO0FBQUEsRUFDeEQsSUFBSSxvQkFBMkIsa0JBQVcsaUJBQWlCO0FBQUEsRUFDM0QsSUFBSSxxQkFBcUIsa0JBQWtCLFVBQVUsa0JBQWtCLGtCQUFrQixNQUFNLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTSxnQkFBZ0I7QUFBQSxJQUMvSSxrQkFBa0IsY0FBYyw2QkFBNkIsTUFBTSxNQUFNO0FBQUEsRUFDM0U7QUFBQSxFQUNBLHVCQUE4QixxQkFBYyxhQUFhLFVBQVUsRUFBRSxPQUFPLGFBQWEsR0FBRyxRQUFRO0FBQUE7QUFFdEcsU0FBUyxjQUFjLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLGtCQUFrQixNQUFNLG1CQUFtQixNQUFNLFNBQVMsTUFBTTtBQUFBLEVBQ25ILElBQUksV0FBVyxNQUFNO0FBQUEsSUFDbkIsSUFBSSxDQUFDLGlCQUFpQjtBQUFBLE1BQ3BCLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxJQUFJLGdCQUFnQixRQUFRO0FBQUEsTUFDMUIsVUFBVSxnQkFBZ0I7QUFBQSxJQUM1QixFQUFPLFNBQUksY0FBYyxXQUFXLEtBQUssQ0FBQyxnQkFBZ0IsZUFBZSxnQkFBZ0IsUUFBUSxTQUFTLEdBQUc7QUFBQSxNQUMzRyxVQUFVLGdCQUFnQjtBQUFBLElBQzVCLEVBQU87QUFBQSxNQUNMLE9BQU87QUFBQTtBQUFBLEVBRVg7QUFBQSxFQUNBLElBQUksa0JBQWtCO0FBQUEsRUFDdEIsSUFBSSxTQUFTLGlCQUFpQjtBQUFBLEVBQzlCLElBQUksVUFBVSxNQUFNO0FBQUEsSUFDbEIsSUFBSSxhQUFhLGdCQUFnQixVQUMvQixDQUFDLE1BQU0sRUFBRSxNQUFNLE1BQU0sU0FBUyxFQUFFLE1BQU0sUUFBYSxTQUNyRDtBQUFBLElBQ0EsVUFDRSxjQUFjLEdBQ2QsNERBQTRELE9BQU8sS0FDakUsTUFDRixFQUFFLEtBQUssR0FBRyxHQUNaO0FBQUEsSUFDQSxrQkFBa0IsZ0JBQWdCLE1BQ2hDLEdBQ0EsS0FBSyxJQUFJLGdCQUFnQixRQUFRLGFBQWEsQ0FBQyxDQUNqRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksaUJBQWlCO0FBQUEsRUFDckIsSUFBSSxnQkFBZ0I7QUFBQSxFQUNwQixJQUFJLGlCQUFpQjtBQUFBLElBQ25CLFNBQVMsSUFBSSxFQUFHLElBQUksZ0JBQWdCLFFBQVEsS0FBSztBQUFBLE1BQy9DLElBQUksUUFBUSxnQkFBZ0I7QUFBQSxNQUM1QixJQUFJLE1BQU0sTUFBTSxtQkFBbUIsTUFBTSxNQUFNLHdCQUF3QjtBQUFBLFFBQ3JFLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsTUFDQSxJQUFJLE1BQU0sTUFBTSxJQUFJO0FBQUEsUUFDbEIsTUFBTSxZQUFZLFFBQVEsWUFBWTtBQUFBLFFBQ3RDLElBQUksbUJBQW1CLE1BQU0sTUFBTSxVQUFVLENBQUMsV0FBVyxlQUFlLE1BQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLFFBQVEsTUFBTSxNQUFNLFFBQWE7QUFBQSxRQUN6SSxJQUFJLE1BQU0sTUFBTSxRQUFRLGtCQUFrQjtBQUFBLFVBQ3hDLGlCQUFpQjtBQUFBLFVBQ2pCLElBQUksaUJBQWlCLEdBQUc7QUFBQSxZQUN0QixrQkFBa0IsZ0JBQWdCLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLFVBQzlELEVBQU87QUFBQSxZQUNMLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFO0FBQUE7QUFBQSxVQUV2QztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sZ0JBQWdCLFlBQ3JCLENBQUMsUUFBUSxPQUFPLFVBQVU7QUFBQSxJQUN4QixJQUFJO0FBQUEsSUFDSixJQUFJLDhCQUE4QjtBQUFBLElBQ2xDLElBQUksZUFBZTtBQUFBLElBQ25CLElBQUkseUJBQXlCO0FBQUEsSUFDN0IsSUFBSSxpQkFBaUI7QUFBQSxNQUNuQixRQUFRLFVBQVUsTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLE1BQU0sTUFBVztBQUFBLE1BQ2pFLGVBQWUsTUFBTSxNQUFNLGdCQUFnQjtBQUFBLE1BQzNDLElBQUksZ0JBQWdCO0FBQUEsUUFDbEIsSUFBSSxnQkFBZ0IsS0FBSyxVQUFVLEdBQUc7QUFBQSxVQUNwQyxZQUNFLGtCQUNBLE9BQ0EsMEVBQ0Y7QUFBQSxVQUNBLDhCQUE4QjtBQUFBLFVBQzlCLHlCQUF5QjtBQUFBLFFBQzNCLEVBQU8sU0FBSSxrQkFBa0IsT0FBTztBQUFBLFVBQ2xDLDhCQUE4QjtBQUFBLFVBQzlCLHlCQUF5QixNQUFNLE1BQU0sMEJBQTBCO0FBQUEsUUFDakU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxXQUFXLGNBQWMsT0FBTyxnQkFBZ0IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQUEsSUFDdkUsSUFBSSxjQUFjLE1BQU07QUFBQSxNQUN0QixJQUFJO0FBQUEsTUFDSixJQUFJLE9BQU87QUFBQSxRQUNULFdBQVc7QUFBQSxNQUNiLEVBQU8sU0FBSSw2QkFBNkI7QUFBQSxRQUN0QyxXQUFXO0FBQUEsTUFDYixFQUFPLFNBQUksTUFBTSxNQUFNLFdBQVc7QUFBQSxRQUNoQywyQkFBa0MscUJBQWMsTUFBTSxNQUFNLFdBQVcsSUFBSTtBQUFBLE1BQzdFLEVBQU8sU0FBSSxNQUFNLE1BQU0sU0FBUztBQUFBLFFBQzlCLFdBQVcsTUFBTSxNQUFNO0FBQUEsTUFDekIsRUFBTztBQUFBLFFBQ0wsV0FBVztBQUFBO0FBQUEsTUFFYix1QkFBOEIscUJBQzVCLGVBQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQSxjQUFjO0FBQUEsVUFDWjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsYUFBYSxtQkFBbUI7QUFBQSxRQUNsQztBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQ0Y7QUFBQTtBQUFBLElBRUYsT0FBTyxvQkFBb0IsTUFBTSxNQUFNLGlCQUFpQixNQUFNLE1BQU0sZ0JBQWdCLFVBQVUscUJBQTRCLHFCQUN4SCxxQkFDQTtBQUFBLE1BQ0UsVUFBVSxnQkFBZ0I7QUFBQSxNQUMxQixjQUFjLGdCQUFnQjtBQUFBLE1BQzlCLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVLFlBQVk7QUFBQSxNQUN0QixjQUFjLEVBQUUsUUFBUSxNQUFNLFNBQVMsVUFBVSxhQUFhLEtBQUs7QUFBQSxNQUNuRTtBQUFBLElBQ0YsQ0FDRixJQUFJLFlBQVk7QUFBQSxLQUVsQixJQUNGO0FBQUE7QUFFRixTQUFTLHlCQUF5QixDQUFDLFVBQVU7QUFBQSxFQUMzQyxPQUFPLEdBQUc7QUFBQTtBQUVaLFNBQVMsb0JBQW9CLENBQUMsVUFBVTtBQUFBLEVBQ3RDLElBQUksTUFBYSxrQkFBVyxpQkFBaUI7QUFBQSxFQUM3QyxVQUFVLEtBQUssMEJBQTBCLFFBQVEsQ0FBQztBQUFBLEVBQ2xELE9BQU87QUFBQTtBQUVULFNBQVMsa0JBQWtCLENBQUMsVUFBVTtBQUFBLEVBQ3BDLElBQUksUUFBZSxrQkFBVyxzQkFBc0I7QUFBQSxFQUNwRCxVQUFVLE9BQU8sMEJBQTBCLFFBQVEsQ0FBQztBQUFBLEVBQ3BELE9BQU87QUFBQTtBQUVULFNBQVMsZUFBZSxDQUFDLFVBQVU7QUFBQSxFQUNqQyxJQUFJLFFBQWUsa0JBQVcsWUFBWTtBQUFBLEVBQzFDLFVBQVUsT0FBTywwQkFBMEIsUUFBUSxDQUFDO0FBQUEsRUFDcEQsT0FBTztBQUFBO0FBRVQsU0FBUyxpQkFBaUIsQ0FBQyxVQUFVO0FBQUEsRUFDbkMsSUFBSSxRQUFRLGdCQUFnQixRQUFRO0FBQUEsRUFDcEMsSUFBSSxZQUFZLE1BQU0sUUFBUSxNQUFNLFFBQVEsU0FBUztBQUFBLEVBQ3JELFVBQ0UsVUFBVSxNQUFNLElBQ2hCLEdBQUcsZ0VBQ0w7QUFBQSxFQUNBLE9BQU8sVUFBVSxNQUFNO0FBQUE7QUFFekIsU0FBUyxVQUFVLEdBQUc7QUFBQSxFQUNwQixPQUFPLGtCQUFrQixZQUE2QjtBQUFBO0FBRXhELFNBQVMsYUFBYSxHQUFHO0FBQUEsRUFDdkIsSUFBSSxRQUFRLG1CQUFtQixlQUFtQztBQUFBLEVBQ2xFLE9BQU8sTUFBTTtBQUFBO0FBYWYsU0FBUyxVQUFVLEdBQUc7QUFBQSxFQUNwQixNQUFNLFNBQVMsZUFBZSxtQkFDNUIsWUFDRjtBQUFBLEVBQ0EsT0FBYyxlQUNaLE1BQU0sUUFBUSxJQUFJLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxVQUFVLENBQUMsR0FDbEUsQ0FBQyxTQUFTLFVBQVUsQ0FDdEI7QUFBQTtBQWdCRixTQUFTLGFBQWEsR0FBRztBQUFBLEVBQ3ZCLElBQUksUUFBZSxrQkFBVyxpQkFBaUI7QUFBQSxFQUMvQyxJQUFJLFFBQVEsbUJBQW1CLGVBQW1DO0FBQUEsRUFDbEUsSUFBSSxVQUFVLGtCQUFrQixlQUFtQztBQUFBLEVBQ25FLElBQUksVUFBZSxXQUFHO0FBQUEsSUFDcEIsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU8sTUFBTSxTQUFTO0FBQUE7QUFrRHhCLFNBQVMsaUJBQWlCLEdBQUc7QUFBQSxFQUMzQixNQUFNLFdBQVcscUJBQXFCLGFBQXFDO0FBQUEsRUFDM0UsSUFBSSxLQUFLLGtCQUFrQixhQUFxQztBQUFBLEVBQ2hFLElBQUksWUFBbUIsY0FBTyxLQUFLO0FBQUEsRUFDbkMsMEJBQTBCLE1BQU07QUFBQSxJQUM5QixVQUFVLFVBQVU7QUFBQSxHQUNyQjtBQUFBLEVBQ0QsSUFBSSxXQUFrQixtQkFDcEIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDMUIsUUFBUSxVQUFVLFNBQVMscUJBQXFCO0FBQUEsSUFDaEQsSUFBSSxDQUFDLFVBQVU7QUFBQSxNQUFTO0FBQUEsSUFDeEIsSUFBSSxPQUFPLE9BQU8sVUFBVTtBQUFBLE1BQzFCLE9BQU8sU0FBUyxFQUFFO0FBQUEsSUFDcEIsRUFBTztBQUFBLE1BQ0wsTUFBTSxPQUFPLFNBQVMsSUFBSSxFQUFFLGFBQWEsT0FBTyxRQUFRLENBQUM7QUFBQTtBQUFBLEtBRzdELENBQUMsUUFBUSxFQUFFLENBQ2I7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULElBQUksZ0JBQWdCLENBQUM7QUFDckIsU0FBUyxXQUFXLENBQUMsS0FBSyxNQUFNLFNBQVM7QUFBQSxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsTUFBTTtBQUFBLElBQ2hDLGNBQWMsT0FBTztBQUFBLElBQ3JCLFFBQVEsT0FBTyxPQUFPO0FBQUEsRUFDeEI7QUFBQTtBQXFCRixJQUFJLGlCQUFpQixDQUFDO0FBQ3RCLFNBQVMsUUFBUSxDQUFDLFdBQVcsU0FBUztBQUFBLEVBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxVQUFVO0FBQUEsSUFDMUMsZUFBZSxXQUFXO0FBQUEsSUFDMUIsUUFBUSxLQUFLLE9BQU87QUFBQSxFQUN0QjtBQUFBO0FBSUYsU0FBUyxrQkFBa0IsQ0FBQyxPQUFPO0FBQUEsRUFDakMsSUFBSSxVQUFVO0FBQUEsSUFHWixrQkFBa0IsTUFBTSxvQkFBb0IsTUFBTSxpQkFBaUIsUUFBUSxNQUFNLGdCQUFnQjtBQUFBLEVBQ25HO0FBQUEsRUFDQSxJQUFJLE1BQU0sV0FBVztBQUFBLElBQ25CLElBQUkscUJBQXFCO0FBQUEsTUFDdkIsSUFBSSxNQUFNLFNBQVM7QUFBQSxRQUNqQixRQUNFLE9BQ0EsaUdBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTyxPQUFPLFNBQVM7QUFBQSxNQUNyQixTQUFnQixxQkFBYyxNQUFNLFNBQVM7QUFBQSxNQUM3QyxXQUFnQjtBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxJQUFJLE1BQU0saUJBQWlCO0FBQUEsSUFDekIsSUFBSSxxQkFBcUI7QUFBQSxNQUN2QixJQUFJLE1BQU0sd0JBQXdCO0FBQUEsUUFDaEMsUUFDRSxPQUNBLDRIQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU8sT0FBTyxTQUFTO0FBQUEsTUFDckIsd0JBQStCLHFCQUFjLE1BQU0sZUFBZTtBQUFBLE1BQ2xFLGlCQUFzQjtBQUFBLElBQ3hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxJQUFJLE1BQU0sZUFBZTtBQUFBLElBQ3ZCLElBQUkscUJBQXFCO0FBQUEsTUFDdkIsSUFBSSxNQUFNLGNBQWM7QUFBQSxRQUN0QixRQUNFLE9BQ0EsOEdBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTyxPQUFPLFNBQVM7QUFBQSxNQUNyQixjQUFxQixxQkFBYyxNQUFNLGFBQWE7QUFBQSxNQUN0RCxlQUFvQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxJQUFJLDJCQUEyQjtBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUNGO0FBbUJBLElBQUksV0FBVyxNQUFNO0FBQUEsRUFDbkIsV0FBVyxHQUFHO0FBQUEsSUFDWixLQUFLLFNBQVM7QUFBQSxJQUNkLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUM5QyxLQUFLLFVBQVUsQ0FBQyxVQUFVO0FBQUEsUUFDeEIsSUFBSSxLQUFLLFdBQVcsV0FBVztBQUFBLFVBQzdCLEtBQUssU0FBUztBQUFBLFVBQ2QsUUFBUSxLQUFLO0FBQUEsUUFDZjtBQUFBO0FBQUEsTUFFRixLQUFLLFNBQVMsQ0FBQyxXQUFXO0FBQUEsUUFDeEIsSUFBSSxLQUFLLFdBQVcsV0FBVztBQUFBLFVBQzdCLEtBQUssU0FBUztBQUFBLFVBQ2QsT0FBTyxNQUFNO0FBQUEsUUFDZjtBQUFBO0FBQUEsS0FFSDtBQUFBO0FBRUw7QUFrSEEsU0FBUyxjQUFjO0FBQUEsRUFDckI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYO0FBQUEsR0FDQztBQUFBLEVBQ0QsS0FBSyxPQUFPLGdCQUF1QixnQkFBUyxPQUFPLEtBQUs7QUFBQSxFQUN4RCxLQUFLLGNBQWMsbUJBQTBCLGdCQUFTO0FBQUEsRUFDdEQsS0FBSyxXQUFXLGdCQUF1QixnQkFBUztBQUFBLElBQzlDLGlCQUFpQjtBQUFBLEVBQ25CLENBQUM7QUFBQSxFQUNELEtBQUssV0FBVyxnQkFBdUIsZ0JBQVM7QUFBQSxFQUNoRCxLQUFLLFlBQVksaUJBQXdCLGdCQUFTO0FBQUEsRUFDbEQsS0FBSyxjQUFjLG1CQUEwQixnQkFBUztBQUFBLEVBQ3RELElBQUksY0FBcUIsOEJBQXVCLElBQUksR0FBSztBQUFBLEVBQ3pELElBQUksdUJBQThCLG1CQUNoQyxDQUFDLGFBQWE7QUFBQSxJQUNaLGFBQWEsQ0FBQyxjQUFjO0FBQUEsTUFDMUIsSUFBSSxTQUFTLFVBQVUsa0JBQWtCO0FBQUEsUUFDdkMsT0FBTyxRQUFRLFNBQVMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLFdBQVc7QUFBQSxVQUM1RCxJQUFJLFVBQVUsU0FBUyxhQUFhLE9BQU87QUFBQSxZQUN6QyxpQkFBaUIsS0FBSztBQUFBLFVBQ3hCO0FBQUEsU0FDRDtBQUFBLE1BQ0g7QUFBQSxNQUNBLE9BQU87QUFBQSxLQUNSO0FBQUEsS0FFSCxDQUFDLGdCQUFnQixDQUNuQjtBQUFBLEVBQ0EsSUFBSSxXQUFrQixtQkFDcEIsQ0FBQyxZQUFZLGlCQUFpQixXQUFXLHlCQUF5QjtBQUFBLElBQ2hFLFNBQVMsU0FBUyxRQUFRLENBQUMsU0FBUyxRQUFRO0FBQUEsTUFDMUMsSUFBSSxRQUFRLFNBQWMsV0FBRztBQUFBLFFBQzNCLFlBQVksUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJO0FBQUEsTUFDM0M7QUFBQSxLQUNEO0FBQUEsSUFDRCxnQkFBZ0IsUUFBUSxDQUFDLFFBQVEsWUFBWSxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQUEsSUFDaEUsU0FDRSxjQUFjLFNBQVMseUJBQXlCLE1BQ2hELGdWQUNGO0FBQUEsSUFDQSxJQUFJLDRCQUE0QixPQUFPLFVBQVUsUUFBUSxPQUFPLE9BQU8sWUFBWSxRQUFRLE9BQU8sT0FBTyxPQUFPLFNBQVMsd0JBQXdCO0FBQUEsSUFDakosU0FDRSxzQkFBc0IsUUFBUSwyQkFDOUIseUtBQ0Y7QUFBQSxJQUNBLElBQUksQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkI7QUFBQSxNQUNyRCxJQUFJLHlCQUF5QixXQUFXO0FBQUEsUUFDdEMsc0JBQXNCLE1BQU0scUJBQXFCLFFBQVEsQ0FBQztBQUFBLE1BQzVELEVBQU87QUFBQSxRQUNFLHVCQUFnQixNQUFNLHFCQUFxQixRQUFRLENBQUM7QUFBQTtBQUFBLE1BRTdEO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSx5QkFBeUIsV0FBVztBQUFBLE1BQ3RDLHNCQUFzQixNQUFNO0FBQUEsUUFDMUIsSUFBSSxZQUFZO0FBQUEsVUFDZCxhQUFhLFVBQVUsUUFBUTtBQUFBLFVBQy9CLFdBQVcsZUFBZTtBQUFBLFFBQzVCO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWCxpQkFBaUI7QUFBQSxVQUNqQixXQUFXO0FBQUEsVUFDWCxpQkFBaUIsbUJBQW1CO0FBQUEsVUFDcEMsY0FBYyxtQkFBbUI7QUFBQSxRQUNuQyxDQUFDO0FBQUEsT0FDRjtBQUFBLE1BQ0QsSUFBSSxJQUFJLE9BQU8sT0FBTyxTQUFTLG9CQUFvQixNQUFNO0FBQUEsUUFDdkQsc0JBQXNCLE1BQU0scUJBQXFCLFFBQVEsQ0FBQztBQUFBLE9BQzNEO0FBQUEsTUFDRCxFQUFFLFNBQVMsUUFBUSxNQUFNO0FBQUEsUUFDdkIsc0JBQXNCLE1BQU07QUFBQSxVQUMxQixhQUFrQixTQUFDO0FBQUEsVUFDbkIsY0FBbUIsU0FBQztBQUFBLFVBQ3BCLGdCQUFxQixTQUFDO0FBQUEsVUFDdEIsYUFBYSxFQUFFLGlCQUFpQixNQUFNLENBQUM7QUFBQSxTQUN4QztBQUFBLE9BQ0Y7QUFBQSxNQUNELHNCQUFzQixNQUFNLGNBQWMsQ0FBQyxDQUFDO0FBQUEsTUFDNUM7QUFBQSxJQUNGO0FBQUEsSUFDQSxJQUFJLFlBQVk7QUFBQSxNQUNkLGFBQWEsVUFBVSxRQUFRO0FBQUEsTUFDL0IsV0FBVyxlQUFlO0FBQUEsTUFDMUIsZ0JBQWdCO0FBQUEsUUFDZCxPQUFPO0FBQUEsUUFDUCxpQkFBaUIsbUJBQW1CO0FBQUEsUUFDcEMsY0FBYyxtQkFBbUI7QUFBQSxNQUNuQyxDQUFDO0FBQUEsSUFDSCxFQUFPO0FBQUEsTUFDTCxnQkFBZ0IsUUFBUTtBQUFBLE1BQ3hCLGFBQWE7QUFBQSxRQUNYLGlCQUFpQjtBQUFBLFFBQ2pCLFdBQVc7QUFBQSxRQUNYLGlCQUFpQixtQkFBbUI7QUFBQSxRQUNwQyxjQUFjLG1CQUFtQjtBQUFBLE1BQ25DLENBQUM7QUFBQTtBQUFBLEtBR0w7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUNGO0FBQUEsRUFDTyx1QkFBZ0IsTUFBTSxPQUFPLFVBQVUsUUFBUSxHQUFHLENBQUMsUUFBUSxRQUFRLENBQUM7QUFBQSxFQUNwRSxpQkFBVSxNQUFNO0FBQUEsSUFDckIsSUFBSSxVQUFVLG1CQUFtQixDQUFDLFVBQVUsV0FBVztBQUFBLE1BQ3JELGFBQWEsSUFBSSxRQUFVO0FBQUEsSUFDN0I7QUFBQSxLQUNDLENBQUMsU0FBUyxDQUFDO0FBQUEsRUFDUCxpQkFBVSxNQUFNO0FBQUEsSUFDckIsSUFBSSxhQUFhLGdCQUFnQixPQUFPLFFBQVE7QUFBQSxNQUM5QyxJQUFJLFdBQVc7QUFBQSxNQUNmLElBQUksZ0JBQWdCLFVBQVU7QUFBQSxNQUM5QixJQUFJLGNBQWMsT0FBTyxPQUFPLFNBQVMsb0JBQW9CLFlBQVk7QUFBQSxRQUNoRSx1QkFBZ0IsTUFBTSxxQkFBcUIsUUFBUSxDQUFDO0FBQUEsUUFDM0QsTUFBTTtBQUFBLE9BQ1A7QUFBQSxNQUNELFlBQVksU0FBUyxRQUFRLE1BQU07QUFBQSxRQUNqQyxhQUFrQixTQUFDO0FBQUEsUUFDbkIsY0FBbUIsU0FBQztBQUFBLFFBQ3BCLGdCQUFxQixTQUFDO0FBQUEsUUFDdEIsYUFBYSxFQUFFLGlCQUFpQixNQUFNLENBQUM7QUFBQSxPQUN4QztBQUFBLE1BQ0QsY0FBYyxXQUFXO0FBQUEsSUFDM0I7QUFBQSxLQUNDLENBQUMsY0FBYyxXQUFXLE9BQU8sUUFBUSxvQkFBb0IsQ0FBQztBQUFBLEVBQzFELGlCQUFVLE1BQU07QUFBQSxJQUNyQixJQUFJLGFBQWEsZ0JBQWdCLE1BQU0sU0FBUyxRQUFRLGFBQWEsU0FBUyxLQUFLO0FBQUEsTUFDakYsVUFBVSxRQUFRO0FBQUEsSUFDcEI7QUFBQSxLQUNDLENBQUMsV0FBVyxZQUFZLE1BQU0sVUFBVSxZQUFZLENBQUM7QUFBQSxFQUNqRCxpQkFBVSxNQUFNO0FBQUEsSUFDckIsSUFBSSxDQUFDLFVBQVUsbUJBQW1CLGNBQWM7QUFBQSxNQUM5QyxnQkFBZ0IsYUFBYSxLQUFLO0FBQUEsTUFDbEMsYUFBYTtBQUFBLFFBQ1gsaUJBQWlCO0FBQUEsUUFDakIsV0FBVztBQUFBLFFBQ1gsaUJBQWlCLGFBQWE7QUFBQSxRQUM5QixjQUFjLGFBQWE7QUFBQSxNQUM3QixDQUFDO0FBQUEsTUFDRCxnQkFBcUIsU0FBQztBQUFBLElBQ3hCO0FBQUEsS0FDQyxDQUFDLFVBQVUsaUJBQWlCLFlBQVksQ0FBQztBQUFBLEVBQzVDLElBQUksWUFBbUIsZUFBUSxNQUFNO0FBQUEsSUFDbkMsT0FBTztBQUFBLE1BQ0wsWUFBWSxPQUFPO0FBQUEsTUFDbkIsZ0JBQWdCLE9BQU87QUFBQSxNQUN2QixJQUFJLENBQUMsTUFBTSxPQUFPLFNBQVMsQ0FBQztBQUFBLE1BQzVCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsU0FBUyxPQUFPLFNBQVMsSUFBSTtBQUFBLFFBQzlDLE9BQU87QUFBQSxRQUNQLG9CQUFvQixNQUFNO0FBQUEsTUFDNUIsQ0FBQztBQUFBLE1BQ0QsU0FBUyxDQUFDLElBQUksUUFBUSxTQUFTLE9BQU8sU0FBUyxJQUFJO0FBQUEsUUFDakQsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1Asb0JBQW9CLE1BQU07QUFBQSxNQUM1QixDQUFDO0FBQUEsSUFDSDtBQUFBLEtBQ0MsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNYLElBQUksV0FBVyxPQUFPLFlBQVk7QUFBQSxFQUNsQyxJQUFJLG9CQUEyQixlQUM3QixPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLEVBQ0YsSUFDQSxDQUFDLFFBQVEsV0FBVyxVQUFVLGdCQUFnQixDQUNoRDtBQUFBLEVBQ0EsdUJBQThCLHFCQUFxQixpQkFBVSxzQkFBNkIscUJBQWMsa0JBQWtCLFVBQVUsRUFBRSxPQUFPLGtCQUFrQixtQkFBMEIscUJBQWMsdUJBQXVCLFVBQVUsRUFBRSxPQUFPLE1BQU0sbUJBQTBCLHFCQUFjLGdCQUFnQixVQUFVLEVBQUUsT0FBTyxZQUFZLFFBQVEsbUJBQTBCLHFCQUFjLHNCQUFzQixVQUFVLEVBQUUsT0FBTyxVQUFVLG1CQUEwQixxQkFDemMsUUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBLFVBQVUsTUFBTTtBQUFBLElBQ2hCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEI7QUFBQSxFQUNGLG1CQUN1QixxQkFDckIsb0JBQ0E7QUFBQSxJQUNFLFFBQVEsT0FBTztBQUFBLElBQ2YsUUFBUSxPQUFPO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxFQUNGLENBQ0YsQ0FDRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtBQUFBO0FBRWIsSUFBSSxxQkFBNEIsWUFBSyxVQUFVO0FBQy9DLFNBQVMsVUFBVTtBQUFBLEVBQ2pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDQztBQUFBLEVBQ0QsT0FBTyxjQUFjLFFBQWEsV0FBRyxPQUFPLGtCQUFrQixNQUFNO0FBQUE7QUF1RXRFLFNBQVMsTUFBTSxDQUFDLE9BQU87QUFBQSxFQUNyQixPQUFPLFVBQVUsTUFBTSxPQUFPO0FBQUE7QUFRaEMsU0FBUyxNQUFNO0FBQUEsRUFDYixVQUFVLGVBQWU7QUFBQSxFQUN6QixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixpQkFBaUI7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsUUFBUSxhQUFhO0FBQUEsR0FDcEI7QUFBQSxFQUNELFVBQ0UsQ0FBQyxtQkFBbUIsR0FDcEIsd0dBQ0Y7QUFBQSxFQUNBLElBQUksV0FBVyxhQUFhLFFBQVEsUUFBUSxHQUFHO0FBQUEsRUFDL0MsSUFBSSxvQkFBMkIsZUFDN0IsT0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixRQUFRLENBQUM7QUFBQSxFQUNYLElBQ0EsQ0FBQyxVQUFVLFdBQVcsVUFBVSxDQUNsQztBQUFBLEVBQ0EsSUFBSSxPQUFPLGlCQUFpQixVQUFVO0FBQUEsSUFDcEMsZUFBZSxVQUFVLFlBQVk7QUFBQSxFQUN2QztBQUFBLEVBQ0E7QUFBQSxJQUNFLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxNQUNKO0FBQUEsRUFDSixJQUFJLGtCQUF5QixlQUFRLE1BQU07QUFBQSxJQUN6QyxJQUFJLG1CQUFtQixjQUFjLFVBQVUsUUFBUTtBQUFBLElBQ3ZELElBQUksb0JBQW9CLE1BQU07QUFBQSxNQUM1QixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxLQUNDLENBQUMsVUFBVSxVQUFVLFFBQVEsTUFBTSxPQUFPLEtBQUssY0FBYyxDQUFDO0FBQUEsRUFDakUsUUFDRSxtQkFBbUIsTUFDbkIscUJBQXFCLDRDQUE0QyxXQUFXLFNBQVMsMkZBQ3ZGO0FBQUEsRUFDQSxJQUFJLG1CQUFtQixNQUFNO0FBQUEsSUFDM0IsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLHVCQUE4QixxQkFBYyxrQkFBa0IsVUFBVSxFQUFFLE9BQU8sa0JBQWtCLG1CQUEwQixxQkFBYyxnQkFBZ0IsVUFBVSxFQUFFLFVBQVUsT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQUE7QUFnTjVNLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksaUJBQWlCO0FBQ3JCLFNBQVMsYUFBYSxDQUFDLFFBQVE7QUFBQSxFQUM3QixPQUFPLFVBQVUsUUFBUSxPQUFPLE9BQU8sWUFBWTtBQUFBO0FBRXJELFNBQVMsZUFBZSxDQUFDLFFBQVE7QUFBQSxFQUMvQixPQUFPLGNBQWMsTUFBTSxLQUFLLE9BQU8sUUFBUSxZQUFZLE1BQU07QUFBQTtBQUVuRSxTQUFTLGFBQWEsQ0FBQyxRQUFRO0FBQUEsRUFDN0IsT0FBTyxjQUFjLE1BQU0sS0FBSyxPQUFPLFFBQVEsWUFBWSxNQUFNO0FBQUE7QUFFbkUsU0FBUyxjQUFjLENBQUMsUUFBUTtBQUFBLEVBQzlCLE9BQU8sY0FBYyxNQUFNLEtBQUssT0FBTyxRQUFRLFlBQVksTUFBTTtBQUFBO0FBRW5FLFNBQVMsZUFBZSxDQUFDLE9BQU87QUFBQSxFQUM5QixPQUFPLENBQUMsRUFBRSxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sV0FBVyxNQUFNO0FBQUE7QUFFcEUsU0FBUyxzQkFBc0IsQ0FBQyxPQUFPLFFBQVE7QUFBQSxFQUM3QyxPQUFPLE1BQU0sV0FBVyxNQUN2QixDQUFDLFVBQVUsV0FBVyxZQUN2QixDQUFDLGdCQUFnQixLQUFLO0FBQUE7QUF5QnhCLElBQUksNkJBQTZCO0FBQ2pDLFNBQVMsNEJBQTRCLEdBQUc7QUFBQSxFQUN0QyxJQUFJLCtCQUErQixNQUFNO0FBQUEsSUFDdkMsSUFBSTtBQUFBLE1BQ0YsSUFBSSxTQUNGLFNBQVMsY0FBYyxNQUFNLEdBRTdCLENBQ0Y7QUFBQSxNQUNBLDZCQUE2QjtBQUFBLE1BQzdCLE9BQU8sR0FBRztBQUFBLE1BQ1YsNkJBQTZCO0FBQUE7QUFBQSxFQUVqQztBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsSUFBSSx3Q0FBd0MsSUFBSSxJQUFJO0FBQUEsRUFDbEQ7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLENBQUM7QUFDRCxTQUFTLGNBQWMsQ0FBQyxTQUFTO0FBQUEsRUFDL0IsSUFBSSxXQUFXLFFBQVEsQ0FBQyxzQkFBc0IsSUFBSSxPQUFPLEdBQUc7QUFBQSxJQUMxRCxRQUNFLE9BQ0EsSUFBSSw4RkFBOEYsaUJBQ3BHO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsU0FBUyxxQkFBcUIsQ0FBQyxRQUFRLFVBQVU7QUFBQSxFQUMvQyxJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJLGNBQWMsTUFBTSxHQUFHO0FBQUEsSUFDekIsSUFBSSxPQUFPLE9BQU8sYUFBYSxRQUFRO0FBQUEsSUFDdkMsU0FBUyxPQUFPLGNBQWMsTUFBTSxRQUFRLElBQUk7QUFBQSxJQUNoRCxTQUFTLE9BQU8sYUFBYSxRQUFRLEtBQUs7QUFBQSxJQUMxQyxVQUFVLGVBQWUsT0FBTyxhQUFhLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDNUQsV0FBVyxJQUFJLFNBQVMsTUFBTTtBQUFBLEVBQ2hDLEVBQU8sU0FBSSxnQkFBZ0IsTUFBTSxLQUFLLGVBQWUsTUFBTSxNQUFNLE9BQU8sU0FBUyxZQUFZLE9BQU8sU0FBUyxVQUFVO0FBQUEsSUFDckgsSUFBSSxPQUFPLE9BQU87QUFBQSxJQUNsQixJQUFJLFFBQVEsTUFBTTtBQUFBLE1BQ2hCLE1BQU0sSUFBSSxNQUNSLG9FQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsSUFBSSxPQUFPLE9BQU8sYUFBYSxZQUFZLEtBQUssS0FBSyxhQUFhLFFBQVE7QUFBQSxJQUMxRSxTQUFTLE9BQU8sY0FBYyxNQUFNLFFBQVEsSUFBSTtBQUFBLElBQ2hELFNBQVMsT0FBTyxhQUFhLFlBQVksS0FBSyxLQUFLLGFBQWEsUUFBUSxLQUFLO0FBQUEsSUFDN0UsVUFBVSxlQUFlLE9BQU8sYUFBYSxhQUFhLENBQUMsS0FBSyxlQUFlLEtBQUssYUFBYSxTQUFTLENBQUMsS0FBSztBQUFBLElBQ2hILFdBQVcsSUFBSSxTQUFTLE1BQU0sTUFBTTtBQUFBLElBQ3BDLElBQUksQ0FBQyw2QkFBNkIsR0FBRztBQUFBLE1BQ25DLE1BQU0sTUFBTSxNQUFNLFVBQVU7QUFBQSxNQUM1QixJQUFJLFNBQVMsU0FBUztBQUFBLFFBQ3BCLElBQUksU0FBUyxPQUFPLEdBQUcsVUFBVTtBQUFBLFFBQ2pDLFNBQVMsT0FBTyxHQUFHLFdBQVcsR0FBRztBQUFBLFFBQ2pDLFNBQVMsT0FBTyxHQUFHLFdBQVcsR0FBRztBQUFBLE1BQ25DLEVBQU8sU0FBSSxNQUFNO0FBQUEsUUFDZixTQUFTLE9BQU8sTUFBTSxLQUFLO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUEsRUFDRixFQUFPLFNBQUksY0FBYyxNQUFNLEdBQUc7QUFBQSxJQUNoQyxNQUFNLElBQUksTUFDUixvRkFDRjtBQUFBLEVBQ0YsRUFBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBO0FBQUEsRUFFVCxJQUFJLFlBQVksWUFBWSxjQUFjO0FBQUEsSUFDeEMsT0FBTztBQUFBLElBQ1AsV0FBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsT0FBTyxFQUFFLFFBQVEsUUFBUSxPQUFPLFlBQVksR0FBRyxTQUFTLFVBQVUsS0FBSztBQUFBO0FBc056RSxJQUFJLG9CQUFvQixPQUFPLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxNQUFJO0FBNmVyRixTQUFTLFVBQVUsQ0FBQyxPQUFPLFNBQVM7QUFBQSxFQUNsQyxJQUFJLFVBQVUsU0FBUyxVQUFVLFFBQVEsT0FBTyxVQUFVLGFBQWE7QUFBQSxJQUNyRSxNQUFNLElBQUksTUFBTSxPQUFPO0FBQUEsRUFDekI7QUFBQTtBQUlGLElBQUksNEJBQTRCLE9BQU8scUJBQXFCO0FBdVM1RCxTQUFTLGNBQWMsQ0FBQyxRQUFRLFVBQVUsV0FBVztBQUFBLEVBQ25ELElBQUksTUFBTSxPQUFPLFdBQVcsV0FBVyxJQUFJLElBQ3pDLFFBR0EsT0FBTyxXQUFXLGNBQWMsMEJBQTBCLE9BQU8sU0FBUyxNQUM1RSxJQUFJO0FBQUEsRUFDSixJQUFJLElBQUksYUFBYSxLQUFLO0FBQUEsSUFDeEIsSUFBSSxXQUFXLFNBQVM7QUFBQSxFQUMxQixFQUFPLFNBQUksWUFBWSxjQUFjLElBQUksVUFBVSxRQUFRLE1BQU0sS0FBSztBQUFBLElBQ3BFLElBQUksV0FBVyxHQUFHLFNBQVMsUUFBUSxPQUFPLEVBQUUsV0FBVztBQUFBLEVBQ3pELEVBQU87QUFBQSxJQUNMLElBQUksV0FBVyxHQUFHLElBQUksU0FBUyxRQUFRLE9BQU8sRUFBRSxLQUFLO0FBQUE7QUFBQSxFQUV2RCxPQUFPO0FBQUE7QUFxS1QsZUFBZSxlQUFlLENBQUMsT0FBTyxtQkFBbUI7QUFBQSxFQUN2RCxJQUFJLE1BQU0sTUFBTSxtQkFBbUI7QUFBQSxJQUNqQyxPQUFPLGtCQUFrQixNQUFNO0FBQUEsRUFDakM7QUFBQSxFQUNBLElBQUk7QUFBQSxJQUNGLElBQUksY0FBYyxNQUdoQixhQUFNO0FBQUEsSUFFUixrQkFBa0IsTUFBTSxNQUFNO0FBQUEsSUFDOUIsT0FBTztBQUFBLElBQ1AsT0FBTyxPQUFPO0FBQUEsSUFDZCxRQUFRLE1BQ04sZ0NBQWdDLE1BQU0sNkJBQ3hDO0FBQUEsSUFDQSxRQUFRLE1BQU0sS0FBSztBQUFBLElBQ25CLElBQUksT0FBTyx3QkFBd0IsT0FBTyxxQkFBcUIsYUFDL0QsV0FBaUIsQ0FFakI7QUFBQSxJQUNBLE9BQU8sU0FBUyxPQUFPO0FBQUEsSUFDdkIsT0FBTyxJQUFJLFFBQVEsTUFBTSxFQUN4QjtBQUFBO0FBQUE7QUF5RUwsU0FBUyxvQkFBb0IsQ0FBQyxRQUFRO0FBQUEsRUFDcEMsT0FBTyxVQUFVLFFBQVEsT0FBTyxPQUFPLFNBQVM7QUFBQTtBQUVsRCxTQUFTLG9CQUFvQixDQUFDLFFBQVE7QUFBQSxFQUNwQyxJQUFJLFVBQVUsTUFBTTtBQUFBLElBQ2xCLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxJQUFJLE9BQU8sUUFBUSxNQUFNO0FBQUEsSUFDdkIsT0FBTyxPQUFPLFFBQVEsYUFBYSxPQUFPLE9BQU8sZ0JBQWdCLFlBQVksT0FBTyxPQUFPLGVBQWU7QUFBQSxFQUM1RztBQUFBLEVBQ0EsT0FBTyxPQUFPLE9BQU8sUUFBUSxZQUFZLE9BQU8sT0FBTyxTQUFTO0FBQUE7QUFFbEUsZUFBZSxxQkFBcUIsQ0FBQyxTQUFTLFVBQVUsY0FBYztBQUFBLEVBQ3BFLElBQUksUUFBUSxNQUFNLFFBQVEsSUFDeEIsUUFBUSxJQUFJLE9BQU8sVUFBVTtBQUFBLElBQzNCLElBQUksUUFBUSxTQUFTLE9BQU8sTUFBTSxNQUFNO0FBQUEsSUFDeEMsSUFBSSxPQUFPO0FBQUEsTUFDVCxJQUFJLE1BQU0sTUFBTSxnQkFBZ0IsT0FBTyxZQUFZO0FBQUEsTUFDbkQsT0FBTyxJQUFJLFFBQVEsSUFBSSxNQUFNLElBQUksQ0FBQztBQUFBLElBQ3BDO0FBQUEsSUFDQSxPQUFPLENBQUM7QUFBQSxHQUNULENBQ0g7QUFBQSxFQUNBLE9BQU8sc0JBQ0wsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEtBQUssUUFBUSxnQkFBZ0IsS0FBSyxRQUFRLFNBQVMsRUFBRSxJQUMvRyxDQUFDLFNBQVMsS0FBSyxRQUFRLGVBQWUsS0FBSyxNQUFNLEtBQUssWUFBWSxJQUFJLFFBQVEsSUFBSSxLQUFLLE1BQU0sS0FBSyxXQUFXLENBQy9HLENBQ0Y7QUFBQTtBQUVGLFNBQVMscUJBQXFCLENBQUMsTUFBTSxhQUFhLGdCQUFnQixVQUFVLFdBQVUsTUFBTTtBQUFBLEVBQzFGLElBQUksUUFBUSxDQUFDLE9BQU8sVUFBVTtBQUFBLElBQzVCLElBQUksQ0FBQyxlQUFlO0FBQUEsTUFBUSxPQUFPO0FBQUEsSUFDbkMsT0FBTyxNQUFNLE1BQU0sT0FBTyxlQUFlLE9BQU8sTUFBTTtBQUFBO0FBQUEsRUFFeEQsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLFVBQVU7QUFBQSxJQUN2QyxPQUVFLGVBQWUsT0FBTyxhQUFhLE1BQU0sWUFFekMsZUFBZSxPQUFPLE1BQU0sTUFBTSxTQUFTLEdBQUcsS0FBSyxlQUFlLE9BQU8sT0FBTyxTQUFTLE1BQU0sT0FBTztBQUFBO0FBQUEsRUFHMUcsSUFBSSxTQUFTLFVBQVU7QUFBQSxJQUNyQixPQUFPLFlBQVksT0FDakIsQ0FBQyxPQUFPLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxpQkFBaUIsT0FBTyxLQUFLLENBQ3hFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxTQUFTLFFBQVE7QUFBQSxJQUNuQixPQUFPLFlBQVksT0FBTyxDQUFDLE9BQU8sVUFBVTtBQUFBLE1BQzFDLElBQUksZ0JBQWdCLFNBQVMsT0FBTyxNQUFNLE1BQU07QUFBQSxNQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxXQUFXO0FBQUEsUUFDOUMsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLElBQUksTUFBTSxPQUFPLEtBQUssS0FBSyxpQkFBaUIsT0FBTyxLQUFLLEdBQUc7QUFBQSxRQUN6RCxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsSUFBSSxNQUFNLE1BQU0sa0JBQWtCO0FBQUEsUUFDaEMsSUFBSSxjQUFjLE1BQU0sTUFBTSxpQkFBaUI7QUFBQSxVQUM3QyxZQUFZLElBQUksSUFDZCxVQUFTLFdBQVcsVUFBUyxTQUFTLFVBQVMsTUFDL0MsT0FBTyxNQUNUO0FBQUEsVUFDQSxlQUFlLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFBQSxVQUM3QyxTQUFTLElBQUksSUFBSSxNQUFNLE9BQU8sTUFBTTtBQUFBLFVBQ3BDLFlBQVksTUFBTTtBQUFBLFVBQ2xCLHlCQUF5QjtBQUFBLFFBQzNCLENBQUM7QUFBQSxRQUNELElBQUksT0FBTyxnQkFBZ0IsV0FBVztBQUFBLFVBQ3BDLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLEtBQ1I7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPLENBQUM7QUFBQTtBQUVWLFNBQVMsa0JBQWtCLENBQUMsU0FBUyxZQUFZLDJCQUEyQixDQUFDLEdBQUc7QUFBQSxFQUM5RSxPQUFPLFlBQ0wsUUFBUSxJQUFJLENBQUMsVUFBVTtBQUFBLElBQ3JCLElBQUksUUFBUSxTQUFTLE9BQU8sTUFBTSxNQUFNO0FBQUEsSUFDeEMsSUFBSSxDQUFDO0FBQUEsTUFBTyxPQUFPLENBQUM7QUFBQSxJQUNwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLE1BQU07QUFBQSxJQUN6QixJQUFJLE1BQU0sb0JBQW9CO0FBQUEsTUFDNUIsUUFBUSxNQUFNLE9BQU8sTUFBTSxrQkFBa0I7QUFBQSxJQUMvQztBQUFBLElBQ0EsSUFBSSxNQUFNLG9CQUFvQjtBQUFBLE1BQzVCLFFBQVEsTUFBTSxPQUFPLE1BQU0sa0JBQWtCO0FBQUEsSUFDL0M7QUFBQSxJQUNBLElBQUksMEJBQTBCLE1BQU0sdUJBQXVCO0FBQUEsTUFDekQsUUFBUSxNQUFNLE9BQU8sTUFBTSxxQkFBcUI7QUFBQSxJQUNsRDtBQUFBLElBQ0EsSUFBSSxNQUFNLFNBQVM7QUFBQSxNQUNqQixRQUFRLE1BQU0sT0FBTyxNQUFNLE9BQU87QUFBQSxJQUNwQztBQUFBLElBQ0EsT0FBTztBQUFBLEdBQ1IsRUFBRSxLQUFLLENBQUMsQ0FDWDtBQUFBO0FBRUYsU0FBUyxXQUFXLENBQUMsT0FBTztBQUFBLEVBQzFCLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQTtBQUUzQixTQUFTLFFBQVEsQ0FBQyxLQUFLO0FBQUEsRUFDckIsSUFBSSxTQUFTLENBQUM7QUFBQSxFQUNkLElBQUksT0FBTyxPQUFPLEtBQUssR0FBRyxFQUFFLEtBQUs7QUFBQSxFQUNqQyxTQUFTLE9BQU8sTUFBTTtBQUFBLElBQ3BCLE9BQU8sT0FBTyxJQUFJO0FBQUEsRUFDcEI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULFNBQVMscUJBQXFCLENBQUMsYUFBYSxVQUFVO0FBQUEsRUFDcEQsSUFBSSxzQkFBc0IsSUFBSTtBQUFBLEVBQzlCLElBQUksY0FBYyxJQUFJLElBQUksUUFBUTtBQUFBLEVBQ2xDLE9BQU8sWUFBWSxPQUFPLENBQUMsU0FBUyxlQUFlO0FBQUEsSUFDakQsSUFBSSx1QkFBdUIsWUFBWSxDQUFDLHFCQUFxQixVQUFVLEtBQUssV0FBVyxPQUFPLFlBQVksV0FBVyxRQUFRLFlBQVksSUFBSSxXQUFXLElBQUk7QUFBQSxJQUM1SixJQUFJLHNCQUFzQjtBQUFBLE1BQ3hCLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxJQUFJLE1BQU0sS0FBSyxVQUFVLFNBQVMsVUFBVSxDQUFDO0FBQUEsSUFDN0MsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUNqQixJQUFJLElBQUksR0FBRztBQUFBLE1BQ1gsUUFBUSxLQUFLLEVBQUUsS0FBSyxNQUFNLFdBQVcsQ0FBQztBQUFBLElBQ3hDO0FBQUEsSUFDQSxPQUFPO0FBQUEsS0FDTixDQUFDLENBQUM7QUFBQTtBQTJvQlAsU0FBUyxxQkFBcUIsR0FBRztBQUFBLEVBQy9CLElBQUksVUFBaUIsa0JBQVcsaUJBQWlCO0FBQUEsRUFDakQsV0FDRSxTQUNBLDRFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLHlCQUF5QixHQUFHO0FBQUEsRUFDbkMsSUFBSSxVQUFpQixrQkFBVyxzQkFBc0I7QUFBQSxFQUN0RCxXQUNFLFNBQ0EsaUZBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUVULElBQUksbUJBQTBCLHFCQUFtQixTQUFDO0FBQ2xELGlCQUFpQixjQUFjO0FBQy9CLFNBQVMsbUJBQW1CLEdBQUc7QUFBQSxFQUM3QixJQUFJLFVBQWlCLGtCQUFXLGdCQUFnQjtBQUFBLEVBQ2hELFdBQ0UsU0FDQSxnRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsU0FBUyxtQkFBbUIsQ0FBQyxVQUFVLG1CQUFtQjtBQUFBLEVBQ3hELElBQUksbUJBQTBCLGtCQUFXLGdCQUFnQjtBQUFBLEVBQ3pELEtBQUssZUFBZSxvQkFBMkIsZ0JBQVMsS0FBSztBQUFBLEVBQzdELEtBQUssZ0JBQWdCLHFCQUE0QixnQkFBUyxLQUFLO0FBQUEsRUFDL0QsTUFBTSxTQUFTLFFBQVEsY0FBYyxjQUFjLGlCQUFpQjtBQUFBLEVBQ3BFLElBQUksTUFBYSxjQUFPLElBQUk7QUFBQSxFQUNyQixpQkFBVSxNQUFNO0FBQUEsSUFDckIsSUFBSSxhQUFhLFVBQVU7QUFBQSxNQUN6QixrQkFBa0IsSUFBSTtBQUFBLElBQ3hCO0FBQUEsSUFDQSxJQUFJLGFBQWEsWUFBWTtBQUFBLE1BQzNCLElBQUksV0FBVyxDQUFDLFlBQVk7QUFBQSxRQUMxQixRQUFRLFFBQVEsQ0FBQyxVQUFVO0FBQUEsVUFDekIsa0JBQWtCLE1BQU0sY0FBYztBQUFBLFNBQ3ZDO0FBQUE7QUFBQSxNQUVILElBQUksV0FBVyxJQUFJLHFCQUFxQixVQUFVLEVBQUUsV0FBVyxJQUFJLENBQUM7QUFBQSxNQUNwRSxJQUFJLElBQUk7QUFBQSxRQUFTLFNBQVMsUUFBUSxJQUFJLE9BQU87QUFBQSxNQUM3QyxPQUFPLE1BQU07QUFBQSxRQUNYLFNBQVMsV0FBVztBQUFBO0FBQUEsSUFFeEI7QUFBQSxLQUNDLENBQUMsUUFBUSxDQUFDO0FBQUEsRUFDTixpQkFBVSxNQUFNO0FBQUEsSUFDckIsSUFBSSxlQUFlO0FBQUEsTUFDakIsSUFBSSxLQUFLLFdBQVcsTUFBTTtBQUFBLFFBQ3hCLGtCQUFrQixJQUFJO0FBQUEsU0FDckIsR0FBRztBQUFBLE1BQ04sT0FBTyxNQUFNO0FBQUEsUUFDWCxhQUFhLEVBQUU7QUFBQTtBQUFBLElBRW5CO0FBQUEsS0FDQyxDQUFDLGFBQWEsQ0FBQztBQUFBLEVBQ2xCLElBQUksWUFBWSxNQUFNO0FBQUEsSUFDcEIsaUJBQWlCLElBQUk7QUFBQTtBQUFBLEVBRXZCLElBQUksZUFBZSxNQUFNO0FBQUEsSUFDdkIsaUJBQWlCLEtBQUs7QUFBQSxJQUN0QixrQkFBa0IsS0FBSztBQUFBO0FBQUEsRUFFekIsSUFBSSxDQUFDLGtCQUFrQjtBQUFBLElBQ3JCLE9BQU8sQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDeEI7QUFBQSxFQUNBLElBQUksYUFBYSxVQUFVO0FBQUEsSUFDekIsT0FBTyxDQUFDLGdCQUFnQixLQUFLLENBQUMsQ0FBQztBQUFBLEVBQ2pDO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsTUFDRSxTQUFTLHFCQUFxQixTQUFTLFNBQVM7QUFBQSxNQUNoRCxRQUFRLHFCQUFxQixRQUFRLFlBQVk7QUFBQSxNQUNqRCxjQUFjLHFCQUFxQixjQUFjLFNBQVM7QUFBQSxNQUMxRCxjQUFjLHFCQUFxQixjQUFjLFlBQVk7QUFBQSxNQUM3RCxjQUFjLHFCQUFxQixjQUFjLFNBQVM7QUFBQSxJQUM1RDtBQUFBLEVBQ0Y7QUFBQTtBQUVGLFNBQVMsb0JBQW9CLENBQUMsY0FBYyxZQUFZO0FBQUEsRUFDdEQsT0FBTyxDQUFDLFVBQVU7QUFBQSxJQUNoQixnQkFBZ0IsYUFBYSxLQUFLO0FBQUEsSUFDbEMsSUFBSSxDQUFDLE1BQU0sa0JBQWtCO0FBQUEsTUFDM0IsV0FBVyxLQUFLO0FBQUEsSUFDbEI7QUFBQTtBQUFBO0FBd0NKLFNBQVMsaUJBQWlCLEdBQUcsU0FBUyxhQUFhO0FBQUEsRUFDakQsTUFBTSxXQUFXLHNCQUFzQjtBQUFBLEVBQ3ZDLElBQUksVUFBaUIsZUFDbkIsTUFBTSxZQUFZLE9BQU8sUUFBUSxNQUFNLE9BQU8sUUFBUSxHQUN0RCxDQUFDLE9BQU8sUUFBUSxNQUFNLE9BQU8sUUFBUSxDQUN2QztBQUFBLEVBQ0EsSUFBSSxDQUFDLFNBQVM7QUFBQSxJQUNaLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSx1QkFBOEIscUJBQWMsdUJBQXVCLEVBQUUsTUFBTSxZQUFZLFVBQVUsQ0FBQztBQUFBO0FBRXBHLFNBQVMscUJBQXFCLENBQUMsU0FBUztBQUFBLEVBQ3RDLE1BQU0sVUFBVSxpQkFBaUIsb0JBQW9CO0FBQUEsRUFDckQsS0FBSyxvQkFBb0IseUJBQWdDLGdCQUFTLENBQUMsQ0FBQztBQUFBLEVBQzdELGlCQUFVLE1BQU07QUFBQSxJQUNyQixJQUFJLGNBQWM7QUFBQSxJQUNiLHNCQUFzQixTQUFTLFVBQVUsWUFBWSxFQUFFLEtBQzFELENBQUMsVUFBVTtBQUFBLE1BQ1QsSUFBSSxDQUFDLGFBQWE7QUFBQSxRQUNoQixzQkFBc0IsS0FBSztBQUFBLE1BQzdCO0FBQUEsS0FFSjtBQUFBLElBQ0EsT0FBTyxNQUFNO0FBQUEsTUFDWCxjQUFjO0FBQUE7QUFBQSxLQUVmLENBQUMsU0FBUyxVQUFVLFlBQVksQ0FBQztBQUFBLEVBQ3BDLE9BQU87QUFBQTtBQUVULFNBQVMscUJBQXFCO0FBQUEsRUFDNUI7QUFBQSxFQUNBLFNBQVM7QUFBQSxLQUNOO0FBQUEsR0FDRjtBQUFBLEVBQ0QsSUFBSSxZQUFXLFlBQVk7QUFBQSxFQUMzQixNQUFNLFVBQVUsaUJBQWlCLG9CQUFvQjtBQUFBLEVBQ3JELE1BQU0sYUFBYSxzQkFBc0I7QUFBQSxFQUN6QyxNQUFNLFlBQVksWUFBWSwwQkFBMEI7QUFBQSxFQUN4RCxJQUFJLG9CQUEyQixlQUM3QixNQUFNLHNCQUNKLE1BQ0EsYUFDQSxTQUNBLFVBQ0EsV0FDQSxNQUNGLEdBQ0EsQ0FBQyxNQUFNLGFBQWEsU0FBUyxVQUFVLFNBQVEsQ0FDakQ7QUFBQSxFQUNBLElBQUksc0JBQTZCLGVBQy9CLE1BQU0sc0JBQ0osTUFDQSxhQUNBLFNBQ0EsVUFDQSxXQUNBLFFBQ0YsR0FDQSxDQUFDLE1BQU0sYUFBYSxTQUFTLFVBQVUsU0FBUSxDQUNqRDtBQUFBLEVBQ0EsSUFBSSxZQUFtQixlQUFRLE1BQU07QUFBQSxJQUNuQyxJQUFJLFNBQVMsVUFBUyxXQUFXLFVBQVMsU0FBUyxVQUFTLE1BQU07QUFBQSxNQUNoRSxPQUFPLENBQUM7QUFBQSxJQUNWO0FBQUEsSUFDQSxJQUFJLCtCQUErQixJQUFJO0FBQUEsSUFDdkMsSUFBSSxtQkFBbUI7QUFBQSxJQUN2QixZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQUEsTUFDekIsSUFBSSxnQkFBZ0IsU0FBUyxPQUFPLEVBQUUsTUFBTTtBQUFBLE1BQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLFdBQVc7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxjQUFjLGFBQWEsRUFBRSxNQUFNLEtBQUssa0JBQWtCO0FBQUEsUUFDekksbUJBQW1CO0FBQUEsTUFDckIsRUFBTyxTQUFJLGNBQWMsaUJBQWlCO0FBQUEsUUFDeEMsbUJBQW1CO0FBQUEsTUFDckIsRUFBTztBQUFBLFFBQ0wsYUFBYSxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQUE7QUFBQSxLQUU5QjtBQUFBLElBQ0QsSUFBSSxhQUFhLFNBQVMsR0FBRztBQUFBLE1BQzNCLE9BQU8sQ0FBQztBQUFBLElBQ1Y7QUFBQSxJQUNBLElBQUksTUFBTSxlQUFlLE1BQU0sVUFBVSxNQUFNO0FBQUEsSUFDL0MsSUFBSSxvQkFBb0IsYUFBYSxPQUFPLEdBQUc7QUFBQSxNQUM3QyxJQUFJLGFBQWEsSUFDZixXQUNBLFlBQVksT0FBTyxDQUFDLE1BQU0sYUFBYSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssR0FBRyxDQUN6RjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU8sQ0FBQyxJQUFJLFdBQVcsSUFBSSxNQUFNO0FBQUEsS0FDaEM7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUFBLEVBQ0QsSUFBSSxjQUFxQixlQUN2QixNQUFNLG1CQUFtQixxQkFBcUIsUUFBUSxHQUN0RCxDQUFDLHFCQUFxQixRQUFRLENBQ2hDO0FBQUEsRUFDQSxJQUFJLHFCQUFxQixzQkFBc0IsbUJBQW1CO0FBQUEsRUFDbEUsdUJBQThCLHFCQUFxQixpQkFBVSxNQUFNLFVBQVUsSUFBSSxDQUFDLHlCQUFnQyxxQkFBYyxRQUFRLEVBQUUsS0FBSyxNQUFNLEtBQUssWUFBWSxJQUFJLFNBQVMsU0FBUyxVQUFVLENBQUMsQ0FBQyxHQUFHLFlBQVksSUFBSSxDQUFDLHlCQUFnQyxxQkFBYyxRQUFRLEVBQUUsS0FBSyxNQUFNLEtBQUssaUJBQWlCLFNBQVMsVUFBVSxDQUFDLENBQUMsR0FBRyxtQkFBbUIsSUFBSSxHQUFHLEtBQUssMkJBR25WLHFCQUFjLFFBQVEsRUFBRSxLQUFLLE9BQU8sVUFBVSxVQUFVLEtBQUssQ0FBQyxDQUN0RixDQUFDO0FBQUE7QUE0UUosU0FBUyxTQUFTLElBQUksTUFBTTtBQUFBLEVBQzFCLE9BQU8sQ0FBQyxVQUFVO0FBQUEsSUFDaEIsS0FBSyxRQUFRLENBQUMsUUFBUTtBQUFBLE1BQ3BCLElBQUksT0FBTyxRQUFRLFlBQVk7QUFBQSxRQUM3QixJQUFJLEtBQUs7QUFBQSxNQUNYLEVBQU8sU0FBSSxPQUFPLE1BQU07QUFBQSxRQUN0QixJQUFJLFVBQVU7QUFBQSxNQUNoQjtBQUFBLEtBQ0Q7QUFBQTtBQUFBO0FBdUdMLElBQUksWUFBWSxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sYUFBYSxlQUFlLE9BQU8sT0FBTyxTQUFTLGtCQUFrQjtBQUNwSSxJQUFJO0FBQUEsRUFDRixJQUFJLFdBQVc7QUFBQSxJQUNiLE9BQU8sdUJBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLEdBQUc7QUFFWixTQUFTLG1CQUFtQixDQUFDLFFBQVEsTUFBTTtBQUFBLEVBQ3pDLE9BQU8sYUFBYTtBQUFBLElBQ2xCLFVBQVUsTUFBTTtBQUFBLElBQ2hCLFlBQVksTUFBTTtBQUFBLElBQ2xCLFFBQVEsTUFBTTtBQUFBLElBQ2QsU0FBUyxxQkFBcUIsRUFBRSxRQUFRLE1BQU0sT0FBTyxDQUFDO0FBQUEsSUFDdEQsZUFBZSxNQUFNLGlCQUFpQixtQkFBbUI7QUFBQSxJQUN6RDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxjQUFjLE1BQU07QUFBQSxJQUNwQix5QkFBeUIsTUFBTTtBQUFBLElBQy9CLFFBQVEsTUFBTTtBQUFBLElBQ2QsMkJBQTJCLE1BQU07QUFBQSxFQUNuQyxDQUFDLEVBQUUsV0FBVztBQUFBO0FBa0JoQixTQUFTLGtCQUFrQixHQUFHO0FBQUEsRUFDNUIsSUFBSSxRQUFRLFFBQVE7QUFBQSxFQUNwQixJQUFJLFNBQVMsTUFBTSxRQUFRO0FBQUEsSUFDekIsUUFBUTtBQUFBLFNBQ0g7QUFBQSxNQUNILFFBQVEsa0JBQWtCLE1BQU0sTUFBTTtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBRVQsU0FBUyxpQkFBaUIsQ0FBQyxRQUFRO0FBQUEsRUFDakMsSUFBSSxDQUFDO0FBQUEsSUFBUSxPQUFPO0FBQUEsRUFDcEIsSUFBSSxVQUFVLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFDbkMsSUFBSSxhQUFhLENBQUM7QUFBQSxFQUNsQixVQUFVLEtBQUssUUFBUSxTQUFTO0FBQUEsSUFDOUIsSUFBSSxPQUFPLElBQUksV0FBVyxzQkFBc0I7QUFBQSxNQUM5QyxXQUFXLE9BQU8sSUFBSSxrQkFDcEIsSUFBSSxRQUNKLElBQUksWUFDSixJQUFJLE1BQ0osSUFBSSxhQUFhLElBQ25CO0FBQUEsSUFDRixFQUFPLFNBQUksT0FBTyxJQUFJLFdBQVcsU0FBUztBQUFBLE1BQ3hDLElBQUksSUFBSSxXQUFXO0FBQUEsUUFDakIsSUFBSSxtQkFBbUIsT0FBTyxJQUFJO0FBQUEsUUFDbEMsSUFBSSxPQUFPLHFCQUFxQixZQUFZO0FBQUEsVUFDMUMsSUFBSTtBQUFBLFlBQ0YsSUFBSSxRQUFRLElBQUksaUJBQWlCLElBQUksT0FBTztBQUFBLFlBQzVDLE1BQU0sUUFBUTtBQUFBLFlBQ2QsV0FBVyxPQUFPO0FBQUEsWUFDbEIsT0FBTyxHQUFHO0FBQUEsUUFFZDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUksV0FBVyxRQUFRLE1BQU07QUFBQSxRQUMzQixJQUFJLFFBQVEsSUFBSSxNQUFNLElBQUksT0FBTztBQUFBLFFBQ2pDLE1BQU0sUUFBUTtBQUFBLFFBQ2QsV0FBVyxPQUFPO0FBQUEsTUFDcEI7QUFBQSxJQUNGLEVBQU87QUFBQSxNQUNMLFdBQVcsT0FBTztBQUFBO0FBQUEsRUFFdEI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQThEVCxTQUFTLGFBQWE7QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDQztBQUFBLEVBQ0QsS0FBSyxPQUFPLGdCQUF3QixpQkFBUztBQUFBLElBQzNDLFFBQVEsUUFBUTtBQUFBLElBQ2hCLFVBQVUsUUFBUTtBQUFBLEVBQ3BCLENBQUM7QUFBQSxFQUNELElBQUksV0FBbUIsb0JBQ3JCLENBQUMsYUFBYTtBQUFBLElBQ0osd0JBQWdCLE1BQU0sYUFBYSxRQUFRLENBQUM7QUFBQSxLQUV0RCxDQUFDLFlBQVksQ0FDZjtBQUFBLEVBQ1Esd0JBQWdCLE1BQU0sUUFBUSxPQUFPLFFBQVEsR0FBRyxDQUFDLFNBQVMsUUFBUSxDQUFDO0FBQUEsRUFDM0UsdUJBQStCLHNCQUM3QixRQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxJQUNBLFVBQVUsTUFBTTtBQUFBLElBQ2hCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsV0FBVztBQUFBLEVBQ2IsQ0FDRjtBQUFBO0FBRUYsY0FBYyxjQUFjO0FBQzVCLElBQUksc0JBQXNCO0FBQzFCLElBQUksT0FBZSxtQkFDakIsU0FBUyxXQUFXO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLEVBQ0EsU0FBUztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsS0FDRztBQUFBLEdBQ0YsY0FBYztBQUFBLEVBQ2YsTUFBTSxhQUFxQixtQkFBVyxpQkFBaUI7QUFBQSxFQUN2RCxJQUFJLGFBQWEsT0FBTyxPQUFPLFlBQVksb0JBQW9CLEtBQUssRUFBRTtBQUFBLEVBQ3RFLElBQUk7QUFBQSxFQUNKLElBQUksYUFBYTtBQUFBLEVBQ2pCLElBQUksT0FBTyxPQUFPLFlBQVksWUFBWTtBQUFBLElBQ3hDLGVBQWU7QUFBQSxJQUNmLElBQUksV0FBVztBQUFBLE1BQ2IsSUFBSTtBQUFBLFFBQ0YsSUFBSSxhQUFhLElBQUksSUFBSSxPQUFPLFNBQVMsSUFBSTtBQUFBLFFBQzdDLElBQUksWUFBWSxHQUFHLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxXQUFXLFdBQVcsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsUUFDcEYsSUFBSSxPQUFPLGNBQWMsVUFBVSxVQUFVLFFBQVE7QUFBQSxRQUNyRCxJQUFJLFVBQVUsV0FBVyxXQUFXLFVBQVUsUUFBUSxNQUFNO0FBQUEsVUFDMUQsS0FBSyxPQUFPLFVBQVUsU0FBUyxVQUFVO0FBQUEsUUFDM0MsRUFBTztBQUFBLFVBQ0wsYUFBYTtBQUFBO0FBQUEsUUFFZixPQUFPLEdBQUc7QUFBQSxRQUNWLFFBQ0UsT0FDQSxhQUFhLDBHQUNmO0FBQUE7QUFBQSxJQUVKO0FBQUEsRUFDRjtBQUFBLEVBQ0EsSUFBSSxPQUFPLFFBQVEsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUFBLEVBQ25DLEtBQUssZ0JBQWdCLGFBQWEsb0JBQW9CLG9CQUNwRCxVQUNBLElBQ0Y7QUFBQSxFQUNBLElBQUksa0JBQWtCLG9CQUFvQixJQUFJO0FBQUEsSUFDNUMsU0FBUztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFDRCxTQUFTLFdBQVcsQ0FBQyxPQUFPO0FBQUEsSUFDMUIsSUFBSTtBQUFBLE1BQVMsUUFBUSxLQUFLO0FBQUEsSUFDMUIsSUFBSSxDQUFDLE1BQU0sa0JBQWtCO0FBQUEsTUFDM0IsZ0JBQWdCLEtBQUs7QUFBQSxJQUN2QjtBQUFBO0FBQUEsRUFFRixJQUFJLHVCQUVzQixzQkFDdEIsS0FDQTtBQUFBLE9BQ0s7QUFBQSxPQUNBO0FBQUEsSUFDSCxNQUFNLGdCQUFnQjtBQUFBLElBQ3RCLFNBQVMsY0FBYyxpQkFBaUIsVUFBVTtBQUFBLElBQ2xELEtBQUssVUFBVSxjQUFjLFdBQVc7QUFBQSxJQUN4QztBQUFBLElBQ0EsaUJBQWlCLENBQUMsY0FBYyxhQUFhLFdBQVcsU0FBYztBQUFBLEVBQ3hFLENBQ0Y7QUFBQSxFQUVGLE9BQU8sa0JBQWtCLENBQUMsNkJBQXFDLHNCQUFzQixrQkFBVSxNQUFNLHNCQUE4QixzQkFBYyxtQkFBbUIsRUFBRSxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUk7QUFBQSxDQUUzTDtBQUNBLEtBQUssY0FBYztBQUNuQixJQUFJLFVBQWtCLG1CQUNwQixTQUFTLGNBQWM7QUFBQSxFQUNyQixnQkFBZ0Isa0JBQWtCO0FBQUEsRUFDbEMsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVyxnQkFBZ0I7QUFBQSxFQUMzQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsS0FDRztBQUFBLEdBQ0YsS0FBSztBQUFBLEVBQ04sSUFBSSxPQUFPLGdCQUFnQixJQUFJLEVBQUUsVUFBVSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFELElBQUksWUFBVyxZQUFZO0FBQUEsRUFDM0IsSUFBSSxjQUFzQixtQkFBVyxzQkFBc0I7QUFBQSxFQUMzRCxNQUFNLFdBQVcsYUFBcUIsbUJBQVcsaUJBQWlCO0FBQUEsRUFDbEUsSUFBSSxrQkFBa0IsZUFBZSxRQUVyQyx1QkFBdUIsSUFBSSxLQUFLLG1CQUFtQjtBQUFBLEVBQ25ELElBQUksYUFBYSxVQUFVLGlCQUFpQixVQUFVLGVBQWUsSUFBSSxFQUFFLFdBQVcsS0FBSztBQUFBLEVBQzNGLElBQUksbUJBQW1CLFVBQVM7QUFBQSxFQUNoQyxJQUFJLHVCQUF1QixlQUFlLFlBQVksY0FBYyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDakosSUFBSSxDQUFDLGVBQWU7QUFBQSxJQUNsQixtQkFBbUIsaUJBQWlCLFlBQVk7QUFBQSxJQUNoRCx1QkFBdUIsdUJBQXVCLHFCQUFxQixZQUFZLElBQUk7QUFBQSxJQUNuRixhQUFhLFdBQVcsWUFBWTtBQUFBLEVBQ3RDO0FBQUEsRUFDQSxJQUFJLHdCQUF3QixVQUFVO0FBQUEsSUFDcEMsdUJBQXVCLGNBQWMsc0JBQXNCLFFBQVEsS0FBSztBQUFBLEVBQzFFO0FBQUEsRUFDQSxNQUFNLG1CQUFtQixlQUFlLE9BQU8sV0FBVyxTQUFTLEdBQUcsSUFBSSxXQUFXLFNBQVMsSUFBSSxXQUFXO0FBQUEsRUFDN0csSUFBSSxXQUFXLHFCQUFxQixjQUFjLENBQUMsT0FBTyxpQkFBaUIsV0FBVyxVQUFVLEtBQUssaUJBQWlCLE9BQU8sZ0JBQWdCLE1BQU07QUFBQSxFQUNuSixJQUFJLFlBQVksd0JBQXdCLFNBQVMseUJBQXlCLGNBQWMsQ0FBQyxPQUFPLHFCQUFxQixXQUFXLFVBQVUsS0FBSyxxQkFBcUIsT0FBTyxXQUFXLE1BQU0sTUFBTTtBQUFBLEVBQ2xNLElBQUksY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLGNBQWMsV0FBVyxrQkFBdUI7QUFBQSxFQUNwRCxJQUFJO0FBQUEsRUFDSixJQUFJLE9BQU8sa0JBQWtCLFlBQVk7QUFBQSxJQUN2QyxZQUFZLGNBQWMsV0FBVztBQUFBLEVBQ3ZDLEVBQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQSxXQUFXLFdBQVc7QUFBQSxNQUN0QixZQUFZLFlBQVk7QUFBQSxNQUN4QixrQkFBa0Isa0JBQWtCO0FBQUEsSUFDdEMsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUc7QUFBQTtBQUFBLEVBRTVCLElBQUksUUFBUSxPQUFPLGNBQWMsYUFBYSxVQUFVLFdBQVcsSUFBSTtBQUFBLEVBQ3ZFLHVCQUErQixzQkFDN0IsTUFDQTtBQUFBLE9BQ0s7QUFBQSxJQUNILGdCQUFnQjtBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsR0FDQSxPQUFPLGFBQWEsYUFBYSxTQUFTLFdBQVcsSUFBSSxRQUMzRDtBQUFBLENBRUo7QUFDQSxRQUFRLGNBQWM7QUFDdEIsSUFBSSxPQUFlLG1CQUNqQjtBQUFBLEVBQ0UsV0FBVztBQUFBLEVBQ1g7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsU0FBUztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEtBQ0c7QUFBQSxHQUNGLGlCQUFpQjtBQUFBLEVBQ2xCLElBQUksU0FBUyxVQUFVO0FBQUEsRUFDdkIsSUFBSSxhQUFhLGNBQWMsUUFBUSxFQUFFLFNBQVMsQ0FBQztBQUFBLEVBQ25ELElBQUksYUFBYSxPQUFPLFlBQVksTUFBTSxRQUFRLFFBQVE7QUFBQSxFQUMxRCxJQUFJLGFBQWEsT0FBTyxXQUFXLFlBQVksb0JBQW9CLEtBQUssTUFBTTtBQUFBLEVBQzlFLElBQUksZ0JBQWdCLENBQUMsVUFBVTtBQUFBLElBQzdCLFlBQVksU0FBUyxLQUFLO0FBQUEsSUFDMUIsSUFBSSxNQUFNO0FBQUEsTUFBa0I7QUFBQSxJQUM1QixNQUFNLGVBQWU7QUFBQSxJQUNyQixJQUFJLFlBQVksTUFBTSxZQUFZO0FBQUEsSUFDbEMsSUFBSSxlQUFlLFdBQVcsYUFBYSxZQUFZLEtBQUs7QUFBQSxJQUM1RCxPQUFPLGFBQWEsTUFBTSxlQUFlO0FBQUEsTUFDdkM7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsRUFFSCx1QkFBK0Isc0JBQzdCLFFBQ0E7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFVBQVUsaUJBQWlCLFdBQVc7QUFBQSxPQUNuQztBQUFBLElBQ0gsaUJBQWlCLENBQUMsY0FBYyxhQUFhLFdBQVcsU0FBYztBQUFBLEVBQ3hFLENBQ0Y7QUFBQSxDQUVKO0FBQ0EsS0FBSyxjQUFjO0FBQ25CLFNBQVMsaUJBQWlCO0FBQUEsRUFDeEI7QUFBQSxFQUNBO0FBQUEsS0FDRztBQUFBLEdBQ0Y7QUFBQSxFQUNELElBQUksZUFBdUIsbUJBQVcsZ0JBQWdCO0FBQUEsRUFDdEQsTUFBTSxhQUFxQixtQkFBVyxpQkFBaUI7QUFBQSxFQUN2RCxJQUFJLFlBQVcsWUFBWTtBQUFBLEVBQzNCLElBQUksVUFBVSxXQUFXO0FBQUEsRUFDekIscUJBQXFCLEVBQUUsUUFBUSxXQUFXLENBQUM7QUFBQSxFQUMzQyxJQUFJLFNBQWlCLGdCQUNuQixNQUFNO0FBQUEsSUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFBQSxNQUFRLE9BQU87QUFBQSxJQUNyQyxJQUFJLFVBQVUsd0JBQ1osV0FDQSxTQUNBLFVBQ0EsTUFDRjtBQUFBLElBQ0EsT0FBTyxZQUFZLFVBQVMsTUFBTSxVQUFVO0FBQUEsS0FJOUMsQ0FBQyxDQUNIO0FBQUEsRUFDQSxJQUFJLENBQUMsZ0JBQWdCLGFBQWEsV0FBVztBQUFBLElBQzNDLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxJQUFJLGlCQUFpQixDQUFDLGFBQWEsZUFBZTtBQUFBLElBQ2hELElBQUksQ0FBQyxPQUFPLFFBQVEsU0FBUyxDQUFDLE9BQU8sUUFBUSxNQUFNLEtBQUs7QUFBQSxNQUN0RCxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUEsTUFDNUMsT0FBTyxRQUFRLGFBQWEsRUFBRSxJQUFJLEdBQUcsRUFBRTtBQUFBLElBQ3pDO0FBQUEsSUFDQSxJQUFJO0FBQUEsTUFDRixJQUFJLFlBQVksS0FBSyxNQUFNLGVBQWUsUUFBUSxXQUFXLEtBQUssSUFBSTtBQUFBLE1BQ3RFLElBQUksVUFBVSxVQUFVLGNBQWMsT0FBTyxRQUFRLE1BQU07QUFBQSxNQUMzRCxJQUFJLE9BQU8sWUFBWSxVQUFVO0FBQUEsUUFDL0IsT0FBTyxTQUFTLEdBQUcsT0FBTztBQUFBLE1BQzVCO0FBQUEsTUFDQSxPQUFPLE9BQU87QUFBQSxNQUNkLFFBQVEsTUFBTSxLQUFLO0FBQUEsTUFDbkIsZUFBZSxXQUFXLFdBQVc7QUFBQTtBQUFBLEtBRXRDLFNBQVM7QUFBQSxFQUNaLHVCQUErQixzQkFDN0IsVUFDQTtBQUFBLE9BQ0s7QUFBQSxJQUNILDBCQUEwQjtBQUFBLElBQzFCLHlCQUF5QjtBQUFBLE1BQ3ZCLFFBQVEsSUFBSSxrQkFBa0IsS0FBSyxVQUNqQyxjQUFjLDhCQUNoQixNQUFNLEtBQUssVUFBVSxNQUFNO0FBQUEsSUFDN0I7QUFBQSxFQUNGLENBQ0Y7QUFBQTtBQUVGLGtCQUFrQixjQUFjO0FBQ2hDLFNBQVMsMEJBQTBCLENBQUMsVUFBVTtBQUFBLEVBQzVDLE9BQU8sR0FBRztBQUFBO0FBRVosU0FBUyxxQkFBcUIsQ0FBQyxVQUFVO0FBQUEsRUFDdkMsSUFBSSxNQUFjLG1CQUFXLGlCQUFpQjtBQUFBLEVBQzlDLFVBQVUsS0FBSywyQkFBMkIsUUFBUSxDQUFDO0FBQUEsRUFDbkQsT0FBTztBQUFBO0FBRVQsU0FBUyxtQkFBbUIsQ0FBQyxVQUFVO0FBQUEsRUFDckMsSUFBSSxRQUFnQixtQkFBVyxzQkFBc0I7QUFBQSxFQUNyRCxVQUFVLE9BQU8sMkJBQTJCLFFBQVEsQ0FBQztBQUFBLEVBQ3JELE9BQU87QUFBQTtBQUVULFNBQVMsbUJBQW1CLENBQUM7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsU0FBUztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxJQUNFLENBQUMsR0FBRztBQUFBLEVBQ04sSUFBSSxXQUFXLFlBQVk7QUFBQSxFQUMzQixJQUFJLFlBQVcsWUFBWTtBQUFBLEVBQzNCLElBQUksT0FBTyxnQkFBZ0IsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUFBLEVBQzNDLE9BQWUsb0JBQ2IsQ0FBQyxVQUFVO0FBQUEsSUFDVCxJQUFJLHVCQUF1QixPQUFPLE1BQU0sR0FBRztBQUFBLE1BQ3pDLE1BQU0sZUFBZTtBQUFBLE1BQ3JCLElBQUksV0FBVyxnQkFBcUIsWUFBSSxjQUFjLFdBQVcsU0FBUSxNQUFNLFdBQVcsSUFBSTtBQUFBLE1BQzlGLFNBQVMsSUFBSTtBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsS0FFRjtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLENBQ0Y7QUFBQTtBQW1DRixJQUFJLFlBQVk7QUFDaEIsSUFBSSxxQkFBcUIsTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTO0FBQ3RELFNBQVMsU0FBUyxHQUFHO0FBQUEsRUFDbkIsTUFBTSxXQUFXLHNCQUFzQixXQUEyQjtBQUFBLEVBQ2xFLE1BQU0sYUFBcUIsbUJBQVcsaUJBQWlCO0FBQUEsRUFDdkQsSUFBSSxpQkFBaUIsV0FBVztBQUFBLEVBQ2hDLE9BQWUsb0JBQ2IsT0FBTyxRQUFRLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDOUIsTUFBTSxRQUFRLFFBQVEsU0FBUyxVQUFVLFNBQVMsc0JBQ2hELFFBQ0EsUUFDRjtBQUFBLElBQ0EsSUFBSSxRQUFRLGFBQWEsT0FBTztBQUFBLE1BQzlCLElBQUksTUFBTSxRQUFRLGNBQWMsbUJBQW1CO0FBQUEsTUFDbkQsTUFBTSxPQUFPLE1BQU0sS0FBSyxnQkFBZ0IsUUFBUSxVQUFVLFFBQVE7QUFBQSxRQUNoRSxvQkFBb0IsUUFBUTtBQUFBLFFBQzVCO0FBQUEsUUFDQTtBQUFBLFFBQ0EsWUFBWSxRQUFRLFVBQVU7QUFBQSxRQUM5QixhQUFhLFFBQVEsV0FBVztBQUFBLFFBQ2hDLFdBQVcsUUFBUTtBQUFBLE1BQ3JCLENBQUM7QUFBQSxJQUNILEVBQU87QUFBQSxNQUNMLE1BQU0sT0FBTyxTQUFTLFFBQVEsVUFBVSxRQUFRO0FBQUEsUUFDOUMsb0JBQW9CLFFBQVE7QUFBQSxRQUM1QjtBQUFBLFFBQ0E7QUFBQSxRQUNBLFlBQVksUUFBUSxVQUFVO0FBQUEsUUFDOUIsYUFBYSxRQUFRLFdBQVc7QUFBQSxRQUNoQyxTQUFTLFFBQVE7QUFBQSxRQUNqQixPQUFPLFFBQVE7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLFdBQVcsUUFBUTtBQUFBLFFBQ25CLGdCQUFnQixRQUFRO0FBQUEsTUFDMUIsQ0FBQztBQUFBO0FBQUEsS0FHTCxDQUFDLFFBQVEsVUFBVSxjQUFjLENBQ25DO0FBQUE7QUFFRixTQUFTLGFBQWEsQ0FBQyxVQUFVLGFBQWEsQ0FBQyxHQUFHO0FBQUEsRUFDaEQsTUFBTSxhQUFxQixtQkFBVyxpQkFBaUI7QUFBQSxFQUN2RCxJQUFJLGVBQXVCLG1CQUFXLFlBQVk7QUFBQSxFQUNsRCxVQUFVLGNBQWMsa0RBQWtEO0FBQUEsRUFDMUUsS0FBSyxTQUFTLGFBQWEsUUFBUSxNQUFNLEVBQUU7QUFBQSxFQUMzQyxJQUFJLE9BQU8sS0FBSyxnQkFBZ0IsU0FBUyxTQUFTLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtBQUFBLEVBQ3JFLElBQUksWUFBVyxZQUFZO0FBQUEsRUFDM0IsSUFBSSxVQUFVLE1BQU07QUFBQSxJQUNsQixLQUFLLFNBQVMsVUFBUztBQUFBLElBQ3ZCLElBQUksU0FBUyxJQUFJLGdCQUFnQixLQUFLLE1BQU07QUFBQSxJQUM1QyxJQUFJLGNBQWMsT0FBTyxPQUFPLE9BQU87QUFBQSxJQUN2QyxJQUFJLHFCQUFxQixZQUFZLEtBQUssQ0FBQyxNQUFNLE1BQU0sRUFBRTtBQUFBLElBQ3pELElBQUksb0JBQW9CO0FBQUEsTUFDdEIsT0FBTyxPQUFPLE9BQU87QUFBQSxNQUNyQixZQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxPQUFPLE9BQU8sU0FBUyxDQUFDLENBQUM7QUFBQSxNQUNyRSxJQUFJLEtBQUssT0FBTyxTQUFTO0FBQUEsTUFDekIsS0FBSyxTQUFTLEtBQUssSUFBSSxPQUFPO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLLENBQUMsVUFBVSxXQUFXLFFBQVEsTUFBTSxNQUFNLE9BQU87QUFBQSxJQUNwRCxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssT0FBTyxRQUFRLE9BQU8sU0FBUyxJQUFJO0FBQUEsRUFDdEU7QUFBQSxFQUNBLElBQUksYUFBYSxLQUFLO0FBQUEsSUFDcEIsS0FBSyxXQUFXLEtBQUssYUFBYSxNQUFNLFdBQVcsVUFBVSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUM7QUFBQSxFQUN4RjtBQUFBLEVBQ0EsT0FBTyxXQUFXLElBQUk7QUFBQTtBQTJFeEIsSUFBSSxpQ0FBaUM7QUFDckMsSUFBSSx1QkFBdUIsQ0FBQztBQUM1QixTQUFTLHVCQUF1QixDQUFDLFdBQVUsU0FBUyxVQUFVLFFBQVE7QUFBQSxFQUNwRSxJQUFJLE1BQU07QUFBQSxFQUNWLElBQUksUUFBUTtBQUFBLElBQ1YsSUFBSSxhQUFhLEtBQUs7QUFBQSxNQUNwQixNQUFNLE9BQ0o7QUFBQSxXQUNLO0FBQUEsUUFDSCxVQUFVLGNBQWMsVUFBUyxVQUFVLFFBQVEsS0FBSyxVQUFTO0FBQUEsTUFDbkUsR0FDQSxPQUNGO0FBQUEsSUFDRixFQUFPO0FBQUEsTUFDTCxNQUFNLE9BQU8sV0FBVSxPQUFPO0FBQUE7QUFBQSxFQUVsQztBQUFBLEVBQ0EsSUFBSSxPQUFPLE1BQU07QUFBQSxJQUNmLE1BQU0sVUFBUztBQUFBLEVBQ2pCO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFFVCxTQUFTLG9CQUFvQjtBQUFBLEVBQzNCO0FBQUEsRUFDQTtBQUFBLElBQ0UsQ0FBQyxHQUFHO0FBQUEsRUFDTixNQUFNLFdBQVcsc0JBQXNCLHNCQUFpRDtBQUFBLEVBQ3hGLE1BQU0sdUJBQXVCLHVCQUF1QixvQkFDbEQsc0JBQ0Y7QUFBQSxFQUNBLE1BQU0sYUFBcUIsbUJBQVcsaUJBQWlCO0FBQUEsRUFDdkQsSUFBSSxZQUFXLFlBQVk7QUFBQSxFQUMzQixJQUFJLFVBQVUsV0FBVztBQUFBLEVBQ3pCLElBQUksYUFBYSxjQUFjO0FBQUEsRUFDdkIsa0JBQVUsTUFBTTtBQUFBLElBQ3RCLE9BQU8sUUFBUSxvQkFBb0I7QUFBQSxJQUNuQyxPQUFPLE1BQU07QUFBQSxNQUNYLE9BQU8sUUFBUSxvQkFBb0I7QUFBQTtBQUFBLEtBRXBDLENBQUMsQ0FBQztBQUFBLEVBQ0wsWUFDVSxvQkFBWSxNQUFNO0FBQUEsSUFDeEIsSUFBSSxXQUFXLFVBQVUsUUFBUTtBQUFBLE1BQy9CLElBQUksTUFBTSx3QkFBd0IsV0FBVSxTQUFTLFVBQVUsTUFBTTtBQUFBLE1BQ3JFLHFCQUFxQixPQUFPLE9BQU87QUFBQSxJQUNyQztBQUFBLElBQ0EsSUFBSTtBQUFBLE1BQ0YsZUFBZSxRQUNiLGNBQWMsZ0NBQ2QsS0FBSyxVQUFVLG9CQUFvQixDQUNyQztBQUFBLE1BQ0EsT0FBTyxPQUFPO0FBQUEsTUFDZCxRQUNFLE9BQ0Esb0dBQW9HLFNBQ3RHO0FBQUE7QUFBQSxJQUVGLE9BQU8sUUFBUSxvQkFBb0I7QUFBQSxLQUNsQyxDQUFDLFdBQVcsT0FBTyxRQUFRLFVBQVUsV0FBVSxTQUFTLFVBQVUsQ0FBQyxDQUN4RTtBQUFBLEVBQ0EsSUFBSSxPQUFPLGFBQWEsYUFBYTtBQUFBLElBQzNCLHdCQUFnQixNQUFNO0FBQUEsTUFDNUIsSUFBSTtBQUFBLFFBQ0YsSUFBSSxtQkFBbUIsZUFBZSxRQUNwQyxjQUFjLDhCQUNoQjtBQUFBLFFBQ0EsSUFBSSxrQkFBa0I7QUFBQSxVQUNwQix1QkFBdUIsS0FBSyxNQUFNLGdCQUFnQjtBQUFBLFFBQ3BEO0FBQUEsUUFDQSxPQUFPLEdBQUc7QUFBQSxPQUVYLENBQUMsVUFBVSxDQUFDO0FBQUEsSUFDUCx3QkFBZ0IsTUFBTTtBQUFBLE1BQzVCLElBQUksMkJBQTJCLFFBQVEsd0JBQ3JDLHNCQUNBLE1BQU0sT0FBTyxTQUNiLFNBQVMsQ0FBQyxZQUFXLGFBQWEsd0JBQXdCLFlBQVcsVUFBVSxVQUFVLE1BQU0sSUFBUyxTQUMxRztBQUFBLE1BQ0EsT0FBTyxNQUFNLDRCQUE0Qix5QkFBeUI7QUFBQSxPQUNqRSxDQUFDLFFBQVEsVUFBVSxNQUFNLENBQUM7QUFBQSxJQUNyQix3QkFBZ0IsTUFBTTtBQUFBLE1BQzVCLElBQUksMEJBQTBCLE9BQU87QUFBQSxRQUNuQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUksT0FBTywwQkFBMEIsVUFBVTtBQUFBLFFBQzdDLE9BQU8sU0FBUyxHQUFHLHFCQUFxQjtBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSTtBQUFBLFFBQ0YsSUFBSSxVQUFTLE1BQU07QUFBQSxVQUNqQixJQUFJLEtBQUssU0FBUyxlQUNoQixtQkFBbUIsVUFBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQzNDO0FBQUEsVUFDQSxJQUFJLElBQUk7QUFBQSxZQUNOLEdBQUcsZUFBZTtBQUFBLFlBQ2xCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLFFBQ0UsT0FDQSxJQUFJLFVBQVMsS0FBSyxNQUNoQixDQUNGLG1FQUNGO0FBQUE7QUFBQSxNQUVGLElBQUksdUJBQXVCLE1BQU07QUFBQSxRQUMvQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU8sU0FBUyxHQUFHLENBQUM7QUFBQSxPQUNuQixDQUFDLFdBQVUsdUJBQXVCLGtCQUFrQixDQUFDO0FBQUEsRUFDMUQ7QUFBQTtBQVlGLFNBQVMsV0FBVyxDQUFDLFVBQVUsU0FBUztBQUFBLEVBQ3RDLE1BQU0sWUFBWSxXQUFXLENBQUM7QUFBQSxFQUN0QixrQkFBVSxNQUFNO0FBQUEsSUFDdEIsSUFBSSxPQUFPLFdBQVcsT0FBTyxFQUFFLFFBQVEsSUFBUztBQUFBLElBQ2hELE9BQU8saUJBQWlCLFlBQVksVUFBVSxJQUFJO0FBQUEsSUFDbEQsT0FBTyxNQUFNO0FBQUEsTUFDWCxPQUFPLG9CQUFvQixZQUFZLFVBQVUsSUFBSTtBQUFBO0FBQUEsS0FFdEQsQ0FBQyxVQUFVLE9BQU8sQ0FBQztBQUFBO0FBdUJ4QixTQUFTLHNCQUFzQixDQUFDLE1BQU0sYUFBYSxDQUFDLEdBQUc7QUFBQSxFQUNyRCxJQUFJLFlBQW9CLG1CQUFXLHFCQUFxQjtBQUFBLEVBQ3hELFVBQ0UsYUFBYSxNQUNiLHdKQUNGO0FBQUEsRUFDQSxNQUFNLGFBQWEsc0JBQ2pCLHdCQUNGO0FBQUEsRUFDQSxJQUFJLE9BQU8sZ0JBQWdCLElBQUksRUFBRSxTQUFTLENBQUM7QUFBQSxFQUMzQyxJQUFJLENBQUMsVUFBVSxpQkFBaUI7QUFBQSxJQUM5QixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsSUFBSSxjQUFjLGNBQWMsVUFBVSxnQkFBZ0IsVUFBVSxRQUFRLEtBQUssVUFBVSxnQkFBZ0I7QUFBQSxFQUMzRyxJQUFJLFdBQVcsY0FBYyxVQUFVLGFBQWEsVUFBVSxRQUFRLEtBQUssVUFBVSxhQUFhO0FBQUEsRUFDbEcsT0FBTyxVQUFVLEtBQUssVUFBVSxRQUFRLEtBQUssUUFBUSxVQUFVLEtBQUssVUFBVSxXQUFXLEtBQUs7QUFBQTs7O0FDbmlVaEc7OztBQ3NDQTtBQUNBO0FBTUE7QUF3TUE7QUFDQTtBQXRQQTtBQXdDQSxTQUFTLGVBQWUsQ0FBQyxPQUFPO0FBQUEsRUFDOUIsdUJBQTZCLHNCQUFjLGdCQUFnQixFQUFFLFdBQW9CLHVCQUFjLE1BQU0sQ0FBQztBQUFBO0FBc2N4RyxJQUFJLHdCQUF3QixlQUFjOyIsCiAgImRlYnVnSWQiOiAiMkZFRTJGMzEzNjcxNTdFRDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
