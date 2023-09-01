<template>
    <h2 class="text-2xl font-medium space-x-1.5">
        <span class="inline-block -translate-y-0.5">
            <slot name="icon"></slot>
        </span>
        <span class="transition delay-50 after:transition-all relative inline-block z-10
        after:block after:absolute after:bg-blue-100 after:rounded-md
        after:w-4 after:h-1 after:-right-5 after:bottom-1 after:-z-10
        hocus:after:w-full hocus:after:h-2 hocus:after:right-0">
            <slot></slot>
        </span>
    </h2>
</template>