<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              Values
            </base-heading>

            <base-text class="mb-5">
              These are the core values I operate by. <br>
              They inform my work style and products.
            </base-text>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="#69A1BB"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="service.icon"
              />
            </v-avatar>

            <base-text>
              <div
                class="mb-2"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',

    data: () => ({
      services: [
        {
          name: 'Research',
          icon: 'mdi-clipboard-text-outline',
          blurb: 'Analytical brain<br>',
        },
        {
          name: 'Design',
          icon: 'mdi-pencil-outline',
          blurb: 'An eye for detail <br>',
        },
        {
          name: 'Development',
          icon: 'mdi-cog',
          blurb: 'Creative solutions <br>',
        },
        {
          name: 'Service',
          icon: 'mdi-account',
          blurb: 'Customers come first <br>',
        },
      ],
    }),
  }
</script>
