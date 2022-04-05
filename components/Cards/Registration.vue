<template>
  <v-form class="form d-flex flex-column elevation-4 rounded pa-7" @submit.prevent>
    <h1 class="mb-5">Регистрация аккаунта</h1>
    <FormsInput class="mb-3" placeholder="Имя" required />
    <FormsInput class="mb-3" placeholder="Фамилия" required />
    <v-radio-group v-model="gender" row>
      <v-radio value="male" label="Мужчина" color="accent" />
      <v-radio value="female" label="Женщина" color="accent" />
    </v-radio-group>
    <FormsDate class="mb-3" required label="дата рождения" />
    <h3>данные для входа в сервис</h3>
    <FormsInput class="mb-3" placeholder="Email" required />
    <FormsInput class="mb-5" placeholder="Пароль" required type="password" />
    <v-switch
      class="form__switch"
      v-model="specialOffers"
      label="Получать спецпредложения"
      inset
      color="accent"
    ></v-switch>
    <v-btn
      class="btn"
      height="44"
      color="accent"
      rounded
      elevation="0"
      block
      type="submit"
    >
      <v-spacer>зарегистрироваться</v-spacer>
      <v-icon light>mdi-arrow-right</v-icon>
    </v-btn>
    <v-row align="center" class="row mt-5">
      <p>Уже есть аккаунт на Toxin?</p>
      <v-spacer></v-spacer>
      <NuxtLink to="/login">
        <v-btn class="btn" height="44" color="accent" rounded elevation="0" outlined
          >войти</v-btn
        >
      </NuxtLink>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    specialOffers: false,
    gender: "male",
  }),
};
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
