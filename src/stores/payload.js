import { defineStore } from 'pinia';

export const usePayloadStore = defineStore('payload', {
    state: () => ({ payload: {} }),
    getters: {},
    actions: {
        setPayload(value) {
            this.payload = value;
        },
    },
});
