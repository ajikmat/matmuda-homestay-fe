<template>
    <button
        type="button"
        @click="toggle"
        class="bg-white text-gray-600 hover:bg-gray-200 flex flex-col item-start border px-4 py-2 w-full rounded-lg"
    >
        <div class="flex flex-col items-start">
            <div class="font-bold text-black mb-1">Check-In / Check-Out</div>

            <div class="flex items-center w-full">
                <i class="pi pi-calendar text-2xl text-gray-600 mr-2"></i>
                <div>{{ formatedDate }}</div>
            </div>
        </div>
    </button>

    <Popover ref="op">
        <div class="flex flex-col mb-4 items-start">
            <div class="font-bold text-xl text-black">{{ dayCount ? dayCount : 'Select Dates' }} {{ nightShow }}</div>

            <div>{{ dateBelow ? dateBelow : 'Add your travel dates' }}</div>
        </div>

        <DatePicker
            :inline="inline"
            v-model="dates"
            selectionMode="range"
            :manualInput="false"
            placeholder="Pick a Date"
        />
    </Popover>
</template>

<script>
export default {
    emits: ['date-input'],
    data() {
        return {
            dates: null,
            inline: true,
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);

            this.$emit('date-input', this.dateBelow);
        },
    },
    computed: {
        formatedDate() {
            if (this.dates && this.dates.length === 2) {
                const [start, end] = this.dates;

                const options = { year: 'numeric', month: 'short', day: 'numeric' };

                const formatter = new Intl.DateTimeFormat('en-US', options);
                if (end) {
                    return `${formatter.format(start)} - ${formatter.format(end)}`;
                }
                return `${formatter.format(start)}`;
            }

            return 'Pick a date';
        },
        dayCount() {
            if (this.dates && this.dates.length === 2) {
                const [start, end] = this.dates.map((date) => new Date(date));
                if (start && end) {
                    const timeDifference = end.getTime() - start.getTime();
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    return days >= 0 ? days : 0;
                }
            }
            return null;
        },
        nightShow() {
            if (this.dayCount >= 1) {
                return 'Nights';
            } else {
                return '';
            }
        },
        dateBelow() {
            if (this.dates && this.dates.length === 2) {
                const [start, end] = this.dates;

                const options = { year: 'numeric', month: 'short', day: 'numeric' };

                const formatter = new Intl.DateTimeFormat('en-US', options);
                if (end) {
                    return `${formatter.format(start)} - ${formatter.format(end)}`;
                }
                return `${formatter.format(start)}`;
            } else {
                return '';
            }
        },
    },
};
</script>
