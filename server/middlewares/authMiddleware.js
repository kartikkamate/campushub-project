import jwt from "jsonwebtoken";

// Check if user is logged in

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Missing or invalid Authorization header.",
      });
    }

    const token = authHeader.slice(7).trim();

    if (!token || token.split(".").length !== 3) {
      return res.status(401).json({
        message: "Invalid token format.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.name, error.message);

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};
// Check if user is admin
export const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Authentication required.",
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin only.",
    });
  }

  next();
};