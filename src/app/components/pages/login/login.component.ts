import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textoAnimado: string = '';
  textoOriginal: string = 'Smart.Academy';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.iniciarAnimacao();
  }

  academiaSelecionada: string = 'Askae';
  senhaCorreta: string = '12345678';
  senhaIncorreta: boolean = false;

  fazerLogin() {
    const senhaInput = document.getElementById('password') as HTMLInputElement;
    const senhaInserida = senhaInput.value;

    if (senhaInserida === this.senhaCorreta) {
      this.router.navigate(['/home']);
    } else {
      this.senhaIncorreta = true;
    }
  }

  iniciarAnimacao() {
    let index = 0;
    const interval = setInterval(() => {
      this.textoAnimado = this.textoOriginal.slice(0, index);
      index++;
      if (index > this.textoOriginal.length) {
        clearInterval(interval);
      }
    }, 100); // Velocidade da animação (100ms por caractere)
  }

}
