import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: 'al_shaimon',
      email: 'alshaimon18@gmail.com',
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 22,
    },
  });

  const [createdUser, updatedUser] = await prisma.$transaction([createUser, updateUser]);

  console.log(createdUser, updatedUser);
};

batchTransaction();
