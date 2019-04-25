# Technical Test server

This is a base server provided for the banking application technical test.

## Development

To start the server, run :
```
yarn build-dev
yarn server
```

## Server endpoints

Currently, the server implements only one endpoint :

### GET /account

Gets the current account balance

Response :
```json
{
  "balance": 1000
}
```
