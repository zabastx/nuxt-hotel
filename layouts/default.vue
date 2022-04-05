<template>
  <v-app light>
    <TheHeader />
    <v-main :class="routeClass">
      <Nuxt :class="routeClass" />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  computed: {
    routeClass() {
      return [this.$route.name, "main"];
    },
  },
};
</script>

<style lang="scss" scoped>
.main::v-deep .v-main__wrap {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
}
.index::v-deep .v-main__wrap {
  background-image: url("~assets/img/bg.jpg");
}

.Login::v-deep .v-main__wrap,
.Signup::v-deep .v-main__wrap {
  background-image: url("~assets/img/landing-bg.jpg");
}
</style>
