import connectToMongoDb from "@/lib/mongodb";
import Blog from "@/models/blog.model";
import { IBlog } from "@/types/blog.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectToMongoDb();
    let blogs;
    if (id) {
      blogs = await Blog.findById(id);
    } else {
      blogs = await Blog.find();
    }
    return NextResponse.json({
      status: "Success",
      message: "Blog list retrieved successfully",
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in getting the blog list",
      error: error,
    });
  }
}

export async function POST(req: NextRequest) {
  const blogData = await req.json();
  try {
    await connectToMongoDb();
    const newBlog = new Blog({ ...blogData });
    newBlog.save();
    return NextResponse.json({
      status: "Success",
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in creating a new blog",
      error: error,
    });
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectToMongoDb();
    const blog = await Blog.findByIdAndDelete(id);
    console.log("22222", blog);
    return NextResponse.json({
      status: "Success",
      message: "Blog Removed successfully",
      data: blog,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in deleting blog",
      error: error,
    });
  }
}

export async function PUT(req: NextRequest) {
  const blog: IBlog = await req.json();
  try {
    await connectToMongoDb();
    const updatedBlog = await Blog.findByIdAndUpdate({ _id: blog?._id }, blog, {
      new: true,
      upsert: true // Make this update into an upsert
    });
    console.log("22222", blog);
    return NextResponse.json({
      status: "Success",
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in updating blog",
      error: error,
    });
  }
}


