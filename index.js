const app = "I don't do much.";

const token = '2cc73f6af4ae1134b3edd61e56ba9c79a1fee057' 

fetch('https://api.github.com/repos/jquery/jquery/commits', {headers: {
    Authorization: `token ${token}`}})
  .then(res => res.json())
  .then(json => console.log(json));


