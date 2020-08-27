<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          About Me
        </base-heading>

        <base-text class="mb-5">
          As a full stack software developer with a background in data<br>
          analysis and public service, I bridge the gap in finding innovative solutions
          to multi-faceted problems with the goal of modernizing local government technologies to better serve constituents. My passion for detail and critical thinking allow me to translate business objectives into strategic, deployable solutions that empower people to do their best work.
        </base-text>

        <base-subheading class="info--text">
          Knowledge
        </base-subheading>

        <base-text class="mb-5">
          I posses solid understanding and mastery of key technologies
          but I also enjoy learning emerging frameworks.<br>
        </base-text>
          <base-subheading class="info--text">
          Skills
        </base-subheading>
        <base-text class="mb-5">
          React | Vue | Node | Express | MongoDB | SQL | CSS | RESTful APIs | HTML | Python | jQuery | Webpack |
          UI + UX Design | Git | Bootstrap | Materialize
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'Web Design',
          value: 80,
        },
        {
          name: 'Web Development',
          value: 95,
        },
        {
          name: 'JavaScript',
          value: 90,
        },
      ],
    }),
  }
</script>
