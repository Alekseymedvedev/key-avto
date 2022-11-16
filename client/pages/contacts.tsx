import React, {FC} from 'react';
import MainLayot from "../layot/mainLayot";
import ContactsPage from "../screens/contactsPage/contactsPage";

interface T {
    aaa?: any
}

const Contacts: FC<T> = ({aaa}) => {
    return (

        <MainLayot title="Главная">
            <ContactsPage/>
        </MainLayot>
    );
};

export default Contacts;