<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div v-if="error" class="error-response">
                {{ error }}.
            </div>
            <Form class="space-y-6" @submit="onSubmit" :validation-schema="schema">
                <div>
                    <label for="username" class="label">Username</label>
                    <Field v-model="login.username" id="username" name="username" type="text" class="input"></Field>
                    <ErrorMessage name="username" class="error-message" />
                </div>
                <div>
                    <label for="password" class="label">Password</label>
                    <Field v-model="login.password" id="password" name="password" type="password" class="input"></Field>
                    <ErrorMessage name="password" class="error-message" />
                </div>
                <button type="submit" class="w-full btn-submit">Sign in</button>
            </Form>
        </div>
    </div>

</template>

<script setup>
import { object, string } from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';

useSeoMeta({
    title: 'Login'
})

const store = useAuthStore()
const router = useRouter()

const schema = object({
    username: string().required(() => 'Username is required'),
    password: string().required(() => 'Password is required'),
});

const login = ref({
    username: '',
    password: ''
})

const error = ref('')
const onSubmit = async () => {
    const res = await store.login(login.value)
    if (res.success) router.push('/')
    else error.value = res.message
};
</script>
