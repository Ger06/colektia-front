<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark"
    style="justify-content: space-around"
  >
    <router-link to="/myprofile" class="navbar-brand text-white">My Profile</router-link>
    <router-link to="/newmovie" class="navbar-brand text-white"
      >Add a New Movie and Review</router-link
    >
  </div>
  <div class="col-md-6 mx-auto" style="padding-top: 50px">
    Search Movies to see their reviews. If the title is not in the database you can add it by yourself
  </div>
  <div class="col-md-4 mx-auto" style="padding-top: 20px">
    <form @submit.prevent="titleFilter()" style="display: flex">
      <input
        type="text"
        placeholder="original title"
        v-model="title"
        class="form-control mb-3"
      />
      <button class="btn btn-primary" style="height: 40px">search</button>
    </form>
  </div>
  <div class="col-md-4 mx-auto">
    <ul class="list-group">
      <li
        v-for="film in sugest"
        :key="film.id"
        style="cursor: pointer"
        @click="this.$router.push(`/movie/review/${film.id}`)"
        class="list-group-item list-group-action"
      >
        {{ film.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { titleReview } from "@/service/ReviewService";

export default defineComponent({
  data() {
    return {
      title: "",
      sugest: "",
    };
  },
  methods: {
    async titleFilter() {
      const movieTitles = await titleReview(this.$data.title);
      if(movieTitles.data.error == "You need to include the user-token in the header" ||movieTitles.data.error == 'The token expired'){
        alert('You need to login again')
        this.$router.push({name: 'login-vue'})
      }
      this.$data.sugest = movieTitles.data;
      if (movieTitles.data.length == 0)
        alert(`${this.title} in not in the database, Create by yourself`);
    },
  },
  //   mounted(){
  //       this.titleFilter()
  //   }
});
</script>
