# Simple-Env-Config

### A simple module to parse and merge a JSON config file based on the env variable

## Install from NPM
```npm install simple-env-config```

## Use it to parse a config file based on an environment variable

```
envConfig = require("simple-env-config");
const conf = await envConfig("./config/config.json", env);
```
