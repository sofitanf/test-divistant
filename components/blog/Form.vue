<template>
    <div>
        <Form class="space-y-6" @submit="onSubmit" :validation-schema="schema">
            <div>
                <label for="title" class="label">Title</label>
                <Field v-model="body.title" id="title" name="title" type="text" class="input"></Field>
                <ErrorMessage name="title" class="error-message" />
            </div>
            <div>
                <label for="category" class="label">Category</label>
                <Field v-model="body.category" id="category" name="category" as="select" class="input pr-3 capitalize">
                    <option v-for="category in blog_categories" :key="category" :value="category">{{ category }}
                    </option>
                </Field>
                <ErrorMessage name="category" class="error-message" />
            </div>
            <div>
                <label for="description" class="label">Description</label>
                <Field v-model="body.description" rows="5" as="textarea" id="description" name="description" type="text"
                    class="input"></Field>
                <ErrorMessage name="description" class="error-message" />
            </div>
            <div>
                <label for="image" class="label">URL Image</label>
                <Field v-model="body.image" id="image" name="image" type="text" class="input"></Field>
                <ErrorMessage name="image" class="error-message" />
            </div>
            <div class="flex justify-end items-center gap-2">
                <NuxtLink to="/" type="button"
                    class="btn-submit bg-gray-200 hover:bg-gray-300 text-gray-600 w-full sm:w-[10rem]">Cancel</NuxtLink>
                <button type="submit" class="btn-submit w-full sm:w-[10rem]">Save</button>
            </div>
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { object, string } from 'yup';
import type { BodyBlog } from '~/types/blog';
import blog_categories from '~/utils/blog_categories'

const props = defineProps({
    blog: Object
})
const emit = defineEmits(['send-data'])

const schema = object({
    image: string().required(() => 'URL Image is required'),
    category: string().required(() => 'Category is required'),
    title: string().required(() => 'Title is required'),
    description: string().required(() => 'Description is required'),
})

const body = ref<BodyBlog>({
    image: '',
    category: '',
    title: '',
    description: '',
})

const onSubmit = () => {
    emit('send-data', body.value)
}

onMounted(() => {
    if (props.blog) {
        const { image, category, title, description } = props.blog
        body.value = {
            image, category, title, description
        }
    }
})

</script>
