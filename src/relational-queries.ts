import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent API to query relational data in Prisma. it will return only post data
  // const result = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   })

  // include query it will return both user and post data
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  // relational filters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
