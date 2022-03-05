import { Category } from "./category";

export class CategoryRepository{

   
    private categories:Category[];

    constructor(){
        this.categories = [
            {id:1,category:"Romantic"},
            {id:2,category:"Fantastic"},
            {id:3,category:"Adventure"},
            {id:4,category:"Dram"}
        ]
    };

    getAllCategories():Category[]{
        return this.categories;
    }

    getCategoryById(id:number){
        return this.categories.find(c=>c.id == id);
    }

}