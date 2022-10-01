const paths = {
  root: "/",
  error: "/error",
  general: {
    home: "/dashboard",
    about: "/about",
    validate: "/validate-token",
    notFound: "/not-found",
    styleSamples: "/style-samples",
  },
  users: {
    root: "/users",
    detail: "/users/:id",
  },
  posts: {
    root: "/posts",
    detail: "/posts/:id",
  },
  groups: {
    root: "/groups",
    detail: "/groups/:id",
  },
  reports: {
    root: "/reports",
    detail: "/reports/:id",
  },
};
export default paths;
