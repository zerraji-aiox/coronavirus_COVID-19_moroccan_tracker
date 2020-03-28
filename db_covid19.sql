DROP DATABASE IF EXISTS `db_covid19`;
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema datamartawb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema datamartawb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_covid19` DEFAULT CHARACTER SET latin1 ;
USE `db_covid19` ;

-- -----------------------------------------------------
-- Table `db_covid19`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`user` (
  `id_user` INT NOT NULL auto_increment,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;

-- -----------------------------------------------------
-- Table `db_covid19`.`fact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`fact` (
  `id_fact` INT NOT NULL auto_increment,
  `date` date NULL DEFAULT NULL,
  `region` VARCHAR(45) NULL DEFAULT NULL,
  `nb_cas_confirme` int NULL DEFAULT NULL,
  `nb_cas_estime` int NULL DEFAULT NULL,
  `nb_mort_estime` int NULL DEFAULT NULL,
  `nb_cas_mort` int NULL DEFAULT NULL,
  `increase_rate` double NULL DEFAULT NULL,
  `nb_lits` int NULL DEFAULT NULL,
  `nb_retablis` int NULL DEFAULT NULL,
  `nb_hospitalises` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_fact`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;


-- -----------------------------------------------------
-- Table `db_covid19`.`action_model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`action_model` (
  `id_action_model` INT NOT NULL auto_increment,
  `date` date NULL DEFAULT NULL,
  `region` VARCHAR(45) NULL DEFAULT NULL,
  `action` varchar(200) null DEFAULT NULL,
  `reduction_rate` double NULL DEFAULT NULL,
  `active` boolean NULL DEFAULT NULL,
  PRIMARY KEY (`id_action_model`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;

-- -----------------------------------------------------
-- Table `db_covid19`.`action_ref`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`action_ref` (
  `id_action_ref` INT NOT NULL auto_increment,
  `date` date NULL DEFAULT NULL,
  `country` VARCHAR(45) NULL DEFAULT NULL,
  `action` varchar(200) null DEFAULT NULL,
  `reduction_rate` double null DEFAULT NULL,
  PRIMARY KEY (`id_action_ref`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;

-- -----------------------------------------------------
-- Table `db_covid19`.`action_recommandation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`action_recommandation` (
  `id_action_recommandation` INT NOT NULL auto_increment,
  `level` int NULL DEFAULT NULL,
  `subject` VARCHAR(200) NULL DEFAULT NULL,
  `action` varchar(200) null DEFAULT NULL,
  PRIMARY KEY (`id_action_recommandation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;


-- -----------------------------------------------------
-- Table `db_covid19`.`channel_recommandation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`channel_recommandation` (
  `id_channel_recommandation` INT NOT NULL auto_increment,
  `level` int NULL DEFAULT NULL,
  `region` VARCHAR(200) NULL DEFAULT NULL,
  `chanel` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id_channel_recommandation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;


-- data

INSERT INTO `action_recommandation` (`id_action_recommandation`, `level`, `subject`, `action`) VALUES
(1, 1, 'sante', 'Mettre en place un numéro d\'urgence gratuit'),
(2, 1, 'sante', 'Mettre en place un protocole de prise en charge'),
(3, 1, 'sante', 'Accroissement du nombre de cas hospitalisés'),
(4, 1, 'mobilite', 'Communiquer à la population la recommandation de privilégier les transports individuels et d\'éviter les transports en commun'),
(5, 1, 'Economie et Industrie', 'Mobiliser les industries sanitaires pour la production de masque et de savon hydroalcoolique en imposant des prix bas'),
(6, 1, 'Reglementation', 'Recommander le télétravail pour les entreprises qui le permettent'),
(7, 2, 'sante', 'Ordonner la mobilisation des étudiants de 5 ème année et plus ainsi que les médecin retraités au sein des hôpitaux'),
(8, 2, 'sante', 'Déprogrammation immédiate des interventions chirurgicales non urgentes avec réanimation post-opératoire'),
(9, 2, 'mobilite', 'Limiter eu Arrêter les flux de transports inter-régions'),
(10, 2, 'Economie et Industrie', ' Imposer une limitation d\'achat par client dans les commerces de proximité et grande surface afin d\'éviter toute pénuries de produits de première nécessite'),
(11, 2, 'Reglementation', 'Demander la fermeture de tous les lieux publics \"non essentiels\" dans cette région'),
(12, 3, 'sante', 'Mettre en place des hôpitaux militaires / mobiles '),
(13, 3, 'mobilite', 'Arrêter tous les flux de transports en commun'),
(14, 3, 'Economie et Industrie', 'Imposer la fermeture partielle de la bourse'),
(15, 3, 'Reglementation', 'Imposer la fermeture partielle de la bourse');



INSERT INTO `channel_recommandation` (`id_channel_recommandation`, `level`, `region`, `chanel`) VALUES
(1, 1, 'Tanger/Tétouan/Al Hoceima', 'TV/radio'),
(2, 1, 'Tanger/Tétouan/Al Hoceima', 'Digital'),
(3, 2, 'Tanger/Tétouan/Al Hoceima', 'TV/Radio'),
(4, 2, 'Tanger/Tétouan/Al Hoceima', 'Téléphonie'),
(5, 2, 'Tanger/Tétouan/Al Hoceima', 'Digital'),
(6, 3, 'Tanger/Tétouan/Al Hoceima', 'TV/Radio'),
(7, 3, 'Tanger/Tétouan/Al Hoceima', 'Téléphonie'),
(8, 3, 'Tanger/Tétouan/Al Hoceima', 'Digital'),
(9, 1, 'Oriental', 'TV/Radio '),
(10, 1, 'Oriental', 'Digital'),
(11, 2, 'Oriental', 'TV/Radio '),
(12, 2, 'Oriental', 'Téléphonie'),
(13, 2, 'Oriental', 'Digital'),
(14, 3, 'Oriental', 'TV/Radio '),
(15, 3, 'Oriental', 'Téléphonie'),
(16, 3, 'Oriental', 'Digital'),
(17, 3, 'Oriental', 'Physique'),
(18, 1, 'Fès-Meknès', 'TV/Radio '),
(19, 1, 'Fès-Meknès', 'Digital'),
(20, 2, 'Fès-Meknès', 'TV/Radio '),
(21, 2, 'Fès-Meknès', 'Téléphonie'),
(22, 2, 'Fès-Meknès', 'Digital'),
(23, 3, 'Fès-Meknès', 'TV/Radio '),
(24, 3, 'Fès-Meknès', 'Téléphonie'),
(25, 3, 'Fès-Meknès', 'Digital'),
(26, 1, 'Rabat-Salé-Kénitra', 'TV/Radio '),
(27, 1, 'Rabat-Salé-Kénitra', 'Digital'),
(28, 2, 'Rabat-Salé-Kénitra', 'TV/Radio '),
(29, 2, 'Rabat-Salé-Kénitra', 'Téléphonie'),
(30, 2, 'Rabat-Salé-Kénitra', 'Digital'),
(31, 3, 'Rabat-Salé-Kénitra', 'TV/Radio '),
(32, 3, 'Rabat-Salé-Kénitra', 'Téléphonie'),
(33, 3, 'Rabat-Salé-Kénitra', 'Digital'),
(34, 1, 'Béni Mellal-Khénifra', 'TV/Radio '),
(35, 1, 'Béni Mellal-Khénifra', 'Digital'),
(36, 2, 'Béni Mellal-Khénifra', 'TV/Radio '),
(37, 2, 'Béni Mellal-Khénifra', 'Téléphonie'),
(38, 2, 'Béni Mellal-Khénifra', 'Digital'),
(39, 3, 'Béni Mellal-Khénifra', 'TV/Radio '),
(40, 3, 'Béni Mellal-Khénifra', 'Téléphonie'),
(41, 3, 'Béni Mellal-Khénifra', 'Digital'),
(42, 3, 'Béni Mellal-Khénifra', 'Physique'),
(43, 1, 'Casablanca-Settat', 'TV/Radio '),
(44, 1, 'Casablanca-Settat', 'Digital'),
(45, 2, 'Casablanca-Settat', 'TV/Radio '),
(46, 2, 'Casablanca-Settat', 'Téléphonie'),
(47, 2, 'Casablanca-Settat', 'Digital'),
(48, 3, 'Casablanca-Settat', 'TV/Radio '),
(49, 3, 'Casablanca-Settat', 'Téléphonie'),
(50, 3, 'Casablanca-Settat', 'Digital'),
(51, 1, 'Marrakech-Safi', 'TV/Radio '),
(52, 1, 'Marrakech-Safi', 'Digital'),
(53, 2, 'Marrakech-Safi', 'TV/Radio '),
(54, 2, 'Marrakech-Safi', 'Téléphonie'),
(55, 2, 'Marrakech-Safi', 'Digital'),
(56, 3, 'Marrakech-Safi', 'TV/Radio '),
(57, 3, 'Marrakech-Safi', 'Téléphonie'),
(58, 3, 'Marrakech-Safi', 'Digital'),
(59, 1, 'Drâa-Tafilalet', 'TV/Radio '),
(60, 1, 'Drâa-Tafilalet', 'Digital'),
(61, 2, 'Drâa-Tafilalet', 'TV/Radio '),
(62, 2, 'Drâa-Tafilalet', 'Téléphonie'),
(63, 2, 'Drâa-Tafilalet', 'Digital'),
(64, 3, 'Drâa-Tafilalet', 'TV/Radio '),
(65, 3, 'Drâa-Tafilalet', 'Téléphonie'),
(66, 3, 'Drâa-Tafilalet', 'Digital'),
(67, 3, 'Drâa-Tafilalet', 'Physique'),
(68, 1, 'Souss-Massa', 'TV/Radio '),
(69, 1, 'Souss-Massa', 'Digital'),
(70, 2, 'Souss-Massa', 'TV/Radio '),
(71, 2, 'Souss-Massa', 'Téléphonie'),
(72, 2, 'Souss-Massa', 'Digital'),
(73, 3, 'Souss-Massa', 'TV/Radio '),
(74, 3, 'Souss-Massa', 'Téléphonie'),
(75, 3, 'Souss-Massa', 'Digital'),
(76, 1, 'Guelmim-Oued Noun', 'TV/Radio '),
(77, 1, 'Guelmim-Oued Noun', 'Digital'),
(78, 2, 'Guelmim-Oued Noun', 'TV/Radio '),
(79, 2, 'Guelmim-Oued Noun', 'Téléphonie'),
(80, 2, 'Guelmim-Oued Noun', 'Digital'),
(81, 3, 'Guelmim-Oued Noun', 'TV/Radio '),
(82, 3, 'Guelmim-Oued Noun', 'Téléphonie'),
(83, 3, 'Guelmim-Oued Noun', 'Digital'),
(84, 3, 'Guelmim-Oued Noun', 'Physique'),
(85, 1, 'Laâyoune-Sakia El Hamra', 'TV/Radio '),
(86, 1, 'Laâyoune-Sakia El Hamra', 'Digital'),
(87, 2, 'Laâyoune-Sakia El Hamra', 'TV/Radio '),
(88, 2, 'Laâyoune-Sakia El Hamra', 'Téléphonie'),
(89, 2, 'Laâyoune-Sakia El Hamra', 'Digital'),
(90, 3, 'Laâyoune-Sakia El Hamra', 'TV/Radio '),
(91, 3, 'Laâyoune-Sakia El Hamra', 'Téléphonie'),
(92, 3, 'Laâyoune-Sakia El Hamra', 'Digital'),
(93, 3, 'Laâyoune-Sakia El Hamra', 'Physique'),
(94, 1, 'Dakhla-Oued Ed Dahab', 'TV/Radio '),
(95, 1, 'Dakhla-Oued Ed Dahab', 'Digital'),
(96, 2, 'Dakhla-Oued Ed Dahab', 'TV/Radio '),
(97, 2, 'Dakhla-Oued Ed Dahab', 'Téléphonie'),
(98, 2, 'Dakhla-Oued Ed Dahab', 'Digital'),
(99, 3, 'Dakhla-Oued Ed Dahab', 'TV/Radio '),
(100, 3, 'Dakhla-Oued Ed Dahab', 'Téléphonie'),
(101, 3, 'Dakhla-Oued Ed Dahab', 'Digital'),
(102, 3, 'Dakhla-Oued Ed Dahab', 'Physique');

insert into action_ref(date,country,action,reduction_rate) values 

-- ('2019-12-31','Taiwan*','contrôle des frontières',0),
-- ('2020-01-25','Taiwan*','Fermeture des vols',-3.80),
-- ('2020-02-05','Taiwan*','Interdiction des navires de croisière',-1.94),
('2020-02-07','Taiwan*','Amende pour les personnes enfreignant la règle de la quarantaine',-0.0756),
-- ('2020-02-23','Taiwan*','Les professionnels de la sante interdits de voyage à l\'étranger',0.0),
-- ('2020-01-22','Taiwan*','production de masques',0),
-- ('2020-02-13','Germany','Fermeture des écoles',0.0),
-- ('2020-02-23','Germany','Arrêt de travail des employés',0.0),
-- ('2020-02-23','Germany','Télétravail imposé pour les employés',0.0),
-- ('2020-02-23','Germany','quarantaines pour certaines parties du pays',0.0),
 ('2020-02-29','France','Les rassemblements Annulés',-0.6124),
-- ('2020-02-13','France','Fermeture des écoles',0.0),
-- ('2020-02-14','France','Les restaurants, bars et cinémas, commerces non essentiels',0.0),
 ('2020-03-11','Belgium','annulation des événements',-0.19194)
-- ('2020-02-13','Belgium','Fermeture des écoles',0.0),
-- ('2020-02-13','Belgium','Les restaurants, bars et cinémas, commerces non essentiels',0.0),
-- ('2020-02-13','Belgium','Guichets communaux préférablement par téléphone',0.0)
;

INSERT INTO `user` (`username`, `password`) VALUES
('thankyouall@aiox-labs.com','Morroc@nTech@g@in$tCoron@'),
('covid19tracker@aiox-labs.com','Morroc@nTech@g@in$tCoron@'),
('mehdi@lafactory.com','Morroc@nTech@g@in$tCoron@'),
('nasser@kettani-digital.com','Morroc@nTech@g@in$tCoron@');

