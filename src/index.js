import kuromoji from 'kuromoji';

window.buildTokenizer = function(callback) {
	kuromoji.builder({ dicPath: './dict' }).build(function(err, tokenizer) {
    if (err) {
      console.error(err);
      return;
    }
    window.tokenizer = tokenizer;
    if (callback) callback(tokenizer);
  });
};