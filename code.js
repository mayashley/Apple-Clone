const menu = document.getElementById("hamburgermenu");

function openMenu() {
  menu.style.display = "flex";
}
function closeMenu() {
  menu.style.display = "none";
}

// reduced menu items below

let shopOpen = false;
let serviceOpen = false;
let accountOpen = false;
let storeOpen = false;
let businessOpen = false;
let eduOpen = false;
let healthOpen = false;
let govOpen = false;
let valuesOpen = false;
let aboutOpen = false;

function toggleList(listId) {
  const menuList = document.getElementById(listId);
  const openValue = getState(listId);
  if (openValue) {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "flex";
  }
  shopOpen = !shopOpen;
  console.log(listId);
}
function getState() {
  switch (true) {
    case "shopItems":
      return shopOpen;
    case "serviceItems":
        return serviceOpen;
        case "accountItems":
            return accountOpen;
            case "storeItems":
                return storeOpen;
                case "businessItems":
                    return businessOpen;
                    case "eduItems":
                        return eduOpen;
                        case "healthItems":
                            return healthOpen;
                            case "govItems":
                                return govOpen;
                                case "valuesItems":
                                    return valuesOpen;
                                    case "aboutItems":
                                        return aboutOpen;
  }
}
function toggleState() {}
