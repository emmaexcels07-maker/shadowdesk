// Import the singleton instance instead of creating a new one
import { prisma } from "./prisma"; 

async function main() {
  const task = await prisma.task.create({
    data: { title: "Finish Prisma 7 setup" },
  });
  console.log("Created Task:", task);

  const subscriber = await prisma.subscriber.create({
    data: { email: "test@example.com" },
  });
  console.log("Created Subscriber:", subscriber);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    // Optional for long-running apps, but good practice for short-lived scripts
    await prisma.$disconnect(); 
  });