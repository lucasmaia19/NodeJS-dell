
const mongoose = require("mongoose");

const Spotschema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: { virtuals: true }
  }
);

Spotschema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3000/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', Spotschema);