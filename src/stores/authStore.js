import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    async login(email, password) {
      // Simulación de login
      this.user = {
        id: '1',
        name: 'Usuario Demo',
        email
      };
      this.isAuthenticated = true;
    },

    async register(name, email, password) {
      // Simulación de registro
      this.user = {
        id: '1',
        name,
        email
      };
      this.isAuthenticated = true;
    },

    async deleteAccount() {
      // Simulación de eliminación de cuenta
      this.user = null;
      this.isAuthenticated = false;
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
    }
  }
});