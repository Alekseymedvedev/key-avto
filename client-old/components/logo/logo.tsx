import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import {useRouter} from "next/router";


const Logo = () => {
    const router = useRouter()

    return (
        <div>
            {
                router.route === '/'
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