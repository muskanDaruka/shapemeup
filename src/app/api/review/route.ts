import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        return NextResponse.json({ message: 'Hello from the GET handler!' });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return NextResponse.error();
    }
}
