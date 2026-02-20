"use client"

import { useFormState } from "react-dom"
import { createPost } from "./server-action/action"

export default function Form() {
  const [state, formAction] = useFormState(createPost, null)

  return (
    <form action={formAction}>
      <input name="title" />
      <button type="submit">Saqlash</button>
    </form>
  )
}