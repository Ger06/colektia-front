<template>
    <div class="col-md-3  mx-auto " style="padding-top: 100px">
        <h1 class="bg-dark text-white">Login</h1>
        <form @submit.prevent="loginUser()" class="card card-body">
            <input type="email" placeholder="mail@mail.com" class="form-control mb-3" v-model="email">
        <input type="password" placeholder="password" class="form-control mb-3" v-model="password">
        <button class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
import { login } from "@/service/ReviewService";
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async loginUser(){
            const ans = await login(this.$data)
            console.log(ans)
            if (ans.data.error == "Error with the email and/or password"){
                alert('The email or password is incorrect. Or please register')
            }else if(ans.data.user){
                localStorage.setItem("token",JSON.stringify((ans.data.success)))
                localStorage.setItem("user",JSON.stringify((ans.data.user)))
                this.$router.push({name: 'home-home'})
            }
        }
    }
    
})
</script>