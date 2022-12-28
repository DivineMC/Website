# DivineMC Website ![Build Status](https://img.shields.io/github/actions/workflow/status/DivineMC/Website/build.yml?branch=main&logo=github) [![Netlify Status](https://api.netlify.com/api/v1/badges/ad7179d7-d6b8-4b61-80b4-292949cf3500/deploy-status)](https://app.netlify.com/sites/divinemc/deploys) ![License](https://img.shields.io/github/license/DivineMC/Website)

# Getting Started

How to get DivineMC Website running on your local machine for development.

### Prerequisites

- [node](https://nodejs.org)
- [npm](https://www.npmjs.com/)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
$ git clone https://github.com/DivineMC/Website
```

2. Install all required dependencies.

```bash
$ npm install
```

3. Start the development server

```bash
$ npm start
```

This will start a local development server and open a browser window. The majority of changes will
be instantly reflected live without the need to restart the development server or reload the page in
your browser. Edit away!

### Building

```bash
$ npm run build
```

This command builds a production-ready deployment into the `build` directory. These files are ready
to be hosted on any static content server.
