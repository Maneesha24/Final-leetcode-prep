/**
 * @author maneesha venigalla
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address. A defanged IP address replaces every period "." with "[.]".
 * @param {string} address is the input IP address 
 * @return {string} is the defanged IP address
 */
 const defangIPaddr = (address) => {

    return address.replace(/\./g, "[.]");
}

module.exports = defangIPaddr;