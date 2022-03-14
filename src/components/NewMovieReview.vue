<template>
  <div
    class="navbar navbar-expand-lg navbar-light bg-dark" style="padding-left: 50px"
  >
    <router-link to="/" class="navbar-brand text-white">Home</router-link>
    
  </div>
  <div class="col-md-6 mx-auto border border-primary rounded">
      <h1>New Movie and Review</h1>
    <form @submit.prevent="newReview()" style="padding: 15px">
      <div class="mb-3">
        <label class="form-label">Original Movie Title</label>

        <input
          type="text"
          placeholder="title"
          v-model="title"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Director</label>
        <input
          class="form-control"
          type="text"
          placeholder="director"
          v-model="director"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Review</label>
        <textarea
          class="form-control"
          cols="30"
          rows="10"
          placeholder="write your review"
          v-model="review"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Score</label>
        <input
          class="form-control"
          type="text"
          placeholder="score"
          v-model="score"
        />
      </div>
      <div class="input-group mb-3">
        <button class="input-group-text" @click.prevent="img()">Upload</button>
        <input
          type="file"
          class="form-control"
          id="inputGroupFile01"
          @change="value($event.target.files[0])"
        />
      </div>

      <!-- <button @click.prevent="img()">Upload Image</button> -->
      <button class="btn btn-primary">Create review</button>
    </form>
  </div>
</template>

<script>
import { review } from "@/service/ReviewService";
import { defineComponent } from "@vue/runtime-core";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      title: "",
      director: "",
      review: "",
      score: "",
      image: "",
      files: "",
    };
  },
  methods: {
    value(data) {
      this.$data.files = data;
      console.log(data);
    },
    async newReview() {
      const movieReview = await review(this.$data);
      if(movieReview.data.error == 'The token expired'){
        alert('Login aganin please')
        this.$router.push('/login')
      }
      console.log(movieReview);
      this.$router.push("/");
    },
    async img() {
      // console.log(e)
      // const files = e.target.files
      console.log(this.$data.files);
      const data = new FormData();
      data.append("file", this.$data.files);
      data.append("upload_preset", "ow8sk4ec");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvmrhxfht/image/upload",
        data
      );
      const poster = await res.data.secure_url;
      this.image = poster;
    },
  },
});
</script>
