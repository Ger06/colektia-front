<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark"
    style="justify-content: space-around"
  >
    <router-link to="/" class="navbar-brand text-white">Home</router-link>
    <div
      class="text-white"
      style="cursor: pointer"
      @click.prevent="closeCount()"
      @click="this.$router.push('/register')"
    >
      Delete Count
    </div>
  </div>
  <div class="col-md-6 mx-auto">
    <h1 class="bg-light">My reviews</h1>
    <h5 v-if="oldReview">Make click to edit your review or delete</h5>
    <h5 v-else>You don´t have reviews</h5>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="review in oldReview"
        :key="review.id"
        style="cursor: pointer"
        @click="this.$router.push(`/editreview/${review.id}`)"
      >
        {{ review.film.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { deleteUser, myReview, review } from "@/service/ReviewService";
import { defineComponent } from "vue";

// let user = JSON.parse(localStorage.getItem("user"))
// let userId = user.id

export default defineComponent({
  data() {
    return {
      title: "",
      director: "",
      review: "",
      score: "",
      image: "",
      // userId
      oldReview: "",
    };
  },
  methods: {
    async newReview() {
      const movieReview = await review(this.$data);
      console.log(movieReview);
      this.bringReview();
    },
    async bringReview() {
      const ownReview = await myReview();
      // console.log(ownReview.data.id)
      this.oldReview = ownReview.data;
    },
    async closeCount() {
      await deleteUser();
    },
  },
  mounted() {
    this.bringReview();
  },
});
</script>
