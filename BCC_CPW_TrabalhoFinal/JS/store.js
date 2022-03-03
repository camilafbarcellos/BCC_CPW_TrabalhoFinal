var ambrosia, arco, bone, capacete, cinto, escudo, espada, flechas, garrafa, lanca, mochila, multivitaminas, peitoral, sapatos;
var ticket;

function enviar() {
    ticket = document.querySelector("#ticket").value;

    ambrosia = document.querySelector("#ambrosia").value;
    arco = document.querySelector("#arco").value;
    bone = document.querySelector("#bone").value;
    capacete = document.querySelector("#capacete").value;
    cinto = document.querySelector("#cinto").value;
    escudo = document.querySelector("#escudo").value;
    espada = document.querySelector("#espada").value;
    flechas = document.querySelector("#flechas").value;
    garrafa = document.querySelector("#garrafa").value;
    lanca = document.querySelector("#lanca").value;
    mochila = document.querySelector("#ambrosia").value;
    multivitaminas = document.querySelector("#arco").value;
    peitoral = document.querySelector("#bone").value;
    sapatos = document.querySelector("#sapatos").value;

    ambrosia = ambrosia*24;
    arco = arco*48;
    bone = bone*164;
    capacete = capacete*32;
    cinto = cinto*28;
    escudo = escudo*30;
    espada = espada*44;
    flechas = flechas*18;
    garrafa = garrafa*28;
    lanca = lanca*42;
    mochila = mochila*20;
    multivitaminas = multivitaminas*12;
    peitoral = peitoral*50;
    sapatos = sapatos*158;

    if((ambrosia+arco+bone+capacete+cinto+escudo+espada+flechas+garrafa+lanca+mochila+multivitaminas+peitoral+sapatos)==0) {
        alert(
            "==========================================="+
            "\nERRO"+
            "\n==========================================="+
            "\nSelecione ao menos um (1) item para realizar a compra!"
            );
    }

    else if(ticket!=0 && ticket>10000000) {
        alert(
            "==========================================="+
            "\nPEDIDO ENVIADO COM SUCESSO!"+
            "\n==========================================="+
            "\n"+(ambrosia/24)+"x Ambrosia (500g)"+
            "\n"+(arco/48)+"x Arco"+
            "\n"+(bone/164)+"x Boné dos Yankees da invisibilidade"+
            "\n"+(capacete/32)+"x Capacete"+
            "\n"+(cinto/28)+"x Cinto de ferramentas"+
            "\n"+(escudo/30)+"x Escudo"+
            "\n"+(espada/44)+"x Espada"+
            "\n"+(flechas/18)+"x Flechas (25un)"+
            "\n"+(garrafa/28)+"x Garrafa térmica"+
            "\n"+(lanca/42)+"x Lança"+
            "\n"+(mochila/20)+"x Mochila (35L)"+
            "\n"+(multivitaminas/12)+"x Multivitaminas"+
            "\n"+(peitoral/50)+"x Peitoral"+
            "\n"+(sapatos/158)+"x Sapatos alados"+
            "\n==========================================="+
            "\nSemideus portador do ticket: SD"+ticket+
            "\nValor total: "+
            (ambrosia+arco+bone+capacete+cinto+escudo+espada+flechas+garrafa+lanca+mochila+multivitaminas+peitoral+sapatos)+
            " dracmas"+
            "\n==========================================="+
            "\nEntrega instantânea! Confira o correio do seu Acampamento e resgate seus itens"
        );
    }

    else {
        alert(
            "==========================================="+
            "\nERRO"+
            "\n==========================================="+
            "\nA apresentação de um ticket de cadastro válido é OBRIGATÓRIA para a realização de compras no site!");
    }

}
