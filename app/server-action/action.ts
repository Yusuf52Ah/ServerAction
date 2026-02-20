"use server"

export async function addUser(formData: FormData) {
  const name = formData.get("name") as string

  console.log("Yangi user:", name)

  return { success: true }
}
