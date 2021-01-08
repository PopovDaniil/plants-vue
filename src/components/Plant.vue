<template>
  <div class="w3-padding w3-half" v-if="this.isMain">
    <section class="w3-card-4 w3-container w3-theme w3-margin-top">
      <img
        :src="this.image"
        class="w3-col small w3-left-align w3-margin"
      />
      <a class="w3-xlarge" :href="this.uri">{{ this.name }}</a>
      <p class="w3-small">{{ this.description }}</p>
    </section>
  </div>
  <div class="w3-section" v-else>
    <section class="w3-card w3-padding w3-theme w3-container">
      <h1 id="name">
        {{ Name }}&nbsp;<span class="w3-text-dark-gray w3-medium vert-middle"
          >({{ LatinName }})</span
        >
      </h1>
      <div class="w3-threequarter w3-padding" id="description">
        {{ Name }} - {{ Description }}
      </div>
      <img :src="this.image" class="w3-quarter" />
    </section>
    <a href="edit">Редактировать</a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    latinName: String,
    description: String,
    pageType: {
      type: String,
      validator: (val) => ["main", "plant"].includes(val),
      default: "plant",
    },
  },
  computed: {
    image() {
        return require(`../assets/images/${this.latinName}.jpg`)
    },
    uri() {
        return `/catalog/${this.latinName}`
    },
    isMain() {
      return this.pageType == "main";
    },
  },
};
</script>

<style>
  section.w3-card-4 {
    height: 250px;
  }
</style>