import './footer.css'

const Footer = () =>{
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blanck'><img src='/imagens/fb.png' alt='Logo Facebook'></img></a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blanck'><img src='/imagens/ig.png' alt='Logo Intagram'></img></a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blanck'><img src='/imagens/tw.png' alt='Logo Twitter'></img></a>
                    </li>
                </ul>
            </section>
            
            <section>
                <img src='/imagens/logo.png' alt='Logo Organo'></img>
            </section>
            <section>
                <span>Desenvolvido por Brielalmeida</span>
            </section>
        </footer>
    )
}
export default Footer;