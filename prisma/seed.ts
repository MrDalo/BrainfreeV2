import { PrismaClient, TaskPriority } from "@prisma/client";
import { faker } from "@faker-js/faker";


const prisma = new PrismaClient()

async function main() {
    const [george, bob, alice] = await prisma.$transaction([
        prisma.user.create({ data: { name: 'George', email: 'george@email.com' } }),
        prisma.user.create({ data: { name: 'Bob', email: 'bob@email.com' } }),
        prisma.user.create({ data: { name: 'Alice', email: 'alice@email.com' } }),
    ]);

   
    for (let i = 0; i < 50; i++) {
        const userId = faker.helpers.arrayElement([george.id, bob.id, alice.id]);

        await prisma.task.create({
            data: {
                title: faker.lorem.words(2),
                description: faker.lorem.paragraph(),
                completed: faker.datatype.boolean(),
                deadline: faker.date.future(),
                priority: faker.helpers.enumValue(TaskPriority),
                user: { connect: { id: userId } },
            }
        });
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })