import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get("categoryId")

  try {
    const where = categoryId && categoryId !== "all" ? { categoryId } : {}

    const products = await db.product.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        name: "asc",
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const product = await db.product.create({
      data: json,
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error("Failed to create product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}

