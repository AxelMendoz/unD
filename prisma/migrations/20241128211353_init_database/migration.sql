-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `universidad` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ride` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `conductorId` INTEGER NOT NULL,
    `origen` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `fechaHora` DATETIME(3) NOT NULL,
    `asientos` INTEGER NOT NULL,
    `precio` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RideHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pasajeroId` INTEGER NOT NULL,
    `rideId` INTEGER NOT NULL,
    `estado` VARCHAR(191) NOT NULL DEFAULT 'pendiente',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RideHistory_pasajeroId_rideId_key`(`pasajeroId`, `rideId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ride` ADD CONSTRAINT `Ride_conductorId_fkey` FOREIGN KEY (`conductorId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RideHistory` ADD CONSTRAINT `RideHistory_pasajeroId_fkey` FOREIGN KEY (`pasajeroId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RideHistory` ADD CONSTRAINT `RideHistory_rideId_fkey` FOREIGN KEY (`rideId`) REFERENCES `Ride`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
