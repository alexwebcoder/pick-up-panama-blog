
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {

    if (document.title === "How Do I Visit the Panama Canal?") {
        document.getElementsByTagName('meta')["description"].content = "Follow this guide to Learn everything you need to know to experience the Panama Canal.";
    }
  
    if (document.title === "Is panama safe") {
        document.title = "Is Panama Safe?";
        document.getElementsByTagName('meta')["description"].content = "Learn how to stay safe in Panama. Use the tips in this guide to prevent muggings, avoid bad areas, and more.";
      }
    
    if (document.title === "How do i get around in panama") {
        document.title = "How do I get Around in Panama?"
        document.getElementsByTagName('meta')["description"].content = "Find out the best ways to get around Panama and not overpay for cabs.";
    }

    if (document.title === "Things to do in el cangrejo") {
        document.title = "Things to do in El Cangrejo"
        document.getElementsByTagName('meta')["description"].content = "Discover the best restaurants and activities in El Cangrejo and learn why you should visit.";
    }

    if (document.title === "Pick Up Panama | Learn About Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama answers questions that people have about Panama and provides a resource of Panamanian culture and lifestyle.";
    }

    if (document.title === "About Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "About page";
    }

    if (document.title === "Contact Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Contact Alex at Pick Up Panama.";
    }

    if (document.title === "Panama News Feed") {
        document.getElementsByTagName('meta')["description"].content = "Get the latest news from Panama";
    }
}