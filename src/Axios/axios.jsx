import axios from "axios";

const intance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5ODYyY2JjYTY2ZTU4OWE4NzRkN2MxNzUxMWM5NCIsIm5iZiI6MTcyNjM5MTM5NS43NTc3NTcsInN1YiI6IjY2ZTY5ZjI2ZGQyMjRkMWEzOTkxM2QyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHPwWwiJSq3AWe6E4TeqX9Pl4Hdj-6AalnarKLokRlM'
      }
})

export default intance;