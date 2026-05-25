import Image from 'next/image';

interface LogoProps {
    width: number;
    height: number;
    justifyContent?: string;
}

export function Logo(prop: LogoProps) {
    return (

        <div style={{ marginBottom: 24, display: 'flex', justifyContent: prop.justifyContent ||  "space-between" }}>
            <Image src="/unespar logo.png" alt="Logotipo" width={prop.width} height={prop.height} />
            <Image src="/UTFPR logo.png" alt="Logotipo" width={prop.width} height={prop.height} />
        </div>
    )
}