<template>
  <random-cards />
</template>

<script>
import RandomCards from './components/RandomCards.vue';
export default {
  components: { RandomCards },
    props: ['catalog']
};
</script>