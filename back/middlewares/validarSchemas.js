

export const validarReg = (schema) => (req, res, next) => { 
    try {
    
    schema.parse(req.body)  

    } catch (error) {

       return res
                .status(400)
                .json(error.errors.map((error) => error.message ));
    }
    next()
}