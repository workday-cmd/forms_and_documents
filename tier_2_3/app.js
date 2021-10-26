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
        "link": "https://thermofisher.sharepoint.com/sites/HRTechnologyServices575/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FHRTechnologyServices575%2FShared%20Documents%2FWorkday%20%2D%20Total%20Rewards%20Team&FolderCTID=0x012000089CC8B4694EA34C8C7AB74E9AC4623E",
        "description": "Documentation in Funtional team channel in teams"
      },
      {
        "title": "HRTS tier 2&3 support (questions and answers)",
        "link": "https://thermofisher.sharepoint.com/sites/HRTSTier23Support/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FHRTSTier23Support%2FShared%20Documents%2FQueastions%20and%20Answers&FolderCTID=0x012000319F5CE85BA6EB499503676A28D842AD",
        "description": "Documentation in HRTS tier 2&3 support channel in teams"
      },
      {
        "title": "HR technology Services/HR P&O",
        "link": "https://thermofisher.sharepoint.com/sites/HRTechnologyServices575/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FHRTechnologyServices575%2FShared%20Documents%2FGeneral&FolderCTID=0x012000089CC8B4694EA34C8C7AB74E9AC4623E",
        "description": "Documentation in HR technology Services/HR P&O channel in teams"
      },
      {
        "title": "Work instructions",
        "link": "https://thermofisher.sharepoint.com/sites/HRTechnologyServices575/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FHRTechnologyServices575%2FShared%20Documents%2FGeneral&FolderCTID=0x012000089CC8B4694EA34C8C7AB74E9AC4623E",
        "description": "Documentation in Work instructions channel in teams"
      },
      {
        "title": "HRTS Learning center",
        "link": "https://thermofisher.sharepoint.com/sites/HRTSLearningSupportTier2Tier3/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2FHRTSLearningSupportTier2Tier3%2FShared%20Documents%2FGeneral&FolderCTID=0x012000EF585E1B500EAB4B94888392F8007B68",
        "description": "Documentation in HRTS Learning center channel in teams"
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
      },
      {
        "title": "Create an HR ticket",
        "link": "https://thermofisherit.service-now.com/nav_to.do?uri=%2Fsn_hr_core_case_creation.do%3Fsysparm_nameofstack%3Dcase_creation%26sysparm_clear_stack%3Dtrue",
        "description": "Creates tickets for HR"
    },
    {
      "title": "Create an IT (incident) ticket",
      "link": "https://thermofisherit.service-now.com/nav_to.do?uri=%2Fincident.do%3Fsys_id%3D-1%26sysparm_query%3Dactive%3Dtrue%26sysparm_stack%3Dincident_list.do%3Fsysparm_query%3Dactive%3Dtrue",
      "description": "Creates incidents for IT service desk"
  }
    ]

    console.log(app.forms)
  }
});