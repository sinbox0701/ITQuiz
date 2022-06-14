/*
  Warnings:

  - Made the column `description` on table `Quiz` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT E'이 문제는 해설이 없습니다.';
