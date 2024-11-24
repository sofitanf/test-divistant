export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const { isAuth } = storeToRefs(authStore);
  console.log(isAuth.value);

  if (!isAuth.value && (to.meta.middleware as unknown as string) === 'auth') {
    return navigateTo('/login');
  } else if (isAuth.value && to.name === 'login') {
    return navigateTo('/');
  }
});
