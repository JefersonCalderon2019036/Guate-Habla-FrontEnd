export class noticias {
    constructor(
        public _id: string,
        public titulo: String,
        public descripcion: String,
        public fechaCreacion: String,
        public img: String,
        public comentarios: [{
            userIdComentario: string,
            descripcionComentario: String
        }]
    ){}
}