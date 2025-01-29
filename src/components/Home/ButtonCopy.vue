<template>
    <Toast />

    <button @click="copyToClipboard" class="hover:bg-gray-200 hover:text-gray-500 rounded-full font-bold text-center">
        <i class="pi pi-copy"></i>
    </button>
</template>

<script>
export default {
    data() {
        return {
            textToCopy: '107, T53, Kampung Sekati, 21200 Kuala Terengganu, Terengganu, Malaysia',
        };
    },
    methods: {
        async copyToClipboard() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Text Copied', life: 3000 });
            if (this.textToCopy) {
                try {
                    await navigator.clipboard.writeText(this.textToCopy);
                } catch (error) {
                    console.error('Failed to copy text:', error);
                }
            }
        },
    },
};
</script>
