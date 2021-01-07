<template>
  <header class="w3-display-container w3-text-white">
    <h1
      class="w3-container w3-display-middle w3-center w3-xxxlarge back-black-opacity w3-text-theme w3-round-large"
    >
      <img
        :src="require('../assets/images/logo.png')"
        class="logo w3-margin"
      />
      <span style="vertical-align: text-top">Энциклопедия растений</span>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 400px;
  background-image: url(../assets/images/header-bg.png);
  background-position: center;
}
.logo {
    height: 72px;
}
.back-black-opacity {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>