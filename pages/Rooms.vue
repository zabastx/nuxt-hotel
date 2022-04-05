<template>
  <div class="rooms d-flex py-8">
    <section class="rooms__filters">
      <FormsDate label="даты пребывания в отеле" :range="true" />
      <FormsMultiSelect label="гости" :options="guestOptions" />
      <FormsRange v-model="range" label="диапазон цены" />
      <FormsCheckboxList :list="rulesList" label="правила дома" v-model="rules" />
      <FormsCheckboxList
        :list="accessList"
        label="доступность"
        v-model="access"
        expanded
      />
      <FormsMultiSelect label="удобства номера" :options="featOptions" type="features" />
      <FormsExpandPanel label="дополнительные удобства">
        <v-checkbox
          v-for="(val, idx) in features"
          :key="idx"
          :label="val"
          :value="val"
          hide-details
          color="accent"
        ></v-checkbox>
      </FormsExpandPanel>
    </section>
    <v-spacer></v-spacer>
    <section class="rooms__content">
      <h1>Номера, которые мы для вас подобрали</h1>
      <div class="rooms__content--cards d-flex flex-wrap justify-space-around">
        <NuxtLink
          :to="`/room/${val.num}`"
          v-for="(val, idx) in rooms"
          :key="idx"
          class="nodecoration"
        >
          <CardsRoom v-bind="val" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const rooms = await $content("rooms").fetch();
    const filters = (await $content("filters").fetch())[0];
    return {
      rooms,
      rulesList: filters.rules,
      accessList: filters.access,
      features: filters.features,
    };
  },
  data: () => ({
    rooms: [],
    range: [5000, 10000],
    rules: [],
    access: [],
    facilities: [],
    rulesList: null,
    accessList: null,
    features: null,
    guestOptions: [
      { title: "взрослые", value: 0 },
      { title: "дети", value: 0 },
      { title: "младенцы", value: 0 },
    ],
    featOptions: [
      { title: "спальни", value: 0 },
      { title: "кровати", value: 0 },
      { title: "ванные комнаты", value: 0 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "~assets/globalVars.scss";

.rooms {
  margin: auto;
  max-width: var(--content-width);
  &__content {
    flex: 1 1 65%;
    &--cards {
      row-gap: 20px;
      column-gap: 12px;
    }
  }
  &__filters {
    flex: 0 0 270px;
    > * {
      margin-bottom: 20px;
    }
  }
}

.nodecoration {
  text-decoration: none;
}
</style>
