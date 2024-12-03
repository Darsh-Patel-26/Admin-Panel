const mongoose = require("mongoose");
const hostel = require("../models/hostel.js");
const express = require("express");
const hostel_router = express.Router();

hostel_router.get('/', async (req, res) => {
    try {
        const data = await hostel.find({}); // Await here to get actual data
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No Data" });
        }
        res.status(200).json(data);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json(e);
    }
});

hostel_router.post('/', async (req, res) => {
    try {
        const t = await hostel.create(req.body); // Create a new hostel entry
        res.status(201).json(t); // Use 201 status for created resource
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json({ err: e });
    }
});

hostel_router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const t = await hostel.findByIdAndDelete(id);
        if (!t) {
            return res.status(404).json({ msg: "No data Found" });
        }
        res.status(200).json(t);
    } catch (e) {
        console.error(e); // Log error for debugging
        res.status(400).json({ err: e });
    }
});

module.exports = hostel_router;
