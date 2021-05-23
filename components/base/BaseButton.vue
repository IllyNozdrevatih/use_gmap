<template>
  <button class="btn not-rounded"><slot /></button>
</template>
<style scoped>
.not-rounded {
  border-radius: 0px;
}
.btn {
  line-height: 1em;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
</style>
