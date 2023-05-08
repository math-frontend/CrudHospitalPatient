import axios from 'axios'

async function getInfoViaCep (value) {
  const number = value.replace(/\D+/g, '')
  try {
    const data = await axios.get(`https://viacep.com.br/ws/${number}/json/`)
    console.log(data)
    return data.data
  } finally {}
}

export {
  getInfoViaCep
}