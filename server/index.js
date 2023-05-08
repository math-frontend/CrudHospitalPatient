import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      patient: Model,
    },

    seeds(server) {
      server.create("patient", {
        image: '//rickandmortyapi.com/api/character/avatar/1.jpeg',
        fullNamePatient: 'Juliano da silva costa',
        fullNameMother: 'Barbara costa junior',
        dateOfBirth: '09/02/1960',
        cpf: '11111111200',
        cns: '832363743970003',
        address: {
          cep: '28900100',
          state: 'RJ',
          city: 'Arraial',
          neighborhood: 'Jardim olinda',
          complement: 'Perto da padaria',
          number: '12'
        }
      }),
      server.create("patient", {
        image: '//rickandmortyapi.com/api/character/avatar/2.jpeg',
        fullNamePatient: 'Julio da silva costa',
        fullNameMother: 'Barbara costa junior',
        dateOfBirth: '09/02/1960',
        cpf: '11111111200',
        cns: '296302526470018',
        address: {
          cep: '28900100',
          state: 'RJ',
          city: 'Arraial',
          neighborhood: 'Jardim olinda',
          complement: 'Perto da padaria',
          number: '12'
        }
      })
    },

    routes() {
      this.namespace = "api"
      this.get('/patients', 'patient');

      // get patients
      this.get("/patients", (schema) => {
        return schema.patients.all()
      })

      // search patient
      this.get("/patients/search/:name", (schema, request) => {
        let name = request.params.name
        return schema.patients.where({ name })
      })

      // ger patient
      this.get("/patient/:id", (schema, request) => {
        let id = request.params.id
        return schema.patients.find(id)
      })

      // add patient
      this.post("/patients", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.patients.create(attrs)
      })

      // update patient
      this.post("/patients/update/:id", (schema, request) => {
        let id = request.params.id
        let patient = schema.patients.find(id)
        let attrs = JSON.parse(request.requestBody)
        return patient.update(attrs)
      })

      // remove patient
      this.post("/patients/remove/:id", (schema, request) => {
        let id = request.params.id
        let patient = schema.patients.find(id)
        return patient.destroy()
      })

      this.passthrough('https://viacep.com.br/**');
    },
  })

  return server
}