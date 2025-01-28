<template>
    <button
        type="button"
        @click="visibleDialog = true"
        class="bg-purple-700 hover:bg-purple-400 hover:text-purple-700 text-purple-100 rounded-lg font-bold text-center py-6 px-4"
    >
        Submit Your Review
    </button>

    <Dialog v-model:visible="visibleDialog" modal header="Submit Your Review" class="w-[800px] h-full">
        <h1 class="text-2xl font-bold pb-2">Mat Muda Cottage</h1>
        <form @submit="submitForm">
            <div class="grid grid-cols-4 gap-y-3">
                <div class="col-span-1">Rate and review your experience</div>
                <div class="rounded-md shadow-sm col-span-3 pl-20 py-5">
                    <div class="justify-start gap-2">
                        <div>Cleanliness</div>
                        <Rating v-model="cleanliness.val" @blur="clearValidity('cleanliness')" />
                        <p v-if="!cleanliness.isValid" class="text-red-600">Please give stars</p>
                    </div>

                    <div class="justify-start gap-2">
                        <div>Accuracy</div>
                        <Rating v-model="accuracy.val" @blur="clearValidity('accuracy')" />
                        <p v-if="!accuracy.isValid" class="text-red-600">Please give stars</p>
                    </div>
                    <div class="justify-start gap-2">
                        <div>Check-in</div>
                        <Rating v-model="checkIn.val" @blur="clearValidity('checkIn')" />
                        <p v-if="!checkIn.isValid" class="text-red-600">Please give stars</p>
                    </div>

                    <div class="justify-start gap-2">
                        <div>Communication</div>
                        <Rating v-model="communication.val" @blur="clearValidity('communication')" />
                        <p v-if="!communication.isValid" class="text-red-600">Please give stars</p>
                    </div>

                    <div class="justify-start gap-2">
                        <div>Locations</div>
                        <Rating v-model="locations.val" @blur="clearValidity('locations')" />
                        <p v-if="!locations.isValid" class="text-red-600">Please give stars</p>
                    </div>
                </div>
                <div class="col-span-1">Would you recommend this homestay?</div>
                <div class="col-span-3">
                    <SelectButton v-model="recommend" :options="options" @blur="clearValidity('recommend')" />
                </div>
                <div class="">Your Review</div>
                <div class="col-span-3">
                    <Textarea
                        v-model="review.val"
                        rows="5"
                        cols="70"
                        :auto-resize="resize"
                        name="Reviews"
                        @blur="clearValidity('review')"
                    />
                    <p v-if="!review.isValid" class="text-red-600">Please give your reviews</p>
                </div>
                <div class="col-span-1 pt-3">Your Name</div>
                <div class="col-span-3">
                    <InputText type="text" v-model.trim="name.val" name="yourName" @blur="clearValidity('name')" />
                    <p v-if="!name.isValid" class="text-red-600">Please Enter Your Name!</p>
                </div>
                <div class="col-span-1 pt-3">E-mail</div>
                <div class="col-span-3">
                    <InputText type="email" v-model.trim="email.val" name="email" @blur="clearValidity('email')" />
                    <p v-if="!email.isValid" class="text-red-600">Please Enter a valid Email!</p>
                </div>
            </div>
            <p v-if="!formIsValid" class="text-red-600">Please fill all form</p>
            <div class="flex justify-center items-center mt-4">
                <Button type="submit" severity="secondary" label="Submit" />
            </div>
        </form>
    </Dialog>
</template>

<script>
import { useReviewStore } from '@/stores/reviewStore';
export default {
    emits: ['save-data'],
    data() {
        return {
            formattedDate: '',
            ratingSum: 0,
            resize: false,
            dataStore: useReviewStore(),
            rating: true,
            show: false,
            email: {
                val: '',
                isValid: true,
            },
            name: {
                val: '',
                isValid: true,
            },
            review: {
                val: null,
                isValid: true,
            },
            visibleDialog: false,
            recommend: 'Yes',
            options: ['Yes', 'No'],
            formIsValid: true,
            cleanliness: {
                val: null,
                isValid: true,
            },
            accuracy: {
                val: null,
                isValid: true,
            },
            checkIn: {
                val: null,
                isValid: true,
            },
            communication: {
                val: null,
                isValid: true,
            },
            locations: {
                val: null,
                isValid: true,
            },
        };
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.email.val === '') {
                this.email.isValid = false;
                this.formIsValid = false;
            }
            if (this.name.val === '') {
                this.name.isValid = false;
                this.formIsValid = false;
            }
            if (this.review.val == null) {
                this.review.isValid = false;
                this.formIsValid = false;
            }
            if (this.cleanliness.val === null) {
                this.cleanliness.isValid = false;
                this.rating = false;
                this.formIsValid = false;
            }
            if (this.accuracy.val === null) {
                this.accuracy.isValid = false;
                this.rating = false;
                this.formIsValid = false;
            }
            if (this.checkIn.val === null) {
                this.checkIn.isValid = false;
                this.rating = false;
                this.formIsValid = false;
            }
            if (this.communication.val === null) {
                this.communication.isValid = false;
                this.rating = false;
                this.formIsValid = false;
            }
            if (this.locations.val === null) {
                this.locations.isValid = false;
                this.rating = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();
            if (!this.formIsValid) {
                return;
            }

            const date = new Date();
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'short' });
            const year = date.getFullYear();

            const formattedDate = `${day} ${month} ${year}`;

            this.formattedDate = formattedDate;

            const rating = Math.floor(
                (this.cleanliness.val +
                    this.checkIn.val +
                    this.communication.val +
                    this.accuracy.val +
                    this.locations.val) /
                    5,
            );

            this.ratingSum = rating;

            const formData = {
                rating: this.ratingSum,
                name: this.name.val,
                email: this.email.val,
                review: this.review.val,
                date: this.formattedDate,
            };

            this.$emit('save-data', formData);
        },
    },
};
</script>
