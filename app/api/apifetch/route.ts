import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    const { name } = await request.json();
    const [data] = await db.execute('INSERT INTO grop_by (name) VALUES (?)', [name]);
    return NextResponse.json({ message: "Data inserted successfully", data });
}