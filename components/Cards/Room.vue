<template>
  <v-card elevation="4" max-width="270" class="card">
    <RoomImage :src="`${num}.jpg`" :alt="`room #${num}`" />
    <div class="card__info d-flex align-end pa-5 pb-2">
      <b class="dark100"
        >№ <span class="card__info--num">{{ num }}</span></b
      >
      <b v-if="isLux" class="text-purple">ЛЮКС</b>
      <v-spacer></v-spacer>
      <span class="dark50"
        ><b>{{ price }}₽</b> в сутки</span
      >
    </div>
    <v-divider class="mx-4"></v-divider>
    <div class="card__reviews d-flex align-end pa-5 pt-2">
      <v-rating
        :value="rating"
        color="accent"
        size="24"
        readonly
        class="rating"
      ></v-rating>
      <v-spacer></v-spacer>
      <span class="dark50"
        ><b>{{ reviews }}</b> отзывов</span
      >
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    num: { type: Number, required: true },
    isLux: { type: Boolean, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: default;
  &__info {
    font-size: 12px;
    gap: 5px;
    &--num {
      font-size: 14px;
    }
  }
}

.rating::v-deep .v-icon {
  padding: 0;
}
</style>
