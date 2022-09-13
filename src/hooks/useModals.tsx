import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface ModalsContextData {
  isAuthenticationModalOpen: boolean;
  isUpdateBookModalOpen: boolean;
  isDeleteBookModalOpen: boolean;
  isRegistrationModalOpen: boolean;
  isCreateBookModalOpen: boolean;
  openDeleteBookModal: () => void;
  closeDeleteBookModal: () => void;
  openUpdateBookModal: () => void;
  closeUpdateBookModal: () => void;
  openAuthenticationModal: () => void;
  closeAuthenticationModal: () => void;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
  openCreateBookModal: () => void;
  closeCreateBookModal: () => void;

}

interface ModalsProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

const ModalsContext = 
  createContext<ModalsContextData>({} as ModalsContextData);

  export const ModalsProvider = ({children}: ModalsProps) => {
    const [isAuthenticationModalOpen, setAuthenticationModalOpen] = useState(false)
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [isUpdateBookModalOpen, setUpdateBookModalOpen] = useState(false)
    const [isDeleteBookModalOpen, setDeleteBookModalOpen] = useState(false);
    const [isCreateBookModalOpen, setCreateBookModalOpen] = useState(false);

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

    const openRegistrationModal = () => {
      setRegistrationModalOpen(true);
    }
  
    const closeRegistrationModal = () => {
      setRegistrationModalOpen(false);
    }

    const openCreateBookModal = () => {
      setCreateBookModalOpen(true);
    }
  
    const closeCreateBookModal = () => {
      setCreateBookModalOpen(false);
    }


    return (
      <ModalsContext.Provider 
        value={
          {
            isRegistrationModalOpen,
            isAuthenticationModalOpen,
            isDeleteBookModalOpen,
            isUpdateBookModalOpen,
            isCreateBookModalOpen,
            openDeleteBookModal, 
            closeDeleteBookModal, 
            openUpdateBookModal, 
            closeUpdateBookModal,
            openAuthenticationModal,
            closeAuthenticationModal,
            openRegistrationModal,
            closeRegistrationModal,
            openCreateBookModal,
            closeCreateBookModal
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
