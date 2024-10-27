import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const filtering = async () => {
  // filtering data using AND operator
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  // filtering data using OR operator
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  // filtering data using NOT operator
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: {
        title: {
          contains: 'title',
        },
      },
    },
  });

  // startsWith
  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: 'user',
      },
    },
  });

  // contains
  const contains = await prisma.user.findMany({
    where: {
      email: {
        contains: 'user',
      },
    },
  });

  // endsWith
  const endsWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: 'com',
      },
    },
  });

  // equals
  const equals = await prisma.user.findMany({
    where: {
      email: {
        equals: 'user1@example.com',
      },
    },
  });

  const userNameArray = ['user1', 'user2', 'user3'];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};

filtering();
