
export function localVariables(req, res, next) {
    res.app.locals = {
        OTP: null,
        resetSession: false,
    };
    next();
}