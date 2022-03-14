<template>
    <div class="col-md-4 mx-auto" style="padding-top: 100px">
        <form  @submit.prevent="newUser()" class="card card-body">
        <h1 class="text-center h3 mb-3">New user</h1>
        <input type="text" placeholder="username" v-model="username" class="form-control mb-3" autofocus>
        <input type="password" placeholder="password" v-model="password" class="form-control mb-3">
        <input type="password" placeholder="repite password" class="form-control mb-3">
        <input type="email" placeholder="example@mail.com" v-model="email" class="form-control mb-3">
        <button class="btn btn-primary">Create User</button>
        </form>
    </div>
</template>

// <script>
import { defineComponent } from 'vue';
import { createUser } from '@/service/ReviewService'

export default defineComponent ({
    data(){
        return {
            username: "",
            password: "",
            email:""
        }
    },
    methods:{
        async newUser(){
            const user = await createUser(this.$data)
            // console.log(user)
            if (user.data.id) {
                localStorage.setItem("user",JSON.stringify((user.data)))
                this.$router.push({name: 'login-vue'})}
            if(user.data.error)alert(user.data.error)
        }
    }
})
    
    

</script>