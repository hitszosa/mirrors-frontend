<template>
  <transition
    class="absolute top-0 left-0"
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    leave-active-class="transition-all duration-300 ease-out"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <slot />
  </transition>
</template>
