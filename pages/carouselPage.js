import Carousel from "@/components/carousel"
import Link from 'next/link'
import styles from '@/styles/Carousel.module.css'

export default function CarouselPage() {
    return (
        <>
            <div className={styles.main}>
                <Link className={styles.home} href="/">Home</Link>
                <Carousel />
            </div>

        </>
    )
}