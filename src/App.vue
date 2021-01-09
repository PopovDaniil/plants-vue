<template>
  <site-header />
  <top-menu :pages="pages" @toggle-aside="this.toggleAside" />
  <main class="w3-container w3-col l9 m12">
    <random-cards :catalog="this.catalog" />
  </main>
  <side-panel :show="this.showAside" />
  <site-footer />
</template>

<script>
import "./assets/styles/w3-theme-green.css";
import "./assets/styles/w3.css";
import RandomCards from "./components/RandomCards.vue";
import SidePanel from "./components/SidePanel.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import TopMenu from "./components/TopMenu.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    TopMenu,
    RandomCards,
    SidePanel,
    SiteFooter,
  },
  data() {
    return {
      pages: [
        {
          title: "Главная",
          url: "/",
        },
        {
          title: "Каталог",
          url: "catalog",
          content: [
            {
              title: "Научная классификация",
              url: "scientific",
            },
            {
              title: "По жизненной форме",
              url: "lifeform",
            },
          ],
        },
      ],
      catalog: [
        {
          name: "Ромашка",
          latinName: "Chamomilla",
          description: "Полевой цветок",
        },
        {
          name: "Дуб",
          latinName: "Quercus",
          description: "Дерево",
        },
      ],
      showAside: false,
    };
  },
  methods: {
    toggleAside() {
      this.mainPage.showAside = !this.mainPage.showAside;
    },
    getPage(url) {
      return this.pages.find((page) => page.url == url);
    },
  },
};
</script>

<style>
img {
  min-width: 40px;
}
img.small {
  max-width: 150px;
}
a {
  text-decoration: none;
}
</style>
