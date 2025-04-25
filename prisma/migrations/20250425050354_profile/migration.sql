-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('freshman', 'sophomore', 'junior', 'senior');

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classes" TEXT NOT NULL,
    "aboutme" TEXT NOT NULL,
    "grade" "Grade" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
