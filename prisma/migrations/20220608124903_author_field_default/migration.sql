/*
  Warnings:

  - Made the column `author` on table `Quiz` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "author" SET DEFAULT E'admin';
