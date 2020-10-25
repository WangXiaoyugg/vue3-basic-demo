<template>
  <teleport to="#modal">
    <div class="modal">
      <h1>this is modal!</h1>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  setup() {
    return {};
  }
});
</script>

<style scoped>
.modal {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
.modal h1 {
  text-align: center;
  font-size: 16px;
}
</style>