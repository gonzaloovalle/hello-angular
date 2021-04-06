import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['John Smith', 'E123', 'at@abc.net'];
  info2: string[] = ['Jack Smith', 'E456', 'att@abc.net'];
  info3: string[] = ['Jim Smith', 'E789', 'attt@abc.net'];
  getInfo1(): string[]{
    return this.info1;
  }
  getInfo2(): string[]{
    return this.info2;
  }
  getInfo3(): string[]{
    return this.info3;
  }
  constructor() { }
}
