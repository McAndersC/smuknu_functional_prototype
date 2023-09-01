import FullTeaser from '@/components/ctas/fullteaser/fullteaser'
import Products from '@/components/products/products'

const Member = () => {

  const teaserConfig = { 
      link: {
        url : '',
        text : ''
      },
      headline: {
        one: {
          text : 'SKØNNE',
          color : '#FFF'
        },
        two: {
          text : 'PRODUKTER',
          color : '#FFF'
        }
      },
      image: '/products.jpg',
      body: {
          text : `<p>Herunder finder du alle vores produkter</p>`,
          color : '#FFF'
      },
      bodyBackground : 'rgba(0, 0, 0, 0.5)'
  }

  return <div className="page">
      
      <FullTeaser config={teaserConfig} />
      <Products config={{black: 'ALT ER', pink:'SKØNHED', recommended: false}}></Products>

  </div>

}

export default Member