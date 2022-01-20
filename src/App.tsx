import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { diamondOutline, cogOutline } from "ionicons/icons";

// Pages
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import SettingsPage from "./pages/SettingsPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/" render={() => <Redirect to="/posts" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="posts" href="/posts">
            <IonIcon icon={diamondOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/settings">
            <IonIcon icon={cogOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
