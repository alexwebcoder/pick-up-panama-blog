
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {

    if (document.title === "How Do I Visit the Panama Canal?") {
        document.getElementsByTagName('meta')["description"].content = "Follow this guide and have a great visit to the Panama Canal.";
    }
  
    if (document.title === "Is panama safe") {
        document.title = "Is Panama Safe?";
        document.getElementsByTagName('meta')["description"].content = "Use the tips in this guide to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more.";
      }
    
    if (document.title === "How do i get around in panama") {
        document.title = "How do I get Around in Panama?"
        document.getElementsByTagName('meta')["description"].content = "Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."
    }

    if (document.title === "Things to do in el cangrejo") {
        document.title = "Things to do in El Cangrejo"
        document.getElementsByTagName('meta')["description"].content = "Discover the best restaurants and activities in El Cangrejo and learn why it is worth vistiting";
    }

    if (document.title === "Pick Up Panama | Learn About Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama helps solve some of the challenges that come with visiting Panama. It is a resource of visiting information, Panamanian culture and lifestyle.";
    }

    if (document.title === "About Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "About page";
    }

    if (document.title === "Contact Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Alex will respond to any questions you have regarding Pick Up Panama.";
    }

    if (document.title === "Panama News Feed") {
        document.getElementsByTagName('meta')["description"].content = "Read the newsfeed to stay up to date on the latest news from Panama";
    }
}