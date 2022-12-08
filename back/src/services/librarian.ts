import * as bcrypt from 'bcrypt';

import { ILibrarian, LibrarianInfo } from './../types/librarian';
import { ILibrarianModel, librarianModel } from '../db';
import { AppError, errorNames } from '../middlewares';

class LibrarianService {
  constructor(private librarianModel: ILibrarianModel) {}

  public async createLibrarian(
    librarianInfo: LibrarianInfo,
  ): Promise<ILibrarian | null> {
    const isDuplicated = await this.checkEmailDuplicate(librarianInfo.email);
    if (isDuplicated) {
      throw new AppError(
        errorNames.inputError,
        400,
        '해당 Email을 가진 사서 정보가 이미 존재합니다. 다른 Email을 입력해 주세요!',
      );
    }

    const hashedPassword = await bcrypt.hash(librarianInfo.password, 12);
    librarianInfo = { ...librarianInfo, password: hashedPassword };

    const newLibrarian = await this.librarianModel.create(librarianInfo);
    return newLibrarian;
  }

  async getLibrarians(id?: string) {
    if (id) {
      const librarian: ILibrarian | null = await this.librarianModel.findOne(
        id,
      );
      if (!librarian) {
        throw new AppError(
          errorNames.inputError,
          400,
          '해당 ID에 존재하는 사서가 없어요 :( 다시 확인해 주세요!',
        );
      }
      return librarian;
    }
    const librarians: ILibrarian[] = await this.librarianModel.findAll();
    return librarians;
  }

  private async checkEmailDuplicate(email: string): Promise<Boolean> {
    const result = await this.librarianModel.checkEmailDuplicate(email);
    return result;
  }
}

const librarianService = new LibrarianService(librarianModel);

export { LibrarianService, librarianService };
