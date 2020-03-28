SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


USE `db_covid19` ;





-- -----------------------------------------------------
-- Table `db_covid19`.`province`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_covid19`.`province` (
  `id_province` INT NOT NULL auto_increment,
  `province` VARCHAR(45) NULL DEFAULT NULL,
  `nb_cas_confirme` int NULL DEFAULT NULL,
  `nb_hospitalises` int NULL DEFAULT NULL,
  `nb_lits` int NULL DEFAULT NULL,
  `nb_cas_mort` int NULL DEFAULT NULL,
  `nb_retablis` int NULL DEFAULT NULL,
  `lat` double NULL DEFAULT NULL,
  `lng` double NULL DEFAULT NULL,
  PRIMARY KEY (`id_province`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1 COLLATE latin1_general_cs;

INSERT INTO `province` (`province`, `nb_cas_confirme`, `nb_hospitalises`, `nb_lits`, `nb_cas_mort`, `nb_retablis`, `lat`, `lng`) VALUES
('Tanger-Assilah',0,0,0,0,0,35.7609424,-5.8235548),
('M\'diq-Fnideq',0,0,0,0,0,35.6887418,-5.3403884),
('Tétouan ',0,0,0,0,0,35.5817188,-5.3528317),
('Fahs-Anjra',0,0,0,0,0,35.7462141,-5.8303498),
('Larache',0,0,0,0,0,35.1722215,-6.1689884),
('AlHoceima',0,0,0,0,0,35.2456032,-3.9429783),
('Chefchaouen',0,0,0,0,0,35.1685996,-5.2658349),
('Ouazzane',0,0,0,0,0,34.7970749,-5.5835628),
('Oujda-Angad',0,0,0,0,0,34.6580847,-1.8936052),
('Nador',0,0,0,0,0,35.1658654,-2.9336959),
('Driouch',0,0,0,0,0,34.976514,-3.396047),
('Jerada',0,0,0,0,0,34.3063066,-2.1669456),
('Berkan',0,0,0,0,0,34.9215978,-2.3223715),
('Taourirt',0,0,0,0,0,34.4053388,-2.9096364),
('Guercif',0,0,0,0,0,34.2237388,-3.3456566),
('Figuig',0,0,0,0,0,32.1209609,-1.2296565),
('Fès',0,0,0,0,0,34.0176789,-5.0449051),
('Meknès',0,0,0,0,0,33.8639176,-5.5635763),
('ElHajeb',0,0,0,0,0,33.6927505,-5.3681822),
('Ifrane',0,0,0,0,0,33.5222051,-5.1234019),
('MoulayYacoub',0,0,0,0,0,34.0873043,-5.1807768),
('Sefrou',0,0,0,0,0,33.8311899,-4.8332881),
('Boulemane',0,0,0,0,0,33.3640265,-4.733562),
('Taounate',0,0,0,0,0,34.5461631,-4.6392415),
('Taza',0,0,0,0,0,34.2179029,-3.9943672),
('Rabat',0,0,0,0,0,33.9803303,-6.8918576),
('Salé',0,0,0,0,0,34.0574285,-6.7856624),
('Skhirate-Témara',0,0,0,0,0,33.9136558,-6.9225544),
('Kénitra',0,0,0,0,0,34.2558118,-6.5555354),
('Khémisset',0,0,0,0,0,33.830319,-6.0795207),
('SidiKacem',0,0,0,0,0,34.2283257,-5.7319631),
('SidiSlimane',0,0,0,0,0,34.2607596,-5.9449308),
('BéniMellal',0,0,0,0,0,32.3263502,-6.3969484),
('Azilal',0,0,0,0,0,31.9575419,-6.574709),
('FquihBenSalah',0,0,0,0,0,32.5026334,-6.7080456),
('Khénifra',0,0,0,0,0,32.9442246,-5.6638057),
('Khouribga',0,0,0,0,0,32.8818922,-6.9308496),
('Casablanca',0,0,0,0,0,33.5718656,-7.6202415),
('Mohammadia',0,0,0,0,0,33.6832438,-7.3924445),
('ElJadida',0,0,0,0,0,33.2471463,-8.5336622),
('Nouaceur',0,0,0,0,0,33.3877926,-7.561475),
('Médiouna',0,0,0,0,0,33.4529128,-7.5189107),
('Benslimane',0,0,0,0,0,33.6173322,-7.1360686),
('Berrechid',0,0,0,0,0,33.2605372,-7.6005428),
('Settat',0,0,0,0,0,32.9970042,-7.6323567),
('SidiBennour',0,0,0,0,0,32.6504595,-8.4317423),
('Marrakech',0,0,0,0,0,31.6259361,-8.0615041),
('Chichaoua',0,0,0,0,0,31.5500054,-8.7667774),
('AlHaouz',0,0,0,0,0,31.5263722,-7.8472995),
('KelaadesSraghna',0,0,0,0,0,32.056759,-7.4103184),
('Essaouira',0,0,0,0,0,31.5160014,-9.7663024),
('Rehamna',0,0,0,0,0,32.2434683,-7.9529971),
('Safi',0,0,0,0,0,32.2622942,-9.2560459),
('Youssoufia',0,0,0,0,0,32.2460945,-8.5361611),
('Errachidia',0,0,0,0,0,31.9171537,-4.4288619),
('Ouarzazate',0,0,0,0,0,30.9313678,-6.9197633),
('Midelt',0,0,0,0,0,32.687272,-4.7401867),
('Tinghir',0,0,0,0,0,31.507526,-5.5304621),
('Zagora',0,0,0,0,0,30.3385743,-5.8365282),
('AgadirIda-Ou-Tanane',0,0,0,0,0,30.3908204,-9.5610768),
('Inezgane-AïtMelloul',0,0,0,0,0,30.3486814,-9.5492189),
('Chtouka-AïtBaha',0,0,0,0,0,30.1803369,-9.4870324),
('Taroudannt',0,0,0,0,0,30.4743947,-8.8861749),
('Tiznit',0,0,0,0,0,29.6988871,-9.7428433),
('Tata',0,0,0,0,0,29.7475216,-7.9726828),
('Guelmim',0,0,0,0,0,28.9859962,-10.0555873),
('Assa-Zag',0,0,0,0,0,28.6082279,-9.4365787),
('Tan-Tan',0,0,0,0,0,28.4343809,-11.1087313),
('SidiIfni',0,0,0,0,0,29.3859099,-10.161889),
('Laâyoune',0,0,0,0,0,27.140883,-13.1992157),
('Boujdour',0,0,0,0,0,26.127137,-14.4863312),
('Tarfaya',0,0,0,0,0,27.9396536,-12.9246124),
('Es-Semara',0,0,0,0,0,26.7380814,-11.674628),
('OuedEd-Dahab',0,0,0,0,0,23.6958688,-15.9400717),
('Aousserd',0,0,0,0,0,22.5529809,-14.3349629);

