import FullTeaser from "@/components/ctas/fullteaser/fullteaser"
import SubscribeForm from "@/components/subscribe/subscribeformular"

const Member = () => {

    return <div className="page">

        
        <FullTeaser config={
          { 
            link: {
              url : '',
              text : ''
            },
            headline: {
              one: {
                text : 'BLIV MEDLEM',
                color : '#000'
              },
              two: {
                text : '',
                color : '#000'
              }
            },
            image: '/subscribers.jpg',
            body: {
              text : `<p>Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.</p><p>Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.</p>`,
              color : '#000'
            },
            bodyBackground : '#fff'
        }
        
      } />

       <SubscribeForm></SubscribeForm>

    </div>

}

export default Member