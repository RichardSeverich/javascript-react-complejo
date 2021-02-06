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

const getArrayReports = (
  navigateReportUsers, 
  navigateReportResources,
  navigateReportBookings
  ) => {
  const buttonsArrayReports= [
    {
      navigate: navigateReportUsers,
      ButtonContent: i18n.navBar.buttonReportUsers
    },
    {
      navigate: navigateReportResources,
      ButtonContent: i18n.navBar.buttonReportResources
    },
    {
      navigate: navigateReportBookings,
      ButtonContent: i18n.navBar.buttonReportBookings
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
  getArrayReports,
  getArrayOptions
}

export default arrayBuilder
