document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("preferencia");
    const rangeValue = document.getElementById("range-value");

    rangeInput.addEventListener("input", function () {
        rangeValue.textContent = rangeInput.value;
    });
});

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("reserva-form").addEventListener("submit", function (event) {
        const codigoInput = document.getElementById("codigo").value;
        const regexCodigo = /^[A-Za-z]{4}\d{2}$/;

        if (codigoInput && !regexCodigo.test(codigoInput)) {
            const fallbackMessage = "Código promocional inválido! Use 4 letras seguidas de 2 números (Ex: ARAB10).";
            const i18nMessage = window.__appI18n?.alerts?.invalidCode;
            alert(i18nMessage || fallbackMessage);
            event.preventDefault();
        }
    });
});
