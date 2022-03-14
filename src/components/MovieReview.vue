<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark"
    style="justify-content: space-around"
  >
    <router-link to="/" class="navbar-brand text-white">Home</router-link>

    >
  </div>

  <div class="bg-light" style="height: 100%; padding-top: 30px">
    <div class="col-md-4 mx-auto bg-dark text-white" style="width: 800px">
      <h1 style="padding-left: 20px">Movie and Reviews</h1>
      <h2
        style="cursor: pointer; padding-right: 20px"
        class="text-end"
        @click="this.$router.push(`/addreview/${info.id}`)"
      >
        Add Review
      </h2>
    </div>
    <div class="card mb-3 mx-auto text-dark bg-light" style="max-width: 800px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="info.image"
            alt="No hay imagen cargada"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">Title: {{ info.title }}</h1>
            <h2 class="card-text">Director: {{ info.director }}</h2>
            <ul class="card-text list-group">
              <h3 class="card-text">Reviews:</h3>
              <li
                class="card-text list-group-item list-group-action"
                v-for="review in reviews"
                :key="review.id"
                style="cursor: pointer"
                maxlength="10"
                @click="this.$router.push(`/reviewdetail/${review.id}`)"
              >
                {{
                  review.review.substring(0, 20) +
                  "..." +
                  "  " +
                  "score: " +
                  review.score +
                  "/5"
                }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { moviewReview } from "@/service/ReviewService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      info: "",
      idmovie: this.$route.params.id,
      reviews: "",
    };
  },
  methods: {
    async movieData() {
      const movReview = await moviewReview(this.$data.idmovie);
      this.info = movReview;
      this.reviews = movReview.reviews;
      console.log(this.info);
      console.log(this.reviews);
    },
  },
  mounted() {
    this.movieData();
  },
});
</script>
