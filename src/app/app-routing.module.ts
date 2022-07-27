import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AtuanComponent } from './components/atuan/atuan.component';
import { DbhComponent } from './components/dbh/dbh.component';
import { GateComponent } from './components/gate/gate.component';
import { KdoComponent } from './components/kdo/kdo.component';
import { MbinComponent } from './components/mbin/mbin.component';
import { TbickComponent } from './components/tbick/tbick.component';
import { TnamComponent } from './components/tnam/tnam.component';
import { TsexComponent } from './components/tsex/tsex.component';

const routes: Routes = [
  {path:'',component:AboutUsComponent},
  {path:'kdo',component:KdoComponent},
  {path:'atuan',component:AtuanComponent},
  {path:'tsex',component:TsexComponent},
  {path:'gate',component:GateComponent},
  {path:'tnam',component:TnamComponent},
  {path:'mbin',component:MbinComponent},
  {path:'dbh',component:DbhComponent},
  {path:'tbick',component:TbickComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
