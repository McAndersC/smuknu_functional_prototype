"use client"
import Products from '@/components/products/products'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={`${styles.box} ${styles['box-red']}`}>BOX</div> */}
      <Products config={{black: 'UDVALGT', pink:'SKØNHED!', recommended: true}}></Products>
    </main>
  )
}
