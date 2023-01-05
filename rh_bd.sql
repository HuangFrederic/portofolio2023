-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 05 Janvier 2023 à 14:26
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `rh_bd`
--

-- --------------------------------------------------------

--
-- Structure de la table `rhemploye`
--

CREATE TABLE IF NOT EXISTS `rhemploye` (
  `NoEmp` int(11) NOT NULL,
  `Nom` varchar(20) NOT NULL,
  `Prenom` varchar(20) NOT NULL,
  `Sexe` varchar(1) NOT NULL,
  `Salaire` int(11) NOT NULL,
  `TypeContrat` varchar(20) NOT NULL,
  `Fonction` varchar(20) NOT NULL,
  `Site` varchar(20) NOT NULL,
  `DateEmbauche` date NOT NULL,
  `DateNaissance` date NOT NULL,
  `NoSrv` int(11) NOT NULL,
  PRIMARY KEY (`NoEmp`),
  KEY `NoSrv` (`NoSrv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rhemploye`
--

INSERT INTO `rhemploye` (`NoEmp`, `Nom`, `Prenom`, `Sexe`, `Salaire`, `TypeContrat`, `Fonction`, `Site`, `DateEmbauche`, `DateNaissance`, `NoSrv`) VALUES
(1, 'Jean', 'Petitjardins', 'H', 0, 'Stage', 'Directeur', 'Paris', '2023-01-05', '1980-01-31', 1),
(2, 'Hollandais', 'Francois', 'H', 450, 'Interim', 'Hitman', 'Dehors', '2010-12-31', '1979-01-23', 2),
(3, 'Aphro', 'Dite', 'F', 0, 'CDD', 'Technicien de surfac', 'Olympe', '2001-11-12', '1950-02-28', 3),
(4, 'Le', 'Voleur', 'H', 1561, 'CDI', 'Voleur', 'Paris', '2023-01-05', '1999-05-08', 4),
(5, 'Boss', 'Deschiffres', 'F', 7820, 'Alternance', 'Comptable', 'Cabinet', '2008-01-09', '1990-03-22', 5);

-- --------------------------------------------------------

--
-- Structure de la table `rhintervenir`
--

CREATE TABLE IF NOT EXISTS `rhintervenir` (
  `Num_Interv` varchar(20) NOT NULL,
  `NoProj` int(11) NOT NULL,
  `NoEmp` int(11) NOT NULL,
  `NbHeures` int(11) NOT NULL,
  PRIMARY KEY (`Num_Interv`),
  KEY `NoEmp` (`NoEmp`),
  KEY `NoProj` (`NoProj`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rhintervenir`
--

INSERT INTO `rhintervenir` (`Num_Interv`, `NoProj`, `NoEmp`, `NbHeures`) VALUES
('01', 1, 1, 15),
('02', 2, 2, 20),
('03', 3, 3, 45),
('04', 4, 4, 38),
('05', 5, 5, 65);

-- --------------------------------------------------------

--
-- Structure de la table `rhprojet`
--

CREATE TABLE IF NOT EXISTS `rhprojet` (
  `NoProj` int(11) NOT NULL,
  `LibelleProjet` varchar(20) NOT NULL,
  `NoSrv` int(11) NOT NULL,
  PRIMARY KEY (`NoProj`),
  KEY `NoSrv` (`NoSrv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rhprojet`
--

INSERT INTO `rhprojet` (`NoProj`, `LibelleProjet`, `NoSrv`) VALUES
(1, 'Camera', 1),
(2, 'Liquider', 2),
(3, 'Deblayer', 3),
(4, 'Arnaque', 4),
(5, 'Comptable', 5);

-- --------------------------------------------------------

--
-- Structure de la table `rhservice`
--

CREATE TABLE IF NOT EXISTS `rhservice` (
  `NoSrv` int(11) NOT NULL,
  `NomSrv` varchar(20) NOT NULL,
  PRIMARY KEY (`NoSrv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rhservice`
--

INSERT INTO `rhservice` (`NoSrv`, `NomSrv`) VALUES
(1, 'Surveillance'),
(2, 'Liquidation'),
(3, 'Deblayage'),
(4, 'Arnaquer'),
(5, 'Chiffres');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `rhemploye`
--
ALTER TABLE `rhemploye`
  ADD CONSTRAINT `rhemploye_ibfk_1` FOREIGN KEY (`NoSrv`) REFERENCES `rhservice` (`NoSrv`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rhintervenir`
--
ALTER TABLE `rhintervenir`
  ADD CONSTRAINT `rhintervenir_ibfk_2` FOREIGN KEY (`NoProj`) REFERENCES `rhprojet` (`NoProj`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rhintervenir_ibfk_1` FOREIGN KEY (`NoEmp`) REFERENCES `rhemploye` (`NoEmp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rhprojet`
--
ALTER TABLE `rhprojet`
  ADD CONSTRAINT `rhprojet_ibfk_1` FOREIGN KEY (`NoSrv`) REFERENCES `rhservice` (`NoSrv`) ON DELETE CASCADE ON UPDATE CASCADE;
