import Image from 'next/image';
import styles from './fullteaser.module.css';
import Link from 'next/link';

const FullTeaser = ({config}) => {

    return <div className={styles.fullteaser}>

            <div className={styles.cta}>

                <div className={styles.content} style={{backgroundColor : config?.bodyBackground}}>
                    <div>

                        {/* 
                        
                            Inserting headline
                            Inline styling is used to set the color of the text
                        
                        */}
                        <h1>

                            <span style={{color : config.headline.one.color}}>{config.headline.one.text}</span>
                            <br />
                            <span style={{color : config.headline.two.color}}>{config.headline.two.text}</span>

                        </h1>

                        {/* 
                        
                            Inserting body text as HTML, so we can use HTML tags in the CMS
                        
                        */}
                        <div className={styles.body} style={{color : config.body.color}} dangerouslySetInnerHTML={{__html: config.body.text}}></div>

                        {/* 
                        
                            Inseting a link if it exists
                        
                        */}
                        {config.link?.url ? <a className={styles.btn} href={config.link?.url}>{config.link?.text}</a> : ''}

                    </div>
                </div>
            </div>

            <Image src={config.image} width={1200} height={400} alt={'asdasd'}></Image>
     
    </div>

};

export default FullTeaser