<template>
  <v-footer class="footer" color="#fff" app elevation="4" absolute height="auto">
    <v-row class="footer__nav" justify="space-between">
      <v-col class="d-flex align-center">
        <img src="~/assets/img/logo.svg" alt="Toxin logo" />
        <img src="~/assets/img/toxin.svg" alt="Toxin" />
        <p>
          Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные
          взгляды»
        </p>
      </v-col>
      <v-col>
        <h3>навигация</h3>
        <p class="dark50">О нас</p>
        <p class="dark50">Новости</p>
        <p class="dark50">Служба поддержки</p>
        <p class="dark50">Услуги</p>
      </v-col>
      <v-col>
        <h3>о нас</h3>
        <p class="dark50">О сервисе</p>
        <p class="dark50">Наша команда</p>
        <p class="dark50">Вакансии</p>
        <p class="dark50">Инвесторы</p>
      </v-col>
      <v-col>
        <h3>Служба поддержки</h3>
        <p class="dark50">Соглашения</p>
        <p class="dark50">Сообщества</p>
        <p class="dark50">Связь с нами</p>
      </v-col>
      <v-col tag="form" @submit.prevent="submit">
        <h3>Подписка</h3>
        <p class="dark50">Получайте специальные предложения и новости сервиса</p>
        <FormsInput placeholder="Email" type="email" required />
      </v-col>
    </v-row>
    <v-divider style="width: 100%"></v-divider>
    <div class="footer__copyright">
      <p>Copyright © 2022 Toxin отель. Все права защищены.</p>
      <v-spacer></v-spacer>
      <v-btn v-for="icon in icons" :key="icon" color="accent" icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
  methods: {
    submit(e) {
      e.target.reset();
      alert("Success");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  &::v-deep {
    padding: 0;
    flex-direction: column;
  }
  &__nav {
    width: 100%;
    padding: 100px 0;
    gap: 20px;
    margin: auto;
    max-width: var(--content-width);
    > * {
      gap: 10px;
      flex-wrap: wrap;
      padding: 0;
      flex: 0 0 200px;
      &:last-child,
      &:first-child {
        flex-grow: 1;
      }
    }
    h3 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
  }
  &__copyright {
    width: 100%;
    display: flex;
    height: 70px;
    align-items: center;
    margin: auto;
    max-width: var(--content-width);
    p {
      margin: 0;
      line-height: 36px;
    }
  }
}
</style>
