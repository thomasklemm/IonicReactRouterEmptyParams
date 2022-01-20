import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";

interface PostPageProps extends RouteComponentProps<{ postId: string }> {}

const PostPage: React.FC<PostPageProps> = ({ match }) => {
  const { postId } = match.params;

  console.log("PostPage: postId", postId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts" />
          </IonButtons>
          <IonTitle>Post #{postId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Post #{postId}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding">
          <pre>match: {JSON.stringify(match, null, 2)}</pre>
          <pre>match.params: {JSON.stringify(match.params, null, 2)}</pre>
          <pre>match.params.postId: {postId ?? "undefined"}</pre>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PostPage;
