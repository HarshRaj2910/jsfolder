const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized, JWT token is required", success: false });
    }

    const parts = authHeader.split(' ');
    let token = authHeader;
    if (parts.length === 2 && /^Bearer$/i.test(parts[0])) {
        token = parts[1];
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Unauthorized, JWT token wrong or expired', success: false });
    }
}

module.exports = ensureAuthenticated;