const table = require("../../database/tables")

const add = async(req,res,next)=>{

    // eslint-disable-next-line camelcase
    const {Id_Product, Id_User} = req.body
    try {
        const adding = await table.wish_list.addToWishlist(Id_Product, Id_User);
        res.status(201).json(adding)
    } catch (error) {
       next(error)
    }
}

const read = async (req,res,next) =>{
    try {
        const parseId = Number(req.params.id);
     const showIt = await table.wish_list.getIt(parseId);
     res.status(200).json(showIt)  
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => { 
    try {
        // eslint-disable-next-line camelcase
        const{Id_Product, Id_User} = req.query
        const deleting = await table.wish_list.deleteFromWishList(Id_Product, Id_User);
        res.status(204).json(deleting)
    } catch (error) {
        next(error)
    }
}



module.exports={
    add,
    read,
    remove,
}