<script setup>
import {ref} from "vue";
import {message} from 'ant-design-vue';
import CryptoConvert from 'crypto-convert';
import SelectList from "@/components/SelectList.vue";
import FavoriteList from "@/components/FavoriteList.vue";

const convert = new CryptoConvert();
const amount = ref(0)
const firstCurrency = ref('')
const secondCurrency = ref('')
const result = ref(0)
const favorites = ref([])

const changeAmount = (value) => {
  amount.value = value
}

const setFirstCurrency = (value) => {
  firstCurrency.value = value
}

const setSecondCurrency = (value) => {
  secondCurrency.value = value
}

const convertCurrency = async () => {
  if (amount.value <= 0) {
    message.error('Amount must be greater than 0');
    return
  }

  if (!firstCurrency.value || !secondCurrency.value) {
    message.error('Choose both currencies');
    return
  }

  if (firstCurrency.value === secondCurrency.value) {
    message.error('Choose a different currency');
    return
  }

  await convert.ready();

  result.value = convert[firstCurrency.value][secondCurrency.value](amount.value);
}

const addToFavorites = () => {
  if (!firstCurrency.value || !secondCurrency.value) {
    message.error('Choose both currencies');
    return;
  }

  if (firstCurrency.value === secondCurrency.value) {
    message.error('Choose a different currency');
    return
  }

  favorites.value.push({
    from: firstCurrency.value,
    to: secondCurrency.value,
  })
}

const getFromFavorites = (index) => {
  firstCurrency.value = favorites.value[index].from
  secondCurrency.value = favorites.value[index].to
}
</script>

<template>
  <ALayout>
    <ALayoutContent class="content">
      <ACard class="wrapper">
        <div class="inner">
          <ATypographyTitle class="title">Crypto Exchanger</ATypographyTitle>
          <div class="result" v-if="result">
            <ATypographyTitle :level="2">{{ result }}</ATypographyTitle>
          </div>
          <div class="convert">
            <AInputNumber
              style="width: 100%"
              v-model:value="amount"
              @input="changeAmount"
              :min="0"
              placeholder="Enter amount"
            />
            <div class="buttons">
              <AButton type="primary" @click="convertCurrency">Convert</AButton>
              <AButton type="primary" @click="addToFavorites">Add to favorites</AButton>
            </div>
          </div>
          <FavoriteList v-if="favorites.length" :favorites="favorites" :getFromFavorites="getFromFavorites"/>
          <div class="grid">
            <SelectList :setCurrency="setFirstCurrency" :currency="firstCurrency"/>
            <SelectList :setCurrency="setSecondCurrency" :currency="secondCurrency"/>
          </div>
        </div>
      </ACard>
    </ALayoutContent>
  </ALayout>
</template>

<style scoped>
.content {
  height: 100dvh;
  padding: 16px;
}

.wrapper {
  width: 100%;
  max-width: 400px;
  margin: 16px auto;
}

.inner {
  display: grid;
  gap: 16px;
}

.title {
  margin: 0;
  text-align: center;
}

.result {
  text-align: center;
}

.convert {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
</style>
