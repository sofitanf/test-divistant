<template>
    <div class="flex justify-center items-center text-center flex-col">
        <h1 class="text-3xl font-bold">BLOG</h1>
        <div class="flex items-center gap-3 flex-wrap">
            <BlogBtnCategory name="ALL" :active="category === ''" @click="category = ''" />
            <BlogBtnCategory v-for="item in blog_categories" :key="item" @click="category = item" :name="item"
                :active="category === item" />
        </div>
    </div>
    <div class="mt-16">
        <p v-if="loadBlog" class="text-xl text-center font-medium">Loading...</p>
        <div v-else>
            <div v-if="blog_filtered.length === 0" class="text-center w-full">
                <p class="text-xl font-medium">Blog not found.</p>
            </div>
            <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <NuxtLink v-for="blog in blog_filtered" :key="blog.id" :to="`/detail/${blog.slug}`" class="space-y-2">
                    <div class="relative w-full">
                        <img :src="blog.image" :alt="blog.title" loading="lazy" class="w-full h-[14rem] object-cover">
                        <div v-if="authStore.isAuth" class="absolute top-0 right-0 bg-black bg-opacity-25 ">
                            <div class="flex items-center text-white">
                                <button @click.prevent="handleModal(blog.id)" class="py-2 px-4">Delete</button>
                                <NuxtLink :to="`/write/${blog.slug}`" class="py-2 pr-4">Edit</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <button class="category">{{ blog.category }}</button>
                    <h2 class="font-bold text-xl leading-tight">{{ blog.title }}</h2>
                    <p class="line-clamp-2 text-gray-600">{{ blog.description }}</p>
                    <BlogFooter :blog="blog" />
                </NuxtLink>
            </div>
        </div>
    </div>
    <BlogModal v-if="openModal" @cancel-delete="closeModal" @delete-blog="deleteBlog" />
</template>
<script lang="ts" setup>
useSeoMeta({
    title: 'Blog'
})

import blog_categories from '~/utils/blog_categories'

const authStore = useAuthStore()
const blogStore = useBlogStore()

const selectedBlog = ref<string>('')
const openModal = ref<boolean>(false)
const handleModal = (id: string) => {
    selectedBlog.value = id
    openModal.value = !openModal.value
}
const closeModal = () => {
    openModal.value = false
}
const deleteBlog = () => {
    blogStore.deleteBlog(selectedBlog.value)
    openModal.value = false
}

const category = ref<string>('')
const blogs = computed(() => blogStore.blogs)
const blog_filtered = computed(() => category.value !== '' ? blogs.value.filter(item => item.category === category.value) : blogs.value)

const loadBlog = ref<boolean>(true)
onMounted(async () => {
    await blogStore.initilizeBlog()
    loadBlog.value = false
})

</script>