import instance from 'axios';

export const apiKey = '606de4ad07f2ccb26a2a94675a8a1536';
export const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDZkZTRhZDA3ZjJjY2IyNmEyYTk0Njc1YThhMTUzNiIsInN1YiI6IjY1NDExYWY2ZWVjNWI1MDExZWVhMWQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Fpt1WPBtxEQ1pQ_WPEYq2eUdinc8Zv2YrQHEhEEsjQ'
export const url = 'https://api.themoviedb.org/3/movie';
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDZkZTRhZDA3ZjJjY2IyNmEyYTk0Njc1YThhMTUzNiIsInN1YiI6IjY1NDExYWY2ZWVjNWI1MDExZWVhMWQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Fpt1WPBtxEQ1pQ_WPEYq2eUdinc8Zv2YrQHEhEEsjQ'
    }
  };
export const axios = instance.create({
    baseURL: 'https://api.themoviedb.org/3', 
    headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
  }) 