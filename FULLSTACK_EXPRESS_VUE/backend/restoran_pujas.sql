-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2024 at 02:10 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restoran_pujas`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `KodeBarang` varchar(50) NOT NULL,
  `NamaBarang` varchar(255) NOT NULL,
  `Satuan` varchar(50) NOT NULL,
  `HargaSatuan` varchar(15) NOT NULL,
  `Stok` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`KodeBarang`, `NamaBarang`, `Satuan`, `HargaSatuan`, `Stok`) VALUES
('BRG[211524005]01', 'Oreo Original', 'BOX', '25000', 30),
('BRG[211524005]02', 'Beng-Beng', 'BOX', '25000', 10);

-- --------------------------------------------------------

--
-- Table structure for table `barangnota`
--

CREATE TABLE `barangnota` (
  `KodeBarangNota` int(11) NOT NULL,
  `KodeNota` varchar(50) NOT NULL,
  `NamaBarang` varchar(255) NOT NULL,
  `Jumlah` int(11) NOT NULL,
  `HargaSatuan` int(11) NOT NULL,
  `Total` int(11) GENERATED ALWAYS AS (`Jumlah` * `HargaSatuan`) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kasir`
--

CREATE TABLE `kasir` (
  `KodeKasir` varchar(30) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `HP` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kasir`
--

INSERT INTO `kasir` (`KodeKasir`, `Nama`, `HP`) VALUES
('KS[211524005]01', 'Cintia', '08123456789');

-- --------------------------------------------------------

--
-- Table structure for table `nota`
--

CREATE TABLE `nota` (
  `KodeNota` varchar(255) NOT NULL,
  `NamaTenan` varchar(255) NOT NULL,
  `NamaKasir` varchar(255) NOT NULL,
  `TglNota` date NOT NULL,
  `JumlahBelanja` int(11) NOT NULL,
  `Diskon` decimal(5,2) NOT NULL,
  `Total` decimal(10,2) GENERATED ALWAYS AS (`JumlahBelanja` - `JumlahBelanja` * `Diskon`) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenan`
--

CREATE TABLE `tenan` (
  `KodeTenan` varchar(30) NOT NULL,
  `NamaTenan` varchar(50) NOT NULL,
  `HP` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tenan`
--

INSERT INTO `tenan` (`KodeTenan`, `NamaTenan`, `HP`) VALUES
('TN[211524005]01', 'Cintia', '08123456235');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`KodeBarang`);

--
-- Indexes for table `barangnota`
--
ALTER TABLE `barangnota`
  ADD PRIMARY KEY (`KodeBarangNota`);

--
-- Indexes for table `kasir`
--
ALTER TABLE `kasir`
  ADD PRIMARY KEY (`KodeKasir`);

--
-- Indexes for table `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`KodeNota`);

--
-- Indexes for table `tenan`
--
ALTER TABLE `tenan`
  ADD PRIMARY KEY (`KodeTenan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barangnota`
--
ALTER TABLE `barangnota`
  MODIFY `KodeBarangNota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
