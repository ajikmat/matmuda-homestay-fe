import Lara from '@primevue/themes/lara';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { definePreset } from '@primevue/themes';

export function initComponent(app) {
    const preset = definePreset(Lara, {
        semantic: {
            primary: {
                50: '#eff8ff',
                100: '#ccdde9',
                200: '#99bbd3',
                300: '#6698bc',
                400: '#3376a6',
                500: '#005490',
                600: '#004373',
                700: '#003256',
                800: '#00223a',
                900: '#00111d',
            },
        },
    });

    app.use(ConfirmationService);
    app.use(ToastService);

    app.use(PrimeVue, {
        ripple: true,
        // inputVariant: 'filled',
        theme: {
            preset: preset,
            options: {
                darkModeSelector: '.dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities',
                },
            },
        },
    });
}
