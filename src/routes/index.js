import React, { Component, Suspense } from "react";
import { Route, Router, Redirect } from "react-router-dom";
import Routers from "./routes";
import * as Layout from "../layout";
import { history } from "../helpers";
import CodeSplitter from "helpers/CodeSplitter";
import { NotificationContainer } from "react-notifications";
import { logout } from "service/utilities";

import { change_login_status } from "action/NotificationAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IdleTimer, { useIdleTimer } from "react-idle-timer/dist/modern";

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
      "/trainer/results",
      "/mobile/login",
      "/mobiles/menu",
      "/mobiles/filter",
      "/mobiles/chat",
      "/terms",
      "/faq",
      "/privacy"
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
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      if (localStorage.getItem("token") !== null) {
        this.props.change_login_status({ loginStatus: false });
      }
      return (ev.returnValue = "Are you sure you want to close?");
    });
  }

  componentWillUnmount() {}

  handleOnActive = (event) => {
    console.log("user is active");
    if (localStorage.getItem("token") !== null) {
      this.props.change_login_status({ loginStatus: true });
    }
  };

  handleOnIdle = (event) => {
    console.log("user is idle");

    if (localStorage.getItem("token") !== null) {
      this.props.change_login_status({ loginStatus: false });
    }
  };

  render() {
    return (
      <Router history={history}>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          timeout={18000}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          onAction={this.handleOnAction}
          debounce={250}
        />
        <Suspense
          fallback={
            <div className="load_parent">
              <div className="loaderss"></div>
            </div>
          }
        >
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

  // handleOnAction (event) {
  //   console.log('user did something', event)
  // }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      change_login_status,
    },
    dispatch
  );
};

const RoutesClassC = connect(null, mapDispatchToProps)(RoutesClass);

export default RoutesClassC;
