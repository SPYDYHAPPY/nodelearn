import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export const Singleproduct = () => {
    const { id } = useParams();

    useEffect(() => {
        getproductDetails();
    }, []);


    const getproductDetails = async () => {
        try {
            const Happy = await axios.get("http://localhost:3000/product/${id}");

            setProduct(Happy.data);

        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }


    return (
        <>
            <h1>{product.title}</h1>
        </>
    );
}
