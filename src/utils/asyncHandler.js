const asyncHandler = (reqestHandler) => {
    (req, res, next) => {
        Promise.resolve(reqestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler};






// const asyncHandler = (fn) => (req, res, next) => {
//     try {
        
//         await(req, res, next);

//     } catch (error) {
//         res.status(error.code || 400).json({
//             success : false,
//             message : error.message
//         })
//     }
// }