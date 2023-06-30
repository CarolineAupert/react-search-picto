'use client'

import { Accordion, AccordionTab } from 'primereact/accordion';
import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill, RiEarthFill } from "react-icons/ri";
import  './about.css'
import ResponsiveImage from '@/components/utils/ResponsiveImage';

// The page where the app infos will be displayed.
function AboutZone() {

    const authorImage = {
        url: process.env.NEXT_PUBLIC_REACT_APP_API_S3 + "/images/brand/caroline-aupert.jpg",
        alt: "Caroline Aupert, développeuse de picto-sketchnote.fr",
        className: "author-img"
    };

    return (
        <>
            <div className="about-zone">
                <h1 className='center' data-testid="about-title">
                    A propos
                </h1>
                <div className="author-prez" data-testid="about-author">
                    <div > <ResponsiveImage image={authorImage} /></div>
                    <div className='justify'>
                        <h2 className=''>
                            Mais qui est derrière ce projet ?
                        </h2>
                        Ce site a été créé par Caroline Aupert, c'est moi !
                        <br />
                        <br />
                        Je suis à la fois développeuse
                        et <a target="_blank" rel="noreferrer noopener" href="https://caukaro.fr/facilitation-graphique/">Facilitatrice graphique</a>.
                        Quand je sketchnote ou que je prépare mon vocabulaire visuel pour un événement à scriber,
                        je suis toujours en train de chercher des idées de pictogrammes !
                        Depuis quelques années, je me suis donc forgée une <strong>bibliothèque visuelle</strong> que j'alimente régulièrement !
                        J'ai donc décidé de créer cette application afin de vous partager ma bibliothèque de pictos !
                        <div className='social-icons'>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/caroline-aupert/">
                                <RiLinkedinBoxFill />
                            </a>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/cau_karo/">
                                <RiInstagramFill />
                            </a>
                            <a target="_blank" rel="noreferrer noopener" href="mailto:caroline.aupert@caukaro.fr">
                                <RiMailFill />
                            </a>
                            <a target="_blank" rel="noreferrer noopener" href="https://caukaro.fr">
                                <RiEarthFill />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="center author-objective">
                    <h3>Mon objectif ?</h3> Vous fournir <strong>l'inspiration</strong> dont vous avez besoin pour trouver <strong>LE bon picto</strong> et booster vos sketchnotes !</div>
                <div className='about-faq' data-testid="about-faq">
                    <h2 className='center'>
                        Vous vous posez des questions ? J'y réponds !
                    </h2>
                    <Accordion multiple activeIndex={[0]}>
                        <AccordionTab header=" A quoi sert ce site ?">
                            <p className="m-0 justify">
                                Que l'on soit débutant.e en sketchnote ou non, cette question revient souvent quand on pratique :
                                "comment je vais dessiner ça ?".<br /><br />
                                Il n'est pas toujours facile de trouver l'idée qui va avec le mot.
                                Et parfois, on a beau avoir l'idée mais on ne sait pas la dessiner.
                                Bref que ce soit un manque d'inspiration ou des difficultés techniques,
                                mon objectif est de vous fournir une bibliothèque de pictos dans laquelle aller piocher quand vous en avez besoin !
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Puis-je utiliser les pictogrammes trouvés sur votre site web dans mes projets personnels ou professionnels ?">
                            <p className="m-0 justify">
                                Eh oui, c'est le but ! Mais attention, cela se fait sous certaines conditions.<br /><br />
                                Vous êtes libres de réutiliser, reproduire et adapter les pictos selon vos besoins pour un usage non commercial.
                                Tous les pictos sont sous la licence Creative Commons
                                "Attribution - Pas d’Utilisation Commerciale"
                                (<a target="_blank" rel="noreferrer noopener" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC</a>).
                                <br /><br />N'oubliez de pas de nous citer : "Picto issu de picto-skechnote.fr, licence CC BY-NC."
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Comment fonctionne la recherche de pictogrammes sur cette plateforme ?">
                            <p className="m-0 justify">
                                Il vous suffit de taper le ou les mots-clefs dans la barre de recherche et les pictogrammes correspondants s'afficheront !
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Comment puis-je télécharger ou enregistrer les pictogrammes que j'ai trouvés ?">
                            <p className="m-0 justify">
                                Cela n'est pour l'instant pas prévu ! Pourquoi ? <br /><br />
                                Parce que mon objectif est de vous fournir uniquement de l'inspiration !
                                A vous ensuite de re-dessiner le picto et de vous l'approprier pleinement :)
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Est-ce que je peux contribuer en soumettant mes propres pictogrammes à la bibliothèque existante ?">
                            <p className="m-0 justify">
                                Je n'ai pas encore développé cette fonctionnalité
                                mais l'objectif final est effectivement de créer un partage collaboratif des pictogrammes !
                                Si vous estimez que certains pictos manquent à l'appel et que vous les avez dans votre besace,
                                n'hésitez pas à me les envoyer et je les ajouterai !
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Comment puis-je contacter le support technique en cas de problème ou de question supplémentaire ?">
                            <p className="m-0 justify">
                                Pour tout bug ou question ou même simplement une envie de discuter,
                                envoyez-moi <a href="mailto:caroline.aupert@caukaro.fr">un mail</a> !
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Y a-t-il des ressources supplémentaires, comme des tutoriels ou des guides, pour apprendre à créer mes propres sketchnotes et pictogrammes ?">
                            <p className="m-0 justify">
                                Pas encore ! L'application n'en est qu'à ses débuts
                                mais je songe en effet à rajouter des vidéos explicatives
                                pour dessiner certains pictos ou encore des packs de pictos groupés par thème.
                                Si cela est un besoin pour vous, n'hésitez pas à <a href="mailto:caroline.aupert@caukaro.fr">me le dire</a>.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Comment participer à l'aventure ?">
                            <p className="m-0 justify">
                                Il y a plein de manières de contribuer !<br /><br />
                                La première serait d'en parler autour de vous pour faire connaître l'application !<br /><br />
                                Un autre moyen pourrait être de proposer de nouveaux pictos pour alimenter
                                la banque de données ou encore de proposer des idées d'amélioration pour que ce site réponde à vos besoins !
                                N'hésitez pas à <a href="mailto:caroline.aupert@caukaro.fr">me contacter</a> !
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>

            </div>
        </>

    );
}

export default AboutZone;