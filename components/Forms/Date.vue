<template>
  <div class="date-picker" v-click-outside="hidePicker">
    <label class="date-picker__label">
      <h3 class="mb-1">{{ label }}</h3>
      <v-text-field
        :placeholder="placeholder"
        :required="required"
        class="date-picker__input"
        outlined
        dense
        color="#1F2041BF"
        height="44px"
        append-icon="mdi-chevron-down"
        hide-details
        v-mask="mask"
        v-model="value"
        @click="showDatePicker = !showDatePicker"
        @keypress.space="showDatePicker = !showDatePicker"
      ></v-text-field>
    </label>
    <v-date-picker
      v-if="!range"
      light
      no-title
      elevation="4"
      :first-day-of-week="1"
      locale="ru-ru"
      prev-icon="mdi-arrow-left"
      next-icon="mdi-arrow-right"
      show-adjacent-months
      @input="datePick"
      class="date-picker__picker"
      v-model="picker"
      v-show="showDatePicker"
    >
      <v-btn plain small color="accent" @click="clear">очистить</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain small color="accent" @click="apply">применить</v-btn>
    </v-date-picker>
    <v-date-picker
      v-else
      :range="range"
      light
      no-title
      elevation="4"
      :first-day-of-week="1"
      locale="ru-ru"
      prev-icon="mdi-arrow-left"
      next-icon="mdi-arrow-right"
      show-adjacent-months
      class="date-picker__picker"
      v-model="pickerRange"
      @input="dateRangePick"
      v-show="showDatePicker"
    >
      <v-btn plain small color="accent" @click="clear">очистить</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain small color="accent" @click="apply">применить</v-btn>
    </v-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    required: Boolean,
    label: String,
    range: Boolean,
  },
  data: () => ({
    value: "",
    picker: "",
    pickerRange: [],
    showDatePicker: false,
  }),
  computed: {
    placeholder() {
      if (!this.range) return "ДД.ММ.ГГГГ";
      return "ДД.ММ - ДД.ММ";
    },
    mask() {
      if (!this.range) return [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
      return [/\d/, /\d/, ".", /\d/, /\d/, " - ", /\d/, /\d/, ".", /\d/, /\d/];
    },
  },
  methods: {
    datePick(e) {
      this.value = e.split("-").reverse().join(".");
    },
    dateRangePick(e) {
      if (!e[1]) return;
      const [first, second] = [
        e[0].split("-").slice(1).reverse().join("."),
        e[1].split("-").slice(1).reverse().join("."),
      ];
      this.value = `${first} - ${second}`;
      console.log("dateRangePick", e);
    },
    apply() {
      this.$emit("input", this.value);
      this.showDatePicker = false;
    },
    clear() {
      this.picker = "";
      this.pickerRange = [];
      this.value = "";
      this.$emit("input", this.value);
    },
    hidePicker() {
      this.showDatePicker = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/globalVars.scss";
.date-picker {
  position: relative;
  &__picker {
    min-width: 100%;
    position: absolute;
    top: calc(100% + 5px);
    z-index: 4;
    max-width: initial;
  }
  &__input {
    font-size: 14px;
  }
}
</style>
