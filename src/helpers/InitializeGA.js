import ReactGA from "react-ga";
import { history } from "helpers";
import config from "config";

export const initializeGA = () =>{

    const { googleAnalyticsId } = config;  
    
    if(!googleAnalyticsId) return;

    console.log('GA init')
    ReactGA.initialize(googleAnalyticsId);

    logPageView(window.location.pathname + window.location.search);
    history.listen(() => {        
     logPageView(window.location.pathname + window.location.search);    
    });
}

const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
