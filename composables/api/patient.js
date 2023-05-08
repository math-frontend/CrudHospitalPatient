import axios from 'axios'

const listPatients = ref()
const searchListPatients = ref()
const apiUrl = '/api'

function searchPatients ({ name }) {
  const term = name.toLowerCase()

  if (!name) {
    searchListPatients.value = listPatients.value;
  } else {
    const filteredNamePatients = listPatients.value.filter(patient => patient.fullNamePatient.toLowerCase().includes(term));
    const filteredCNSPatients = listPatients.value.filter(patient => patient.cns.toLowerCase().includes(term));
    searchListPatients.value = [...filteredNamePatients, ...filteredCNSPatients];
  }
}

async function getPatients () {
  try {
    const response = await axios.get(`${apiUrl}/patients`)
    listPatients.value = response.data.patients
    searchListPatients.value = response.data.patients;
  } finally {}
}

async function getPatient (index) {
  try {
    const response = await axios.get(`${apiUrl}/patient/${index}`)
    console.log(typeof response.data.patient)
    return response.data.patient
  } finally {}
}

async function addPatient (values){
  const patient = injectData(values)

  try {
    await axios.post(`${apiUrl}/patients`, patient)
    await getPatients()
  } finally {}
}

async function updatePatient (index, values){
  const patient = injectData(values)

  try {
    await axios.post(`${apiUrl}/patients/update/${index}`, patient)
    await getPatients()
  } finally {}
}

async function removePatient (index){
  try {
    await axios.post(`${apiUrl}/patients/remove/${index}`)
    await getPatients()
  } finally {}
}

function injectData (data) {
  return {
    image: data.image,
    fullNamePatient: data.fullNamePatient,
    fullNameMother: data.fullNameMother,
    dateOfBirth: data.dateOfBirth,
    cpf: data.cpf.replace(/[^\w\s]|_/gi, ''),
    cns: data.cns.replace(/[^\w\s]|_/gi, ''),
    address: {
      cep: data.addressCep.replace(/[^\w\s]|_/gi, ''),
      state: data.addressState,
      city: data.addressCity,
      neighborhood: data.addressNeighborhood,
      complement: data.addressComplement,
      number: data.addressNumber
    }
  }

}

export {
  listPatients,
  searchListPatients,
  searchPatients,
  getPatients,
  getPatient,
  addPatient,
  updatePatient,
  removePatient
}