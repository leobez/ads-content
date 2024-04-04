<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="Sobre.aspx.cs" Inherits="ProjetoParaNota.Sobre" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script defer src="javascript/script-sobre.js" lang="pt-br"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="sobre-layout">
       
        <div class="sobre-content-container">

            <section class="sobre-content sobre-content-image sobre-content-image-1">
                 <img src="Imagens/DEFAULT-img02.jpg"/>
            </section>

            <section class="sobre-content sobre-content-text sobre-content-perf">
                <h2>Perfil Profissional</h2>
                <p>
                    O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, 
                    especifica, testa, implanta e mantém sistemas computacionais de informação. 
                    Esse profissional trabalha, também, com ferramentas computacionais, equipamentos 
                    de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, 
                    emprego de linguagens de programação e de metodologias de construção de projetos, 
                    preocupação com a qualidade, usabilidade, robustez, integridade e segurança de 
                    programas computacionais são fundamentais à atuação desse profissional.
                </p>
            </section>

            <section class="sobre-content sobre-content-image sobre-content-image-2">
                <img src="Imagens/SOBRE-img02.jpg"/>
            </section>

            <section class="sobre-content sobre-content-text sobre-content-atu">
                <h2>Áreas de Atuação</h2>
                <p>
                    O profissional de Análise e Desenvolvimento de Sistemas de Informação pode atuar em 
                    empresas de assessoria e consultoria tecnológica e de desenvolvimento de sistemas, 
                    assim como nos diversos setores da economia: indústria, comércio, prestação de serviços, 
                    instituições financeiras, órgãos públicos ou como empreendedor em informática. Este 
                    profissional estará apto a projetar e implementar sistemas de acordo com as necessidades 
                    institucionais, coordenar infraestruturas de tecnologia da informação, elaborando políticas 
                    e diretrizes a partir da análise de necessidades, realizar consultoria em Sistemas de 
                    Informação, avaliando e selecionando recursos de software e hardware, atuar em Centros 
                    de Pesquisa, de Ensino ou de desenvolvimento de software, e empreender seu próprio negócio 
                    em informática.
                </p>
            </section>
          
            <section class="sobre-content sobre-content-obj">
                 <h2>Objetivos do Curso</h2>
                 
                <div class="sobre-content-obj-geral">
                    <h2>Gerais</h2>     
                    
                    <p>
                        Formar profissionais que projetem, implementem e coordenem infraestruturas de tecnologia 
                        da informação, atendendo a necessidade de mudanças provocadas pelas inovações tecnológicas 
                        nas empresas.        
                    </p>
                </div>

                <div class="sobre-content-obj-especifico">
                    <h2>Específicos</h2>
                    <ul>
                        <li>
                            Formar profissionais capazes de analisar problemas e desenvolver soluções para as 
                            organizações, através da modelagem e implementação de sistemas de informação.
                        </li>

                        <li>
                            Formar profissionais com visão interdisciplinar, que busquem o aperfeiçoamento contínuo, 
                            integrando conhecimentos para o desenvolvimento de soluções computacionais adequadas 
                            às organizações.
                        </li>

                        <li>
                            Promover sólida formação técnico científica para o desenvolvimento e gerenciamento de 
                            projetos de sistemas de informação.
                        </li>

                        <li>
                            Estimular o egresso a interagir junto aos problemas sócio tecnológicos da 
                            comunidade e das organizações.
                        </li>

                        <li>
                            Formar profissionais com visão global, humanística e calcada na ética.
                        </li>

                        <li>
                            Incentivar a investigação científica, visando o desenvolvimento da ciência e da tecnologia.
                        </li>
                    </ul>
                    
                </div>
            </section>

            <section class="sobre-content sobre-content-extras">
                <nav class="sobre-content-extras-nav">
                    <ul>
                        <li class="botao-content-dur">Duração</li>
                        <li class="botao-content-vag">Vagas</li>
                        <li class="botao-content-car">Carga Horária</li>
                        <li class="botao-content-coo">Coordenação</li>
                    </ul>
                </nav>

                <div class="sobre-content-extras-text">
                </div>

            </section>

        </div>
    </div>
</asp:Content>
