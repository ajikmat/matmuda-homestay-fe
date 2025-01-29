import { defineStore } from 'pinia';

export const useReviewStore = defineStore('data', {
    state: () => ({
        AllReviews: [],
    }),
    getters: {},
    actions: {
        async addNewReview(data) {
            const response = await fetch(
                `https://muda-homestay-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                },
            );

            // const responseData = await response.json();

            if (!response.ok) {
                //error
            }
        },

        async loadReviewData() {
            const response = await fetch(
                `https://muda-homestay-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json`,
            );

            const responseData = await response.json();

            if (!response.ok) {
                //error
            }
            const reviews = [];

            for (const key in responseData) {
                const review = {
                    name: responseData[key].name,
                    email: responseData[key].email,
                    date: responseData[key].date,
                    value: responseData[key].rating,
                    description: responseData[key].review,
                    comms: responseData[key].communication,
                    clean: responseData[key].clean,
                    accuracy: responseData[key].accuracy,
                    checkin: responseData[key].checkin,
                    loc: responseData[key].locations,
                };

                reviews.push(review);
                console.log(reviews);
            }

            this.AllReviews = reviews;
        },
    },
});
