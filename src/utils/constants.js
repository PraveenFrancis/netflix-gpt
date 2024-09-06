export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTc5ZmQ2YTg0NTBlMWY2NTIzMWQ3YTYzMmQ1ZmQ0ZCIsIm5iZiI6MTcyMzA5OTA2Ni4wMTcxNjIsInN1YiI6IjY2YjQ2NjYwMjdjMjU3OWE3ODU0NDEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4GIBjvqtSKwB5O6iD5RW6913bMfIQ12L3gQ5Z1zhWk'
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
  export const LOGO_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg";
  export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"}

  ]

  export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY