import { Response as Res, Request as Req, NextFunction as Next } from 'express';
import { LibrarianService, librarianService } from '../services';

class LibrarianConctroller {
  constructor(private readonly librarianService: LibrarianService) {}

  createLibrarian = async (req: Req, res: Res, next: Next): Promise<Res> => {
    const librarianInfo = { ...req.body };
    await this.librarianService.createLibrarian(librarianInfo);
    return res.sendStatus(201);
  };

  getLibrarians = async (req: Req, res: Res, next: Next): Promise<Res> => {
    const librarians = await this.librarianService.getLibrarians();
    return res.status(200).json(librarians);
  };

  getLibrarian = async (req: Req, res: Res, next: Next): Promise<Res> => {
    const { id } = req.params;
    const librarian = await this.librarianService.getLibrarians(id);
    return res.status(200).json(librarian);
  };
}

const librarianController = new LibrarianConctroller(librarianService);

export { librarianController };
