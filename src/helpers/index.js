import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "../reducer";
import thunk from "redux-thunk";
import routers from "routes/routes";
import { api } from "service/api";
import { Toast } from "service/toast";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({ api, Toast }))
);

export const store = createStore(reducers, enhancers);
export const history = require("history").createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

let routerCache = {};

export const pageNavigationByName = (locationDetails) => {
  let { name: locationName, params = "", ...rest } = locationDetails;

  let pathname = "";

  let locationProps = rest || {};

  if (routerCache.hasOwnProperty(locationName)) {
    pathname = routerCache[locationName];
  } else {
    for (let i = 0; i < routers.length; i++) {
      let { name = "", childrens = [], path: parentPath } = routers[i];

      if (name === locationName) {
        pathname = parentPath;
        routerCache[locationName] = parentPath;
        break;
      } else {
        for (let j = 0; j < childrens.length; j++) {
          let { name = "", path = "" } = childrens[j];

          if (name === locationName) {
            let fullPath = `${parentPath}${path}`;
            pathname = fullPath;
            routerCache[locationName] = fullPath;
            break;
          }
        }
      }

      if (pathname) break;
    }
  }

  if (params) {
    pathname = Object.keys(params).reduce((acc, keyName) => {
      return acc.replace(`:${keyName}`, params[keyName]);
    }, pathname);
  }

  history.push({ pathname, ...locationProps });
};

export const nextPathReRouter = () => {
  const { search } = history.location;
  const nextPath = search.split("?") ? search.split("?")[1] : "";
  if (nextPath) {
    const decodedNextPath = decodeURIComponent(nextPath).split("=")[1];
    // console.log(decodedNextPath);
    history.push(decodedNextPath);
  }

  return nextPath;
};

export const nextPathPusher = (url) => {
  const { search } = history.location;
  let nextPathTitle = encodeURIComponent("nextpath=");
  const nextPath = search.split("?") ? search.split(nextPathTitle)[1] : "";

  let finalURL = url;

  if (nextPath) {
    finalURL = `${url}?${encodeURIComponent("nextpath=")}${nextPath}`;
  }

  history.push(finalURL);
};
