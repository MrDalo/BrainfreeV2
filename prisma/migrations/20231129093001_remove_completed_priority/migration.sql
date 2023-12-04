/*
  Warnings:

  - The values [COMPLETED] on the enum `TaskPriority` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TaskPriority_new" AS ENUM ('URGENT_IMPORTANT', 'URGENT_NOT_IMPORTANT', 'NOT_URGENT_IMPORTANT', 'NOT_URGENT_NOT_IMPORTANT', 'NOT_ASSIGNED');
ALTER TABLE "Task" ALTER COLUMN "priority" TYPE "TaskPriority_new" USING ("priority"::text::"TaskPriority_new");
ALTER TYPE "TaskPriority" RENAME TO "TaskPriority_old";
ALTER TYPE "TaskPriority_new" RENAME TO "TaskPriority";
DROP TYPE "TaskPriority_old";
COMMIT;
