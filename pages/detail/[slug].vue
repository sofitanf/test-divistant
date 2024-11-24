<template>
    <img :src="blog?.image" :alt="blog?.title" loading="lazy" class="w-full h-[16rem] object-cover rounded-md">
    <div class="text-center my-4 flex items-center flex-col gap-1">
        <button class="category">{{ blog?.category }}</button>
        <BlogFooter :blog="blog" />
        <h1 class="font-bold text-2xl">{{ blog?.title }}</h1>
    </div>
    <p class="mt-5">{{ blog?.description }}</p>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

useSeoMeta({
    title: 'Detail Blog'
})


const route = useRoute()
const blogStore = useBlogStore()
const blog = computed(() => blogStore.detailBlog(route.params.slug as string))
</script>
