import axios from './axios'



export const createUser = async (payload) =>{
    const user = await axios.post('/user/register', payload) 
    return user
}

export const login = async (payload) => {
    const ans = await axios.post('/user/login',payload)
    return ans
}

export const review = async (payload) => {
    let userLocal = JSON.parse(localStorage.getItem("user"))
    let userId = userLocal.id
    let token = JSON.parse(localStorage.getItem("token"))
    const movieReview = await axios.post(`/film/newpost/${userId}`, payload,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
    return movieReview
}

export const myReview = async () => {
    let userLocal = JSON.parse(localStorage.getItem("user"))
    let userId = userLocal.id
    const rev = await axios.get(`/user/myreviews/${userId}`)
    return rev
}

export const titleReview = async (payload) => {
    let token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.get(`/film/title?name=${payload}`,
    {
        headers: {
          'user-token': `${token}`,
        },
      }
    )
    console.log(res)
    console.log(payload)
    return res
}

export const moviewReview = async (movieId)=>{
    let token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.get(`/film/${movieId}`,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
    console.log(res.data[0])
    return res.data[0]
}

export const addReview = async (payload) =>{
    let token = JSON.parse(localStorage.getItem("token"))
    let userLocal = JSON.parse(localStorage.getItem("user"))
    let userId = userLocal.id
    const review = await axios.post(`/film/addReview/${userId}`,payload,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
    return review
}

export const reviewDetail = async (idReview) =>{
    let token = JSON.parse(localStorage.getItem("token"))
    const detail = await axios.get(`/film/reviewdetail/${idReview}`,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
    return detail
}

export const editreview = async (reviewId, payload) =>{
    let token = JSON.parse(localStorage.getItem("token"))
    const review = await axios.put(`/film/editreview/${reviewId}`, payload,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
    return review
}

export const deleteReview = async (reviewid) =>{
    let token = JSON.parse(localStorage.getItem("token"))
    await axios.delete(`/film/delete/${reviewid}`,
    {
        headers: {
          'user-token': `${token}`,
        },
      })
}

export const deleteUser = async () =>{
    let userLocal = JSON.parse(localStorage.getItem("user"))
    let userId = userLocal.id
    await axios.delete(`/user/delete/${userId}`)
}