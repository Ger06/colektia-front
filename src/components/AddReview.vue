<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark"
    style="justify-content: space-around"
  >
    <router-link to="/" class="navbar-brand text-white"
    
      >Home</router-link
    >
        <router-link to="/myprofile" class="navbar-brand text-white">My Profile</router-link>

  </div>
  <div class="col-md-3 mx-auto" style="padding-top: 30px">
    <h1 class="bg-dark text-white">New Review</h1>
    <form @submit.prevent="newReview()">
      <div class="mb-3">
        <label class="form-label">Review</label>
        <textarea type="text" v-model="review" class="form-control" />
        <label class="form-label">Score</label>
        <input type="text" v-model="score" class="form-control" />
        <button  class="btn btn-primary">Add review</button>
      </div>
    </form>
  </div>
</template>

<script>
import { addReview } from "@/service/ReviewService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      review: "",
      score: "",
      idmovie: this.$route.params.id,
    };
  },
  methods: {
    async newReview() {
      const review = await addReview(this.$data);
      if (review){
      alert('Review Add')
      this.$router.push(`/movie/review/${this.$data.idmovie}`)
      }
    },
  },
});
</script>
