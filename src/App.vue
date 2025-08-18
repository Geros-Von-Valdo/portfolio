<script setup>
import { ref, onMounted } from 'vue';
import TechGrid from "./components/TechGrid.vue";
import SideBar from "./components/SideBar.vue";

const isDarkMode = ref(false); // Inicia com um valor padrão

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  updateTheme();
};

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Garante que o tema inicial é o do localStorage ou o do sistema
onMounted(() => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkMode.value = (storedTheme === 'dark' || (!storedTheme && prefersDark));
  updateTheme();
});
</script>

<template>
  <!-- Header fixo no topo -->
  <header class="fixed top-0 right-0 pt-3 z-10 flex items-center gap-2 group">
    <div class="relative">
      <!-- Ícone da Engrenagem (sempre visível e rotaciona no hover) -->
      <div class="highlight cursor-pointer transition-transform duration-500 transform group-hover:rotate-180 px-2">
        <svg class="w-8 h-8 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>

      <!-- Container de Toggles (slide in/out) -->
      <div class="highlight absolute top-0 right-full flex flex-row items-center space-x-2">
        <!-- Toggle do Tema -->
        <div @click="toggleTheme"
          class="transition-all duration-300 transform translate-x-full opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto">
          <div
            class="corSecundaria border-2 rounded-full p-1 h-8 w-20 flex items-center transition-all duration-300 cursor-pointer">
            <div class="size-6 transition-transform duration-300 transform"
              :class="isDarkMode ? 'translate-x-11' : 'translate-x-0'">
              <!-- lua -->
              <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-6 h-6 b highlight">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              <!-- sol -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 highlight">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Select de idioma (com padding interno) -->
        <div
          class="corSecundaria relative flex items-center h-8 border-2 rounded-full transition-all duration-300 cursor-pointer transform translate-x-full opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto">
          <select ref="sel" v-model="currentLang" @change="changeLanguage"
            class="appearance-none w-32 h-full text-sm outline-none bg-transparent pl-3 pr-2">
            <option class="text-black pl-2" value="pt">PT – Português</option>
            <option class="text-black pl-2" value="en">EN – English</option>
            <option class="text-black pl-2" value="es">ES – Español</option>
          </select>
          <svg class="w-4 h-4 absolute right-2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" :class="isDarkMode ? 'text-white' : 'text-black'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </header>

  <!-- h-screen snap-y snap-mandatory overflow-y-scroll -->
  <main class="ml-[10vw] w-[90vw] px-[4vw] overflow-x-hidden">
    <nav
      class="corSecundaria highlight fixed left-0 top-0 h-screen p-4 border-r-2 border-gray-200 flex flex-col justify-center items-center"
      style="width: 10vw">
      <ul class="flex flex-col items-center justify-center h-full space-y-2">
        <li class="group relative flex flex-col items-center">
          <a href="#top" @click.prevent="scrollToTop" class="block py-2">
            <svg class="w-8 h-8 transition-transform duration-200 group-hover:scale-125" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>
          </a>
          <span
            class="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-2 py-1">Home</span>
        </li>
        <li class="text-center">•</li>
        <li class="group relative flex flex-col items-center">
          <a href="#exp" class="block py-2">
            <svg class="w-8 h-8 transition-transform duration-200 group-hover:scale-125" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
          </a>
          <span
            class="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-2 py-1">Experiência</span>
        </li>
        <li class="text-center">•</li>
        <li class="group relative flex flex-col items-center">
          <a href="#" class="block py-2">
            <svg class="w-8 h-8 transition-transform duration-200 group-hover:scale-125" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
            </svg>
          </a>
          <span
            class="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-2 py-1">Projetos</span>
        </li>
        <li class="text-center">•</li>
        <li class="group relative flex flex-col items-center">
          <a href="#" class="block py-2">
            <svg class="w-8 h-8 transition-transform duration-200 group-hover:scale-125" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="1"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
          </a>
          <span
            class="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-2 py-1">Contato</span>
        </li>
      </ul>
    </nav>

    <section id="top" class="pr-[4vw] h-screen snap-start flex items-center">
      <div class="relative">
        <h1 class="text-7xl">Gabriel K. Novotni</h1>
        <h2 class="text-4xl mt-1 ml-2">Full Stack Developer</h2>

        <div class="my-6 mt-12 flex space-x-4">
          <div class="text-xl flex-1 space-y-4">
            <p>
              Sou um desenvolvedor dedicado à transformar ideias em soluções reais.
              Buscando constantemente evoluir, aprender novas tecnologias e enfrentar
              desafios com criatividade e dedicação.
            </p>
            <p>
              Tenho experiência sólida no desenvolvimento web, criação de APIs, modelagem
              de bancos de dados e integração de sistemas. Gosto de aprender, experimentar
              novas tecnologias e aplicar metodologias ágeis para garantir processos mais
              organizados e produtivos.
            </p>
            <p>
              Mais do que escrever código, acredito em desenvolver softwares e prover um
              serviço que se comunica com os todos os envolvidos.
            </p>
          </div>

          <!-- Imagem -->
          <div
            class="bg-gray-200 w-[450px] h-[450px] rounded-full overflow-hidden flex items-center justify-center shadow-lg border"
            style="margin-top: -100px">
            <img src="/images/jan_matejko_stac584czyk.webp" alt="Minha Imagem" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section id="exp" class="h-screen snap-start flex flex-col justify-center px-4">
      <h2 class="text-4xl mb-10 text-center">Tecnologias Principais</h2>
      <div class="relative">
        <div class="">
          <TechGrid />
        </div>
      </div>
    </section>

    <!-- max-w-4xl mx-auto px-4 h-screen snap-start flex items-center  -->
    <section class="mt-20 px-4 max-w-4xl mx-auto">
  <h2 class="text-4xl font-extrabold text-center mb-10">Experiência e Formação</h2>

  <div class="relative border-l-2 border-gray-300 dark:border-gray-600 pl-10 space-y-12">

    <div class="relative">
      <p class="text-sm uppercase tracking-wide mb-1 text-gray-500 dark:text-gray-400">2023 – Atual</p>
      <h3 class="text-2xl font-semibold">Desenvolvedor Full Stack - Prefeitura de Ponta Grossa</h3>
      <p class="mt-2 leading-relaxed">
        Desenvolvimento de sistemas internos com foco em Vue, Laravel e MySQL, resultando na automação de processos internos e na melhoria da eficiência operacional da equipe.
      </p>
    </div>

    <div class="relative">
      <p class="text-sm uppercase tracking-wide mb-1 text-gray-500 dark:text-gray-400">Graduação</p>
      <h3 class="text-2xl font-semibold">Engenharia de Software — UEPG</h3>
      <p class="mt-2 leading-relaxed">
        Graduando em Engenharia de Software. O curso oferece uma base sólida em arquitetura de software, algoritmos e metodologias ágeis, preparando-me para desenvolver soluções escaláveis e robustas.
      </p>
    </div>

  </div>
