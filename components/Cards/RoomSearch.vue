<template>
  <v-form class="form d-flex flex-column elevation-4 rounded pa-7" @submit.prevent>
    <h1>Найдём номера под ваши пожелания</h1>
    <div class="form__dates d-flex">
      <FormsDate label="Прибытие" required placeholder="ДД.ММ.ГГГГ" />
      <FormsDate label="Выезд" required placeholder="ДД.ММ.ГГГГ" />
    </div>
    <FormsMultiSelect :options="options" />
    <v-btn
      color="accent"
      rounded
      block
      type="submit"
      elevation="0"
      height="44"
      nuxt
      to="/rooms"
    >
      <v-spacer style="text-align: center">подобрать номер</v-spacer>
      <v-icon light>mdi-arrow-right</v-icon>
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    options: [
      { title: "взрослые", value: 0 },
      { title: "дети", value: 0 },
      { title: "младенцы", value: 0 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 380px;
  width: 100%;
  background: #fff;
  gap: 20px;
  &__dates {
    gap: 20px;
  }
}
</style>
