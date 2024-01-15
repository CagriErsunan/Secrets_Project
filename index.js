import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app= express();
const port= 3000;
const URL= "https://secrets-api.appbrewery.com";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
    try {
        const cont = await axios.get(URL+"/random");
         res.render("index.ejs", {secret: cont.data.secret, user: cont.data.username});
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("solution.ejs", {
            error: error.message,
        });
    }
    

});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


