import i18n from "./../../i18n/i18n"

const getArrayAdmin = (navigateForm, navigateTable) => {
  const buttonsArrayUsers = [
    {
      navigate: navigateForm,
      ButtonContent: i18n.navBar.buttonForm
    },
    {
      navigate: navigateTable,
      ButtonContent: i18n.navBar.buttonTable
    },
  ]
 return buttonsArrayUsers;
}

const getArrayBill = (navigateBillsForm, navigateBillsTable) => {
  const buttonsArrayBills= [
    {
      navigate: navigateBillsForm,
      ButtonContent: i18n.navBar.buttonForm
    },
    {
      navigate: navigateBillsTable,
      ButtonContent: i18n.navBar.buttonTable
    }
  ]
 return buttonsArrayBills;
}

const getArrayReports = (navigateReportRevenue) => {
  const buttonsArrayReports= [
    {
      navigate: navigateReportRevenue,
      ButtonContent: i18n.navBar.buttonReportRevenue
    }
  ]
 return buttonsArrayReports;
}

const getArrayOptions = (navigateSystem, navigateLogin) => {
  const buttonsArrayOptions= [
    {
      navigate: navigateSystem,
      ButtonContent: i18n.navBar.buttonSystemParameters
    },
    {
      navigate: navigateLogin,
      ButtonContent: i18n.navBar.buttonExit
    },
  ]
 return buttonsArrayOptions;
}

const arrayBuilder = {
  getArrayAdmin,
  getArrayBill,
  getArrayReports,
  getArrayOptions
}

export default arrayBuilder
