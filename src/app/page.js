"use client"
import Image from 'next/image'
import styles from './page.module.css'

let user = {
  'last-name' : 'Doe',
  'firstname': 'John',
}


console.log('HELLO SERVER ER DU DER?', user.firstname, user['last-name'])
export default function Home() {
  return (
    <main className={styles.main}>
      Applikation
      <div className={`${styles.box} ${styles['box-red']}`}>BOX</div>
    </main>
  )
}
