import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserFormComponent,  // Import the standalone component instead of declaring it
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with four controls', () => {
    expect(component.userForm.contains('firstName')).toBeTruthy();
    expect(component.userForm.contains('lastName')).toBeTruthy();
    expect(component.userForm.contains('phoneNumber')).toBeTruthy();
    expect(component.userForm.contains('email')).toBeTruthy();
  });

  it('should make firstName control required', () => {
    const control = component.userForm.get('firstName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make lastName control required', () => {
    const control = component.userForm.get('lastName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make phoneNumber valid only if it matches the pattern', () => {
    const control = component.userForm.get('phoneNumber');
    
    control?.setValue('1234567890');  // Valid pattern
    expect(control?.valid).toBeTruthy();
    
    control?.setValue('123');  // Invalid pattern
    expect(control?.valid).toBeFalsy();
  });

  it('should validate email format', () => {
    const control = component.userForm.get('email');
    
    control?.setValue('test@test.com');  // Valid email
    expect(control?.valid).toBeTruthy();
    
    control?.setValue('invalid-email');  // Invalid email
    expect(control?.valid).toBeFalsy();
  });

  it('should navigate to data page on valid form submission', () => {
    const routerSpy = spyOn((<any>component).router, 'navigate');

    component.userForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '1234567890',
      email: 'john@example.com'
    });
    
    component.onSubmit();
    
    expect(routerSpy).toHaveBeenCalledWith(['/data'], {
      state: { userData: component.userForm.value }
    });
  });
});
