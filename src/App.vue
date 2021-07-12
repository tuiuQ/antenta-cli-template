<template>
  <div>
    {{ title }} components working;
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'App',
    setup () {
      return {
        title: 'App'
      }
    }
  })
</script>