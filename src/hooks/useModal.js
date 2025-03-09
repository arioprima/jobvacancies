import { useState } from 'react';

const useModal = () => {
    const [activeModals, setActiveModals] = useState({});

    const openModal = (modalName) => {
        setActiveModals(prev => ({
            ...prev,
            [modalName]: true
        }));
    };

    const closeModal = (modalName) => {
        setActiveModals(prev => ({
            ...prev,
            [modalName]: false
        }));
    };

    return {
        activeModals,
        openModal,
        closeModal
    };
};

export default useModal;