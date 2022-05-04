import { Request, Response } from "express";
import { Venta, VentaI } from "../models/Venta";

export class VentaController {
    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll() // select * from usuarios;
            res.status(200).json({venta});
        } catch (error) {
            
        }
    }
}