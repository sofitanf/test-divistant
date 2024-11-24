<template>
    <button class="uppercase bg-slate-100 rounded-lg py-1 px-2 mt-4 leading-tight"
        :class="active && 'bg-slate-900 text-white'">{{ name }}</button>
</template>

<script setup lang="ts">
defineProps({
    name: { type: String, required: true },
    active: { type: Boolean, required: true }
})
</script>
