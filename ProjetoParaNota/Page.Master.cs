using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace ProjetoParaNota
{
    public partial class Page : System.Web.UI.MasterPage
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["autenticado"] != null)
            {
                LinkLogin.Visible = false;
                LinkLogout.Visible = true;
                LinkUsuarios.Visible = true;
                LinkExcecoes.Visible = true;
                InnerNav.Attributes.CssStyle.Add("display", "flex");
            }

            else {
                LinkLogin.Visible = true;
                LinkLogout.Visible = false;
                LinkUsuarios.Visible = false;
                LinkExcecoes.Visible = false;
                InnerNav.Attributes.CssStyle.Add("display", "none");
            }
        }

        protected void ListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
           

        }
    }
}