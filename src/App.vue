<script setup lang="ts">
import { useCount } from './useCount';

const {count, addCount, nextCount} = useCount()
const onClick = ()=>{
  addCount()
  window.alert(`ボタンを押してcountが${count.value}になりました。もう一度押すと${nextCount.value}になります。`)
}
</script>

<template>
  <button @click="onClick">add</button>
  <p>{{ count }}</p>
</template>
