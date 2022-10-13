const btn = document.querySelector('#btn')

    function calcular() {
      var valor1 = document.getElementById('txt1').value;
      valor1.replace(",",".");
      var valor2 = document.getElementById('txt2').value;
      valor2.replace(",",".")
      var valor3 = document.getElementById('txt3').value;
      valor3.replace(",",".")

      var somaCarro = ((valor1 * valor2 / 10.6) + Number(valor3)).toFixed(2).replace(".",",")

      var somaUber = (valor2 * 1.6).toFixed(2).replace(".",",")

      document.getElementById('resultCarro').innerHTML = `O custo total de CARRO é de R$: ${somaCarro}`;

      document.getElementById('resultUber').innerHTML = `O custo total de UBER é R$: ${somaUber}`;
      btn.classList.toggle('ativo')
    }

btn.addEventListener('click', calcular)
