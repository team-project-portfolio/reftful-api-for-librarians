interface Book {
    ISBN: string,
    author: string,
    country: string,
    createdAt: string,
    gender: string,
    id: number,
    imageUrl: string,
    price: string,
    title: string,
    updatedAt: string,
    year: string,
}

interface BookState {
    ISBN: string,
    author: string,
    country: string,
    gender: string,
    imageUrl: string,
    price: string,
    title: string,
    year: string,
    id: number
}

interface SingUpData{
    name: string,
    email: string,
    password: string,
    passwordCheck: string,
}


interface Files extends Event {
    files: object
}

export { Book, BookState, Files, SingUpData };