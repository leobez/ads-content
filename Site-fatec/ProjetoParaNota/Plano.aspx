<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="Plano.aspx.cs" Inherits="ProjetoParaNota.Plano" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="plano-layout">
        <div class="plano-content">
            <!-- Cálculo -->
            <div class="plano-content-row">
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-calc.jpg" alt="Alternate Text" />
                </div>
                <div class="plano-content-txt plano-content-txt1">
                    <h2>Cálculo</h2>
                    <p>
                        A disciplina de Cálculo ministrada pelo professor Sérgio Luiz Cabrini,
                        é essencial para o curso, pois as operações aritméticas fazem parte de rotinas indispensáveis
                        dentro da programação.
                    </p>
                    <p>
                        Durante as aulas conseguimos entender aplicações práticas dos cálculos, entendendo de fato
                        a lógica das resoluções e consequentemente aprendendo a matemática para a vida e não apenas
                        para nota!
                    </p>
                </div>
            </div>
            
            <!-- Ling Prog I -->
            <div class="plano-content-row resp-reverse">
                <div class="plano-content-txt plano-content-txt2">
                    <h2 style="text-align: right;">Linguagem de Programação I</h2>
                    <p>
                        Uma das disciplinas que podemos considerar a base do curso, ministrada pelo coordenador
                        Antonio Alfredo Lacerda, mais conhecido como Toni.
                    </p>
                    <p>
                        Nas aulas que são focadas na linguagem de programação C, colocamos de fato a mão na massa 
                        resolvendo problemas propostos pelo professor, utilizando argumentos e funções da linguagem.
                    </p>
                </div>
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-lp1.jpg" alt="Alternate Text" />
                </div>
            </div>
            
            <!-- Ling Prog II -->
            <div class="plano-content-row">
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-lp2.jpg" alt="Alternate Text" />
                </div>
                <div class="plano-content-txt plano-content-txt1">
                    <h2>Linguagem de Programação II</h2>
                    <p>
                        Disciplina ministrada pelo professor Diógenes de Oliveira, de grande importância para a base
                        curricular.
                    </p>
                    <p>
                        Durante as aulas desenvolvemos projetos para a web através do Visual Studio, utilizando elementos de
                        HTML, CSS e C#.
                        Para os alunos que pretendem focar no desenvolvimento web, seja front-end, back-end ou full-stack, essa
                        matéria é essencial!
                    </p>
                </div>
            </div>
            
            <!-- Sistemas de Operacionais I -->
            <div class="plano-content-row resp-reverse">
                <div class="plano-content-txt plano-content-txt2">
                    <h2 style="text-align: right;">Sistemas Operacionais I</h2>
                    <p>
                        Ministrada pelo professor José Luis Zem, é a matéria em que estudamos a fundo os
                        sistemas operacionais.
                    </p>
                    <p>
                        Nas aulas o professor aborda tanto a teoria quanto a prática do sistema Linux na distribuição Slax,
                         através de máquinas virtuais, onde aprendemos a realizar toda a configuração, instalação e o uso de fato
                        do sistema criado.
                    </p>

                </div>
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-soi.jpg" alt="Alternate Text" />
                </div>
            </div>
            
            <!-- Laboratório de Hardware -->
            <div class="plano-content-row">
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-hdwr.jpg" alt="Alternate Text" />
                </div>
                <div class="plano-content-txt plano-content-txt1">
                    <h2>Laboratório de Hardware</h2>
                    <p>Disciplina ministrada pelo professor Anderson Rodrigo Rossi.</p>
                    <p>
                        Nas aulas aprendemos sobre toda a composição de um computador e a função de cada elemento
                        dentro do contexto da computação.
                        Os temas são abordados com muitos detalhes para que possamos entender as melhorias 
                        dos componentes e nos prepararmos para a constante evolução que ocorre na área da tecnologia.
                    </p>
                </div>
            </div>
            
            <!-- Engenharia de Software I-->
            <div class="plano-content-row resp-reverse">
                <div class="plano-content-txt plano-content-txt2">
                    <h2 style="text-align: right;">Engenharia de Software I</h2>
                    <p>
                        Ministrada pelo professor Lucas Serafim Parizotto, é a disciplina que estudamos sobre
                        a estrutura de um projeto de software.
                    </p>
                    <p>
                        Nas aulas o professor aborda as metodologias que podem ser utilizadas no desenvolvimento de um software,
                        essas metodologias determinam como o time responsável vai trabalhar para cumprir a demanda.
                    </p>
                </div>
                <div class="plano-content-img">
                    <img src="Imagens/PLANO-engsoft.jpg" alt="Alternate Text" />
                </div>
            </div>
        </div>
    </div>
</asp:Content>
