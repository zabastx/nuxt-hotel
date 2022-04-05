<template>
  <div class="info-icon">
    <v-icon color="accent" size="48" style="grid-row: span 2"
      >mdi-{{ values[+idx].icon }}</v-icon
    >
    <p class="dark75" style="font-weight: 700">{{ values[+idx].title }}</p>
    <p class="dark75">{{ values[+idx].text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    idx: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    values: [
      { title: "Комфорт", text: "Шумопоглощающие стены", icon: "emoticon-outline" },
      { title: "Удобство", text: "Окно в каждой из спален", icon: "city" },
      { title: "Уют", text: "Номер оснащён камином", icon: "fire" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.info-icon {
  display: grid;
  column-gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 48px 1fr;
  p {
    line-height: 24px;
  }
}
</style>
