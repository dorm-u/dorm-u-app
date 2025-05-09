-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "chatID" INTEGER NOT NULL,
    "chatRoomId" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chatroom" (
    "id" INTEGER NOT NULL,
    "members" TEXT[],
    "owner" TEXT NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "Chatroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
