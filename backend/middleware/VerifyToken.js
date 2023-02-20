import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({msg: 'Your login has expired.Login again'});
        req.userName = decoded.userName;
        next();
    })
}

export const authToken = (req, res, next) => {
    const authHeader = req.headers['authentication'];
    const authtoken = authHeader && authHeader.split(' ')[1];
    if (authtoken == null) return res.sendStatus(401);
    jwt.verify(authtoken, process.env.AUTH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({msg: 'Your login has expired.Login again'});
        req.userName = decoded.userName;
        next();
    })
}