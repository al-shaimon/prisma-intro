import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // Query 1
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    // Query 2
    const countUser = await transactionClient.user.count();

    // Query 3
    const updateUser = await transactionClient.user.update({
      where: {
        id: 8,
      },
      data: {
        age: 22,
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interactiveTransaction();
