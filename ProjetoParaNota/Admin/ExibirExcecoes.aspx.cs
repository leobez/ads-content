using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using ADS2022M;

namespace ProjetoParaNota
{
    public partial class ExibirExcecoes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ControleExcecoes controle = new ControleExcecoes();
            controle.Arquivo = "~/log.txt";
            Excecoes.Text = controle.LoadException().Replace("\n", "<br/>");
        }


        protected void Clear_Click(object sender, EventArgs e)
        {
            ControleExcecoes controle = new ControleExcecoes();
            controle.Arquivo = "~/log.txt";
            controle.ClearException();
            Excecoes.Text = "";
        }
    }
}