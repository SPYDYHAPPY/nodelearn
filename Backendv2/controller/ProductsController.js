import { Sequelize, Op } from "sequelize";
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

export const getProductById = async (req, res) => {
  try {
    const response = await AllProducts.findOne({
      // attributes: [
      //     ['pr_id', 'product_id'],
      //     ['pr_title', 'Product_title'],
      //     ['pr_type', 'Product_type'],
      //     ['pr_category', 'Product_category'],
      //     ['pr_description', 'Product_description'],
      //     ['pr_filename', 'Product_image'],
      //     ['pr_price', 'Product_price'],
      //     ['pr_rating', 'Product_rating'],
      //     'createdAt', 'updatedAt'
      // ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};

export const getSpecialsale = async (req, res) => {
  try {
    const time = new Date();

    const Saledate = time.getDate();

    const response = await AllProducts.findOne({
      // attributes: [
      //     ['pr_id', 'product_id'],
      //     ['pr_title', 'Product_title'],
      //     ['pr_type', 'Product_type'],
      //     ['pr_category', 'Product_category'],
      //     ['pr_description', 'Product_description'],
      //     ['pr_filename', 'Product_image'],
      //     ['pr_price', 'Product_price'],
      //     ['pr_rating', 'Product_rating'],
      //     'createdAt', 'updatedAt'
      // ],
      where: {
        id: Saledate,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};

export const getPopularitems = async (req, res) => {
  try {
    const response = await AllProducts.findAll({
      // attributes: [
      //     ['pr_id', 'product_id'],
      //     ['pr_title', 'Product_title'],
      //     ['pr_type', 'Product_type'],
      //     ['pr_category', 'Product_category'],
      //     ['pr_description', 'Product_description'],
      //     ['pr_filename', 'Product_image'],
      //     ['pr_price', 'Product_price'],
      //     ['pr_rating', 'Product_rating'],
      //     'createdAt', 'updatedAt'
      // ],
      where: {
        category: req.params.productType,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};

export const getNewArrival = async (req, res) => {
  try {
    const response = await AllProducts.findAll({
      // attributes: [
      //     ['pr_id', 'product_id'],
      //     ['pr_title', 'Product_title'],
      //     ['pr_type', 'Product_type'],
      //     ['pr_category', 'Product_category'],
      //     ['pr_description', 'Product_description'],
      //     ['pr_filename', 'Product_image'],
      //     ['pr_price', 'Product_price'],
      //     ['pr_rating', 'Product_rating'],
      //     'createdAt', 'updatedAt'
      // ],
      where: {
        category: req.params.productType,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};

export const ProductBytitle = async (req, res) => {
  try {
    const response = await AllProducts.findAll({
      where: {
        title: req.params.productName
      }
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};

export const ProductByCategory = async (req, res) => {

  try {
    const response = await AllProducts.findAll({
      where: {
        category: req.params.productCategory
      }
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
  

};

export const ProductBytype = async (req, res) => {
  try {
    const response = await AllProducts.findAll({
      where: {
        type: req.params.productType
      }
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.json({ msg: error.message });
  }
};
