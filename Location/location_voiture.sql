-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Lun 20 Novembre 2023 à 16:26
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `location_voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `table_client`
--

CREATE TABLE IF NOT EXISTS `table_client` (
  `cni` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `num_permis` int(11) NOT NULL,
  PRIMARY KEY (`cni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `table_client`
--

INSERT INTO `table_client` (`cni`, `nom`, `prenom`, `date_naissance`, `adresse`, `num_permis`) VALUES
('12B', 'CHERGUI', 'BEMBA', '0000-00-00', '14 RUE DE VILGENIS', 26761646),
('12C', 'IDRISS', 'LAMINE', '0000-00-00', 'RUE DES RABATS', 46791546);

-- --------------------------------------------------------

--
-- Structure de la table `table_locations`
--

CREATE TABLE IF NOT EXISTS `table_locations` (
  `date_location` date NOT NULL,
  `code_location` varchar(50) NOT NULL,
  `prix_jour` int(11) NOT NULL,
  `duree` int(11) NOT NULL,
  `caution` int(11) NOT NULL,
  `code_client` varchar(50) NOT NULL,
  `immatriculation` varchar(50) NOT NULL,
  PRIMARY KEY (`code_location`),
  KEY `code_client` (`code_client`),
  KEY `immatriculation` (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `table_locations`
--


-- --------------------------------------------------------

--
-- Structure de la table `table_voiture`
--

CREATE TABLE IF NOT EXISTS `table_voiture` (
  `immatriculation` varchar(50) NOT NULL,
  `carburant` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `modele` varchar(50) NOT NULL,
  `nombre_porte` int(11) NOT NULL,
  `etat` varchar(50) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `nombre_place` int(11) NOT NULL,
  `annee_circulation` date NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `table_voiture`
--

INSERT INTO `table_voiture` (`immatriculation`, `carburant`, `couleur`, `kilometrage`, `modele`, `nombre_porte`, `etat`, `marque`, `nombre_place`, `annee_circulation`) VALUES
('185HG53', 'ESSENCE', 'VERT', 54000, 'RS3-R MTM', 4, 'CORRECTE', 'AUDI', 5, '0000-00-00'),
('GH-757-58', 'DIESEL', 'JAUNE', 34000, 'A45 AMG', 4, 'CORRECTE', 'MERCEDES', 5, '0000-00-00');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `table_locations`
--
ALTER TABLE `table_locations`
  ADD CONSTRAINT `table_locations_ibfk_2` FOREIGN KEY (`code_client`) REFERENCES `table_client` (`cni`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `table_locations_ibfk_1` FOREIGN KEY (`immatriculation`) REFERENCES `table_voiture` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE;
