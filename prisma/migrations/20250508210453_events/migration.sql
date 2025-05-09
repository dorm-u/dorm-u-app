-- AlterTable
CREATE SEQUENCE chatroom_id_seq;
ALTER TABLE "Chatroom" ALTER COLUMN "id" SET DEFAULT nextval('chatroom_id_seq');
ALTER SEQUENCE chatroom_id_seq OWNED BY "Chatroom"."id";

-- AlterTable
CREATE SEQUENCE post_id_seq;
ALTER TABLE "Post" ALTER COLUMN "id" SET DEFAULT nextval('post_id_seq');
ALTER SEQUENCE post_id_seq OWNED BY "Post"."id";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "host" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
