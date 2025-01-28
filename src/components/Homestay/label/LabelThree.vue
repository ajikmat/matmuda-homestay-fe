<template>
    <MeterGroup :value="value" class="no-labels" />
</template>

<script>
export default {
    data() {
        return {
            value: [{ color: '#34d399', value: 10 }],
        };
    },
};
</script>
