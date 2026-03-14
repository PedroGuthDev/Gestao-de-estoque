import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundarie() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <section>
            <h2>Produto não encontrado</h2>
          </section>
        );
      case 401:
        return (
          <section>
            <h2>Você não está autoizado a ver essa tela</h2>
          </section>
        );
      case 400:
        return (
          <section>
            <h2>Parece que aldo deu errado na requisição</h2>
          </section>
        );
      case 500:
        return (
          <section>
            <h2>Erro interno no servidor</h2>
          </section>
        );
      default:
        return (
          <section>
            <h2>Erro inesperado</h2>
          </section>
        );
    }
  }
}
