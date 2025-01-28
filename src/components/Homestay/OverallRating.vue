<template>
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
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/cleanliness.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Accuracy</div>
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/accuracy.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical " />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Check-in</div>
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/Check-in.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Communication</div>
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/Communication.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Location</div>
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/Location.svg" alt="cleanliness" />
            </div>
            <Divider layout="vertical" />
            <div class="flex flex-col items-start w-52">
                <div class="font-medium text-xl">Value</div>
                <div class="font-medium text-lg mt-2">4.8</div>
                <img class="h-14 mt-12" src="../../assets/Value.svg" alt="cleanliness" />
            </div>
        </div>
    </div>
</template>

<script>
import LabelFive from './label/LabelFive.vue';
import LabelFour from './label/LabelFour.vue';
import LabelOne from './label/LabelOne.vue';
import LabelThree from './label/LabelThree.vue';
import LabelTwo from './label/LabelTwo.vue';

export default {
    components: {
        LabelOne,
        LabelTwo,
        LabelThree,
        LabelFour,
        LabelFive,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.no-labels ::v-deep .p-metergroup-label {
    display: none;
}
</style>
