import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const PostsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ul>
          {[1, 2, 3, 4, 5].map((postId) => {
            return (
              <li key={`post-${postId}`}>
                <IonRouterLink routerLink={`/posts/${postId}`}>
                  Post #{postId}
                </IonRouterLink>
              </li>
            );
          })}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default PostsPage;
