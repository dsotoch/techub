import { BlogsAll, getBlog } from "@/pages/api/page";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const data = await BlogsAll();
        return NextResponse.json(data, { status: 200 });
        console.log(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

