<h1 align="center">
  <img alt="Plant Manager" title="Plant Manager" src="logo.png"/>
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=32B768&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=32B768&labelColor=000000" alt="NLW 05" />
</p>

![cover](capa.png?style=flat)

## 💻 Projeto

Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha.

## 🔖 Features

- [✔] Salva a identificação do usuário no próprio dispositivo;
- [✔] Consome da API os dados e caraterísticas de cada planta;
- [✔] Salva localmente a planta que o usuário possue;
- [✔] Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideal das plantas que o usuário possui;

## 🧪 Tecnologias

- [ ] React NAtive
- [ ] Typescript
- [ ] Expo
- [ ] Expo Local Notifications
- [ ] Async Storage
- [ ] Vector Icons
- [ ] Axios
- [ ] Date Fns
- [ ] Lottie
- [ ] Expo Google Fonts
- [ ] React Navigation Stack e Bottom Tabs
- [ ] React Native Gesture Handler
- [ ] JSON Server

## 🎨 Layout

Você pode visualizar o layout do projeto através [deste link](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate). É necessário ter conta no [Figma](https://figma.com/) para acessá-lo.

## 🚀 Executando o projeto

Utilize **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto e a API fake com o JSON Server.

```cl
expo start
json server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.

```ts
import axios from "axios";

const api = axios.create({
  baseURl: "http://192.168.1.4:3333",
});

export default api;
```

## ♻ Como contribuir

- Faça fork deste repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## 📝 Liçenca

Este projeto está sob liçenca MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<div align="center">
  <small>Desenvolvido com 💜 por José Boné</small>
</div>
