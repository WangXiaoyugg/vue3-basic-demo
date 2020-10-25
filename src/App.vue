<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <h1>{{ greetings }}</h1>
  <h1>x: {{x}} ,y: {{y}}</h1>
  <h1 v-if="loading">Loading!...</h1>
  <img v-if="loaded" :src="result[0].url" alt style="width: 200px; height: auto;" />
  <hr />
  <modal></modal>
  <button @click="add">👍+1</button>
  <button @click="updateGreeting">Updated</button>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
import Modal from "./components/Modal.vue";
interface DataProps {
  count: number;
  double: number;
  add(): void;
}
interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: string;
  height: string;
}

export default {
  name: "App",
  components: {
    Modal
  },
  setup() {
    const data: DataProps = reactive({
      count: 0,
      add: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello!";
    };

    const { x, y } = useMousePosition();
    const { result, loading, loaded } = useURLLoader<CatResult[]>(
      // "https://dog.ceo/api/breeds/image/random"
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    watch(result, () => {
      if (result.value) {
        console.log("value", result.value[0]);
      }
    });

    watch([greetings, () => data.count], (newVal, oldVal) => {
      console.log("value: ", oldVal, newVal);
      document.title = "updated" + greetings.value + data.count;
    });

    const refData = toRefs(data);

    return {
      ...refData,
      updateGreeting,
      greetings,
      x,
      y,
      result,
      loading,
      loaded
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
