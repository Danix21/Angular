import { CursoFeatureModule } from './curso-feature.module';

describe('CursoFeatureModule', () => {
  let cursoFeatureModule: CursoFeatureModule;

  beforeEach(() => {
    cursoFeatureModule = new CursoFeatureModule();
  });

  it('should create an instance', () => {
    expect(cursoFeatureModule).toBeTruthy();
  });
});
