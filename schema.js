import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurant_details = new mongoose.Schema({
    Name: String, required: true,
    City: String, required: true,
    Items: [number], itemsArray: true,
});

const items_details = new mongoose.Schema({
    Name: String, required: true,
    Price: number, required: true,
});

const restaurant = mongoose.model('restaurant', restaurant_details);
const items = mongoose.model('items', items_details);

export { restaurant, items };

