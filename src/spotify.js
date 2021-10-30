export const authEndpoint = "https://accounts.spotify.com/authorize";


const clientId = "02437bfd27f5439baf11c58fe3bb78ae";
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://anshula21.github.io/spotify-clone/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromResponse =()=>{
   return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
      var parts= item.split('=');
      initial[parts[0]]= decodeURIComponent(parts[1]);
      return initial;
    },{});
  };


  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20"
  )}&response_type=token&show_dialog=true`;