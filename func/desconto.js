function calcularDesconto(valor) {
    if (valor <= 0) {
        throw new Error("Valor da compra inválido");
    }

    if (valor < 100) {
        return valor;
    }

    if (valor < 500) {
        return valor * 0.90;
    }

    return valor * 0.80;
}

function classificarCliente(totalCompras) {
    if (totalCompras < 0) {
        throw new Error("Valor inválido");
    }

    if (totalCompras < 1000) {
        return "Bronze";
    }

    if (totalCompras < 5000) {
        return "Prata";
    }

    return "Ouro";
}

module.exports = {
    calcularDesconto,
    classificarCliente
};