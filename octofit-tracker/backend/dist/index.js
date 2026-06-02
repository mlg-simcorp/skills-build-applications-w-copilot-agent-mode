"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 8000;
// Middleware
app.use(express_1.default.json());
// MongoDB Connection
mongoose_1.default.connect('mongodb://localhost:27017/octofit-tracker')
    .then(() => {
    console.log('MongoDB connected successfully');
})
    .catch((err) => {
    console.error('MongoDB connection error:', err);
});
// Routes
app.get('/', (req, res) => {
    res.json({ message: 'OctoFit Tracker API' });
});
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
