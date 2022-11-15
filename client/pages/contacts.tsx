import React, {FC} from 'react';
import MainLayot from "../layot/mainLayot";
import ContactsPage from "../component/contactsPage/contactsPage";

interface T {
    aaa?: any
}

const Contacts: FC<T> = ({aaa}) => {
    return (

        <MainLayot>
            <ContactsPage/>
        </MainLayot>
    );
};

export default Contacts;