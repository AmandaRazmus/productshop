const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode 
    res.status(statusCode).json({message: err.message}) 
    //next() can use next without the message above to skip the error and move to the next thing
}

export default errorHandler