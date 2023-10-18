const mongooes =require("mongoose")
function connection()
{
   mongooes.connect('mongodb+srv://pihuasa86:Sahil@2003@cluster0.ehbljmh.mongodb.net/carrental-udemy',{useunifiedtopology:true,usenewurlparser:true})
const connection= mongooes.Connection
connection.on('connected',()=>{
   console.log('monogo db conncction sucessful')
})

}
