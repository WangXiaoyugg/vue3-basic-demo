<template>
  <h1 id="result">{{ result }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          result: 42
        });
      }, 2000);
    });
  }
});
</script>

<style scoped>
</style>