
const validateEmpty = (title: any, author: any, country: any, Isbn: any, price: any, year: any, thumbnailUrl: any, gender: any) => {
    if (!title || !author || !country || !Isbn || !price || !year || !thumbnailUrl || !gender) {
        alert('누락된 부분이 있습니다!');
        return;
    }
}

export {validateEmpty};