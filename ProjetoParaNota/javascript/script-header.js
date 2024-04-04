const BotaoAbrirMenu = document.querySelector("button.button-menu")

BotaoAbrirMenu.addEventListener("click", () => {
    
    const BODY = document.querySelector("body")

    const DivInner = document.createElement("div")
    DivInner.setAttribute("class", "innerDiv")

    const DivMenu = document.createElement("div")
    DivMenu.setAttribute("class", "menuDiv")

    const BotaoFechar = document.createElement("button")
    BotaoFechar.setAttribute("type", "button")
    BotaoFechar.setAttribute("class", "button-fechar")
    BotaoFechar.textContent = "Fechar"
    BotaoFechar.addEventListener("click", () => {
        BODY.removeChild(DivInner);
    })

    const ButtonArea = document.createElement("div")
    ButtonArea.setAttribute("class", "buttonArea")

    const menuArea = document.createElement("div")
    menuArea.setAttribute("class", "menuArea")

    ButtonArea.append(BotaoFechar)

    const LinkHome = document.createElement("a")
    LinkHome.setAttribute("id", "LinkHome")
    LinkHome.setAttribute("href", '../Default.aspx')
    LinkHome.textContent = "Home";

    const LinkSobre = document.createElement("a")
    LinkSobre.setAttribute("id", "LinkSobre")
    LinkSobre.setAttribute("href", '../Sobre.aspx')
    LinkSobre.textContent = "Sobre";

    const LinkPlano = document.createElement("a")
    LinkPlano.setAttribute("id", "LinkPlano")
    LinkPlano.setAttribute("href", '../Plano.aspx')
    LinkPlano.textContent = "Plano";

    const LinkInstitu = document.createElement("a")
    LinkInstitu.setAttribute("id", "LinkInstitu")
    LinkInstitu.setAttribute("href", '../Institucional.aspx')
    LinkInstitu.textContent = "Institucional";

    // Antes de criar o link para o login verificar o innerNav. 
    // Se este não possuir nenhum filho, siginifica que o login não foi efetuado, caso contrario, 
    // o login foi efetuado.

    const InnerNav = document.querySelector("div.inner-nav")

    if (InnerNav.children.length == 0) {
        const LinkLogin = document.createElement("a")
        LinkLogin.setAttribute("id", "LinkLogin")
        LinkLogin.setAttribute("href", 'Login.aspx')
        LinkLogin.textContent = "Login";

        menuArea.append(LinkHome, LinkSobre, LinkPlano, LinkInstitu, LinkLogin)

    } else {
        const LinkUsuarios = document.createElement("a")
        LinkUsuarios.setAttribute("id", "LinkUsuarios")
        LinkUsuarios.setAttribute("class", "LinkLoginOnly")
        LinkUsuarios.setAttribute("href", '../Admin/Usuarios.aspx')
        LinkUsuarios.textContent = "Usuarios";

        const LinkExcecoes = document.createElement("a")
        LinkExcecoes.setAttribute("id", "LinkExcecoes")
        LinkExcecoes.setAttribute("class", "LinkLoginOnly")
        LinkExcecoes.setAttribute("href", '../Admin/ExibirExcecoes.aspx')
        LinkExcecoes.textContent = "Exce\xE7\xF5es";

        const LinkLogout = document.createElement("a")
        LinkLogout.setAttribute("id", "LinkLogout")
        LinkLogout.setAttribute("class", "LinkSair")
        LinkLogout.setAttribute("href", '../Logout.aspx')
        LinkLogout.textContent = "Sair";

        menuArea.append(LinkHome, LinkSobre, LinkPlano, LinkInstitu, LinkUsuarios, LinkExcecoes, LinkLogout)
    }


    DivMenu.append(ButtonArea, menuArea)
    DivInner.append(DivMenu)

    BODY.append(DivInner)
})