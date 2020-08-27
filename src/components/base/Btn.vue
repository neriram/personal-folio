<template>
  <v-btn
    color="info"
    rounded
    href="/files/NR-Resume.pdf"
    download
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
