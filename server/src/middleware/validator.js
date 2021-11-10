import Joi from "joi";

export const userValidator = ( req, res, next ) => {
    // create schema object
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        edad: Joi.number().min(0).required(),
        alias: Joi.string().required(),
        avatar: Joi.string().required(),
        telefono: Joi.string().length(10).pattern(/^[0-9]+$/).required()
    });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    // validate request body against schema
    const { error, value } = schema.validate( req.body, options );
    
    if (error) {
        // on fail return comma separated errors
        res.status(400).json({
            error: error
        })
        //next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;
        next();
    }
}