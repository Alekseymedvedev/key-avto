// "use client"
import React from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
// import { getUrl } from 'nextjs-current-url';
export default async function Breadcrumbs(req:any) {
    // const url = await getUrl();
    const nextUrl = req.nextUrl
    console.log(req)
    const breadcrumbs = [
        {title: '', url: ''}
    ]

    return (
        <nav>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={breadcrumb.url}>
                  {/*<Link href={breadcrumb.url}>*/}
                  {/*  <a>{breadcrumb.title}</a>*/}
                  {/*</Link>*/}
                    {index < breadcrumbs.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    );
}

