<template>
  <v-card
    elevation="4"
    width="380"
    class="book-card pa-7 d-flex flex-column"
    style="gap: 20px"
  >
    <div class="book-card__info d-flex align-end">
      <b class="dark100"
        >№ <span class="book-card__info--num">{{ num }}</span></b
      >
      <b v-if="isLux" class="text-purple pl-2">ЛЮКС</b>
      <v-spacer></v-spacer>
      <span class="book-card__info--price dark50"
        ><b>{{ price }}₽</b> в сутки</span
      >
    </div>
    <div class="d-flex" style="gap: 20px">
      <FormsDate label="Прибытие" required placeholder="ДД.ММ.ГГГГ" v-model="firstDate" />
      <FormsDate label="Выезд" required placeholder="ДД.ММ.ГГГГ" v-model="secondDate" />
    </div>
    <FormsMultiSelect :options="options" label="гости" @input="guests = $event" />
    <template v-if="days"
      ><div class="book-card__details">
        <p class="dark75">
          <span>{{ price }}₽ x {{ days }} суток</span><span>{{ price * days }}₽</span>
        </p>
        <p class="dark75">
          <span>Скидка</span><span>{{ discount }}₽</span>
        </p>
        <p class="dark75">
          <span>Дополнительные услуги</span><span>{{ 300 }}₽</span>
        </p>
      </div>
      <div class="book-card__total d-flex">
        <h2>Итого</h2>
        <v-spacer class="book-card__total--spacer"></v-spacer>
        <h2>{{ totalPrice }}₽</h2>
      </div></template
    >
    <v-btn
      color="accent"
      rounded
      block
      elevation="0"
      height="44"
      :disabled="!ready"
      @click="$emit('book')"
    >
      <v-spacer style="text-align: center">Забронировать</v-spacer>
      <v-icon light>mdi-arrow-right</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: ["num", "price", "isLux"],
  data: () => ({
    firstDate: "",
    secondDate: "",
    options: [
      { title: "взрослые", value: 0 },
      { title: "дети", value: 0 },
      { title: "младенцы", value: 0 },
    ],
    discount: -2179,
    guests: 0,
  }),
  computed: {
    days() {
      if (!(this.firstDate && this.secondDate)) return 0;
      const first = Date.parse(this.firstDate.split(".").reverse().join("/"));
      const second = Date.parse(this.secondDate.split(".").reverse().join("/"));
      const diff = (second - first) / (1000 * 3600 * 24);
      return diff > 0 ? diff : 0;
    },
    totalPrice() {
      return this.price * this.days + this.discount + 300;
    },
    ready() {
      return !!this.guests && !!this.days;
    },
  },
};
</script>

<style lang="scss" scoped>
.book-card {
  flex-shrink: 0;
  &__info {
    font-size: 12px;
    &--num {
      font-size: 24px;
      line-height: 1em;
    }
    &--price b {
      font-size: 14px;
    }
  }
  &__details {
    p {
      display: flex;
      justify-content: space-between;
    }
  }
  &__total {
    line-height: 1em;
    &--spacer {
      border-bottom: 1px dashed rgba(31, 32, 65, 0.25);
    }
  }
}
</style>
