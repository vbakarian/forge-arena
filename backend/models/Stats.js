const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  id: String,
  userId: String,
  kills: Number,
  deaths: Number,
  headShots: Number,
  gunShots: Number,
  won: Number,
  lost: Number
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
