import { defineStore } from 'pinia';

export const useReviewStore = defineStore('data', {
    state: () => ({
        AllReviews: [],
        reviews: [
            {
                name: 'Fauzi Fikri',
                imageSrc:
                    'https://lh3.googleusercontent.com/a-/ALV-UjUzRJniivD7WtPMM_Ji7b7G2N7Tdz_oXKlm-QLvbaB9XmXzWn3o=w120-h120-p-rp-mo-br100',
                rating: 5,
                place: 'aDLi Suite',
                description: 'Very satisfactory. Private pool... suitable for a family day and to release tension',
            },
            {
                name: 'Orsha Hida',
                imageSrc:
                    'https://lh3.googleusercontent.com/a-/ALV-UjXk0H5aODJ0zyyZRNoMIh9Byq_ce_ey3Oc4aWSTCwDMmEoG6b_2=w120-h120-p-rp-mo-ba2-br100',
                rating: 5,
                place: 'aDLi Suite',
                description: 'Clean and comfortable',
            },
            {
                name: 'Haziq Mohamad',
                imageSrc:
                    'https://lh3.googleusercontent.com/a/ACg8ocKeh5ObNpqYSg3WsAZcJGq-9eY4rY96kl7DMDq8ZosaExApMQ=w120-h120-p-rp-mo-br100',
                rating: 5,
                place: 'aDLi Suite',
                description:
                    'Homestay yang sangat selesa dan menarik sebab ada greenhouse dan private pool! Harga pun murah. Sangat recommended!',
            },
            {
                name: 'Haziq Mohamad',
                imageSrc:
                    'https://lh3.googleusercontent.com/a/ACg8ocKeh5ObNpqYSg3WsAZcJGq-9eY4rY96kl7DMDq8ZosaExApMQ=w120-h120-p-rp-mo-br100',
                rating: 5,
                place: 'aDLi Suite',
                description:
                    'Homestay yang sangat selesa dan menarik sebab ada greenhouse dan private pool! Harga pun murah. Sangat recommended!',
            },
            {
                name: 'Haziq Mohamad',
                imageSrc:
                    'https://lh3.googleusercontent.com/a/ACg8ocKeh5ObNpqYSg3WsAZcJGq-9eY4rY96kl7DMDq8ZosaExApMQ=w120-h120-p-rp-mo-br100',
                rating: 5,
                place: 'aDLi Suite',
                description:
                    'Homestay yang sangat selesa dan menarik sebab ada greenhouse dan private pool! Harga pun murah. Sangat recommended!',
            },
        ],
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
                };

                reviews.push(review);
            }

            this.AllReviews = reviews;
        },
    },
});
