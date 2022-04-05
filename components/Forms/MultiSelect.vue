<template>
  <div class="multiselect" v-click-outside="hideOptions">
    <h3 class="mb-1">{{ label }}</h3>
    <div
      class="multiselect__value pa-2 rounded d-flex align-center dark75"
      :class="{ 'rounded-b-0': showOptions }"
      @click="showOptions = !showOptions"
    >
      <span>{{ displayValue }}</span>
      <v-spacer></v-spacer>
      <v-icon>{{ icon }}</v-icon>
    </div>
    <transition name="slide-down">
      <div class="multiselect__options pa-2 rounded rounded-t-0" v-show="showOptions">
        <div
          class="multiselect__options--option d-flex align-center"
          v-for="(option, idx) in options"
          :key="idx"
        >
          <h3>{{ option.title }}</h3>
          <v-spacer></v-spacer>
          <v-btn
            class="btn"
            outlined
            icon
            color="#1F204140"
            height="30"
            width="30"
            :disabled="option.value === 0"
            @click="option.value--"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="multiselect__options--value">{{ option.value }}</span>
          <v-btn
            class="btn"
            outlined
            icon
            color="#1F204140"
            height="30"
            width="30"
            :disabled="option.value > 5"
            @click="option.value++"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <div class="multiselect__options--btns d-flex">
          <v-btn height="20" color="accent" plain class="btn" @click="clear"
            >очистить</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn height="20" color="accent" plain class="btn" @click="hideOptions"
            >применить</v-btn
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "guests",
    },
    label: String,
    options: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    showOptions: false,
  }),
  computed: {
    icon() {
      return this.showOptions ? "mdi-chevron-up" : "mdi-chevron-down";
    },
    guests() {
      if (!this.total) return "Сколько гостей";
      if (this.total === 1) return "1 гость";
      if (this.total >= 2 && this.total < 5) return `${this.total} гостя`;
      return `${this.total} гостей`;
    },
    displayValue() {
      if (this.type === "guests") return this.guests;
      const value = this.options
        .filter((item) => item.value > 0)
        .map((item) => ` ${item.value} ${item.title}`)
        .toString();
      return value ? value : "Удобства";
    },
    total() {
      let guestNum = 0;
      this.options.forEach((option) => (guestNum += option.value));
      return guestNum;
    },
  },
  methods: {
    clear() {
      this.options.forEach((option) => {
        option.value = 0;
      });
    },
    hideOptions() {
      this.showOptions = false;
    },
  },
  updated() {
    this.$emit("input", this.total);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/globalVars.scss";

.multiselect {
  position: relative;
  &__value {
    background: #fff;
    height: 44px;
    border: 1px solid $dark50;
    cursor: pointer;
    span {
      height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__options {
    position: absolute;
    width: 100%;
    top: 100%;
    background: #fff;
    border: 1px solid $dark50;
    border-top: none;
    z-index: 2;
    &--value {
      width: 2ch;
      text-align: center;
    }
    &--option {
      margin-bottom: 8px;
      &.d-flex {
        gap: 10px;
      }
    }
  }
  .btn {
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    &::v-deep:disabled {
      opacity: 0.4;
    }
  }
}
</style>
