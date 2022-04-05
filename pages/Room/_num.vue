<template>
  <v-container class="d-flex justify-space-between align-start my-10" style="gap: 70px">
    <div class="room d-flex justify-space-between align-start">
      <div class="room__info">
        <h2 class="mb-5">Сведения о номере</h2>
        <InfoIcon idx="0" />
        <v-divider class="my-5"></v-divider>
        <InfoIcon idx="1" />
        <v-divider class="my-5"></v-divider>
        <InfoIcon idx="2" />
      </div>
      <CardsRoom v-bind="$data" />
      <div class="room__reviews">
        <h2 class="mb-5">Отзывы посетителей номера</h2>
        <div class="room__reviews--review mb-5">
          <v-img
            :src="require('~/assets/img/avatar.png')"
            width="48"
            height="48"
            class="row-span"
          ></v-img>
          <p class="dark75" style="font-weight: 700">Мурад Сарафанов</p>
          <p class="dark75">5 дней назад</p>
          <v-chip color="accent" class="mt-2" small outlined>
            <v-icon left size="10"> mdi-heart </v-icon>
            12
          </v-chip>
          <p class="dark75 mt-2">
            Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий.
            И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто
            не жаловался из соседей.
          </p>
        </div>
        <div class="room__reviews--review">
          <v-img
            :src="require('~/assets/img/avatar2.png')"
            width="48"
            height="48"
            class="row-span"
          ></v-img>
          <p class="dark75" style="font-weight: 700">Патрисия Стёклышкова</p>
          <p class="dark75">Неделю назад</p>
          <v-chip color="#1F204140" class="mt-2" small outlined>
            <v-icon left size="10" color="#1F204140"> mdi-heart-outline </v-icon>
            2
          </v-chip>
          <p class="dark75 mt-2">
            Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую
            заказать, каждый день новое блюдо и десерт как комплимент
          </p>
        </div>
      </div>
      <div class="room__rules">
        <h2 class="mb-5">Правила</h2>
        <ul class="dark75">
          <li>Нельзя с питомцами</li>
          <li>Без вечеринок и мероприятий</li>
          <li>Время прибытия — после 13:00, а выезд до 12:00</li>
        </ul>
      </div>
      <div class="room__cancel">
        <h2 class="mb-5">Отмена</h2>
        <p class="dark75">
          Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн.
          до прибытия вы получите полный возврат за вычетом сбора за услуги.
        </p>
      </div>
    </div>
    <CardsBooking v-bind="$data" @book="book" />
    <v-snackbar centered light v-model="snackbar" color="primary" timeout="2000">
      <h2 style="text-align: center">Забронировано</h2>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
  }),
  async asyncData({ params, $content }) {
    const room = await $content("rooms")
      .where({ num: { $eq: +params.num } })
      .fetch();
    const { num, isLux, price, rating, reviews } = room[0];
    return {
      num,
      isLux,
      price,
      rating,
      reviews,
    };
  },
  methods: {
    book() {
      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.room {
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 30px;
  &__info {
    max-width: 280px;
  }
  &__reviews {
    flex-grow: 1;
    &--review {
      display: grid;
      grid-template-rows: 24px 24px 1fr;
      grid-template-columns: 48px 1fr;
      column-gap: 10px;
      p {
        line-height: 24px;
      }
      .row-span {
        grid-row: span 2;
      }
    }
  }
  &__rules {
    flex: 1 0 290px;
    li::marker {
      font-size: 24px;
      line-height: 1em;
      color: #1f204140;
    }
  }
  &__cancel {
    flex: 1 0 340px;
  }
}
</style>
