-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/10/2023 às 15:42
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `prontuario_odontologico`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_atestado`
--

CREATE TABLE `tb_atestado` (
  `ID_ATESTADO` int(11) NOT NULL,
  `ID_PACIENTE` int(11) NOT NULL,
  `DT_ATESTADO` datetime DEFAULT NULL,
  `CD_CID` varchar(10) DEFAULT NULL,
  `DS_CID` varchar(150) DEFAULT NULL,
  `DS_ATESTADO` varchar(6000) DEFAULT NULL,
  `QTD_DIAS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_evolucao`
--

CREATE TABLE `tb_evolucao` (
  `ID_EVOLUCAO` int(11) NOT NULL,
  `ID_PACIENTE` int(11) NOT NULL,
  `DS_EVOLUCAO` varchar(6000) DEFAULT NULL,
  `DT_EVOLUCAO` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_itens_prescricao`
--

CREATE TABLE `tb_itens_prescricao` (
  `ID_ITENS_PRESCRICAO` int(11) NOT NULL,
  `ID_PRESCRICAO` int(11) NOT NULL,
  `NM_MEDICAMENTO` varchar(150) NOT NULL,
  `QTD_MEDICAMENTO` varchar(30) DEFAULT NULL,
  `DS_USO` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_paciente`
--

CREATE TABLE `tb_paciente` (
  `ID_PACIENTE` int(11) NOT NULL,
  `NM_PACIENTE` varchar(300) NOT NULL,
  `DT_NASCIMENTO` date NOT NULL,
  `NM_MAE` varchar(300) DEFAULT NULL,
  `NM_PAI` varchar(300) DEFAULT NULL,
  `NM_SOCIAL` varchar(300) DEFAULT NULL,
  `NR_TELEFONE` varchar(25) DEFAULT NULL,
  `NR_TELEFONE_CONTATO` varchar(25) DEFAULT NULL,
  `NR_RG` varchar(20) DEFAULT NULL,
  `NR_CPF` varchar(20) DEFAULT NULL,
  `DS_LOGRADOURO` varchar(300) DEFAULT NULL,
  `NR_LOGRADOURO` int(11) DEFAULT NULL,
  `DS_COMPLEMENTO_LOGRADOURO` varchar(100) DEFAULT NULL,
  `NR_CEP` varchar(15) DEFAULT NULL,
  `DT_CADASTRO` datetime DEFAULT NULL,
  `DT_ULTIMA_ATUALIZACAO` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_prescricao`
--

CREATE TABLE `tb_prescricao` (
  `ID_PRESCRICAO` int(11) NOT NULL,
  `ID_PACIENTE` int(11) NOT NULL,
  `DT_PRESCRICAO` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_atestado`
--
ALTER TABLE `tb_atestado`
  ADD PRIMARY KEY (`ID_ATESTADO`),
  ADD KEY `FK_TB_ATESTADO_ID_ATESTADO` (`ID_PACIENTE`);

--
-- Índices de tabela `tb_evolucao`
--
ALTER TABLE `tb_evolucao`
  ADD PRIMARY KEY (`ID_EVOLUCAO`),
  ADD KEY `FK_TB_EVOLUCAO_ID_PACIENTE` (`ID_PACIENTE`);

--
-- Índices de tabela `tb_itens_prescricao`
--
ALTER TABLE `tb_itens_prescricao`
  ADD PRIMARY KEY (`ID_ITENS_PRESCRICAO`),
  ADD KEY `FK_TB_ITENS_PRESCRICAO_ID_ITENS_PRESCRICAO` (`ID_PRESCRICAO`);

--
-- Índices de tabela `tb_paciente`
--
ALTER TABLE `tb_paciente`
  ADD PRIMARY KEY (`ID_PACIENTE`);

--
-- Índices de tabela `tb_prescricao`
--
ALTER TABLE `tb_prescricao`
  ADD PRIMARY KEY (`ID_PRESCRICAO`),
  ADD KEY `FK_TB_PRESCRICAO_ID_PRESCRICAO` (`ID_PACIENTE`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_atestado`
--
ALTER TABLE `tb_atestado`
  MODIFY `ID_ATESTADO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_evolucao`
--
ALTER TABLE `tb_evolucao`
  MODIFY `ID_EVOLUCAO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_itens_prescricao`
--
ALTER TABLE `tb_itens_prescricao`
  MODIFY `ID_ITENS_PRESCRICAO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_paciente`
--
ALTER TABLE `tb_paciente`
  MODIFY `ID_PACIENTE` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_prescricao`
--
ALTER TABLE `tb_prescricao`
  MODIFY `ID_PRESCRICAO` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_atestado`
--
ALTER TABLE `tb_atestado`
  ADD CONSTRAINT `FK_TB_ATESTADO_ID_ATESTADO` FOREIGN KEY (`ID_PACIENTE`) REFERENCES `tb_paciente` (`ID_PACIENTE`);

--
-- Restrições para tabelas `tb_evolucao`
--
ALTER TABLE `tb_evolucao`
  ADD CONSTRAINT `FK_TB_EVOLUCAO_ID_PACIENTE` FOREIGN KEY (`ID_PACIENTE`) REFERENCES `tb_paciente` (`ID_PACIENTE`);

--
-- Restrições para tabelas `tb_itens_prescricao`
--
ALTER TABLE `tb_itens_prescricao`
  ADD CONSTRAINT `FK_TB_ITENS_PRESCRICAO_ID_ITENS_PRESCRICAO` FOREIGN KEY (`ID_PRESCRICAO`) REFERENCES `tb_prescricao` (`ID_PRESCRICAO`);

--
-- Restrições para tabelas `tb_prescricao`
--
ALTER TABLE `tb_prescricao`
  ADD CONSTRAINT `FK_TB_PRESCRICAO_ID_PRESCRICAO` FOREIGN KEY (`ID_PACIENTE`) REFERENCES `tb_paciente` (`ID_PACIENTE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
