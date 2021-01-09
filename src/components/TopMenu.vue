<template>
  <menu class="w3-theme-d2 w3-top">
    <div class="w3-center">
      <template v-for="(page, index) in pages" :key="index">
        <router-link :to="page.url" class="w3-button w3-hover-theme" v-if="!hasChild(page)">{{ page.title }}</router-link>
        <div class="w3-dropdown-hover" v-else>
          <router-link :to="page.url" class="w3-button w3-hover-theme">{{page.title}}</router-link>
          <div
            class="w3-dropdown-content w3-bar-block w3-card-4 fixed w3-theme-d2"
          >
            <router-link
              v-for="(child,index) in page.content"
              :to="`${page.url}/${child.url}`"
              class="w3-bar-item w3-button w3-hover-theme"
              :key="index"
              >{{child.title}}</router-link
            >
          </div>
        </div>
      </template>
      <div class="w3-dropdown-click">
        <a
          class="material-icons w3-button w3-hover-theme"
          onclick="showDropdown('search')"
          >search</a
        >
        <div
          class="w3-dropdown-content w3-bar-block w3-card-4 fixed w3-theme-d2"
          id="search"
        >
          <input
            type="search"
            class="w3-bar-item"
            placeholder="Поиск по каталогу"
          />
        </div>
      </div>
      <div class="w3-display-right">
        <div
          class="w3-padding w3-large w3-hide-medium w3-hide-small underline"
          onclick="copy()"
          id="email"
        >
          botsad-don@gmail.com
        </div>
        <a
          class="w3-button w3-hover-theme w3-hide-large"
          @click="this.$emit('toggle-aside')"
          >Aside</a
        >
      </div>
    </div>
  </menu>
</template>

<script>
export default {
  emits: ["toggle-aside"],
  props: {
    pages: Object,
  },
  methods: {
    hasChild(page) {
      return typeof page.content == "object"
    }
  }
};
</script>

<style>
menu {
  margin: 0px;
}
</style>