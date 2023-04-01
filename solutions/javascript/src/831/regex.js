const reg_isEmail = /(.+)(@.+\..+)/

/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  // 其实本题中可以用是否包含@来判断
  let emailMatchRes = s.match(reg_isEmail)
  if (emailMatchRes) {
    let name = emailMatchRes[1].toLocaleLowerCase()
    let domain = emailMatchRes[2].toLocaleLowerCase()
    return `${name[0]}*****${name[name.length - 1]}${domain}`
  } else {
    let pureNumbers = s.replaceAll(/[^0-9]/g, '')
    let res = `***-***-${pureNumbers.slice(pureNumbers.length - 4)}`
    if (pureNumbers.length > 10) {
      res = `+${'*'.repeat(pureNumbers.length - 10)}-${res}`
    }
    return res;
  }
};
