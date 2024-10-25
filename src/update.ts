import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates = async () => {
  // TITLE: Update a single post
  // const singleUpdate = await prisma.post.update({
  //   where: {
  //     id: 8,
  //   },
  //   data: {
  //     title: 'Title 5',
  //     content: 'Content 5',
  //     authorName: 'Author 5',
  //   },
  // });

  // TITLE: Update a many post
  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: 'Title 3',
  //   },
  //   data: {
  //     published: true,
  //   },
  // });

  // console.log(updateMany);

  // TITLE: Upsert will update if the data is already exist, if not it will create a new one
  const upsertData = await prisma.post.upsert({
    where: {
      id: 13,
    },
    update: {
      authorName: 'Abdullah Al Shaimon',
    },
    create: {
      title: 'Title 1',
      content: 'Content 1',
    },
  });

  console.log(upsertData);
};

updates();
