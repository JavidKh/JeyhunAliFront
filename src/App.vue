<template>
  <Header></Header>
  <Home></Home>
  <About id="about-section"></About>
  <Activities id="activities-section"></Activities>
  <Projects id="projects-section"></Projects>
  <Services id="services-section"></Services>
  <Gallery id="gallery-section"></Gallery>
  <Youtube id="youtube-section"></Youtube>
  <Instagram id="instagram-section"></Instagram>
  <Contacts id="contacts-section"></Contacts>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Activities from "./views/Activities.vue";
import Projects from "./views/Projects.vue";
import Services from "./views/Services.vue";
import Gallery from "./views/Gallery.vue";
import Youtube from "./views/Youtube.vue";
import Instagram from "./views/Instagram.vue";
import Contacts from "./views/Contacts.vue";
import store from "./store";

export default {
  components: {
    Header,
    Home,
    About,
    Activities,
    Projects,
    Services,
    Gallery,
    Youtube,
    Instagram,
    Contacts
  },

  mounted() {
    store.dispatch('getAllData');
  }
}
</script>

<style>
@font-face {
  font-family: "Montserrat-bold";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Bold.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-semiBold";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-SemiBold.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-medium";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Medium.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-regular";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Regular.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-extraBold";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-ExtraBold.otf") format("opentype");
}

@font-face {
  font-family: "Montserrat-light";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Light.otf") format("opentype");
}
</style>