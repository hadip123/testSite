<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />
    <div class="fc">
      <v-card width="25vw" class="ccc">
        <div class="hadi-icon">
          <v-icon color="black" size="40" class="hadi-school">fa-mosque</v-icon>
        </div>
        <v-card-title dir="rtl" class="fucking-building">
          امکانات رفاهی
        </v-card-title>

        <v-card-text>
          <div v-for="(fbi, i) in fuckingBuildingItems" :key="i">
            <div class="fbi">
              <p style="flex: 1">{{ fbi.text }}</p>
              <p
                style="
                  flex: 1;
                  text-align: left;
                  font-style: italic;
                  color: grey;
                "
              >
                {{ fbi.value }}
              </p>
            </div>
            <v-divider></v-divider>
          </div>
        </v-card-text>
      </v-card>
      <v-card width="25vw" class="ccc">
        <div class="hadi-icon">
          <v-icon color="black" size="40" class="hadi-school">fa-school</v-icon>
        </div>
        <v-card-title dir="rtl" class="fucking-building">
          ساختمان
        </v-card-title>

        <v-card-text>
          <div v-for="(fbi, i) in fuckingBuildingItems" :key="i">
            <div class="fbi">
              <p style="flex: 1">{{ fbi.text }}</p>
              <p
                style="
                  flex: 1;
                  text-align: left;
                  font-style: italic;
                  color: grey;
                "
              >
                {{ fbi.value }}
              </p>
            </div>
            <v-divider></v-divider>
          </div>
        </v-card-text>
      </v-card>
      <v-card width="25vw" class="ccc">
        <div class="hadi-icon">
          <v-icon color="black" size="40" class="hadi-school">mdi-chair-school</v-icon>
        </div>
        <v-card-title dir="rtl" class="fucking-building">
          تجهیزات
        </v-card-title>

        <v-card-text>
          <div v-for="(fbi, i) in fuckingBuildingItems" :key="i">
            <div class="fbi">
              <p style="flex: 1">{{ fbi.text }}</p>
              <p
                style="
                  flex: 1;
                  text-align: left;
                  font-style: italic;
                  color: grey;
                "
              >
                {{ fbi.value }}
              </p>
            </div>
            <v-divider></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "../components/SideBar.vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      fuckingBuildingItems: [
        { text: "مساحت زمین", value: "گزارش نشده" },
        { text: "مساحت زمین", value: "گزارش نشده" },
        { text: "مساحت زمین", value: "گزارش نشده" },
        { text: "مساحت زمین", value: "گزارش نشده" },
        { text: "مساحت زمین", value: "گزارش نشده" },
        { text: "مساحت زمین", value: "گزارش نشده" },
      ],
    };
  },
  mounted() {},
  components: {
    SideBar,
  },
});
</script>

<style scoped>
.hadi-icon {
  display: flex;
  justify-content: center;
}
.hadi-school {
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 90px;
  box-shadow: 2px 2px 4px #8d8888;
}
.ccc {
  background: #f7f7f7 !important;
  margin: 10px !important;
  border-radius: 10px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ccc:hover {
  background: white !important;
}
.fucking-building {
  text-align: center !important;
  direction: rtl !important;
}
.fbi {
  display: flex;
  flex-direction: row;
}
.fc {
  display: flex;
}
</style>