import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User {
  username: string;
  password: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  public autenticado: boolean = false;
  public rol: string = '';
  public username: string = ''; // Agrega la propiedad username
  private local!: Storage;

  constructor(
     private router: Router,
     private storage: Storage) {
      
    this.init(); // variable inicializadora
  }


  
  async init() {
    const storage = await this.storage.create();
    this.local = storage;

    //GUARDADO DE CREDENCIALES DISPONIBLES EN EL LOGIN

    const users: User[] = [

      {
        username: 'pruebatomas@duocuc.cl',
        password: 'pruebatomas123',
        rol: 'alumno',
      },
      {
        username: 'seba.luarte@profesor.duoc.cl',
        password: 'seba123',
        rol: 'profesor',
      },
      {
        username: 'tom.figueroa@duocuc.cl',
        password: 'tomas123',
        rol: 'alumno',
      },
      {
        username: 'tomiifiigueroa1993@duocuc.cl',
        password: 'tomiifiigueroa1834',
        rol: 'alumno',
      },
      {
        username: 'joseriquelme@profesor.duoc.cl',
        password: 'jose123',
        rol: 'profesor',
      },
    ];

    await this.local.set('users', users);
  }


  //FUNCIÓN ASÍNCRONA DE LOGEO

  async login(
    username: string, 
    password: string): Promise<boolean> {

    if (!this.local) {
      return false; // Manejo de error: almacenamiento no inicializado
    }

    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us) => us.username === username && us.password === password);

    if (user) {
      this.autenticado = true;
      this.rol = user.rol; // Asigna el valor del Rol
      this.username = user.username; // Asigna el valor del nombre de usuario

      return true;
    }

    this.autenticado = false;
    return false;
  }



  //LOGOUT DE LA APLICACIÓN

  logout() {
    this.autenticado = false;
    this.rol = '';
    this.router.navigate(['/login']);
  }

  //VERIFICACIÓN DE CORREO GUARDADO ANTERIORMENTE COMO CREDENCIAL DE INGRESO
  async verificarCorreo(correo: string): Promise<boolean> {

    const users: User[] = (await this.local.get('users')) || [];
    const correoExistente = users.some((us) => us.username === correo);
    return correoExistente;

  }
}
