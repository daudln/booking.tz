export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma?.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};
export const getUserByIid = async (id: string) => {
  try {
    const user = await prisma?.user.findUnique({
      where: {
        uid:id,
      },
    });
    return user;
  } catch {
    return null;
  }
};
