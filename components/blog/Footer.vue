<template>
    <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                clip-rule="evenodd">
                <path
                    d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
            </svg>
            <p class="text-gray-600 text-sm leading-tight">{{ new Date(blog?.created_at).toLocaleDateString()
                }}</p>
        </div>
        <div class="rounded-full size-[4px] bg-gray-600"></div>
        <p class="text-gray-600">By <span>{{ blog?.writer }}</span></p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    blog: Object
})
</script>
