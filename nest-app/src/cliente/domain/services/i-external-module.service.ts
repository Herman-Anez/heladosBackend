export interface IExternalModuleService {
  /**
   * TODO: Define los métodos que tu dominio necesita.
   * Ejemplo: verify(data: any): Promise<boolean>;
   */
  check(id: string): Promise<boolean>;
}