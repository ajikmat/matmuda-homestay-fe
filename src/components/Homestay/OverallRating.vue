<template>
    {{ review }}
    <div class="flex w-full space-x-4 h-56">
        <div class="flex flex-col item-center w-52">
            <div class="font-medium text-xl mb-2 h-52">Overall rating</div>

            <div class="font-medium">
                5
                <LabelFive></LabelFive>
            </div>

            <div class="font-medium">
                4
                <LabelFour></LabelFour>
            </div>

            <div class="font-medium">
                3
                <LabelThree></LabelThree>
            </div>

            <div class="font-medium">
                2
                <LabelTwo></LabelTwo>
            </div>

            <div class="font-medium">
                1
                <LabelOne></LabelOne>
            </div>
        </div>
        <div class="flex">
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Cleanliness</div>
                <div class="font-medium text-lg mt-2">{{ cleanliness }}</div>
                <img class="h-14 mt-12" src="../../assets/cleanliness.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Accuracy</div>
                <div class="font-medium text-lg mt-2">{{ accuracy }}</div>
                <img class="h-14 mt-12" src="../../assets/accuracy.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical " />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Check-in</div>
                <div class="font-medium text-lg mt-2">{{ checkIn }}</div>
                <img class="h-14 mt-12" src="../../assets/Check-in.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Communication</div>
                <div class="font-medium text-lg mt-2">{{ communication }}</div>
                <img class="h-14 mt-12" src="../../assets/Communication.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Location</div>
                <div class="font-medium text-lg mt-2">{{ locations }}</div>
                <img class="h-14 mt-12" src="../../assets/Location.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Value</div>
                <div class="font-medium text-lg mt-2">{{ value }}</div>
                <img class="h-14 mt-12" src="../../assets/Value.svg" alt="cleanliness" />
            </div>
        </div>
    </div>
</template>

<script>
import { useReviewStore } from '@/stores/reviewStore';
import LabelFive from './label/LabelFive.vue';
import LabelFour from './label/LabelFour.vue';
import LabelOne from './label/LabelOne.vue';
import LabelThree from './label/LabelThree.vue';
import LabelTwo from './label/LabelTwo.vue';

export default {
    created() {
        this.loadReviews();
    },

    components: {
        LabelOne,
        LabelTwo,
        LabelThree,
        LabelFour,
        LabelFive,
    },
    data() {
        return {
            reviews: [],
            dataStore: useReviewStore(),
        };
    },

    methods: {
        loadReviews() {
            this.dataStore.AllReviews;
        },
    },

    computed: {
        review() {
            this.reviews = this.dataStore.AllReviews;
        },

        cleanliness() {
            const clean = this.reviews.map((review) => review.clean);
            const totalClean = clean.reduce((acc, curr) => acc + curr, 0);
            const total = totalClean / clean.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
        accuracy() {
            const accuracy = this.reviews.map((review) => review.accuracy);
            const totalAccuracy = accuracy.reduce((acc, curr) => acc + curr, 0);
            const total = totalAccuracy / accuracy.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
        checkIn() {
            const checkin = this.reviews.map((review) => review.checkin);
            const totalCheckin = checkin.reduce((acc, curr) => acc + curr, 0);
            const total = totalCheckin / checkin.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
        communication() {
            const comms = this.reviews.map((review) => review.comms);
            const totalComms = comms.reduce((acc, curr) => acc + curr, 0);
            const total = totalComms / comms.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
        locations() {
            const locations = this.reviews.map((review) => review.loc);
            const totalLoc = locations.reduce((acc, curr) => acc + curr, 0);
            const total = totalLoc / locations.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
        value() {
            const value = this.reviews.map((review) => review.value);
            const totalValue = value.reduce((acc, curr) => acc + curr, 0);
            const total = totalValue / value.length;
            const formattedNum = parseFloat(total.toFixed(2));

            return formattedNum;
        },
    },
};
</script>

<style scoped>
.no-labels ::v-deep .p-metergroup-label {
    display: none;
}
</style>
