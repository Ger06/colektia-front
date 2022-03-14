import {  createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/register',
        name: 'register-vue',
        component: ()=> import('@/components/RegisterUser.vue')
    },
    {
        path: '/login',
        name: 'login-vue',
        component: ()=> import ('@/components/LoginUser.vue')
    },
    {
        path: '/myprofile',
        name: 'my-profile',
        component: ()=> import ('@/components/MyProfile.vue')
    },
    {
        path: '/',
        name: 'home-home',
        component: ()=> import ('@/components/HomeHome.vue')

    },
    {
        path: '/movie/review/:id',
        name: 'movie-review',
        component: ()=> import ('@/components/MovieReview.vue')
    },
    {
        path: '/addreview/:id',
        name: 'add-review',
        component: ()=> import ('@/components/AddReview.vue')
    },
    {
        path: '/reviewdetail/:id',
        name: 'review-detail',
        component: ()=> import ('@/components/ReviewDetail.vue')
    },
    {
        path: '/newmovie',
        name: 'new-movieReview',
        component: ()=> import ('@/components/NewMovieReview.vue')
    },
    {
        path: '/editreview/:reviewId',
        name: 'edit-review',
        component: ()=> import ('@/components/EditMyReview.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router