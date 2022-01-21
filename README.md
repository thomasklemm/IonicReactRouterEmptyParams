# IonicReactRouter: Empty Params After Fallback Route Redirect Bug

This repo is meant to illustrate the bug described in https://github.com/ionic-team/ionic-framework/issues/23743.

When using a `<Redirect>` (without a path, as a fallback route) in `<IonRouterOutlet>`, param parsing breaks for the entire user session until a reload is happening.
`match.params` is always an empty object from then on.

Relevant commits:
1) Introducing the fallback redirect that breaks the app: [Commit 1](https://github.com/thomasklemm/IonicReactRouterEmptyParams/commit/69ea32a447fd80042fd243e3e6359add5d0f807b)
2) When using a `<Switch>` component in `<IonReactRouter>`, the issue gets remedied: [Commit 2](https://github.com/thomasklemm/IonicReactRouterEmptyParams/commit/a6f7fe368e5aab274975151ede41b83aa3e80114)

Screen recording:


Relevant docs:
- [Ionic React Routing: Fallback Route](https://ionicframework.com/docs/react/navigation#fallback-route)
- [Ionic React Routing: Switches in `<IonRouterOutlet>`](https://ionicframework.com/docs/react/navigation#switches-in-ionrouteroutlet)
  Switch isn't supposed to make a difference (but it actually does)
