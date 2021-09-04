import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OEsquadraoSuicidaPage } from './o-esquadrao-suicida.page';

describe('OEsquadraoSuicidaPage', () => {
  let component: OEsquadraoSuicidaPage;
  let fixture: ComponentFixture<OEsquadraoSuicidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OEsquadraoSuicidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OEsquadraoSuicidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
