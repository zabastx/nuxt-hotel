<template>
  <v-form class="form d-flex flex-column elevation-4 rounded pa-7" @submit.prevent>
    <h1 class="mb-5">Войти</h1>
    <FormsInput class="mb-3" placeholder="Email" required />
    <FormsInput class="mb-5" placeholder="Пароль" required type="password" />
    <v-btn
      class="btn"
      height="44"
      color="accent"
      rounded
      elevation="0"
      block
      type="submit"
    >
      <v-spacer>войти</v-spacer>
      <v-icon light>mdi-arrow-right</v-icon>
    </v-btn>
    <v-row align="center" class="row mt-5">
      <p>Нет аккаунта на Toxin?</p>
      <v-spacer></v-spacer>
      <NuxtLink to="/signup">
        <v-btn class="btn" height="44" color="accent" rounded elevation="0" outlined
          >создать</v-btn
        >
      </NuxtLink>
    </v-row>
  </v-form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  width: 380px;
  background: #fff;
}

.row::v-deep {
  margin: 0;
}

.btn::v-deep {
  font-weight: 700;
}
</style>
