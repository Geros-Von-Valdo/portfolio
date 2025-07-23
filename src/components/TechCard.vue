<template>
  <div
    class="group transition-all duration-300 rounded-xl p-4 flex items-center gap-4 
           bg-gray-100 dark:bg-[#1d1d1d] shadow-md hover:shadow-lg 
           hover:bg-gray-200 dark:hover:bg-[#2a2a2a]"
  >
    <img :src="icon" class="w-16 h-16 flex-shrink-0 rounded-lg shadow-sm" />
    <div>
      <p class="text-[22px] font-semibold text-gray-800 dark:text-white font-['Playfair_Display']">
        {{ title }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400 font-['Lato']">
        {{ subtitle }}
      </p>
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
