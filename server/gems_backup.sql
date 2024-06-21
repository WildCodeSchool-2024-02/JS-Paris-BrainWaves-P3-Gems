-- MySQL dump 10.13  Distrib 8.4.0, for macos14 (x86_64)
--
-- Host: localhost    Database: gems
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adress`
--

DROP TABLE IF EXISTS `adress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adress` (
  `Id_adress` int NOT NULL AUTO_INCREMENT,
  `city` varchar(50) NOT NULL,
  `street` varchar(255) NOT NULL,
  `street_code` int NOT NULL,
  `zip_code` int NOT NULL,
  `Id_user` int NOT NULL,
  `Id_transaction` int NOT NULL,
  PRIMARY KEY (`Id_adress`),
  KEY `Id_user` (`Id_user`),
  KEY `Id_transaction` (`Id_transaction`),
  CONSTRAINT `adress_ibfk_1` FOREIGN KEY (`Id_user`) REFERENCES `user` (`Id_user`),
  CONSTRAINT `adress_ibfk_2` FOREIGN KEY (`Id_transaction`) REFERENCES `transaction` (`Id_transaction`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adress`
--

LOCK TABLES `adress` WRITE;
/*!40000 ALTER TABLE `adress` DISABLE KEYS */;
/*!40000 ALTER TABLE `adress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assign`
--

DROP TABLE IF EXISTS `assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assign` (
  `Id_category_list` int NOT NULL,
  `Id_product` int NOT NULL,
  PRIMARY KEY (`Id_category_list`,`Id_product`),
  KEY `Id_product` (`Id_product`),
  CONSTRAINT `assign_ibfk_1` FOREIGN KEY (`Id_category_list`) REFERENCES `category` (`Id_category_list`),
  CONSTRAINT `assign_ibfk_2` FOREIGN KEY (`Id_product`) REFERENCES `product` (`Id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assign`
--

LOCK TABLES `assign` WRITE;
/*!40000 ALTER TABLE `assign` DISABLE KEYS */;
/*!40000 ALTER TABLE `assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `Id_category_list` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `picture` text,
  `details` text NOT NULL,
  `exist` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id_category_list`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `Id_comment` int NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `creation_date` date NOT NULL,
  `Id_transaction` int NOT NULL,
  `Id_user` int NOT NULL,
  PRIMARY KEY (`Id_comment`),
  UNIQUE KEY `Id_transaction` (`Id_transaction`),
  KEY `Id_user` (`Id_user`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`Id_transaction`) REFERENCES `transaction` (`Id_transaction`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`Id_user`) REFERENCES `user` (`Id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `Id_product` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `details` text,
  `price` int NOT NULL,
  `sold` tinyint(1) NOT NULL DEFAULT '0',
  `picture_jewell` text NOT NULL,
  `picture_validation` text NOT NULL,
  `validated` tinyint(1) DEFAULT '0',
  `Id_user` int NOT NULL,
  `Id_category` int NOT NULL,
  PRIMARY KEY (`Id_product`),
  KEY `Id_user` (`Id_user`),
  KEY `Id_category` (`Id_category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`Id_user`) REFERENCES `user` (`Id_user`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`Id_category`) REFERENCES `category` (`Id_category_list`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale` (
  `Id_user` int NOT NULL,
  `Id_transaction` int NOT NULL,
  PRIMARY KEY (`Id_user`,`Id_transaction`),
  KEY `Id_transaction` (`Id_transaction`),
  CONSTRAINT `sale_ibfk_1` FOREIGN KEY (`Id_user`) REFERENCES `user` (`Id_user`),
  CONSTRAINT `sale_ibfk_2` FOREIGN KEY (`Id_transaction`) REFERENCES `transaction` (`Id_transaction`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `Id_transaction` int NOT NULL,
  `transaction_date` date NOT NULL,
  `invoice` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `Id_product` int NOT NULL,
  PRIMARY KEY (`Id_transaction`),
  UNIQUE KEY `Id_product` (`Id_product`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`Id_product`) REFERENCES `product` (`Id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Id_user` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `mail` varchar(120) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  PRIMARY KEY (`Id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Maxime','Maufront','coline@neuf.fr','FindusIsa86@','admin'),(2,'Maxime','Maufront','coline@neuf.fr','FindusIsa86@','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wish_list`
--

DROP TABLE IF EXISTS `wish_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish_list` (
  `Id_product` int NOT NULL,
  `Id_user` int NOT NULL,
  PRIMARY KEY (`Id_product`,`Id_user`),
  KEY `Id_user` (`Id_user`),
  CONSTRAINT `wish_list_ibfk_1` FOREIGN KEY (`Id_product`) REFERENCES `product` (`Id_product`),
  CONSTRAINT `wish_list_ibfk_2` FOREIGN KEY (`Id_user`) REFERENCES `user` (`Id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wish_list`
--

LOCK TABLES `wish_list` WRITE;
/*!40000 ALTER TABLE `wish_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `wish_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-20  1:49:37
