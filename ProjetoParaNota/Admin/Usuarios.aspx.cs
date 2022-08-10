using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using ADS2022M;
// Adicionar a DLL Bin/Source/AppDataBase 4.0 nas referencias do projeto

using AppDatabase;

// Pacote que contem a classe DATATABLE

using System.Data; 

namespace ProjetoParaNota
{
    public partial class Usuarios : System.Web.UI.Page
    {

        // Criar a String de conexão com o Access

        // Referencia -> http://connectionstrings.com

        string conexao = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + HttpContext.Current.Server.MapPath("~/App_Data/DBADSM2022.accdb") + ";Persist Security Info=False;";

        // DECLARAÇÃO DA INSTANCIA DA CLASSE DE TRANSAÇÃO COM O ACCESS.
        OleDBTransaction db = new OleDBTransaction();

        protected void Page_Load(object sender, EventArgs e)
        {

            LoadUsuarios();

        }

        protected void LoadUsuarios()
        {
            string comando = "SELECT Codigo,NomeCompleto,NomeAcesso FROM Usuarios ORDER BY Codigo;";

            DataTable tb = new DataTable();
            db.ConnectionString = conexao;

            // Envia o comando e armazena dentro da DATA TABLE
            // (DataTable) -> Cast. Muda o tipo do resultado da query para o tipo requerido, no caso DataTable
            tb = (DataTable)db.Query(comando);

            // Colocar os dados de tb no gridview: ExibirUsuarios
            ExibirUsuarios.DataSource = tb;
            ExibirUsuarios.DataBind();

            // Liberar os dados da tabela temporaria tb
            tb.Dispose();
        }


        protected void Salvar_Click(object sender, EventArgs e)
        {

            try
            {
                if (NomeCompleto.Text.Trim() == "" || NomeAcesso.Text.Trim() == "" || Senha.Text.Trim() == "")
                {
                    if (NomeCompleto.Text.Trim() == "")
                    {
                        Mensagem.Text = "Insira o nome completo!";
                    }

                    if (NomeAcesso.Text.Trim() == "")
                    {
                        Mensagem.Text = "Insira o nome de acesso!";
                    }

                    if (Senha.Text.Trim() == "")
                    {
                        Mensagem.Text = "Insira a senha!";
                    }
                }

                else if (PossoGravar(NomeAcesso.Text.Trim().ToLower(), Codigo.Text) == false)
                {
                    Mensagem.Text = "Este nome de acesso ja pertence a outro usuario!";
                }
                else
                {
                    if (NomeCompleto.Text.Length > 254 || NomeAcesso.Text.Length > 254 || Senha.Text.Length > 254)
                    {
                        Mensagem.Text = "Algum dos campos excedeu o tamanho permitido";
                    }
                    else
                    {
                        string comando = "";

                        if (Codigo.Text != "")
                        {
                            // UPDATE
                            comando = "UPDATE Usuarios SET NomeCompleto='" + Filter(NomeCompleto.Text.ToLower()) + "',NomeAcesso='" + Filter(NomeAcesso.Text) + "',Senha='" + Filter(Senha.Text) + "' WHERE Codigo=" + Codigo.Text + ";";
                        }

                        else
                        {
                            // INSERT
                            comando = "INSERT INTO Usuarios(NomeCompleto,NomeAcesso,Senha) VALUES('" + Filter(NomeCompleto.Text.ToLower()) + "','" + Filter(NomeAcesso.Text) + "','" + Filter(Senha.Text) + "');";
                        }

                        // CONECTA AO BD E ENVIA O COMANDO. 
                        db.ConnectionString = conexao;
                        db.Query(comando);

                        Mensagem.Text = "DADOS INSERIDOS!";

                        LoadUsuarios();
                        LimparControle();
                    }
                }

            } catch (Exception ex) {

                ControleExcecoes salvar = new ControleExcecoes();
                salvar.Arquivo = "~/log.txt";
                salvar.SaveException(ex);

            }

        }

        /// <summary>
        /// Método para filtra apóstrofos dentro de uma string. Contra SQL injection.
        /// </summary>
        /// <param name="exp"></param>
        /// <returns></returns>
        protected string Filter(String exp)
        {
            return exp.Replace("'", "''").Trim();

        }

        protected void LimparControle()
        {
            NomeAcesso.Text = "";
            NomeCompleto.Text = "";
            Senha.Text = "";
            Mensagem.Text = "";
            Codigo.Text = "";
            Excluir.Visible = false;
            Salvar.Text = "Salvar";
        }

        protected void ExibirUsuarios_SelectedIndexChanged(object sender, EventArgs e)
        {
            Salvar.Text = "Editar";
            Codigo.Text = ExibirUsuarios.SelectedRow.Cells[1].Text;

            string comando = "SELECT * FROM Usuarios WHERE Codigo =" + Codigo.Text + ";";

            DataTable tb = new DataTable();
            db.ConnectionString = conexao;
            tb = (DataTable)db.Query(comando);

            NomeCompleto.Text = tb.Rows[0]["NomeCompleto"].ToString();
            NomeAcesso.Text = tb.Rows[0]["NomeAcesso"].ToString();
            Senha.Text = tb.Rows[0]["Senha"].ToString();

            Excluir.Visible = true;

        }

        protected void Excluir_Click(object sender, EventArgs e)
        {

            // TAREFA: IMPLEMENTAR MÉTODO PARA EXCLUIR REGISTRO SELECIONADO

            Codigo.Text = ExibirUsuarios.SelectedRow.Cells[1].Text;

            string comando = "DELETE * FROM Usuarios WHERE Codigo =" + Codigo.Text + ";";

            db.ConnectionString = conexao;
            db.Query(comando);

            LoadUsuarios();
            LimparControle();

        }

        protected bool PossoGravar(string nomeacesso, string codigo) {

            string comando = "SELECT * FROM Usuarios WHERE NomeAcesso='" + nomeacesso + "';";

            DataTable tb = new DataTable();
            db.ConnectionString = conexao;
            tb = (DataTable)db.Query(comando);

            if (tb.Rows.Count == 0)
            {

                return true;

            }
            else {

                if (tb.Rows[0]["Codigo"].ToString() == codigo)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }


    }
}