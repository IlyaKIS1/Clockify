const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "4a0c5ad7c97644a8a43e7bbab5849ff7",
    clientSecret: "322ebb1b6da4406f8f09c9c906598ef8",
  })

app.post("/search", async (req, res) => {
    const songName = req.body.songName

   const data = await spotifyApi.searchTracks(songName,
        {
            limit: 10
        }
    )
    res.send(data)
  })

  app.post('/login', async (req, res) => {

      // Get the authorization code from the query string

      const code = req.body.code;
      console.log("code is", code)

      // Use the authorization code to request an access token
     const data = await spotifyApi.authorizationCodeGrant(code);
    // const data = await spotifyApi.searchTracks("hello");
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
    console.log(spotifyApi)

  });


app.listen(3001, () => {
    console.log("Server is up and running on the port 3001");
})
