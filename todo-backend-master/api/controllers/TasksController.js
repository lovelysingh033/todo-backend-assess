/**
 * TasksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    
    show: async(req,res)=>{

        let query ;
        query = {"board_id": req.param('boardID')}
        Tasks.find(query).exec((err,tasks)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                tasks:tasks
            });
        });
    },

    showone: async(req,res)=>{
        let query ;
        query = {"id": req.param('taskID')}
        Tasks.findOne(query).exec((err,task)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                task:task
            });
        });
    },

    create: async(req,res)=>{
        let data ;
        data = {task_name:req.body.task_name,board_id:req.body.board_id}
        Tasks.create(data).fetch().exec((err,task)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                task:task
            });
        });
    },

    edit: async(req,res)=>{
        let data;
        let query ;
        query = {"id": req.param('taskID')}
        data = {status:req.body.status}
        Tasks.update(query,data).fetch().exec((err,task)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                task:task
            });
        });
    },

    delete: async(req,res)=>{
      
        let query ;
        query = {"id": req.param('taskID')}
        Tasks.destroy(query).fetch().exec((err,task)=>{
            if(err){
                return res.serverError({
                    success:false,
                    message:"server error"
                });
            }
            return res.ok({
                success:true,
                task:task
            });
        });
    },
  

};

