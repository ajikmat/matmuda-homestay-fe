<template>
    <button
        type="button"
        @click="toggle"
        class="bg-white text-gray-600 hover:bg-gray-200 flex flex-col item-start border px-4 py-2 w-1/4 rounded-lg"
    >
        <div class="flex flex-col">
            <div class="flex space-x-2 mb-1">
                <div class="font-bold text-black">Check-In</div>
                <div class="font-bold text-black">Check-Out</div>
            </div>

            <div class="flex items-center w-full">
                <i class="pi pi-calendar text-2xl text-gray-600 mr-2"></i>
                <div>{{ formatedDate }}</div>
            </div>
        </div>
    </button>

    <Popover ref="op">
        <DatePicker
            :inline="inline"
            :view="view"
            v-model="dates"
            inputClass="border-none p-0 hover:bg-gray-200 "
            selectionMode="range"
            :manualInput="false"
            :placeholder="placeholder"
        />
    </Popover>
</template>

<script>
export default {
    data() {
        return {
            dates: null,
            inline: true,
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
            console.log(this.dates);
        },
    },
    computed: {
        placeholder() {
            return 'Pick a Date';
        },
        formatedDate() {
            if (this.dates && this.dates.length === 2) {
                const [start, end] = this.dates;
                return `${start ? start.toLocaleDateString() : ''} - ${end ? end.toLocaleDateString() : ''}`;
            }
            return 'Pick a date';
        },
    },
};
</script>
