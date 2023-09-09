import "./App.css";
//d = this.English().at(0)
export class Words {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  Armenian() {
    return [
      (this.a = <span>ՈՒսանողական դասացուցակ</span>),
      (this.b = <span>ՈՒսուցչական դասացուցակ</span>),
      (this.c = (
        <p>
          <span>Հայերեն</span>
          <span>Ռուսերեն</span>
          <span>Անգլերեն</span>
        </p>
      )),
    ];
  }
  English() {
    return [
      (this.a = <span>Student time table</span>),
      (this.b = <span>teacher time table</span>),
      (this.c = (
        <p>
          <span>Armenian</span>
          <span>Russian</span>
          <span>English</span>
        </p>
      )),
    ];
  }
  Russian() {
    return [
      (this.a = <span>студент расписание уроков</span>),
      (this.b = <span>Учителя расписание уроков</span>),
      (this.c = (
        <p>
          <span>Армянский</span>
          <span>Русский</span>
          <span>Английский</span>
        </p>
      )),
    ];
  }
}
