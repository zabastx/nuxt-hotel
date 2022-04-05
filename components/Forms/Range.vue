<template>
  <div class="range-slider">
    <div class="d-flex mb-5">
      <h3>{{ label }}</h3>
      <v-spacer></v-spacer>
      <p class="dark50" style="font-size: 12px">{{ getValue }}</p>
    </div>
    <v-range-slider
      hint="Стоимость за сутки пребывания в номере"
      :max="max"
      :min="min"
      persistent-hint
      height="12"
      v-model="priceRange"
      color="primary"
    ></v-range-slider>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [5000, 10000],
    },
    max: { type: [String, Number], default: 15000 },
    min: { type: [String, Number], default: 0 },
    label: String,
  },
  computed: {
    priceRange: {
      set(val) {
        this.$emit("input", val);
      },
      get() {
        return this.value;
      },
    },
    getValue() {
      return `${this.value[0]}₽ - ${this.value[1]}₽`;
    },
  },
  mounted() {
    this.priceRange = this.value;
  },
};
</script>
