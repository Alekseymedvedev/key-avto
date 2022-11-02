import React, {FC, useEffect} from 'react';
import Header from "../component/header/header";
import axios from "axios";
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


// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const aaa=await response.json()
//     return {
//         props: {aaa}, // will be passed to the page component as props
//     }
// }