let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let studentSchema = require("../models/Student");

// creating user
// router.post("/create-student", (req, res, next) => {
  
//   studentSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

router.post('/create-student', async(req,res) => {
  const student = new studentSchema({
      name: req.body.name,
      email: req.body.email,
      rollno: req.body.rollno
  })

  try{
      const a1 =  await student.save() 
      res.json(a1)
      console.log(a1)
  }catch(err){
      res.send('Error')
      console.log(err)
  }
})

module.exports = router;
