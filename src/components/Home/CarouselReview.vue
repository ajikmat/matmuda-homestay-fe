<template>
    <div class="w-full">
        <Carousel
            :showIndicators="false"
            :value="reviews"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
        >
            <template #item="slotProps">
                <div class="border rounded-lg flex flex-col p-5 h-[300px] mx-2">
                    <div class="flex items-center mb-4">
                        <img
                            :src="slotProps.data.imageSrc"
                            :alt="slotProps.data.name"
                            class="w-16 h-16 object-cover mr-4"
                        />
                        <div class="flex flex-col">
                            <div class="font-bold text-lg">{{ slotProps.data.name }}</div>
                            <div>{{ slotProps.data.place }}</div>
                        </div>
                    </div>

                    <div class="text-lg text-gray-600">{{ slotProps.data.description }}</div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
    mounted() {},
    methods: {},
};
</script>
