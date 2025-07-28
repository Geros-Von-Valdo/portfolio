<template>
  <div :style="marginStyle">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'left', // 'left' ou 'right'
    validator: val => ['left', 'right'].includes(val),
  },
  baseMargin: {
    type: String,
    default: '5vw', // margem fixa base para ambos os lados
  },
  extraMargin: {
    type: String,
    default: '5vw', // margem extra para deslocar esquerda/direita
  },
})

const marginStyle = computed(() => {
  const base = props.baseMargin
  const extra = props.extraMargin

  if (props.position === 'left') {
    // margem esquerda base + extra, margem direita base
    return {
      marginLeft: `calc(${base} + ${extra})`,
      marginRight: base,
    }
  } else {
    // margem direita base + extra, margem esquerda base
    return {
      marginRight: `calc(${base} + ${extra})`,
      marginLeft: base,
    }
  }
})
</script>
