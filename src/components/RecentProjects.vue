<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="12"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(2%)"
        />

        <base-heading>
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
          <a href="https://neriram.github.io/P1-Hive/">Hive:</a> a game built with HTML, CSS and JS <br>
          <a href="https://p2-real-talk.herokuapp.com">Real Talk:</a> full stack app built with Node, SQL, and SentimAI <br>
          innervue: full stack app built with React, MongoDB, and Google NLP<br>
          bbBook: proof-of-concept baby book app built with Vue and Vuetify
        </base-text>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.png`)"
                    max-height="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
     </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
       <!-- <v-img
          :src="require('@/assets/workstation.jpg')"
          height="100%"
        /> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        'project1',
        'project2',
        'project3',
        'project4',
      ],
    }),
  }
</script>
<style scoped>
a {
  color:black;
  text-decoration: none;
}
a:hover {
  color: #e35d09;
}
</style>
