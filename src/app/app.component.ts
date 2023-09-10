//import để dùng các biến ,fucntion, class, interface,.... từ các module khác
//Modules import one another using a Module Loader.
import { Component } from "@angular/core";
/*
component là các block cấu thành 1  application
  A component includes a TypeScript class with a @Component() decorator ,an HTML template, and styles, 
  1 component phải thuộc về 1 NgModule để có sẵn cho 1 component khác hoặc 1 application khác( liệt kê nó trong declarations của NgModule )
  @Component: ở đây Component trỏ tới 1 function dc gọi ở runtime
*/
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
/*các biến, function, class, v.v. 
  được khai báo trong một mô-đun sẽ không hiển thị bên ngoài mô-đun
  trừ khi dc xuất rõ ràng bằng export forms.*/
/*
  Any declaration (such as a variable, function, class, type alias, or interface) 
  can be exported by adding the "export" keyword.
*/
/**
 * Bất kì file nào chứa import or export đều dc coi là 1 Module
 * Nếu ko có  import or export thì file đó sẽ là  the global scope
 */
export class ComponentRoot {
}
