import React from "react";
import styled from "styled-components";
import {
  Character,
  Comic,
  Creator,
  ResourceList,
} from "../interfaces/marvelInterfaces";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Character | Comic | Creator;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 85%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  text-align: left;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        {renderEntityInfo(data)}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

const renderEntityInfo = (data: Character | Comic | Creator) => {
  if (!data) {
    return null;
  }
  if ("name" in data) {
    return (
      <>
        <div><b>Name:</b> {data.name}</div>
        <div><b>Description:</b> {data.description || 'N/A'}</div>
        <div><b>Comics:</b> {renderResourceList(data.comics)}</div>
        <div><b>Stories:</b> {renderResourceList(data.stories)}</div>
        <div><b>Series:</b> {renderResourceList(data.series)}</div>
      </>
    );
  } else if ("title" in data) {
    return (
      <>
        <div><b>Title:</b> {data.title}</div>
        <div><b>Description:</b> {data.description || 'N/A'}</div>
        <div><b>Issue Number:</b> {data.issueNumber}</div>
        <div><b>Creators:</b> {renderResourceList(data.creators)}</div>
        <div><b>Characters:</b> {renderResourceList(data.characters)}</div>
        <div><b>Stories:</b> {renderResourceList(data.stories)}</div>
      </>
    );
  } else if ("fullName" in data) {
    return (
      <>
        <div><b>Full Name:</b> {data.fullName}</div>
        <div><b>Series:</b> {renderResourceList(data.series)}</div>
        <div><b>Stories:</b> {renderResourceList(data.stories)}</div>
        <div><b>Comics:</b> {renderResourceList(data.comics)}</div>
      </>
    );
  }

  return null;
};

const renderResourceList = (resourceList: ResourceList | undefined) => {
  if (!resourceList || !resourceList.items || resourceList.items.length === 0) {
    return "N/A";
  }

  return resourceList.items.map((item) => item.name).join(", ");
};
