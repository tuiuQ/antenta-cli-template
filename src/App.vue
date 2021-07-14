<template>
  <div class="container">
    Hello {{ title }}
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: 'App',
  setup () {
    const title = ref('antenta-cli')
    return {
      title
    }
  }
})
</script>

<style>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>