</section>

    <section>
      <h2 class="text-4xl font-extrabold text-center mb-10 mt-10">Projetos</h2>
      <div class="bg-gray-700 h-20"></div>
    </section>

    <section id="contact" class="py-16 px-4">
      <div class="max-w-3xl mx-auto text-center"> <!-- aumentamos de 2xl para 3xl -->
        <h2 class="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p class="mb-10">
          Mande um email para entrar em contato ou use as redes sociais abaixo.
        </p>

        <!-- Formulário -->
        <form action="https://formspree.io/f/mldlkwjg" method="POST"
          class="shadow-md rounded-lg p-6 space-y-6 highlight border text-left">
          <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">

            <div class="flex flex-1 flex-col space-y-2">
              <label for="name" class="text-sm font-medium highlight">Nome Completo</label>
              <input type="text" name="name" id="name" required placeholder="Seu nome completo"
                class="w-full p-3 border highlight bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#300303] dark:focus:ring-white text-inherit placeholder-gray-500 dark:placeholder-gray-400" />
            </div>

            <div class="flex flex-1 flex-col space-y-2">
              <label for="email" class="text-sm font-medium highlight">E-mail</label>
              <input type="email" name="email" id="email" required placeholder="exemplo@dominio.com"
                class="w-full p-3 border highlight bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#300303] dark:focus:ring-white text-inherit placeholder-gray-500 dark:placeholder-gray-400" />
            </div>

          </div>

          <div class="flex flex-col space-y-2">
            <label for="message" class="text-sm font-medium highlight">Mensagem</label>
            <textarea name="message" id="message" required placeholder="Escreva sua mensagem aqui..."
              class="w-full p-3 border highlight bg-transparent rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#300303] dark:focus:ring-white text-inherit placeholder-gray-500 dark:placeholder-gray-400"></textarea>
          </div>

          <button type="submit" class="w-full py-3 rounded highlight border">
            Enviar e-mail
          </button>
        </form>

        <!-- Links sociais -->
        <div class="mt-10 flex justify-center gap-6">
          <a href="https://wa.me/55SEUNUMERO?text=Oi!%20Vim%20pelo%20seu%20portfólio." target="_blank"
            class="flex items-center gap-2 text-green-600 hover:text-green-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.52 3.48A11.77 11.77 0 0012 0C5.38 0 0 5.38 0 12a11.9 11.9 0 001.69 6.09L0 24l6.22-1.63A11.91 11.91 0 0012 24c6.62 0 12-5.38 12-12 0-3.19-1.25-6.21-3.48-8.52zM12 21.5a9.46 9.46 0 01-4.85-1.31l-.35-.21-3.69.97.98-3.59-.23-.37a9.48 9.48 0 01-1.49-5.09C2.37 6.49 6.49 2.37 12 2.37c2.52 0 4.9.98 6.68 2.76A9.41 9.41 0 0121.63 12c0 5.51-4.48 9.5-9.63 9.5zm5.04-7.59c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.6.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07s-1.15-.42-2.2-1.34c-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.98-.22-.54-.44-.47-.6-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.11 2.85.14.18 1.91 3.03 4.63 4.25.65.28 1.15.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z" />
            </svg>
            WhatsApp
          </a>

          <a href="https://github.com/Geros-Von-Valdo" target="_blank"
            class="flex items-center gap-2 text-gray-800 hover:text-black">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/gabriel-novotni-7759a6214/" target="_blank"
            class="flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-.99 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6v9.8h-4V15c0-2.4-.04-5.5-3.4-5.5-3.4 0-3.9 2.7-3.9 5.3v9.2h-4V8z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
  </footer>
</template>
