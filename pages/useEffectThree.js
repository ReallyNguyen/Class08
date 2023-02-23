import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectThree.module.css'

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>
            <div className={styles.three}>
                <Link className={styles.home} href="/">Home</Link>
                <div>
                    <button className={styles.btn} onClick={() => setNumber(number + 1)}>Click me</button>
                </div>
                <div>
                    UseEffectThree
                </div>
                <div>
                    {value}
                </div>
            </div>
        </>
    )
}