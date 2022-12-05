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

interface Files extends Event{
 files: object
}

export { Book ,Files };