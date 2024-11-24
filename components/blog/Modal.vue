<template>
    <div class='relative z-10'>
        <div class='fixed inset-0 bg-slate-800 opacity-75 transition-opacity' aria-hidden='true'></div>
        <div class='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div class='flex sm:min-h-full justify-center p-4 text-center items-center sm:p-0'>
                <div
                    class='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg'>
                    <div class='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                        <div class='flex flex-col justify-center items-center gap-2 text-center'>
                            <div
                                class='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-20 sm:w-20'>
                                <svg class='h-10 w-10 text-red-600' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                                    stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round'
                                        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
                                </svg>
                            </div>
                            <h3 class='text-2xl text-center font-semibold leading-6 text-gray-900 mt-4'
                                id='modal-title'>
                                Delete blog
                            </h3>
                            <p class='text-sm text-gray-500'>
                                Are you sure you want to remove this blog?
                            </p>
                        </div>
                    </div>
                    <div class='bg-gray-50 px-4 py-3 justify-between sm:flex sm:flex-row-reverse sm:px-6'>
                        <button @click="emit('delete-blog')" type='button'
                            class='inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'>
                            Delete
                        </button>
                        <button @click="emit('cancel-delete')" type='button'
                            class='mt-3 inline-flex w-full justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['delete-blog', 'cancel-delete'])
</script>
