import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return (
        <>
            <div className={styles.one}>
                <Link className={styles.home} href="/">Home</Link>
                <div className={styles.effect}>
                    useEffectOne
                </div>
                <div>
                    {number}
                </div>
            </div>

        </>
    )
}