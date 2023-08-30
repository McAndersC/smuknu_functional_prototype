
import FullTeaser from "@/components/ctas/fullteaser/fullteaser"
import AreYouMember from "@/components/ctas/member/areyoumember"
import Accordians from "@/components/questions/accordians"

const Wellness = () => {

    return <div className={'page'}>
        
        <FullTeaser config={
          { 
            link: {
              url : '',
              text : ''
            },
            headline: {
              one: {
                text : 'SPØRG OM',
                color : '#fff'
              },
              two: {
                text : 'SUNDHED',
                color : '#fff'
              }
            },
            image: '/abouthealth.jpg',
            body: {
                text : `<p>Herunder har vi samlet spørgsmål og svar om sundhed.</p><p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
                color : '#fff'
            },
            bodyBackground : '#fa96aa'
         
        }
        
        }></FullTeaser>
        <Accordians></Accordians>
        <AreYouMember></AreYouMember>
    </div>

}

export default Wellness