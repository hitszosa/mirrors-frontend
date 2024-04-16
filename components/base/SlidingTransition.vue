<template>
  <transition
    class="absolute"
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    leave-active-class="transition-all duration-200 ease-out"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <slot />
  </transition>
</template>
