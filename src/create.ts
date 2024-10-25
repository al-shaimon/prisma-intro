import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // TITLE: Create a new single post into the database

  // const result = await prisma.post.create({
  //   data: {
  //     title: 'This is title 3',
  //     content: 'This is content 3',
  //     authorName: 'Abdullah Al Shaimon',
  //   },
  // });

  // console.log(result);

  // TITLE: Create multiple posts into the database
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: 'Title 1',
        content: 'Content 1',
        authorName: 'Author 1',
      },
      {
        title: 'Title 2',
        content: 'Content 2',
        authorName: 'Author 2',
      },
      {
        title: 'Title 3',
        content: 'Content 3',
        authorName: 'Author 3',
      },
      {
        title: 'Title 4',
        content: 'Content 4',
        authorName: 'Author 4',
      },
      {
        title: 'Title 5',
        content: 'Content 5',
        authorName: 'Author 5',
      },
      {
        title: 'Title 6',
        content: 'Content 6',
        authorName: 'Author 6',
      },
      {
        title: 'Title 7',
        content: 'Content 7',
        authorName: 'Author 7',
      },
      {
        title: 'Title 8',
        content: 'Content 8',
        authorName: 'Author 8',
      },
      {
        title: 'Title 9',
        content: 'Content 9',
        authorName: 'Author 9',
      },
      {
        title: 'Title 10',
        content: 'Content 10',
        authorName: 'Author 10',
      },
      {
        title: 'Title 11',
        content: 'Content 11',
        authorName: 'Author 11',
      },
      {
        title: 'Title 12',
        content: 'Content 12',
        authorName: 'Author 12',
      },
      {
        title: 'Title 13',
        content: 'Content 13',
        authorName: 'Author 13',
      },
      {
        title: 'Title 14',
        content: 'Content 14',
        authorName: 'Author 14',
      },
      {
        title: 'Title 15',
        content: 'Content 15',
        authorName: 'Author 15',
      },
      {
        title: 'Title 16',
        content: 'Content 16',
        authorName: 'Author 16',
      },
      {
        title: 'Title 17',
        content: 'Content 17',
        authorName: 'Author 17',
      },
      {
        title: 'Title 18',
        content: 'Content 18',
        authorName: 'Author 18',
      },
      {
        title: 'Title 19',
        content: 'Content 19',
        authorName: 'Author 19',
      },
      {
        title: 'Title 20',
        content: 'Content 20',
        authorName: 'Author 20',
      },
    ],
  });

  console.log(createMany);
};

main();
