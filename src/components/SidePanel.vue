<template>
  <aside class="w3-container w3-col s6 m3 l3" :class="{show}">
    <div class="w3-card w3-section w3-theme">
      <div class="w3-xlarge w3-center w3-padding">
        <a href="/calendar">Календарь цветения</a>
      </div>
      <ul class="w3-container w3-ul">
        <li class="w3-row">
          <p class="w3-col l3 w3-text-indigo w3-large w3-center">5 июня</p>
          <p class="w3-col l6 w3-large w3-center">Тополь</p>
          <img
            src="/images/Polytrichum_commune-small.jpeg"
            class="w3-col l3"
            alt=""
          />
        </li>
        <li class="w3-row">
          <p class="w3-col l3 w3-text-indigo w3-large w3-center">12 июня</p>
          <p class="w3-col l6 w3-large w3-center">Ива</p>
          <img
            src="/images/Polytrichum_commune-small.jpeg"
            class="w3-col l3"
            alt=""
          />
        </li>
        <li class="w3-row">
          <p class="w3-col l3 w3-text-indigo w3-large w3-center">19 июня</p>
          <p class="w3-col l6 w3-large w3-center">Вяз</p>
          <img
            src="/images/Polytrichum_commune-small.jpeg"
            class="w3-col l3"
            alt=""
          />
        </li>
        <li class="w3-row">
          <p class="w3-col l3 w3-text-indigo w3-large w3-center">26 июня</p>
          <p class="w3-col l6 w3-large w3-center">Липа</p>
          <img
            src="/images/Polytrichum_commune-small.jpeg"
            class="w3-col l3"
            alt=""
          />
        </li>
      </ul>
    </div>
    <div class="w3-card w3-theme">
      <div class="w3-xlarge w3-center w3-padding">
        <a href="/news">Новости ботанического сада</a>
      </div>
      <ul class="w3-container w3-ul">
        <li class="w3-row">
          <a>Появилось 3 новых сорта роз</a>
        </li>
        <li class="w3-row">
          <a>Зацвёл редкий цветок</a>
        </li>
        <li class="w3-row">
          <a>Требуется помощь в уборке сада</a>
        </li>
        <li class="w3-row">
          <a>Открыт набор на курсы флористов</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
aside {
  display: block;
}
@media (max-width: 993px) {
  aside {
    display: none;
    position: absolute;
    top: 400px;
    right: 0px;
    padding: 0px !important;
    background-color: white !important;
    z-index: 2;
  }
  aside.show {
      display: block;
  }
}
</style>