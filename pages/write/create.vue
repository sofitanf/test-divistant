<template>
    <div>
        <h1 class="text-3xl font-bold mb-5">Create Blog</h1>
        <div v-if="error" class="error-response">{{ error }}</div>
        <BlogForm @send-data="createBlog" />
    </div>
</template>

<script setup lang="ts">
import type { BodyBlog } from '~/types/blog';
useSeoMeta({
    title: 'Create Blog'
})

const router = useRouter()
const blogStore = useBlogStore()

const error = ref<string>('')

const createBlog = async (body: BodyBlog) => {
    const res = blogStore.addBlog(body)
    if (res.success) router.push('/')
    else error.value = res.message
}
</script>
