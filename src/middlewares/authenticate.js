import jwt from 'jsonwebtoken';

const setPublicKey = (nodeEnv) => {
  switch (nodeEnv) {
    case 'test':
      return process.env.JWT_PUBLIC_KEY;
    default:
      return Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64');
  }
};

const authenticate = (req, res, next) => {
  const token = req.headers.authorization
    || req.body.token
    || req.query.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Authentication failed, please login',
    });
  }

  jwt.verify(
    token,
    setPublicKey(process.env.NODE_ENV),
    (error, decodedToken) => {
      if (error) {
        return res.status(401).json({
          success: false,
          error: 'Token is not valid',
        });
      }

      // Build up the request meta information
      req['meta'] = {
        token,
        user: decodedToken
      };

      return next();
    },
  );
};

export default authenticate;
