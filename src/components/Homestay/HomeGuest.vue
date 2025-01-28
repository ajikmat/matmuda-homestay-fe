<template>
    <button
        type="button"
        @click="toggle"
        class="bg-white text-gray-600 hover:bg-gray-200 flex flex-col item-start border px-4 py-2 rounded-lg w-full"
    >
        <div class="flex flex-col items-start">
            <div class="font-bold text-black mb-1">Guest</div>
            <div class="flex item-center space-x-2">
                <i class="pi pi-users text-2xl"></i>
                <div>{{ adultSubmit }} {{ childSubmit }}</div>
            </div>
        </div>
    </button>

    <Popover ref="op" class="overflow-hidden">
        <div class="w-[300px] items-center justify-center">
            <div class="grid grid-cols-3 mb-2 items-center">
                <div class="font-bold col-span-1 my-auto">Adult</div>
                <div class="col-span-2">
                    <InputNumber
                        input-class="w-full text-center"
                        v-model="valueAdult"
                        inputId="horizontal-buttons"
                        showButtons
                        buttonLayout="horizontal"
                        :step="1"
                    >
                        <template #incrementbuttonicon>
                            <span class="pi pi-plus" />
                        </template>
                        <template #decrementbuttonicon>
                            <span class="pi pi-minus" />
                        </template>
                    </InputNumber>
                </div>
            </div>
            <div class="grid grid-cols-3 items-center">
                <div class="font-bold col-span-1">Children</div>
                <div class="col-span-2">
                    <InputNumber
                        input-class="w-full text-center"
                        v-model="valueChildren"
                        inputId="horizontal-buttons"
                        showButtons
                        buttonLayout="horizontal"
                        :step="1"
                    >
                        <template #incrementbuttonicon>
                            <span class="pi pi-plus" />
                        </template>
                        <template #decrementbuttonicon>
                            <span class="pi pi-minus" />
                        </template>
                    </InputNumber>
                </div>
            </div>
        </div>
    </Popover>
</template>

<script>
export default {
    data() {
        return {
            valueAdult: 1,
            valueChildren: 0,
            childShow: null,
        };
    },
    computed: {
        adultSubmit() {
            if (this.valueAdult >= 2) {
                return this.valueAdult + ' Adults';
            } else {
                return this.valueAdult + ' Adult';
            }
        },
        childSubmit() {
            if (this.valueChildren >= 2) {
                return ', ' + this.valueChildren + ' Children';
            } else if (this.valueChildren === 0) {
                return '';
            } else {
                return ', ' + this.valueChildren + ' Child';
            }
        },
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
    },
};
</script>
