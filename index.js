'use strict';

var ravencore = module.exports;

// module information
ravencore.version = 'v' + require('./package.json').version;
ravencore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ravencore-lib found. ' +
      'Please make sure to require ravencore-lib and check that submodules do' +
      ' not also include their own ravencore-lib dependency.';
    throw new Error(message);
  }
};
//ravencore.versionGuard(global._ravencore);
global._ravencore = ravencore.version;

// crypto
ravencore.crypto = {};
ravencore.crypto.BN = require('./lib/crypto/bn');
ravencore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ravencore.crypto.Hash = require('./lib/crypto/hash');
ravencore.crypto.Random = require('./lib/crypto/random');
ravencore.crypto.Point = require('./lib/crypto/point');
ravencore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ravencore.encoding = {};
ravencore.encoding.Base58 = require('./lib/encoding/base58');
ravencore.encoding.Base58Check = require('./lib/encoding/base58check');
ravencore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ravencore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ravencore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ravencore.util = {};
ravencore.util.buffer = require('./lib/util/buffer');
ravencore.util.js = require('./lib/util/js');
ravencore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ravencore.errors = require('./lib/errors');

// main ravencoin library
ravencore.Address = require('./lib/address');
ravencore.Asset = require('./lib/asset');
ravencore.Block = require('./lib/block');
ravencore.MerkleBlock = require('./lib/block/merkleblock');
ravencore.BlockHeader = require('./lib/block/blockheader');
ravencore.HDPrivateKey = require('./lib/hdprivatekey.js');
ravencore.HDPublicKey = require('./lib/hdpublickey.js');
ravencore.Networks = require('./lib/networks');
ravencore.Opcode = require('./lib/opcode');
ravencore.PrivateKey = require('./lib/privatekey');
ravencore.PublicKey = require('./lib/publickey');
ravencore.Script = require('./lib/script');
ravencore.Transaction = require('./lib/transaction');
ravencore.URI = require('./lib/uri');
ravencore.Unit = require('./lib/unit');

// Insight-related
// use XMLHttpRequest in browser window if available, otherwise use wrapper
// this is to satisfy browser-request which looks for it in global scope
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
if (typeof window !== 'undefined' && typeof window.XMLHttpRequest === 'function') {
  // console.log("XMLHttpRequest is available in window");
} else {
  // console.log("setting XMLHttpRequest in global");
  global.XMLHttpRequest = XMLHttpRequest;
}
ravencore.Insight = require('./lib/insight');

// dependencies, subject to change
ravencore.deps = {};
ravencore.deps.bnjs = require('bn.js');
ravencore.deps.bs58 = require('bs58');
ravencore.deps.Buffer = Buffer;
ravencore.deps.elliptic = require('elliptic');
// this may be undefined -- no x16r available to browser bundle
ravencore.deps.nodeX16r = require('@ravendevkit/node-x16r');
ravencore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ravencore.Transaction.sighash = require('./lib/transaction/sighash');
