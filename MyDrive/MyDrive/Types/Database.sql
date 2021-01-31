﻿--/*user db*/
--CREATE TABLE User (
--    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    UserID VARCHAR(40) UNIQUE,
--    UserName VARCHAR(40) UNIQUE,
--    RootFolderId VARCHAR(40),
--    CreatedAt DATETIME
--);

--/*file db*/
--CREATE TABLE File (
--    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    FileId VARCHAR(40) UNIQUE,
--    FileName VARCHAR(40),
--    ParentFolderId VARCHAR(40),
--    CreatedAt DATETIME,
--    FileType ENUM('File', 'Folder'),
--    Content VARCHAR(1000)
--);

--/*
--folder db
--one to many mapping on folders to its childern file/folder
--*/
--CREATE TABLE Folder (
--    FolderId VARCHAR(40) NOT NULL PRIMARY KEY,
--    Child VARCHAR(40),
--    FOREIGN KEY (FolderId) REFERENCES File(FileId),
--    FOREIGN KEY (Child) REFERENCES File(FileId)
--);

--/*hash db, one to one mapping of hash to blob link*/
--CREATE TABLE Hash (
--    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    SHA256 VARCHAR(64) UNIQUE,
--    URL VARCHAR(1000)
--);

--/*hashmap db, one to many mapping that files has same hash*/
--CREATE TABLE HashMap (
--    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--    SHA256 VARCHAR(64),
--    FileId VARCHAR(40),
--    FOREIGN KEY (SHA256) REFERENCES Hash(SHA256),
--    FOREIGN KEY (FileId) REFERENCES File(FileId)
--);