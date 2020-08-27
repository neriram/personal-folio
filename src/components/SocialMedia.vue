<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="secondary"
      :small="!large"
    >
    <a
      :href="item.url"
      :target="item.target"
      >
      <v-icon
        dark
        v-text="item.icon"
      />
      </a>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Email',
          icon: 'mdi-email',
          url: 'mailto:neriram@gmail.com',
          target: '_blank',
        },
        {
          name: 'GitHub',
          icon: 'mdi-github',
          url: 'https://github.com/neriram',
          target: '_blank',
        },
        {
          name: 'LinkedIn',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/neri-r-2731b31a9',
          target: '_blank',
        },
        // {
        //   name: 'Phone',
        //   icon: 'mdi-phone',
        // },
      ],
    }),
  }
</script>
<style scoped>
a {
text-decoration: none;
}
</style>
