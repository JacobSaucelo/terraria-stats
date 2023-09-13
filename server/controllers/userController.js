const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();
//               00000000000000000

// const steamId = "76561197962146232";
//? cob
// const steamId = "76561198288255807";
//? jp
// const steamId = "76561198156043668";
//? jer
const steamId = "76561198315704325";
//? eleas
// const steamId = "76561198176285225";

// const appId = "730";
// const appId = "570";
const appId = "105600"; //terraria

const checkUser = asyncHandler(async (req, res) => {
  // const { steamId } = req.body;
  // if (!steamId) {
  //   res.status(400);
  //   return;
  // }

  const users = await fetch(
    `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appId}&key=${process.env.API_KEY}&steamid=${steamId}`
    // `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.API_KEY}&steamid=${steamId}&relationship=friend`
    // `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=${steamId}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("successfully fetched users datass");
      return data;
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "failed to fetch data" });
    });

  res.json({ data: users, message: `success` });
});

module.exports = {
  checkUser,
};
