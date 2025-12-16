import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a task
  const task = await prisma.task.create({
    data: {
      title: 'Finish Prisma 7 setup',
    },
  });
  console.log('Created Task:', task);

  // Create a subscriber
  const subscriber = await prisma.subscriber.create({
    data: {
      email: 'test@example.com',
    },
  });
  console.log('Created Subscriber:', subscriber);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
