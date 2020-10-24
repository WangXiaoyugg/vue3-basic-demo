<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <button @click="add">👍+1</button>
  <ul v-for="(number,index) in numbers" :key="index">
    <li>{{number}}</li>
  </ul>
  <p>{{person.name}}</p>
</template>

<script lang="ts">
import {
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered
} from "vue";
interface DataProps {
  count: number;
  double: number;
  add(): void;
  numbers: number[];
  person: { name?: string };
}
export default {
  name: "App",
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // const add = () => {
    //   count.value++;
    // };
    onMounted(() => {
      console.log("mounted");
    });
    onUpdated(() => {
      console.log("updated");
    });
    onRenderTriggered(event => {
      console.log(event);
    });
    const data: DataProps = reactive({
      count: 0,
      add: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
      numbers: [1, 2],
      person: {}
    });
    data.numbers.push(4);
    data.person.name = "garen";
    const refData = toRefs(data);

    return {
      ...refData
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
