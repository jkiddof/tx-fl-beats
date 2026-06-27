const express = import("express");
const mongoose = import("mongoose");
const app = express();

mongoose
  .connect("mongodb+srv://Calvin:Calvin2020@junix.6brwbjs.mongodb.net/")
  .then(() =>
    console.log("${client.Information} Connection to database established."),
  );

const Profiles = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
});
const Profile = mongoose.model("Item", Profiles);

app.get("/api/Profiles", async (res) => {
  const items = await Profile.find();
  res.json(items);
});

app.listen(3000, () =>
  console.log("${client.Information} Server running on port 3000"),
);
