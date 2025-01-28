<template>
    <button
        type="button"
        @click="toggle"
        class="bg-white text-gray-600 hover:bg-gray-200 flex flex-col item-start border px-4 py-2 w-full rounded-lg"
    >
        <div class="font-bold text-black">Place</div>
        <div class="flex mt-1 space-x-2 items-center">
            <i class="pi pi-home text-2xl"></i>
            <div>{{ selectedPlace ? selectedPlace.name : 'Select Place' }}</div>
        </div>
    </button>

    <Popover ref="op" class="overflow-hidden my-0" :pt="{ content: { class: ['p-0'] } }">
        <div class="w-[300px]">
            <ul class="!p-0 flex flex-col">
                <li
                    v-for="place in places"
                    :key="place.name"
                    @click="selectPlace(place)"
                    class="flex text-wrap text-start hover:bg-gray-200 cursor-pointer rounded-md"
                >
                    <div class="flex items-center py-2 px-4">
                        <img :src="place.imgSrc" :alt="places.name" class="w-12 aspect-square rounded-lg" />
                        <div class="px-4">
                            <div
                                class="font-bold text-lg"
                                :class="selectedPlace === place ? 'text-purple-500' : 'text-black'"
                            >
                                {{ place.name }}
                            </div>
                            <div class="">
                                {{ place.description }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </Popover>
</template>

<script>
export default {
    emits: ['selected-place', 'background-change'],
    data() {
        return {
            selectedPlace: null,
            places: [
                {
                    name: 'Muda cottage',
                    description: 'Lorem ipsum dolor sit amet consect adipisicing elit.',
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fmuda-cottage-banner.JPG?alt=media',
                },
                {
                    name: 'aDLi.suite',
                    description: 'Lorem ipsum dolor sit amet consect adipisicing elit.',
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fmuda-cottage-banner.JPG?alt=media',
                },
                {
                    name: "d'Arif Homestay",
                    description: 'Lorem ipsum dolor sit amet consect adipisicing elit.',
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fmuda-cottage-banner.JPG?alt=media',
                },
            ],
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        selectPlace(place) {
            this.selectedPlace = place;
            this.$refs.op.hide();
            this.$emit('selected-place', place.name);
            this.$emit('background-change', place.name);
        },
    },
};
</script>
