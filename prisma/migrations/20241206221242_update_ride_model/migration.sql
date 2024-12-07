/*
  Warnings:

  - You are about to drop the column `asientos` on the `ride` table. All the data in the column will be lost.
  - You are about to drop the column `conductorId` on the `ride` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ride` DROP FOREIGN KEY `Ride_conductorId_fkey`;

-- AlterTable
ALTER TABLE `ride` DROP COLUMN `asientos`,
    DROP COLUMN `conductorId`;

-- CreateTable
CREATE TABLE `_viajesCreados` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_viajesCreados_AB_unique`(`A`, `B`),
    INDEX `_viajesCreados_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_viajesCreados` ADD CONSTRAINT `_viajesCreados_A_fkey` FOREIGN KEY (`A`) REFERENCES `Ride`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_viajesCreados` ADD CONSTRAINT `_viajesCreados_B_fkey` FOREIGN KEY (`B`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
