import connectToMongoDb from "@/lib/mongodb";
import Products from "@/models/products.model";
import { IProducts } from "@/types/products.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        let products;
        if (id) {
            products = await Products.findById(id);
        } else {
            products = await Products.find();
        }
        return NextResponse.json({
            status: "Success",
            message: "Products list retrieved successfully",
            data: products,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in getting the products list",
            error: error,
        });
    }
}

export async function POST(req: NextRequest) {
    const productsData = await req.json();
    try {
        await connectToMongoDb();
        const newProducts = new Products({ ...productsData });
        newProducts.save();
        return NextResponse.json({
            status: "Success",
            message: "Products created successfully",
            data: newProducts,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in creating a new Products",
            error: error,
        });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        const products = await Products.findByIdAndDelete(id);
        console.log("22222", products);
        return NextResponse.json({
            status: "Success",
            message: "Products Removed successfully",
            data: products,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in deleting products",
            error: error,
        });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await updateProducts({ id }); // Pass the products ID here
        console.log("Products updated successfully");
      } catch (error) {
        console.error("Error updating products: ", error);
      }
}
