import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {

      // Correo Existente
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El Usuario ya existe';

      //Contraseña Débil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil';

      //Correo Inválido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo Inválido';

      //Contraseña Incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña Incorrecta';

      //El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:  
        return 'El usuario no existe'
      default:
        return 'Error desconocido';
    }
  }


}
