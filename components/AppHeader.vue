<template>
    <header class="bg-white">
        <nav class=" flex  items-center justify-between py-6 container mx-auto" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink to="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Blogz</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt="">
                </NuxtLink>
            </div>
            <div class="flex items-center gap-6">
                <NuxtLink to="/" class="link">Blog </NuxtLink>
                <NuxtLink v-if="store.isAuth" to="/write/create" class="flex items-center gap-1 link">Write
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 21 21"
                            aria-label="Write">
                            <path fill="currentColor"
                                d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z">
                            </path>
                            <path stroke="currentColor"
                                d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2">
                            </path>
                        </svg></span>
                </NuxtLink>
                <NuxtLink v-if="!store.isAuth" to="/login" class="link">Log
                    in <span aria-hidden="true">&rarr;</span></NuxtLink>
                <button v-else @click="logout" class="link">Log out <span aria-hidden="true">&rarr;</span></button>
            </div>
        </nav>
    </header>
</template>
<script setup>
const router = useRouter()
const store = useAuthStore()

const logout = async () => {
    await store.logout()
    router.push('/login')
}

onMounted(() => {
    store.initializeUser()
})
</script>