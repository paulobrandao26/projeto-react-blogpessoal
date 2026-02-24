import type Tema from "./Tema";
import type UsuarioLogin from "./UsuarioLogin";

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  foto?: string;
  tema: Tema;
  usuario: UsuarioLogin;
}