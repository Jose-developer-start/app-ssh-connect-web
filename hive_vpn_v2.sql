-- MariaDB dump 10.19  Distrib 10.5.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: hive_vpn_v2
-- ------------------------------------------------------
-- Server version	10.5.12-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (6,'2014_10_12_000000_create_users_table',1),(7,'2014_10_12_100000_create_password_resets_table',1),(8,'2019_08_19_000000_create_failed_jobs_table',1),(9,'2021_12_14_213818_create_post_table',1),(10,'2021_12_15_172101_create_websocket_accounts_table',1),(11,'2021_12_21_181646_create_rols_table',2),(12,'2021_12_21_182902_add_pais_websocket_accounts_table',2),(13,'2021_12_21_184216_add_rol_id_users_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rols` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'Administrador','Administrador puede tener acceso total al sitio web','2021-12-21 22:21:09','2021-12-21 22:21:09'),(2,'Usuario','Usuario acceso a ciertas partes del sistema','2021-12-21 22:21:09','2021-12-21 22:21:09');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol_id` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Sandra','premium-2021-11-00@hive-vpn.tk',NULL,'$2y$10$1sCzc5JnGjXRA5/xl0X0vOnBU/5lmNeS1A4V08DkTYfHJ8oCBvf2G',0,NULL,'2021-12-18 22:52:42','2021-12-18 22:52:42'),(2,'Javier','javier@hive-vpn.tk',NULL,'$2y$10$MJReFJ9TsHYwBr7G/ImpxOUa7WVKgri4BdnM2.mww4qowrB.Rv5hu',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(3,'miguel','miguel@hive-vpn.tk',NULL,'$2y$10$mbH.F0KH3Hpqw/mUa6U/M.7i74rnHY6Z6pSDSmFiiAp6soEHP.EyS',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(4,'ruben','ruben@hive-vpn.tk',NULL,'$2y$10$yrMg0MIMvkbboVKaDgev2uOc6eBSsJ5reEEgtoiZ1pyUfs0fn1eLy',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(5,'elizabeth','elizabeth@hive-vpn.tk',NULL,'$2y$10$yWUNFo/X8C25LJEUiuPYhOLjh9RqUjckGk7MPZzN544LoOR0bKBuO',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(6,'rikelme','rikelme@hive-vpn.tk',NULL,'$2y$10$QNBc2TBSEv/ufqGKFI9eQ.lhHZ4d.//ED9.dP49qd9FvEwYgbKEqq',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(7,'omar','omar@hive-vpn.tk',NULL,'$2y$10$1oIjd4BZVxAqfm6dq3mVFOaBZzsMEfOAhbJWI0b.WsREFoTZYKgHq',0,NULL,'2021-12-18 22:52:43','2021-12-18 22:52:43'),(8,'Marcos','Nataliasantamaria503@gmail.com',NULL,'$2y$10$eoE8YUSaxqdofQsBEsTyqehlNH8..lalMpnuhSdvWYWoBBG5v6NJS',0,NULL,'2021-12-18 23:58:07','2021-12-18 23:58:07'),(9,'Jose Miguel','josedeodanes99@gmail.com',NULL,'$2y$10$haSiMZ3qZhPJCGWAWE8G2e8orZPu..WqFJngNG/Ji9GI8fQVWvLGa',0,NULL,'2021-12-19 01:31:55','2021-12-19 01:31:55'),(10,'zeus.chavez34@gmail.com','zeus.chavez34@gmail.com',NULL,'$2y$10$Dx6F6VKNSsCAPVEYjFzpx.lv0NaQg9byspYWDw2tMmpWhOrun.Niq',0,NULL,'2021-12-19 12:46:37','2021-12-19 12:46:37'),(11,'Omar Campos','shume22@hotmail.com',NULL,'$2y$10$QMrSn8cfdSNojNpD7qhn3e5wD3ihqa87HyvNBvs83roLtKxdZuQKC',0,NULL,'2021-12-19 13:55:25','2021-12-19 13:55:25'),(12,'Manuel de Jesús Castaneda Hernandez','funguitos@gmail.com',NULL,'$2y$10$aNIWfZzqtQ37LGuY0OmAXe4c6YyJrmtSaZqXWSvYJD72ThoGHQ/ya',0,NULL,'2021-12-19 23:22:53','2021-12-19 23:22:53'),(13,'Ronal','ronalmusun530.30@gmail.com',NULL,'$2y$10$hltv1CtKuitpQOU8F7ka5uYrk4ZHYEJSQYQQrfQ4QPDuOfrqUDhdW',0,NULL,'2021-12-20 10:24:38','2021-12-20 10:24:38'),(14,'Melvin22','melvinernestoperez@gmail.com',NULL,'$2y$10$uNDrDjECpx3XjsgEkpAJA.YwOYF3AQBxCxaPZtfzkiBMgEjdmc2HG',0,NULL,'2021-12-20 22:22:13','2021-12-20 22:22:13'),(15,'José Rivas','rivasurquillaj28@gmail.com',NULL,'$2y$10$1OfZnWdxtDmpHhQLlQ0lyelPc1Ic/wQ5X/qrL6YF81iWmm90YUqNu',0,NULL,'2021-12-21 17:29:49','2021-12-21 17:29:49'),(16,'marcos','marcosportillo242@gmail.com',NULL,'$2y$10$fN9yMjnZ55Vxa.r510GDw.kTOD2kTHTL.cvdUBILWFMIbd/KTTQWW',0,NULL,'2021-12-21 17:35:22','2021-12-21 17:35:22'),(17,'Victor Aguilar','vm4277709@gmail.com',NULL,'$2y$10$iPTlLJdFeC8M/6KV6uZOiO8LKQSfkynH3cr1abgxTYw1fRo45Tj4y',0,NULL,'2021-12-21 17:37:03','2021-12-21 17:37:03'),(18,'Jose','admin@gmail.comq',NULL,'$2y$10$dxs2qs5nt1h1h3tHp8l3X.llCLN5bsILWFFT0WEb8tUFlvonC9AuO',0,NULL,'2021-12-21 17:41:16','2021-12-21 17:41:16'),(19,'Jose Miguel','josedeodanes55@outlook.com1',NULL,'$2y$10$CnPQJOeeev5J.5YL3NqaMO5iNrVrvIEKbAV/AHLI1BmadUelTDffG',0,NULL,'2021-12-21 17:41:46','2021-12-21 17:41:46'),(20,'victor manuel aguilar melara','victoraguilarmelara@live.com',NULL,'$2y$10$ky9ytQ/ad/nn2XjmFRbbV.4gzCbZDC9mSEBjliWxQfyPV6FJkGPfW',0,NULL,'2021-12-21 17:42:48','2021-12-21 17:42:48'),(21,'Marcos','garruxd@gmail.com',NULL,'$2y$10$pMEh.36z987lO98WiM2wCetgH1.HWbOQc5axlJmAqhqSi15McMED.',0,NULL,'2021-12-21 17:44:57','2021-12-21 17:44:57'),(22,'Josue','alvaradolozaj@gmail.com',NULL,'$2y$10$.RfdpwM6A9Q4OyXT9pNjR.PQ8izkDnyIE9ADFnpu.v4vJIrSMhgxi',0,NULL,'2021-12-21 22:17:22','2021-12-21 22:17:22'),(23,'wilmer','garciawilmer800@gmail.com',NULL,'$2y$10$VdsN8p9xTftinVZpVl2IKue/FLlAUVNYJVdbEl9jo.TcOfBW5Kk/2',2,NULL,'2021-12-21 23:46:28','2021-12-21 23:46:28'),(24,'Josue','gersy442hernandez@gmail.com',NULL,'$2y$10$LgKKap.tj2N8VWfKCCo.oeT1GX/MZKQCl3Jz3v5gI5ndCJrpCLNgG',2,NULL,'2021-12-22 00:55:24','2021-12-22 00:55:24'),(25,'Erick','erickguardadidg@gmail.com',NULL,'$2y$10$0YTCHY1mzwZGFGZT8I3Y0.p1Htnz6p7aXoLXIrxUFLphbBHP7VtEW',2,NULL,'2021-12-22 02:23:49','2021-12-22 02:23:49'),(26,'Leonardo','karlasibrian1998@gmail.com',NULL,'$2y$10$vsiXK88DLNrf1QJMRqixxOA6BqDgbEuadgr9gl3bHwDZF07Zi7hK.',2,NULL,'2021-12-22 02:29:31','2021-12-22 02:29:31'),(27,'Luis','luiiighj35@gmail.com',NULL,'$2y$10$n4slGMgwKWCnzUrgeGC9A.Kzh8bA9DIIwJCLH3GxaoxbowGGTLQyK',2,NULL,'2021-12-22 02:53:12','2021-12-22 02:53:12'),(28,'josue','josueherley50355@gmail.com',NULL,'$2y$10$QbNc88NRR7r53ApdQFF4jeh5wXcU2PT3rxoVRQIiD8CAiiVTCBYlu',2,NULL,'2021-12-22 03:27:47','2021-12-22 03:27:47'),(29,'Fender','alejandromenjivar66@gmail.com',NULL,'$2y$10$yt3AR8fWRw8RsV8uVH0T8OO5jfeVgiGny.ygYyW9KlxBzlHGGTMoq',2,NULL,'2021-12-22 03:48:34','2021-12-22 03:48:34'),(30,'José alfredo','josalse21@gmail.com',NULL,'$2y$10$oMpJa3IjUvc0/MS9oPW3Ru4YnQwdbngb3efUmNBrbmg//Jl9PoqXW',2,NULL,'2021-12-22 05:19:01','2021-12-22 05:19:01'),(31,'Bryan Mendoza','bryan.mendoza715@gmail.com',NULL,'$2y$10$t/QUTZgKQQA8.oBcB3sQP.a8pQw/cxgo51LP7FPoKLs9ql45ppk2C',2,NULL,'2021-12-22 09:58:48','2021-12-22 09:58:48'),(32,'Jonathan Torres','Jonatorr1998@gmail.com',NULL,'$2y$10$Ug/hjehK0noScEijntHw9upWANi.NbgPVqm58oCMnEBD/Ad1yZG7O',2,NULL,'2021-12-22 11:58:23','2021-12-22 11:58:23'),(33,'Moys','moises.adal12@gmail.com',NULL,'$2y$10$KNKTzXKp3EBk5OkcqZpXKOTfowqO7uwuBMkWh4vDxKgjV5t9gUZ9G',2,NULL,'2021-12-22 15:04:27','2021-12-22 15:04:27'),(34,'Jorge','georgealbert73@gmail.com',NULL,'$2y$10$TwyEYFbzNbEKuZqpaZGVTOZpdZyxZKGZdptBeJ6agbhRwJUeQKlTq',2,NULL,'2021-12-22 19:50:29','2021-12-22 19:50:29'),(35,'edwin lara','thecrow.gl@gmail.com',NULL,'$2y$10$L2CT/o6OgdMHAuMBDFNd2ulCJm.XLJhcPbTpteHn.OkXODBLTmRZu',2,NULL,'2021-12-22 22:07:40','2021-12-22 22:07:40'),(36,'sir oni chan','sanchesrafael178@gmail.com',NULL,'$2y$10$vRS.3cmB6MQoYUVzvZFKcekyjAyPQIiM32n..uaa573KVfh2x.UO6',2,NULL,'2021-12-23 01:02:42','2021-12-23 01:02:42'),(37,'alberto fabian','alberto.fabian663@gmail.com',NULL,'$2y$10$E6QuDn5qw0/fr.XDIftTDuteFtB.0MjLwjcO3bVACV.Qv6cEMOt8S',2,NULL,'2021-12-23 11:43:30','2021-12-23 11:43:30'),(38,'Pedro','Pedrodeo021@gmail.com',NULL,'$2y$10$6PL5SM8QakcfmnJVZ0mrueu6kCFy1OJAGYX8Yi6og5/tU8scEXLhO',2,NULL,'2021-12-23 14:56:21','2021-12-23 14:56:21'),(39,'Bladimir','Araujoadonay1@gmail.com',NULL,'$2y$10$nxK5vOGC7k/5VbNPLoaaWOIWzVDwOTLV0mch2Fcbd4LRQbdYLpvke',2,NULL,'2021-12-23 18:59:28','2021-12-23 18:59:28'),(40,'Jonathan Torres','t_jonathan95@yahoo.com',NULL,'$2y$10$GeAETCy.Dssud5iF4ge7FuJFxgb6dZxzImyYC7MyHh0ls0.BvmpAa',2,NULL,'2021-12-24 02:09:23','2021-12-24 02:09:23'),(41,'Walter','waltersteven5031@gmail.com',NULL,'$2y$10$trZF3J3E4UpnOg34hWldWOxhaYp.cUMwjrCjTehJ3qKdL76ePVnW2',2,NULL,'2021-12-24 14:31:33','2021-12-24 14:31:33'),(42,'Jose','jr6269241@gmail.com',NULL,'$2y$10$2HxzlK34qETin0zZvOK14.G8FjY6qGQ/c.16P1GP27wW0q8V1T.fS',2,NULL,'2021-12-25 15:41:52','2021-12-25 15:41:52'),(43,'Yessica','Yessicaramos@gmail.com',NULL,'$2y$10$UKVYxLrxTWaE9EJEFqENL.jUQcDHt4LAiV/IkKhk59jzrlyMebfEC',2,NULL,'2021-12-26 13:50:21','2021-12-26 13:50:21'),(44,'richi503','ronaldpcabeza314@gmail.com',NULL,'$2y$10$zoyj3GOMWTqQWuRx.hktau1qSMtHSzlJyhXKHpb8.1gkLM16uG6J2',2,NULL,'2021-12-26 19:17:45','2021-12-26 19:17:45'),(45,'Culo','zdapjwqefv@email.ucms.edu.pk',NULL,'$2y$10$0sSWnPEXEUvvCgp3Rc4RH.FXsgCEDDc8MRjUHlC1zgWrxMon2HOxC',2,NULL,'2021-12-28 21:41:22','2021-12-28 21:41:22'),(46,'Nelson Alvard','nelsonalvard@gmail.com',NULL,'$2y$10$grHE1YdlA76mZkI7GRc/vOtMe.LYrNx/iLqStCn81ZBUD38UP4hle',2,NULL,'2021-12-30 00:13:57','2021-12-30 00:13:57'),(47,'Towers','At991540gmail.com',NULL,'$2y$10$JkBnJQ.Rtssw5uMqp2UKPeVLfDRy/I0GXbxFo522a/DFt.Fo871Tm',2,NULL,'2022-01-01 19:09:19','2022-01-01 19:09:19'),(48,'william','miwuallex@gmail.com',NULL,'$2y$10$YMNNpgZzfmbMN8Hzjo4Qyu7vKl/Xjgo6yD.oidDXUIGiVLIuZm.16',2,NULL,'2022-01-01 20:54:14','2022-01-01 20:54:14'),(49,'Nestor','alfredoamaya98503@gmail.com',NULL,'$2y$10$cxGzYq3H7cABJ.z82d25yuxEb/KnTNTecYXrinfWKWWRGmeFICa.q',2,NULL,'2022-01-02 00:38:03','2022-01-02 00:38:03'),(50,'Jose','servidorvps741@gmail.com',NULL,'$2y$10$LO4eBHX9fD14iQwRjsp6juwqu8spTUUk.IOzzfJzHyxuOy5HK6ynu',2,NULL,'2022-01-02 15:13:25','2022-01-02 15:13:25'),(51,'esmeralda','esmetalda134@gmail.cp.',NULL,'$2y$10$FuMKzXMJnMBzyIaMly.2g.gGhagU0AwOlpBDX0jpIOzICrkl2NbPi',2,NULL,'2022-01-02 17:24:04','2022-01-02 17:24:04'),(52,'sshdaje','itzjeovangamer@gmail.com',NULL,'$2y$10$EEgZAr7uuP2OudIINh1eMOgMWUYmTkxe.tXHHhzwNcbgGnRPeBLCC',2,NULL,'2022-01-04 02:40:19','2022-01-04 02:40:19'),(53,'Jose Miguel','servidorvps740@gmail.com',NULL,'$2y$10$wYDiIgZ.CBmFBTNckDJph.sVZSKHWZ4Erdr92WVg89ayHE1nGM45a',2,NULL,'2022-01-04 03:13:18','2022-01-04 03:13:18'),(54,'Francisco','franckksandovall@gmail.com',NULL,'$2y$10$w5J7sPY2nQNTy6lH.hQCUu3Vnx5IKCZO.UDaB3haRQJ8LV5gz5DoS',2,NULL,'2022-01-05 13:22:41','2022-01-05 13:22:41'),(55,'usuario','usuarionormal@gmail.com',NULL,'$2y$10$xOsSgF8sBVUqqov9BkESDeqhh7Nw9mWnA3a3Dd07wnlxE7wUHLRsq',2,NULL,'2022-01-05 17:59:46','2022-01-05 17:59:46'),(56,'Youtube','servidoresusa@gmail.com',NULL,'$2y$10$kMs7LI03lcnEkgZefQJZDeieG0cEsTcvqNUntrmHnJl5DcmnHRJam',2,NULL,'2022-01-05 22:17:30','2022-01-05 22:17:30'),(57,'Run dev','rundev@gmail.com',NULL,'$2y$10$DQQuc2beXKll6rJyw.UVNu7IAZZSFaABxBFwcvCayZ2k2/noJEUQe',2,NULL,'2022-01-05 22:35:02','2022-01-05 22:35:02'),(58,'Randy','andersonperz053@gmail.com',NULL,'$2y$10$H0IFy.8f.Un2avPx4ktQSurSOkc5gko8YDnNb82QI8mOz1qNVZTze',2,NULL,'2022-01-06 00:20:38','2022-01-06 00:20:38'),(59,'Jorge','jorgeobre478@gmail.com',NULL,'$2y$10$ndXd2ZUjKq/8Z2eO7e/4cOXlyUhMZhIm2wgPfqOVfwwpu6gIsNlTu',2,NULL,'2022-01-06 02:40:24','2022-01-06 02:40:24'),(60,'Kano','fcanoloaiza110483@gmail.com',NULL,'$2y$10$pS4xggArMK8bzXx9oVHL7uGclwdpF5hgfPcXhBHyUuVAlTIALrn0O',2,NULL,'2022-01-06 03:14:48','2022-01-06 03:14:48'),(61,'Juan Camilo','wixek13025@wusehe.com',NULL,'$2y$10$uYQilj.bWunOM6e47L1EguseDZhoFFJxDtEhiz4CFj4fGL5vSc7T6',2,NULL,'2022-01-06 03:57:56','2022-01-06 03:57:56'),(62,'Juan Camilo','kibap86448@wusehe.com',NULL,'$2y$10$waI53mjJs0SCcsf5l.KD5.hDaxqWPR2aRJAk05Ww8mDaVL2TLnVeG',2,NULL,'2022-01-06 03:59:43','2022-01-06 03:59:43'),(63,'willycar32@gmail.com','willycar32@gmail.com',NULL,'$2y$10$rtQmHFnAZtMmDWYENbLacu.VobCWx7XQlu1aa4euJt5yQUfexFX76',2,NULL,'2022-01-06 06:55:30','2022-01-06 06:55:30'),(64,'CrossAnon','crossanonymous1997@gmail.com',NULL,'$2y$10$7irArGmnkhekwrEhVzAYq.4zDj.4UMlr6a1wJp9RYc.gOW1xF2LFi',2,NULL,'2022-01-07 00:21:57','2022-01-07 00:21:57'),(65,'Esteban david','estebandavidsw@gmail.com',NULL,'$2y$10$nnwtipS83Ke1iJqKEVzcjecJnjUluvlgiw8rbTUVEPK2pQaTaLY2m',2,NULL,'2022-01-07 05:13:03','2022-01-07 05:13:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `websocket_accounts`
--

DROP TABLE IF EXISTS `websocket_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `websocket_accounts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `websocket_accounts`
--

LOCK TABLES `websocket_accounts` WRITE;
/*!40000 ALTER TABLE `websocket_accounts` DISABLE KEYS */;
INSERT INTO `websocket_accounts` VALUES (1,'sandra','sandra','2021-12-24',1,1,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(2,'javier1','javier1','2022-01-09',1,2,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(3,'miguel','miguel','2021-12-21',1,3,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(4,'ruben1','ruben1','2022-01-07',1,4,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(5,'ruben2','ruben2','2022-01-10',1,4,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(6,'elizabeth','elizabeth','2022-01-11',1,5,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(7,'rikelme1','rikelme1','2022-01-11',1,6,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(8,'omar1','omar123','2022-01-14',1,7,'','2021-12-18 22:52:43','2021-12-18 22:52:43'),(9,'Jose1233','rikelme123','2021-12-22',1,9,'','2021-12-19 01:02:22','2021-12-19 01:02:22'),(10,'clarosv','12345','2021-12-22',1,10,'','2021-12-19 06:47:12','2021-12-19 06:47:12'),(11,'fungus22','fungus22','2021-12-22',1,12,'','2021-12-19 17:23:21','2021-12-19 17:23:21'),(12,'miguel','miguel','2021-12-22',1,3,'','2021-12-19 18:39:18','2021-12-19 18:39:18'),(13,'miguel','miguel','2021-12-22',1,3,'','2021-12-19 18:50:37','2021-12-19 18:50:37'),(14,'josedev','josedev','2021-12-22',1,9,'','2021-12-19 20:08:28','2021-12-19 20:08:28'),(15,'prueba11','12345678','2021-12-22',1,3,'','2021-12-19 20:33:57','2021-12-19 20:33:57'),(16,'yuli123','yuli123','2021-12-23',1,9,'','2021-12-20 00:10:35','2021-12-20 00:10:35'),(17,'prueba1','prueba1','2021-12-23',1,13,'','2021-12-20 04:25:21','2021-12-20 04:25:21'),(18,'myssh123','premiumsv','2021-12-23',1,9,'','2021-12-20 13:36:13','2021-12-20 13:36:13'),(19,'Melvin','Melvin','2021-12-23',1,14,'','2021-12-20 16:22:39','2021-12-20 16:22:39'),(20,'Prueba','1234','2021-12-23',1,14,'','2021-12-20 16:55:03','2021-12-20 16:55:03'),(21,'Jose123','jose123','2021-12-23',1,9,'','2021-12-20 17:00:27','2021-12-20 17:00:27'),(22,'Jose123','jose123','2021-12-23',1,9,'','2021-12-20 17:03:29','2021-12-20 17:03:29'),(23,'helen1','131410','2021-12-23',1,11,'','2021-12-20 20:09:02','2021-12-20 20:09:02'),(24,'Holis','holis','2021-12-24',1,9,'','2021-12-21 00:06:13','2021-12-21 00:06:13'),(25,'Terre12','12345','2021-12-24',1,15,'','2021-12-21 11:32:05','2021-12-21 11:32:05'),(26,'marcos1992','marcos12','2021-12-24',1,16,'','2021-12-21 11:35:57','2021-12-21 11:35:57'),(27,'Blim5033','123456','2021-12-24',1,21,'','2021-12-21 11:45:27','2021-12-21 11:45:27'),(28,'legendario78','acm1pt78','2021-12-24',1,20,'','2021-12-21 11:46:52','2021-12-21 11:46:52'),(29,'Loborro','123ssff','2021-12-24',1,9,'toronto/Ca','2021-12-21 16:23:19','2021-12-21 16:23:19'),(30,'wilmer','12345','2021-12-24',1,23,'New York/USA','2021-12-21 17:47:20','2021-12-21 17:47:20'),(31,'Josue','1234','2021-12-24',1,24,'New York/USA','2021-12-21 18:56:18','2021-12-21 18:56:18'),(32,'Luisito','Luisito','2021-12-24',1,27,'New York/USA','2021-12-21 20:53:44','2021-12-21 20:53:44'),(33,'josueher13','123456','2021-12-24',1,28,'New York/USA','2021-12-21 21:29:31','2021-12-21 21:29:31'),(34,'Josalse21','123456','2021-12-24',1,30,'New York/USA','2021-12-21 23:19:43','2021-12-21 23:19:43'),(35,'BryanMendoza','73600808','2022-01-06',1,31,'New York/USA','2021-12-22 04:01:48','2021-12-22 04:01:48'),(36,'Jona','123456','2021-12-25',1,32,'New York/USA','2021-12-22 05:59:14','2021-12-22 05:59:14'),(37,'Roberto','Roberto','2021-12-25',1,27,'New York/USA','2021-12-22 07:26:58','2021-12-22 07:26:58'),(38,'OmarCampos','OmarCampos','2022-01-06',1,11,'New York/USA',NULL,NULL),(39,'Moys','3liza','2021-12-25',1,33,'New York/USA','2021-12-22 09:05:17','2021-12-22 09:05:17'),(40,'Prueva01','P123','2021-12-25',1,33,'New York/USA','2021-12-22 09:32:11','2021-12-22 09:32:11'),(41,'Contraseña','Contraseña','2021-12-25',1,27,'New York/USA','2021-12-22 10:14:15','2021-12-22 10:14:15'),(42,'myssh','hhujk','2021-12-25',1,9,'toronto/Ca','2021-12-22 12:12:15','2021-12-22 12:12:15'),(43,'Bryandz715','73600808','2022-01-06',1,31,'New York/USA','2021-12-22 12:33:13','2021-12-22 12:33:13'),(44,'jorgesv','zxc123','2021-12-25',1,34,'New York/USA','2021-12-22 13:51:47','2021-12-22 13:51:47'),(45,'Josue','7890','2021-12-25',1,24,'New York/USA','2021-12-22 15:24:09','2021-12-22 15:24:09'),(46,'Zarco','67890','2021-12-25',1,24,'New York/USA','2021-12-22 15:30:13','2021-12-22 15:30:13'),(47,'interclaro','123456','2021-12-25',1,36,'New York/USA','2021-12-22 19:05:11','2021-12-22 19:05:11'),(48,'Romo503','123456','2021-12-25',1,21,'New York/USA','2021-12-22 22:55:09','2021-12-22 22:55:09'),(49,'Jsjkzsk','503SV','2021-12-26',1,37,'New York/USA','2021-12-23 05:44:25','2021-12-23 05:44:25'),(50,'Pedro','Pedro','2021-12-26',1,38,'New York/USA','2021-12-23 08:58:45','2021-12-23 08:58:45'),(51,'Goku','Goku','2021-12-26',1,27,'toronto/Ca','2021-12-23 10:22:21','2021-12-23 10:22:21'),(52,'Gool','Gool','2021-12-26',1,27,'toronto/Ca','2021-12-23 11:05:06','2021-12-23 11:05:06'),(53,'Servidor12','12345','2021-12-26',1,15,'New York/USA','2021-12-23 11:07:38','2021-12-23 11:07:38'),(54,'clarosv','12345','2021-12-26',1,10,'toronto/Ca','2021-12-23 12:29:51','2021-12-23 12:29:51'),(55,'Bladimir91','1234','2021-12-26',1,39,'toronto/Ca','2021-12-23 13:00:15','2021-12-23 13:00:15'),(56,'Adobla','1234','2021-12-26',1,39,'New York/USA','2021-12-23 14:07:37','2021-12-23 14:07:37'),(57,'Kickme','123456','2021-12-26',1,40,'New York/USA','2021-12-23 20:10:03','2021-12-23 20:10:03'),(58,'legendario78','acm1pt78','2021-12-26',1,20,'New York/USA','2021-12-23 20:47:18','2021-12-23 20:47:18'),(59,'Popolina','123456','2021-12-26',1,30,'New York/USA','2021-12-23 23:12:26','2021-12-23 23:12:26'),(60,'24dic','24dic','2021-12-27',1,9,'New York/USA','2021-12-24 08:25:30','2021-12-24 08:25:30'),(61,'VelasG','123456','2021-12-27',1,41,'New York/USA','2021-12-24 08:32:04','2021-12-24 08:32:04'),(62,'Popolina2','123456','2021-12-27',1,30,'New York/USA','2021-12-24 16:00:29','2021-12-24 16:00:29'),(63,'Servidor','12345','2021-12-28',1,42,'New York/USA','2021-12-25 09:43:31','2021-12-25 09:43:31'),(64,'Esteban','Esteban','2021-12-28',1,27,'toronto/Ca','2021-12-25 22:16:09','2021-12-25 22:16:09'),(65,'Yessica','Yesi16','2021-12-29',1,43,'New York/USA','2021-12-26 07:57:33','2021-12-26 07:57:33'),(66,'Qwer','Qwer','2021-12-29',1,33,'toronto/Ca','2021-12-26 08:38:37','2021-12-26 08:38:37'),(67,'Diosito','Diosito','2021-12-29',1,27,'toronto/Ca','2021-12-26 10:46:06','2021-12-26 10:46:06'),(68,'clarosv','12345','2021-12-29',1,10,'New York/USA','2021-12-26 13:43:35','2021-12-26 13:43:35'),(69,'Fuck503','123456','2021-12-29',1,21,'New York/USA','2021-12-26 13:45:00','2021-12-26 13:45:00'),(70,'Souf','123456','2021-12-29',1,40,'New York/USA','2021-12-26 14:05:19','2021-12-26 14:05:19'),(71,'clarosv','12345','2021-12-29',1,10,'New York/USA','2021-12-26 14:58:34','2021-12-26 14:58:34'),(72,'clarosv','12345','2021-12-29',1,10,'toronto/Ca','2021-12-26 17:31:16','2021-12-26 17:31:16'),(73,'clarosv','12345','2021-12-29',1,10,'New York/USA','2021-12-26 17:39:12','2021-12-26 17:39:12'),(74,'VelasG','123456','2021-12-29',1,41,'New York/USA','2021-12-26 20:03:19','2021-12-26 20:03:19'),(75,'richi503','123456','2021-12-29',1,44,'New York/USA','2021-12-26 22:03:54','2021-12-26 22:03:54'),(76,'Josalsemm','123456','2021-12-30',1,30,'New York/USA','2021-12-27 12:12:03','2021-12-27 12:12:03'),(77,'mio2','12345','2021-12-30',1,10,'New York/USA','2021-12-27 17:33:25','2021-12-27 17:33:25'),(78,'legendario78','acm1pt78','2021-12-30',1,17,'toronto/Ca','2021-12-27 21:20:26','2021-12-27 21:20:26'),(79,'gg','3333','2021-12-30',1,17,'toronto/Ca','2021-12-27 21:23:48','2021-12-27 21:23:48'),(80,'Gersy','1998','2021-12-30',1,24,'New York/USA','2021-12-27 21:31:39','2021-12-27 21:31:39'),(81,'Josalse23','123456','2021-12-31',1,30,'New York/USA','2021-12-28 14:43:25','2021-12-28 14:43:25'),(82,'Luna','Luna','2021-12-31',1,27,'toronto/Ca','2021-12-28 19:43:36','2021-12-28 19:43:36'),(83,'Deer503','123456','2022-12-01',1,21,'New York/USA','2021-12-29 12:54:51','2021-12-29 12:54:51'),(84,'miio','12345','2022-12-01',1,10,'New York/USA','2021-12-29 14:28:11','2021-12-29 14:28:11'),(85,'richi503','123456','2022-12-01',1,44,'New York/USA','2021-12-29 14:38:32','2021-12-29 14:38:32'),(86,'vahsyvd','baudbau','2022-12-01',1,44,'New York/USA','2021-12-29 14:42:52','2021-12-29 14:42:52'),(87,'alvarado78','122111','2022-12-01',1,46,'New York/USA','2021-12-29 18:15:07','2021-12-29 18:15:07'),(88,'Zarco','1998','2022-12-01',1,24,'New York/USA','2021-12-29 21:27:08','2021-12-29 21:27:08'),(89,'Moon','123456','2022-12-01',1,40,'New York/USA','2021-12-29 21:40:11','2021-12-29 21:40:11'),(90,'Amorcito','Amorcito','2022-12-01',1,27,'toronto/Ca','2021-12-29 22:17:58','2021-12-29 22:17:58'),(91,'qwerty','12345','2022-12-02',1,33,'New York/USA','2021-12-30 04:48:14','2021-12-30 04:48:14'),(92,'Junatan','Junatan','2022-12-02',1,27,'toronto/Ca','2021-12-30 18:17:01','2021-12-30 18:17:01'),(93,'Yuyu','Yuyu','2022-12-02',1,27,'toronto/Ca','2021-12-30 18:31:07','2021-12-30 18:31:07'),(94,'Fufu','123456','2022-12-02',1,21,'New York/USA','2021-12-30 21:50:13','2021-12-30 21:50:13'),(95,'Vps','Vps','2022-12-03',1,27,'toronto/Ca','2021-12-31 07:11:20','2021-12-31 07:11:20'),(96,'Josalse24','123456','2022-12-03',1,30,'New York/USA','2021-12-31 12:32:27','2021-12-31 12:32:27'),(97,'Moon1','123456','2022-12-03',1,40,'toronto/Ca','2021-12-31 21:46:14','2021-12-31 21:46:14'),(98,'Towers','1234','2022-01-04',1,47,'New York/USA','2022-01-01 13:09:43','2022-01-01 13:09:43'),(99,'Towers1','1234','2022-01-04',1,47,'toronto/Ca','2022-01-01 13:19:08','2022-01-01 13:19:08'),(100,'Towers1','Sbsnsslsm','2022-01-04',1,47,'toronto/Ca','2022-01-01 13:19:38','2022-01-01 13:19:38'),(101,'Bro','123456','2022-01-04',1,40,'toronto/Ca','2022-01-01 13:29:56','2022-01-01 13:29:56'),(102,'Ksmssm','1234','2022-01-04',1,47,'toronto/Ca','2022-01-01 13:44:42','2022-01-01 13:44:42'),(103,'william','william','2022-01-04',1,48,'New York/USA','2022-01-01 14:54:49','2022-01-01 14:54:49'),(104,'william','1234','2022-01-04',1,48,'New York/USA','2022-01-01 18:24:42','2022-01-01 18:24:42'),(105,'williamsksskk','Sksdk','2022-01-04',1,48,'New York/USA','2022-01-01 18:28:40','2022-01-01 18:28:40'),(106,'Afgkk','Vahkls','2022-01-04',1,49,'New York/USA','2022-01-01 18:38:27','2022-01-01 18:38:27'),(107,'amor','teamo','2022-01-04',1,33,'New York/USA','2022-01-01 18:40:57','2022-01-01 18:40:57'),(108,'prueba1','prueba1','2022-01-04',1,13,'toronto/Ca','2022-01-01 19:23:30','2022-01-01 19:23:30'),(109,'Josalse25','123456','2022-01-04',1,30,'New York/USA','2022-01-01 21:26:48','2022-01-01 21:26:48'),(110,'Mmdkfkdk','Kskxjdwk','2022-01-04',1,48,'toronto/Ca','2022-01-01 22:02:54','2022-01-01 22:02:54'),(111,'josedev','josedev','2022-01-05',1,50,'New York/USA','2022-01-02 09:13:59','2022-01-02 09:13:59'),(112,'Esmeralda','123456','2022-01-05',1,51,'New York/USA','2022-01-02 11:25:34','2022-01-02 11:25:34'),(113,'vps','13345','2022-01-06',1,10,'New York/USA','2022-01-03 05:49:55','2022-01-03 05:49:55'),(114,'Josue','1998','2022-01-06',1,24,'New York/USA','2022-01-03 12:12:20','2022-01-03 12:12:20'),(115,'sanchef','12345','2022-01-06',1,36,'toronto/Ca','2022-01-03 15:47:27','2022-01-03 15:47:27'),(116,'Pocox3','Pocox3','2022-01-06',1,12,'New York/USA','2022-01-03 17:02:01','2022-01-03 17:02:01'),(117,'paco','paco123','2022-01-06',1,44,'New York/USA','2022-01-03 17:11:41','2022-01-03 17:11:41'),(118,'Josalse26','123456','2022-01-06',1,30,'New York/USA','2022-01-03 19:58:44','2022-01-03 19:58:44'),(119,'darsshk','1234','2022-01-06',1,52,'toronto/Ca','2022-01-03 20:40:40','2022-01-03 20:40:40'),(120,'clanrecord','clanrecord','2022-01-06',1,53,'New York/USA','2022-01-03 21:13:38','2022-01-03 21:13:38'),(121,'RICHI503','123456','2022-01-07',1,44,'New York/USA','2022-01-04 08:52:08','2022-01-04 08:52:08'),(122,'Claro','Claro','2022-01-07',1,27,'New York/USA','2022-01-04 12:58:46','2022-01-04 12:58:46'),(123,'prueva','12345','2022-01-07',1,33,'toronto/Ca','2022-01-04 14:03:40','2022-01-04 14:03:40'),(124,'Funes','Funes','2022-01-07',1,27,'New York/USA','2022-01-04 18:54:20','2022-01-04 18:54:20'),(125,'Paquito','Karlita','2022-01-08',1,54,'New York/USA','2022-01-05 07:23:12','2022-01-05 07:23:12'),(126,'Pocox322','Pocox322','2022-01-20',1,12,'New York/USA','2022-01-05 13:06:39','2022-01-05 13:06:39'),(127,'you123','you123','2022-01-08',1,56,'New York/USA','2022-01-05 16:18:24','2022-01-05 16:18:24'),(128,'websocket','websocket','2022-01-08',1,57,'New York/USA','2022-01-05 16:35:43','2022-01-05 16:35:43'),(129,'Randy503','4','2022-01-08',1,58,'New York/USA','2022-01-05 18:21:11','2022-01-05 18:21:11'),(130,'Jorge','Armando20','2022-01-08',1,59,'New York/USA','2022-01-05 20:41:50','2022-01-05 20:41:50'),(131,'Kano','123456','2022-01-08',1,60,'New York/USA','2022-01-05 21:16:41','2022-01-05 21:16:41'),(132,'jherfe743','19832012','2022-01-08',1,62,'New York/USA','2022-01-05 22:00:34','2022-01-05 22:00:34'),(133,'jherfe885','19832012','2022-01-08',1,62,'New York/USA','2022-01-05 22:02:01','2022-01-05 22:02:01'),(134,'Fuerza','123456','2022-01-08',1,40,'toronto/Ca','2022-01-05 22:23:19','2022-01-05 22:23:19'),(135,'Randy503','Cachorro1','2022-01-08',1,58,'New York/USA','2022-01-05 22:45:39','2022-01-05 22:45:39'),(136,'Randy98','Cachorro1','2022-01-08',1,58,'New York/USA','2022-01-05 23:02:53','2022-01-05 23:02:53'),(137,'Willycar','12345678','2022-01-09',1,63,'New York/USA','2022-01-06 00:57:24','2022-01-06 00:57:24'),(138,'Randy68','Randy68','2022-01-09',1,58,'New York/USA','2022-01-06 11:44:24','2022-01-06 11:44:24'),(139,'claro1','12345','2022-01-09',1,10,'New York/USA','2022-01-06 12:17:05','2022-01-06 12:17:05'),(140,'kitana','kitana','2022-01-09',1,64,'New York/USA','2022-01-06 18:37:01','2022-01-06 18:37:01'),(141,'Dznet','73600808','2022-01-21',1,31,'New York/USA','2022-01-06 18:43:18','2022-01-06 18:43:18'),(142,'Usaa','Usaa','2022-01-09',1,27,'toronto/Ca','2022-01-06 21:25:24','2022-01-06 21:25:24'),(143,'Probando','1234','2022-01-09',1,65,'New York/USA','2022-01-06 23:13:30','2022-01-06 23:13:30');
/*!40000 ALTER TABLE `websocket_accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-07  5:55:27
