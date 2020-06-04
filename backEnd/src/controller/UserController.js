/*
 * @Author: your name
 * @Date: 2020-06-01 15:07:41
 * @LastEditTime: 2020-06-04 15:32:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/controller/UserController.js
 */ 
const { User } = require("../model/");

class UserController {
    // user list
    static async searchUser(ctx) {
        const { id } = ctx.request.query;
        const list = await User.getUser(id);
        ctx.body = list;
    }

    // user add
    static async addUser(ctx, next){

    }
    // user edit
    static async updateUser(ctx) {
        const { name, id } = ctx.request.body;
        const result = await User.update({ _id: id }, { name });
        ctx.body = {
            code: 0,
            message: "success"
        };
    }
    // user delete
    static async deleteUser(ctx, next) {
        
    }

    // user detail
    static async getUser(ctx, next) {

    }
}

module.exports = UserController;
