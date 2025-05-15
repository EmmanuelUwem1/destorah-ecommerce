import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.error("Failed to fetch categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const category = await db.category.create({
      data: json,
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error("Failed to create category:", error)
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
  }
}

