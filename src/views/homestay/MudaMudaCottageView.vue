<template>
    <main class="flex flex-col mb-12">
        <section class="relative bg-zinc-100 border-b">
            <img
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="image"
                class="object-cover w-full h-[500px]"
            />

            <div class="container mx-auto py-12 -mt-48">
                <div class="grid grid-cols-12 gap-8">
                    <div class="flex flex-col lg:col-span-8 col-span-12">
                        <div class="bg-white p-10 rounded-lg shadow-sm border-gray-200 border">
                            <div class="font-bold text-3xl tracking-tight">Mat Muda Cottage</div>
                            <div class="text-gray-500 text-xl mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>

                            <div class="flex justify-between space-x-2 pt-0">
                                <div class="bg-gray-200 rounded-lg border h-20 w-1/4"></div>
                                <div class="bg-gray-200 rounded-lg border h-20 w-1/4"></div>
                                <div class="bg-gray-200 rounded-lg border h-20 w-1/4"></div>
                                <div class="bg-gray-200 rounded-lg border h-20 w-1/4"></div>
                            </div>
                        </div>
                        <div class="bg-white p-10 rounded-lg shadow-sm mt-8 border-gray-200 border">
                            <div class="font-bold text-2xl mb-4">About</div>
                            <div class="text-lg">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto qui assumenda blanditiis
                                officia. Voluptate laboriosam vel sed neque. Reiciendis tempora corrupti sapiente
                                assumenda ipsam vitae iste provident delectus fuga ipsum. Similique beatae dolore
                                nesciunt tenetur ullam repudiandae fugit, vel odio quo facilis aspernatur perspiciatis
                                aliquam soluta numquam distinctio. Molestiae fugiat doloribus voluptas maxime quasi
                                magnam aspernatur cum voluptatum consequuntur sed.
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-sm mt-8 border-gray-200 border">
                            <div class="font-bold text-2xl mb-6">Aminities</div>
                            <div class="grid grid-cols-6 gap-12">
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                                <div class="flex col-span-3">
                                    <div class="size-14 rounded-full bg-gray-200"></div>
                                    <div class="flex-1 rounded-lg bg-gray-200 ml-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="bg-white py-8 px-6 rounded-lg shadow-sm border-gray-200 border">
                            <div class="flex flex-col mb-8">
                                <div class="text-2xl font-bold">Book Now</div>
                                <div class="text-gray-500 text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="space-y-2 mt-2">
                                <div class="bg-gray-200 rounded-lg h-20"></div>
                                <div class="bg-gray-200 rounded-lg h-20"></div>
                                <div class="bg-gray-200 rounded-lg h-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container mx-auto py-20">
                <Galleria
                    :activeIndex="activeIndex"
                    v-model:visible="visible"
                    :value="images"
                    :responsiveOptions="responsiveOptions"
                    :numVisible="9"
                    containerStyle="max-width: 50%"
                    container-class=" bg-white"
                    :circular="true"
                    :fullScreen="true"
                    :showItemNavigators="true"
                >
                    <template #item="slotProps">
                        <img
                            :src="slotProps.item.imgSrc"
                            :alt="slotProps.item.name"
                            class="aspect-video object-contain"
                        />
                    </template>
                    <template #thumbnail="slotProps">
                        <img
                            :src="slotProps.item.imgSrc"
                            :alt="slotProps.item.name"
                            style="display: block"
                            class="size-24"
                        />
                    </template>
                </Galleria>

                <div class="max-w-[800px] mx-auto">
                    <div class="grid grid-cols-12 gap-1">
                        <div
                            v-for="(image, index) in images"
                            :key="image.name"
                            class="col-span-4"
                            @click="toggleImages(index)"
                        >
                            <div class="relative">
                                <img
                                    :class="index == 5 && 'flex justify-center items-center'"
                                    :src="image.imgSrc"
                                    :alt="image.name"
                                    class="object-cover aspect-video w-full rounded cursor-pointer"
                                />

                                <div
                                    v-if="index == 5"
                                    class="absolute bg-slate-900/50 inset-0 flex flex-col justify-center text-center text-white"
                                >
                                    <span>5+</span>
                                    <span>Photos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    methods: {
        toggleImages(value) {
            this.visible = true;
            this.activeIndex = value;
        },
    },
    data() {
        return {
            activeIndex: 0,
            selectedImages: null,
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4,
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                },
            ],
            position: 'right',
            images: [
                {
                    name: 'Muda cottage',
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fmuda-cottage-banner.JPG?alt=media',
                },
                {
                    name: 'aDLi.suite',
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fadli-suite-banner.JPG?alt=media',
                },
                {
                    name: "d'Arif Homestay",
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fd-arif-homestay-banner.jpg?alt=media',
                },
                {
                    name: "d'Arif Homestay",
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fd-arif-homestay-banner.jpg?alt=media',
                },
                {
                    name: "d'Arif Homestay",
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fd-arif-homestay-banner.jpg?alt=media',
                },
                {
                    name: "d'Arif Homestay",
                    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/matmuda-homestay.appspot.com/o/discover%2Fd-arif-homestay-banner.jpg?alt=media',
                },
            ],
            visible: false,
        };
    },
    components: {},
};
</script>
