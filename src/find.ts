import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // TITLE: Find all posts. This will return all the data from the post table.
  const getAllPosts = await prisma.post.findMany();

  // TITLE: Finding single post by id. This will return only one data which match first.
  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });

  // TITLE: If there is no data found then it will throw an error.
  const findFirstWithError = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // TITLE: We can use this for only unique data. Here id is unique so we can use this.
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });

  // TITLE: If there is no data found then it will throw an error.
  const findUniqueWithError = await prisma.post.findUniqueOrThrow({
    where: {
      id: 13,
    },
  });

  // TITLE: Find unique data with selected fields.
  const findUniqueWithSelectedFields = await prisma.post.findUniqueOrThrow({
    where: {
      id: 13,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log({ findUniqueWithSelectedFields });
};

main();
