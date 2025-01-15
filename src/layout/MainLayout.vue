<template>
    <header class="sticky z-50 top-0 inset-x-0 py-2 px-20 bg-white border-b">
        <nav class="container mx-auto flex items-center justify-between">
            <div class="size-12 rounded-full bg-slate-100"></div>

            <div class="flex items-center space-x-4">
                <a class="font-semibold text-slate-700 hover:text-slate-500" href="/">Home</a>

                <a class="font-semibold text-slate-700 hover:text-slate-500" href="#about-us">About Us</a>

                <a class="font-semibold text-slate-700 hover:text-slate-500" href="/">Service</a>
            </div>
        </nav>
    </header>

    <RouterView />

    <footer class="border-t py-3 text-xs">
        <div class="container">
            <span>Copyright 2024</span>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {},
};
</script>
