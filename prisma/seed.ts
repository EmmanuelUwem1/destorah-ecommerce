import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = [
    { name: "Oils & Spices", slug: "oils-spices" },
    { name: "Our Collections", slug: "our-collections" },
    { name: "Seasonal Products", slug: "seasonal-products" },
    { name: "Vegetables", slug: "vegetables" },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }

  // Get category IDs
  const oilsSpices = await prisma.category.findUnique({
    where: { slug: "oils-spices" },
  })

  const collections = await prisma.category.findUnique({
    where: { slug: "our-collections" },
  })

  // Create products
  const products = [
    {
      name: "Palm Oil",
      description: "Pure red palm oil",
      price: 4500,
      imageUrl: "/placeholder.svg?height=200&width=200",
      stock: 30,
      categoryId: oilsSpices?.id,
    },
    {
      name: "Cassava Flour",
      description: "Premium quality cassava flour",
      price: 5000,
      imageUrl: "/placeholder.svg?height=200&width=200",
      stock: 25,
      categoryId: collections?.id,
    },
    {
      name: "Cassava Garri",
      description: "Fine white garri",
      price: 3000,
      imageUrl: "/placeholder.svg?height=200&width=200",
      stock: 40,
      categoryId: collections?.id,
    },
  ]

  for (const product of products) {
    if (product.categoryId) {
      await prisma.product.create({
        data: product,
      })
    }
  }

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

