/*
  Warnings:

  - You are about to drop the column `members` on the `Chatroom` table. All the data in the column will be lost.
  - Added the required column `rolecheck` to the `Chatroom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chatroom" DROP COLUMN "members",
ADD COLUMN     "rolecheck" TEXT NOT NULL;
