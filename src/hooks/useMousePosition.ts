import { onMounted, onUnmounted, reactive, toRefs } from 'vue'
function useMousePosition() {
  const position = reactive({
    x: 0,
    y: 0,
  })
  const updateMouse = (e: MouseEvent) => {
    position.x = e.pageX;
    position.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });
  return { ...toRefs(position) }
}

export default useMousePosition