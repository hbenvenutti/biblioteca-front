import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface ModalsContextData {
  isAuthModalOpen: boolean;
  isUpdateBookModalOpen: boolean;
  isDeleteBookModalOpen: boolean;
  openDeleteBookModal: () => void;
  closeDeleteBookModal: () => void;
  openUpdateBookModal: () => void;
  closeUpdateBookModal: () => void;
}

interface ModalsProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

const ModalsContext = 
  createContext<ModalsContextData>({} as ModalsContextData);

  export const ModalsProvider = ({children}: ModalsProps) => {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false)
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

    return (
      <ModalsContext.Provider 
        value={
          {
            isAuthModalOpen,
            isDeleteBookModalOpen,
            isUpdateBookModalOpen,
            openDeleteBookModal, 
            closeDeleteBookModal, 
            openUpdateBookModal, 
            closeUpdateBookModal
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
