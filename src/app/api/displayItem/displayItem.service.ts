import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';

import { DisplayItem } from './displayItem.model';


@Injectable()
export class DisplayItemService {
  private readonly stagings = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": "No Staging"
    }
  };

  private readonly doorServices = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "4",
      "itemDisplay": "AutoDialer"
    },
    2: <DisplayItem>{
      "itemValue": "3",
      "itemDisplay": "Copper"
    }
  };

  private readonly internalFiberTypes = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Rapid Fiber"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Normal Fiber Riser"
    }
  };

  private readonly jeopardyDescriptions = {
    0: <DisplayItem>{
      "itemValue": "8",
      "itemDisplay": "Building Access"
    },
    1: <DisplayItem>{
      "itemValue": "4",
      "itemDisplay": "Customer Not Ready"
    },
    2: <DisplayItem>{
      "itemValue": "17",
      "itemDisplay": "CXM Issues"
    }
  }

  private readonly jeopardyOwners = {
    0: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Construction"
    },
    1: <DisplayItem>{
      "itemValue": "4",
      "itemDisplay": "Customer"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "ECS"
    }
  }

  private readonly boros = {
    0: <DisplayItem>{
      "itemValue": "NYCX",
      "itemDisplay": "Bronx"
    },
    1: <DisplayItem>{
      "itemValue": "NYCK",
      "itemDisplay": "Brooklyn"
    },
    2: <DisplayItem>{
      "itemValue": "NYCM",
      "itemDisplay": "Manhattan"
    }
  }

  private readonly workTypes = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "HSI"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "NSI"
    }
  }

  private readonly mktgPropRating = {
    0: <DisplayItem>{
      "itemValue": "All",
      "itemDisplay": "All"
    },
    1: <DisplayItem>{
      "itemValue": "P",
      "itemDisplay": "P"
    },
    2: <DisplayItem>{
      "itemValue": "T,P",
      "itemDisplay": "T"
    }
  }

  private readonly months = {
    0: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "January"
    },
    1: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "February"
    },
    2: <DisplayItem>{
      "itemValue": "3",
      "itemDisplay": "March"
    }
  }

  private readonly trackerTypes = {
    0: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Normal"
    },
    1: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Restoration"
    },
    2: <DisplayItem>{
      "itemValue": "3",
      "itemDisplay": "Both"
    }
  }

  private readonly schedulerfind = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": "Address"
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Block Lot #"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Job Number"
    }
  }

  private readonly pathvendor = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Adaron"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Adesta"
    }
  }

  private readonly pathcreaterequired = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Yes"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "No"
    }
  }

  private readonly pathmoldingvendor = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Adesta/Prime"
    },
    2: <DisplayItem>{
      "itemValue": "14",
      "itemDisplay": "Building Providing"
    }
  }

  private readonly pathmoldingstatus = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "N/A"
    },
    2: <DisplayItem>{
      "itemValue": "10",
      "itemDisplay": "MS - MDU ONT Elec work In Progress"
    }
  }

  private readonly deploymentpractice = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Overlay"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Greenfield"
    }
  }

  private readonly pathstatus = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "N/A"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Not Required"
    }
  }

  private readonly pathcreatemethod = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": "Hallway Moldings - Standard"
    },
    1: <DisplayItem>{
      "itemValue": "10",
      "itemDisplay": "Micro Duct - Standard"
    },
    2: <DisplayItem>{
      "itemValue": "11",
      "itemDisplay": "Buried to Exterior Stacked Closets"
    }
  }

  private readonly ecsClasses = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "5",
      "itemDisplay": "CO Fiber Term"
    },
    2: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Backbone"
    }
  }

   private readonly ecsTypes = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Clear Obstruction"
    },
    2: <DisplayItem>{
      "itemValue": "10",
      "itemDisplay": "Fttp Build Conduit"
    }
  }

  private readonly jobStatuses = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": ""
    },
    1: <DisplayItem>{
      "itemValue": "44",
      "itemDisplay": "BDMS CXM EWO"
    },
    2: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Complete"
    }
  }

  private readonly jobDeleteOption = {
    0: <DisplayItem>{
      "itemValue": "0",
      "itemDisplay": "This Record Only"
    },
    1: <DisplayItem>{
      "itemValue": "1",
      "itemDisplay": "Same Block Job"
    },
    2: <DisplayItem>{
      "itemValue": "2",
      "itemDisplay": "Same Special ID"
    }
  }


  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(groupName: string): ResponseObservable<DisplayItem> {
    return this.apiService.get<DisplayItem>("api/applookups/" + groupName);
  }



  @Authorize()
  public getDoorServices(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.doorServices);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.doorServices[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getInternalFiberTypes(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.internalFiberTypes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.internalFiberTypes[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getJeopardDescriptions(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.jeopardyDescriptions);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.jeopardyDescriptions[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getJeopardyOwners(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.jeopardyOwners);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.jeopardyOwners[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getBoros(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.boros);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.boros[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getWorkTypes(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.workTypes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.workTypes[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getMktgPropRatings(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.mktgPropRating);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.mktgPropRating[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getMonths(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.months);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.months[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getTrackerTypes(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.trackerTypes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.trackerTypes[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }


  @Authorize()
  public getSchedulerfinds(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.schedulerfind);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.schedulerfind[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathvendors(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathvendor);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathvendor[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathcreaterequireds(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathcreaterequired);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathcreaterequired[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathmoldingvendors(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathmoldingvendor);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathmoldingvendor[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathmoldingstatus(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathmoldingstatus);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathmoldingstatus[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getDeploymentpractices(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.deploymentpractice);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.deploymentpractice[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathstatuses(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathstatus);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathstatus[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getPathcreatemethods(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.pathcreatemethod);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.pathcreatemethod[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getStagings(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.stagings);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.stagings[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getEcsClasses(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.ecsClasses);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.ecsClasses[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  } 
  
   @Authorize()
  public getEcsTypes(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.ecsTypes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.ecsTypes[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

   @Authorize()
  public getJobStatuses(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.jobStatuses);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.jobStatuses[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }

  @Authorize()
  public getJobDeleteOptions(): ResponseObservable<DisplayItem[]> {
    let t = <DisplayItem[]>[];
    let keys = Object.keys(this.jobDeleteOption);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.jobDeleteOption[keys[i]]);
    }
    return dummy<DisplayItem[]>(t);
  }
}
