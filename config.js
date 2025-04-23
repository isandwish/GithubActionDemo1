const crypto = require('crypto');
let crypto_orig_createHash = crypto.createHash;
crypto_orig_createHash = algorithm => crypto_orig_createHash(algorithm == 'md4' ? 'sha256' : algorithm);