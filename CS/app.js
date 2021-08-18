angular.module('hrts',[]).controller('home', function($http) {
  var app = this;
  app.$onInit = function(){
    app.documentLinks = [
      {
        "title": "Service Now Knowledge base",
        "link": "https://thermofisherit.service-now.com/nav_to.do?uri=%2F$knowledge.do%3Fsysparm_type_filter%3Dall%26sysparm_kb%3D81c6bf2b1bbe4410023bff36cc4bcbe3%26sysparm_category%3D4e5f8bc91b734c5024c2b845cc4bcb2e%26browse_type%3Dcategories",
        "description": "Work instructions in Service Now"
      },
      {
        "title": "Workday Functional Team",
        "link": "https://teams.microsoft.com/_#/files/Workday%20Functional%20Team?threadId=19%3A2688b200f2a74ca4beef5ad24a8304b6%40thread.skype&ctx=channel&context=Workday%2520-%2520Total%2520Rewards%2520Team&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FWorkday%2520-%2520Total%2520Rewards%2520Team",
        "description": "Documentation in Funtional team channel in teams"
      },
      {
        "title": "HRTS tier 2&3 support",
        "link": "https://teams.microsoft.com/_#/files/Questions%20and%20Answers?threadId=19%3A8ad22eb44ddb48f5bb6a93c9bf44f3da%40thread.skype&ctx=channel&context=Queastions%2520and%2520Answers&rootfolder=%252Fsites%252FHRTSTier23Support%252FShared%2520Documents%252FQueastions%2520and%2520Answers",
        "description": "Documentation in HRTS tier 2&3 support channel in teams"
      },
      {
        "title": "HR technology Services/HR P&O",
        "link": "https://teams.microsoft.com/_#/files/General?threadId=19%3Adc6eda1e2fc64c19a653da4a7ecbf37d%40thread.skype&ctx=channel&context=General&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FGeneral",
        "description": "Documentation in HR technology Services/HR P&O channel in teams"
      },
      {
        "title": "Work instructions",
        "link": "https://teams.microsoft.com/_#/files/General?threadId=19%3Adc6eda1e2fc64c19a653da4a7ecbf37d%40thread.skype&ctx=channel&context=General&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FGeneral",
        "description": "Documentation in Work instructions channel in teams"
      },
      {
        "title": "Questions and aswers files",
        "link": "https://teams.microsoft.com/_#/files/General?threadId=19%3Adc6eda1e2fc64c19a653da4a7ecbf37d%40thread.skype&ctx=channel&context=General&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FGeneral",
        "description": "Documentation in Questions and aswers channel in teams"
      },
      {
        "title": "HRTS Learning center",
        "link": "https://teams.microsoft.com/_#/files/General?threadId=19%3Adc6eda1e2fc64c19a653da4a7ecbf37d%40thread.skype&ctx=channel&context=General&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FGeneral",
        "description": "Documentation in HRTS Learning center channel in teams"
      },
      {
        "title": "Workday General",
        "link": "https://teams.microsoft.com/_#/files/General?threadId=19%3Adc6eda1e2fc64c19a653da4a7ecbf37d%40thread.skype&ctx=channel&context=General&rootfolder=%252Fsites%252FHRTechnologyServices575%252FShared%2520Documents%252FGeneral",
        "description": "Documentation in Workday General channel in teams"
      },
      {
        "title": "Calendar for PTO",
        "link": "https://thermofisher.sharepoint.com/:x:/r/sites/HRTSTier23Support/_layouts/15/doc2.aspx?sourcedoc=%7BC4DDC2A7-0016-4F99-8E16-0A01CC11AF90%7D&file=PTO%20Calendar%202020.xlsx&action=default&mobileredirect=true&cid=8e828a2a-0d50-4cc3-9bee-e0815ab01f56",
        "description": "PTO Calendar"
      },
      {
        "title": "Pre approved people for OTPs",
        "link": "https://thermofisher.sharepoint.com/:x:/r/sites/HRTSTier23Support/_layouts/15/Doc.aspx?sourcedoc=%7B917ED5E6-27EC-4F12-B613-9DE279616EA6%7D&file=OTP%20pre%20approved%20list.xlsx&action=default&mobileredirect=true&cid=30d4f230-6736-4d38-9ea1-b2bd8c149de8",
        "description": "Pre approved list for OTPs"
      },
    ]

    app.forms = [
      {
        "title": "Delegation Inquiry",
        "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=6f8758b91b1fbf00f204315bcd4bcb16",
        "description": "Delegation Issue, Delegation Process"
      },
      {
          "title": "Workday integration and Enhacement Request",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=ec2486371baf7300f204315bcd4bcbf1",
          "description": "Update Existing Integration, Create New Integration, Create New Workday Enhancement"
      },
      {
          "title": "Workday Mass Upload and Mass Data Change",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=6a5f216f1b237bc4f204315bcd4bcb69",
          "description": "One-time payment (commission, bonuses, other) Other type of mass upload (moving workers, compensation change, termination, other) Reorganization (moving workers to new, renaming and/or inactivating data structures: HR business structures, pay groups, finance (cost centers, finance entities, legal entities, product lines))"
      },
      {
          "title": "Workday System Access Issue",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=a3f2a2601b4c0cd0f204315bcd4bcb3f",
          "description": "Are you a contractor or contingent worker?, Please confirm you attached the screenshot of the entire browser"
      },
      {
          "title": "Workday Worker Data/Configuration Inquiry",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=a3f2a2601b4c0cd0f204315bcd4bcb3f",
          "description": "Business Structure(Group, Division, BU, Sub-BU) Company Cost Center Holiday Calendar Job Profile Location Matrix Organization Nitification from WD (internal use only) Pay GroupPersonal Data Change Product Line Supervisory Organization Supplier WalkMe Workspend Work Shift"
      },
      {
          "title": "Germany SAP-to-Workday Issues",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=8a7eba251bb23380f204315bcd4bcb5c",
          "description": "Administration of Band 11+, Empoyee Status Conversion, Cancel Terminationo/Contract Extension, Employee Data Changes, Wrong or Missing Data in Workday, Workday Access, Transfer from Non-German Entity to ThermoFisher Germany, Transfer from ThermoFisher Germany to Non-German Entity, Other"
      },
      {
          "title": "Workday Security Request",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=d1217f2edb91c810239838ff9d961928",
          "description": "New Workday access, Update existing Workday access, Remove all Workday access, Remove some Workday access, Accees to Test enfironment"
      },
      {
          "title": "Report Request",
          "link": "https://thermofisherit.service-now.com/hr?id=nr_hr_sc_cat_item&sys_id=1e4c7dca1bb7bf00f204315bcd4bcb92",
          "description": "Workday Kenexa"
      }
    ]

    console.log(app.forms)
  }
});