using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

// PACOTE COM AS CLASSES PARA ENVIAR EMAIL
using System.Net.Mail;
using System.Net;
using ADS2022M;


namespace ProjetoParaNota
{
    public partial class Institucional : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Enviar_Click(object sender, EventArgs e)
        {

            try
            {
                //1. VALIDAR OS DADOS DIGITADOS
                if (Mensagem.Text.Trim() == "")
                {
                    Msg.Text = "Digite a mensagem";
                }
                else if (Nome.Text.Trim() == "")
                {
                    Msg.Text = "Digite seu nome";
                }
                else if (Email.Text.Trim() == "")
                {
                    Msg.Text = "Digite seu email";
                }
                else
                {
                    //2. CRIAR O EMAIL
                    //INSTANCIAR: CRIAR UMA CÓPIA DA CLASSE NA MEMÓRIA DO SERVER
                    MailMessage mail = new MailMessage();
                    mail.To.Add("contato@seudominio.com");
                    MailAddress from = new MailAddress("contato@seudominio.com");
                    mail.From = from;
                    mail.Subject = "Email enviado pelo form de contato";
                    mail.IsBodyHtml = false;
                    mail.Body = "Mensagem: " + Mensagem.Text.Trim() + "\n";
                    // += para adicionar ao elemento ja existente no mail.Body
                    mail.Body += "Nome: " + Nome.Text.Trim() + "\n";
                    mail.Body += "Email: " + Email.Text.Trim() + "\n";

                    //3. ENVIAR O EMAIL :: Definir email que irá transmitir o email
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.seudominio.com.br";
                    smtp.Credentials = new NetworkCredential("contato@seudominio.com", "suasenha");
                    smtp.EnableSsl = true;
                    smtp.Send(mail);

                    //4. LIMPAR A MEMÓRIA
                    mail.Dispose();
                    smtp.Dispose();
                }
            }

            catch (Exception ex)
            {
                Msg.Text = "Houve uma falha ao enviar o email";

                ControleExcecoes salvar = new ControleExcecoes();
                salvar.Arquivo = "~/log.txt";
                salvar.SaveException(ex);

            }
        }
    }
}