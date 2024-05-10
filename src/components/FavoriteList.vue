<script setup>
defineProps(['favorites', 'getFromFavorites'])
</script>

<template>
  <ACard title="Favorites">
    <ACardGrid v-for="(item, index) in favorites" style="width: 50%; text-align: center" :hoverable="false">
      <AButton @click="getFromFavorites(index)">{{ item.from }}-{{ item.to }}</AButton>
    </ACardGrid>
  </ACard>
</template>

<style scoped>

</style>