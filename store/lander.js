import { defineStore } from 'pinia';
import landerConfig from '~/lander.config.json';

export const useLanderStore = defineStore({
  id: 'lander-store',
  state: () => {
    return {
      followedLink: '',
      settings: landerConfig,
    };
  },
  actions: {
    getLanderInfo() {
      this.updateLander(landerConfig);
    },

    clearVersion() {
      this.settings['version'] = '';
    },

    updateLander(info) {
      Object.keys(info).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(this.settings, key) && info[key]) {
          this.settings[key] = info[key];
        }
      });
    },

    removeLanderValue(key) {
      if (key !== 'land') {
        this.settings[key] = '';
      } else {
        this.settings[key] = 'synergyacademy';
      }
    },
  },
  getters: {
    landerSettings: (state) => state.settings,
    landerUtms: (state) => state.utms,
  },
});
