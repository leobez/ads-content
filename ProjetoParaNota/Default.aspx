<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ProjetoParaNota.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <div class="default-layout">

        <section class="top-image">
            <img src="~/Imagens/DEFAULT-img01.jpg" runat="server" />
        </section>

        <div class="default-layout-content">

            <section class="content-placeholder content-1">
                <h1>SEJA BEM VINDO(A)!</h1>
                <p>
                    Este website se trata de um projeto para o 2º semestre da faculdade de tecnologia (FATEC) de 
                    americana, onde o objetivo é a construção de um website utilizando das ferramentas: HTML, 
                    CSS, JavaScript e C# para o propósito de aprendizado. 
                </p>
                <p>
                    O conteúdo deste site se trata especificamente do curso de Análise e desenvolvimento de 
                    sistemas da FATEC de Americana, onde será tratado diversos tópicos tais como: os objetivos 
                    do curso, plano de ensino e algumas informações extras. 
                    Tais conteúdos podem ser acessados através do cabeçalho da 
                    página ou através das seções a seguir.
                </p>
            </section>

            <section class="content-placeholder content-2">
                <div class="content-image">
                    <a href="~/Sobre.aspx" runat="server">
                        <img src="Imagens/DEFAULT-img02.jpg" runat="server"/>

                        <div class="content-ticket">
                            <p>Sobre</p>
                        </div>
                    </a>
                </div>
                <div class="content-text">
                    <h1>Sobre</h1>
                    <p>
                        Aqui você verá sobre o curso em si. Seus objetivos gerais e especificos, tal como o profissional
                    de ADS, se tratanto de seu perfil profissional e suas áreas de atuação.
                    </p>
                </div>
            </section>

            <section class="content-placeholder content-3">
                <div class="content-image">
                    <a href="Plano.aspx">
                        <img src="~/Imagens/DEFAULT-img03.jpg" runat="server"/>

                        <div class="content-ticket">
                            <p>Plano</p>
                        </div>
                    </a>
                </div>
                <div class="content-text">
                    <h1>Plano</h1>
                    <p>
                        Aqui você verá uma breve descrição acerca de algumas matérias do segundo semestre de Ánalise e 
                    desenvolvimento de sistemas da FATEC de Americana.
                    </p>
                </div>
            </section>

            <section class="content-placeholder content-4">
                <div class="content-image">
                    <a href="Institucional.aspx">
                        <img src="~/Imagens/DEFAULT-img04.jpg" runat="server"/>

                        <div class="content-ticket">
                            <p>Institucional</p>
                        </div>
                    </a>
                </div>
                <div class="content-text">
                    <h1>Institucional</h1>
                    <p>
                        Aqui você verá informações institucionais acerca da FATEC de americana, tal como:
                    Endereço, telefone e Email.
                    </p>
                </div>
            </section>

            
           
            <section class="content-placeholder content-5">
                <div class="content-text">
                    <h1>Login</h1>
                    <p>
                        Para fins de apredizado, esta página também possui conexão com um banco de dados, além de algumas funcionalidades extras tais como visualizar um log de erros da aplicação e adicionar/selecionar/atualizar deletar informações do banco de dados.
                    </p>
                </div>                
            </section>
        </div>
    </div>
</asp:Content>
