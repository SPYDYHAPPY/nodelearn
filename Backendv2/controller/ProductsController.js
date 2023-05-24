import AllProducts from "../model/Product_model.js";

export const getAllProducts = async (req, res) => {
  try {
    const response = await AllProducts.findAll();
      //   {
      //   attributes: [
      //     ["pr_id", "product_id"],
      //     ["pr_title", "Product_title"],
      //     ["pr_type", "Product_type"],
      //     ["pr_category", "Product_category"],
      //     ["pr_description", "Product_description"],
      //     ["pr_filename", "Product_image"],
      //     ["pr_price", "Product_price"],
      //     ["pr_rating", "Product_rating"],
      //     //         //'createdAt', 'updatedAt'
      //   ],
      // }
    
      res.status(200).json(response);
  } catch (error) {
    //console.log(error.message);
    res.json({ msg: error.message });
  }
};
