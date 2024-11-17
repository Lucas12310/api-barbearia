import mongoose from "mongoose"
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect('mongodb+srv://admin:admin@cluter0.jwzgfsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluter0')

const Barbeiro = mongoose.model('Barbeiro',{
    nome: String,
    especialidade: String,
    ativo: Boolean
})

class BarbeiroRepository {
    static async find() {
        const barbeiros = await Barbeiro.find()
        return barbeiros
    }
    static async findId(id) {
        const barbeiros = await Barbeiro.findById(id)
        return barbeiros
    }
    static async create(data) {
        const barbeiro = new Barbeiro({
                    nome: data.nome,
                    especialidade: data.especialidade,
                    ativo: data.ativo
                })
        barbeiro.save()
        return barbeiro
    }

    static async update(id, data) {
        const barbeiro = await Barbeiro.findByIdAndUpdate(id,{
                    nome: data.nome,
                    especialidade: data.especialidade,
                    ativo: data.ativo
                },{
                    new:true //retornar o barbeiro atualizado
                })
                return barbeiro
    }

    static async delete(id) {
        const barbeiro = await Barbeiro.findByIdAndDelete(id)
        return barbeiro
    }
}

export default BarbeiroRepository;
