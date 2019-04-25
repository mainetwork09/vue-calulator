<template>
  <div class="about">
    <h1>History</h1>
    <div v-for="item in $store.getters.history">{{ item.number1 }} {{ item.operand }} {{ item.number2 }} = {{ item.result }}</div>
  </div>
</template>
