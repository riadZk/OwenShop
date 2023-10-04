-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 19 juin 2023 à 23:47
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `e-commerce`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `A_Produit` (IN `nom` VARCHAR(50), IN `pr` FLOAT, `image` VARCHAR(50), IN `ctg` VARCHAR(50), IN `pg` INT, IN `des` VARCHAR(100))   BEGIN
INSERT INTO product(productName,price,productImage,category,page,description) VALUES(nom,pr,image,ctg,pg,des) ;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`idAdmin`, `email`, `pass`) VALUES
(1, 'zakariariad@gmail.com', '1234'),
(2, 'adamdrhourhi@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `productImage` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `page` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `archiveproduct`
--

CREATE TABLE `archiveproduct` (
  `id` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `productImage` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `page` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `description2` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `archiveproduct`
--

INSERT INTO `archiveproduct` (`id`, `productName`, `price`, `productImage`, `category`, `page`, `description`, `description2`) VALUES
(32, 'Speaker', 400, './image/back.png', 'speaker', 1, 'speaker sumsung', NULL);

--
-- Déclencheurs `archiveproduct`
--
DELIMITER $$
CREATE TRIGGER `arc` BEFORE DELETE ON `archiveproduct` FOR EACH ROW BEGIN
INSERT INTO product VALUES(old.id ,old.productName , old.price,old.productImage,old.category,old.page,old.description,old.description2);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `idClient` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `Adresse` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `numCommande` int(11) NOT NULL,
  `dateC` date DEFAULT NULL,
  `numClient` int(11) DEFAULT NULL,
  `idProduit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `user`, `email`, `message`) VALUES
(1, 'zakaria', 'riadayoub858@gmail.com', 'i have iphone 15 '),
(2, 'zakaria', 'riadayoub858@gmail.com', 'i have commende ');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `idAdmin` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `idPaiement` int(11) NOT NULL,
  `idClient` int(11) DEFAULT NULL,
  `idProduit` int(11) DEFAULT NULL,
  `montant` float NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `productImage` varchar(50) NOT NULL,
  `category` varchar(200) NOT NULL,
  `page` int(11) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `description2` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `productName`, `price`, `productImage`, `category`, `page`, `description`, `description2`) VALUES
(1, 'IPhone 14 ', 1100, './images/1.png', 'smartphone', 1, 'Product White', NULL),
(2, 'Macbook Pro', 1999, './images/assets/products/2.png', 'laptop', 1, 'Silver - M1 Pro', ''),
(3, 'Camera', 699, './images/assets/products/3.png', 'camera', 0, 'Cannon M50', ''),
(4, 'Jacket', 228, './images/assets/products/4.png', 'clothes', 3, 'Jacket jean ', ''),
(5, 'Souris', 199, './images/assets/products/5.png', 'Souris', 2, 'Kult Helium', ''),
(6, 'Hp Elitebook', 876, './images/assets/products/7.png', 'laptop', 1, 'Elitebook 840 G3', ''),
(7, 'Galaxy S21', 500, './images/assets/products/8.png', 'smartphone', 1, 'Ultra 5G', ''),
(8, 'PlayStation 5', 868, './images/assets/products/6.png', 'PlayStation 5', 1, 'Product White', ''),
(9, 'WATCH APPEL', 30, './images/assets/products/watrch.png', 'smartwatch', 2, 'Series 5 SE', ''),
(10, 'CASQUE', 19, './images/assets/products/9.png', 'casque', 2, 'Korp Cobalt 7.1', NULL),
(11, 'TELEVISION LG', 2999, './images/assets/products/11.png', 'television', 1, 'LG 32 Ultra HD', NULL),
(12, 'Clavier', 19, './images/assets/products/10.png', 'clavier', 2, 'Keyz Carbon E', ''),
(13, 'T-shirt', 30, './images/assets/products/t-shirt2-r.png', 'clothes', 3, 'T-shirt Adidas', ''),
(14, 'casque', 100, './images/JBLTUNE500BT.png', 'casque', 2, 'JBL Tune 500BT', ''),
(15, 'Souris', 50, './images//assets/products/souris3.png', 'Souris', 0, 'Kult Caesium\r\n', ''),
(16, 'TELEVISION SUMSUNG', 3200, './images/assets/products/television22.png', 'television', 0, 'ultra hd 4k curved monitor\r\n', ''),
(17, 'WATCH APPEL', 400, './images/assets/products/watch2.png', 'smartwatch', 0, 'Serier 8', ''),
(18, 'Clavier', 50, './images/assets/products/clavier2.png', 'clavier', 0, 'Keys Caesium TKL', ''),
(19, 'Dell', 550, './images/assets/products/dell22.png', 'laptop', 0, 'Latitude E7480', ''),
(20, 'Souris', 40, './images/assets/products/sou.png', 'Souris', 0, 'Kult Beryllium', ''),
(21, 'Camera', 2450, './images/assets/products/D800-r.png', 'camera', 2, 'Nikon D80', ''),
(22, 'Jacket', 130, './images/assets/products/adidas.png', 'clothes', 3, 'Jacket Adidas', NULL),
(23, 'PlayStation 5', 868, './images/assets/products/PlayStation.png', 'PlayStation 5', 1, 'Product Black', NULL),
(24, 'Speaker', 130, './images/assets/products/speakers.jpg', 'Speaker', 2, 'Sony SRS-XB10', NULL),
(25, 'Lenovo	', 400, './images/assets/products/l.png', 'laptop		', 1, 'Ideapad 720S', NULL);

--
-- Déclencheurs `product`
--
DELIMITER $$
CREATE TRIGGER `sup` BEFORE DELETE ON `product` FOR EACH ROW BEGIN
INSERT INTO archiveproduct VALUES(old.id,old.productName,old.price,old.productImage,old.category,old.page,old.description , old.description2);
end
$$
DELIMITER ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`idClient`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`numCommande`),
  ADD KEY `numClient` (`numClient`),
  ADD KEY `idProduit` (`idProduit`);

--
-- Index pour la table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`idAdmin`,`idClient`),
  ADD KEY `idClient` (`idClient`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`idPaiement`),
  ADD KEY `idClient` (`idClient`),
  ADD KEY `idProduit` (`idProduit`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`numClient`) REFERENCES `client` (`idClient`),
  ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`idProduit`) REFERENCES `product` (`id`);

--
-- Contraintes pour la table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`id`) REFERENCES `admin` (`idAdmin`);

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`idAdmin`) REFERENCES `admin` (`idAdmin`);

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `paiement_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`),
  ADD CONSTRAINT `paiement_ibfk_2` FOREIGN KEY (`idProduit`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
