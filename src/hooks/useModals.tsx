import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface ModalsContextData {
  isAuthenticationModalOpen: boolean;
  isUpdateBookModalOpen: boolean;
  isDeleteBookModalOpen: boolean;
  openDeleteBookModal: () => void;
  closeDeleteBookModal: () => void;
  openUpdateBookModal: () => void;
  closeUpdateBookModal: () => void;
  openAuthenticationModal: () => void;
  closeAuthenticationModal: () => void;
}

interface ModalsProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

const ModalsContext = 
  createContext<ModalsContextData>({} as ModalsContextData);

  export const ModalsProvider = ({children}: ModalsProps) => {
    const [isAuthenticationModalOpen, setAuthenticationModalOpen] = useState(false)
    const [isUpdateBookModalOpen, setUpdateBookModalOpen] = useState(false)
    const [isDeleteBookModalOpen, setDeleteBookModalOpen] = useState(false);

    const openDeleteBookModal = () => {
      setDeleteBookModalOpen(true);
    }
  
    const closeDeleteBookModal = () => {
      setDeleteBookModalOpen(false);
    }
  
    const openUpdateBookModal = () => {
      setUpdateBookModalOpen(true);
    }
  
    const closeUpdateBookModal = () => {
      setUpdateBookModalOpen(false);
    }

    const openAuthenticationModal = () => {
      setAuthenticationModalOpen(true);
    }
  
    const closeAuthenticationModal = () => {
      setAuthenticationModalOpen(false);
    }

    return (
      <ModalsContext.Provider 
        value={
          {
            isAuthenticationModalOpen,
            isDeleteBookModalOpen,
            isUpdateBookModalOpen,
            openDeleteBookModal, 
            closeDeleteBookModal, 
            openUpdateBookModal, 
            closeUpdateBookModal,
            openAuthenticationModal,
            closeAuthenticationModal
          }
        }>
          {children}
      </ModalsContext.Provider>
    )
  }
  
  export const useModals = () => {
    const context = useContext(ModalsContext);
    
    return context;
  }
