const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://jainadi313:Adi1234@cluster0.syvaqzz.mongodb.net/gofoodmern?retryWrites=true&w=majority"

const mongoDB = async () => {
       try{
        await mongoose.connect(mongoURI);
        console.log('Connected!');

        const fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray() 
        global.food_items = data;

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        let catData = await foodCategory.find({}).toArray()
        global.foodCategory = catData
        
       }
       catch (error) {
        console.log('error explained : ', error);
       }
};

module.exports = mongoDB;
