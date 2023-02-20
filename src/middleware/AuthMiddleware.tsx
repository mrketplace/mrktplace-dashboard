import LoginView from "../views/auth/LoginView";
import User from "../mrktplace-models/User";

export default class AuthMiddleware {
  // Methods
  // Check authentication status
  static checkAuthState() {
    // console.log('current path: ' + window.location.pathname); //! debug
    // console.log('authenticated user: ' + User.authUser); //! debug
    // If user is already logged in and want to go to the login view...
    if (window.location.pathname === "/login" && User.authUser !== null)
      window.location.replace("/");
    if (window.location.pathname !== "/login" && User.authUser === null)
      // If user isn't logged in...
      window.location.replace("/login");
    if (window.location.pathname === "/" && User.authUser !== null)
      // If user isn't logged in...
      window.location.replace("/home");
  }
  // Make a view private for unauthenticated users
  static privateRoute(component: JSX.Element): JSX.Element {
    if (User.authUser === null) return <LoginView />;
    console.log('User logged in...');
    return component;
  }
}
