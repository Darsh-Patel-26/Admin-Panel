const mongoose = require("mongoose");
const register = require("../models/regitration.js");
const express = require("express");
const register_router = express.Router();

register_router.get('/', async (req, res) => {
    try {
        const data = await register.find({}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});
register_router.post('/', async (req, res) => {
    try {
        const data = await register.create(req.body); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});

register_router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const t = await register.findByIdAndDelete(id);
        if (!t) {
            return res.status(404).json({ msg: "No data Found" });
        }
        res.status(200).json(t);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json({ err: e });
    }
});

module.exports = register_router;
