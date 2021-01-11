<template>
  <plant
    v-for="(plant, index) in content"
    :key="index"
    :name="plant.name"
    :latinName="plant.latinName"
    :description="plant.description"
    pageType="main"
  />
</template>

<script>
import Plant from "./Plant.vue";
import {getItem} from "../db";
import {onMounted, ref} from 'vue';
export default {
  components: { Plant },
  props: {
    number: {
      type: Number,
      default: 6,
    },
    // catalog: Array,
  },
  setup(props) {
    let content = ref([]);
    const getRandom = async () => {
        const catalog = await getItem();
        for (let i = 0; i < props.number; i++) {
          const rand = Math.round(Math.random() * (catalog.length - 1));
          content.value[i] = catalog[rand];
        }
        // console.log(content);
      }
    onMounted(getRandom);

    return {
      content,
      getRandom
    };
  },
};
</script>