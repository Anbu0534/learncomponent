import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
  })
export class FourthComponent implements OnInit {

  constructor() { }
CountryId:number;
CountryName:string="";
DataList:any=[];
editFlag:boolean=false;
index:number;
  ngOnInit() {
  }
  saveCountry()
  {
    if(this.editFlag==false)
    {
      this.DataList.push({"CountryId":this.CountryId,"CountryName":this.CountryName});
    }
    else
    {
      this.DataList[this.index]={"CountryId":this.CountryId,"CountryName":this.CountryName}
      this.editFlag=false;
    }
        this.CountryName="";
        this.CountryId=null;
  }
  editCountry(i)
  {
    console.log(i);
    console.log(this.DataList);
    this.CountryId=this.DataList[i].CountryId;
    this.CountryName=this.DataList[i].CountryName;
    this.editFlag=true;
    this.index=i;
  }
  deleteCountry(i){
    this.DataList.splice(i,1);
  }

}
