const express = require("express");
const SessionController = require("../controllers/SessionController");

const router = express.Router();

// index = Get store = Post upate = PUT delete = Delete

// index
router.get("/users", SessionController.index);
//store
router.post("/users", SessionController.store);

router.put("/users/:userId", SessionController.update);

router.delete("/users/:userId", SessionController.deleteUser);

module.exports = router;
