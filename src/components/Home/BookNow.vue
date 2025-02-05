<template>
    <Toast />
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
            isSubmit: true,
            formIsValid: true,
        };
    },
    props: {
        adult: {
            type: Number,
            required: true,
        },
        child: {
            type: Number,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            phoneNum: '179001640',
        };
    },

    methods: {
        openWhatsApp() {
            const encodedMessage = encodeURIComponent(this.customMessage);
            const whatsappUrl = `https://wa.me/${this.phoneNum}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        },
    },
    computed: {
        customMessage() {
            if (this.adult + this.child >= 2) {
                return `Hi Ajik, I would like to book your ${this.place} homestay from ${this.date} for ${
                    this.adult + this.child
                } peoples . Please let me know if it's available. Thank you!`;
            } else {
                return `Hi Ajik, I would like to book your ${this.place} homestay from ${this.date} for ${
                    this.adult + this.child
                } people . Please let me know if it's available. Thank you!`;
            }
        },
    },
};
</script>
