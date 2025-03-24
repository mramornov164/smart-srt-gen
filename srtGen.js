const strGen = {
  alphabets: {
    ru: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    en: "abcdefghijklmnopqrstuvwxyz",
    digit: "0123456789",
    special: "@#$%^&*()_+-=[]{}|;:,.<>?/`~\"'\\",
  },

  gen: function (pattern, options = "en") {
    
    if(typeof pattern != 'string' || pattern == '')  {
        throw new Error('[SmartSrtGen]: pattern must be a non-empty string');
    }

    const replaсements = {
        '#': this.alphabets.digit,
        '?': this.alphabets[options],
        '@': this.alphabets.special,

    }

    if (!this.alphabets[options]){
        throw new Error(`[SmartSrtGen]: alphabet "${options}" does not exist`);
    }

    let result = pattern.split('');

    for (let i = 0; i < result.length; i++){
        let alphabet = replaсements[result[i]]
        if (replaсements[result[i]]) {
            let randomIndex = Math.floor(Math.random() * alphabet.length);
            result[i] = alphabet[randomIndex]
        }
    }

    return result.join("");
  },
};

export default strGen;