<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="ExibirExcecoes.aspx.cs" Inherits="ProjetoParaNota.ExibirExcecoes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="excecoes-layout">
        <h1>Exceções da Aplicação</h1>
        <br />
        <br />
        <hr />
        <br />
        <asp:Panel ID="Panel1" Width="100%" Height="500px" ScrollBars="Vertical" runat="server">
            <asp:Label ID="Excecoes" runat="server" Text="Label"></asp:Label>
        </asp:Panel>
        <br />
        <asp:Button ID="Clear" OnClick="Clear_Click" runat="server" Text="Limpar" />


    </div>
</asp:Content>
