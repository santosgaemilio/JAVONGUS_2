-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema ht&ml
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ht&ml
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ht&ml` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;
USE `ht&ml` ;

-- -----------------------------------------------------
-- Table `ht&ml`.`marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`marcas` (
  `id_marca` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_marca`),
  UNIQUE INDEX `id_marca_UNIQUE` (`id_marca` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`metodo_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`metodo_pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `paypal` TINYINT NOT NULL DEFAULT '0',
  `tarjeta` TINYINT NOT NULL DEFAULT '0',
  `giftcard` TINYINT NOT NULL DEFAULT '0',
  `mercadopago` TINYINT NOT NULL DEFAULT '0',
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pago`),
  INDEX `fk_metodo_pago_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_metodo_pago_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ht&ml`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`pedidos_carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`pedidos_carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_carrito`),
  UNIQUE INDEX `id_carrito_UNIQUE` (`id_carrito` ASC) VISIBLE,
  INDEX `usuarios_id_usuario_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `usuarios_id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ht&ml`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`pedidos_completos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`pedidos_completos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `id_pago` INT NOT NULL,
  `id_carrito` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE INDEX `id_pedido_UNIQUE` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_pedidos_completos_metodo_pago1_idx` (`id_pago` ASC) VISIBLE,
  INDEX `fk_pedidos_completos_pedidos_carrito1_idx` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_completos_metodo_pago1`
    FOREIGN KEY (`id_pago`)
    REFERENCES `ht&ml`.`metodo_pago` (`id_pago`),
  CONSTRAINT `fk_pedidos_completos_pedidos_carrito1`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `ht&ml`.`pedidos_carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`sku`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`sku` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `disponibilidad` INT NOT NULL,
  `marca` INT NOT NULL,
  `target` TINYINT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_producto`),
  UNIQUE INDEX `id_producto_UNIQUE` (`id_producto` ASC) VISIBLE,
  INDEX `marcas_id_marcas_idx` (`marca` ASC) VISIBLE,
  CONSTRAINT `marcas_id_marcas_idx`
    FOREIGN KEY (`marca`)
    REFERENCES `ht&ml`.`marcas` (`id_marca`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`direcciones` (
  `id_direccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(100) NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cp` INT NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  PRIMARY KEY (`id_direccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ht&ml`.`direcciones_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`direcciones_usuario` (
  `id_usuario` INT NOT NULL,
  `id_direccion` INT NOT NULL,
  PRIMARY KEY (`id_usuario`, `id_direccion`),
  INDEX `fk_usuarios_has_direcciones_direcciones1_idx` (`id_direccion` ASC) VISIBLE,
  INDEX `fk_usuarios_has_direcciones_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_has_direcciones_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ht&ml`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_has_direcciones_direcciones1`
    FOREIGN KEY (`id_direccion`)
    REFERENCES `ht&ml`.`direcciones` (`id_direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`carrito_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`carrito_productos` (
  `id_carrito` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id_carrito`, `id_producto`),
  INDEX `fk_pedidos_carrito_has_sku_sku1_idx` (`id_producto` ASC) VISIBLE,
  INDEX `fk_pedidos_carrito_has_sku_pedidos_carrito1_idx` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_carrito_has_sku_pedidos_carrito1`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `ht&ml`.`pedidos_carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_carrito_has_sku_sku1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `ht&ml`.`sku` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ht&ml`.`estilos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ht&ml`.`estilos` (
  `id_estilo` INT NOT NULL,
  `sku_id_producto` INT NOT NULL,
  `imagen_front` VARCHAR(45) NOT NULL,
  `imagen_back` VARCHAR(45) NOT NULL,
  `imagen_left` VARCHAR(45) NULL,
  `imagen_right` VARCHAR(45) NULL,
  `hexa` VARCHAR(45) NULL,
  INDEX `fk_estilos_sku1_idx` (`sku_id_producto` ASC) VISIBLE,
  PRIMARY KEY (`id_estilo`),
  CONSTRAINT `fk_estilos_sku1`
    FOREIGN KEY (`sku_id_producto`)
    REFERENCES `ht&ml`.`sku` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
