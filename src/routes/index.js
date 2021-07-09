import React, { Component, Suspense } from "react";
import { Route, Router, Redirect } from "react-router-dom";
import Routers from "./routes";
import * as Layout from "../layout";
import { history } from "../helpers";
import CodeSplitter from "helpers/CodeSplitter";
import { NotificationContainer } from "react-notifications";
import { logout } from "service/utilities";
class RoutesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderRoute: false,
      pathname: null,
      loading: true,
    };
  }

  routerGuard = (auth, path) => {
    // const expireTime =/ ;
    window.scrollTo(0, 0);

    const { pathname } = history.location || {};

    // console.log(pathname);

    const isUserLoggedIn =
      localStorage.getItem("token") || localStorage.getItem("admin-token");

    const noTokenPaths = [
      "/",
      "/welcome",
      "/forgot",
      "/trainer/signup",
      "/user/signup",
      "/admin/login",
      "/trainer/profile/",
      "/trainer/find",
      "/mobile/login",
      "/mobile/menu"
    ];

    const blockSignUpPath = ["/trainer/signup", "/user/signup", "/admin/login"];

    let emptyTokenPath = noTokenPaths.includes(pathname);

    if (pathname.includes("/trainer/profile/")) emptyTokenPath = true;

    // console.log(emptyTokenPath);

    if (isUserLoggedIn && blockSignUpPath.includes(pathname))
      return history.push("/");

    if (!isUserLoggedIn && !emptyTokenPath) {
      // console.log(pathname);

      logout();

      // console.log(path);
    }
  };

  componentDidMount() {
    this.routerGuard();
  }

  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          {Routers.map(
            ({
              component,
              name,
              componentPath = "",
              redirect,
              path,
              exact = false,
              auth = true,
              childrens = [],
            }) => {
              if (childrens.length > 0) {
                return (
                  <Route
                    path={path}
                    exact={exact}
                    key={path}
                    render={(props) => {
                      if (redirect) {
                        if (props.location.pathname == path) {
                          props.history.push(redirect);
                        }
                      }

                      const LayoutComponent = Layout[component];
                      console.log(component);

                      return (
                        <LayoutComponent {...props}>
                          {childrens.map(
                            ({
                              component: ChildrenComponent,
                              componentPath: childComponentPath,
                              name = "",
                              path: childrenPath,
                              exact = false,
                              auth = true,
                            }) => {
                              CodeSplitter.addComponent(
                                childComponentPath,
                                name
                              );

                              // console.log(path + childrenPath);
                              // this.routerGuard(auth, path + childrenPath);

                              return (
                                <Route
                                  path={path + childrenPath}
                                  exact={exact}
                                  key={path + childrenPath}
                                  render={(props) => {
                                    let PageComponent = CodeSplitter.getComponent(
                                      name
                                    );

                                    return <PageComponent {...props} />;
                                  }}
                                />
                              );
                            }
                          )}
                        </LayoutComponent>
                      );
                    }}
                  />
                );
              }

              CodeSplitter.addComponent(componentPath, name);

              return (
                <Route
                  path={path}
                  exact={exact}
                  key={component || 2322}
                  render={(props) => {
                    if (component) {
                      let PageComponent = CodeSplitter.getComponent(name);
                      return <PageComponent />;
                    }

                    if (redirect) {
                      if (props.location.pathname == path) {
                        return <Redirect to={redirect} />;
                      }
                    }

                    return <div></div>;
                  }}
                />
              );
            }
          )}
          <NotificationContainer />
        </Suspense>
      </Router>
    );
  }
}

export default RoutesClass;
