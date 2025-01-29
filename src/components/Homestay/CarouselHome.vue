<template>
    <div class="w-full">
        {{ addResult }}
        <Carousel
            :showIndicators="false"
            :value="reviews"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
        >
            <template #item="slotProps">
                <div class="border rounded-lg flex flex-col p-5 h-[300px] mx-2 shadow-sm">
                    <div class="flex justify-between">
                        <Skeleton width="10rem" class="mb-2" v-if="isLoading"></Skeleton>
                        <Rating v-model="slotProps.data.value" disabled="" />
                        <Skeleton width="5rem" class="mb-2" v-if="isLoading"></Skeleton>
                        <div>{{ slotProps.data.date }}</div>
                    </div>
                    <Skeleton width="300px" height="150px" v-if="isLoading"></Skeleton>
                    <div class="text-lg text-gray-600 mt-10 h-[150px] w-[300px]">{{ slotProps.data.description }}</div>

                    <div class="flex items-center mb-4">
                        <Skeleton shape="circle" size="4rem" class="mr-2" v-if="isLoading"></Skeleton>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwo8eJYb8h6_V7THlADVmoSbVkJQw6k08Liw&s"
                            :alt="slotProps.data.name"
                            class="w-16 h-16 object-cover mr-4"
                        />
                        <div class="flex flex-col">
                            <Skeleton width="5rem" class="mb-2" v-if="isLoading"></Skeleton>
                            <div class="font-bold text-lg">{{ slotProps.data.name }}</div>
                            <Skeleton width="5rem" class="mb-2" v-if="isLoading"></Skeleton>
                            <div>{{ slotProps.data.email }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { useReviewStore } from '@/stores/reviewStore';

export default {
    created() {
        this.loadReviews();
    },
    data() {
        return {
            isLoading: false,
            dataStore: useReviewStore(),
            reviews: [],
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numVisible: 2,
                    numScroll: 1,
                },
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 1,
                },
                {
                    breakpoint: '767px',
                    numVisible: 2,
                    numScroll: 1,
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                    numScroll: 1,
                },
            ],
        };
    },
    methods: {
        async loadReviews() {
            this.isLoading = true;
            await this.dataStore.loadReviewData();
            this.isLoading = false;
        },
    },

    computed: {
        addResult() {
            this.reviews = this.dataStore.AllReviews;
        },
    },
};
</script>
