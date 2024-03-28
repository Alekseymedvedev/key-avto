import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";


const Logo = () => {
    const router = ''

    return (
        <div>
            {
                router === ''
                    ?
                    <span>
                         <Image
                             width={270}
                             height={80}
                             src={logo}
                             alt="logo"
                         />
                    </span>
                    :
                    <Link href='/'>
                        <Image
                            width={270}
                            height={80}
                            src={logo}
                            alt="banner"
                        />
                    </Link>
            }
        </div>
    );
};

export default Logo;