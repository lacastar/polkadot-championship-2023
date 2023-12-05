# Polkai-api

This is a web application that consists of 3 components:

- Static resources of the [landing page](https://polkai-api.vercel.app/)
- Serverless APIs called by ChatGPT
- REST API OpenAPI descriptor file that must be imported into ChatGPT

The REST API interfaces are invoked during ChatGPT RAG (Retrieveal-Augmented Generation).
Privacy-policy is a requirement of ChatGPT as well.

Initialization

```text
yarn -i
```

It is hosted on Vercel. Install Vercel:

```text
yarn global add vercel
```

Running locally:

```text
vercel dev
```

Publishing:

```text
vercel --prod
```
