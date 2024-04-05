const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure express-session
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !true } // Set to true if using https
}));

// Middleware to parse request body
app.use(express.json());

// Simulated user data
const users = [
    { id: 1, username: 'JohnDoe', password: 'password123', avatar: 'path/to/avatar.jpg' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.userId = user.id; // Set user id in session
        res.json({ success: true, message: 'Logged in successfully', user: { username: user.username, avatar: user.avatar } });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Logout endpoint
app.post('/logout', (req, res) => {
    req.session.destroy(); // Destroy session
    res.json({ success: true, message: 'Logged out successfully' });
});

// Check if user is logged in
app.get('/check-auth', (req, res) => {
    if (req.session.userId) {
        const user = users.find(u => u.id === req.session.userId);
        if (user) {
            res.json({ isLoggedIn: true, user: { username: user.username, avatar: user.avatar } });
        } else {
            res.json({ isLoggedIn: false });
        }
    } else {
        res.json({ isLoggedIn: false });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
