/*
Navicat SQL Server Data Transfer

Source Server         : 1
Source Server Version : 90000
Source Host           : DELL-PC\SQLExpress:1433
Source Database       : Atlas
Source Schema         : dbo

Target Server Type    : SQL Server
Target Server Version : 90000
File Encoding         : 65001

Date: 2015-04-02 17:39:22
*/


-- ----------------------------
-- Table structure for Authority
-- ----------------------------
DROP TABLE [dbo].[Authority]
GO
CREATE TABLE [dbo].[Authority] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Jurisdiction] int NOT NULL ,
[LayerName] varchar(255) NOT NULL ,
[Title] varchar(255) NULL ,
[UserID] int NOT NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[Authority]', RESEED, 4)
GO

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE [dbo].[files]
GO
CREATE TABLE [dbo].[files] (
[ID] int NOT NULL ,
[FileName] nvarchar(128) NOT NULL ,
[CreateTime] datetime NULL ,
[LayerName] varchar(128) NOT NULL 
)


GO

-- ----------------------------
-- Table structure for Map
-- ----------------------------
DROP TABLE [dbo].[Map]
GO
CREATE TABLE [dbo].[Map] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] varchar(255) NOT NULL ,
[Group] varchar(255) NOT NULL ,
[Count] int NOT NULL DEFAULT ((0)) ,
[Image] nchar(255) NULL ,
[JavaScript] varchar(255) NOT NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[Map]', RESEED, 16)
GO

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE [dbo].[User]
GO
CREATE TABLE [dbo].[User] (
[ID] int NOT NULL IDENTITY(1,1) ,
[Name] varchar(128) NOT NULL ,
[Password] varchar(128) NOT NULL ,
[Group] int NULL ,
[Maps] varchar(255) NOT NULL ,
[LastLoginTime] datetime NULL ,
[LastLoginIp] varchar(20) NULL ,
[IsDelete] bit NOT NULL 
)


GO
DBCC CHECKIDENT(N'[dbo].[User]', RESEED, 8)
GO

-- ----------------------------
-- Indexes structure for table Authority
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Authority
-- ----------------------------
ALTER TABLE [dbo].[Authority] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table files
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table files
-- ----------------------------
ALTER TABLE [dbo].[files] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table Map
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table Map
-- ----------------------------
ALTER TABLE [dbo].[Map] ADD PRIMARY KEY ([ID])
GO

-- ----------------------------
-- Indexes structure for table User
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE [dbo].[User] ADD PRIMARY KEY ([ID])
GO
