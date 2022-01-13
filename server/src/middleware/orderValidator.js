import Joi from "joi";

export const orderValidator = ( req, res, next ) => {
    // create schema object
    const schema = Joi.object({
        usuario_id: Joi.string().length(24).required(),
        direccionEntrega: Joi.object({
            calle: Joi.string().required(),
            altura: Joi.number().min(0).required(),
            codigoPostal: Joi.number().min(1000).required(),
            piso: Joi.number().min(0).required(),
            departamento: Joi.string(),
        }),
        estado: Joi.string()
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