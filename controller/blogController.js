
const Views = require('../view/view');

exports.Posting= async (req, res,next) => {
    try {
        const users = req.body;
        const userBlog = await Views.create(users);    
       return res.json({
            status: 'all right',
            users:userBlog
        })
        
    } catch (e) {
        next(e)
    }
}
exports.Getting = async (req, res, next) => {
    try {
        const data = await Views.find({});
        return res.json({
            status: 'success',
            blog: data
        })
        
    } catch (e) {
        next(e)
    }
}
exports.GetId = async (req, res, next) => {
    try {
        const data = await Views.find(req.params.id)
        return res.json({
            status: 'success',
            user:data
        })
    } catch (e) {
        next(e)
    }
}
exports.UpdateId = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await Views.findByIdAndUpdate(id, updateData, {});
        const allUpdate = req.body;
        // console.log(result)
        return res.json({
            status: 'success',
            blog: allUpdate
        })
    } catch (e) {
        next(e)
    }
}
exports.DeleteId = async (req, res, next) => {

    try {
        const id = req.params.id;
    const data = await Views.findByIdAndDelete(id)
    return  res.json({
        status: 'success',
        blog: data
    })
    } catch (e) {
        next(e);
   }
}
