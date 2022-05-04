import { Request, Response} from "express";
import {Usuario, UsuarioI} from '../models/Usuario';

export class UsuarioController{
    public async getAllUsuario(req: Request, res:Response){
        try {
            const user: UsuarioI[] = await Usuario.findAll() // select * from usuarios;
            res.status(200).json({user});
        } catch (error) {
            
        }
    }

    public async getOneUsuario(req: Request, res:Response){
       const{id: idParam} = req.params

       try {
           const user: UsuarioI | null = await Usuario.findOne(
               {
                   where: {id: idParam}
               }
           )

           res.status(200).json(user)

       } catch (error) {
           res.status(500).json({msg: "Error Internal"})
       }
    }

    public async createUsuario(req: Request, res:Response){
       const{
            id,
            nombre,
            correo,
            telefono,
            direccion
        }=req.body;

        try {
            let body: any = { 
                nombre,
                correo,
                telefono,
                direccion
            }

            const user = await Usuario.create(body)
            res.status(200).json({user})

        } catch (error) {
            
        }

    }

    // public async updateUsuario(req: Request, res:Response){
       
    // }
    
    // public async deleteUsuario(req: Request, res:Response){
       
    // }

}