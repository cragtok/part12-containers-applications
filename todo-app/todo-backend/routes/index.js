const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
    visits++;

    res.send({
        ...configs,
        visits,
    });
});

router.get("/statistics", async (req, res) => {
    const addedTodos = await getAsync("addedTodos");

    res.json({ added_todos: addedTodos === null ? 0 : Number(addedTodos) });
});

module.exports = router;
