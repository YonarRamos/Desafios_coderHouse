const admin = true;

export const checkAdmin = (req, res, next)=>{
    if(admin)
        next();
    else
        res.status(401).json({
            msg: 'No estas autorizado'
        })
}