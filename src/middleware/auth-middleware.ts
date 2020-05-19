// Authentication and Authorization Middleware
export const auth = function(req:any, res:any, next:any) {
    if (req.session && req.session.user === "logan" && req.session.admin){
      return next();
    }else{return res.sendStatus(401);}};