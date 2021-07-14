export const createState = () => {
  return {
    loading: true
  }
}

export type userState = ReturnType<typeof createState>