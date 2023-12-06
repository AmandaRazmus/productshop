const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode 
    res.status(statusCode).json({message: err.message}); //this is the error message that will be displayed 
    //next() can use next without the message above to skip the error and move to the next thing
}

export default errorHandler;