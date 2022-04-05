<template>
  <v-app-bar app elevation="4" height="70" class="header" color="#fff">
    <NuxtLink to="/">
      <img src="~/assets/img/logo.svg" alt="Toxin logo" style="vertical-align: middle" />
    </NuxtLink>
    <img src="~/assets/img/toxin.svg" alt="Toxin text" />
    <v-spacer></v-spacer>
    <v-btn color="accent" rounded elevation="0" outlined class="btn" nuxt to="/login"
      >войти</v-btn
    >
    <v-btn color="accent" rounded elevation="0" class="btn" nuxt to="/signup"
      >зарегистрироваться</v-btn
    >
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header::v-deep > div {
  gap: 20px;
  padding: 0;
  margin: auto;
  max-width: var(--content-width);
}
.btn::v-deep {
  font-weight: 700;
}
</style>
