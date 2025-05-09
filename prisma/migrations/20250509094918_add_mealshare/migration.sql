-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('GIVE', 'REQUEST');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mealCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "MealShare" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "MealType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MealShare_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MealShare" ADD CONSTRAINT "MealShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
