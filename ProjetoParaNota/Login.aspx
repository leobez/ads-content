<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ProjetoParaNota.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="login-layout">
        <div class="box">
            <h2>LOGIN</h2>
            <br />
            <asp:Label ID="Mensagem" runat="server" ForeColor="red">
            </asp:Label>
            <br />
            <label>Nome de acesso</label>
            <asp:TextBox ID="NomeAcesso" runat="server"></asp:TextBox>
            <label>Senha</label>
            <asp:TextBox ID="Senha" TextMode="Password" runat="server"></asp:TextBox>
            <br />
            <asp:Button ID="Entrar" OnClick="Entrar_Click" runat="server" Text="Entrar" />
        </div>
    </div>

</asp:Content>
