const soap = require('soap');

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, (err, client) => {
if(err){
    console.log(err)
} else {
    // Client
    console.log('Consultando cep...')
    client.consultaCEP({
        cep: '32046100'
    }, (err, res) => {
        console.log(res)
    })
}
});