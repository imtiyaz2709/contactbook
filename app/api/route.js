import { NextResponse } from "next/server";
import dbConnect from "../utility/dbConnect";
import User from "@/app/models/User"


export async function GET(req){
    try{
        await dbConnect();
        const data = await User.find()
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"error":e})
    }
}

export async function POST(req){
    try{
        await dbConnect();
        const record = await req.json();
        const data = await User.create(record)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
}

