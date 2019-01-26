DROP DATABASE IF EXISTS cTest;
CREATE DATABASE cTest;
USE cTest;

CREATE TABLE `cripys` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `coinBought` VARCHAR( 25) NOT NULL,
  `dateBought` DATE NOT NULL,
  `numCoins` INT(15) NOT NULL,
  `coinPrice` INT(15) NOT NULL,
  `totalCost` INT(20) NOT NULL,
  `profitLoss` INT(20) NOT NULL,

  PRIMARY KEY ( `id` ) 
);

-- coinBought 	varchar(25) 
-- dateBought 	date 				
-- numCoins 	int(15) 			
-- coinPrice 	int(15) 			
-- totalCost 	int(20) 			
-- profitLoss 	int(20)