module.exports = {
  name: "Cliente",
  plural: "Clientes",
  addVO: true,
  // La lista que procesa tu prompt.js [cite: 217]
  voList: "Email,Number,Address", 
  addEvents: true,
  addBoilerplate: true,
  acls: [
    { externalModule: "Sms" },
    { externalModule: "Billing" }
  ]
};