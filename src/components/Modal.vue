<template>
  <teleport to="#modal">
    <div class="modal" v-if="isOpen">
      <div class="content">
        <slot>This is modal</slot>
        <button @click="btnClick">关闭</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    isOpen: Boolean
  },
  emits: {
    "close-modal": null
  },
  setup(props, context) {
    const btnClick = () => {
      context.emit("close-modal");
    };

    return {
      btnClick
    };
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
.modal .content {
  text-align: center;
  font-size: 16px;
}
</style>