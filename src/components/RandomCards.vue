<template>
    <plant v-for="(plant, index) in content" :key="index" :name="plant.name" :latinName="plant.latinName" :description="plant.description" :pageType="'main'"/>
</template>

<script>
import Plant from './Plant.vue'
export default {
  components: { Plant },
    props: {
        "number": {
            type: Number,
            default: 6
        },
        "catalog": Array
    },
    computed: {
        content() {
            let res = [];
            for (let i = 0; i < this.number; i++) {
                const rand = Math.round(Math.random() * (this.catalog.length - 1));
                res[i] = this.catalog[rand];
            }
            console.log(res)
            return res;
        }
    }
}
</script>