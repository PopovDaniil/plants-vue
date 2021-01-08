<template>
  <site-header />
  <top-menu @toggle-aside="this.toggleAside" />
  <main class="w3-container w3-col l9 m12">
    <random-cards :catalog="this.catalog" />
  </main>
  <side-panel :show="this.mainPage.showAside" />
  <site-footer/>
</template>

<script>
import "./assets/styles/w3-theme-green.css";
import "./assets/styles/w3.css";
import RandomCards from "./components/RandomCards.vue";
import SidePanel from "./components/SidePanel.vue";
import SiteFooter from './components/SiteFooter.vue';
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
      mainPage: {
        showAside: false,
      },
    };
  },
  methods: {
    toggleAside() {
      this.mainPage.showAside = !this.mainPage.showAside;
    }
  }
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
