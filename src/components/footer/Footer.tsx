import LogBom from '../../assets/logoBomberos.png'


export default function Footer () {
    return (
    <>
        {/* Footer con Materialize */}
        <footer class="page-footer" style={{ background: '#fbf11f', padding: '2%', "margin-top": "10%" }}>
                <div class="container">
                    <div class="row">
                
            </div>
            </div>
        </footer>
        
            <footer class="page-footer" style={{ background: '#242088', padding: '0.1%'}}>
            <div class="container">
            <div class="row">
                <div class="col l5 s12">
                <img src={LogBom} width="250" height="250" alt="Escudo" class="footer-logo valign-wrapper" />
                </div>
                <div class="col l5 s12">
                <p class="white-text" style="padding-top: 16%; font-size: 125%">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget aliquam
                    dignissim velit habitant urna justo gravida.
                </p>
                </div>
            </div>
            </div>
        </footer>
    </>
    )
}