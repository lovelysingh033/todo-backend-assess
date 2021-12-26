/**
 * BoardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  
    show: async(req,res)=>{
        Board.find((err,board)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                board:board
            });
        });
    },

    showone: async(req,res)=>{
        let query ;
        query = {"id": req.param('boardID')}
        Board.findOne(query).exec((err,board)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                board:board
            });
        });
    },

    create: async(req,res)=>{
        let data ;
        data = {name:req.body.name}
        Board.create(data).fetch().exec((err,board)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                board:board
            });
        });
    },

    edit: async(req,res)=>{
        let data;
        let query ;
        query = {"id": req.param('boardID')}
        data = {name:req.body.name}
        Board.update(query,data).fetch().exec((err,board)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                board:board
            });
        });
    },

    delete: async(req,res)=>{
      
        let query ;
        query = {"id": req.param('boardID')}
        Board.destroy(query).fetch().exec((err,board)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                board:board
            });
        });
    },
};

