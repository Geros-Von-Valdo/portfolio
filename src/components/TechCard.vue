<template>
  <div
    class="group transition duration-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-3 flex items-center gap-3 bg-gray-200 dark:bg-gray-800"
  >
    <img :src="icon" class="w-16 h-16 flex-shrink-0" />
    <div>
      <p class="text-red-800 dark:text-white font-bold text-lg">{{ title }}</p>
      <p class="text-gray-600 dark:text-gray-400 text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  subtitle: String,
});
</script>
