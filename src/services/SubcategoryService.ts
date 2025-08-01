import { api } from "@/axios";
import { useAuth } from "@/context/auth";
import { SubcategoryRequestDTO } from "@/types/DTOs/Subcategory/SubcategoryRequestDTO";
import { SubcategoryResponseDTO } from "@/types/DTOs/Subcategory/SubcategoryResponseDTO";
import { storage } from "@/utils/storage";
import { API_URL } from "@env";
import axios from "axios";

const token = storage.getString("@token");

export class SubcategoryService {

    static async getAllSubcategories(page: number, size: number): Promise<SubcategoryResponseDTO[]> {
        
        const response = await api.get("/subcategories", {
            params: {
                page,
                size
            },
            headers : {
                "Authorization" : `Bearer ${token}`
            },
        })

        if (response.status !== 200) {
            throw new Error("Erro no servidor")
        }

        return response.data

    }



    static async createSubcategory(subcategoryRequestDTO: SubcategoryRequestDTO) {
    
        const response = await api.post("/subcategories", subcategoryRequestDTO,{
            headers : {
                "Authorization" : `Bearer ${token}`
            },
            
        })

        if (response.status !== 201) {
            if (Array.isArray(response.data) && response.data[0]?.message) {
                throw new Error(response.data.map((e: any) => e.message).join("\n"));
            }
            throw new Error(response.data.message)
        }
        return response.data

    }
}