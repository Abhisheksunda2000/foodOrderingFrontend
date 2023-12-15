const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://temp_coder_2000:Qwertyui0p@cluster0.3p1f7mi.mongodb.net/swizoo?retryWrites=true&w=majority";

const connectToDB = async () => {
    await mongoose.connect(mongoURI,{useNewUrlParser:true}, async(err,result)=>{
        if(err) console.log("---",err);
        else{
            console.log("mongoDB connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const food_category = await mongoose.connection.db.collection("food_category");
                food_category.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else{
                    global.food_items = data;
                    global.food_category = catData;
                }
          
                })
                
            })
        }
    });
};

module.exports = connectToDB;
