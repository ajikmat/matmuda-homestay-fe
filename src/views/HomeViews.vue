<template>
    <main class="flex flex-col mb-12">
        <section
            class="relative bg-fixed bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div class="absolute inset-0 bg-black/55"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex h-[500px] lg:items-center lg:px-8">
                <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 class="text-5xl font-extrabold text-white">
                        Let us find your

                        <strong class="block font-extrabold">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500"
                                >Forev</span
                            >
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-7 00 to-purple-500"
                                >erHome.</span
                            >
                        </strong>
                    </h1>
                </div>
            </div>

            <div class="mx-auto container absolute -bottom-14 inset-x-0 px-20">
                <div class="shadow-lg rounded-lg border h-[100px] bg-clip-padding bg-white items-center">
                    <div class="flex items-center justify-center gap-4 p-6">
                        <SelectPlace></SelectPlace>
                        <Guest></Guest>
                        <Date></Date>
                        <button
                            class="bg-purple-700 hover:bg-purple-400 hover:text-purple-700 text-purple-100 rounded-lg font-bold text-center py-6 px-4 w-1/3"
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div
            id="about-us"
            class="flex flex-col mt-[130px] container mx-auto gap-10 lg:flex-row justify-center items-center px-20 pb-20"
        >
            <img
                id="img-about"
                src="https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/IMG_4400.JPG?alt=media"
                alt="about-us"
                class="rounded-[50px] rounded-tr-none rounded-bl-none h-[400px] flex-1 object-cover"
            />

            <div class="flex-1 items-center">
                <h1 class="text-lg bg-purple-50 py-2 px-8 mb-4 inline-block text-purple-600 font-medium uppercase">
                    About Us
                </h1>
                <div>
                    <h1 class="text-4xl font-bold mb-2">Welcome to Mat Muda Homestay!</h1>
                    <div class="text-gray-500 text-xl space-y-4">
                        <p>
                            Mat Muda Homestay offer cozy and comfortable retreats for travelers seeking a home away from
                            home. With a commitment to warm hospitality and personalized service, we provide a serene
                            and friendly atmosphere for all our guests.
                        </p>
                        <p>
                            Our charming accommodations are designed to ensure a restful stay, complete with modern
                            amenities and a touch of local charm. Whether you're here for a relaxing getaway or an
                            adventurous escape, Mat Muda Homestay are the perfect base for exploring the local beauty
                            and culture.
                        </p>
                        <p>
                            Come stay with us and experience the genuine warmth and hospitality that make Mat Muda
                            Homestay a favorite among visitors. We look forward to welcoming you!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col bg-slate-50 py-20 px-32">
            <div class="container mx-auto px-4">
                <div class="text-lg bg-purple-50 py-2 px-8 mb-8 inline-block text-purple-600 font-medium uppercase">
                    Discover
                </div>
                <div class="text-4xl font-bold mb-2">Book a memorable journey with us!</div>
                <div class="text-xl text-gray-500 mb-8">
                    Experience comfort and charm at Mat Muda Homestay. Perfect for relaxation or adventure, book your
                    stay today for unforgettable memories
                </div>
                <div class="flex gap-4">
                    <template v-for="banner in banners" :key="banner.name">
                        <router-link
                            :to="banner.route"
                            class="relative flex-1 rounded-br-3xl rounded-tl-3xl overflow-clip group/image"
                        >
                            <img
                                :src="banner.imgSrc"
                                alt="image"
                                class="object-cover h-[300px] size-full group-hover/image:scale-110 transform transition"
                            />
                            <div
                                class="absolute flex items-center justify-center inset-0 hover:bg-black/50 transition-all"
                            >
                                <div
                                    class="inline-flex items-center invisible group-hover/image:visible bg-slate-50/75 text-slate-700 px-6 py-4 font-semibold shadow-lg rounded text-xs"
                                >
                                    {{ banner.name }}
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>

        <div class="p-20 container mx-auto">
            <div class="flex flex-col items-center">
                <div class="uppercase bg-purple-50 text-purple-600 text-lg font-medium py-2 px-6 mb-4 inline-block">
                    review
                </div>
                <div class="font-bold text-3xl mb-10 text-center w-[400px]">
                    Take a look at the reviews from our customers
                </div>
                <CarouselReview></CarouselReview>
            </div>
        </div>
    </main>
</template>

<script>
import CarouselReview from '@/components/ui/CarouselReview.vue';
import Date from '@/components/ui/Date.vue';
import SelectPlace from '@/components/ui/SelectPlace.vue';
import Guest from '@/components/ui/Guest.vue';

import banners from '@/data/banner';

export default {
    components: {
        CarouselReview,
        Date,
        SelectPlace,
        Guest,
    },
    computed: {
        banners() {
            return banners;
        },
    },
};
</script>
