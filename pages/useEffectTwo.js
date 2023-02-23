import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectTwo.module.css'

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);

    }, [])
    return (
        <>
            <div className={styles.two}>
                <Link className={styles.home} href="/">Home</Link>
                <div className={styles.effect}>
                    useEffectTwo
                </div>
                <div>
                    {number}
                </div>
            </div>
        </>
    )
}