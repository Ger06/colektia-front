<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark"
    style="justify-content: space-around"
  >
    <router-link to="/" class="navbar-brand text-white">Home</router-link>
    <div
      @click.prevent="handleDelete()"
      style="cursor: pointer ; padding-left:1000px"
      class="text-white"
    >
      Delete Review
    </div>

    >
  </div>
  <div class="col-md-6 mx-auto">
    <h1>Edit or delete your review</h1>
    <form class="form" @submit.prevent="handleEdit()">
      <div class="mb-3">
        <label class="form-label">Edit Review</label>
        <textarea class="form-control" v-model="review"> </textarea>
        <label class="form-label">Score</label>
        <input class="form-control" type="text" v-model="score" />
        <button class="btn btn-primary">Save Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  deleteReview,
  editreview,
  reviewDetail,
} from "@/service/ReviewService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      review: "",
      reviewId: this.$route.params.reviewId,
      score: "",
    };
  },
  methods: {
    async load() {
      const loadReview = await reviewDetail(this.$data.reviewId);
      this.review = loadReview.data.review;
      this.score = loadReview.data.score;
      console.log(this.$data.review);
    },
    async handleEdit() {
      const edit = await editreview(this.$data.reviewId, {
        review: this.$data.review,
        score: this.$data.score,
      });
      console.log(edit);
      this.$router.push("/myprofile");
    },
    async handleDelete() {
      await deleteReview(this.reviewId);
      this.$router.push("/myprofile");
    },
  },
  mounted() {
    this.load();
  },
});
</script>
