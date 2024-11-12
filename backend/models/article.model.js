import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  store: { type: String, required: true },
  category: { type: String, required: true },
  classe: { type: String, required: true },
  subclasse: { type: String, required: true },
  code: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  summary: { type: String, required: true },
  info: { type: String, required: true }, // 550gr, 12ml, blanc
  price: { type: Number, required: true },
  availability: { type: Boolean, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  usage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

articleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
