import { defineStore } from "pinia";

const THEME_KEY = 'theme'

export const useThemeStore = defineStore({
 id: 'theme',
 state: () => ({
   theme: localStorage.getItem(THEME_KEY) || '#FDF7E4'
 }),
 actions: {
  setTheme(color) {
    this.theme = color;
    localStorage.setItem(THEME_KEY, color);
  }
}
});
