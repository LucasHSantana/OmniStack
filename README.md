# OmniStack
## Projeto Tindev

### Dependências

Para poder executar o projeto é necessário ter as seguintes tecnologias instaladas:
- **Nodejs**
- **Editor de texto**: (Recomendado) Visual Studio Code
- Yarn

### Instalação

Clone o repositório e após isso instale as dependências do projeto através do terminal com o código:
```console
yarn install 
```
Lembrando que é necessário estar na pasta de cada aplicação (backend, frontend, mobile) e rodar o código acima separadamente.

**Exemplo:**
> C:\Projeto\OmniStack\backend> yarn install

### Execução

É necessário rodar cada aplicação separadamente.
- **Servidor:** Entre na pasta backend através do terminal e execute o comando:
```console
yarn dev
```

- **Frontend:** Entre na pasta frontend através do terminal e execute o comando:
```console
yarn start
```

- **Mobile:** Entre na pasta mobile através do terminal e execute o comando:
  - Android:
    - Para evitar erros, rode o comando abaixo antes de executar o aplicativo:
    ```console   
    adb reverse tcp:3333 tcp:3333
    ```
  ```console
  react-native run-android
  ```    

  - IOS:
  ```console
  react-native run-ios
  ```

**Para mais informações sobre execução do react native acesse a documentação oficial:** [Documentação React-Native](https://facebook.github.io/react-native/docs/getting-started)


### Licença

Este projeto está licenciado sob a MIT License - Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes
