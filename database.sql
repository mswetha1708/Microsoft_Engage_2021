create database Scheduler;
Create TABLE UserDetails(UId int(10) unsigned NOT NULL AUTO_INCREMENT,Username varchar(255) DEFAULT NULL,Password varchar(255) DEFAULT NULL,primary key(UId),UNIQUE KEY `Username` (`Username`));

