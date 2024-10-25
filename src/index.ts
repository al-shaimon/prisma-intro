import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // TITLE: Create a new post

  // const result = await prisma.post.create({
  //   data: {
  //     title: 'This is title 3',
  //     content: 'This is content 3',
  //     authorName: 'Abdullah Al Shaimon',
  //   },
  // });

  // console.log(result);

  // TITLE: Read all posts
  const getAllPosts = await prisma.post.findMany();

  console.log(getAllPosts);
};

main();
