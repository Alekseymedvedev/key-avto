import React from 'react';
import cls from "./social.module.scss";
import Image from "next/image";

const Social = () => {
    return (
        <div className={cls.social}>
            <div className={cls.title}>Написать в</div>
            <div className={cls.inner}>
                <a className={cls.link + ' ' + cls.telegram} href="https://t.me/Amed152" target="_blank">
                    <svg id="icon-telegram" viewBox="0 0 32 32">
                        <path fill="#fff"
                              d="M31.88 5.053l-4.813 22.733c-0.333 1.613-1.307 2-2.667 1.253l-7.333-5.427-3.547 3.427c-0.4 0.4-0.733 0.747-1.467 0.747-0.96 0-0.8-0.36-1.12-1.267l-2.533-8.253-7.267-2.267c-1.573-0.467-1.587-1.547 0.347-2.333l28.347-10.933c1.293-0.573 2.533 0.32 2.053 2.32z"></path>
                    </svg>
                </a>
                <a className={cls.link + ' ' + cls.whatsap} href="https://wa.me/79202537813">
                    <svg id="icon-whatsapp" viewBox="0 0 32 32">
                        <path fill="#fff"
                              d="M23.331 19.176c-0.401-0.2-2.356-1.156-2.72-1.288-0.364-0.135-0.631-0.2-0.897 0.2-0.263 0.393-1.028 1.285-1.259 1.549-0.233 0.26-0.465 0.28-0.861 0.1-0.4-0.2-1.684-0.62-3.204-1.98-1.184-1.060-1.979-2.36-2.213-2.76-0.232-0.4-0.025-0.62 0.173-0.82 0.181-0.18 0.401-0.46 0.601-0.697 0.195-0.241 0.259-0.401 0.396-0.661 0.133-0.28 0.065-0.5-0.033-0.699-0.1-0.2-0.896-2.16-1.229-2.941-0.32-0.779-0.649-0.68-0.896-0.68-0.229-0.020-0.495-0.020-0.761-0.020s-0.697 0.099-1.063 0.479c-0.364 0.4-1.393 1.36-1.393 3.3s1.427 3.82 1.625 4.1c0.199 0.26 2.807 4.26 6.8 5.98 0.952 0.4 1.693 0.64 2.272 0.839 0.952 0.303 1.82 0.26 2.507 0.161 0.765-0.121 2.356-0.961 2.688-1.901 0.34-0.94 0.34-1.72 0.24-1.9-0.099-0.18-0.36-0.28-0.76-0.46zM16.081 29h-0.021c-2.36 0-4.699-0.64-6.74-1.84l-0.48-0.285-5 1.3 1.34-4.86-0.319-0.5c-1.32-2.101-2.021-4.521-2.021-7.013 0-7.26 5.94-13.18 13.256-13.18 3.539 0 6.86 1.38 9.361 3.88 2.5 2.479 3.879 5.8 3.879 9.32-0.005 7.259-5.947 13.18-13.247 13.18zM27.36 4.599c-3.040-2.939-7.040-4.599-11.3-4.599-8.776 0-15.921 7.112-15.925 15.857 0 2.795 0.732 5.52 2.127 7.927l-2.261 8.216 8.447-2.203c2.328 1.257 4.947 1.925 7.613 1.929h0.008c8.78 0 15.928-7.115 15.932-15.861 0-4.235-1.653-8.22-4.66-11.215z"></path>
                    </svg>
                </a>
                <a className={cls.link + ' ' + cls.viber} href="viber://chat?number=%2B79202537813">
                    <svg id="icon-viber" viewBox="0 0 32 32">
                        <path fill="#fff"
                              d="M15.197 0.003c-2.567 0.035-8.089 0.456-11.179 3.287-2.293 2.28-3.095 5.641-3.188 9.804-0.080 4.147-0.173 11.933 7.333 14.055v3.227c0 0-0.051 1.293 0.803 1.56 1.053 0.333 1.653-0.665 2.653-1.732l1.867-2.107c5.133 0.427 9.067-0.559 9.52-0.705 1.040-0.333 6.908-1.081 7.868-8.869 0.987-8.041-0.48-13.108-3.12-15.401l-0.013-0.003c-0.8-0.733-4-3.067-11.16-3.093 0 0-0.528-0.033-1.384-0.021zM15.287 2.265c0.727-0.004 1.173 0.027 1.173 0.027 6.053 0.013 8.948 1.84 9.628 2.453 2.227 1.905 3.371 6.475 2.533 13.189-0.8 6.507-5.56 6.92-6.44 7.2-0.373 0.12-3.84 0.973-8.203 0.693 0 0-3.252 3.921-4.265 4.935-0.16 0.173-0.347 0.227-0.467 0.2-0.173-0.040-0.227-0.253-0.213-0.547l0.027-5.359c-6.361-1.76-5.988-8.403-5.921-11.869 0.080-3.467 0.733-6.309 2.667-8.229 2.609-2.36 7.3-2.68 9.481-2.693zM15.767 5.732c-0 0-0.001 0-0.001 0-0.22 0-0.399 0.178-0.399 0.399 0 0 0 0 0 0v0c0 0.221 0.179 0.4 0.4 0.4v0c0.043-0.001 0.093-0.001 0.143-0.001 2.034 0 3.88 0.809 5.232 2.123l-0.002-0.002c1.453 1.413 2.161 3.307 2.188 5.787 0 0.221 0.179 0.4 0.4 0.4v0-0.012c0.221 0 0.4-0.179 0.4-0.4v0c0.005-0.109 0.008-0.236 0.008-0.364 0-2.326-0.923-4.436-2.423-5.985l0.002 0.002c-1.587-1.547-3.589-2.347-5.948-2.347zM10.495 6.652c-0.054-0.008-0.116-0.013-0.18-0.013-0.236 0-0.457 0.064-0.646 0.176l0.006-0.003h-0.016c-0.547 0.32-1.051 0.72-1.531 1.253-0.36 0.427-0.561 0.852-0.615 1.265-0.009 0.064-0.014 0.137-0.014 0.212 0 0.182 0.029 0.357 0.084 0.521l-0.003-0.012 0.027 0.013c0.458 1.331 0.998 2.476 1.646 3.549l-0.046-0.082c0.895 1.608 1.922 2.996 3.101 4.237l-0.008-0.009 0.040 0.053 0.053 0.040 0.080 0.080c1.236 1.174 2.628 2.205 4.136 3.053l0.104 0.054c1.76 0.96 2.829 1.413 3.469 1.6v0.013c0.187 0.053 0.357 0.080 0.531 0.080 0.57-0.043 1.079-0.274 1.471-0.631l-0.002 0.002c0.52-0.467 0.933-0.984 1.24-1.531v-0.013c0.307-0.573 0.2-1.121-0.24-1.495-0.845-0.742-1.782-1.421-2.781-2.007l-0.085-0.046c-0.68-0.373-1.373-0.147-1.653 0.227l-0.6 0.759c-0.307 0.373-0.867 0.32-0.867 0.32l-0.016 0.013c-4.16-1.067-5.267-5.279-5.267-5.279s-0.053-0.573 0.333-0.867l0.747-0.6c0.36-0.293 0.613-0.987 0.227-1.667-0.631-1.084-1.31-2.022-2.071-2.887l0.017 0.020c-0.166-0.204-0.399-0.349-0.665-0.399l-0.007-0.001zM16.459 7.839c-0.22 0.001-0.399 0.18-0.399 0.4s0.179 0.4 0.4 0.4c0 0 0.001 0 0.001 0h-0c1.388 0.025 2.636 0.607 3.532 1.532l0.001 0.001c0.75 0.825 1.209 1.926 1.209 3.134 0 0.103-0.003 0.205-0.010 0.306l0.001-0.014c0.001 0.22 0.18 0.399 0.4 0.399 0 0 0 0 0 0v0l0.013 0.016c0 0 0 0 0 0 0.221 0 0.4-0.179 0.4-0.4 0-0 0-0.001 0-0.001v0c0.040-1.587-0.453-2.92-1.427-3.987s-2.333-1.667-4.067-1.787c-0.008-0.001-0.018-0.001-0.028-0.001s-0.020 0-0.029 0.001l0.001-0zM17.112 9.997c-0.004-0-0.008-0-0.012-0-0.225 0-0.407 0.182-0.407 0.408 0 0.221 0.176 0.401 0.395 0.407h0.001c1.32 0.067 1.96 0.733 2.040 2.107 0.007 0.215 0.184 0.387 0.4 0.387 0 0 0 0 0 0h0.013c0.215-0.007 0.388-0.183 0.388-0.4 0-0.009-0-0.019-0.001-0.028l0 0.001c-0.093-1.787-1.067-2.788-2.8-2.881-0.002-0-0.005-0-0.008-0s-0.006 0-0.008 0h0z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Social;