<template>
  <div class="w3-row-padding w3-section">
    <div class="w3-third" v-for="(cls,index) in classes" :key="index">
      <h2 class="w3-text-theme w3-center">
        <router-link :to="'catalog/scientific'">{{cls.title}}➡</router-link>
      </h2>
      <section class="w3-card-4 w3-bar-block w3-theme w3-margin-top">
        <router-link class="w3-bar-item w3-button" :to="`catalog/${type.url}`"
        v-for="(type,index) in cls.content" :key="index"
          >{{type.title}}</router-link
        >
      </section>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        'classes': Object,
        'level': Number
    }
}
</script>