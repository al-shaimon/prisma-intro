import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteData = async () => {
  // Title: Delete a single post
  // const singleDelete = await prisma.post.delete({
  //   where: {
  //     id: 8,
  //   },
  // });

  // console.log(singleDelete);

  // Title: Delete a many post
  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: true,
    },
  });

  console.log(deleteMany);
};

deleteData();
