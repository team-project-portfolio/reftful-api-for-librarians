import { BookState } from "../../interface/interface";

const validateLength = (submitData: any) => {
    const { title, author, country, ISBN, price, year, gender, imageUrl } = submitData;
    if (title.length >= 30 || title.length < 1) {
        throw 'title: 1자 이상 30자 미만으로 작성해 주세요'
    } else if (author.length >= 20 || author.length < 1) {
        throw 'author: 1자 이상 20자 미만으로 작성해 주세요'
    } else if (country.length >= 15 || country.length < 1) {
        throw 'country: 1자 이상 15자 미만으로 작성해 주세요'
    } else if (ISBN.length >= 13 || ISBN.length < 9) {
        throw 'ISBN: 9자 이상 13자 미만으로 작성해 주세요'
    } else if (Number(price) > 30000 || Number(price) < 3000) {
        throw 'price: 3000원 이상 300000원 미만으로 작성해 주세요'
    } else if (Number(year) > 2022 || Number(year) < 1400) {
        throw 'year: 연도는 1400년 위로 2022년 밑으로 작성해 주세요';
    }
    else if (!gender) {
        throw '성별이 존재하지 않습니다'
    }
    else if (!imageUrl) {
        throw '이미지 파일이 존재하지 않습니다';
    }
}

export { validateLength };