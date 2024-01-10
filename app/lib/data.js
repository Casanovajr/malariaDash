import { Milds, User } from "./models"
import { connectToDB } from "./utils";


export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 2;
    try {
        connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
};

export const fetchUser = async (id) => {
   
    try {
        connectToDB();
       const user = await User.findById(id)
       return user;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 2;
    try {
        connectToDB();
        const count = await Milds.find({ title: { $regex: regex } }).count();
        const milds = await Milds.find({ title: { $regex: regex } })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
        return { count, milds };
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

export const fetchProduct = async (id) => {
   
    try {
        connectToDB();
       const milds = await Milds.findById(id)
       return milds;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch product!")
    }
};

export const fetchMilds = async () => {
  try {
    connectToDB();
    const milds = await Milds.find({}, 'title desc lat long');
    return milds;
  } catch (error) {
    console.error('Erro ao buscar milds:', error);
    throw new Error("Failed to fetch milds!");
  }
};
