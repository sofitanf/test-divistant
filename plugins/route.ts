export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {});
});
