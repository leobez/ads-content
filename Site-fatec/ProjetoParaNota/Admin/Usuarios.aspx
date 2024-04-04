<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="Usuarios.aspx.cs" Inherits="ProjetoParaNota.Usuarios" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="usuario-layout">
        <!-- FORMULARIO DE DADOS -->
        <div class="box">
            <h1 style="text-align: center;">Cadastro de usuários</h1>

            <asp:Label ID="Mensagem" runat="server" ForeColor="Red"></asp:Label>
            <br />

            <asp:Label ID="Codigo" runat="server" ForeColor="Red" Font-Size="30px"></asp:Label>

            <br />

            <label>Nome completo: </label>
            <asp:TextBox ID="NomeCompleto" MaxLength="255" runat="server"></asp:TextBox>

            <label>Nome de acesso: </label>
            <asp:TextBox ID="NomeAcesso" MaxLength="255" runat="server"></asp:TextBox>
             
            <label>Senha:  </label>
            <asp:TextBox ID="Senha" MaxLength="255" runat="server"></asp:TextBox>

            <br />

            <asp:Button ID="Salvar" runat="server" Text="Salvar" OnClick="Salvar_Click"/>

            <asp:Button ID="Excluir" runat="server" Text="Excluir" CssClass="button-delete" Visible="false" OnClick="Excluir_Click" />
        </div>

        <!-- EXIBIR OS USUARIOS-->
        <div class="box box-users" style="padding: 5px;">
            <asp:GridView ID="ExibirUsuarios" Width="100%" OnSelectedIndexChanged="ExibirUsuarios_SelectedIndexChanged" AutoGenerateSelectButton="true" BorderColor="#c0c0c0" runat="server" HeaderStyle-BackColor="#CCCCCC" HeaderStyle-ForeColor="Black"></asp:GridView>
        </div>

    </div>
</asp:Content>
