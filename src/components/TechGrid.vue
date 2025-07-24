<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 select-none mr-10">
    <div
      v-for="tech in techs"
      :key="tech.title"
      class="group transition-all duration-300 rounded-xl p-4 flex items-center gap-4 bg-gray-100 dark:bg-[#1d1d1d] shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-[#2a2a2a]"
    >
      <img :src="tech.icon" class="w-16 h-16 flex-shrink-0 rounded-lg shadow-sm" />
      <div>
        <p
          class="text-[22px] font-semibold text-gray-800 dark:text-white font-['Playfair_Display']"
        >
          {{ tech.title }}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400 font-['Lato']">
          {{ tech.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const techs = ref([
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    title: "Vue.js",
    subtitle: "Framework Front-end",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    subtitle: "Framework de Estilização",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    title: "Laravel",
    subtitle: "Framework Backend PHP",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
    title: "Insomnia",
    subtitle: "Testes de API REST",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    title: "MySQL",
    subtitle: "Banco de Dados Relacional",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
    subtitle: "Linguagem Multiuso",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    title: "Docker",
    subtitle: "Containerização de Aplicações",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    title: "Notion",
    subtitle: "Organização e Documentação",
  },
  {
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    title: "GitHub",
    subtitle: "Versionamento de Código",
  },
]);
</script>
