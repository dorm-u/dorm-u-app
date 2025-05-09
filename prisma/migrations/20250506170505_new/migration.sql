/*
  Warnings:

  - You are about to drop the column `rolecheck` on the `Chatroom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chatroom" DROP COLUMN "rolecheck",
ADD COLUMN     "members" TEXT[];
