"use client"
import Products from '@/components/products/products'
import styles from './page.module.css'
import FullTeaser from '@/components/ctas/fullteaser/fullteaser'
import Reviews from '@/components/reviews/reviews'
import AreYouMember from '@/components/ctas/member/areyoumember'

export default function Home() {
  return (
    <main className={styles.main}>

      <FullTeaser config={
          { 
            link: {
              url : '#selected',
              text : 'Se udvalgte produkter'
            },
            
            headline: {
              one: {
                text : 'SKØNHED',
                color : '#000'
              },
              two: {
                text : 'FOR ALLE',
                color : '#000'
              }
            },
            image: '/front.jpg',
            body: {
              text : `<p>Herunder har vi samlet spørgsmål og svar om sundhed.</p><p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
              color : '#000'
            },
            bodyBackground : '#f7f0f2'
        }
        
      }></FullTeaser>

      
      <Products headline={{black: 'UDVALGT', pink:'SKØNHED!'}} recommend={true}></Products>
      
      <Reviews></Reviews>

      <AreYouMember></AreYouMember>

    </main>
  )
}
