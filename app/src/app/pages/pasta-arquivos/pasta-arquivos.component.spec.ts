import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaArquivosComponent } from './pasta-arquivos.component';

describe('PastaComponent', () => {
  let component: PastaArquivosComponent;
  let fixture: ComponentFixture<PastaArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastaArquivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
