"use server"

import { revalidatePath } from "next/cache";
import { prisma } from "./db"

const postEntry = async (formData: FormData) => {
  const data = await prisma.guestBook.create({
    data: {
      message: formData.get('entry') as string,
      username: 'zeeshan'
    }
  });

  revalidatePath('/guestbook')
}

export default postEntry