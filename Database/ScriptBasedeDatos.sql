-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema twisystem2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema twisystem2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `twisystem2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `twisystem2` ;

-- -----------------------------------------------------
-- Table `twisystem2`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`persona` (
  `id` CHAR(9) NOT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `apellido` VARCHAR(50) NULL DEFAULT NULL,
  `planta` CHAR(25) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `contrasenia` CHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`administrador` (
  `id_a` CHAR(9) NOT NULL,
  PRIMARY KEY (`id_a`),
  CONSTRAINT `administrador_ibfk_1`
    FOREIGN KEY (`id_a`)
    REFERENCES `twisystem2`.`persona` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`articulo_digital`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`articulo_digital` (
  `id_digital` CHAR(9) NOT NULL,
  `precio` DOUBLE NULL DEFAULT NULL,
  `tipo` CHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id_digital`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`supervisor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`supervisor` (
  `id_s` CHAR(9) NOT NULL,
  `p_jm` INT NULL DEFAULT NULL,
  `p_ji` INT NULL DEFAULT NULL,
  `p_jr` INT NULL DEFAULT NULL,
  `balance` DOUBLE NULL DEFAULT NULL,
  `operarios_c` INT NULL DEFAULT NULL,
  `total_operarios` INT NULL DEFAULT NULL,
  `mejoras_i` INT NULL DEFAULT NULL,
  `medalla` CHAR(10) NULL DEFAULT NULL,
  `minutos_de_paro` DOUBLE NULL DEFAULT NULL,
  `minutos_por_cambio` DOUBLE NULL DEFAULT NULL,
  `envases_desechados` DOUBLE NULL DEFAULT NULL,
  `minutos_de_paro_despues` DOUBLE NULL DEFAULT NULL,
  `minutos_por_cambio_despues` DOUBLE NULL DEFAULT NULL,
  `envases_desechados_despues` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id_s`),
  CONSTRAINT `supervisor_ibfk_1`
    FOREIGN KEY (`id_s`)
    REFERENCES `twisystem2`.`persona` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`compra_articulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`compra_articulo` (
  `id_s` CHAR(9) NOT NULL,
  `id_articulo` CHAR(9) NOT NULL,
  `fecha_compra` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id_s`, `id_articulo`),
  INDEX `id_articulo` (`id_articulo` ASC) VISIBLE,
  CONSTRAINT `compra_articulo_ibfk_1`
    FOREIGN KEY (`id_s`)
    REFERENCES `twisystem2`.`supervisor` (`id_s`),
  CONSTRAINT `compra_articulo_ibfk_2`
    FOREIGN KEY (`id_articulo`)
    REFERENCES `twisystem2`.`articulo_digital` (`id_digital`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`deliverable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`deliverable` (
  `id_entregable` INT NOT NULL AUTO_INCREMENT,
  `enlace` TEXT NULL DEFAULT NULL,
  `id_s` CHAR(9) NULL DEFAULT NULL,
  `id_a` CHAR(9) NULL DEFAULT NULL,
  `fecha_subida` DATETIME NULL DEFAULT NULL,
  `fecha_revision` DATETIME NULL DEFAULT NULL,
  `comentarios` TEXT NULL DEFAULT NULL,
  `tipo` CHAR(2) NULL DEFAULT NULL,
  `no_entregable` INT NULL DEFAULT NULL,
  `calificacion` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id_entregable`))
ENGINE = InnoDB
AUTO_INCREMENT = 48
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`juego`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`juego` (
  `id_juego` CHAR(9) NOT NULL,
  `puntos_obtenibles` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_juego`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`juega_juego`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`juega_juego` (
  `id_s` CHAR(9) NOT NULL,
  `id_juego` CHAR(9) NOT NULL,
  `puntaje` INT NULL DEFAULT NULL,
  `tiempo` TIME NULL DEFAULT NULL,
  `fecha_partida` DATETIME NULL DEFAULT NULL,
  `intento` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_s`, `id_juego`),
  INDEX `id_juego` (`id_juego` ASC) VISIBLE,
  CONSTRAINT `juega_juego_ibfk_1`
    FOREIGN KEY (`id_s`)
    REFERENCES `twisystem2`.`supervisor` (`id_s`),
  CONSTRAINT `juega_juego_ibfk_2`
    FOREIGN KEY (`id_juego`)
    REFERENCES `twisystem2`.`juego` (`id_juego`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `twisystem2`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twisystem2`.`question` (
  `id_pregunta` INT NOT NULL AUTO_INCREMENT,
  `texto` TEXT NULL DEFAULT NULL,
  `o_1` TEXT NULL DEFAULT NULL,
  `o_2` TEXT NULL DEFAULT NULL,
  `o_3` TEXT NULL DEFAULT NULL,
  `respuesta` TEXT NULL DEFAULT NULL,
  `id_juego` INT NULL DEFAULT NULL,
  `quiz` INT NULL DEFAULT NULL,
  `tipo` CHAR(2) NULL DEFAULT NULL,
  PRIMARY KEY (`id_pregunta`))
ENGINE = InnoDB
AUTO_INCREMENT = 35
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
