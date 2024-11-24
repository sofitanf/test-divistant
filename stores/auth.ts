import { defineStore } from 'pinia';
import users from '~/static/data/user.json';
import { ref, computed } from 'vue';

type User = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<string>('');

    const isAuth = computed(() => user.value !== '');

    const login = (body: User) => {
      const { username, password } = body;
      const foundUser = users.find((item) => item.username === username);

      if (!foundUser) return { success: false, message: 'User not found' };
      if (foundUser.password !== password)
        return { success: false, message: 'Password incorrect' };

      user.value = foundUser.username;

      localStorage.setItem('user', foundUser.username);

      return {
        success: true,
        message: 'Login successfully',
        data: { username: foundUser.username },
      };
    };

    const logout = () => {
      user.value = '';
      localStorage.removeItem('user');
    };

    const initializeUser = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        user.value = userData;
      }
    };

    return {
      user,
      isAuth,
      login,
      logout,
      initializeUser,
    };
  },
  {
    persist: true,
  }
);
