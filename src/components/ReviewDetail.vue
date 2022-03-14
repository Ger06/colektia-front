<template>
  <div class="bg-light" style="height: 100%">
      <div
    class="navbar navbar-expand-lg navbar-light bg-black"
    style="justify-content: space-around"
  >
    <router-link :to="`/movie/review/${id}`" class="navbar-brand text-white">Back</router-link>
    <router-link to="/" class="navbar-brand text-white"
      >Home</router-link
    >
  </div>
    <div class="col-md-6 mx-auto">
      <h1>Review Detail</h1>
      <div
        class="card mb-3 mx-auto text-dark bg-light"
        style="max-width: 800px"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="image"
              alt="No tiene imagen cargada"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">Title: {{ title }}</h1>
              <h2>Director: {{ director }}</h2>
              <h3>Review</h3>
              <h3>{{ review }} </h3> 
              <h3>{{ score }}/5</h3>
              <h3>Review by: {{ autor }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reviewDetail } from "@/service/ReviewService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      idReview: this.$route.params.id,
      title: "",
      director: "",
      review: "",
      score: "",
      autor: "",
      image: "",
      id:""
    };
  },
  methods: {
    async getDetail() {
      const review = await reviewDetail(this.$data.idReview);
      this.title = review.data.film.title;
      this.director = review.data.film.director;
      this.review = review.data.review;
      this.score = review.data.score;
      this.autor = review.data.user.username;
      this.image = review.data.film.image;
      this.id = review.data.film.id
    },
  },
  mounted() {
    this.getDetail();
  },
});
</script>
