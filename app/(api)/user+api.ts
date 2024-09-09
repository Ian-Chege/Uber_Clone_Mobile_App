import { neon } from '@neondatabase/serverless'

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`)
    const { name, email, clerkId } = await request.json()
    if (!name || !email || !clerkId) {
      return Response.json({ Error: 'Missing required fields' }, { status: 400 })
    }
    const response = await sql`
            INSERT INTO users (name, email, clerk_id)
            VALUES (${name}, ${email}, ${clerkId})
            `
    return new Response(JSON.stringify(response), { status: 201 })
  } catch (error) {
    console.error('Error creating user', error)
    return Response.json({ Error: 'Internal server error' }, { status: 500 })
  }
}

// See https://neon.tech/docs/serverless/serverless-driver
// for more information
