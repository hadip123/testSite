  <template>
  <nav>
    <v-navigation-drawer app dark color="#e9eef4">
      <div class="text-center mt-5">
        <h1 class="teal--text text-lg-h5 font-weight-bold">AAE IdeaPro</h1>
        <v-divider color="white" class="mt-4"></v-divider>
        <v-avatar class="my-5" size="60">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" class="image"></v-img>
        </v-avatar>

        <h1 class="black--text">Hadi Pahlavan</h1>
        <h6 class="grey--text">mhn.hadi@outlook.com</h6>
        <v-btn rounded color="#2ebfaf" outlined>Book Appointment</v-btn>
      </div>
      <v-divider class="mx-10 mt-3"></v-divider>
      <v-list dense class="mt-5">
          <v-list-item-group v-model="selectedItem" color="white">
              <v-list-item v-for="(item, i) in items" :key="i" v-slot="{active}">
                  <v-list-item-icon>
                      <v-icon v-text="item.icon" :color="active? 'black' : 'grey'"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title v-text="item.text" :class="active ? 'black--text' : 'grey--text'"></v-list-item-title>
                  </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-16" v-slot="{ active }">
                  <v-list-item-icon class="ml-6">
                      <v-icon :color="active ? 'black': 'grey'">mdi-exit-to-app</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title :class="active ? 'black' : 'grey'"></v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: "SideBar",
  data() {
    return {
      selectedItem: 0,
      items: [
        { icon: "mdi-finance", text: "Dashboard" },
        { icon: "mdi-calendar-outline", text: "Appointment" },
        { icon: "mdi-account-outline", text: "Doctors" },
        { icon: "mdi-content-paste", text: "Patients" },
        { icon: "mdi-home-outline", text: "Services" },
        { icon: "mdi-map-marker-outline", text: "Location" },
        { icon: "mdi-cogs", text: "Settings" },
      ],
    };
  },
});
</script>

<style>
.image {
  border: 2px solid #2ebfaf;
}
</style>