-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 03, 2019 at 02:19 AM
-- Server version: 10.2.23-MariaDB
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u450042391_govid`
--

-- --------------------------------------------------------

--
-- Table structure for table `channel_list`
--

CREATE TABLE `channel_list` (
  `channel_id` int(255) NOT NULL,
  `channel_name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `channel_logo_url` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `channel_list`
--

INSERT INTO `channel_list` (`channel_id`, `channel_name`, `channel_logo_url`, `status`) VALUES
(1, 'T-Series', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/659px-T-series-logo.svg.png', 0),
(2, 'GoViddo', 'https://goviddo.com/appimg/ic_launcher_go_app.png', 1),
(3, 'BhaDiPa', 'https://i.ytimg.com/vi/GJjkh5Giub8/hqdefault.jpg', 0),
(4, 'Indian Movie Friend', 'https://www.indianmoviefriend.com/images/front/31.png', 0),
(5, 'Zee Studios', 'https://goviddo.com/appimg/zz.jpg', 0),
(6, 'Great Maratha Entertainment', 'https://goviddo.com/appimg/ic_launcher_go_app.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `community`
--

CREATE TABLE `community` (
  `community_join_id` int(200) NOT NULL,
  `email_id_community_joiner` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `joining_as` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `updates_approval` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `community`
--

INSERT INTO `community` (`community_join_id`, `email_id_community_joiner`, `joining_as`, `updates_approval`) VALUES
(5, 'mulaniimran27@gmail.com', 'Inverster Producer ', 0),
(6, 'shelarpratik@icloud.com', 'Inverster ', 0),
(7, 'satkhachane@gmail.com', 'User ', 0),
(8, 'ni_80@rediffmail.com', 'User ', 0),
(9, 'ni_80@rediffmail.com', 'User ', 0),
(10, 'pravinshelar123@gmail.com', 'Inverster User ', 0),
(11, 'ajitnetwork@gmail.com', 'Advertiser ', 0),
(12, 'ajitnetwork@gmail.com', 'Advertiser ', 0),
(13, 'Donoso6780@hotmail.com', '', 0),
(14, 'Comparoni19465@hotmail.com', '', 0),
(15, 'prateek.nikhare21@gmail.com', 'User ', 0),
(16, 'prateek.nikhare21@gmail.com', 'User ', 0),
(17, 'prateek.nikhare21@gmail.com', 'Investor ', 0),
(18, 'Pravinshelar123@Gmail.con', '', 0),
(19, 'Pravinshelar123@Gmail.con', 'Investor User ', 0),
(20, 'Pravinshelar123@Gmail.con', 'Investor User ', 0),
(21, 'Pravinshelar123@Gmail.con', 'Investor User ', 0),
(22, 'SteinhoffRita@gmx.com', 'User ', 0),
(23, 'sneha19.singh@gmail.com', 'User ', 0),
(24, 'as@bluesapphirefilms.com', 'Producer ', 0),
(25, 'Delhoyo71585@yahoo.com', '', 0),
(26, '51135Finizio@hotmail.com', '', 0),
(27, '47919Searle@hotmail.com', '', 0),
(32, 'mulaniimran97@gmail.com', 'Viewer ', 0),
(33, 'mulaniimran97@gmail.com', '', 1),
(34, 'rachel@drop.studio', '', 1),
(35, '', '', 0),
(36, 'SarthakKolage@gmail.com', '', 1),
(37, '', '', 0),
(38, 'pankajthodsare@gmail.com', '', 1),
(39, 'pankajthodsare78@gmail.com', '', 1),
(40, 'prakashkumar76@gmail.com', '', 0),
(41, 'irina.georgieva@drop.studio', '', 1),
(42, '', '', 0),
(43, 'massimo.guasti@yahoo.it', '', 1),
(44, 'abhishekbhrt56@gmail.com', '', 1),
(45, 'saurabhpatilsam@gmail.com', '', 1),
(46, 'sonnemukesh@gmail.com', '', 1),
(47, 'sidvb13@gmail.com', '', 0),
(48, 'jindalharshal@gmail.com', '', 1),
(49, 'vijaydhabekar@hotmail.com', '', 0),
(50, 'vijaydhabekar@hotmail.com', '', 0),
(51, 'vijaydhabekar@hotmail.com', '', 0),
(52, 'mohanish58@gmail.com', '', 0),
(53, 'srajanpatel.9575@gmail.com', '', 1),
(54, 'bhuvan@latlontechnologies.com', '', 0),
(55, 'pankajthodsare78@gmail.com', '', 1),
(56, 'pankajthodsare78@gmail.com', '', 1),
(57, 'mailto.arahim@gmail.com', '', 0),
(58, 'agarwalakansh7@gmail.com', '', 1),
(59, 'skmknk09@gmail.com', '', 1),
(60, 'skmknk09@gmail.com', '', 1),
(61, 'hemantarole@gmail.com', '', 1),
(62, 'dipago6@gmail.com', '', 1),
(63, 'saketrk@gmail.com', '', 1),
(64, 'mayur.pathak1545@gmail.com', '', 1),
(65, 'mayur.pathak1545@gmail.com', '', 1),
(66, 'manishgo3366@gmail.com', '', 1),
(67, 'chsubbu33@gmail.com', '', 1),
(68, 'swapniljadhav720@gmail.com', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `config_table`
--

CREATE TABLE `config_table` (
  `id` int(255) NOT NULL,
  `config_key` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `config_value` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `config_table`
--

INSERT INTO `config_table` (`id`, `config_key`, `config_value`) VALUES
(1, 'bannerImgCount', '5'),
(2, 'previewCount', '10'),
(3, 'popularCount', '5'),
(4, 'categories', '[{\'name\':\'Originals\', \'count\':10},{\'name\':\'Movies\', \'count\':10},{\'name\':\'Series\', \'count\':10},{\'name\':\'Documentries\', \'count\':10}]');

-- --------------------------------------------------------

--
-- Table structure for table `series_details_table`
--

CREATE TABLE `series_details_table` (
  `series_id` int(255) NOT NULL,
  `series_name` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `series_description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `series_home_image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `series_banner_image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `series_launch_date` date DEFAULT NULL,
  `series_end_date` date DEFAULT NULL,
  `series_status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0 - notvisible, 1- visible'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `series_season_details_table`
--

CREATE TABLE `series_season_details_table` (
  `season_table_id` int(255) NOT NULL,
  `series_number` int(255) NOT NULL,
  `season_name` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `season_number` int(255) NOT NULL,
  `season_description` text COLLATE utf8_unicode_ci NOT NULL,
  `season_launch_date` date DEFAULT NULL,
  `season_end_date` date DEFAULT NULL,
  `season_status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0 - notvisible, 1- visible'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `share_table`
--

CREATE TABLE `share_table` (
  `sid` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `video_id` int(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `share_table`
--

INSERT INTO `share_table` (`sid`, `user_id`, `video_id`, `status`) VALUES
(21, 138, 62, 1),
(22, 107, 61, 1),
(23, 141, 63, 1),
(24, 106, 56, 1),
(25, 141, 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subscirption_list`
--

CREATE TABLE `subscirption_list` (
  `subsciption_id` int(255) NOT NULL,
  `subscription_channel_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `subscirption_list`
--

INSERT INTO `subscirption_list` (`subsciption_id`, `subscription_channel_id`, `user_id`) VALUES
(34, 2, 106),
(36, 2, 141),
(38, 2, 143),
(39, 2, 146),
(40, 2, 174);

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `user_id` int(255) NOT NULL,
  `first_name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `email_id` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `eosio_account_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `phone_no` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birth_date` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_video_choice` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_profile_picture` text COLLATE utf8_unicode_ci DEFAULT 'https://goviddo.com/app/images/go.png',
  `notification_token` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `register_as_advisor` tinyint(4) NOT NULL DEFAULT 0,
  `register_as_producer` tinyint(4) NOT NULL DEFAULT 0,
  `registration_date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`user_id`, `first_name`, `last_name`, `email_id`, `eosio_account_name`, `gender`, `password`, `phone_no`, `birth_date`, `address`, `country`, `user_video_choice`, `user_profile_picture`, `notification_token`, `register_as_advisor`, `register_as_producer`, `registration_date`, `status`) VALUES
(106, 'Imran', 'Mulani', 'imran@gmail.com', 'mulaniimran2', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-03-19 09:27:05', 1),
(107, 'ajay', 'panchal', 'ajay@gmail.com', 'ajay98765432', NULL, 'test123', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-03-19 18:45:34', 1),
(108, 'Nuzha', 'Chanda', 'nuzhachanda@gmail.com', '1234567', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-03-25 07:24:21', 1),
(112, 'shveta', 'khandekar', 'sk@mailinator.com', 'shvetashveta', NULL, 'test123', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-13 12:39:48', 1),
(114, 'shveta', 'khandekar', 'sk3@mailinator.com', 'shvetatestbb', NULL, 'test1234', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-13 13:52:30', 1),
(115, 'shveta', 'khandekar', 'sk5@mailinator.com', 'shvetatestdd', NULL, 'test1234', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-13 13:56:06', 1),
(116, 'shveta', 'khandekar', 'sk6@mailinator.com', 'shvetatestee', NULL, 'test1234', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-13 15:02:38', 1),
(119, 'Shveta', 'Khandekar', 'sk7@mailinator.com', 'shvetatestff', NULL, 'test1234', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-15 13:08:04', 1),
(138, 'Ajit', 'Sabnis', 'ajitnetwork@gmail.com', 'ajitsabnis12', NULL, 'ajit@goviddo', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-04-28 18:11:56', 1),
(139, 'Chitrarth', 'Lav', 'chitrarth@goviddo.com', 'testnetgmech', NULL, 'Renau!t512GoViddo', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-05-19 12:18:21', 1),
(140, 'Roman', 'Weier', 'romanweier70@gmail.com', 'weier 124382', NULL, 'Roman123', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-06-13 19:03:42', 1),
(141, 'pratik', 'shelar', 'pratik@goviddo.com', 'pratikshelar', NULL, 'pratikshelar', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-06-19 21:01:21', 1),
(142, 'Imran', 'Mulani', 'mulaniimran27@gmail.com', 'imranpower12', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-06-20 03:55:40', 1),
(143, 'Akshay', 'Garje', 'ashgarje10@gmail.com', 'Akshay Garje', NULL, 'Aa@12345', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/appimg/ic_launcher_go_app.png', NULL, 0, 0, '2019-06-20 11:50:16', 1),
(174, 'Neha ', 'Mulani', 'nehalmulani2414@gmail.com', 'nehanehaneha', NULL, 'neha2414', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-06-26 10:26:40', 1),
(175, 'Imran', 'Mulani', 'imran97@gmail.com', 'goviddotest1', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 09:22:07', 1),
(176, 'imran', 'Mulani', 'imrantest1@gmail.com', 'goviddotest1', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 09:51:50', 1),
(177, 'imran', 'Mulani', 'imrantest2@gmail.com', 'goviddotest2', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 09:53:44', 1),
(178, 'imran', 'Mulani', 'imrantest3@gmail.com', 'goviddotest3', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 09:54:48', 1),
(179, 'Imran', 'Mulani', 'imrantest4@gmail.com', 'goviddotest4', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:00:43', 1),
(180, 'Imran', 'Mulani', 'imrantest5@gmail.com', 'goviddotest5', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:01:53', 1),
(181, 'Imran', 'Mulani', 'imrantest6@gmail.com', 'goviddotest6', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:05:22', 1),
(182, 'Imran', 'Mulani', 'imrantest7@gmail.com', 'goviddotest7', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:16:34', 1),
(183, 'Imran', 'Mulani', 'imrantest8@gmail.com', 'goviddotest8', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:17:48', 1),
(184, 'Imran', 'Mulani', 'imrantest9@gmail.com', 'goviddotest9', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:29:46', 1),
(185, 'Imran', 'Mulani', 'imrantest10@gmail.com', 'goviddotes10', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:34:45', 1),
(186, 'Imran', 'Mulani', 'imrantest11@gmail.com', 'goviddotes11', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:37:50', 1),
(187, 'Imran', 'Mulani', 'imrantest12@gmail.com', 'goviddotes12', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:44:51', 1),
(188, 'Imran', 'Mulani', 'imrantest13@gmail.com', 'goviddotes13', NULL, '1234567', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-07 10:52:44', 1),
(189, 'Neha', 'Mulani', 'nehamulani2414@gmail.con', 'nehamulani24', NULL, 'neha2414', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-22 06:28:24', 1),
(190, 'pramod', 'sinare', 'pramod.sinare@outlook.com', 'dnyandeo1234', NULL, '12345678', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-23 08:43:51', 1),
(191, 'Shahid', 'Mulani', 'nehasmulani@gmail.con', 'shahidneha12', NULL, 'shahid123', NULL, NULL, NULL, NULL, NULL, 'https://goviddo.com/app/images/go.png', NULL, 0, 0, '2019-07-23 08:48:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `video_comments_table`
--

CREATE TABLE `video_comments_table` (
  `comment_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `video_id` int(255) NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_comments_table`
--

INSERT INTO `video_comments_table` (`comment_id`, `user_id`, `video_id`, `comment`) VALUES
(14, 106, 55, 'nice idea'),
(15, 106, 57, 'in gy'),
(16, 138, 57, 'best ...'),
(17, 141, 63, 'very good'),
(18, 143, 57, 'kadakk bhau'),
(19, 143, 63, 'Pratik Sir kadakk tribute ........pn application kadhi expand honar'),
(20, 146, 61, 'nice video'),
(21, 141, 68, 'hi goviddo');

-- --------------------------------------------------------

--
-- Table structure for table `video_genere_table`
--

CREATE TABLE `video_genere_table` (
  `video_genere_id` int(255) NOT NULL,
  `video_genere_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_genere_table`
--

INSERT INTO `video_genere_table` (`video_genere_id`, `video_genere_name`, `status`) VALUES
(1, 'Movies', 1),
(2, 'Series', 1),
(3, 'Documentries', 1),
(4, 'Originals', 1);

-- --------------------------------------------------------

--
-- Table structure for table `video_like_table`
--

CREATE TABLE `video_like_table` (
  `video_like_id` int(255) NOT NULL,
  `video_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `like_status` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_like_table`
--

INSERT INTO `video_like_table` (`video_like_id`, `video_id`, `user_id`, `like_status`) VALUES
(24, 55, 107, 0),
(25, 61, 107, 0),
(26, 57, 140, 1),
(27, 65, 140, 1),
(28, 61, 140, 1),
(29, 55, 140, 1),
(30, 55, 106, 1),
(31, 63, 141, 1),
(32, 57, 141, 1),
(33, 61, 141, 1),
(34, 10, 141, 1),
(35, 10, 146, 1),
(36, 63, 146, 1),
(37, 62, 141, 1),
(38, 68, 141, 1);

-- --------------------------------------------------------

--
-- Table structure for table `video_table`
--

CREATE TABLE `video_table` (
  `video_id` int(255) NOT NULL,
  `show_name` text COLLATE utf8_unicode_ci NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `director` text COLLATE utf8_unicode_ci NOT NULL,
  `duration` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `home_image` text COLLATE utf8_unicode_ci NOT NULL,
  `banner_image` text COLLATE utf8_unicode_ci NOT NULL,
  `producer` text COLLATE utf8_unicode_ci NOT NULL,
  `shorten_text` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `show_on_home_page` tinyint(4) NOT NULL,
  `slug` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `starring` text COLLATE utf8_unicode_ci NOT NULL,
  `vdo_cipher_id` text COLLATE utf8_unicode_ci NOT NULL,
  `jw_video_id` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `video_tags` text COLLATE utf8_unicode_ci NOT NULL,
  `video_description` text COLLATE utf8_unicode_ci NOT NULL,
  `video_genere_type` int(255) NOT NULL,
  `series_id` int(255) DEFAULT NULL,
  `season_id` int(255) DEFAULT NULL,
  `video_channel_name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `production_name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `video_views_count` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `video_earnings` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_table`
--

INSERT INTO `video_table` (`video_id`, `show_name`, `created_date`, `director`, `duration`, `home_image`, `banner_image`, `producer`, `shorten_text`, `show_on_home_page`, `slug`, `starring`, `vdo_cipher_id`, `jw_video_id`, `video_tags`, `video_description`, `video_genere_type`, `series_id`, `season_id`, `video_channel_name`, `production_name`, `video_views_count`, `video_earnings`, `status`) VALUES
(7, 'FU 2ND TRAILER', '2019-03-19 09:48:49', 'Mahesh Manjrekar', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/42443d8-fu_poster.jpg', '', 'Abhay Gadgil, Mahesh Patel, Dinesh Kirodian, Bhushan Kumar, Krishan Kumar', '', 4, '', 'Aakash Thosar, Satya Manjrekar, Boman Irani, Sachin Khedekar, Vaidehi Parshurami, Sanskruti Balgude', '380a4e044555c33c148047c610d8ddd8', NULL, '', 'Friendship Unlimited FU is a story of 4 friends showcasing today\'s young generation\'s languages and lifestyle. FU is full of youthful energy and music portraying about a group of college friends who want to live their life on their own terms.', 4, NULL, NULL, 'GoViddo', '', '0', '0', 0),
(8, 'FU TRAILER', '2019-03-19 09:48:49', 'Mahesh Manjrekar', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/42443d8-fu_poster.jpg', 'https://goviddo.com/VideoContentsImages/aa.jpg', 'Abhay Gadgil, Mahesh Patel, Dinesh Kirodian, Bhushan Kumar, Krishan Kumar', '', 4, '', 'Aakash Thosar, Satya Manjrekar, Boman Irani, Sachin Khedekar, Vaidehi Parshurami, Sanskruti Balgude', '4b14d2552425c0dda8a32ce68655276c', NULL, '', 'Friendship Unlimited FU is a story of 4 friends showcasing today\'s young generation\'s languages and lifestyle. FU is full of youthful energy and music portraying about a group of college friends who want to live their life on their own terms.', 4, NULL, NULL, 'GoViddo', '', '0', '0', 0),
(9, 'Rajasinhgam', '2019-03-19 09:48:49', 'V. Vijyendra Prasad', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/53c97f3-300x480.png', '', 'Akkineni Nagarjuna, Sneha, Swetha Menon', '', 4, '', '', '50a6ad17488c4b9a91a2a27e1c51fa95', NULL, '', 'Rajanna (Akkineni Nagarjuna) is a freedom fighter, who fights against the British. After the freedom struggle, jameendars and some of the rich men, want to enslave people. Rajanna vows to abolish slavery in the country. Lakshmi (Sneha) is a woman who is saved by Rajanna from poverty and he marries her. They have a child named Ponniamma. In his battle to against slavery, Rajanna sacrifices his life for the people. Even though he is dead, his songs posthumously inspire the people to be brave enough to fight against slavery and Jameendhari. Doraiamma (Swetha Menon) treats people like dirt and tortures them. She wants to kill Ponniamma. Ponniamma escapes from the village and walks all the way to Delhi, to try to meet Prime Minister Jawaharlal Nehru to make him aware of the horrendous situation in her village. In Delhi, she participates in a song competition and wins. Pandit Nehru appreciates her and listens to her story. Upon hearing the sad state of affairs, he takes immediate action to take Duraiamma into police custody. People are now truly happy and feel the real freedom.', 3, NULL, NULL, 'GoViddo', '', '0', '0', 0),
(10, 'Kaul', '2019-03-19 09:48:49', 'Aadish Keluskar', '60', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/87f5298-kaul_new_300x450.png', 'Rohit Kokate, Deepak Parab, Makrand Kajrekar, Saudamini Tikle, Avani Kajrekar', '', 4, '', 'Chin2 Singh, Uma Mahesh Keluskar', '4ed41cbdc4d940deb094e1dad6c0f1a7', NULL, '', 'An unknown man, commits a murder, leaves Mumbai, becomes a village schoolteacher,witnesses the Extraordinary, goes on a trip, to the Unknown.', 1, NULL, NULL, 'GoViddo', '', '0', '0', 1),
(11, 'Dhyani-Mani', '2019-03-19 09:48:49', 'Chandrakant Kulkarni', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/f41b0eb-%5E35f6f9a985ac2d51ed1157d0e9103e900f6f39e6d96c82d6c7%5Epimgpsh_fullsize_distr.png', 'https://goviddo.com/VideoContentsImages/DHdxjD7xx7RwF.480.jpeghttps://www.indianmoviefriend.com//uploads/movie_img/banner/original/4cfad93-%5E0008448668613df8998a8c1854eeb596767a599bc1e0697866%5Epimgpsh_fullsize_distr.png', 'Ashwini Bhave, Abhijeet Khandekar', '', 4, '', 'Aniruddh Deshpande, Medha Manjrekar', 'cd43679db689495b8966f2a09de89913', NULL, '', 'What is the secret that has forced Sadanand and Shalan to stay away from the city, with their son Mohit. Why is Shalan so obsessive about the way her son Mohit is being raised. Yes they are happy in their own world, but something sinister has always lurked around the corner. The arrival of Sameer - A family friend and his wife into their house creates an upheaval, they never imagined. What is this secret Sadanand, Shalan and Mohit hold?&nbsp;DHYANIMANI a psychological thriller has all the answers.', 1, NULL, NULL, 'Great Maratha Entertainment', 'Great Maratha Entertainment', '0', '0', 0),
(12, 'Natsamrat Trailer', '2019-03-19 09:48:49', 'Mahesh Manjrekar', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/d1d4fc8-300x480.png', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/e2ee40b-natsamratnew.jpg', 'Vishwas Joshi, Nana Patekar', '', 4, '', 'Nana Patekar, Medha Manjrekar, Vikram Gokhale, Mrunmayee Deshpande, Sunil Barve, Ajit Parab', '1dd660913e2ed3d909069ea78a32a74e', NULL, '', 'The film is about renowned Shakespearean actor, Ganpat Ramchandra Belwalkar (Nana Patekar), who has retired from the stage with the honorific Natsamrat (King of the Theater). He does not cope with retirement gracefully as his wife, Kaveri Ganpat Belwalkar/Sarkar (Medha Manjrekar), observes &quot;you have brought the theater home&quot;. As retirement unfolds with his wife and two married children, a son and a daughter, he reminisces about the various roles he has played in the past - among them Hamlet, Othello, Julius Caesar - but he fails to recognize his life deteriorating into a King Lear tragedy right before his eyes.', 3, NULL, NULL, 'Zee Studios', 'Zee Studios', '0', '0', 0),
(13, 'Rajasinhgam Trailer', '2019-03-19 09:48:49', 'V. Vijyendra Prasad', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/53c97f3-300x480.png', '', 'Akkineni Nagarjuna', '', 4, '', 'Akkineni Nagarjuna, Sneha, Swetha Menon', 'd046ef1fe1d4c00e9e9316098c17306f', NULL, '', 'Rajanna (Akkineni Nagarjuna) is a freedom fighter, who fights against the British. After the freedom struggle, jameendars and some of the rich men, want to enslave people. Rajanna vows to abolish slavery in the country. Lakshmi (Sneha) is a woman who is saved by Rajanna from poverty and he marries her. They have a child named Ponniamma. In his battle to against slavery, Rajanna sacrifices his life for the people. Even though he is dead, his songs posthumously inspire the people to be brave enough to fight against slavery and Jameendhari. Doraiamma (Swetha Menon) treats people like dirt and tortures them. She wants to kill Ponniamma. Ponniamma escapes from the village and walks all the way to Delhi, to try to meet Prime Minister Jawaharlal Nehru to make him aware of the horrendous situation in her village. In Delhi, she participates in a song competition and wins. Pandit Nehru appreciates her and listens to her story. Upon hearing the sad state of affairs, he takes immediate action to take Duraiamma into police custody. People are now truly happy and feel the real freedom.', 4, NULL, NULL, 'GoViddo', '', '0', '0', 0),
(14, 'IMF Garja Maharashtra  Majha', '2019-03-19 09:48:49', 'Pratik Shelar', '60', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/71ea32c-garja_maharashtra_majha_poster.jpg', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/da3f6bb-garja_maharashtra_majha.jpg', 'Indian Movie Friend', 'garajamaha', 4, 'garajamaha', 'Ajit Parab, Anand Ingale, Sandeep Pathak, Vidyadhar Joshi, Uday Nene, Bhalchandra Kadam, Ajit Kelkar, Sunil Barve, Mahesh Manjrekar and Vikas Patil, Swapnil Bandodkar, Prarthana Behere, Vaishali Samant, Avadhoot Gupte & Sonali Kulkarni.', 'cf1fc11828714067af1f53aa31574dae', NULL, 'IMF, Garaja Maharashtra Maza', 'Garja Maharashtra Maza 2016 was a historic event held at Indigo at The O2 on Sun, 22 May 2016. It was the biggest overseas Maharashtrian cultural event ever held.', 4, NULL, NULL, 'Indian Movie Friend', 'Indian Movie Friend', '0', '0', 0),
(55, 'GoViddo Content\r\n', '2019-04-20 10:27:00', 'Pratik Shelar\r\n', '120', 'https://goviddo.com/appimg/2s.png', '', '', '', 0, '', 'Pratik Shelar', 'e1c4c01db875415190b22d3aa5cc8986', NULL, '', 'GoViddo MVP', 4, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(56, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '2019-04-20 10:29:50', 'Pratik Shelar', '120', 'https://goviddo.com/appimg/1s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', '540a9b88707c488c933cd41272892de7', NULL, '', 'GoViddo Team Introduction', 4, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '2019-04-20 10:36:00', 'Pratik Shelar', '3600', 'https://goviddo.com/appimg/3s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', 'bc4659dbf36648a8ae5560e3bd3ccbbe', NULL, '', 'GoViddo Team Intoduction', 4, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(58, 'The_Eco_System', '2019-04-20 10:38:41', 'Pratik Shelar', '30', 'https://goviddo.com/appimg/5s.png', '', 'Pratik Shelar', '', 0, '', '', 'd6975e8e2f5a48d89bdcb0c66d4c1d19', NULL, '', 'GoViddo Working in Animated Form', 4, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(60, 'IMF Ek Vaitaglela Labharthi', '2019-04-20 10:49:38', 'John Varghese', '3000', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/f141d95-adi_koottamani.jpg', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/4a9143c-maxresdefault.jpg', 'Vijay Babu,Sandra Thomas', '', 0, '', '', '79bb00931f52b10d161d757c97114edb', NULL, '', '', 4, NULL, NULL, 'Indian Movie Friend', 'Indian Movie Friend', '', '', 0),
(61, 'Rosebush_Shortfilm.mp4', '2019-04-20 10:56:14', 'Jayprad Desai', '4200', 'https://goviddo.com/appimg/4s.png', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/1a1aee4-indian_movie_friend_movie_poster_2_1280x720.png', 'Gajanan Enterprises', '', 0, '', 'Sunil Shende, Neelkanti Patekar', '66716a1da21fe0505670e784a343ba21', NULL, '', 'A middle aged couple comes to terms with their life and relationship on the first death anniversary of their 22 year old son.', 1, NULL, NULL, 'GoViddo', 'Gajanan Enterprises', '', '', 1),
(62, 'Cycle Short Film', '2019-04-20 12:03:27', 'Harshal Wadkar', '60000', 'https://goviddo.com/appimg/5s.png', '', 'Upendra Deglurkar and Dr. Shireesh Sathe', '', 0, '', 'Prasad More, Suhas Vedpathak', 'ecdd8a81b82e9bc43a92b1486c7cd287', NULL, '', 'One fine day, Raghunath Kale, English teacher of a school, breaks out his routine financial planning and buys a cycle for his son and completes his long lasting wish. Everything goes well but after an accidental death of his student on cycle, his joy of buying the cycle begins to turn into nightmare.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(63, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/045375e-indian_movie_friend_movie_poster_1_1280x720.png', 'GoViddo', '', 0, '', 'Pratik Shelar', '32681eb69ae0c01277c67a13c7025c35', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 4, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(65, 'Bashar_Nawaz_Documentry', '2019-04-20 12:23:29', 'Jayprad Desai', '3600', 'https://goviddo.com/appimg/3s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/d241a3a-indian_movie_friend_movie_poster_3_1280x720.png', 'Nilesh Raut', '', 0, '', 'Pooja Gaikwad', 'ee978827783cce400cacc76e7a18c2e8', NULL, '', 'Khwab Zindagi Aur Main Bashar Nawaz or ENG TITLE Bashar Nawaz Through the eyes of a poet looks at life and times through the eyes of a poet. Bashar Nawaz has been an eminent but rather unsung Urdu Poet. His ghazals and poems have been included in almost all the anthologies of best Urdu poetry in modern times. His ghazals have been used in a few films like Bazaar and also sung by the likes of Mehdi Hasan, Ghulam Ali in their private albums. However, Bashar Nawaz has always shied away from the limelight and lived a secluded life in Aurangabad, his place of birth, amidst the people. His poetry and views on life are distinguished by his undying love for humanity. The film tries to chronicle life and times through the eyes of a poet. Hence Khwab, zindagi aur main. Elements of documentary and fiction are fused together.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(66, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/1s.png', '', 'GoViddo', '', 0, '', 'Pratik Shelar', '2ac3559eb57e4ce5a6e5424c566114fa', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(67, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/2s.png', '', 'GoViddo', '', 0, '', 'Pratik Shelar', '90331ee0a047401f95706cf3ef0c21f1', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(68, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/3s.png', '', 'GoViddo', '', 0, '', 'Pratik Shelar', '3ef6256db3fc4cdb8d94d3cafa870c08', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(69, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/5s.png', '', 'GoViddo', '', 0, '', 'Pratik Shelar', '2ac3559eb57e4ce5a6e5424c566114fa', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 1, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(70, 'Kaul', '2019-03-19 09:48:49', 'Aadish Keluskar', '60', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/87f5298-kaul_new_300x450.png', 'Rohit Kokate, Deepak Parab, Makrand Kajrekar, Saudamini Tikle, Avani Kajrekar', '', 4, '', 'Chin2 Singh, Uma Mahesh Keluskar', '4ed41cbdc4d940deb094e1dad6c0f1a7', NULL, '', 'An unknown man, commits a murder, leaves Mumbai, becomes a village schoolteacher,witnesses the Extraordinary, goes on a trip, to the Unknown.', 2, NULL, NULL, 'GoViddo', '', '0', '0', 1),
(71, 'GoViddo Content\r\n', '2019-04-20 10:27:00', 'Pratik Shelar\r\n', '120', 'https://goviddo.com/appimg/2s.png', '', '', '', 0, '', 'Pratik Shelar', 'e1c4c01db875415190b22d3aa5cc8986', NULL, '', 'GoViddo MVP', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(72, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '2019-04-20 10:29:50', 'Pratik Shelar', '120', 'https://goviddo.com/appimg/1s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', '540a9b88707c488c933cd41272892de7', NULL, '', 'GoViddo Team Introduction', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(73, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '2019-04-20 10:36:00', 'Pratik Shelar', '3600', 'https://goviddo.com/appimg/3s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', 'bc4659dbf36648a8ae5560e3bd3ccbbe', NULL, '', 'GoViddo Team Intoduction', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(74, 'The_Eco_System', '2019-04-20 10:38:41', 'Pratik Shelar', '30', 'https://goviddo.com/appimg/5s.png', '', 'Pratik Shelar', '', 0, '', '', 'd6975e8e2f5a48d89bdcb0c66d4c1d19', NULL, '', 'GoViddo Working in Animated Form', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(75, 'Cycle Short Film', '2019-04-20 12:03:27', 'Harshal Wadkar', '60000', 'https://goviddo.com/appimg/5s.png', '', 'Upendra Deglurkar and Dr. Shireesh Sathe', '', 0, '', 'Prasad More, Suhas Vedpathak', 'ecdd8a81b82e9bc43a92b1486c7cd287', NULL, '', 'One fine day, Raghunath Kale, English teacher of a school, breaks out his routine financial planning and buys a cycle for his son and completes his long lasting wish. Everything goes well but after an accidental death of his student on cycle, his joy of buying the cycle begins to turn into nightmare.', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(76, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/045375e-indian_movie_friend_movie_poster_1_1280x720.png', 'GoViddo', '', 0, '', 'Pratik Shelar', '32681eb69ae0c01277c67a13c7025c35', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(77, 'Bashar_Nawaz_Documentry', '2019-04-20 12:23:29', 'Jayprad Desai', '3600', 'https://goviddo.com/appimg/3s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/d241a3a-indian_movie_friend_movie_poster_3_1280x720.png', 'Nilesh Raut', '', 0, '', 'Pooja Gaikwad', 'ee978827783cce400cacc76e7a18c2e8', NULL, '', 'Khwab Zindagi Aur Main Bashar Nawaz or ENG TITLE Bashar Nawaz Through the eyes of a poet looks at life and times through the eyes of a poet. Bashar Nawaz has been an eminent but rather unsung Urdu Poet. His ghazals and poems have been included in almost all the anthologies of best Urdu poetry in modern times. His ghazals have been used in a few films like Bazaar and also sung by the likes of Mehdi Hasan, Ghulam Ali in their private albums. However, Bashar Nawaz has always shied away from the limelight and lived a secluded life in Aurangabad, his place of birth, amidst the people. His poetry and views on life are distinguished by his undying love for humanity. The film tries to chronicle life and times through the eyes of a poet. Hence Khwab, zindagi aur main. Elements of documentary and fiction are fused together.', 2, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(78, 'Kaul', '2019-03-19 09:48:49', 'Aadish Keluskar', '60', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/home/size/87f5298-kaul_new_300x450.png', 'Rohit Kokate, Deepak Parab, Makrand Kajrekar, Saudamini Tikle, Avani Kajrekar', '', 4, '', 'Chin2 Singh, Uma Mahesh Keluskar', '4ed41cbdc4d940deb094e1dad6c0f1a7', NULL, '', 'An unknown man, commits a murder, leaves Mumbai, becomes a village schoolteacher,witnesses the Extraordinary, goes on a trip, to the Unknown.', 3, NULL, NULL, 'GoViddo', '', '0', '0', 1),
(79, 'GoViddo Content\r\n', '2019-04-20 10:27:00', 'Pratik Shelar\r\n', '120', 'https://goviddo.com/appimg/2s.png', '', '', '', 0, '', 'Pratik Shelar', 'e1c4c01db875415190b22d3aa5cc8986', NULL, '', 'GoViddo MVP', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(80, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '2019-04-20 10:29:50', 'Pratik Shelar', '120', 'https://goviddo.com/appimg/1s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', '540a9b88707c488c933cd41272892de7', NULL, '', 'GoViddo Team Introduction', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(81, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '2019-04-20 10:36:00', 'Pratik Shelar', '3600', 'https://goviddo.com/appimg/3s.png', '', 'Pratik Shelar', '', 0, '', 'Pratik Shelar', 'bc4659dbf36648a8ae5560e3bd3ccbbe', NULL, '', 'GoViddo Team Intoduction', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(82, 'The_Eco_System', '2019-04-20 10:38:41', 'Pratik Shelar', '30', 'https://goviddo.com/appimg/5s.png', '', 'Pratik Shelar', '', 0, '', '', 'd6975e8e2f5a48d89bdcb0c66d4c1d19', NULL, '', 'GoViddo Working in Animated Form', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(83, 'Rosebush_Shortfilm.mp4', '2019-04-20 10:56:14', 'Jayprad Desai', '4200', 'https://goviddo.com/appimg/4s.png', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/1a1aee4-indian_movie_friend_movie_poster_2_1280x720.png', 'Gajanan Enterprises', '', 0, '', 'Sunil Shende, Neelkanti Patekar', '66716a1da21fe0505670e784a343ba21', NULL, '', 'A middle aged couple comes to terms with their life and relationship on the first death anniversary of their 22 year old son.', 3, NULL, NULL, 'GoViddo', 'Gajanan Enterprises', '', '', 1),
(84, 'Cycle Short Film', '2019-04-20 12:03:27', 'Harshal Wadkar', '60000', 'https://goviddo.com/appimg/5s.png', '', 'Upendra Deglurkar and Dr. Shireesh Sathe', '', 0, '', 'Prasad More, Suhas Vedpathak', 'ecdd8a81b82e9bc43a92b1486c7cd287', NULL, '', 'One fine day, Raghunath Kale, English teacher of a school, breaks out his routine financial planning and buys a cycle for his son and completes his long lasting wish. Everything goes well but after an accidental death of his student on cycle, his joy of buying the cycle begins to turn into nightmare.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(85, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/045375e-indian_movie_friend_movie_poster_1_1280x720.png', 'GoViddo', '', 0, '', 'Pratik Shelar', '32681eb69ae0c01277c67a13c7025c35', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(86, 'Bashar_Nawaz_Documentry', '2019-04-20 12:23:29', 'Jayprad Desai', '3600', 'https://goviddo.com/appimg/3s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/d241a3a-indian_movie_friend_movie_poster_3_1280x720.png', 'Nilesh Raut', '', 0, '', 'Pooja Gaikwad', 'ee978827783cce400cacc76e7a18c2e8', NULL, '', 'Khwab Zindagi Aur Main Bashar Nawaz or ENG TITLE Bashar Nawaz Through the eyes of a poet looks at life and times through the eyes of a poet. Bashar Nawaz has been an eminent but rather unsung Urdu Poet. His ghazals and poems have been included in almost all the anthologies of best Urdu poetry in modern times. His ghazals have been used in a few films like Bazaar and also sung by the likes of Mehdi Hasan, Ghulam Ali in their private albums. However, Bashar Nawaz has always shied away from the limelight and lived a secluded life in Aurangabad, his place of birth, amidst the people. His poetry and views on life are distinguished by his undying love for humanity. The film tries to chronicle life and times through the eyes of a poet. Hence Khwab, zindagi aur main. Elements of documentary and fiction are fused together.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(87, 'Rosebush_Shortfilm.mp4', '2019-04-20 10:56:14', 'Jayprad Desai', '4200', 'https://goviddo.com/appimg/4s.png', 'https://www.indianmoviefriend.com//uploads/movie_img/banner/original/1a1aee4-indian_movie_friend_movie_poster_2_1280x720.png', 'Gajanan Enterprises', '', 0, '', 'Sunil Shende, Neelkanti Patekar', '66716a1da21fe0505670e784a343ba21', NULL, '', 'A middle aged couple comes to terms with their life and relationship on the first death anniversary of their 22 year old son.', 3, NULL, NULL, 'GoViddo', 'Gajanan Enterprises', '', '', 1),
(88, 'Cycle Short Film', '2019-04-20 12:03:27', 'Harshal Wadkar', '60000', 'https://goviddo.com/appimg/5s.png', '', 'Upendra Deglurkar and Dr. Shireesh Sathe', '', 0, '', 'Prasad More, Suhas Vedpathak', 'ecdd8a81b82e9bc43a92b1486c7cd287', NULL, '', 'One fine day, Raghunath Kale, English teacher of a school, breaks out his routine financial planning and buys a cycle for his son and completes his long lasting wish. Everything goes well but after an accidental death of his student on cycle, his joy of buying the cycle begins to turn into nightmare.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(89, 'Yahoo', '2019-04-20 12:09:58', 'Gorakshanath Khande', '', 'https://goviddo.com/appimg/1s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/045375e-indian_movie_friend_movie_poster_1_1280x720.png', 'GoViddo', '', 0, '', 'Pratik Shelar', '32681eb69ae0c01277c67a13c7025c35', NULL, '', 'This is a recreation of the iconic song Yahoo! from the movie Junglee. A tribute to the legendary actor Shammi Kapoor from his diehard fans.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1),
(90, 'Bashar_Nawaz_Documentry', '2019-04-20 12:23:29', 'Jayprad Desai', '3600', 'https://goviddo.com/appimg/3s.png', 'https://www.indianmoviefriend.com/uploads/movie_img/banner/original/d241a3a-indian_movie_friend_movie_poster_3_1280x720.png', 'Nilesh Raut', '', 0, '', 'Pooja Gaikwad', 'ee978827783cce400cacc76e7a18c2e8', NULL, '', 'Khwab Zindagi Aur Main Bashar Nawaz or ENG TITLE Bashar Nawaz Through the eyes of a poet looks at life and times through the eyes of a poet. Bashar Nawaz has been an eminent but rather unsung Urdu Poet. His ghazals and poems have been included in almost all the anthologies of best Urdu poetry in modern times. His ghazals have been used in a few films like Bazaar and also sung by the likes of Mehdi Hasan, Ghulam Ali in their private albums. However, Bashar Nawaz has always shied away from the limelight and lived a secluded life in Aurangabad, his place of birth, amidst the people. His poetry and views on life are distinguished by his undying love for humanity. The film tries to chronicle life and times through the eyes of a poet. Hence Khwab, zindagi aur main. Elements of documentary and fiction are fused together.', 3, NULL, NULL, 'GoViddo', 'GoViddo', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `video_transactions`
--

CREATE TABLE `video_transactions` (
  `transaction_id` int(255) NOT NULL,
  `transaction_amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `transaction_user_id` int(255) NOT NULL,
  `transaction_memo` text COLLATE utf8_unicode_ci NOT NULL,
  `transaction_status` tinyint(4) NOT NULL DEFAULT 1,
  `transaction_from` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `transaction_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_transactions`
--

INSERT INTO `video_transactions` (`transaction_id`, `transaction_amount`, `transaction_user_id`, `transaction_memo`, `transaction_status`, `transaction_from`, `transaction_date`) VALUES
(21, '0.01 GOV', 121, 'Token for video GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', 1, 'hellogoviddo', '2019-04-25 08:23:45'),
(22, '0.01 GOV', 121, 'Token for video Yahoo', 1, 'hellogoviddo', '2019-04-25 08:26:30'),
(23, '0.01 GOV', 121, 'Token for video id = GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02,video Yahoo', 1, 'hellogoviddo', '2019-04-25 08:27:16'),
(24, '0.01 GOV', 121, 'Token for video GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02, video GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04, video GoViddo Content\r\n, video Yahoo, video Yahoo, video Bashar_Nawaz_Documentry, video Cycle Short Film, video Rosebush_Shortfilm.mp4, video Kaul, video Yahoo', 1, 'hellogoviddo', '2019-04-25 08:33:06'),
(25, '0.01 GOV', 121, 'Token for unique video view for videos GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02, GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04, GoViddo Content\r\n, Yahoo, Yahoo, Bashar_Nawaz_Documentry, Cycle Short Film, Rosebush_Shortfilm.mp4, Kaul, Yahoo', 1, 'hellogoviddo', '2019-04-25 08:36:00'),
(26, '0.01 GOV', 138, 'For Registration of New User', 1, 'hellogoviddo', '2019-04-28 18:11:58'),
(27, '0.01 GOV', 107, '2 videos upvoting', 1, 'hellogoviddo', '2019-05-02 10:12:16'),
(28, '0.01 GOV', 139, 'For Registration of New User', 1, 'hellogoviddo', '2019-05-19 12:18:22'),
(29, '0.01 GOV', 140, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-13 19:03:43'),
(30, '0.01 GOV', 140, '2 videos upvoting', 1, 'hellogoviddo', '2019-06-13 19:56:26'),
(31, '0.01 GOV', 140, '2 videos upvoting', 1, 'hellogoviddo', '2019-06-14 05:04:51'),
(32, '0.01 GOV', 141, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-19 21:01:22'),
(33, '0.01 GOV', 142, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-20 03:55:41'),
(34, '0.01 GOV', 143, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-20 11:50:17'),
(35, '0.01 GOV', 141, '2 videos upvoting', 1, 'hellogoviddo', '2019-06-20 23:39:23'),
(36, '0.01 GOV', 141, '2 videos upvoting', 1, 'hellogoviddo', '2019-06-21 13:25:10'),
(37, '0.01 GOV', 144, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 06:30:05'),
(38, '0.01 GOV', 145, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 06:30:19'),
(39, '0.01 GOV', 146, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 06:38:45'),
(40, '0.01 GOV', 147, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 06:43:13'),
(41, '0.01 GOV', 146, '2 videos upvoting', 1, 'hellogoviddo', '2019-06-26 06:58:55'),
(42, '0.01 GOV', 148, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 07:30:55'),
(43, '0.01 GOV', 149, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 07:32:58'),
(44, '0.01 GOV', 150, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 07:36:17'),
(45, '0.01 GOV', 151, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 08:46:44'),
(46, '0.01 GOV', 152, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 08:47:09'),
(47, '0.01 GOV', 153, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 08:48:26'),
(48, '0.01 GOV', 154, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:04:56'),
(49, '0.01 GOV', 155, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:06:38'),
(50, '0.01 GOV', 156, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:11:17'),
(51, '0.01 GOV', 157, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:19:40'),
(52, '0.01 GOV', 158, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:24:24'),
(53, '0.01 GOV', 159, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:35:12'),
(54, '0.01 GOV', 160, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:41:40'),
(55, '0.01 GOV', 161, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:42:27'),
(56, '0.01 GOV', 162, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:44:12'),
(57, '0.01 GOV', 164, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:47:00'),
(58, '0.01 GOV', 165, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:47:39'),
(59, '0.01 GOV', 167, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 09:51:53'),
(60, '0.01 GOV', 169, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 10:01:04'),
(61, '0.01 GOV', 171, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 10:04:51'),
(62, '0.01 GOV', 172, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 10:09:36'),
(63, '0.01 GOV', 173, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 10:10:53'),
(64, '0.01 GOV', 174, 'For Registration of New User', 1, 'hellogoviddo', '2019-06-26 10:26:41'),
(65, '0.01 GOV', 175, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 09:22:08'),
(66, '0.01 GOV', 176, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 09:51:51'),
(67, '0.01 GOV', 177, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 09:53:44'),
(68, '0.01 GOV', 178, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 09:54:49'),
(69, '0.01 GOV', 179, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:00:44'),
(70, '0.01 GOV', 180, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:01:54'),
(71, '0.01 GOV', 181, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:05:22'),
(72, '0.01 GOV', 182, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:16:34'),
(73, '0.01 GOV', 183, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:17:48'),
(74, '0.01 GOV', 184, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:29:47'),
(75, '0.01 GOV', 185, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:34:46'),
(76, '0.01 GOV', 186, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:37:51'),
(77, '0.01 GOV', 187, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:44:52'),
(78, '0.01 GOV', 188, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-07 10:52:45'),
(79, '0.01 GOV', 141, '2 videos upvoting', 1, 'hellogoviddo', '2019-07-10 08:52:32'),
(80, '0.01 GOV', 189, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-22 06:28:24'),
(81, '0.01 GOV', 190, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-23 08:43:52'),
(82, '0.01 GOV', 191, 'For Registration of New User', 1, 'hellogoviddo', '2019-07-23 08:48:46');

-- --------------------------------------------------------

--
-- Table structure for table `video_views_table`
--

CREATE TABLE `video_views_table` (
  `view_id` int(255) NOT NULL,
  `view_time` datetime NOT NULL DEFAULT current_timestamp(),
  `view_user` int(255) NOT NULL,
  `video_id` int(255) NOT NULL,
  `video_name` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `total_video_played_time` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `view_from` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 - Android App, 1 - Website, 2 - iOS App',
  `earnings_after_view` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `earning_added_account_status` tinyint(4) NOT NULL DEFAULT 0,
  `view_status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_views_table`
--

INSERT INTO `video_views_table` (`view_id`, `view_time`, `view_user`, `video_id`, `video_name`, `total_video_played_time`, `view_from`, `earnings_after_view`, `earning_added_account_status`, `view_status`) VALUES
(253, '2019-04-25 08:21:56', 121, 10, 'Kaul', '0', 0, NULL, 0, 1),
(254, '2019-04-25 08:22:05', 121, 61, 'Rosebush_Shortfilm.mp4', '0', 0, NULL, 0, 1),
(255, '2019-04-25 08:22:15', 121, 62, 'Cycle Short Film', '0', 0, NULL, 0, 1),
(256, '2019-04-25 08:22:27', 121, 65, 'Bashar_Nawaz_Documentry', '0', 0, NULL, 0, 1),
(257, '2019-04-25 08:22:50', 121, 66, 'Yahoo', '0', 0, NULL, 0, 1),
(258, '2019-04-25 08:23:03', 121, 67, 'Yahoo', '535', 0, NULL, 0, 1),
(259, '2019-04-25 08:23:13', 121, 55, 'GoViddo Content\r\n', '0', 0, NULL, 0, 1),
(260, '2019-04-25 08:23:24', 121, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '2410', 0, NULL, 0, 1),
(262, '2019-04-25 08:23:44', 121, 56, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '0', 0, NULL, 0, 1),
(266, '2019-04-25 08:35:59', 121, 63, 'Yahoo', '4482', 0, NULL, 0, 1),
(268, '2019-04-28 18:47:22', 138, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '0', 0, NULL, 0, 1),
(269, '2019-04-30 08:57:44', 121, 58, 'The_Eco_System', '0', 0, NULL, 0, 1),
(270, '2019-05-02 10:11:34', 107, 10, 'Kaul', '0', 0, NULL, 0, 1),
(271, '2019-05-19 12:21:13', 139, 10, 'Kaul', '0', 0, NULL, 0, 1),
(272, '2019-06-13 19:21:42', 140, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '6173', 0, NULL, 0, 1),
(273, '2019-06-19 21:05:10', 141, 63, 'Yahoo', '151345', 0, NULL, 0, 1),
(274, '2019-06-20 03:56:30', 142, 55, 'GoViddo Content\r\n', '0', 0, NULL, 0, 1),
(275, '2019-06-20 04:04:36', 142, 61, 'Rosebush_Shortfilm.mp4', '0', 0, NULL, 0, 1),
(276, '2019-06-20 04:08:22', 142, 62, 'Cycle Short Film', '8423', 0, NULL, 0, 1),
(277, '2019-06-20 07:47:02', 141, 66, 'Yahoo', '0', 0, NULL, 0, 1),
(278, '2019-06-20 10:46:19', 142, 10, 'Kaul', '0', 0, NULL, 0, 1),
(279, '2019-06-20 11:52:19', 143, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '30783', 0, NULL, 0, 1),
(280, '2019-06-20 11:54:39', 143, 55, 'GoViddo Content\r\n', '0', 0, NULL, 0, 1),
(281, '2019-06-20 11:57:00', 143, 63, 'Yahoo', '90234', 0, NULL, 0, 1),
(282, '2019-06-20 12:47:04', 143, 62, 'Cycle Short Film', '-182710', 0, NULL, 0, 1),
(283, '2019-06-20 12:59:03', 143, 56, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '0', 0, NULL, 0, 1),
(284, '2019-06-20 14:45:02', 141, 56, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '0', 0, NULL, 0, 1),
(285, '2019-06-20 14:45:15', 141, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '0', 0, NULL, 0, 1),
(286, '2019-06-20 21:26:24', 141, 55, 'GoViddo Content\r\n', '8966', 0, NULL, 0, 1),
(287, '2019-06-21 06:17:13', 142, 67, 'Yahoo', '4745', 0, NULL, 0, 1),
(294, '2019-06-21 09:19:28', 106, 56, 'GOVIDDO_COMMUNITY_ECOSYSTEM_ANIMATION_CUT02', '0', 0, NULL, 0, 1),
(295, '2019-06-21 09:19:28', 106, 55, 'GoViddo Content\r\n', '0', 0, NULL, 0, 1),
(296, '2019-06-21 09:32:54', 106, 57, 'GO_VIDDO_TEAM_MEMBERS_VIDEO_EDIT_04', '0', 0, NULL, 0, 1),
(297, '2019-06-21 09:32:57', 106, 58, 'The_Eco_System', '0', 0, NULL, 0, 1),
(298, '2019-06-21 09:32:58', 106, 63, 'Yahoo', '39918', 0, NULL, 0, 1),
(299, '2019-06-21 09:33:58', 106, 62, 'Cycle Short Film', '9667', 0, NULL, 0, 1),
(300, '2019-06-21 11:59:12', 141, 61, 'Rosebush_Shortfilm.mp4', '-127302', 0, NULL, 0, 1),
(301, '2019-06-21 13:25:58', 141, 10, 'Kaul', '0', 0, NULL, 0, 1),
(302, '2019-06-26 06:52:04', 146, 10, 'Kaul', '0', 0, NULL, 0, 1),
(303, '2019-06-26 06:57:08', 146, 61, 'Rosebush_Shortfilm.mp4', '170694', 0, NULL, 0, 1),
(304, '2019-06-26 06:59:41', 146, 63, 'Yahoo', '66833', 0, NULL, 0, 1),
(305, '2019-06-27 06:57:29', 174, 10, 'Kaul', '0', 0, NULL, 0, 1),
(306, '2019-06-27 07:00:30', 174, 61, 'Rosebush_Shortfilm.mp4', '0', 0, NULL, 0, 1),
(307, '2019-06-27 07:00:44', 174, 63, 'Yahoo', '0', 0, NULL, 0, 1),
(308, '2019-06-27 07:00:58', 174, 65, 'Bashar_Nawaz_Documentry', '0', 0, NULL, 0, 1),
(309, '2019-06-28 13:04:18', 141, 58, 'The_Eco_System', '0', 0, NULL, 0, 1),
(310, '2019-07-02 00:42:57', 139, 61, 'Rosebush_Shortfilm.mp4', '0', 0, NULL, 0, 1),
(311, '2019-07-04 22:18:49', 141, 62, 'Cycle Short Film', '46221', 0, NULL, 0, 1),
(312, '2019-07-07 05:09:48', 106, 10, 'Kaul', '0', 0, NULL, 0, 1),
(313, '2019-07-07 09:39:14', 106, 65, 'Bashar_Nawaz_Documentry', '0', 0, NULL, 0, 1),
(314, '2019-07-10 08:52:58', 141, 68, 'Yahoo', '1833', 0, NULL, 0, 1),
(315, '2019-07-12 21:28:46', 141, 67, 'Yahoo', '0', 0, NULL, 0, 1),
(316, '2019-07-23 16:48:51', 190, 10, 'Kaul', '0', 0, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `watch_later`
--

CREATE TABLE `watch_later` (
  `watch_letter_id` int(255) NOT NULL,
  `watch_letter_video_id` int(255) NOT NULL,
  `watch_letter_user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `watch_later`
--

INSERT INTO `watch_later` (`watch_letter_id`, `watch_letter_video_id`, `watch_letter_user_id`) VALUES
(6, 62, 138),
(7, 56, 106),
(8, 61, 121),
(9, 65, 121),
(10, 62, 121),
(11, 55, 106),
(12, 10, 106),
(13, 10, 139),
(14, 63, 141),
(15, 10, 146),
(16, 61, 174),
(17, 10, 174),
(18, 62, 141);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `channel_list`
--
ALTER TABLE `channel_list`
  ADD PRIMARY KEY (`channel_id`);

--
-- Indexes for table `community`
--
ALTER TABLE `community`
  ADD PRIMARY KEY (`community_join_id`);

--
-- Indexes for table `config_table`
--
ALTER TABLE `config_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `series_details_table`
--
ALTER TABLE `series_details_table`
  ADD PRIMARY KEY (`series_id`);

--
-- Indexes for table `series_season_details_table`
--
ALTER TABLE `series_season_details_table`
  ADD PRIMARY KEY (`season_table_id`);

--
-- Indexes for table `share_table`
--
ALTER TABLE `share_table`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `subscirption_list`
--
ALTER TABLE `subscirption_list`
  ADD PRIMARY KEY (`subsciption_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email_id` (`email_id`);

--
-- Indexes for table `video_comments_table`
--
ALTER TABLE `video_comments_table`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `video_genere_table`
--
ALTER TABLE `video_genere_table`
  ADD PRIMARY KEY (`video_genere_id`);

--
-- Indexes for table `video_like_table`
--
ALTER TABLE `video_like_table`
  ADD PRIMARY KEY (`video_like_id`);

--
-- Indexes for table `video_table`
--
ALTER TABLE `video_table`
  ADD PRIMARY KEY (`video_id`),
  ADD KEY `video_genere_type` (`video_genere_type`);

--
-- Indexes for table `video_transactions`
--
ALTER TABLE `video_transactions`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `video_views_table`
--
ALTER TABLE `video_views_table`
  ADD PRIMARY KEY (`view_id`);

--
-- Indexes for table `watch_later`
--
ALTER TABLE `watch_later`
  ADD PRIMARY KEY (`watch_letter_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channel_list`
--
ALTER TABLE `channel_list`
  MODIFY `channel_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `community`
--
ALTER TABLE `community`
  MODIFY `community_join_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `config_table`
--
ALTER TABLE `config_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `series_details_table`
--
ALTER TABLE `series_details_table`
  MODIFY `series_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `series_season_details_table`
--
ALTER TABLE `series_season_details_table`
  MODIFY `season_table_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `share_table`
--
ALTER TABLE `share_table`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `subscirption_list`
--
ALTER TABLE `subscirption_list`
  MODIFY `subsciption_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;

--
-- AUTO_INCREMENT for table `video_comments_table`
--
ALTER TABLE `video_comments_table`
  MODIFY `comment_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `video_genere_table`
--
ALTER TABLE `video_genere_table`
  MODIFY `video_genere_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `video_like_table`
--
ALTER TABLE `video_like_table`
  MODIFY `video_like_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `video_table`
--
ALTER TABLE `video_table`
  MODIFY `video_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `video_transactions`
--
ALTER TABLE `video_transactions`
  MODIFY `transaction_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `video_views_table`
--
ALTER TABLE `video_views_table`
  MODIFY `view_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=317;

--
-- AUTO_INCREMENT for table `watch_later`
--
ALTER TABLE `watch_later`
  MODIFY `watch_letter_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `video_table`
--
ALTER TABLE `video_table`
  ADD CONSTRAINT `video_table_ibfk_1` FOREIGN KEY (`video_genere_type`) REFERENCES `video_genere_table` (`video_genere_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
