<script setup>
import IconBTC from "@/components/icons/IconBTC.vue";
import IconETH from "@/components/icons/IconETH.vue";
import IconUSDT from "@/components/icons/IconUSDT.vue";

defineProps(['setCurrency', 'currency']);
</script>

<template>
  <AList bordered>
    <AListItem>
      <AButton
        class="button"
        block
        type="ghost"
        @click="setCurrency('BTC')" :class="currency === 'BTC' ? 'active' : ''"
      >
        <IconBTC/>
        BTC
      </AButton>
    </AListItem>
    <AListItem>
      <AButton
        class="button"
        block
        type="ghost"
        @click="setCurrency('ETH')" :class="currency === 'ETH' ? 'active' : ''"
      >
        <IconETH/>
        ETH
      </AButton>
    </AListItem>
    <AListItem>
      <AButton
        class="button"
        block
        type="ghost"
        @click="setCurrency('USDT')" :class="currency === 'USDT' ? 'active' : ''"
      >
        <IconUSDT/>
        USDT
      </AButton>
    </AListItem>
  </AList>
</template>

<style scoped>

.button {
  display: flex;
  align-items: center;
  gap: 4px;
}

.button.active {
  border-color: #1677ff;
}
</style>