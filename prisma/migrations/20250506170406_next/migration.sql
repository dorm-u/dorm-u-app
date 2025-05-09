/*
  Warnings:

  - The `rolecheck` column on the `Chatroom` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Chatroom" DROP COLUMN "rolecheck",
ADD COLUMN     "rolecheck" TEXT[];

-- CreateTable
CREATE TABLE "Resident" (
    "owner" TEXT NOT NULL,
    "Room" INTEGER NOT NULL,
    "Floor" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resident_owner_key" ON "Resident"("owner");
