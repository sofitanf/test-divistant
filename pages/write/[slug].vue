<template>
    <div>
        <h1 class="text-3xl font-bold mb-5">Edit Blog</h1>
        <div v-if="error" class="error-response">{{ error }}</div>
        <BlogForm :blog="blog" @send-data="editBlog" />
    </div>
</template>

<script setup lang="ts">
import type { BodyBlog } from '~/types/blog';

useSeoMeta({
    title: 'Edit Blog'
})

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const blog = blogStore.detailBlog(route.params.slug as string)

const error = ref<string>('')
const editBlog = async (body: BodyBlog) => {
    if (blog) {
        const res = await blogStore.updateBlog(blog?.id, body)
        if (res.success) router.push('/')
        else error.value = res.message
    }
}
</script>
