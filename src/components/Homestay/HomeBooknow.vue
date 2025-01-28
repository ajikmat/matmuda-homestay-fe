<template>
    <button
        class="bg-purple-700 hover:bg-purple-400 hover:text-purple-700 text-purple-100 rounded-lg font-bold text-center py-6 px-4 w-full"
        @click="openWhatsApp"
    >
        Book now
    </button>
</template>

<script>
export default {
    data() {
        return {
            phoneNum: '179001640',
            customMessage: 'Hello! I"d like to reserve your homestay',
        };
    },
    methods: {
        openWhatsApp() {
            const encodedMessage = encodeURIComponent(this.customMessage);
            const whatsappUrl = `https://wa.me/${this.phoneNum}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        },
    },
};
</script>
