-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "quiz" TEXT NOT NULL,
    "answer" INTEGER NOT NULL,
    "choice1" TEXT NOT NULL,
    "choice2" TEXT NOT NULL,
    "choice3" TEXT NOT NULL,
    "choice4" TEXT NOT NULL,
    "total_c1" INTEGER NOT NULL DEFAULT 0,
    "total_c2" INTEGER NOT NULL DEFAULT 0,
    "total_c3" INTEGER NOT NULL DEFAULT 0,
    "total_c4" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "author" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_quiz_key" ON "Quiz"("quiz");
