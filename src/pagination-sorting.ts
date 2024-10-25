import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // Offset based pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // console.log('Offset based paginated data: ', offsetData);

  // Cursor based pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 17,
    },
  });

  // console.log('Cursor based paginated data: ', cursorData);

  // Sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  console.log('Sorted data: ', sortedData);
};

paginationSorting();
