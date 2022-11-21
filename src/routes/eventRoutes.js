
const router = require("express").Router();

// getEvents
router.get("/", (req, res) => {
    res.json("wew laddy");
    res.status(201).send("OK");
  });

//getLogin 
  router.get("/login", (req, res) => {
    
  });

// postLogin   
  router.post("/login", (req, res) => {
    
  });

  //register skeleton
  router.post("/register", (req, res) => {

  });

  // getEventbyID
  router.get("/event:id", (req, res) => {

  });
  // postEvent
  router.post("/event", (req, res) => {

  });

  module.exports = router;





