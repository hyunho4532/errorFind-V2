interface HeaderState {
    clientId: string;
    modalIsOpen: boolean;
    setModalIsOpen: (isOpen: boolean) => void;
    userModalIsOpen: boolean;
    setUserModalIsOpen: (isOpen: boolean) => void;
    userProfileSelect: boolean;
    setUserProfileSelect: boolean;
}

export default HeaderState;
